import type { NodesMovedEvent, SelectionChangedEvent } from "../model/events.js";
import type { CanvasWorkbenchSurfaceInput, ResolvedUiState } from "../model/types.js";
import { ExtensionHost, type WorkbenchExtension } from "../interaction/extensions.js";
import { bindNodeDrag } from "../interaction/drag.js";
import { attachPanZoom } from "../interaction/pan-zoom.js";
import { bindBackgroundDeselect, bindNodeSelection } from "../interaction/selection.js";
import { createDefaultRegistry, type NodeRendererRegistry } from "../render/registry.js";
import { createReconciler } from "../render/reconciler.js";
import { createStageLayers } from "../render/stage.js";
import { computeFitView, computeFocusNode } from "../state/viewport.js";
import { createWorkbenchStore } from "../state/store.js";

export interface CanvasWorkbenchHandle {
  update(surface: CanvasWorkbenchSurfaceInput, options?: { preserveViewport?: boolean }): void;
  fitView(): void;
  focusNode(nodeId: string): void;
  setZoomPercent(zoomPercent: number): void;
  resize(): void;
  selectNodes(nodeIds: string[], primaryNodeId?: string | null): void;
  getState(): ResolvedUiState;
  on(event: "selectionChanged", handler: (payload: SelectionChangedEvent) => void): () => void;
  on(event: "nodesMoved", handler: (payload: NodesMovedEvent) => void): () => void;
  registerExtension(extension: WorkbenchExtension): void;
  dispose(): void;
}

export interface CreateCanvasWorkbenchOptions {
  registry?: NodeRendererRegistry;
}

export function createCanvasWorkbench(
  host: HTMLElement,
  surface: CanvasWorkbenchSurfaceInput,
  options: CreateCanvasWorkbenchOptions = {},
): CanvasWorkbenchHandle {
  const store = createWorkbenchStore(surface);
  const stageBundle = createStageLayers(host);
  const registry = options.registry ?? createDefaultRegistry();
  const dragUnbinders = new Map<string, () => void>();
  const selectionUnbinders = new Map<string, () => void>();

  const reconciler = createReconciler(stageBundle, store, registry, {
    onNodeMounted(group, node) {
      selectionUnbinders.set(node.id, bindNodeSelection(group, store));
      dragUnbinders.set(
        node.id,
        bindNodeDrag(group, node, store, () => reconciler.nodeGroups),
      );
    },
  });

  const detachPanZoom = attachPanZoom(stageBundle.stage, stageBundle.background, store);
  const detachDeselect = bindBackgroundDeselect(stageBundle.background, store);
  const extensionHost = new ExtensionHost({
    stage: stageBundle.stage,
    layers: stageBundle.layers,
    store,
  });

  function currentBounds() {
    const nodes = store.getSurface().nodes;
    if (nodes.length === 0) return null;
    let minX = Number.POSITIVE_INFINITY;
    let minY = Number.POSITIVE_INFINITY;
    let maxX = Number.NEGATIVE_INFINITY;
    let maxY = Number.NEGATIVE_INFINITY;
    for (const [, group] of reconciler.nodeGroups) {
      const rect = group.getClientRect({ relativeTo: stageBundle.layers.nodes });
      minX = Math.min(minX, rect.x);
      minY = Math.min(minY, rect.y);
      maxX = Math.max(maxX, rect.x + rect.width);
      maxY = Math.max(maxY, rect.y + rect.height);
    }
    return { minX, minY, maxX, maxY };
  }

  return {
    update(nextSurface, updateOptions) {
      store.setSurface(nextSurface, updateOptions);
    },

    fitView() {
      const bounds = currentBounds();
      if (!bounds) return;
      const viewport = computeFitView(bounds, {
        width: stageBundle.stage.width(),
        height: stageBundle.stage.height(),
      });
      store.setViewport(viewport);
    },

    focusNode(nodeId) {
      const group = reconciler.nodeGroups.get(nodeId);
      if (!group) return;
      const rect = group.getClientRect({ relativeTo: stageBundle.layers.nodes });
      const center = { x: rect.x + rect.width / 2, y: rect.y + rect.height / 2 };
      const zoom = store.getSurface().uiState.zoom;
      const viewport = computeFocusNode(
        center,
        { width: stageBundle.stage.width(), height: stageBundle.stage.height() },
        zoom,
      );
      store.setViewport(viewport);
    },

    setZoomPercent(zoomPercent) {
      store.setViewport({ zoom: zoomPercent / 100 });
    },

    resize() {
      stageBundle.resize();
    },

    selectNodes(nodeIds, primaryNodeId) {
      store.setSelection(nodeIds, primaryNodeId);
    },

    getState() {
      return store.getSurface().uiState;
    },

    on(event: "selectionChanged" | "nodesMoved", handler: (payload: never) => void) {
      return store.on(event, handler as never);
    },

    registerExtension(extension) {
      extensionHost.register(extension);
    },

    dispose() {
      detachPanZoom();
      detachDeselect();
      for (const unbind of dragUnbinders.values()) unbind();
      for (const unbind of selectionUnbinders.values()) unbind();
      extensionHost.destroy();
      reconciler.destroy();
      stageBundle.destroy();
    },
  };
}
