import type Konva from "konva";
import type { CanvasWorkbenchPoint, ResolvedNode } from "../model/types.js";
import type { WorkbenchStore } from "../state/store.js";

/**
 * Binds node dragging. Multi-selection drags apply the same screen delta directly to the other
 * selected groups' `.position()` rather than reparenting into a temporary Group — reparenting
 * would perturb z-order and break render/frames.ts's mid-drag bounding-box recompute.
 *
 * `node`'s isReadOnly/isPreviewOnly flags are read once at bind time (mount happens once per
 * node id — see render/reconciler.ts); a node that flips read-only after creation keeps its
 * original draggable state until the workbench is recreated. Acceptable for the MVP surface.
 */
export function bindNodeDrag(
  group: Konva.Group,
  node: ResolvedNode,
  store: WorkbenchStore,
  getNodeGroups: () => Map<string, Konva.Group>,
): () => void {
  group.draggable(!node.isReadOnly && !node.isPreviewOnly);

  let lastPosition = group.position();

  function onDragStart(): void {
    lastPosition = group.position();
    const selected = store.getSurface().uiState.selectedNodeIds;
    if (!selected.includes(group.id())) {
      store.setSelection([group.id()]);
    }
  }

  function onDragMove(): void {
    const position = group.position();
    const dx = position.x - lastPosition.x;
    const dy = position.y - lastPosition.y;
    lastPosition = position;

    const selected = store.getSurface().uiState.selectedNodeIds;
    if (selected.length > 1 && selected.includes(group.id())) {
      const groups = getNodeGroups();
      for (const id of selected) {
        if (id === group.id()) continue;
        const other = groups.get(id);
        if (other) other.position({ x: other.x() + dx, y: other.y() + dy });
      }
    }
  }

  function onDragEnd(): void {
    const selected = store.getSurface().uiState.selectedNodeIds;
    const ids = selected.includes(group.id()) ? selected : [group.id()];
    const groups = getNodeGroups();
    const positions = new Map<string, CanvasWorkbenchPoint>();
    for (const id of ids) {
      const g = groups.get(id);
      if (g) positions.set(id, g.position());
    }
    store.commitNodePositions(positions);
  }

  group.on("dragstart", onDragStart);
  group.on("dragmove", onDragMove);
  group.on("dragend", onDragEnd);

  return () => {
    group.off("dragstart", onDragStart);
    group.off("dragmove", onDragMove);
    group.off("dragend", onDragEnd);
  };
}
