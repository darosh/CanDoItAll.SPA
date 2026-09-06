// Visual-profile table for WorkflowNodeKind/WorkflowValueShapeKind, mirroring
// pages/project-structure/nodeKindRegistry.ts's builder shape. There is no server-side
// equivalent here (the workflow wire model carries no icon/color at all — unlike
// project-structure's node), so this table's values are a fresh design choice, made to read
// consistently with project-structure's existing hue vocabulary rather than ported from a
// source file.

import { WorkflowEdgeKind, WorkflowNodeKind, WorkflowValueShapeKind } from "./types";

export interface WorkflowNodeVisualProfile {
  /** Two-letter monogram shown on the node (maps to CanvasWorkbenchNode.icon). */
  icon: string;
  accentColor: string;
  /** Human-readable type label (maps to CanvasWorkbenchNode.kind). */
  label: string;
  paletteKey: "primary" | "secondary" | "success" | "info" | "warning" | "danger" | "neutral";
}

const nodeProfiles: Record<number, WorkflowNodeVisualProfile> = {
  [WorkflowNodeKind.Start]: {
    icon: "ST",
    accentColor: "#16a34a",
    label: "Start",
    paletteKey: "success",
  },
  [WorkflowNodeKind.LlmCall]: {
    icon: "AI",
    accentColor: "#0f766e",
    label: "LLM call",
    paletteKey: "success",
  },
  [WorkflowNodeKind.Triage]: {
    icon: "TR",
    accentColor: "#7c3aed",
    label: "Triage",
    paletteKey: "secondary",
  },
  [WorkflowNodeKind.StrictLogic]: {
    icon: "LG",
    accentColor: "#2563eb",
    label: "Logic",
    paletteKey: "info",
  },
  [WorkflowNodeKind.Executor]: {
    icon: "EX",
    accentColor: "#d97706",
    label: "Executor",
    paletteKey: "warning",
  },
  [WorkflowNodeKind.Artifact]: {
    icon: "AR",
    accentColor: "#0891b2",
    label: "Artifact",
    paletteKey: "info",
  },
  [WorkflowNodeKind.HumanInput]: {
    icon: "HI",
    accentColor: "#db2777",
    label: "Human input",
    paletteKey: "danger",
  },
  [WorkflowNodeKind.AgentStep]: {
    icon: "AG",
    accentColor: "#0f766e",
    label: "Agent step",
    paletteKey: "success",
  },
  [WorkflowNodeKind.Subworkflow]: {
    icon: "SW",
    accentColor: "#4338ca",
    label: "Subworkflow",
    paletteKey: "primary",
  },
  [WorkflowNodeKind.End]: {
    icon: "EN",
    accentColor: "#475569",
    label: "End",
    paletteKey: "neutral",
  },
};

const fallbackNodeProfile: WorkflowNodeVisualProfile = {
  icon: "??",
  accentColor: "#475569",
  label: "Unknown",
  paletteKey: "neutral",
};

export function resolveNodeVisualProfile(kind: number): WorkflowNodeVisualProfile {
  return nodeProfiles[kind] ?? fallbackNodeProfile;
}

interface PortShapeProfile {
  accentColor: string;
  categoryKey: string;
  tone: string;
}

const portShapeProfiles: Record<number, PortShapeProfile> = {
  [WorkflowValueShapeKind.Text]: { accentColor: "#475569", categoryKey: "text", tone: "neutral" },
  [WorkflowValueShapeKind.Json]: { accentColor: "#0891b2", categoryKey: "json", tone: "info" },
  [WorkflowValueShapeKind.Object]: {
    accentColor: "#4338ca",
    categoryKey: "object",
    tone: "primary",
  },
  [WorkflowValueShapeKind.Boolean]: {
    accentColor: "#7c3aed",
    categoryKey: "boolean",
    tone: "secondary",
  },
  [WorkflowValueShapeKind.Number]: { accentColor: "#2563eb", categoryKey: "number", tone: "info" },
  [WorkflowValueShapeKind.FileReference]: {
    accentColor: "#0f766e",
    categoryKey: "file",
    tone: "success",
  },
  [WorkflowValueShapeKind.ArtifactReference]: {
    accentColor: "#d97706",
    categoryKey: "artifact",
    tone: "warning",
  },
};

const fallbackPortShapeProfile: PortShapeProfile = {
  accentColor: "#475569",
  categoryKey: "unknown",
  tone: "neutral",
};

export function resolvePortShapeProfile(shapeKind: number): PortShapeProfile {
  return portShapeProfiles[shapeKind] ?? fallbackPortShapeProfile;
}

/** Edge/route tone, reusing the tone vocabulary pages/project-structure/actionCatalog.ts uses. */
export function resolveEdgeVisualProfile(
  edgeKind: number,
  routeKind: number | null | undefined,
): { tone: string } {
  if (edgeKind === WorkflowEdgeKind.FanOut) return { tone: "sky" };
  if (edgeKind === WorkflowEdgeKind.FanIn) return { tone: "primary" };
  if (edgeKind === WorkflowEdgeKind.Conditional) {
    switch (routeKind) {
      case 1: // Predicate
        return { tone: "sky" };
      case 2: // SwitchCase
        return { tone: "accent" };
      case 3: // SwitchDefault
        return { tone: "ghost" };
      case 4: // FanOutSelector
        return { tone: "mint" };
      default:
        return { tone: "accent" };
    }
  }
  return { tone: "neutral" };
}
