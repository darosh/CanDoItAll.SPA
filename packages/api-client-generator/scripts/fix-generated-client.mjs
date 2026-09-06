#!/usr/bin/env node
// Repairs real bugs in @typespec/http-client-js's emitted client code. Kept as a separate,
// inspectable post-compile step (mirrors prepare-spec.mjs's role on the input side) rather than
// hand-edited into the generated files, since `client:compile` overwrites them on every run.
import { basename } from "node:path";
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
  {
    name: "verbatim-type-only-context-import",
    // `CanDoItAllClientContext` is used exclusively as a type annotation throughout the
    // operations file, but the emitter writes it as a value import. `verbatimModuleSyntax`
    // (required by packages/app's tsconfig) then rejects it with TS1484.
    pattern: /import \{ CanDoItAllClientContext \} from "\.\/canDoItAllClientContext\.js";/g,
    replace: () => `import type { CanDoItAllClientContext } from "./canDoItAllClientContext.js";`,
  },
  {
    name: "verbatim-type-only-named-imports",
    // A handful of request-body model names in the big named import from "../models.js" are
    // emitted without the per-item `type` prefix that every sibling on the same list gets, even
    // though they're likewise only ever used as type annotations. Same TS1484 as above, just in
    // the multi-name import list instead of a single-name one. Only applies where the emitter
    // used a plain `import { ... }` with per-item `type` markers (canDoItAllClientOperations.ts);
    // serializers.ts imports the same names under a whole-statement `import type { ... }`, where
    // adding a redundant per-item `type` is itself a TS2206 error.
    targetFile: "canDoItAllClientOperations.ts",
    pattern:
      /(\n\s+)(CreateLlmChatConversationApiRequest|LlmChatDefinitionMutationApiRequest|LlmChatExpectedConcurrencyApiRequest|RenameLlmChatConversationApiRequest|SendLlmChatTurnApiRequest)(,)/g,
    replace: (_match, indent, name, comma) => `${indent}type ${name}${comma}`,
  },
  {
    name: "browser-unsafe-buffer-helpers",
    // decodeBase64/encodeUint8Array are emitted using Node's `Buffer`/`BufferEncoding`, which
    // don't exist in a browser SPA runtime (and aren't ambient-typed under packages/app's
    // `types: ["vite/client"]` tsconfig, so they also fail to compile). Replace with
    // browser-native atob/btoa implementations that behave the same for the base64/base64url
    // encodings these helpers are actually used for.
    pattern:
      /export function decodeBase64\(value: string\): Uint8Array \| undefined \{\n {2}if\(!value\) \{\n {4}return value as any;\n {2}\}\n {2}\/\/ Normalize Base64URL to Base64\n {2}const base64 = value\.replace\(\/-\/g, '\+'\)\.replace\(\/_\/g, '\/'\)\n {4}\.padEnd\(value\.length \+ \(4 - \(value\.length % 4\)\) % 4, '='\);\n\n {2}return new Uint8Array\(Buffer\.from\(base64, 'base64'\)\);\n\}export function encodeUint8Array\(\n {2}value: Uint8Array \| undefined \| null,\n {2}encoding: BufferEncoding,\n\): string \| undefined \{\n {2}if \(!value\) \{\n {4}return value as any;\n {2}\}\n {2}return Buffer\.from\(value\)\.toString\(encoding\);\n\}/,
    replace: () => `export function decodeBase64(value: string): Uint8Array | undefined {
  if(!value) {
    return value as any;
  }
  // Normalize Base64URL to Base64
  const base64 = value.replace(/-/g, '+').replace(/_/g, '/')
    .padEnd(value.length + (4 - (value.length % 4)) % 4, '=');

  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}export function encodeUint8Array(
  value: Uint8Array | undefined | null,
  encoding: "base64" | "base64url" = "base64",
): string | undefined {
  if (!value) {
    return value as any;
  }
  let binary = '';
  for (let i = 0; i < value.length; i++) {
    binary += String.fromCharCode(value[i]);
  }
  const base64 = btoa(binary);
  return encoding === "base64url"
    ? base64.replace(/\\+/g, '-').replace(/\\//g, '_').replace(/=+$/, '')
    : base64;
}`,
  },
  {
    name: "workflow-launch-origin-optional-discriminant",
    // WorkflowLaunchOrigin is modeled as a union of `{ $origin: "api" } & WorkflowLaunchOriginApi`
    // (and five sibling variants), but each variant interface itself declares `$origin` as
    // *optional* (`$origin?: "api"`). Intersecting `{ $origin: "api" }` with a type whose own
    // `$origin` is `"api" | undefined` is fine for the union itself, but every
    // `jsonWorkflowLaunchOrigin<Variant>ToApplicationTransform` helper returns a bare
    // `WorkflowLaunchOriginApi` (etc.) and that return value doesn't satisfy the union member's
    // required discriminant, so TS rejects the assignment. The discriminant field is never
    // actually optional on the wire (it's what `serializers.ts` switches on), so make it required.
    pattern:
      /\$origin\?: ("api"|"preview"|"scheduler-plan-run"|"project-structure-node"|"agent-runtime-invocation"|"process-assignment");/g,
    replace: (_match, literal) => `$origin: ${literal};`,
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
    if (fixer.targetFile && basename(targetPath) !== fixer.targetFile) {
      continue;
    }
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
