#!/usr/bin/env node
// Repairs real bugs in @typespec/http-client-js's emitted client code. Kept as a separate,
// inspectable post-compile step (mirrors prepare-spec.mjs's role on the input side) rather than
// hand-edited into the generated files, since `client:compile` overwrites them on every run.
import { readFileSync, writeFileSync } from "node:fs";

const fixers = [
  {
    name: "falsy-drop",
    // For every optional operation parameter it writes `...(options?.field && {Key: expr})`,
    // which drops the parameter whenever its value is falsy-but-meaningful (`0`, `false`, `""`)
    // instead of only when it's actually absent. This silently breaks filters like
    // `status: PromptStatus.Draft` (0) or `pageIndex: 0`.
    pattern: /options\?\.([a-zA-Z0-9_]+) && \{/g,
    replace: (_match, name) => `options?.${name} != null && {`,
  },
  {
    name: "as-any-field-access",
    // Every per-field line in the array-transform helpers is written as
    // `key: item as any.key` — a TS *type* assertion to the (nonsensical) qualified type name
    // `any.key`, not a value cast followed by property access. TypeScript erases the whole
    // `as any.key` clause, so the compiled JS collapses `item as any.key` to plain `item`:
    // every mapped field silently becomes the raw source object instead of its property, and
    // any field expected to be an array (e.g. passed into a nested array-transform helper) then
    // fails at runtime with "... is not iterable" since the whole object isn't iterable.
    // Confirmed by transpiling `item as any.actionCapabilities.actions` and observing the
    // property chain vanish. Fix: `(item as any).actionCapabilities.actions`, restoring the
    // intended runtime property access while keeping the `any` escape hatch.
    pattern: /\bitem as any\.([a-zA-Z0-9_.]+)/g,
    replace: (_match, chain) => `(item as any).${chain}`,
  },
  {
    name: "nullable-actionCapabilities-deref",
    // The emitter builds `actionCapabilities: { canRunNormally: <base>.actionCapabilities
    // .canRunNormally, ... }` unconditionally, even though `actionCapabilities` is documented
    // (and observed from the real backend) as nullable — most project-structure nodes have no
    // action capabilities at all. Every field access there throws "Cannot read properties of
    // null" the moment a node lacks them. Fix: turn the object literal into a ternary that
    // preserves `null` when the source field is null/undefined, using whatever base expression
    // (`(item as any)`, `response.body`, ...) the emitter already used for the first field
    // inside the block.
    pattern:
      /actionCapabilities: \{\r?\n(\s*canRunNormally: )([a-zA-Z0-9_. ()]+)\.actionCapabilities\.canRunNormally/g,
    replace: (_match, label, base) =>
      `actionCapabilities: !${base}.actionCapabilities ? null : {\n${label}${base}.actionCapabilities.canRunNormally`,
  },
];

const targetPaths = process.argv.slice(2);
if (targetPaths.length === 0) {
  console.error("Usage: node fix-generated-client.mjs <path/to/file.ts> [...more paths]");
  process.exit(1);
}

for (const targetPath of targetPaths) {
  const src = readFileSync(targetPath, "utf8");
  let fixed = src;
  let totalFixed = 0;

  for (const fixer of fixers) {
    const count = (fixed.match(fixer.pattern) ?? []).length;
    if (count > 0) {
      fixed = fixed.replace(fixer.pattern, fixer.replace);
      console.log(
        `fix-generated-client: patched ${count} ${fixer.name} occurrence(s) in ${targetPath}`,
      );
      totalFixed += count;
    }
  }

  if (totalFixed === 0) {
    console.warn(
      `fix-generated-client: no known bug patterns found in ${targetPath} (emitter output may have changed shape)`,
    );
  }

  writeFileSync(targetPath, fixed);
}
