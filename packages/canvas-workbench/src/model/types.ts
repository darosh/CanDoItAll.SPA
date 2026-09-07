// Domain contract for the canvas-workbench engine, carried forward from the sibling .NET repo's
// `CanDoItAll.Components.CanvasLib/Canvas/Workbench/*.cs` contracts (see
// packages/app/src/lib/canvas-workbench/types.d.ts for the original all-fields-mandatory shape).
//
// Every DTO below is split into an `*Input` type (deeply partial — what a consumer actually
// authors) and a `Resolved*` type (all fields present — what `normalize.ts` produces and the
// rest of this package consumes). Dropped from the original contract entirely:
// `CanvasWorkbenchDotNetRefShim` (Blazor-interop artifact), and the old engine's diagnostics/
// metrics/scene-snapshot/hot-zone *return* types (those describe old-engine internals and will
// be re-derived from Konva's own capabilities when their feature slices land).

export type CanvasWorkbenchMode = "authoring" | "delete" | "dependency";

// Widened intentionally, matching the original contract — the renderer accepts any tone string
// (see render/theme.ts's tone resolution) rather than narrowing to the common cases below.
// "neutral" | "accent" | "success" | "warning" | "destructive" | (custom tone name)
export type CanvasWorkbenchTone = string;

export interface CanvasWorkbenchPoint {
  x: number;
  y: number;
}

export interface CanvasWorkbenchSize {
  width: number;
  height: number;
}

export interface CanvasWorkbenchCompactPath {
  label: string;
  displayText: string;
  fullPath: string;
  promotedText: string;
}

export interface CanvasWorkbenchMarker {
  icon: string;
  tone: CanvasWorkbenchTone;
  label: string;
}

/** A small tone-colored pill of text — rendered in a row via `chips` (body) or `footerChips`
 * (bottom row), e.g. a component/executor/model badge on a workflow node or a role/artifact
 * badge on a process node. No icon field, matching the original contract's shape exactly
 * (see packages/app/src/lib/canvas-workbench/types.d.ts). */
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
  label: string;
  placeholder?: string;
  inputMode?: string;
  isRequired?: boolean;
  options?: CanvasWorkbenchInputOption[];
  // See CanvasWorkbenchNodeInput's index signature note — the old contract's `sectionKey`/
  // `sectionTitle`/`sectionDescription` fields (grouping metadata the composer dialog doesn't
  // render yet) are accepted-and-ignored here.
  [key: string]: unknown;
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

// Context-menu / quick-create action tree, driven by interaction/extensions/context-menu.ts +
// composer.ts. A leaf with `children` opens a submenu instead of firing an action; a leaf with
// `requiresInput`/`requiresFile` opens the composer dialog instead of firing `contextAction`
// directly (see CreateActionRequest in model/events.ts for what the composer submits).
export interface CanvasWorkbenchAction {
  actionId: string;
  label: string;
  icon?: string;
  tone?: CanvasWorkbenchTone;
  children?: CanvasWorkbenchAction[];
  requiresInput?: boolean;
  requiresFile?: boolean;
  acceptedFileTypes?: string;
  filePrompt?: string;
  supportsDragDrop?: boolean;
  createMode?: string;
  objectSubtype?: string;
  titleLabel?: string;
  titlePlaceholder?: string;
  subtitleLabel?: string;
  subtitlePlaceholder?: string;
  notesLabel?: string;
  notesPlaceholder?: string;
  showDefaultTextFields?: boolean;
  submitLabel?: string;
  inputFields?: CanvasWorkbenchInputField[];
  defaultInputValues?: CanvasWorkbenchInputValue[];
  [key: string]: unknown;
}

// Chrome/options config. Kept as a loose, mostly-passthrough bag rather than a fully resolved
// type: nothing in the MVP reads these yet (minimap/diagnostics/clipboard/marquee/snap-guides/
// connector-anchors/transform-handles/context-menu are all deferred extension slices), so
// normalizing every nested option now would be speculative work with no current reader. The
// surface still *carries* whatever a consumer passes here (see normalize.ts), so cutover-era
// code that already builds a full chrome object keeps compiling unchanged.
// Typed now that interaction/extensions/clipboard.ts (slice 3) reads it; the other option bags
// below remain untyped passthrough until their own slice lands (see the interface-level comment).
export interface CanvasWorkbenchClipboardOptions {
  isEnabled?: boolean;
  allowCopy?: boolean;
  allowCut?: boolean;
  allowPaste?: boolean;
  allowDuplicate?: boolean;
  format?: string;
}

