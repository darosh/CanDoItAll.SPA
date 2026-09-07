import type Konva from "konva";
import type { WorkbenchStore } from "../state/store.js";
import { zoomAtPoint } from "../state/viewport.js";

const WHEEL_ZOOM_FACTOR = 1.05;

/**
 * Pans by dragging the transparent background Rect (see render/stage.ts) rather than
 * `stage.draggable(true)` — keeping pan on its own handler means the marquee-selection
 * extension slice can later swap this one handler by tool mode without touching stage config
 * (see interaction/extensions.ts).
 */
export function attachPanZoom(
  stage: Konva.Stage,
  background: Konva.Rect,
  store: WorkbenchStore,
): () => void {
  background.draggable(true);
  let lastPosition = background.position();

  function onDragStart(): void {
    lastPosition = background.position();
  }

  function onDragMove(): void {
    const position = background.position();
    const dx = position.x - lastPosition.x;
    const dy = position.y - lastPosition.y;
    lastPosition = position;

    const uiState = store.getSurface().uiState;
    store.setViewport({
      panX: uiState.panX + dx * uiState.zoom,
      panY: uiState.panY + dy * uiState.zoom,
    });
    // The background rect only exists to receive the drag gesture — the actual pan is applied
    // to the stage via setViewport, so pin the rect back to its origin every move.
    background.position({ x: 0, y: 0 });
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

  background.on("dragstart", onDragStart);
  background.on("dragmove", onDragMove);
  stage.on("wheel", onWheel);

  return () => {
    background.off("dragstart", onDragStart);
    background.off("dragmove", onDragMove);
    stage.off("wheel", onWheel);
  };
}
