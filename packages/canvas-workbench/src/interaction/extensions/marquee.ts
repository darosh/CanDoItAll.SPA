import Konva from "konva";
import { normalizeRect, resolveMarqueeSelection, type MarqueeRect } from "../../state/marquee.js";
import type { WorkbenchExtension, WorkbenchExtensionContext } from "../extensions.js";
import { isModifierKeyPressed } from "../modifier-keys.js";

interface MarqueeState {
  startX: number;
  startY: number;
}

/**
 * Rubber-band multi-select, active only while the configured modifier key
 * (`chrome.marqueeSelection.modifierKey`, default Alt) is held on a background-Rect gesture —
 * see pan-zoom.ts's symmetric check on the same option, which is what makes plain drag still pan.
 * Drawn as a Konva.Rect in the overlay layer rather than a DOM `<div>` (the old engine's
 * approach): it's already in the render tree and needs no separate CSS positioning math, unlike
 * the DOM overlays context-menu.ts/diagnostics.ts use for genuinely form-like or arbitrarily
 * positioned content. The actual hit-testing math lives in state/marquee.ts, kept Konva-free and
 * unit-testable on its own.
 */
export function createMarqueeExtension(): WorkbenchExtension {
  let ctx: WorkbenchExtensionContext | null = null;
  let rect: Konva.Rect | null = null;
  let state: MarqueeState | null = null;

  function options() {
    return ctx?.store.getSurface().chrome.marqueeSelection;
  }

  function isEnabled(): boolean {
    return options()?.isEnabled !== false;
  }

  function modifierKey(): string {
    return options()?.modifierKey ?? "Alt";
  }

  function selectionMode(): string {
    return options()?.selectionMode ?? "Intersect";
  }

  function onPointerDown(event: Konva.KonvaEventObject<PointerEvent>): void {
    if (!ctx || !rect || !isEnabled()) return;
    if (!isModifierKeyPressed(event.evt, modifierKey())) return;

    const point = ctx.layers.overlay.getRelativePointerPosition();
    if (!point) return;
    event.evt.preventDefault();

    state = { startX: point.x, startY: point.y };
    rect.setAttrs({ x: point.x, y: point.y, width: 0, height: 0, visible: true });
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
  }

  function onPointerMove(): void {
    if (!ctx || !rect || !state) return;
    const point = ctx.layers.overlay.getRelativePointerPosition();
    if (!point) return;
    rect.setAttrs(normalizeRect({ x: state.startX, y: state.startY }, point));
    ctx.layers.overlay.batchDraw();
  }

  function onPointerUp(): void {
    if (ctx && rect && state) {
      const marqueeBounds: MarqueeRect = {
        x: rect.x(),
        y: rect.y(),
        width: rect.width(),
        height: rect.height(),
      };
      const nodeBoxes = new Map<string, MarqueeRect>();
      for (const [nodeId, group] of ctx.nodeGroups()) {
        nodeBoxes.set(nodeId, group.getClientRect({ relativeTo: ctx.layers.nodes }));
      }
      const matched = resolveMarqueeSelection(nodeBoxes, marqueeBounds, selectionMode());
      ctx.store.setSelection(matched, matched[0] ?? null);
    }

    state = null;
    rect?.setAttrs({ visible: false });
    ctx?.layers.overlay.batchDraw();
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerup", onPointerUp);
  }

  return {
    id: "marquee",

    onAttach(context) {
      ctx = context;
      rect = new Konva.Rect({
        name: "marquee-rect",
        fill: "rgba(59, 130, 246, 0.12)",
        stroke: "#3b82f6",
        strokeWidth: 1,
        dash: [4, 4],
        listening: false,
        visible: false,
      });
      context.layers.overlay.add(rect);
      // Bound to the background Rect specifically (not the whole stage) — a pointerdown that
      // starts on a node should always drag that node, modifier or not.
      context.layers.frames.findOne<Konva.Rect>(".background")?.on("pointerdown", onPointerDown);
    },

    onDetach() {
      ctx?.layers.frames.findOne<Konva.Rect>(".background")?.off("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      rect?.destroy();
      rect = null;
      state = null;
      ctx = null;
    },
  };
}
