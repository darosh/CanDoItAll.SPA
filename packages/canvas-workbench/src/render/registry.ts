import type Konva from "konva";
import type {
  CanvasWorkbenchConnectorAnchorOptions,
  CanvasWorkbenchPoint,
  ResolvedNode,
} from "../model/types.js";
import { decisionDiamondRenderer } from "./default-nodes/decision-diamond.js";
import { inlineTextRenderer } from "./default-nodes/inline-text.js";
import { standardCardRenderer } from "./default-nodes/standard-card.js";

export interface RenderContext {
  node: ResolvedNode;
  position: CanvasWorkbenchPoint;
  selected: boolean;
  /** `chrome.connectorAnchors` for the current surface, resolved once per render pass — see
   * default-nodes/standard-card.ts for the only renderer that currently reads it. */
  connectorAnchors: CanvasWorkbenchConnectorAnchorOptions;
}

export interface PortAnchorQuery {
  portId: string | null;
  direction: "input" | "output";
  /** The other endpoint's world-space anchor point, expressed relative to *this* node's own
   * origin (i.e. `otherWorldPoint - thisNode.position`) — shapes with no fixed per-port geometry
   * (the diamond) use this to pick which side/vertex faces the other node. Card-shaped renderers
   * can ignore it (their sides are fixed: inputs left, outputs right). */
  towardLocalPoint: CanvasWorkbenchPoint;
}

export interface NodeRenderer {
  mount(ctx: RenderContext): Konva.Group;
  update(group: Konva.Group, ctx: RenderContext): void;
  unmount?(group: Konva.Group): void;
  /** Returns where a link should attach, as a point in the same local (pre-position-offset)
   * coordinate space `mount()` builds its Konva children in. Optional — render/links.ts falls
   * back to the node's bounding-box center when a renderer doesn't implement this (e.g.
   * inline-text nodes have no meaningful port geometry). */
  getPortAnchor?(node: ResolvedNode, query: PortAnchorQuery): CanvasWorkbenchPoint;
}

const DECISION_FAMILY = "workflow-decision";

/**
 * Look vs. logic seam: consumers override a node kind/family's visuals by registering their own
 * `NodeRenderer` here, without touching state/ or interaction/. Resolution order: exact
 * `family` match, then `kind` match, then the built-in defaults keyed by structural node flags
 * (isInlineTextNode / decision family), then the standard card as the final fallback.
 */
export class NodeRendererRegistry {
  private readonly byKey = new Map<string, NodeRenderer>();

  register(key: string, renderer: NodeRenderer): void {
    this.byKey.set(key, renderer);
  }

  resolve(node: ResolvedNode): NodeRenderer {
    const byFamily = node.family && this.byKey.get(node.family);
    if (byFamily) return byFamily;

    const byKind = node.kind && this.byKey.get(node.kind);
    if (byKind) return byKind;

    if (node.isInlineTextNode) return inlineTextRenderer;

    const isDecision =
      node.family.toLowerCase() === DECISION_FAMILY ||
      node.paletteKey.toLowerCase() === DECISION_FAMILY;
    if (isDecision) return decisionDiamondRenderer;

    return standardCardRenderer;
  }
}

export function createDefaultRegistry(): NodeRendererRegistry {
  return new NodeRendererRegistry();
}
