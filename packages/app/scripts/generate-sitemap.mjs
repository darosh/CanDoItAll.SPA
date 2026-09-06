#!/usr/bin/env node
// Generates SITEMAP.md from data that already exists: the merged route table
// (routes.generated.ts + router/index.ts's hand-built overrides), each page's
// doc-comment header, nav.ts's sidebar entries, and a scan of the sibling .NET
// repo's *.razor `@page` routes. Re-run after routing/page-header changes:
//   pnpm --filter @candoitall/app run sitemap
import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const appRoot = join(scriptDir, "..");
const srcDir = join(appRoot, "src");
const originalRepoRoot = join(appRoot, "..", "..", "..", "CanDoItAll");

const byString = (a, b) => a.localeCompare(b);

// ---------------------------------------------------------------------------
// Step 1: canonical route table (generated routes + hand-built overrides)
// ---------------------------------------------------------------------------

function parseGeneratedRoutes() {
  const text = readFileSync(join(srcDir, "router", "routes.generated.ts"), "utf8");
  const routes = [];
  const entryRe =
    /\{\s*group:\s*"([^"]+)",\s*path:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*component:\s*(null|\(\)\s*=>\s*import\("([^"]+)"\)),?\s*\}/g;
  for (const m of text.matchAll(entryRe)) {
    const [, group, path, title, , componentPath] = m;
    routes.push({ group, path, title, componentPath: componentPath ?? null });
  }
  return routes;
}

function parseHandBuiltRoutes(generatedByPath) {
  const text = readFileSync(join(srcDir, "router", "index.ts"), "utf8");
  const blockMatch = text.match(/const handBuilt: RouteRecordRaw\[\] = \[([\s\S]*?)\n\];/);
  if (!blockMatch) throw new Error("Could not find handBuilt route block in router/index.ts");
  const block = blockMatch[1];

  const routes = [];
  const entryRe =
    /path:\s*"([^"]+)",[\s\S]*?component:\s*\(\)\s*=>\s*import\("([^"]+)"\),[\s\S]*?title:\s*"([^"]+)"/g;
  for (const m of block.matchAll(entryRe)) {
    const [, path, componentPath, title] = m;
    routes.push({
      group: generatedByPath.get(path)?.group ?? "hand-built",
      path,
      title,
      componentPath,
    });
  }
  return routes;
}

function buildRouteTable() {
  const generated = parseGeneratedRoutes();
  const generatedByPath = new Map(generated.map((r) => [r.path, r]));
  const handBuilt = parseHandBuiltRoutes(generatedByPath);
  const handBuiltPaths = new Set(handBuilt.map((r) => r.path));

  const merged = [
    ...generated.filter((r) => r.componentPath !== null && !handBuiltPaths.has(r.path)),
    ...handBuilt,
  ];
  merged.sort((a, b) => a.path.localeCompare(b.path));
  return merged;
}

// ---------------------------------------------------------------------------
// Step 2: parse each page's doc-comment header
// ---------------------------------------------------------------------------

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
      if (m[1] === "opens") {
        opensRaw.push(m[2].trim());
      } else {
        fields[m[1]] = m[2].trim();
      }
    }
  }
  return {
    originalSource: fields["original source"] ?? null,
    originalUrl: fields["original URL"] ?? null,
    originalTrigger: fields["original trigger"] ?? null,
    url: fields["URL"] ?? null,
    opensRaw,
  };
}

