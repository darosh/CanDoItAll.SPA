// Domain contract for the canvas-workbench engine, carried forward from the sibling .NET repo's
// `CanDoItAll.Components.CanvasLib/Canvas/Workbench/*.cs` contracts (see
// packages/app/src/lib/canvas-workbench/types.d.ts for the original all-fields-mandatory shape).
//
// Every DTO below is split into an `*Input` type (deeply partial — what a consumer actually
// authors) and a `Resolved*` type (all fields present — what `normalize.ts` produces and the
// rest of this package consumes). Dropped from the original contract entirely: `chips` /
// `footerChips` on nodes (documented dead fields, only read by the superseded legacy DOM
// renderer), `CanvasWorkbenchDotNetRefShim` (Blazor-interop artifact), and the old engine's
// diagnostics/metrics/scene-snapshot/hot-zone *return* types (those describe old-engine
// internals and will be re-derived from Konva's own capabilities when their feature slices land).

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

// Context-menu / quick-create action tree. Typed for contract compatibility with
// packages/app/src/pages/workflows/adapter.ts; not rendered or dispatched until the
// context-menu/composer extension slice lands (see interaction/extensions.ts).
export interface CanvasWorkbenchAction {
  actionId: string;
  label: string;
  icon: string;
  tone: CanvasWorkbenchTone;
  children?: CanvasWorkbenchAction[];
  [key: string]: unknown;
}

// Chrome/options config. Kept as a loose, mostly-passthrough bag rather than a fully resolved
// type: nothing in the MVP reads these yet (minimap/diagnostics/clipboard/marquee/snap-guides/
// connector-anchors/transform-handles/context-menu are all deferred extension slices), so
// normalizing every nested option now would be speculative work with no current reader. The
// surface still *carries* whatever a consumer passes here (see normalize.ts), so cutover-era
// code that already builds a full chrome object keeps compiling unchanged.
export interface CanvasWorkbenchChromeInput {
  hintText?: string;
  quickCreateActions?: CanvasWorkbenchAction[];
  groupContextActions?: CanvasWorkbenchAction[];
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
  contextActions?: CanvasWorkbenchAction[];
  inputPorts?: CanvasWorkbenchPort[];
  outputPorts?: CanvasWorkbenchPort[];
  x: number;
  y: number;
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
