# @candoitall/canvas-workbench

A Konva-based rewrite of the node/link diagram engine that powers workflow and
project-structure canvases in the CanDoItAll app. Framework-agnostic core, an
optional thin Vue wrapper, no build step (ships raw `.ts`, same convention as
`@candoitall/api-client`).

It replaces `packages/app/src/lib/canvas-workbench/` — a ~19k-line hand-rolled
Canvas 2D port of the sibling `.NET` repo's Blazor component — which had real
dead code (a superseded legacy DOM renderer), hand-rolled hit-testing, and no
separation between how a node looks and how the engine behaves. See
`CHANGELOG.md` for what changed relative to that engine, and `TODO.md` for
what's still outstanding.

## Quick start

```ts
import { createCanvasWorkbench } from "@candoitall/canvas-workbench";

const workbench = createCanvasWorkbench(hostElement, {
  surfaceId: "my-surface",
  nodes: [
    { id: "a", title: "Start", x: 0, y: 0 },
    { id: "b", title: "Needs approval?", family: "workflow-decision", x: 260, y: 0 },
  ],
  links: [{ sourceId: "a", targetId: "b" }],
});

workbench.fitView();
workbench.on("selectionChanged", (event) => console.log(event.selectedNodeIds));
```

Or from Vue:

```vue
<script setup lang="ts">
import CanvasWorkbench from "@candoitall/canvas-workbench/src/vue/CanvasWorkbench.vue";
</script>

<template>
  <CanvasWorkbench :surface="surface" @selection-changed="onSelectionChanged" />
</template>
```

(No package `exports` map restricts subpaths, so the Vue SFC is imported by its
real path — see `packages/app/src/lib/canvas-workbench-toolbar/
CanvasWorkbenchToolbar.vue` for the pattern used to build app-level toolbar
chrome around it.)

## Architecture

```
src/
  model/       domain contract — pure TS, NEVER imports "konva"
  state/       state + pure geometry/math — pure TS, NEVER imports "konva"
  render/      the ONLY directory that imports "konva"
  interaction/ Konva event wiring + the extension seam
  api/         createCanvasWorkbench() — the public imperative facade
  vue/         thin optional Vue wrapper
```

**Look vs. logic.** A node's visual rendering is decided by a per-`family`/
`kind` renderer registry (`render/registry.ts`) of retained-mode lifecycle
objects (`mount(ctx) -> Konva.Group`, `update(group, ctx)`), not a
virtual-DOM-style declarative layer — Konva's own Stage/Layer/Group tree is
already a retained scene graph, so a second declarative tree would just
double the reconciliation work and fight Konva's own mutable shape state.
Consumers override a node's look by calling `registerRenderer(key, ...)` on
their own `NodeRendererRegistry` (see `createDefaultRegistry()`); logic
(position resolution, selection, drag) lives entirely in `state/` and
`interaction/`, passed to renderers as plain data. `model/` and `state/`
never importing `"konva"` is what makes this real rather than aspirational —
it's also what makes every non-Konva module unit-testable with zero DOM/
canvas setup.

**Domain contract.** Every DTO is split into an `*Input` type (deeply
partial — what a consumer authors) and a `Resolved*` type (all fields
filled by `model/normalize.ts` — what the rest of the package consumes).
Several `*Input` types (`CanvasWorkbenchNodeInput`, `LinkInput`,
`UiStateInput`, chrome sub-option bags) carry an index signature so an
adapter already built against the old engine's fuller, all-fields-mandatory
contract keeps compiling unchanged — unrecognized fields are accepted and
ignored, not rejected.

**Extension seam.** Every deferred/optional feature (context menus,
clipboard, diagnostics, marquee selection, snap guides, minimap) is a
`WorkbenchExtension` registered via `handle.registerExtension()` (or
internally in `api/facade.ts`), receiving a `WorkbenchExtensionContext` with
`stage`, `layers` (a capped 4-layer budget: `frames`/`links`/`nodes`/
`overlay` — new features draw into `overlay`, never add a new `Layer`),
`store`, `host`, `nodeGroups()`, `requestBus`, and `dragHooks`. This is how
the package grows without every feature needing to touch `render/` or the
core `interaction/` modules — see `src/interaction/extensions/*.ts` for the
concrete examples.

**Two separate event channels**, both reachable via `handle.on(...)`:

- `WorkbenchStore` (`state/store.ts`) — canvas _state_ (`surfaceChanged`,
  `selectionChanged`, `nodesMoved`, `viewportChanged`).
- The request bus (`interaction/request-bus.ts`) — one-shot _requests to the
  host page_ (`contextAction`, `createAction`, `nodeEdited`, `nodeOpened`,
  `clipboardAction`). The engine never mutates scene data on its own behalf
  for these — it only requests the action; the host page owns the mutation
  (matches the old engine's design exactly, not a simplification).

Both `WorkbenchStore` and `interaction/drag.ts`'s hook registry
(`createDragHooks()`) are instantiated **per `createCanvasWorkbench()` call**,
not as module-level singletons — multiple independent workbenches can exist
on one page without cross-reacting to each other's state or drags.

## Feature status

| Feature                                                         | Status                                      |
| --------------------------------------------------------------- | ------------------------------------------- |
| Scene rendering, pan/zoom, selection, drag, links, group frames | ✅                                          |
| Context menu / quick-create / composer dialog                   | ✅                                          |
| Clipboard shortcuts (Ctrl/Cmd+C/X/V/D)                          | ✅                                          |
| Diagnostics overlay (+ node-bounds debug decoration)            | ✅                                          |
| Marquee (rubber-band) selection                                 | ✅                                          |
| Snap guides (node-to-node center alignment)                     | ✅                                          |
| Minimap (+ click-to-navigate)                                   | ✅                                          |
| Connector-anchor dots (selection-driven only)                   | ✅ (partial — see TODO)                     |
| Transform handles (resize/rotate)                               | ❌ not planned — no evidence of a real need |
| `simulateDrag` test driver                                      | ❌ deferred until real tests need it        |
| Accessibility mirror                                            | ❌ deferred — see TODO                      |

`packages/app`'s `WorkflowDesignerPage.vue` and `ProjectStructurePage.vue`
already run on this engine (see `packages/app/src/lib/canvas-workbench-
toolbar/`); the old `packages/app/src/lib/canvas-workbench/` runtime is
retained on disk but unused, pending a final cleanup pass.

## Development

```bash
pnpm --filter @candoitall/canvas-workbench test         # vitest, via vp test
pnpm --filter @candoitall/canvas-workbench type-check    # tsc --noEmit
pnpm --filter @candoitall/canvas-workbench sandbox       # vp dev sandbox — plain-TS playground
```

Tests run against Konva's node-canvas backend (`konva/canvas-backend`, see
`test/render/setup.ts`) rather than jsdom — a genuine jsdom container rejects
node-canvas's non-DOM canvas objects. DOM-touching extensions (context menu,
diagnostics, minimap) guard on `stage.content` being present, since Konva
only builds that in a real browser (`Konva.isBrowser`); the guard also makes
them safely testable headless. Render/structural correctness is asserted via
a committed JSON snapshot (`test/__snapshots__/basic-surface.json`,
`toMatchFileSnapshot`); a secondary PNG snapshot (`test/__images__/`) is a
human-reviewed smoke check, not a strict pixel-diff gate, since node-canvas
text rendering is platform-dependent.

The `sandbox/` playground is plain TypeScript with no Vue dependency — it
exercises `createCanvasWorkbench()` directly and doubles as proof the public
API is usable framework-agnostically.
