import type Konva from "konva";
import type { CanvasWorkbenchPoint, ResolvedNode } from "../model/types.js";
import { decisionDiamondRenderer } from "./default-nodes/decision-diamond.js";
import { inlineTextRenderer } from "./default-nodes/inline-text.js";
import { standardCardRenderer } from "./default-nodes/standard-card.js";

export interface RenderContext {
  node: ResolvedNode;
  position: CanvasWorkbenchPoint;
  selected: boolean;
}

export interface NodeRenderer {
  mount(ctx: RenderContext): Konva.Group;
  update(group: Konva.Group, ctx: RenderContext): void;
  unmount?(group: Konva.Group): void;
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
