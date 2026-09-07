import type Konva from "konva";
import type { WorkbenchStore } from "../state/store.js";
import { isModifierKeyPressed } from "./modifier-keys.js";
import { zoomAtPoint } from "../state/viewport.js";

const WHEEL_ZOOM_FACTOR = 1.05;

interface PanState {
  startClientX: number;
  startClientY: number;
  startPanX: number;
  startPanY: number;
}

/**
 * Pans by tracking raw pointer events on the transparent background Rect (see render/stage.ts)
 * rather than Konva's `draggable` node-dragging — deliberately, not just for the
 * marquee-selection extension seam (swapping this one handler by tool mode later), but because
 * `draggable` is actively wrong here: Konva computes a dragged node's next position from the
 * pointer delta *through the node's current absolute transform*, and `store.setViewport()`
 * synchronously changes the stage's own scale/position as a side effect of every dragmove — so
 * mutating the stage transform mid-drag invalidates the transform Konva's own drag step just
 * used, producing the rapid two-position flicker. Tracking `clientX`/`clientY` directly sidesteps
 * Konva's drag machinery entirely: those coordinates are unaffected by the stage's own transform,
 * so no feedback loop is possible.
 */
export function attachPanZoom(
  stage: Konva.Stage,
  background: Konva.Rect,
  store: WorkbenchStore,
): () => void {
  let panState: PanState | null = null;

  function onPointerDown(event: Konva.KonvaEventObject<PointerEvent>): void {
    const surface = store.getSurface();
    const marqueeOptions = surface.chrome.marqueeSelection;
    const marqueeEnabled = marqueeOptions?.isEnabled !== false;
    if (marqueeEnabled && isModifierKeyPressed(event.evt, marqueeOptions?.modifierKey ?? "Alt")) {
      // The marquee-selection extension (interaction/extensions/marquee.ts) handles this
      // gesture instead — see its own symmetric check against the same chrome options.
      return;
    }

    const uiState = surface.uiState;
    panState = {
      startClientX: event.evt.clientX,
      startClientY: event.evt.clientY,
      startPanX: uiState.panX,
      startPanY: uiState.panY,
    };
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
  }

  function onPointerMove(event: PointerEvent): void {
    if (!panState) return;
    store.setViewport({
      panX: panState.startPanX + (event.clientX - panState.startClientX),
      panY: panState.startPanY + (event.clientY - panState.startClientY),
    });
  }

  function onPointerUp(): void {
    panState = null;
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerup", onPointerUp);
  }

  function onWheel(event: Konva.KonvaEventObject<WheelEvent>): void {
    event.evt.preventDefault();
    const pointer = stage.getPointerPosition();
    if (!pointer) return;

    const uiState = store.getSurface().uiState;
    const factor = event.evt.deltaY < 0 ? WHEEL_ZOOM_FACTOR : 1 / WHEEL_ZOOM_FACTOR;
    const next = zoomAtPoint(
      { zoom: uiState.zoom, panX: uiState.panX, panY: uiState.panY },
      pointer,
      factor,
    );
    store.setViewport(next);
  }

  background.on("pointerdown", onPointerDown);
  stage.on("wheel", onWheel);

  return () => {
    background.off("pointerdown", onPointerDown);
    stage.off("wheel", onWheel);
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerup", onPointerUp);
  };
}
