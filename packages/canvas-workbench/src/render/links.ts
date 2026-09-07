import Konva from "konva";
import type { ResolvedLink } from "../model/types.js";
import { resolveTone } from "./theme.js";

export interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
}

function centerOf(rect: Rect): { x: number; y: number } {
  return { x: rect.x + rect.width / 2, y: rect.y + rect.height / 2 };
}

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

export function updateLinkShape(
  arrow: Konva.Arrow,
  link: ResolvedLink,
  sourceRect: Rect,
  targetRect: Rect,
): void {
  const source = centerOf(sourceRect);
  const target = centerOf(targetRect);
  const tokens = resolveTone(link.tone);
  arrow.points([source.x, source.y, target.x, target.y]);
  arrow.stroke(tokens.stroke);
  arrow.fill(tokens.stroke);
  arrow.strokeWidth(link.isUserAuthored ? 2 : 1.5);
}
