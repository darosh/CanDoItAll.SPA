import type { CanvasWorkbenchPoint } from "./types.js";

export interface SelectionChangedEvent {
  primaryNodeId: string | null;
  selectedNodeIds: string[];
}

export interface NodePositionChange {
  nodeId: string;
  x: number;
  y: number;
}

export interface NodesMovedEvent {
  positions: NodePositionChange[];
}

export interface ViewportChangedEvent {
  zoom: number;
  panX: number;
  panY: number;
}

// Typed for contract compatibility with the old engine's event payloads; not yet emitted —
// the context-menu/composer/clipboard extension slices are what will fire these.
export interface ContextActionRequest {
  nodeId: string | null;
  actionId: string;
  x: number;
  y: number;
}

export interface CreateActionRequest {
  actionId: string;
  sourceNodeId: string | null;
  x: number;
  y: number;
  parentNodeId: string | null;
  title: string;
  subtitle: string;
}

export interface NodeEditRequest {
  nodeId: string;
  title: string;
  notes: string;
}

export type ClipboardAction = "Copy" | "Cut" | "Paste" | "Duplicate";

export interface ClipboardRequest {
  action: ClipboardAction;
  surfaceId: string;
  primaryNodeId: string | null;
  selectedNodeIds: string[];
  anchorWorld: CanvasWorkbenchPoint | null;
}
