import type Konva from "konva";
import type { WorkbenchStore } from "../state/store.js";
import { selectSingle, toggleSelection } from "../state/selection.js";

/** Binds click/tap selection to a mounted node Group. Looks up fresh selection state from the
 * store on every click rather than capturing it at bind time, since this handler stays attached
 * across re-renders (mount only happens once per node id — see render/reconciler.ts). */
export function bindNodeSelection(group: Konva.Group, store: WorkbenchStore): () => void {
  function onClick(event: Konva.KonvaEventObject<MouseEvent | TouchEvent>): void {
    event.cancelBubble = true;
    const nodeId = group.id();
    const additive =
      "shiftKey" in event.evt && (event.evt.shiftKey || event.evt.ctrlKey || event.evt.metaKey);
    const current = store.getSurface().uiState.selectedNodeIds;
    const next = additive ? toggleSelection(current, nodeId) : selectSingle(nodeId);
    store.setSelection(next, next[next.length - 1] ?? null);
  }

  group.on("click tap", onClick);
  return () => group.off("click tap", onClick);
}

/** Clicking empty canvas clears the current selection. */
export function bindBackgroundDeselect(background: Konva.Rect, store: WorkbenchStore): () => void {
  function onClick(): void {
    store.setSelection([]);
  }
  background.on("click", onClick);
  return () => background.off("click", onClick);
}