function componentPathToFile(componentPath) {
  return join(srcDir, componentPath.replace(/^@\//, ""));
}

function loadPages(routeTable) {
  return routeTable.map((route) => {
    const file = componentPathToFile(route.componentPath);
    const text = readFileSync(file, "utf8");
    const header = parseHeaderFields(text);
    return {
      ...route,
      file: relative(appRoot, file),
      isStub: text.includes("<StubPage"),
      ...header,
    };
  });
}

// ---------------------------------------------------------------------------
// Step 3: opens / openedBy — "opens" comes from the page's own doc header (a
// page may have several "opens" lines), "openedBy" is just that graph inverted.
// ---------------------------------------------------------------------------

function normalizeOriginalUrl(url) {
  if (!url) return null;
  try {
    const u = new URL(url);
    return u.pathname.replace(/\/+$/, "").toLowerCase() || "/";
  } catch {
    return url;
  }
}

function resolveOpensEdges(pages) {
  const knownPaths = new Set(pages.map((p) => p.path));
  const invalidOpens = [];

  for (const p of pages) {
    const targets = new Set();
    for (const raw of p.opensRaw) {
      for (const target of raw.split(",").map((t) => t.trim())) {
        if (!target) continue;
        if (knownPaths.has(target)) {
          targets.add(target);
        } else {
          invalidOpens.push({ from: p.path, target, file: p.file });
        }
      }
    }
    p.opens = [...targets].sort(byString);
    p.openedBy = new Set();
  }

  for (const p of pages) {
    for (const target of p.opens) {
      const targetPage = pages.find((candidate) => candidate.path === target);
      targetPage?.openedBy.add(p.path);
    }
  }
  for (const p of pages) p.openedBy = [...p.openedBy].sort(byString);

  return invalidOpens;
}

// Suggests "opens" annotations that might be missing: a route with a directly
// nested `:param` child that no page's "opens" header actually lists. Purely a
// report hint — never written back to opens/openedBy.
function suggestMissingOpens(pages) {
  const suggestions = [];
  for (const p of pages) {
    for (const candidate of pages) {
      if (candidate.path === p.path) continue;
      const suffix = candidate.path.slice(p.path.length);
      if (
        candidate.path.startsWith(p.path + "/") &&
        /^\/:[^/]+$/.test(suffix) &&
        !p.opens.includes(candidate.path)
      ) {
        suggestions.push({ from: p.path, to: candidate.path, file: p.file });
      }
    }
  }
  return suggestions;
}

// ---------------------------------------------------------------------------
// Step 4: scan the original repo for @page routes
// ---------------------------------------------------------------------------

function walkRazorFiles(dir, out = []) {
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return out;
  }
  for (const entry of entries) {
    if (entry === "bin" || entry === "obj" || entry === "node_modules" || entry.startsWith(".")) {
      continue;
    }
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      walkRazorFiles(full, out);
    } else if (entry.endsWith(".razor")) {
      out.push(full);
    }
  }
  return out;
}

function normalizeBlazorRoute(route) {
  return (
    route
      .replace(/\{([^:}]+)(?::[^}]+)?\}/g, (_, name) => `:${name.toLowerCase()}`)
      .replace(/\/+$/, "") || "/"
  );
}

function scanOriginalRoutes() {
  const files = walkRazorFiles(originalRepoRoot);
  const routes = [];
  const pageRe = /@page\s+"([^"]+)"/g;
  for (const file of files) {
    const text = readFileSync(file, "utf8");
    for (const m of text.matchAll(pageRe)) {
      routes.push({
        route: m[1],
        normalized: normalizeBlazorRoute(m[1]),
        file: relative(originalRepoRoot, file),
      });
    }
  }
  return routes;
}

function findUnportedRoutes(pages) {
  const portedOriginalPaths = new Set(
    pages.map((p) => normalizeOriginalUrl(p.originalUrl)).filter((p) => p !== null),
  );
  const original = scanOriginalRoutes();
  return original.filter((r) => !portedOriginalPaths.has(r.normalized));
}

// ---------------------------------------------------------------------------
// Step 5: nav membership — journey "start" points are literally the sidebar's
// entries, read straight from nav.ts (never hand-duplicated into page headers).
// ---------------------------------------------------------------------------

