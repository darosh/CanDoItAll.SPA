import Konva from "konva";
import type { ResolvedNode } from "../../model/types.js";
import type { NodeRenderer, PortAnchorQuery, RenderContext } from "../registry.js";
import { resolveTone } from "../theme.js";

export const DIAMOND_WIDTH = 160;
export const DIAMOND_HEIGHT = 120;
const ANCHOR_RADIUS = 4;

/** The diamond's 4 vertices, in mount/paint order (top, right, bottom, left) — also exactly the
 * set of points `getPortAnchor` below picks from, so a link always lands on a dot the user can
 * see. Unlike the card, a diamond typically fans multiple named ports (branches) out of the same
 * one or two vertices — there's no meaningful *distinct* on-shape position per port, so these are
 * fixed connection points rather than one dot per `inputPorts`/`outputPorts` entry. */
function diamondVertices(): {
  top: [number, number];
  right: [number, number];
  bottom: [number, number];
  left: [number, number];
} {
  const w = DIAMOND_WIDTH;
  const h = DIAMOND_HEIGHT;
  return {
    top: [w / 2, 0],
    right: [w, h / 2],
    bottom: [w / 2, h],
    left: [0, h / 2],
  };
}

function diamondPoints(): number[] {
  const { top, right, bottom, left } = diamondVertices();
  return [...top, ...right, ...bottom, ...left];
}

function paintConnectorAnchors(group: Konva.Group, ctx: RenderContext): void {
  const anchorGroup = group.findOne<Konva.Group>(".diamond-connector-anchors");
  if (!anchorGroup) return;

  const options = ctx.connectorAnchors;
  const visible = options.isEnabled !== false && options.showOnSelection !== false && ctx.selected;
  anchorGroup.visible(visible);
  if (!visible) return;

  anchorGroup.destroyChildren();
  const tokens = resolveTone(ctx.node.accentColor || ctx.node.status || "warning");
  for (const [x, y] of Object.values(diamondVertices())) {
    anchorGroup.add(
      new Konva.Circle({
        x,
        y,
        radius: ANCHOR_RADIUS,
        fill: tokens.fill,
        stroke: tokens.stroke,
        strokeWidth: 1,
      }),
    );
  }
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

  paintConnectorAnchors(group, ctx);
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
    group.add(
      new Konva.Group({ name: "diamond-connector-anchors", listening: false, visible: false }),
    );

    paint(group, ctx);
    return group;
  },

  update(group: Konva.Group, ctx: RenderContext): void {
    group.position(ctx.position);
    paint(group, ctx);
  },

  getPortAnchor(_node: ResolvedNode, query: PortAnchorQuery) {
    const { top, right, bottom, left } = diamondVertices();
    const cx = DIAMOND_WIDTH / 2;
    const cy = DIAMOND_HEIGHT / 2;
    const dx = query.towardLocalPoint.x - cx;
    const dy = query.towardLocalPoint.y - cy;
    const [x, y] = Math.abs(dx) >= Math.abs(dy) ? (dx >= 0 ? right : left) : dy >= 0 ? bottom : top;
    return { x, y };
  },
};
