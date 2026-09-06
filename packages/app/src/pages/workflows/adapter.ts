import type {
  WorkflowEdge,
  WorkflowGraph,
  WorkflowNode,
  WorkflowPort,
} from "@candoitall/api-client";
import type {
  CanvasWorkbenchLink,
  CanvasWorkbenchNode,
  CanvasWorkbenchPort,
  CanvasWorkbenchSurface,
  CanvasWorkbenchUiState,
} from "@/lib/canvas-workbench/types";
import { buildNodeContextActions, buildQuickCreateActions } from "./actionCatalog";
import {
  resolveEdgeVisualProfile,
  resolveNodeVisualProfile,
  resolvePortShapeProfile,
} from "./nodeKindRegistry";
import {
  formatEdgeKind,
  formatValueShapeKind,
  WorkflowNodeKind,
  WorkflowPortDirection,
} from "./types";

// Adapter between the workflow domain (WorkflowGraph/WorkflowNode/WorkflowEdge, the wire shape
// saved via saveWorkflowDefinition) and CanvasWorkbenchSurface (the ported canvas engine's input),
// following pages/project-structure/adapter.ts's buildSurface/mapNode/mapLink/defaultUiState
// shape. Unlike project-structure — which only ever reloads a fresh surface from the server after
// each edit — this page holds a local editable draft, so this file also owns the graph mutators
// (applyNodePositions/upsertNode/removeNode/duplicateNode/upsertEdge/removeEdge) that the page
// calls before rebuilding the surface from the mutated draft.

function coerceNumber(value: unknown): number {
  return typeof value === "number" ? value : Number(value) || 0;
}

function mapPort(port: WorkflowPort): CanvasWorkbenchPort {
  const shapeProfile = resolvePortShapeProfile(port.shape.kind);
  return {
    id: port.id,
    label: port.name,
    side: port.direction === WorkflowPortDirection.Output ? "output" : "input",
    tone: shapeProfile.tone,
    categoryKey: shapeProfile.categoryKey,
    accentColor: shapeProfile.accentColor,
    kind: formatValueShapeKind(port.shape.kind),
    isRequired: port.required,
  };
}

function mapNode(node: WorkflowNode): CanvasWorkbenchNode {
  const visualProfile = resolveNodeVisualProfile(node.kind);
  const inputPorts = node.ports.filter((port) => port.direction === WorkflowPortDirection.Input);
  const outputPorts = node.ports.filter((port) => port.direction === WorkflowPortDirection.Output);

  // "workflow-decision" is a special family the engine already renders as a diamond
  // (resolveBaseNodeSize/foundation.js) — fits branching/logic nodes better than the default
  // rectangular "item" shape.
  const family =
    node.kind === WorkflowNodeKind.Triage || node.kind === WorkflowNodeKind.StrictLogic
      ? "workflow-decision"
      : "item";

  return {
    id: node.id,
    parentId: null,
    family,
    kind: visualProfile.label,
    icon: visualProfile.icon,
    title: node.name,
    subtitle: node.settings.instructions ? node.settings.instructions.slice(0, 80) : "",
    leadText: "",
    compactPath: null,
    status: "",
    branchLabel: "",
    accentColor: visualProfile.accentColor,
    paletteKey: visualProfile.paletteKey,
    durationLabel: "",
    statusPill: "",
    progressMode: "na",
    progressPercent: 0,
    markerIcon: "",
    markerTone: "",
    markerLabel: "",
    markers: [],
    priority: 0,
    isRequired: false,
    isCollapsible: false,
    isReadOnly: false,
    isPreviewOnly: false,
    isInlineTextNode: false,
    inlineText: "",
    inlineTextPlaceholder: "",
    mediaKind: "",
    mediaPreviewUrl: "",
    mediaPreviewAlt: "",
    mediaContentType: "",
    mediaFileName: "",
    x: coerceNumber(node.canvasX),
    y: coerceNumber(node.canvasY),
    chips: [],
    footerChips: [],
    annotations: [],
    contextActions: buildNodeContextActions(node.kind),
    inputPorts: inputPorts.map(mapPort),
    outputPorts: outputPorts.map(mapPort),
  };
}

function mapLink(edge: WorkflowEdge): CanvasWorkbenchLink {
  const visualProfile = resolveEdgeVisualProfile(edge.kind, edge.routing?.kind);
  const label = edge.routing?.label || formatEdgeKind(edge.kind);
  const summary = edge.routing?.jsonPath
    ? `${edge.routing.jsonPath} ${edge.conditionExpression || ""}`.trim()
    : edge.conditionExpression || "";

  return {
    sourceId: edge.sourceNodeId,
    targetId: edge.targetNodeId,
    sourcePortId: edge.sourcePortId ?? "",
    targetPortId: edge.targetPortId ?? "",
    kind: formatEdgeKind(edge.kind),
    label,
    summary,
    tone: visualProfile.tone,
    isUserAuthored: true,
  };
}

