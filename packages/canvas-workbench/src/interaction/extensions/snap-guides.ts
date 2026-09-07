import Konva from "konva";
import { resolveSnapAdjustment, type SnapBox, type SnapGuide } from "../../state/snap-guides.js";
import type { DragMoveContext } from "../drag.js";
import type { WorkbenchExtension, WorkbenchExtensionContext } from "../extensions.js";

const GUIDE_HALF_LENGTH = 100_000;
const DEFAULT_TOLERANCE = 18;

/**
 * Hooks into interaction/drag.ts's drag-move pipeline (rather than binding its own Konva drag
 * listeners) to snap the dragged node's box into alignment with any stationary node's center on
 * either axis, drawing the matched guide line(s) as `Konva.Line`s in the overlay layer. Cleared
 * on drag end. The actual alignment math lives in state/snap-guides.ts, kept Konva-free.
 */
export function createSnapGuidesExtension(): WorkbenchExtension {
  let ctx: WorkbenchExtensionContext | null = null;
  let guideGroup: Konva.Group | null = null;
  let unregisterMove: (() => void) | null = null;
  let unregisterEnd: (() => void) | null = null;

  function options() {
    return ctx?.store.getSurface().chrome.snapGuides;
  }

  function isEnabled(): boolean {
    return options()?.isEnabled !== false;
  }

  function tolerance(): number {
    return options()?.tolerance ?? DEFAULT_TOLERANCE;
  }

  function shiftBypassesSnap(): boolean {
    return (options()?.modifierPolicy ?? "ShiftBypassesSnap") !== "none";
  }

  function clearGuides(): void {
    if (!guideGroup || guideGroup.children.length === 0) return;
    guideGroup.destroyChildren();
    ctx?.layers.overlay.batchDraw();
  }

  function drawGuides(guides: SnapGuide[]): void {
    if (!ctx || !guideGroup) return;
    guideGroup.destroyChildren();
    for (const guide of guides) {
      const points =
        guide.orientation === "vertical"
          ? [guide.value, -GUIDE_HALF_LENGTH, guide.value, GUIDE_HALF_LENGTH]
          : [-GUIDE_HALF_LENGTH, guide.value, GUIDE_HALF_LENGTH, guide.value];
      guideGroup.add(new Konva.Line({ points, stroke: "#f97316", strokeWidth: 1, dash: [4, 4] }));
    }
    ctx.layers.overlay.batchDraw();
  }

  function onDragMove(dragContext: DragMoveContext): void {
    if (!ctx || !isEnabled()) return;
    if (dragContext.shiftKey && shiftBypassesSnap()) {
      clearGuides();
      return;
    }

    const draggedBox = dragContext.group.getClientRect({ relativeTo: ctx.layers.nodes });
    const stationary: SnapBox[] = [];
    for (const [nodeId, group] of dragContext.nodeGroups) {
      if (dragContext.selectedNodeIds.includes(nodeId)) continue;
      stationary.push(group.getClientRect({ relativeTo: ctx.layers.nodes }));
    }

    const zoom = ctx.store.getSurface().uiState.zoom || 1;
    const worldTolerance = tolerance() / zoom;
    const { dx, dy, guides } = resolveSnapAdjustment(draggedBox, stationary, worldTolerance);

    if (dx !== 0 || dy !== 0) {
      dragContext.group.position({ x: dragContext.group.x() + dx, y: dragContext.group.y() + dy });
    }
    if (guides.length > 0) drawGuides(guides);
    else clearGuides();
  }

  function onDragEnd(): void {
    clearGuides();
  }

  return {
    id: "snap-guides",

    onAttach(context) {
      ctx = context;
      guideGroup = new Konva.Group({ name: "snap-guides", listening: false });
      context.layers.overlay.add(guideGroup);
      unregisterMove = context.dragHooks.registerDragMoveHook(onDragMove);
      unregisterEnd = context.dragHooks.registerDragEndHook(onDragEnd);
    },

    onDetach() {
      unregisterMove?.();
      unregisterEnd?.();
      unregisterMove = null;
      unregisterEnd = null;
      guideGroup?.destroy();
      guideGroup = null;
      ctx = null;
    },
  };
}
