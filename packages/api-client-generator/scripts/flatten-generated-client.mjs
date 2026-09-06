#!/usr/bin/env node
// @typespec/http-client-js always scaffolds its output as a standalone npm package
// (package.json + tsconfig.json at the emitter-output-dir root, sources under a `src/`
// subdirectory) — that layout is baked into the emitter itself (see its emitter.js:
// PackageDirectory > SourceDirectory("src")), so it can't be turned off via emitter options.
// packages/api-client ships the generated code as plain files under its own `src/generated`,
// not as a nested package, so this promotes `generated/src/*` up to `generated/*` and drops
// the scaffolding (package.json, tsconfig.json, any `dist/` from a stray local build).
import { cpSync, readdirSync, rmSync } from "node:fs";
import { join } from "node:path";

const [, , generatedDir] = process.argv;
if (!generatedDir) {
  console.error("usage: flatten-generated-client.mjs <generated-dir>");
  process.exit(1);
}

const srcDir = join(generatedDir, "src");

for (const entry of readdirSync(srcDir)) {
  cpSync(join(srcDir, entry), join(generatedDir, entry), { recursive: true });
}

rmSync(srcDir, { recursive: true, force: true });
rmSync(join(generatedDir, "package.json"), { force: true });
rmSync(join(generatedDir, "tsconfig.json"), { force: true });
rmSync(join(generatedDir, "dist"), { recursive: true, force: true });