function loadNavStartGroups() {
  const text = readFileSync(join(srcDir, "router", "nav.ts"), "utf8");
  const startGroupByPath = new Map();

  const groupRe = /\{\s*id:\s*"([^"]+)",\s*label:\s*"[^"]+",\s*items:\s*\[([\s\S]*?)\]\s*,?\s*\}/g;
  for (const m of text.matchAll(groupRe)) {
    const [, groupId, itemsBlock] = m;
    for (const itemMatch of itemsBlock.matchAll(/to:\s*"([^"]+)"/g)) {
      startGroupByPath.set(itemMatch[1], groupId);
    }
  }

  const settingsMatch = text.match(/settingsLink:\s*NavLink\s*=\s*\{[^}]*?to:\s*"([^"]+)"/);
  if (settingsMatch) startGroupByPath.set(settingsMatch[1], "settings");

  return startGroupByPath;
}

// ---------------------------------------------------------------------------
// Step 6: emit SITEMAP.md
// ---------------------------------------------------------------------------

function moduleOf(path) {
  if (path === "/") return "/";
  const segment = path.split("/")[1];
  return `/${segment}`;
}

function nodeId(path) {
  return (
    path
      .replace(/^\//, "")
      .replace(/[^a-zA-Z0-9]+/g, "-")
      .replace(/-+$/, "") || "root"
  );
}

function nodeLabel(page, startGroupByPath) {
  return startGroupByPath.has(page.path) ? `★ ${page.path}` : page.path;
}

function mermaidEdges(pages, filter) {
  const lines = [];
  for (const p of pages) {
    for (const target of p.opens) {
      if (filter && !filter(p.path, target)) continue;
      lines.push(`  ${nodeId(p.path)} --> ${nodeId(target)}`);
    }
  }
  return lines;
}

function buildCombinedFlowchart(pages, startGroupByPath) {
  const modules = [...new Set(pages.map((p) => moduleOf(p.path)))].sort(byString);
  const lines = ["```mermaid", "flowchart LR"];
  for (const mod of modules) {
    lines.push(`  subgraph mod-${nodeId(mod)}["${mod}"]`);
    for (const p of pages.filter((p) => moduleOf(p.path) === mod)) {
      lines.push(`    ${nodeId(p.path)}["${nodeLabel(p, startGroupByPath)}"]`);
    }
    lines.push("  end");
  }
  lines.push(...mermaidEdges(pages));
  lines.push("```");
  return lines.join("\n");
}

function buildPerModuleFlowcharts(pages, startGroupByPath) {
  const modules = [...new Set(pages.map((p) => moduleOf(p.path)))].sort(byString);
  const sections = [];
  for (const mod of modules) {
    const modPages = pages.filter((p) => moduleOf(p.path) === mod);
    const lines = ["```mermaid", "flowchart LR"];
    for (const p of modPages)
      lines.push(`  ${nodeId(p.path)}["${nodeLabel(p, startGroupByPath)}"]`);
    lines.push(...mermaidEdges(pages, (from) => moduleOf(from) === mod));
    lines.push("```");
    sections.push(`### ${mod}\n\n${lines.join("\n")}`);
  }
  return sections.join("\n\n");
}

function escapeCell(value) {
  return (value ?? "").toString().replace(/\|/g, "\\|");
}

function main() {
  const routeTable = buildRouteTable();
  const pages = loadPages(routeTable);
  const invalidOpens = resolveOpensEdges(pages);
  const missingOpensSuggestions = suggestMissingOpens(pages);
  const unported = findUnportedRoutes(pages);
  const startGroupByPath = loadNavStartGroups();

  const stubCount = pages.filter((p) => p.isStub).length;
  const builtCount = pages.length - stubCount;
  const startCount = pages.filter((p) => startGroupByPath.has(p.path)).length;
  const orphans = pages.filter(
    (p) => p.openedBy.length === 0 && !startGroupByPath.has(p.path) && p.path !== "/",
  );

  const tableRows = pages
    .map((p) => {
      const start = startGroupByPath.get(p.path);
      const routeLink = `[${escapeCell(p.path)}](http://localhost:5173${p.path})`;
      const componentLink = `[${escapeCell(p.file.replace(/^src\/pages\//, ""))}](${p.file})`;
      return `| ${routeLink} | ${start ? `★\u00a0${escapeCell(start)}` : ""} | ${escapeCell(p.group)} | ${escapeCell(p.title)} | ${escapeCell(p.opens.join(", "))} | ${escapeCell(p.openedBy.join(", "))} | ${componentLink} | ${p.isStub ? "stub" : "built"} | ${escapeCell(p.originalUrl)} | ${escapeCell(p.originalTrigger)} |`;
    })
    .join("\n");

  const orphanRows = orphans
    .map((p) => `| ${escapeCell(p.path)} | ${escapeCell(p.title)} | ${escapeCell(p.file)} |`)
    .join("\n");

  const unportedRows = unported
    .map((r) => `| ${escapeCell(r.route)} | ${escapeCell(r.file)} |`)
    .join("\n");

  const invalidOpensRows = invalidOpens
    .map((r) => `| ${escapeCell(r.from)} | ${escapeCell(r.target)} | ${escapeCell(r.file)} |`)
    .join("\n");

  const missingOpensRows = missingOpensSuggestions
    .map((r) => `| ${escapeCell(r.from)} | ${escapeCell(r.to)} | ${escapeCell(r.file)} |`)
    .join("\n");

  const out = `<!-- Generated by scripts/generate-sitemap.mjs — do not hand-edit. Re-run with
     \`pnpm --filter @candoitall/app run sitemap\` after routing, page-header, or nav changes. -->

# SITEMAP

## Summary

- Total routes: ${pages.length} (${builtCount} built, ${stubCount} stub)
- Journey starting points (sidebar nav entries, from \`nav.ts\`): ${startCount}
- Orphaned pages (no start point, nothing opens them): ${orphans.length}
- Original (.NET) \`@page\` routes not yet referenced by any page header: ${unported.length}
- Invalid \`opens\` targets (header points at an unknown route): ${invalidOpens.length}

## Routes

\`opens\`/\`opened by\` come from each page's own doc-comment header (\`opens : /path\`,
one line per target — add more \`opens\` lines for a page that opens several kinds of
sub-item). \`Start\` marks a page that's a literal entry in the sidebar (\`nav.ts\`),
tagged with which nav group it belongs to.

| Route | Start | Group | Title | Opens | Opened by | Component | Status | Original URL | Original trigger |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
${tableRows}

## Orphaned pages

Routes with no sidebar entry and nothing else linking to them (candidates to wire up,
annotate with an \`opens\` line on their parent, or remove).

${orphans.length ? `| Route | Title | Component |\n| --- | --- | --- |\n${orphanRows}` : "None."}

## Not yet ported

Original \`@page\` routes with no SPA page whose \`original URL\` header points at them.

${unported.length ? `| Original route | Original file |\n| --- | --- |\n${unportedRows}` : "None — every original route is referenced."}

## Possibly missing \`opens\` annotations

A route with a directly nested \`:param\` child that no page's \`opens\` header lists —
worth a look, may just need an \`opens\` line added.

${missingOpensSuggestions.length ? `| From | To | File |\n| --- | --- | --- |\n${missingOpensRows}` : "None."}

${invalidOpens.length ? `## Invalid \`opens\` targets\n\nA page's \`opens\` header names a path that isn't a known route (typo, or the route\nwas renamed/removed).\n\n| From | Target | File |\n| --- | --- | --- |\n${invalidOpensRows}\n` : ""}
## Flowcharts

★ marks a journey starting point (a sidebar nav entry).

${buildPerModuleFlowcharts(pages, startGroupByPath)}

### All modules

${buildCombinedFlowchart(pages, startGroupByPath)}
`;

  writeFileSync(join(appRoot, "SITEMAP.md"), out);
  console.log(
    `Wrote SITEMAP.md: ${pages.length} routes, ${orphans.length} orphans, ${unported.length} unported, ${invalidOpens.length} invalid opens.`,
  );
}

main();