export function buildSurface(
  graph: WorkflowGraph,
  uiState: CanvasWorkbenchUiState,
): CanvasWorkbenchSurface {
  return {
    surfaceId: `workflow:${graph.startNodeId}`,
    mode: "authoring",
    dependencySourceId: "",
    nodes: graph.nodes.map(mapNode),
    links: graph.edges.map(mapLink),
    uiState,
    chrome: {
      hintText:
        "Select a node to edit it in the inspector, drag to reorganize, and use the Routes tab to add or edit connections.",
      emptyStateKicker: "Workflow",
      emptyStateTitle: "Design this workflow",
      emptyStateDescription: "Use quick create to add nodes, then wire them up in the Routes tab.",
      focusActionLabel: "Focus start",
      showFocusAction: true,
      showQuickCreateRail: true,
      childNoteActionId: null,
      siblingNoteActionId: null,
      inlineNotePlaceholder: "",
      collapseOnDoubleClick: false,
      quickCreateActions: buildQuickCreateActions(),
      groupContextActions: [],
      diagnostics: {
        isEnabled: true,
        showNodeBounds: true,
        showConnectorAnchors: true,
        showViewportStats: true,
      },
      minimap: { isEnabled: true, title: "Workflow overview" },
      clipboard: {
        isEnabled: false,
        allowCopy: false,
        allowCut: false,
        allowPaste: false,
        allowDuplicate: false,
        format: "application/vnd.candoitall.canvas+json",
      },
      tooltipPopover: { isEnabled: true, focusTriggers: true, supportsRichPreview: true },
      marqueeSelection: { isEnabled: true, modifierKey: "Alt", selectionMode: "Intersect" },
      snapGuides: { isEnabled: true, tolerance: 18, modifierPolicy: "ShiftBypassesSnap" },
      connectorAnchors: {
        isEnabled: true,
        showOnHover: true,
        showOnSelection: true,
        placementMode: "Edges",
      },
      transformHandles: {
        isEnabled: false,
        showResizeHandles: false,
        showRotateHandle: false,
        placementMode: "SelectionBounds",
      },
    },
  };
}

export function defaultUiState(): CanvasWorkbenchUiState {
  return {
    version: "canvas-workbench.v1",
    selectedNodeIds: [],
    highlightedNodeIds: [],
    collapsedNodeIds: [],
    groupFrames: [],
    manualPositions: {},
    windowStates: {},
    zoom: 1,
    panX: 90,
    panY: 110,
    menuActionScale: 1,
    isMaximized: false,
    activeInspectorTab: "",
    showDiagnostics: false,
    showMinimap: true,
  };
}

// --- Draft mutators (no project-structure precedent — this page edits a local draft rather than
// reloading from the server after every action). ---

export function applyNodePositions(
  graph: WorkflowGraph,
  positions: Array<{ nodeId: string; x: number; y: number }>,
): WorkflowGraph {
  const byId = new Map(positions.map((position) => [position.nodeId, position]));
  return {
    ...graph,
    nodes: graph.nodes.map((node) => {
      const position = byId.get(node.id);
      return position ? { ...node, canvasX: position.x, canvasY: position.y } : node;
    }),
  };
}

export function upsertNode(graph: WorkflowGraph, node: WorkflowNode): WorkflowGraph {
  const exists = graph.nodes.some((existing) => existing.id === node.id);
  return {
    ...graph,
    nodes: exists
      ? graph.nodes.map((existing) => (existing.id === node.id ? node : existing))
      : [...graph.nodes, node],
  };
}

export function removeNode(graph: WorkflowGraph, nodeId: string): WorkflowGraph {
  return {
    ...graph,
    nodes: graph.nodes.filter((node) => node.id !== nodeId),
    edges: graph.edges.filter(
      (edge) => edge.sourceNodeId !== nodeId && edge.targetNodeId !== nodeId,
    ),
  };
}

export function duplicateNode(graph: WorkflowGraph, nodeId: string): WorkflowGraph {
  const source = graph.nodes.find((node) => node.id === nodeId);
  if (!source) return graph;
  const duplicate: WorkflowNode = {
    ...source,
    id: crypto.randomUUID(),
    name: `${source.name} copy`,
    canvasX: coerceNumber(source.canvasX) + 48,
    canvasY: coerceNumber(source.canvasY) + 48,
  };
  return { ...graph, nodes: [...graph.nodes, duplicate] };
}

export function upsertEdge(graph: WorkflowGraph, edge: WorkflowEdge): WorkflowGraph {
  const exists = graph.edges.some((existing) => existing.id === edge.id);
  return {
    ...graph,
    edges: exists
      ? graph.edges.map((existing) => (existing.id === edge.id ? edge : existing))
      : [...graph.edges, edge],
  };
}

export function removeEdge(graph: WorkflowGraph, edgeId: string): WorkflowGraph {
  return { ...graph, edges: graph.edges.filter((edge) => edge.id !== edgeId) };
}
