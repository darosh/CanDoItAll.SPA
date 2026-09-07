import type {
  NodesMovedEvent,
  SelectionChangedEvent,
  ViewportChangedEvent,
} from "../model/events.js";
import { normalizeSurface } from "../model/normalize.js";
import type {
  CanvasWorkbenchPoint,
  CanvasWorkbenchSurfaceInput,
  ResolvedSurface,
} from "../model/types.js";
import { clampZoom } from "./viewport.js";

interface StoreEvents {
  surfaceChanged: ResolvedSurface;
  selectionChanged: SelectionChangedEvent;
  nodesMoved: NodesMovedEvent;
  viewportChanged: ViewportChangedEvent;
}

type Listener<T> = (payload: T) => void;

/**
 * Plain framework-agnostic reactive container: a mutable snapshot plus a per-event-type
 * listener set. Deliberately not Vue's reactivity system (this package has no hard Vue
 * dependency — see src/vue/CanvasWorkbench.vue for the optional Vue adapter) and not a full
 * pub/sub library — just enough to let render/reconciler.ts and interaction/* react to state
 * changes without polling.
 */
export class WorkbenchStore {
  private surface: ResolvedSurface;
  private readonly listeners: { [K in keyof StoreEvents]: Set<Listener<StoreEvents[K]>> } = {
    surfaceChanged: new Set(),
    selectionChanged: new Set(),
    nodesMoved: new Set(),
    viewportChanged: new Set(),
  };

  constructor(input: CanvasWorkbenchSurfaceInput) {
    this.surface = normalizeSurface(input);
  }

  getSurface(): ResolvedSurface {
    return this.surface;
  }

  setSurface(input: CanvasWorkbenchSurfaceInput, options?: { preserveViewport?: boolean }): void {
    const previousUiState = options?.preserveViewport ? this.surface.uiState : undefined;
    this.surface = normalizeSurface(input, previousUiState);
    this.emit("surfaceChanged", this.surface);
  }

  setSelection(nodeIds: string[], primaryNodeId?: string | null): void {
    this.surface = {
      ...this.surface,
      uiState: {
        ...this.surface.uiState,
        selectedNodeIds: nodeIds,
        primaryNodeId: primaryNodeId ?? nodeIds[0] ?? null,
      },
    };
    this.emit("selectionChanged", {
      selectedNodeIds: nodeIds,
      primaryNodeId: this.surface.uiState.primaryNodeId,
    });
  }

  commitNodePositions(positions: Map<string, CanvasWorkbenchPoint>): void {
    const manualPositions = { ...this.surface.uiState.manualPositions };
    const changed: { nodeId: string; x: number; y: number }[] = [];
    for (const [nodeId, point] of positions) {
      manualPositions[nodeId] = point;
      changed.push({ nodeId, x: point.x, y: point.y });
    }
    this.surface = {
      ...this.surface,
      uiState: { ...this.surface.uiState, manualPositions },
    };
    this.emit("nodesMoved", { positions: changed });
  }

  setViewport(partial: Partial<{ zoom: number; panX: number; panY: number }>): void {
    const uiState = this.surface.uiState;
    const zoom = partial.zoom !== undefined ? clampZoom(partial.zoom) : uiState.zoom;
    const panX = partial.panX ?? uiState.panX;
    const panY = partial.panY ?? uiState.panY;
    this.surface = { ...this.surface, uiState: { ...uiState, zoom, panX, panY } };
    this.emit("viewportChanged", { zoom, panX, panY });
  }

  on<K extends keyof StoreEvents>(event: K, handler: Listener<StoreEvents[K]>): () => void {
    this.listeners[event].add(handler);
    return () => this.listeners[event].delete(handler);
  }

  private emit<K extends keyof StoreEvents>(event: K, payload: StoreEvents[K]): void {
    for (const handler of this.listeners[event]) handler(payload);
  }
}

export function createWorkbenchStore(input: CanvasWorkbenchSurfaceInput): WorkbenchStore {
  return new WorkbenchStore(input);
}
