// Hand-written TypeScript translation of the engine's C# data contracts
// (CanDoItAll.Components.CanvasLib/Canvas/Workbench/*.cs). These are the types the ported
// engine's `create`/`update` calls expect and the events it emits back.

export type CanvasWorkbenchMode = "authoring" | "delete" | "dependency";
// The engine accepts any string tone (see canvasColorTokenMap's tone-* fallbacks) — this widens
// intentionally rather than narrowing to the common cases below, which are documented for
// discoverability only.
// "neutral" | "accent" | "success" | "warning" | "destructive" | (custom tone name)
export type CanvasWorkbenchTone = string;

export interface CanvasWorkbenchPoint {
  x: number;
  y: number;
}

export interface CanvasWorkbenchCompactPath {
  label: string;
  displayText: string;
  fullPath: string;
  promotedText: string;
}

export interface CanvasWorkbenchChip {
  text: string;
  tone: CanvasWorkbenchTone;
}

export interface CanvasWorkbenchAnnotation {
  id: string;
  kind: string;
  tone: CanvasWorkbenchTone;
  label: string;
  description: string;
  icon: string;
  actionId: string;
}

export interface CanvasWorkbenchMarker {
  icon: string;
  tone: string;
  label: string;
}

export interface CanvasWorkbenchPort {
  id: string;
  label: string;
  side: string;
  tone: CanvasWorkbenchTone;
  categoryKey: string;
  accentColor: string;
  kind: string;
  isRequired: boolean;
}

export interface CanvasWorkbenchInputOption {
  value: string;
  label: string;
}

export interface CanvasWorkbenchInputField {
  key: string;
  sectionKey: string;
  sectionTitle: string;
  sectionDescription: string;
  label: string;
  placeholder: string;
  inputMode: string;
  isRequired: boolean;
  options: CanvasWorkbenchInputOption[];
}

export interface CanvasWorkbenchInputValue {
  key: string;
  value: string;
}

export interface CanvasWorkbenchUploadedFile {
  fileName: string;
  contentType: string;
  base64Data: string;
}

export interface CanvasWorkbenchAction {
  actionId: string;
  label: string;
  description: string;
  icon: string;
  menuLabel: string;
  shortcutKey: string;
  menuSize: string;
  submenuLayout: string;
  tone: CanvasWorkbenchTone;
  setupRendererKey: string;
  requiresInput: boolean;
  createMode: string;
  objectSubtype: string;
  titleLabel: string;
  titlePlaceholder: string;
  subtitleLabel: string;
  subtitlePlaceholder: string;
  notesLabel: string;
  notesPlaceholder: string;
  showDefaultTextFields: boolean;
  submitLabel: string;
  requiresFile: boolean;
  acceptedFileTypes: string;
  filePrompt: string;
  supportsDragDrop: boolean;
  inputFields: CanvasWorkbenchInputField[];
  defaultInputValues: CanvasWorkbenchInputValue[];
  children: CanvasWorkbenchAction[];
}

