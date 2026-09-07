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

/** A tone-colored pill at the link's midpoint showing `link.label` — e.g. a switch/router's
 * named route ("Tasks", "DEFAULT") or a decision's branch ("yes"/"no"). Matches the original
 * app's `drawCanvasLinkLabel`. A separate Konva.Group from the arrow (rather than folding the
 * text into it) so `createLinkShape`'s `Konva.Arrow` return type — and every reader that expects
 * one, including the structural snapshot test's `.find("Arrow")` — stays unchanged. */
export function createLinkLabelShape(): Konva.Group {
  const group = new Konva.Group({ name: "link-label", visible: false, listening: false });
  group.add(new Konva.Rect({ name: "link-label-rect", cornerRadius: 10 }));
  group.add(
    new Konva.Text({
      name: "link-label-text",
      fontSize: 10,
      fontStyle: "bold",
      align: "center",
      wrap: "none",
    }),
  );
  return group;
}

export function updateLinkLabelShape(
  group: Konva.Group,
  link: ResolvedLink,
  source: CanvasWorkbenchPoint,
  target: CanvasWorkbenchPoint,
): void {
  const label = link.label.trim();
  group.visible(label.length > 0);
  if (!label) return;

  const tokens = resolveTone(link.tone);
  const text = group.findOne<Konva.Text>(".link-label-text");
  text?.text(label);
  const textWidth = text?.width() ?? 0;
  const width = textWidth + 20;
  const height = 20;

  const rect = group.findOne<Konva.Rect>(".link-label-rect");
  rect?.width(width);
  rect?.height(height);
  rect?.fill(tokens.fill);
  rect?.stroke(tokens.stroke);
  rect?.strokeWidth(1);
  text?.position({ x: 10, y: (height - (text.height() ?? 12)) / 2 });
  text?.fill(tokens.text);

  const midpoint = { x: (source.x + target.x) / 2, y: (source.y + target.y) / 2 };
  group.position({ x: midpoint.x - width / 2, y: midpoint.y - height / 2 });
}
