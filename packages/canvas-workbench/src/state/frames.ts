import type {
  CanvasWorkbenchPoint,
  CanvasWorkbenchSize,
  ResolvedGroupFrame,
} from "../model/types.js";

export interface FrameBounds {
  x: number;
  y: number;
  width: number;
  height: number;
}

const DEFAULT_PADDING = 24;

/**
 * Bounding box around a group frame's anchor nodes, in world coordinates. Positions/sizes come
 * from the render layer's already-resolved node placement (state/positions.ts +
 * render/reconciler.ts) so this stays pure geometry with no Konva dependency — recomputed live
 * during drag by whoever calls it (see interaction/drag.ts).
 */
export function computeFrameBounds(
  frame: ResolvedGroupFrame,
  nodeBoxes: Map<string, CanvasWorkbenchPoint & CanvasWorkbenchSize>,
  padding = DEFAULT_PADDING,
): FrameBounds | null {
  let minX = Number.POSITIVE_INFINITY;
  let minY = Number.POSITIVE_INFINITY;
  let maxX = Number.NEGATIVE_INFINITY;
  let maxY = Number.NEGATIVE_INFINITY;
  let found = false;

  for (const nodeId of frame.anchorNodeIds) {
    const box = nodeBoxes.get(nodeId);
    if (!box) continue;
    found = true;
    minX = Math.min(minX, box.x);
    minY = Math.min(minY, box.y);
    maxX = Math.max(maxX, box.x + box.width);
    maxY = Math.max(maxY, box.y + box.height);
  }

  if (!found) return null;

  return {
    x: minX - padding,
    y: minY - padding,
    width: maxX - minX + padding * 2,
    height: maxY - minY + padding * 2,
  };
}
