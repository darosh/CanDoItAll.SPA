import Konva from "konva";
import type { ResolvedGroupFrame } from "../model/types.js";
import type { FrameBounds } from "../state/frames.js";
import { resolveTone } from "./theme.js";

export function createFrameGroup(frame: ResolvedGroupFrame): Konva.Group {
  const group = new Konva.Group({ name: "frame-group", id: frame.id, listening: false });
  group.add(new Konva.Rect({ name: "frame-rect", cornerRadius: 12, dash: [6, 4] }));
  group.add(
    new Konva.Text({ name: "frame-label", x: 12, y: -22, fontSize: 12, fontStyle: "bold" }),
  );
  return group;
}

export function updateFrameGroup(
  group: Konva.Group,
  frame: ResolvedGroupFrame,
  bounds: FrameBounds,
): void {
  const tokens = resolveTone(frame.tone);
  group.position({ x: bounds.x, y: bounds.y });

  const rect = group.findOne<Konva.Rect>(".frame-rect");
  rect?.width(bounds.width);
  rect?.height(bounds.height);
  rect?.stroke(tokens.stroke);
  rect?.fill(`${tokens.fill}80`);

  const label = group.findOne<Konva.Text>(".frame-label");
  label?.text(frame.label);
  label?.fill(tokens.text);
}
