<!--VITE PLUS START-->

# Using Vite+, the Unified Toolchain for the Web

This project is using Vite+, a unified toolchain built on top of Vite, Rolldown, Vitest, tsdown, Oxlint, Oxfmt, and Vite Task. Vite+ wraps runtime management, package management, and frontend tooling in a single global CLI called `vp`. Vite+ is distinct from Vite, and it invokes Vite through `vp dev` and `vp build`. Run `vp help` to print a list of commands and `vp <command> --help` for information about a specific command.

Docs are local at `node_modules/vite-plus/docs` or online at https://viteplus.dev/guide/.

## Built-in Commands vs Scripts

`vp <name>` runs a built-in command. `vp run <name>` runs a `package.json` script or a `vite.config.ts` task. Scripts cannot overwrite built-ins, so `vp dev` and `vp run dev` may do different things. Check `package.json` and `vite.config.ts` first, and run `vp run <name>` when the project defines a script or task with that name.

## Review Checklist

- [ ] Run `vp install` after pulling remote changes and before getting started.
- [ ] Run `vp check` and `vp test` to format, lint, type check and test changes.
- [ ] Check if there are `vite.config.ts` tasks or `package.json` scripts necessary for validation, run via `vp run <script>`.
- [ ] If setup, runtime, or package-manager behavior looks wrong, run `vp env doctor` and include its output when asking for help.

<!--VITE PLUS END-->

## Project notes

`packages/app` is a Vue 3 + TypeScript SPA for the CanDoItAll ERP-shaped product;
`packages/api-client` is a generated TypeScript client for its backend API;
`packages/api-client-generator` holds the spec-fetch/codegen pipeline that
produces it.

### Navigation structure

The sidebar (`packages/app/src/router/nav.ts`) and the full route table
(`packages/app/src/router/routes.generated.ts`, produced by
`packages/app/scripts/generate-routes.mjs`) follow "Option C-revised — add a peer
Execution section" from `CanDoItAll/docs/navigation-proposal-menu.md` (the sibling
`.NET` repo this SPA reimplements): four groups — **Workspace** (current work),
**Execution** (cross-cutting run/session history), **Library** (reusable
definitions), **Settings** (pinned). Adding a route means updating the table in
`generate-routes.mjs` and re-running it, not hand-writing a page file — every route
except the hand-built Prompt Gallery pages is a generated stub with just a title.

### Pages and components organization

`packages/app/src/pages/stubs/` holds every generator-produced stub page
(the write target and import path `scripts/generate-routes.mjs` uses for any
route not in its `handBuilt` set) — a hand-built page never lives there.

Inside a `pages/<feature>/` folder (e.g. `processes/`, `projects/`, `prompts/`,
`settings/`, `workflows/`), only `*Page.vue` files may sit at the folder root.
Feature-specific non-page `.vue` files (dialogs, pickers, toolbox/inspector
panels, etc.) go in `pages/<feature>/components/` instead — see
`pages/workflows/components/` (including its `inspector/` subfolder) for the
pattern. `.ts` helpers may stay at the feature-folder root if the page itself
consumes them directly, or move into `components/` alongside the
sub-components that exclusively consume them.

`packages/app/src/components/` is split by role:

