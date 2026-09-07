# TODO

## Deferred slices

- **`simulateDrag` test driver** — a thin driver over Konva's own
  `node.fire('dragstart' | 'dragmove' | 'dragend', ...)` against a node
  looked up via `stage.findOne('#' + nodeId)`. Build only once this package
  gets Playwright/component tests that actually need it — no generic
  hot-zone registry required first, since Konva's native hit-graph already
  resolves which shape a synthetic pointer event would hit.
- **Accessibility mirror** — the old engine's `accessibility-mirror-layer.js`
  is orphaned (zero call sites anywhere in the app), so there's nothing
  faithful to port. Proposed instead: an ARIA live region
  (`<div role="status" aria-live="polite">`) updated on `selectionChanged`
  and node-count changes — a small, real affordance rather than a port of
  dead code. Lowest priority; flag the design to whoever picks this up in
  case there's context this doesn't account for.

## Known gaps in the current slices

- **Connector-anchor hover** — `chrome.connectorAnchors.showOnHover` is
  typed but not wired; only `showOnSelection` is implemented
  (`render/default-nodes/standard-card.ts`). Needs live per-node hover
  state with no current reader to justify the plumbing — revisit if a real
  consumer need appears.
- **`nodeEdited` has no producer** — `CanvasWorkbenchHandle.on("nodeEdited",
...)` and the Vue wrapper's `@node-edited` are both wired end-to-end, but
  nothing in the engine ever calls `requestBus.emit("nodeEdited", ...)`.
  `ProjectStructurePage.vue`'s `onNodeEdited` handler is consequently dead
  code today. The old engine fired this from an inline title-edit
  affordance that doesn't exist yet in the new renderer set — needs a
  concrete design (inline rename on double-click? a composer "edit" mode?)
  before it's wired up, not just an event-plumbing exercise.
- **Untyped chrome option bags** — `chrome.tooltipPopover` and
  `chrome.transformHandles` are still accepted only via `ChromeInput`'s
  index signature (adapters keep compiling, nothing reads them). Type them
  properly if/when a slice actually implements the behavior they configure,
  following the pattern in `model/types.ts` for `clipboard`/`diagnostics`/
  etc.
- **Old `CanvasWorkbenchApi` methods with no new-engine equivalent**:
  `openNode` (async, presumably navigates to a node's detail view — unclear
  if that's an engine or host-page concern), `exportImageData` (canvas → PNG
  export), `setMaximized`/`finishInteraction` (old toolbar/interaction
  bookkeeping, may not need a direct equivalent at all now that the toolbar
  is app-owned), `getSceneSnapshot`/`getHotZoneCenter`/`activateHotZone`
  (old hit-testing introspection API, largely superseded by Konva's own
  `stage.find()`/`getClientRect()` — a Playwright/test-driver need, same
  bucket as `simulateDrag`). Audit against real consumer need before
  building any of these; none has evidence of one today.

## Cleanup

- **Delete the old engine** — `packages/app/src/lib/canvas-workbench/` (the
  ~19k-line hand-rolled runtime, `CanvasWorkbench.vue`, `OverlayWindow.vue`'s
  `runtime/overlay-window.js` dependency) is unused now that
  `WorkflowDesignerPage.vue`/`ProjectStructurePage.vue` have cut over.
  `OverlayWindow.vue` itself is still used (via
  `canvas-workbench-toolbar`'s `cw-stage-surface` compatibility class) and
  should **not** be deleted with the rest — it's generic floating-window UI,
  not coupled to the old canvas engine beyond that one CSS class hook.
  Confirm no other page references the old runtime before deleting, then
  remove the `cw-stage-surface` compatibility comment in
  `CanvasWorkbenchToolbar.vue` if `OverlayWindow.vue` is ever rewritten to
  not need it.
- **Promote `konva` to the workspace catalog** (`pnpm-workspace.yaml`) if a
  second package ever depends on it — currently package-scoped since this
  is the only consumer.
- **Toolbar polish in `packages/app`** — `CanvasWorkbenchToolbar.vue`
  currently exposes only Fit view / 100%. Add minimap-toggle and
  diagnostics-toggle buttons there (the engine-side `toggleMinimap()`/
  `toggleDiagnostics()` already exist on the handle and Vue wrapper) once
  there's a real need to expose them to end users rather than just the
  sandbox.
- **`ProjectStructurePage.vue`'s `onNodeEdited`** — currently unreachable
  dead code per the `nodeEdited` gap above; either wire up a real producer
  or remove the handler until one exists, to avoid it silently rotting.
