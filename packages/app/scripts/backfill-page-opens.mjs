#!/usr/bin/env node
// One-off seeding helper: computes a best-guess "opens" annotation for pages that
// don't have any yet, from the same signals generate-sitemap.mjs used to infer
// opens/openedBy before that became a hand-edited header field — (1) pages that
// share an "original URL" (the trigger-less page is the hub, triggered pages are
// what it opens) and (2) a route's directly nested `:param` child in the route
// table. Never touches a page that already has at least one "opens" line, so it's
// safe to re-run after adding new stub pages. Re-run manually:
//   node scripts/backfill-page-opens.mjs
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
    const [, group, path, , , componentPath] = m;
    routes.push({ group, path, componentPath: componentPath ?? null });
  }
  return routes;
}

function parseHandBuiltRoutes() {
  const text = readFileSync(join(srcDir, "router", "index.ts"), "utf8");
  const blockMatch = text.match(/const handBuilt: RouteRecordRaw\[\] = \[([\s\S]*?)\n\];/);
  const block = blockMatch[1];
  const routes = [];
  const entryRe = /path:\s*"([^"]+)",[\s\S]*?component:\s*\(\)\s*=>\s*import\("([^"]+)"\)/g;
  for (const m of block.matchAll(entryRe)) {
    routes.push({ path: m[1], componentPath: m[2] });
  }
  return routes;
}

function buildRouteTable() {
  const generated = parseGeneratedRoutes();
  const handBuilt = parseHandBuiltRoutes();
  const handBuiltPaths = new Set(handBuilt.map((r) => r.path));
  return [
    ...generated.filter((r) => r.componentPath !== null && !handBuiltPaths.has(r.path)),
    ...handBuilt,
  ];
}

function componentPathToFile(componentPath) {
  return join(srcDir, componentPath.replace(/^@\//, ""));
}

function parseHeaderFields(fileText) {
  const devNotesMatch = fileText.match(/const devNotes = `([\s\S]*?)`;/);
  const jsDocMatch = fileText.match(/^<script setup lang="ts">\n\/\*\*\n([\s\S]*?)\n \*\/\n/);
  let body = null;
  if (devNotesMatch) {
    body = devNotesMatch[1];
  } else if (jsDocMatch) {
    body = jsDocMatch[1]
      .split("\n")
      .map((line) => line.replace(/^ \* ?/, ""))
      .join("\n");
  }
  const fields = {};
  const opensRaw = [];
  if (body) {
    const fieldRe = /^(original source|original URL|original trigger|opens|URL)\s*:\s*(.+)$/gm;
    for (const m of body.matchAll(fieldRe)) {
      if (m[1] === "opens") opensRaw.push(m[2].trim());
      else fields[m[1]] = m[2].trim();
    }
  }
  return {
    originalUrl: fields["original URL"] ?? null,
    originalTrigger: fields["original trigger"] ?? null,
    opensRaw,
    hasHeader: body !== null,
  };
}

function normalizeOriginalUrl(url) {
  if (!url) return null;
  try {
    return new URL(url).pathname.replace(/\/+$/, "") || "/";
  } catch {
    return url;
  }
}

const routeTable = buildRouteTable();
const pages = routeTable.map((route) => {
  const file = componentPathToFile(route.componentPath);
  const text = readFileSync(file, "utf8");
  return { ...route, file, text, ...parseHeaderFields(text) };
});

const computedOpens = new Map(pages.map((p) => [p.path, new Set()]));

// Heuristic 1: shared "original URL" — trigger-less page opens triggered ones.
const byOriginalUrl = new Map();
for (const p of pages) {
  const key = normalizeOriginalUrl(p.originalUrl);
  if (!key) continue;
  if (!byOriginalUrl.has(key)) byOriginalUrl.set(key, []);
  byOriginalUrl.get(key).push(p);
}
for (const group of byOriginalUrl.values()) {
  if (group.length < 2) continue;
  const hubs = group.filter((p) => !p.originalTrigger);
  const children = group.filter((p) => p.originalTrigger);
  for (const hub of hubs) {
    for (const child of children) {
      if (hub.path === child.path) continue;
      computedOpens.get(hub.path).add(child.path);
    }
  }
}

// Heuristic 2: path-hierarchy fallback.
for (const p of pages) {
  for (const candidate of pages) {
    if (candidate.path === p.path) continue;
    const suffix = candidate.path.slice(p.path.length);
    if (candidate.path.startsWith(p.path + "/") && /^\/:[^/]+$/.test(suffix)) {
      computedOpens.get(p.path).add(candidate.path);
    }
  }
}

function opensLines(targets) {
  return [...targets].sort((a, b) => a.localeCompare(b)).map((t) => `opens            : ${t}`);
}

let updated = 0;
for (const p of pages) {
  if (!p.hasHeader) continue; // nothing to anchor new lines to
  if (p.opensRaw.length > 0) continue; // never overwrite hand-authored data
  const targets = computedOpens.get(p.path);
  if (!targets || targets.size === 0) continue;

  const lines = opensLines(targets);
  let out = p.text;

  // devNotes template literal: insert right before the closing backtick.
  out = out.replace(/(const devNotes = `[\s\S]*?)(`;)/, (_, body, close) => {
    return `${body}\n${lines.join("\n")}${close}`;
  });

  // JSDoc header: insert right before the closing " */" line.
  out = out.replace(
    /^(<script setup lang="ts">\n\/\*\*\n[\s\S]*?)(\n \*\/\n)/,
    (_, body, close) => {
      return `${body}\n * ${lines.join("\n * ")}${close}`;
    },
  );

  if (out !== p.text) {
    writeFileSync(p.file, out);
    updated++;
  }
}

console.log(`Seeded "opens" annotations in ${updated} page header(s).`);
