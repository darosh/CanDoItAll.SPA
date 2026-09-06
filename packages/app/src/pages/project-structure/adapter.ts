import type { CanDoItAllClient } from "@candoitall/api-client";
import type {
  CanvasWorkbenchChip,
  CanvasWorkbenchLink,
  CanvasWorkbenchNode,
  CanvasWorkbenchSurface,
  CanvasWorkbenchUiState,
} from "@/lib/canvas-workbench/types";
import { buildNodeContextActions, buildQuickCreateActions } from "./actionCatalog";
import { resolveVisualProfile } from "./nodeKindRegistry";

// Port of CanDoItAll/src/Modules/CanDoItAll.Modules.Workbench/CanvasAdapters/ProjectStructureGraphAdapter.cs's
// BuildSurface/MapCanvasNode, adapted to the flatter wire DTO from
// postApiProjectStructureProjectsProjectIdStructureRead (see canDoItAllClientOperations.ts) —
// the source works over the internal ProjectStructureNode domain object; this works over the
// wire shape directly since that's all a browser client has access to.
//
// Not ported: Annotations (from ProjectStructureNodeAnnotationBuilder — not yet read). Context
// actions use actionCatalog.ts's generic per-node set rather than the source's per-family
// composition (see that file's header comment for the exact simplification).

type StructureReadResult = Awaited<
  ReturnType<CanDoItAllClient["postApiProjectStructureProjectsProjectIdStructureRead"]>
>;
type WireNode = StructureReadResult["nodes"][number];
type WireLink = StructureReadResult["links"][number];

const LINK_KIND_NAMES = [
  "Contains",
  "DependsOn",
  "Uses",
  "Validates",
  "Tests",
  "Blocks",
  "DerivedFrom",
  "BelongsTo",
] as const;

function resolveFamily(objectType: WireNode["objectType"]): string {
  switch (objectType) {
    case "ProjectRoot":
      return "root";
    case "Phase":
    case "PromptSession":
    case "PromptFlow":
    case "ProjectBlock":
    case "ProcessDefinition":
      return "group";
    case "ProcessRun":
    case "ValidationRun":
    case "TestPlan":
    case "Decision":
    case "SecretReference":
      return "special";
    default:
      return "item";
  }
}

function resolveProgress(node: WireNode): { mode: string; percent: number } {
  const progressPercent =
    typeof node.progressPercent === "number" ? node.progressPercent : Number(node.progressPercent);
  if (node.progressMode && Number.isFinite(progressPercent) && progressPercent >= 0) {
    const normalizedMode = node.progressMode.trim().toLowerCase();
    const normalizedPercent = Math.min(100, Math.max(0, progressPercent));
    switch (normalizedMode) {
      case "complete":
        return { mode: "complete", percent: 100 };
      case "started":
        return { mode: "started", percent: 0 };
      case "na":
        return { mode: "na", percent: 0 };
      default:
        return { mode: "progress", percent: normalizedPercent };
    }
  }

  const status = (node.status ?? "").trim().toLowerCase();
  if (
    !status ||
    status.includes("n/a") ||
    status.includes("not applicable") ||
    status.includes("skip")
  ) {
    return { mode: "na", percent: 0 };
  }
  if (
    ["done", "complete", "approved", "used", "ready", "final"].some((needle) =>
      status.includes(needle),
    )
  ) {
    return { mode: "complete", percent: 100 };
  }
  if (["review", "validation", "testing", "qa"].some((needle) => status.includes(needle))) {
    return { mode: "progress", percent: 78 };
  }
  if (["active", "in progress", "running", "blocked"].some((needle) => status.includes(needle))) {
    return { mode: "progress", percent: 62 };
  }
  if (["planned", "draft", "pending", "queued"].some((needle) => status.includes(needle))) {
    return { mode: "progress", percent: 28 };
  }
  return { mode: "progress", percent: 48 };
}

function buildHeaderChips(node: WireNode): CanvasWorkbenchChip[] {
  return node.badges.map((badge) => ({ text: badge, tone: "accent" }));
}

function buildFooterChips(node: WireNode): CanvasWorkbenchChip[] {
  const chips: CanvasWorkbenchChip[] = [];
  if (node.route) chips.push({ text: "Routed", tone: "neutral" });
  if (node.artifactId) chips.push({ text: "Artifact", tone: "success" });
  if (node.mediaOriginalFileName) chips.push({ text: "Uploaded", tone: "accent" });
  return chips;
}

function resolveBranchLabel(objectType: WireNode["objectType"]): string {
  if (objectType === "Phase" || objectType === "PromptSession") return "Branch";
  if (objectType === "ProcessDefinition") return "Runs";
  return "";
}

