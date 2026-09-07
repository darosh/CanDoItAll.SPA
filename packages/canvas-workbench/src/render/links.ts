import Konva from "konva";
import type { CanvasWorkbenchPoint, ResolvedLink } from "../model/types.js";
import { resolveTone } from "./theme.js";

export function createLinkShape(): Konva.Arrow {
  return new Konva.Arrow({
    name: "link-arrow",
    points: [0, 0, 0, 0],
    pointerLength: 8,
    pointerWidth: 8,
    // Konva's default hit area for a thin line is its visual strokeWidth, which makes a 1-2px
    // connector nearly unclickable — widen the hit area explicitly instead of hand-rolling
    // hit-testing the way the old engine did.
    hitStrokeWidth: 12,
    listening: false,
  });
}

/** `source`/`target` are already-resolved world-space connection points (see
 * render/reconciler.ts's renderLinks, which asks each endpoint's NodeRenderer.getPortAnchor for
 * them) — this just paints the arrow, no endpoint geometry left to compute here. */
export function updateLinkShape(
  arrow: Konva.Arrow,
  link: ResolvedLink,
  source: CanvasWorkbenchPoint,
  target: CanvasWorkbenchPoint,
): void {
  const tokens = resolveTone(link.tone);
  arrow.points([source.x, source.y, target.x, target.y]);
  arrow.stroke(tokens.stroke);
  arrow.fill(tokens.stroke);
  arrow.strokeWidth(link.isUserAuthored ? 2 : 1.5);
}