// Node rendering is scale/density-adaptive, not a single fixed layout. Per frame,
// canvas-renderers.js's resolveCanvasNodeDetailMode picks one of three detail tiers from
// state.ui.zoom AND the current count of in-viewport ("projected") nodes — either one can force
// a lower tier on its own, whichever condition is more restrictive wins:
//   - "full"    zoom > 0.55 and fewer than 70 projected nodes. Everything below is drawn.
//   - "compact" zoom <= 0.55, or >= 70 projected nodes. Drops the media preview, leadText, and
//               the compactPath "promoted" secondary line, and annotation badges entirely; the
//               title and subtitle/leadText each clamp to 1 wrapped line instead of 2-3.
//   - "micro"   zoom <= 0.3, or >= 120 projected nodes. Bypasses the standard node renderer
//               entirely (renderCanvasMicroNode) in favor of a much simpler pass: just the
//               rounded panel + decision cues + a title truncated to 12 characters. No
//               subtitle, chips, marker/priority badges, progress ring, media, compact-path
//               button, or annotations survive at this tier — hence "shrinks to title only".
// These are the three visible steps when zooming out. During an active drag/frame-drag/
// dependency-drag the thresholds tighten (zoom <= 0.9 or >= 24 nodes already forces "micro") so
// dragging stays responsive over a dense canvas even before the static thresholds would apply.
//
// Two fields the live canvas renderer never draws at ANY tier: `chips` and `footerChips` are
// only read by the legacy DOM node renderer in layout-and-legacy-render.js, which the canvas
// engine (canvas-renderers.js) superseded — that legacy path is dead code (see
// legacyRenderGroupFrames and friends), so populating chips/footerChips currently has no
// visible effect. The footer instead always shows a hardcoded required/optional pill plus
// branchLabel, regardless of detail tier.
export interface CanvasWorkbenchNode {
  id: string;
  parentId: string | null;
  /** Free-form grouping key read by a handful of renderer special-cases — e.g. canvas-renderers.js
   * treats family === "workflow-decision" (or paletteKey === "workflow-decision") as a diamond
   * decision node instead of the standard rounded card. Otherwise purely a domain tag. */
  family: string;
  /** Domain node-type tag (not read by the renderer itself beyond family's special-case check);
   * used upstream to pick which contextActions/inputFields apply. */
  kind: string;
  icon: string;
  title: string;
  subtitle: string;
  leadText: string;
  compactPath: CanvasWorkbenchCompactPath | null;
  status: string;
  branchLabel: string;
  accentColor: string;
  /** Lower-cased and compared against "workflow-decision" (see `family`) to pick the diamond
   * decision-node shape; otherwise only feeds the node's color/tone lookup. */
  paletteKey: string;
  durationLabel: string;
  /** Rendered as a small pill in the node header when non-empty; empty string hides it. */
  statusPill: string;
  /** One of "complete" | "started" | "progress" — anything else (including empty string) falls
   * back to "na" (see resolveProgressDisplay in layout-and-legacy-render.js). "complete" always
   * draws a full ring + check mark regardless of progressPercent; "progress" draws a ring arc
   * scaled to progressPercent; "na" draws a dash with no arc. */
  progressMode: string;
  /** 0-100; clamped/normalized before use. Only visually meaningful when progressMode is
   * "progress" — see progressMode. */
  progressPercent: number;
  /** Single-marker fallback: only rendered when `markers` is empty (resolveNodeMarkers in
   * layout-and-legacy-render.js pushes {icon: markerIcon, tone: markerTone, label: markerLabel}
   * as the sole entry in that case). Prefer populating `markers` directly for multiple badges. */
  markerIcon: string;
  markerTone: string;
  markerLabel: string;
  /** Preferred over markerIcon/markerTone/markerLabel; deduplicated by icon, rendered as a row of
   * small badges. Ignored entirely if empty AND markerIcon is empty. */
  markers: CanvasWorkbenchMarker[];
  priority: number;
  isRequired: boolean;
  /** Shows a collapse/expand affordance on the node when true; has no effect on nodes that are
   * also isInlineTextNode. */
  isCollapsible: boolean;
  isReadOnly: boolean;
  /** Suppresses interactive chrome (drag handles, context menu, composer) for nodes meant only
   * as a static preview — see the isPreviewOnly branch in canvas-renderers.js. */
  isPreviewOnly: boolean;
  /** Renders the node body as an editable inline text block (using inlineText/
   * inlineTextPlaceholder) instead of the standard title/subtitle/chips layout. */
  isInlineTextNode: boolean;
  inlineText: string;
  inlineTextPlaceholder: string;
  /** Only "image" gets an actual `<img>`-equivalent preview drawn (from mediaPreviewUrl, via
   * requestSceneImage's canvas Image cache); any other non-empty value renders a generic
   * "Preview" placeholder panel with no image. Empty string (or no mediaPreviewUrl) renders
   * nothing — see drawNodeMediaPreview in canvas-renderers.js. */
  mediaKind: string;
  mediaPreviewUrl: string;
  mediaPreviewAlt: string;
  mediaContentType: string;
  mediaFileName: string;
  x: number;
  y: number;
  /** Not drawn by the current (canvas) renderer at any detail tier — see the note above this
   * interface. Only the superseded legacy DOM renderer reads this. */
  chips: CanvasWorkbenchChip[];
  /** Not drawn by the current (canvas) renderer — the footer instead always shows a hardcoded
   * required/optional pill; see the note above this interface. */
  footerChips: CanvasWorkbenchChip[];
  annotations: CanvasWorkbenchAnnotation[];
  contextActions: CanvasWorkbenchAction[];
  inputPorts: CanvasWorkbenchPort[];
  outputPorts: CanvasWorkbenchPort[];
}

