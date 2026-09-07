import Konva from "konva";
import type { ResolvedNode } from "../../model/types.js";
import { cardPortLocalPosition } from "../ports.js";
import type { NodeRenderer, PortAnchorQuery, RenderContext } from "../registry.js";
import { resolveTone } from "../theme.js";

export const CARD_WIDTH = 200;
export const CARD_HEIGHT = 96;
const MARKER_RADIUS = 4;
const ANCHOR_RADIUS = 4;

/**
 * Connector-anchor dots at each port's edge position, per `chrome.connectorAnchors` (slice 8 —
 * lowest priority in the plan doc, with no evidence of a real consumer need today). Scoped down
 * from the old engine's design: only the selection-driven half is implemented
 * (`showOnSelection`) since that's already flowing through RenderContext.selected on every
 * render pass; `showOnHover` would need new live per-node hover-state plumbing with no current
 * reader to justify it, so it's typed (see model/types.ts) but not wired here.
 */
function paintConnectorAnchors(group: Konva.Group, ctx: RenderContext): void {
  const anchorGroup = group.findOne<Konva.Group>(".card-connector-anchors");
  if (!anchorGroup) return;

  const options = ctx.connectorAnchors;
  const visible = options.isEnabled !== false && options.showOnSelection !== false && ctx.selected;
  anchorGroup.visible(visible);
  if (!visible) return;

  anchorGroup.destroyChildren();

  function addAnchors(ports: RenderContext["node"]["inputPorts"], edgeX: number): void {
    ports.forEach((port) => {
      const tokens = resolveTone(port.tone);
      const { y } = cardPortLocalPosition(ports, port.id, edgeX, CARD_HEIGHT);
      anchorGroup?.add(
        new Konva.Circle({
          x: edgeX,
          y,
          radius: ANCHOR_RADIUS,
          fill: tokens.fill,
          stroke: tokens.stroke,
          strokeWidth: 1,
        }),
      );
    });
  }

  addAnchors(ctx.node.inputPorts, 0);
  addAnchors(ctx.node.outputPorts, CARD_WIDTH);
}

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

  paintConnectorAnchors(group, ctx);
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
    group.add(
      new Konva.Group({ name: "card-connector-anchors", listening: false, visible: false }),
    );

    paint(group, ctx);
    return group;
  },

  update(group: Konva.Group, ctx: RenderContext): void {
    group.position(ctx.position);
    paint(group, ctx);
  },

  getPortAnchor(node: ResolvedNode, query: PortAnchorQuery) {
    const ports = query.direction === "input" ? node.inputPorts : node.outputPorts;
    const edgeX = query.direction === "input" ? 0 : CARD_WIDTH;
    return cardPortLocalPosition(ports, query.portId, edgeX, CARD_HEIGHT);
  },
};