// Typed now that interaction/extensions/diagnostics.ts (slice 4) reads it. Old-engine default was
// `isEnabled: false` — diagnostics is opt-in, unlike clipboard/minimap/marquee/snap-guides above.
export interface CanvasWorkbenchDiagnosticsOptions {
  isEnabled?: boolean;
  showNodeBounds?: boolean;
  showConnectorAnchors?: boolean;
  showViewportStats?: boolean;
}

// Typed now that interaction/extensions/marquee.ts (slice 5) reads it. Old-engine default was
// `isEnabled: true`, `modifierKey: "Alt"`, `selectionMode: "Intersect"`.
export interface CanvasWorkbenchMarqueeOptions {
  isEnabled?: boolean;
  modifierKey?: string;
  // Widened like CanvasWorkbenchTone above — state/marquee.ts treats anything other than
  // "Contain" as "Intersect" (the default). "Intersect" | "Contain" | (anything else, treated as
  // "Intersect")
  selectionMode?: string;
}

// Typed now that interaction/extensions/snap-guides.ts (slice 6) reads it. Old-engine default was
// `isEnabled: true`, `tolerance: 18` (screen px, scaled by 1/zoom), `modifierPolicy:
// "ShiftBypassesSnap"`.
export interface CanvasWorkbenchSnapGuideOptions {
  isEnabled?: boolean;
  tolerance?: number;
  // Widened like CanvasWorkbenchTone above. "ShiftBypassesSnap" (default: holding Shift disables
  // snapping for that drag) | "none" (Shift has no effect, snapping always applies)
  modifierPolicy?: string;
}

// Typed now that interaction/extensions/minimap.ts (slice 7) reads it. Old-engine default was
// `isEnabled: true` — the only one of the deferred slices that's both on by default AND shown
// immediately (no toggle needed) rather than starting hidden.
export interface CanvasWorkbenchMinimapOptions {
  isEnabled?: boolean;
  title?: string;
}

// Typed now that render/default-nodes/standard-card.ts (slice 8) reads it. Old-engine default was
// `isEnabled: true, showOnHover: true, showOnSelection: true`. Scoped down for this lowest-
// priority slice: only the selection-driven half is implemented (see standard-card.ts's comment)
// — `showOnHover` is typed for contract compatibility but not yet wired to a live hover state.
// `placementMode` ("Edges") is carried but not read; anchors are always drawn on the left/right
// edges, matching the only mode the old engine actually used.
export interface CanvasWorkbenchConnectorAnchorOptions {
  isEnabled?: boolean;
  showOnHover?: boolean;
  showOnSelection?: boolean;
  placementMode?: string;
}

export interface CanvasWorkbenchChromeInput {
  hintText?: string;
  quickCreateActions?: CanvasWorkbenchAction[];
  groupContextActions?: CanvasWorkbenchAction[];
  marqueeSelection?: CanvasWorkbenchMarqueeOptions;
  snapGuides?: CanvasWorkbenchSnapGuideOptions;
  minimap?: CanvasWorkbenchMinimapOptions;
  connectorAnchors?: CanvasWorkbenchConnectorAnchorOptions;
  clipboard?: CanvasWorkbenchClipboardOptions;
  diagnostics?: CanvasWorkbenchDiagnosticsOptions;
  [key: string]: unknown;
}

export interface CanvasWorkbenchNodeInput {
  id: string;
  parentId?: string | null;
  /** Free-form grouping key; `family === "workflow-decision"` (or `paletteKey`, case-insensitive)
   * selects the diamond decision-node renderer instead of the standard card — see
   * render/registry.ts. */
  family?: string;
  kind?: string;
  icon?: string;
  title?: string;
  subtitle?: string;
  status?: string;
  accentColor?: string;
  paletteKey?: string;
  statusPill?: string;
  // Widened like CanvasWorkbenchTone above — normalize.ts defaults unset/unrecognized values to
  // "na". "complete" | "started" | "progress" | (anything else, treated as "na")
  progressMode?: string;
  progressPercent?: number;
  markers?: CanvasWorkbenchMarker[];
  priority?: number;
  isRequired?: boolean;
  isCollapsible?: boolean;
  isReadOnly?: boolean;
  isPreviewOnly?: boolean;
  isInlineTextNode?: boolean;
  inlineText?: string;
  inlineTextPlaceholder?: string;
  compactPath?: CanvasWorkbenchCompactPath | null;
  annotations?: CanvasWorkbenchAnnotation[];
  chips?: CanvasWorkbenchChip[];
  footerChips?: CanvasWorkbenchChip[];
  contextActions?: CanvasWorkbenchAction[];
  inputPorts?: CanvasWorkbenchPort[];
  outputPorts?: CanvasWorkbenchPort[];
  x: number;
  y: number;
  // Index signature (matching CanvasWorkbenchAction/ChromeInput above): the old engine's contract
  // had several always-required fields the current renderers don't consume yet (leadText,
  // branchLabel, durationLabel, single-marker fallback fields, media*) — accept-and-ignore them
  // here so an adapter already built against that fuller shape (e.g.
  // packages/app/src/pages/workflows/adapter.ts) keeps compiling verbatim at cutover time,
  // without forcing a premature decision about which of those fields future renderers add.
  [key: string]: unknown;
}

