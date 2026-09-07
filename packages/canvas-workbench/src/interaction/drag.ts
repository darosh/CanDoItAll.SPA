import type Konva from "konva";
import type { CanvasWorkbenchPoint, ResolvedNode } from "../model/types.js";
import type { WorkbenchStore } from "../state/store.js";

export interface DragMoveContext {
  nodeId: string;
  group: Konva.Group;
  nodeGroups: Map<string, Konva.Group>;
  selectedNodeIds: string[];
  shiftKey: boolean;
}

export type DragMoveHook = (context: DragMoveContext) => void;
export type DragEndHook = (nodeId: string) => void;

/** Extension-facing half of the hook registry (see WorkbenchExtensionContext.dragHooks) — register
 * only, no way to run hooks from outside bindNodeDrag itself. */
export interface DragHookRegistry {
  registerDragMoveHook(hook: DragMoveHook): () => void;
  registerDragEndHook(hook: DragEndHook): () => void;
}

export interface DragHooks extends DragHookRegistry {
  runDragMoveHooks(context: DragMoveContext): void;
  runDragEndHooks(nodeId: string): void;
}

/**
 * One instance per `createCanvasWorkbench()` call (see api/facade.ts) — deliberately not a
 * module-level singleton, since that would leak hooks across multiple independent workbenches on
 * the same page (a supported scenario: createCanvasWorkbench() can be called more than once).
 */
export function createDragHooks(): DragHooks {
  const moveHooks = new Set<DragMoveHook>();
  const endHooks = new Set<DragEndHook>();
  return {
    registerDragMoveHook(hook) {
      moveHooks.add(hook);
      return () => moveHooks.delete(hook);
    },
    registerDragEndHook(hook) {
      endHooks.add(hook);
      return () => endHooks.delete(hook);
    },
    runDragMoveHooks(context) {
      for (const hook of moveHooks) hook(context);
    },
    runDragEndHooks(nodeId) {
      for (const hook of endHooks) hook(nodeId);
    },
  };
}

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
  dragHooks: DragHooks,
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

  function onDragMove(event: Konva.KonvaEventObject<DragEvent>): void {
    const selected = store.getSurface().uiState.selectedNodeIds;
    const shiftKey = "shiftKey" in event.evt && Boolean(event.evt.shiftKey);
    dragHooks.runDragMoveHooks({
      nodeId: group.id(),
      group,
      nodeGroups: getNodeGroups(),
      selectedNodeIds: selected,
      shiftKey,
    });

    const position = group.position();
    const dx = position.x - lastPosition.x;
    const dy = position.y - lastPosition.y;
    lastPosition = position;

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
    dragHooks.runDragEndHooks(group.id());

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
