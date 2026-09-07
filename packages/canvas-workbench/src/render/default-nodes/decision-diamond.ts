import Konva from "konva";
import type { NodeRenderer, RenderContext } from "../registry.js";
import { resolveTone } from "../theme.js";

export const DIAMOND_WIDTH = 160;
export const DIAMOND_HEIGHT = 120;

function diamondPoints(): number[] {
  const w = DIAMOND_WIDTH;
  const h = DIAMOND_HEIGHT;
  return [w / 2, 0, w, h / 2, w / 2, h, 0, h / 2];
}

function paint(group: Konva.Group, ctx: RenderContext): void {
  const tokens = resolveTone(ctx.node.accentColor || ctx.node.status || "warning");

  const diamond = group.findOne<Konva.Line>(".diamond-shape");
  diamond?.fill(tokens.fill);
  diamond?.stroke(ctx.selected ? tokens.text : tokens.stroke);
  diamond?.strokeWidth(ctx.selected ? 2.5 : 1.5);

  const title = group.findOne<Konva.Text>(".diamond-title");
  title?.text(ctx.node.title || ctx.node.id);
  title?.fill(tokens.text);
}

export const decisionDiamondRenderer: NodeRenderer = {
  mount(ctx: RenderContext): Konva.Group {
    const group = new Konva.Group({
      x: ctx.position.x,
      y: ctx.position.y,
      name: "node-group",
      id: ctx.node.id,
    });

    group.add(
      new Konva.Line({
        name: "diamond-shape",
        points: diamondPoints(),
        closed: true,
      }),
    );
    group.add(
      new Konva.Text({
        name: "diamond-title",
        x: 16,
        y: DIAMOND_HEIGHT / 2 - 10,
        width: DIAMOND_WIDTH - 32,
        align: "center",
        fontSize: 13,
        fontStyle: "bold",
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