export interface CanvasWorkbenchLink {
  sourceId: string;
  targetId: string;
  sourcePortId: string;
  targetPortId: string;
  kind: string;
  label: string;
  summary: string;
  tone: CanvasWorkbenchTone;
  isUserAuthored: boolean;
}

export interface CanvasWorkbenchWindowState {
  isVisible: boolean;
  isMinimized: boolean;
  left: number | null;
  top: number | null;
  width: number | null;
  height: number | null;
}

export interface CanvasWorkbenchGroupFrame {
  id: string;
  label: string;
  tone: CanvasWorkbenchTone;
  anchorNodeIds: string[];
}

export interface CanvasWorkbenchUiState {
  version: string;
  selectedNodeIds: string[];
  highlightedNodeIds: string[];
  collapsedNodeIds: string[];
  groupFrames: CanvasWorkbenchGroupFrame[];
  manualPositions: Record<string, CanvasWorkbenchPoint>;
  windowStates: Record<string, CanvasWorkbenchWindowState>;
  zoom: number;
  panX: number;
  panY: number;
  menuActionScale: number;
  isMaximized: boolean;
  activeInspectorTab: string;
  showDiagnostics: boolean;
  showMinimap: boolean;
}

export interface CanvasWorkbenchDiagnosticsOptions {
  isEnabled: boolean;
  showNodeBounds: boolean;
  showConnectorAnchors: boolean;
  showViewportStats: boolean;
}

export interface CanvasWorkbenchMinimapOptions {
  isEnabled: boolean;
  title: string;
}

export interface CanvasWorkbenchClipboardOptions {
  isEnabled: boolean;
  allowCopy: boolean;
  allowCut: boolean;
  allowPaste: boolean;
  allowDuplicate: boolean;
  format: string;
}

export interface CanvasWorkbenchTooltipPopoverOptions {
  isEnabled: boolean;
  focusTriggers: boolean;
  supportsRichPreview: boolean;
}

export interface CanvasWorkbenchMarqueeOptions {
  isEnabled: boolean;
  modifierKey: string;
  selectionMode: string;
}

export interface CanvasWorkbenchSnapGuideOptions {
  isEnabled: boolean;
  tolerance: number;
  modifierPolicy: string;
}

export interface CanvasWorkbenchConnectorAnchorOptions {
  isEnabled: boolean;
  showOnHover: boolean;
  showOnSelection: boolean;
  placementMode: string;
}

export interface CanvasWorkbenchTransformHandleOptions {
  isEnabled: boolean;
  showResizeHandles: boolean;
  showRotateHandle: boolean;
  placementMode: string;
}

export interface CanvasWorkbenchChrome {
  hintText: string;
  emptyStateKicker: string;
  emptyStateTitle: string;
  emptyStateDescription: string;
  focusActionLabel: string;
  showFocusAction: boolean;
  showQuickCreateRail: boolean;
  childNoteActionId: string | null;
  siblingNoteActionId: string | null;
  inlineNotePlaceholder: string;
  collapseOnDoubleClick: boolean;
  quickCreateActions: CanvasWorkbenchAction[];
  groupContextActions: CanvasWorkbenchAction[];
  diagnostics: CanvasWorkbenchDiagnosticsOptions;
  minimap: CanvasWorkbenchMinimapOptions;
  clipboard: CanvasWorkbenchClipboardOptions;
  tooltipPopover: CanvasWorkbenchTooltipPopoverOptions;
  marqueeSelection: CanvasWorkbenchMarqueeOptions;
  snapGuides: CanvasWorkbenchSnapGuideOptions;
  connectorAnchors: CanvasWorkbenchConnectorAnchorOptions;
  transformHandles: CanvasWorkbenchTransformHandleOptions;
}

export interface CanvasWorkbenchSurface {
  surfaceId: string;
  mode: CanvasWorkbenchMode;
  dependencySourceId: string;
  nodes: CanvasWorkbenchNode[];
  links: CanvasWorkbenchLink[];
  uiState: CanvasWorkbenchUiState;
  chrome: CanvasWorkbenchChrome;
}

// Event payloads (CanvasWorkbenchEvents.cs), passed through the create/update options and
// surfaced to Vue via CanvasWorkbench.vue's emits.

export interface CanvasWorkbenchSelectionChangedEventArgs {
  primaryNodeId: string | null;
  selectedNodeIds: string[];
}

export interface CanvasWorkbenchContextActionRequest {
  nodeId: string | null;
  actionId: string;
  x: number;
  y: number;
  targetKind: string;
  linkSourceId: string | null;
  linkTargetId: string | null;
  linkKind: string | null;
  linkSourcePortId: string | null;
  linkTargetPortId: string | null;
}

