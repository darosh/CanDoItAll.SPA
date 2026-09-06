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

export interface CanvasWorkbenchNode {
  id: string;
  parentId: string | null;
  family: string;
  kind: string;
  icon: string;
  title: string;
  subtitle: string;
  leadText: string;
  compactPath: CanvasWorkbenchCompactPath | null;
  status: string;
  branchLabel: string;
  accentColor: string;
  paletteKey: string;
  durationLabel: string;
  statusPill: string;
  progressMode: string;
  progressPercent: number;
  markerIcon: string;
  markerTone: string;
  markerLabel: string;
  markers: CanvasWorkbenchMarker[];
  priority: number;
  isRequired: boolean;
  isCollapsible: boolean;
  isReadOnly: boolean;
  isPreviewOnly: boolean;
  isInlineTextNode: boolean;
  inlineText: string;
  inlineTextPlaceholder: string;
  mediaKind: string;
  mediaPreviewUrl: string;
  mediaPreviewAlt: string;
  mediaContentType: string;
  mediaFileName: string;
  x: number;
  y: number;
  chips: CanvasWorkbenchChip[];
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

export interface CanvasWorkbenchCreateOptions {
  [key: string]: unknown;
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
  getDiagnostics(host: HTMLElement): unknown;
  getViewportSnapshot(host: HTMLElement): unknown;
  getSceneSnapshot(host: HTMLElement): unknown;
  getHotZoneCenter(host: HTMLElement, request: unknown): CanvasWorkbenchPoint | null;
  activateHotZone(host: HTMLElement, request: unknown): unknown;
  selectNodes(host: HTMLElement, nodeIds: string[], primaryNodeId?: string | null): void;
  openCreateComposer(host: HTMLElement, action: CanvasWorkbenchAction, request: unknown): void;
  exportImageData(host: HTMLElement): Promise<string | null>;
  simulateDrag(host: HTMLElement, request: unknown): boolean;
  finishInteraction(host: HTMLElement): boolean;
  dispose(host: HTMLElement): void;
}
