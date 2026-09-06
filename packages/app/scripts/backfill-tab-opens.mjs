#!/usr/bin/env node
// Cross-checks each page's "opens" header lines against reality in
// src/lib/subNavTabs.ts: every SubNavTabs group is a set of pages the user can
// jump between via the tab bar, so the group's first (overview/catalog/landing)
// tab should list the rest as "opens". Adds any missing lines (never removes or
// reorders existing ones, so hand-authored opens data survives). Re-run after
// subNavTabs.ts changes:
//   node scripts/backfill-tab-opens.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const appRoot = join(scriptDir, "..");
const srcDir = join(appRoot, "src");

function parseGeneratedRoutes() {
  const text = readFileSync(join(srcDir, "router", "routes.generated.ts"), "utf8");
  const routes = [];
  const entryRe =
    /\{\s*group:\s*"([^"]+)",\s*path:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*component:\s*(null|\(\)\s*=>\s*import\("([^"]+)"\)),?\s*\}/g;
  for (const m of text.matchAll(entryRe)) {
    routes.push({ path: m[2], componentPath: m[5] ?? null });
  }
  return routes;
}

function parseHandBuiltRoutes() {
  const text = readFileSync(join(srcDir, "router", "index.ts"), "utf8");
  const blockMatch = text.match(/const handBuilt: RouteRecordRaw\[\] = \[([\s\S]*?)\n\];/);
  const block = blockMatch[1];
  const routes = [];
  const entryRe = /path:\s*"([^"]+)",[\s\S]*?component:\s*\(\)\s*=>\s*import\("([^"]+)"\)/g;
  for (const m of block.matchAll(entryRe)) routes.push({ path: m[1], componentPath: m[2] });
  return routes;
}

function buildComponentPathByRoute() {
  const generated = parseGeneratedRoutes();
  const handBuilt = parseHandBuiltRoutes();
  const handBuiltPaths = new Set(handBuilt.map((r) => r.path));
  const byPath = new Map();
  for (const r of generated) {
    if (r.componentPath !== null && !handBuiltPaths.has(r.path))
      byPath.set(r.path, r.componentPath);
  }
  for (const r of handBuilt) byPath.set(r.path, r.componentPath);
  return byPath;
}

function componentPathToFile(componentPath) {
  return join(srcDir, componentPath.replace(/^@\//, ""));
}

// Parses subNavTabs.ts's `export function xTabs(param?) { return [ ...{ to: ... }... ]; }`
// groups, converting each `to` template into a generic route path
// (`` `/agents/${agentId}/configuration` `` -> `/agents/:agentId/configuration`).
function parseTabGroups() {
  const text = readFileSync(join(srcDir, "lib", "subNavTabs.ts"), "utf8");
  const groups = [];
  const fnRe = /export function (\w+)\([^)]*\)\s*\{\s*return \[([\s\S]*?)\n\s*\];\s*\}/g;
  for (const fnMatch of text.matchAll(fnRe)) {
    const [, name, body] = fnMatch;
    const paths = [];
    const toRe = /to:\s*(?:"([^"]+)"|`([^`]+)`)/g;
    for (const toMatch of body.matchAll(toRe)) {
      const raw = toMatch[1] ?? toMatch[2];
      paths.push(raw.replace(/\$\{(\w+)\}/g, (_, id) => `:${id}`));
    }
    if (paths.length > 1) groups.push({ name, paths });
  }
  return groups;
}

function readOpensRaw(fileText) {
  const devNotesMatch = fileText.match(/const devNotes = `([\s\S]*?)`;/);
  const jsDocMatch = fileText.match(/^<script setup lang="ts">\n\/\*\*\n([\s\S]*?)\n \*\/\n/);
  let body = null;
  if (devNotesMatch) body = devNotesMatch[1];
  else if (jsDocMatch)
    body = jsDocMatch[1]
      .split("\n")
      .map((line) => line.replace(/^ \* ?/, ""))
      .join("\n");
  if (body === null) return null;
  const opens = [];
  for (const m of body.matchAll(/^opens\s*:\s*(.+)$/gm)) opens.push(m[1].trim());
  return opens;
}

const componentPathByRoute = buildComponentPathByRoute();
const groups = parseTabGroups();

let updated = 0;
let skippedNoRoute = 0;

for (const group of groups) {
  const [hub, ...siblings] = group.paths;
  const componentPath = componentPathByRoute.get(hub);
  if (!componentPath) {
    skippedNoRoute++;
    continue;
  }
  const file = componentPathToFile(componentPath);
  const text = readFileSync(file, "utf8");
  const existingOpens = readOpensRaw(text);
  if (existingOpens === null) continue; // no header to anchor new lines to

  const missing = siblings.filter((s) => s !== hub && !existingOpens.includes(s));
  if (missing.length === 0) continue;

  const newLines = missing.map((t) => `opens            : ${t}`);
  let out = text;
  out = out.replace(
    /(const devNotes = `[\s\S]*?)(`;)/,
    (_, b, close) => `${b}\n${newLines.join("\n")}${close}`,
  );
  out = out.replace(
    /^(<script setup lang="ts">\n\/\*\*\n[\s\S]*?)(\n \*\/\n)/,
    (_, b, close) => `${b}\n * ${newLines.join("\n * ")}${close}`,
  );

  if (out !== text) {
    writeFileSync(file, out);
    console.log(
      `${group.name} (${hub}): added ${missing.length} opens line(s) -> ${missing.join(", ")}`,
    );
    updated++;
  }
}

console.log(
  `Updated ${updated} hub page(s). ${skippedNoRoute} group(s) skipped (hub path not in route table).`,
);