export interface CanvasWorkbenchCreateActionRequest {
  actionId: string;
  sourceNodeId: string | null;
  x: number;
  y: number;
  parentNodeId: string | null;
  title: string;
  subtitle: string;
  notes: string;
  placementKind: string;
  createMode: string;
  objectSubtype: string;
  uploadedFile: CanvasWorkbenchUploadedFile | null;
  inputValues: CanvasWorkbenchInputValue[] | null;
}

export interface CanvasWorkbenchNodeEditRequest {
  nodeId: string;
  title: string;
  notes: string;
}

export interface CanvasWorkbenchNodePositionChange {
  nodeId: string;
  x: number;
  y: number;
}

export interface CanvasWorkbenchNodesMovedEventArgs {
  positions: CanvasWorkbenchNodePositionChange[];
}

export type CanvasWorkbenchClipboardAction = "Copy" | "Cut" | "Paste" | "Duplicate";

export interface CanvasWorkbenchClipboardRequest {
  action: CanvasWorkbenchClipboardAction;
  surfaceId: string;
  primaryNodeId: string | null;
  selectedNodeIds: string[];
  anchorWorld: CanvasWorkbenchPoint | null;
}

// Plain-JS callback shim replacing Blazor's `dotNetRef.invokeMethodAsync(methodName, ...args)`.
export interface CanvasWorkbenchDotNetRefShim {
  invokeMethodAsync(methodName: string, ...args: unknown[]): Promise<unknown>;
}

// Keys actually read by runtime-entry.js's create()/update() (grepped from the source — there is
// no schema/normalizer for this object, so any other key is silently ignored rather than an error).
export interface CanvasWorkbenchCreateOptions {
  /** Skips the clipboard-permission check in copy/cut/paste/duplicate requests when true. */
  hasClipboardHandler?: boolean;
  /** Overrides the surface's own uiState.isMaximized for this create/update call. */
  isMaximized?: boolean;
  /** update() only: keep the current pan/zoom instead of re-fitting the view to the new surface. */
  preserveViewport?: boolean;
  [key: string]: unknown;
}

// Return shape of canvasWorkbench.getDiagnostics (buildDiagnosticsSnapshot in
// runtime-rendering.js). null when the host has no live workbench state.
export interface CanvasWorkbenchDiagnosticsSnapshot {
  isVisible: boolean;
  rendererMode: "canvas";
  visibleNodeCount: number;
  totalNodeCount: number;
  totalLinkCount: number;
  selectedCount: number;
  /** Current interaction state machine value, e.g. "idle" | "drag" | "frame-drag" | "pan" | "marquee". */
  interaction: string;
  zoomPercent: number;
  panX: number;
  panY: number;
  bounds: { minX: number; minY: number; maxX: number; maxY: number } | null;
  metrics: CanvasWorkbenchMetricsSnapshot;
  canvasLayers: {
    frames: CanvasWorkbenchCanvasLayerSize | null;
    links: CanvasWorkbenchCanvasLayerSize | null;
    nodes: CanvasWorkbenchCanvasLayerSize | null;
    minimap: CanvasWorkbenchCanvasLayerSize | null;
  };
}

export interface CanvasWorkbenchCanvasLayerSize {
  width: number;
  height: number;
}

// Cumulative render/publish/drag instrumentation counters (foundation.js's
// createWorkbenchMetrics/cloneWorkbenchMetrics) — reset only on workbench (re)creation, not per frame.
export interface CanvasWorkbenchMetricsSnapshot {
  renderCount: number;
  totalRenderDurationMs: number;
  lastRenderDurationMs: number;
  maxRenderDurationMs: number;
  frameLayerRebuildCount: number;
  linkLayerRebuildCount: number;
  nodeLayerRebuildCount: number;
  lastRenderedFrameCount: number;
  lastRenderedLinkCount: number;
  lastRenderedNodeCount: number;
  lastVisibleNodeCount: number;
  statePublishRequestCount: number;
  statePublishImmediateCount: number;
  statePublishCommitCount: number;
  viewportCommitScheduleCount: number;
  viewportCommitCount: number;
  lastStatePublishMode: string;
  lastCommittedStateSize: number;
  movePublishRequestCount: number;
  movePublishSuccessCount: number;
  movePublishFailureCount: number;
  lastMovePublishStatus: string;
  lastResolvedDragDeltaX: number;
  lastResolvedDragDeltaY: number;
  lastReleasedInteractionKind: string;
  lastReleasedInteractionMoved: boolean;
  dragPatchCount: number;
  totalDragPatchedNodeCount: number;
  totalDragPatchedLinkCount: number;
  totalDragPatchedFrameCount: number;
  lastDragPatchedNodeCount: number;
  lastDragPatchedLinkCount: number;
  lastDragPatchedFrameCount: number;
}