- `ui/` — shadcn-vue primitives only (managed via the `unovue/shadcn-vue` CLI
  and skill; don't hand-restructure).
- `app/` — app-shell chrome wired into `layouts/AppShell.vue` (sidebar, tab
  bar, nav group rendering); not page-specific.
- `shared/` — generic page-composition primitives used across many `pages/`
  folders but not app-shell-specific (page header/shell wrappers, sub-nav
  tabs, the dev-notes box, the stub-page template component).

### `*Page.vue` origin header

Every `*Page.vue` file under `packages/app/src/pages/` starts its `<script setup
lang="ts">` block with a doc comment tracing it back to the original `.NET`/Blazor
page it reimplements, and to itself:

```ts
/**
 * original source  : <github blob URL to the .razor file, fyziktom/CanDoItAll @ main>
 * original URL     : <http://localhost:5032/... — reaches the original page directly>
 * original trigger : <only if the original URL doesn't land on the equivalent view —
 *                      e.g. the SPA route corresponds to one tab inside a bigger
 *                      Blazor page, or a dialog opened from elsewhere>
 * URL              : <http://localhost:5173/... — this page's own SPA route>
 * trigger          : <only if navigating to URL above doesn't land directly here —
 *                      rare on the SPA side, since every route is directly addressable>
 */
```

Omit any line with no value (e.g. a page with no real original-app counterpart omits
`original source`/`original URL` entirely; a page reached by clicking through a list
rather than a direct link needs `trigger`). `original` fields point at
`https://github.com/fyziktom/CanDoItAll` (main branch) — the sibling `.NET` repo this
SPA reimplements, checked out locally as `CanDoItAll` next to this repo. Many SPA
routes correspond to a tab inside one large original Blazor page rather than a
distinct original route (the original app used in-page tabs where this rewrite uses
real URLs) — `docs/navigation-proposal-menu.md` in that sibling repo has the detailed
group/route/sublink mapping and is the first place to check when filling this header
in for a new page, before grepping the original repo's `.razor` files directly for
`@page` routes and tab structure.

**When porting a page's actual behavior** (not just adding the stub header), read
this comment first — `original source` is the fastest way to find the exact Blazor
component and Razor/C# code to port from, and `original trigger` tells you which tab
or dialog inside that component holds the logic you need, so you don't have to
re-derive the mapping from `navigation-proposal-menu.md` each time.

### Design system

Lean, gray, ERP-shaped chrome: near-zero-chroma neutrals for all surfaces
(`packages/app/src/styles/index.css`), color reserved for meaning — `success` /
`warning` / `destructive` communicate status, never decoration. Built on real
shadcn-vue components (`packages/app/src/components/ui/*`, via the `unovue/shadcn-vue`
CLI and skill), not hand-rolled primitives. When a page needs a status/priority
signal that doesn't fit the default badge variants, extend `badgeVariants` in
`components/ui/badge/index.ts` (see the `success`/`warning` variants already added)
rather than reaching for ad hoc inline colors.

### API client generation

The backend emits OpenAPI 3.1 with several real spec bugs (missing path
parameters, scalar schemas carrying a bare `default` that breaks TypeSpec's
codegen, empty/typeless named schemas, duplicate/missing operation IDs) that trip
up code generators. `packages/api-client-generator/scripts/prepare-spec.mjs` fixes
these before handing the spec to `tsp-openapi3` → `@typespec/http-client-js`. The
emitter writes its own nested package layout (`package.json`/`tsconfig.json` plus a
`src/` subfolder) into `packages/api-client/src`; `scripts/flatten-generated-client.mjs`
promotes that inner `src/` content up a level and drops the scaffolding, so the
generated code lands as plain files directly under `packages/api-client/src` (no
`generated/` subfolder, no hand-written wrapper — `package.json`'s `main`/`types`
point straight at `src/index.ts`, and app code that needs a same-origin client
factory builds it locally, e.g. `packages/app/src/lib/api-client.ts`).
`packages/api-client/src` is committed — regenerate it with `pnpm generate` inside
`packages/api-client-generator` (or `packages/api-client`, which proxies to it)
whenever the backend's API surface
changes (requires the backend running locally at `http://localhost:5032`), and
commit the diff.

Prompt-gallery endpoints used to document no response schema at all
(`responses: { 200: {} }`), because their minimal-API handlers in
`CanDoItAll/src/App/CanDoItAll.Web/Api/PromptGalleryApi.cs` returned the bare
`IResult` interface (via `ApiEndpointResults.FromResult`) — `Microsoft.AspNetCore.OpenApi`
infers response schemas from the delegate's _declared_ return type, not the
runtime value, so every prompt-gallery 200 came out as an empty schema regardless
of what was actually returned. Fixed by adding explicit `.Produces<T>(200)` +
`.ProducesApiErrors(...)` annotations per endpoint (see `ProjectsApi.cs`'s
`DeleteProject`/`SaveProject` for the established pattern this follows).
`packages/app/src/pages/prompts/api.ts` now calls the generated client exclusively;
`pages/prompts/types.ts` is retained only as a label/enum layer, since the
backend serializes every prompt-gallery enum as a plain number with no
`JsonStringEnumConverter` registered, so the generator can't produce string
unions for them.

**When a generated client mistypes or omits a response/request shape**, fix it
in this priority order:

1. Correct the backend's OpenAPI annotations at the source (`.Produces<T>()`,
   contract records, `[JsonConverter]`, etc.) — this is almost always possible
   for minimal-API endpoints and is what fixed prompt-gallery above.
