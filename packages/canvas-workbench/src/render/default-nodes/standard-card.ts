import Konva from "konva";
import type { NodeRenderer, RenderContext } from "../registry.js";
import { resolveTone } from "../theme.js";

export const CARD_WIDTH = 200;
export const CARD_HEIGHT = 96;
const MARKER_RADIUS = 4;

function paint(group: Konva.Group, ctx: RenderContext): void {
  const tokens = resolveTone(ctx.node.accentColor || ctx.node.status || "neutral");

  const rect = group.findOne<Konva.Rect>(".card-rect");
  rect?.fill(tokens.fill);
  rect?.stroke(ctx.selected ? tokens.text : tokens.stroke);
  rect?.strokeWidth(ctx.selected ? 2.5 : 1.5);

  const title = group.findOne<Konva.Text>(".card-title");
  title?.text(ctx.node.title || ctx.node.id);
  title?.fill(tokens.text);

  const subtitle = group.findOne<Konva.Text>(".card-subtitle");
  subtitle?.text(ctx.node.subtitle);
  subtitle?.visible(ctx.node.subtitle.length > 0);

  const markerGroup = group.findOne<Konva.Group>(".card-markers");
  markerGroup?.destroyChildren();
  ctx.node.markers.slice(0, 6).forEach((marker, index) => {
    const markerTokens = resolveTone(marker.tone);
    markerGroup?.add(
      new Konva.Circle({
        x: index * (MARKER_RADIUS * 2 + 4) + MARKER_RADIUS,
        y: MARKER_RADIUS,
        radius: MARKER_RADIUS,
        fill: markerTokens.stroke,
      }),
    );
  });
}

export const standardCardRenderer: NodeRenderer = {
  mount(ctx: RenderContext): Konva.Group {
    const group = new Konva.Group({
      x: ctx.position.x,
      y: ctx.position.y,
      name: "node-group",
      id: ctx.node.id,
    });

    group.add(
      new Konva.Rect({
        name: "card-rect",
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        cornerRadius: 8,
      }),
    );
    group.add(
      new Konva.Text({
        name: "card-title",
        x: 12,
        y: 12,
        width: CARD_WIDTH - 24,
        fontSize: 14,
        fontStyle: "bold",
        wrap: "word",
      }),
    );
    group.add(
      new Konva.Text({
        name: "card-subtitle",
        x: 12,
        y: 34,
        width: CARD_WIDTH - 24,
        fontSize: 12,
        fill: "#71717a",
        wrap: "word",
      }),
    );
    group.add(new Konva.Group({ name: "card-markers", x: 12, y: CARD_HEIGHT - 20 }));

    paint(group, ctx);
    return group;
  },

  update(group: Konva.Group, ctx: RenderContext): void {
    group.position(ctx.position);
    paint(group, ctx);
  },
};
