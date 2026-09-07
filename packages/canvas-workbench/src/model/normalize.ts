import type {
  CanvasWorkbenchGroupFrameInput,
  CanvasWorkbenchLinkInput,
  CanvasWorkbenchNodeInput,
  CanvasWorkbenchSurfaceInput,
  ResolvedGroupFrame,
  ResolvedLink,
  ResolvedNode,
  ResolvedSurface,
  ResolvedUiState,
} from "./types.js";

export function normalizeNode(input: CanvasWorkbenchNodeInput): ResolvedNode {
  return {
    id: input.id,
    parentId: input.parentId ?? null,
    family: input.family ?? "",
    kind: input.kind ?? "",
    icon: input.icon ?? "",
    title: input.title ?? "",
    subtitle: input.subtitle ?? "",
    status: input.status ?? "",
    accentColor: input.accentColor ?? "",
    paletteKey: input.paletteKey ?? "",
    statusPill: input.statusPill ?? "",
    progressMode: input.progressMode ?? "na",
    progressPercent: clamp(input.progressPercent ?? 0, 0, 100),
    markers: input.markers ?? [],
    priority: input.priority ?? 0,
    isRequired: input.isRequired ?? false,
    isCollapsible: input.isCollapsible ?? false,
    isReadOnly: input.isReadOnly ?? false,
    isPreviewOnly: input.isPreviewOnly ?? false,
    isInlineTextNode: input.isInlineTextNode ?? false,
    inlineText: input.inlineText ?? "",
    inlineTextPlaceholder: input.inlineTextPlaceholder ?? "",
    compactPath: input.compactPath ?? null,
    annotations: input.annotations ?? [],
    chips: input.chips ?? [],
    footerChips: input.footerChips ?? [],
    contextActions: input.contextActions ?? [],
    inputPorts: input.inputPorts ?? [],
    outputPorts: input.outputPorts ?? [],
    x: input.x,
    y: input.y,
  };
}

export function normalizeLink(input: CanvasWorkbenchLinkInput): ResolvedLink {
  return {
    sourceId: input.sourceId,
    targetId: input.targetId,
    sourcePortId: input.sourcePortId ?? "",
    targetPortId: input.targetPortId ?? "",
    kind: input.kind ?? "",
    label: input.label ?? "",
    tone: input.tone ?? "neutral",
    isUserAuthored: input.isUserAuthored ?? false,
  };
}

export function normalizeGroupFrame(input: CanvasWorkbenchGroupFrameInput): ResolvedGroupFrame {
  return {
    id: input.id,
    label: input.label ?? "",
    tone: input.tone ?? "neutral",
    anchorNodeIds: input.anchorNodeIds ?? [],
  };
}

export function normalizeUiState(
  input: CanvasWorkbenchSurfaceInput["uiState"],
  previous?: ResolvedUiState,
): ResolvedUiState {
  const selectedNodeIds = input?.selectedNodeIds ?? previous?.selectedNodeIds ?? [];
  return {
    selectedNodeIds,
    primaryNodeId: selectedNodeIds[0] ?? null,
    highlightedNodeIds: input?.highlightedNodeIds ?? previous?.highlightedNodeIds ?? [],
    collapsedNodeIds: input?.collapsedNodeIds ?? previous?.collapsedNodeIds ?? [],
    groupFrames: (input?.groupFrames ?? []).map(normalizeGroupFrame),
    manualPositions: input?.manualPositions ?? previous?.manualPositions ?? {},
    zoom: input?.zoom ?? previous?.zoom ?? 1,
    panX: input?.panX ?? previous?.panX ?? 0,
    panY: input?.panY ?? previous?.panY ?? 0,
  };
}

export function normalizeSurface(
  input: CanvasWorkbenchSurfaceInput,
  previousUiState?: ResolvedUiState,
): ResolvedSurface {
  return {
    surfaceId: input.surfaceId,
    mode: input.mode ?? "authoring",
    dependencySourceId: input.dependencySourceId ?? null,
    nodes: input.nodes.map(normalizeNode),
    links: (input.links ?? []).map(normalizeLink),
    uiState: normalizeUiState(input.uiState, previousUiState),
    chrome: input.chrome ?? {},
  };
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
