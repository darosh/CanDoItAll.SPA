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
import { createEmitter, type Emitter } from "./emitter.js";
import { clampZoom } from "./viewport.js";

interface StoreEvents {
  surfaceChanged: ResolvedSurface;
  selectionChanged: SelectionChangedEvent;
  nodesMoved: NodesMovedEvent;
  viewportChanged: ViewportChangedEvent;
}

const STORE_EVENT_NAMES: (keyof StoreEvents)[] = [
  "surfaceChanged",
  "selectionChanged",
  "nodesMoved",
  "viewportChanged",
];

/**
 * Plain framework-agnostic reactive container: a mutable snapshot plus a per-event-type
 * emitter (see state/emitter.ts). Deliberately not Vue's reactivity system (this package has no
 * hard Vue dependency — see src/vue/CanvasWorkbench.vue for the optional Vue adapter). Models
 * canvas *state* only — one-shot requests to the host page (context menus, clipboard) go through
 * interaction/request-bus.ts instead, so state-diffing and host-facing requests don't get
 * conflated.
 */
export class WorkbenchStore {
  private surface: ResolvedSurface;
  private readonly emitter: Emitter<StoreEvents> = createEmitter(STORE_EVENT_NAMES);

  constructor(input: CanvasWorkbenchSurfaceInput) {
    this.surface = normalizeSurface(input);
  }

  getSurface(): ResolvedSurface {
    return this.surface;
  }

  setSurface(input: CanvasWorkbenchSurfaceInput, options?: { preserveViewport?: boolean }): void {
    const previousUiState = options?.preserveViewport ? this.surface.uiState : undefined;
    this.surface = normalizeSurface(input, previousUiState);
    this.emitter.emit("surfaceChanged", this.surface);
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
    this.emitter.emit("selectionChanged", {
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
    this.emitter.emit("nodesMoved", { positions: changed });
  }

  setViewport(partial: Partial<{ zoom: number; panX: number; panY: number }>): void {
    const uiState = this.surface.uiState;
    const zoom = partial.zoom !== undefined ? clampZoom(partial.zoom) : uiState.zoom;
    const panX = partial.panX ?? uiState.panX;
    const panY = partial.panY ?? uiState.panY;
    this.surface = { ...this.surface, uiState: { ...uiState, zoom, panX, panY } };
    this.emitter.emit("viewportChanged", { zoom, panX, panY });
  }

  on<K extends keyof StoreEvents>(
    event: K,
    handler: (payload: StoreEvents[K]) => void,
  ): () => void {
    return this.emitter.on(event, handler);
  }
}

export function createWorkbenchStore(input: CanvasWorkbenchSurfaceInput): WorkbenchStore {
  return new WorkbenchStore(input);
}