// Return shape of canvasWorkbench.getViewportSnapshot. NOTE: despite taking a `host` parameter in
// the API surface, the current implementation ignores it and reads window.innerWidth/innerHeight
// directly (runtime-entry.js) — this reports the browser viewport, not the workbench host element's
// own bounds.
export interface CanvasWorkbenchViewportSnapshot {
  width: number;
  height: number;
}

export interface CanvasWorkbenchSceneNodeBounds {
  id: string;
  left: number;
  top: number;
  width: number;
  height: number;
  right: number;
  bottom: number;
  title: string;
  subtitle: string;
  inlineText: string;
  selected: boolean;
  highlighted: boolean;
  collapsed: boolean;
  isInlineTextNode: boolean;
  markerText: string;
  priorityText: string;
  progressTitle: string;
  hasPathButton: boolean;
  pathTitle: string;
  pathDisplayText: string;
  pathPromotedText: string;
  mediaKind: string;
  mediaPreviewUrl: string;
}

export interface CanvasWorkbenchSceneLinkSnapshot {
  key: string;
  sourceId: string;
  targetId: string;
  kind: string;
  midPoint: CanvasWorkbenchPoint | null;
  bounds: { left: number; top: number; width: number; height: number } | null;
}

export interface CanvasWorkbenchSceneFrameSnapshot {
  frameId: string;
  label: string;
  nodeIds: string[];
  left: number;
  top: number;
  width: number;
  height: number;
  labelLeft: number;
  labelTop: number;
  labelWidth: number;
  labelHeight: number;
}

export interface CanvasWorkbenchSceneHotZone {
  /** e.g. "node-path" | "annotation" | "node-collapse" | "frame-handle" — see getSceneHitAtPoint's
   * hit-target kinds in canvas-scene-and-hit-testing.js. */
  type: string;
  nodeId: string;
  frameId: string;
  bounds: { x: number; y: number; width: number; height: number };
}

// Return shape of canvasWorkbench.getSceneSnapshot (collectSceneSnapshot in runtime-entry.js).
// null when the host has no live workbench state.
export interface CanvasWorkbenchSceneSnapshot {
  rendererMode: "canvas";
  mode: CanvasWorkbenchMode;
  dependencySourceId: string;
  nodes: CanvasWorkbenchSceneNodeBounds[];
  links: CanvasWorkbenchSceneLinkSnapshot[];
  previewLink: CanvasWorkbenchSceneLinkSnapshot | null;
  frames: CanvasWorkbenchSceneFrameSnapshot[];
  hotZones: CanvasWorkbenchSceneHotZone[];
  hoveredDeleteNodeId: string;
  hoveredDeleteLinkKey: string;
  pointerHostPoint: CanvasWorkbenchPoint | null;
  minimap: { width: number; height: number; nodeCount: number } | null;
}

// Shared by getHotZoneCenter and activateHotZone (findSceneHotZoneCenter in runtime-entry.js):
// matches the most recently added hot zone whose fields all match the ones you provide (omitted
// fields act as wildcards). `zone`/`type` are interchangeable aliases for the same filter.
export interface CanvasWorkbenchHotZoneRequest {
  zone?: string;
  type?: string;
  nodeId?: string;
  frameId?: string;
}

export interface CanvasWorkbenchHotZoneBounds extends CanvasWorkbenchPoint {
  width: number;
  height: number;
}

// Request accepted by openCreateComposer to prefill the dialog (context-menu-and-composer.js reads
// title/subtitle/notes/x/y/inputValues/objectSubtype off it; any other field is stored on
// state.composer.request verbatim but not otherwise read). All fields optional/prefill-only.
export type CanvasWorkbenchCreateComposerRequest = Partial<
  Pick<
    CanvasWorkbenchCreateActionRequest,
    "title" | "subtitle" | "notes" | "x" | "y" | "objectSubtype" | "inputValues"
  >
>;