export interface ResolvedNode {
  id: string;
  parentId: string | null;
  family: string;
  kind: string;
  icon: string;
  title: string;
  subtitle: string;
  status: string;
  accentColor: string;
  paletteKey: string;
  statusPill: string;
  progressMode: string;
  progressPercent: number;
  markers: CanvasWorkbenchMarker[];
  priority: number;
  isRequired: boolean;
  isCollapsible: boolean;
  isReadOnly: boolean;
  isPreviewOnly: boolean;
  isInlineTextNode: boolean;
  inlineText: string;
  inlineTextPlaceholder: string;
  compactPath: CanvasWorkbenchCompactPath | null;
  annotations: CanvasWorkbenchAnnotation[];
  chips: CanvasWorkbenchChip[];
  footerChips: CanvasWorkbenchChip[];
  contextActions: CanvasWorkbenchAction[];
  inputPorts: CanvasWorkbenchPort[];
  outputPorts: CanvasWorkbenchPort[];
  x: number;
  y: number;
}

export interface CanvasWorkbenchLinkInput {
  sourceId: string;
  targetId: string;
  sourcePortId?: string;
  targetPortId?: string;
  kind?: string;
  label?: string;
  tone?: CanvasWorkbenchTone;
  isUserAuthored?: boolean;
  // See CanvasWorkbenchNodeInput's index signature note — the old contract's `summary` field
  // (not yet rendered) is the one link field this accepts-and-ignores today.
  [key: string]: unknown;
}

export interface ResolvedLink {
  sourceId: string;
  targetId: string;
  sourcePortId: string;
  targetPortId: string;
  kind: string;
  label: string;
  tone: CanvasWorkbenchTone;
  isUserAuthored: boolean;
}

export interface CanvasWorkbenchGroupFrameInput {
  id: string;
  label?: string;
  tone?: CanvasWorkbenchTone;
  anchorNodeIds: string[];
}

export interface ResolvedGroupFrame {
  id: string;
  label: string;
  tone: CanvasWorkbenchTone;
  anchorNodeIds: string[];
}

export interface CanvasWorkbenchUiStateInput {
  selectedNodeIds?: string[];
  highlightedNodeIds?: string[];
  collapsedNodeIds?: string[];
  groupFrames?: CanvasWorkbenchGroupFrameInput[];
  manualPositions?: Record<string, CanvasWorkbenchPoint>;
  zoom?: number;
  panX?: number;
  panY?: number;
  // See CanvasWorkbenchNodeInput's index signature note — the old contract's `version`/
  // `windowStates`/`menuActionScale`/`isMaximized`/`activeInspectorTab`/`showDiagnostics`/
  // `showMinimap` fields (not yet consumed) are accepted-and-ignored here.
  [key: string]: unknown;
}

export interface ResolvedUiState {
  selectedNodeIds: string[];
  primaryNodeId: string | null;
  highlightedNodeIds: string[];
  collapsedNodeIds: string[];
  groupFrames: ResolvedGroupFrame[];
  manualPositions: Record<string, CanvasWorkbenchPoint>;
  zoom: number;
  panX: number;
  panY: number;
}

export interface CanvasWorkbenchSurfaceInput {
  surfaceId: string;
  mode?: CanvasWorkbenchMode;
  dependencySourceId?: string | null;
  nodes: CanvasWorkbenchNodeInput[];
  links?: CanvasWorkbenchLinkInput[];
  uiState?: CanvasWorkbenchUiStateInput;
  chrome?: CanvasWorkbenchChromeInput;
}

export interface ResolvedSurface {
  surfaceId: string;
  mode: CanvasWorkbenchMode;
  dependencySourceId: string | null;
  nodes: ResolvedNode[];
  links: ResolvedLink[];
  uiState: ResolvedUiState;
  chrome: CanvasWorkbenchChromeInput;
}
