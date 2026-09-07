import Konva from "konva";
import type { NodeRenderer, RenderContext } from "../registry.js";
import { resolveTone } from "../theme.js";

export const INLINE_WIDTH = 220;
export const INLINE_HEIGHT = 64;

function paint(group: Konva.Group, ctx: RenderContext): void {
  const tokens = resolveTone(ctx.node.accentColor || "neutral");

  const rect = group.findOne<Konva.Rect>(".inline-rect");
  rect?.fill(tokens.fill);
  rect?.stroke(ctx.selected ? tokens.text : tokens.stroke);
  rect?.strokeWidth(ctx.selected ? 2.5 : 1);
  rect?.dash(ctx.node.inlineText.length === 0 ? [4, 4] : []);

  const text = group.findOne<Konva.Text>(".inline-text");
  const hasText = ctx.node.inlineText.length > 0;
  text?.text(hasText ? ctx.node.inlineText : ctx.node.inlineTextPlaceholder);
  text?.fontStyle(hasText ? "normal" : "italic");
  text?.fill(hasText ? tokens.text : "#a1a1aa");
}

export const inlineTextRenderer: NodeRenderer = {
  mount(ctx: RenderContext): Konva.Group {
    const group = new Konva.Group({
      x: ctx.position.x,
      y: ctx.position.y,
      name: "node-group",
      id: ctx.node.id,
    });

    group.add(
      new Konva.Rect({
        name: "inline-rect",
        width: INLINE_WIDTH,
        height: INLINE_HEIGHT,
        cornerRadius: 6,
      }),
    );
    group.add(
      new Konva.Text({
        name: "inline-text",
        x: 10,
        y: 10,
        width: INLINE_WIDTH - 20,
        height: INLINE_HEIGHT - 20,
        fontSize: 13,
        wrap: "word",
      }),
    );

    paint(group, ctx);
    return group;
  },

  update(group: Konva.Group, ctx: RenderContext): void {
    group.position(ctx.position);
    paint(group, ctx);
  },
};