// ProjectStructureProjectRole: None=0, ActiveProject=1, Subproject=2, ParentProject=3, AdditionalParentProject=4
// (CanDoItAll/src/Modules/CanDoItAll.Modules.Workbench/Workbench/ProjectWorkbenchModels.cs).
function resolvePalette(node: WireNode, fallbackPaletteKey: string): string {
  switch (node.projectRole) {
    case 2:
      return "info";
    case 3:
    case 4:
      return "neutral";
    default:
      return fallbackPaletteKey || "neutral";
  }
}

function mapNode(node: WireNode, hasChildren: boolean): CanvasWorkbenchNode {
  const visualProfile = resolveVisualProfile(node.objectType, node.objectSubtype, node.status);
  const progress = resolveProgress(node);
  const isInlineTextNode = node.objectType === "Note" && !node.subtitle;
  const inlineText = node.notes || node.title;

  return {
    id: node.id,
    parentId: node.parentId,
    family: resolveFamily(node.objectType),
    kind: visualProfile.label,
    icon: visualProfile.icon,
    title: node.title,
    subtitle: node.subtitle,
    leadText: "",
    compactPath: null,
    status: node.status,
    branchLabel: resolveBranchLabel(node.objectType),
    accentColor: visualProfile.accentColor,
    paletteKey: resolvePalette(node, visualProfile.paletteKey),
    durationLabel: node.badges.includes("Scheduled") ? "Scheduled" : "",
    statusPill: node.status,
    progressMode: progress.mode,
    progressPercent: progress.percent,
    markerIcon: node.markerIcon,
    markerTone: node.markerTone,
    markerLabel: node.markerLabel,
    markers: [],
    priority: typeof node.priority === "number" ? node.priority : Number(node.priority) || 0,
    isRequired:
      node.objectType === "ProjectRoot" ||
      node.objectType === "Phase" ||
      node.objectType === "PromptSession" ||
      node.objectType === "ProcessDefinition",
    isCollapsible: hasChildren,
    isReadOnly: node.projectRole === 4,
    isPreviewOnly: node.projectRole === 4,
    isInlineTextNode,
    inlineText,
    inlineTextPlaceholder: "Write note",
    mediaKind: "",
    mediaPreviewUrl: "",
    mediaPreviewAlt: node.title,
    mediaContentType: node.mediaContentType ?? "",
    mediaFileName: node.mediaOriginalFileName ?? "",
    x: typeof node.x === "number" ? node.x : Number(node.x) || 0,
    y: typeof node.y === "number" ? node.y : Number(node.y) || 0,
    chips: buildHeaderChips(node),
    footerChips: buildFooterChips(node),
    annotations: [],
    contextActions: buildNodeContextActions(!!node.parentId, node.projectRole === 4),
    inputPorts: [],
    outputPorts: [],
  };
}

function mapLink(link: WireLink): CanvasWorkbenchLink {
  return {
    sourceId: link.sourceId,
    targetId: link.targetId,
    sourcePortId: "",
    targetPortId: "",
    kind: LINK_KIND_NAMES[link.kind] ?? "Contains",
    label: "",
    summary: "",
    tone: "neutral",
    isUserAuthored: link.isUserAuthored,
  };
}

export function buildSurface(
  read: StructureReadResult,
  uiState: CanvasWorkbenchUiState,
): CanvasWorkbenchSurface {
  const parentIds = new Set(
    read.nodes.filter((node) => node.parentId).map((node) => node.parentId as string),
  );

  return {
    surfaceId: `project-structure:${read.projectId}`,
    mode: "authoring",
    dependencySourceId: "",
    nodes: read.nodes.map((node) => mapNode(node, parentIds.has(node.id))),
    links: read.links.map(mapLink),
    uiState,
    chrome: {
      hintText:
        "Select a project object, drag to reorganize, use the minimap for navigation, and toggle diagnostics when alignment or routing feels off.",
      emptyStateKicker: "Project structure",
      emptyStateTitle: `Map ${read.projectName}`,
      emptyStateDescription:
        "Use quick create to add phases, prompts, references, and validation artifacts to this project.",
      focusActionLabel: "Focus first",
      showFocusAction: true,
      showQuickCreateRail: true,
      childNoteActionId: null,
      siblingNoteActionId: null,
      inlineNotePlaceholder: "Write note",
      collapseOnDoubleClick: true,
      quickCreateActions: buildQuickCreateActions(),
      groupContextActions: [],
      diagnostics: {
        isEnabled: true,
        showNodeBounds: true,
        showConnectorAnchors: true,
        showViewportStats: true,
      },
      minimap: { isEnabled: true, title: "Project overview" },
      clipboard: {
        isEnabled: true,
        allowCopy: true,
        allowCut: true,
        allowPaste: true,
        allowDuplicate: true,
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
        isEnabled: true,
        showResizeHandles: true,
        showRotateHandle: true,
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