2. If the bug is in the OpenAPI _emission_ itself for something backend
   annotations can't reach (e.g. a `tsp-openapi3` import quirk), patch
   `packages/api-client-generator/scripts/prepare-spec.mjs`, documented inline,
   as a last resort.
3. Never hand-write `fetch`/manual client code in the SPA to route around a
   generated-type gap — that hides the bug instead of fixing it and silently
   drifts from the real contract.

### Known toolchain gaps (as of this writing)

- **TypeScript 7 vs `vue-tsc`**: the workspace catalog pins `typescript: ^7.0.2`,
  but `vue-tsc` doesn't yet support TS 7's restructured package layout
  (`ERR_PACKAGE_PATH_NOT_EXPORTED` on `typescript/lib/tsc`). `packages/app` pins its own
  `typescript: ~5.9.2` instead of the catalog version for this reason — don't
  "fix" that back to `catalog:` until `vue-tsc` catches up.
- **oxlint's type-aware pass doesn't understand `.vue` files**: `tsgolint` (the
  type-aware linter Vite+'s `lint.options.typeCheck` enables) has no Vue SFC
  language plugin, so it fails to resolve any `.vue` import. Root `vite.config.ts`
  sets `lint.options.typeCheck: false` for this reason; Vue type-safety is covered
  by `vue-tsc --build` instead (`packages/app`'s `type-check`/`build` scripts).
- **`@candoitall/api-client`'s generated output isn't clean under `packages/app`'s
  stricter compiler options**: the package ships raw TypeScript
  (`"main": "./src/index.ts"`, no build step, no project references — this is a
  deliberate repo convention, not an oversight) and, until the prompt-gallery
  work above, nothing in `packages/app` actually imported it, so `vue-tsc --build`
  never pulled the generated files into its program. Now that
  `packages/app/src/lib/api-client.ts` does, `vue-tsc` type-checks the generator's
  entire output under `packages/app`'s `verbatimModuleSyntax`/`noUnusedLocals`
  settings — stricter than `packages/api-client`'s own tsconfig — and surfaces
  pre-existing `@typespec/http-client-js` emitter bugs in modules unrelated to
  prompt-gallery (e.g. `item as any.field` missing parens, `...(opts?.x &&
{X})` spread-narrowing failures on falsy scalars, a few `verbatimModuleSyntax`
  import-type violations, and a `WorkflowLaunchOrigin` discriminated-union
  default mismatch). `skipLibCheck` doesn't help — these are `.ts` files, not
  `.d.ts`. These are emitter bugs, not spec or backend bugs, so they don't fit
  the fix-priority order above; fixing them properly needs an
  `@typespec/http-client-js` upgrade or upstream fix. Until then, verify
  prompt-gallery (or any new) work against this file by filtering `type-check`
  output to touched paths, e.g. `pnpm run type-check 2>&1 | grep -E
"pages/prompts|lib/api-client"`, rather than expecting a fully clean run.
- **Fixed**: the generated query builders (`searchPromptGalleryItems` and
  every other operation with optional scalar/query params) used to drop
  falsy-but-meaningful values — the emitter writes optional query params as
  `...(options?.kind && { Kind: options.kind })`, so `kind: 0`
  (`PromptKind.FullPrompt`), `status: 0` (`PromptStatus.Draft`), or
  `pageIndex: 0` was silently omitted rather than sent as `0` (confirmed
  end-to-end: filtering the prompt gallery to Draft sent no `Status` query
  param at all, while Final/`1` worked).
  `packages/api-client-generator/scripts/fix-generated-client.mjs`
  patches every `options?.field &&` to `options?.field != null &&` in the
  generated operations file as a post-`client:compile` step (wired into the
  `generate` script as `client:fix`, after `client:clean` → `client:compile` →
  `client:flatten`), the same convention `prepare-spec.mjs` uses on the input
  side. Re-run `pnpm client:flatten && pnpm client:fix` (or `pnpm generate`)
  after regenerating if you ever hand-run `client:compile` alone.
