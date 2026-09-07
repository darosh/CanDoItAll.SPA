# Changelog

This package is a from-scratch rewrite, not an incremental fork, so there's
no meaningful per-version diff against itself yet. What's useful instead is
what changed **relative to the engine it replaces**:
`packages/app/src/lib/canvas-workbench/` — a ~19k-line hand-rolled Canvas 2D
port of the sibling `.NET` repo's Blazor component. This file will switch to
normal dated/versioned entries once this package has its own release history.

## Rewrite vs. the original `packages/app/src/lib/canvas-workbench` engine

### Rendering engine

- **Changed**: hand-rolled Canvas 2D drawing + manual hit-testing →
  [Konva](https://konvajs.org/) (`konva` npm package). Konva's own retained
  scene graph and native hit-graph replace the old engine's manual pixel
  math entirely — see `render/links.ts`'s `hitStrokeWidth` for a concrete
  example of a hit-testing problem the old engine solved by hand that Konva
  now solves for free.
- **Changed**: the old engine's density-adaptive rendering (three detail
  tiers — full/compact/micro — switched by zoom level and projected-node
  count, to keep hand-rolled Canvas 2D drawing responsive at scale) is gone.
  Konva's own retained-mode diffing (only mount/update what actually
  changed — see `render/reconciler.ts`) is the new performance strategy;
  revisit only if profiling shows it's insufficient at real-world node
  counts.
- **Removed**: `layout-and-legacy-render.js` (2288 lines), the superseded
  legacy DOM node renderer the old engine kept around despite
  `canvas-renderers.js` having replaced it. Not ported — it was dead code.

### Look vs. logic separation

- **Added**: a per-node `family`/`kind` renderer registry
  (`render/registry.ts`) as the explicit override point for a node's visual
  rendering, independent of state/interaction. The old engine had no such
  seam — its rendering and interaction logic were interleaved throughout
  `canvas-renderers.js`/`interaction-and-state.js`.
- **Added**: a hard architectural rule — `model/` and `state/` never import
  `"konva"` — enforced by directory convention, not just documentation.
  This is also what makes those layers unit-testable with zero DOM/canvas
  setup, unlike the old engine's runtime.

### Domain contract (`types.d.ts` → `model/types.ts` + `model/events.ts`)

- **Changed**: every DTO split into an `*Input` type (deeply partial, what a
  consumer authors) and a `Resolved*` type (all fields filled by
  `normalize.ts`). The old contract required every field on every node/
  link/surface literal, C#-DTO-style.
- **Removed**: `chips` / `footerChips` on nodes — documented dead fields in
  the old contract, read only by the superseded legacy DOM renderer.
- **Removed**: `CanvasWorkbenchDotNetRefShim` — a Blazor-interop artifact
  with no meaning outside the old .NET-hosted runtime.
- **Removed** (not re-added without a fresh design pass): the old
  diagnostics/metrics/scene-snapshot/hot-zone _return_ types
  (`CanvasWorkbenchDiagnosticsSnapshot`, `MetricsSnapshot`,
  `SceneSnapshot`, `SceneNodeBounds`/`LinkSnapshot`/`FrameSnapshot`/
  `HotZone`, `SimulateDragRequest`, `HotZoneRequest`/`Bounds`) — these
  described old-engine internals (hand-rolled canvas-layer sizes, a
  cumulative render/publish/drag-patch metrics block) that don't map onto
  Konva. `interaction/extensions/diagnostics.ts`'s `DiagnosticsSnapshot` is
  a from-scratch re-derivation with a much smaller, Konva-native shape.
- **Kept, typed but unimplemented** at first, now progressively typed as
  each slice lands: the `chrome.*` option bags (`clipboard`, `diagnostics`,
  `marqueeSelection`, `snapGuides`, `minimap`, `connectorAnchors`) went from
  untyped passthrough (accepted via an index signature, so old-engine-shaped
  adapters kept compiling) to fully typed as their features were built.
  `chrome.tooltipPopover` and `chrome.transformHandles` are still untyped
  passthrough — see `TODO.md`.

### Public API

- **Changed**: `CanvasWorkbenchApi`'s static, `host`-keyed methods
  (`create(host, ...)`, `update(host, ...)`, ...) → an instance-returning
  factory (`createCanvasWorkbench(host, surface) -> CanvasWorkbenchHandle`).
  Multiple independent workbenches on one page no longer share any hidden
  global `Map<HTMLElement, State>` — each call gets its own store, request
  bus, and drag-hook registry.
- **Changed**: `dotNetRef.invokeMethodAsync(methodName, ...)` (a Blazor
  callback shim) → a plain typed event emitter, `handle.on(event, handler)`,
  split across two channels — see the README's "two separate event
  channels" section.
- **Changed**: `getState()` returns the `ResolvedUiState` object directly,
  not a JSON string to be parsed (`getStateJson()` on the Vue wrapper exists
  only for callers that specifically want a string).
- **Not carried over** (old `CanvasWorkbenchApi` methods with no equivalent
  yet): `openNode`, `exportImageData`, `setMaximized`, `finishInteraction`,
  `getSceneSnapshot`, `getHotZoneCenter`/`activateHotZone`,
  `openContextSubmenu`'s hot-zone-based variant. See `TODO.md`.

### Feature slices

Each of the following was a distinct extension slice, designed and built
independently against the seam above (see each module's own doc comment for
its specific old-vs-new design notes):

- **Context menu / quick-create / composer** — plain DOM overlay (matching
  the old engine's own approach, not canvas-drawn), rebuilt from scratch
  against the new request-bus/store split.
- **Clipboard** — same request/dispatch shape as the old engine exactly:
  the engine never serializes or mutates scene data, only requests the
  action. `hasClipboardHandler` opt-in carried over unchanged.
- **Diagnostics** — DOM side panel (as before), but the snapshot shape is
  freshly derived from Konva's own capabilities rather than the old
  render-pipeline internals.
- **Marquee selection** — rubber-band drawn as a `Konva.Rect` in the
  overlay layer instead of a DOM `<div>`; hit-testing against
  `getClientRect()` instead of the old engine's manually tracked
  `sceneGeometry`.
- **Snap guides** — same node-to-node center-alignment behavior (not a
  grid), now hooked into Konva's drag pipeline via a small hook registry
  (`interaction/drag.ts`) instead of being wired directly into a monolithic
  interaction router.
- **Minimap** — a small second `Konva.Stage`, replacing the old engine's
  separate raw `<canvas>` element and hand-written scale/offset math.
- **Connector anchors** — scoped down to the selection-driven half only
  (see `TODO.md` for the hover half).

### Migration

- `packages/app`'s `WorkflowDesignerPage.vue` and `ProjectStructurePage.vue`
  have been cut over to this package (via
  `packages/app/src/lib/canvas-workbench-toolbar/CanvasWorkbenchToolbar.vue`,
  new app-owned zoom/fit-view chrome — the new engine deliberately ships no
  toolbar itself). The old `packages/app/src/lib/canvas-workbench/` runtime
  is untouched but no longer imported by any page.
