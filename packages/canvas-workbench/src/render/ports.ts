import type { CanvasWorkbenchPoint, CanvasWorkbenchPort } from "../model/types.js";

/**
 * Shared by standard-card.ts's connector-anchor dots and links.ts's arrow endpoints, so a link
 * always terminates exactly on the dot a user sees (or where it would sit if
 * `chrome.connectorAnchors` hides it) — ports are spaced evenly along the node's left (input) or
 * right (output) edge, matching the old engine's port-column layout. `portId` not found among
 * `ports` (including the common "no port on this link" case) falls back to the edge's midpoint.
 */
export function cardPortLocalPosition(
  ports: CanvasWorkbenchPort[],
  portId: string | null,
  edgeX: number,
  height: number,
): CanvasWorkbenchPoint {
  const index = portId ? ports.findIndex((port) => port.id === portId) : -1;
  if (ports.length === 0 || index === -1) return { x: edgeX, y: height / 2 };
  const spacing = height / (ports.length + 1);
  return { x: edgeX, y: spacing * (index + 1) };
}
