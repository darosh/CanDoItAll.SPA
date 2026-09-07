import type { CanvasWorkbenchPoint, ResolvedNode } from "../model/types.js";

/** A manual drag overlay (uiState.manualPositions) takes precedence over the node's own x/y. */
export function resolveNodePosition(
  node: ResolvedNode,
  manualPositions: Record<string, CanvasWorkbenchPoint>,
): CanvasWorkbenchPoint {
  return manualPositions[node.id] ?? { x: node.x, y: node.y };
}

export function resolveAllPositions(
  nodes: ResolvedNode[],
  manualPositions: Record<string, CanvasWorkbenchPoint>,
): Map<string, CanvasWorkbenchPoint> {
  const positions = new Map<string, CanvasWorkbenchPoint>();
  for (const node of nodes) {
    positions.set(node.id, resolveNodePosition(node, manualPositions));
  }
  return positions;
}