// Request accepted by simulateDrag (simulatePointerDrag in runtime-entry.js) — drives a synthetic
// pointerDown/pointerMove.../pointerUp sequence against the real interaction handlers, used by
// Playwright/component tests rather than end users.
export interface CanvasWorkbenchSimulateDragRequest {
  /** Required unless frameId is set: id of the node to grab (drag start point is computed from
   * its rendered bounds, roughly its top-left "grip" area — see resolveSyntheticNodeDragStart). */
  nodeId?: string;
  /** Drags the named group frame's resize handle instead of a node. */
  frameId?: string;
  /** Total pointer travel in host pixels, applied linearly over `steps` synthetic pointermove events. */
  deltaX?: number;
  deltaY?: number;
  /** Number of intermediate pointermove events between down and up; clamped to [1, 32], default 10. */
  steps?: number;
  /** Skip the final synthetic pointerup — leaves the interaction in-progress for a follow-up call. */
  release?: boolean;
  button?: number;
  altKey?: boolean;
  ctrlKey?: boolean;
  metaKey?: boolean;
  shiftKey?: boolean;
}

// Public JS API surface exposed on window.CanDoItAll.canvasWorkbench by
// runtime/workbench/07-runtime-entry.js.
export interface CanvasWorkbenchApi {
  create(
    host: HTMLElement,
    dotNetRef: CanvasWorkbenchDotNetRefShim,
    surface: CanvasWorkbenchSurface,
    selectionDispatchSeed: number,
    stateDispatchSeed: number,
    options?: CanvasWorkbenchCreateOptions,
  ): void;
  update(
    host: HTMLElement,
    surface: CanvasWorkbenchSurface,
    options?: CanvasWorkbenchCreateOptions,
  ): void;
  fitView(host: HTMLElement): void;
  focusNode(host: HTMLElement, nodeId: string): void;
  openNode(host: HTMLElement, nodeId: string): Promise<void>;
  openContextSubmenu(host: HTMLElement, actionId: string): void;
  setZoomPercent(host: HTMLElement, zoomPercent: number): void;
  setMenuScalePercent(host: HTMLElement, menuScalePercent: number): void;
  setMaximized(host: HTMLElement, isMaximized: boolean): void;
  resize(host: HTMLElement): void;
  openQuickCreateMenu(host: HTMLElement, quickCreateButton: HTMLElement): void;
  toggleMinimap(host: HTMLElement): void;
  toggleDiagnostics(host: HTMLElement): void;
  /** Returns the current UI state serialized as a JSON string (parse with CanvasWorkbenchUiState.Parse's TS equivalent). */
  getState(host: HTMLElement): string;
  /** Returns null if `host` has no live workbench state (e.g. called before create() or after dispose()). */
  getDiagnostics(host: HTMLElement): CanvasWorkbenchDiagnosticsSnapshot | null;
  /** `host` is currently unused by the implementation — see CanvasWorkbenchViewportSnapshot. */
  getViewportSnapshot(host: HTMLElement): CanvasWorkbenchViewportSnapshot;
  /** Returns null if `host` has no live workbench state. */
  getSceneSnapshot(host: HTMLElement): CanvasWorkbenchSceneSnapshot | null;
  getHotZoneCenter(
    host: HTMLElement,
    request: CanvasWorkbenchHotZoneRequest,
  ): CanvasWorkbenchHotZoneBounds | null;
  /** Finds the matching hot zone and performs whatever it represents (copy compact path, run an
   * annotation's action, toggle collapse, ...). Returns false if no hot zone matched or the match
   * had no associated action. */
  activateHotZone(host: HTMLElement, request: CanvasWorkbenchHotZoneRequest): boolean;
  selectNodes(host: HTMLElement, nodeIds: string[], primaryNodeId?: string | null): void;
  openCreateComposer(
    host: HTMLElement,
    action: CanvasWorkbenchAction,
    request: CanvasWorkbenchCreateComposerRequest,
  ): void;
  exportImageData(host: HTMLElement): Promise<string | null>;
  /** Drives a synthetic pointer drag through the real interaction handlers — intended for
   * automated tests, not end-user code. Returns false if the workbench isn't attached/ready or the
   * requested node/frame has no resolvable drag-start point. */
  simulateDrag(host: HTMLElement, request: CanvasWorkbenchSimulateDragRequest): boolean;
  finishInteraction(host: HTMLElement): boolean;
  dispose(host: HTMLElement): void;
}
