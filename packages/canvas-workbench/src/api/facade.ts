import type {
  ClipboardRequest,
  ContextActionRequest,
  CreateActionRequest,
  CreateComposerRequest,
  NodeEditRequest,
  NodesMovedEvent,
  SelectionChangedEvent,
} from "../model/events.js";
import type {
  CanvasWorkbenchAction,
  CanvasWorkbenchSurfaceInput,
  ResolvedUiState,
} from "../model/types.js";
import { bindNodeDrag, createDragHooks } from "../interaction/drag.js";
import { ExtensionHost, type WorkbenchExtension } from "../interaction/extensions.js";
import { createClipboardExtension } from "../interaction/extensions/clipboard.js";
import { createContextMenuExtension } from "../interaction/extensions/context-menu.js";
import {
  createDiagnosticsExtension,
  type DiagnosticsSnapshot,
} from "../interaction/extensions/diagnostics.js";
import { createMarqueeExtension } from "../interaction/extensions/marquee.js";
import { createMinimapExtension } from "../interaction/extensions/minimap.js";
import { createSnapGuidesExtension } from "../interaction/extensions/snap-guides.js";
import { attachPanZoom } from "../interaction/pan-zoom.js";
import { createRequestBus } from "../interaction/request-bus.js";
import { bindBackgroundDeselect, bindNodeSelection } from "../interaction/selection.js";
import { createDefaultRegistry, type NodeRendererRegistry } from "../render/registry.js";
import { createReconciler } from "../render/reconciler.js";
import { createStageLayers } from "../render/stage.js";
import { createWorkbenchStore } from "../state/store.js";
import { computeFitView, computeFocusNode, zoomAtPoint } from "../state/viewport.js";

const NODE_OPEN_DOUBLE_CLICK = "dblclick";

export interface CanvasWorkbenchHandle {
  update(surface: CanvasWorkbenchSurfaceInput, options?: { preserveViewport?: boolean }): void;
  fitView(): void;
  focusNode(nodeId: string): void;
  setZoomPercent(zoomPercent: number): void;
  resize(): void;
  selectNodes(nodeIds: string[], primaryNodeId?: string | null): void;
  getState(): ResolvedUiState;
  openContextSubmenu(actionId: string): void;
  openQuickCreateMenu(anchorElement: HTMLElement): void;
  openCreateComposer(action: CanvasWorkbenchAction, request: CreateComposerRequest): void;
  toggleDiagnostics(): void;
  getDiagnostics(): DiagnosticsSnapshot;
  toggleMinimap(): void;
  on(event: "selectionChanged", handler: (payload: SelectionChangedEvent) => void): () => void;
  on(event: "nodesMoved", handler: (payload: NodesMovedEvent) => void): () => void;
  on(event: "contextAction", handler: (payload: ContextActionRequest) => void): () => void;
  on(event: "createAction", handler: (payload: CreateActionRequest) => void): () => void;
  on(event: "nodeEdited", handler: (payload: NodeEditRequest) => void): () => void;
  on(event: "nodeOpened", handler: (nodeId: string) => void): () => void;
  on(event: "clipboardAction", handler: (payload: ClipboardRequest) => void): () => void;
  registerExtension(extension: WorkbenchExtension): void;
  dispose(): void;
}

export interface CreateCanvasWorkbenchOptions {
  registry?: NodeRendererRegistry;
  /** See interaction/extensions/clipboard.ts — required opt-in before clipboard keyboard
   * shortcuts fire, mirroring the old engine's `hasClipboardHandler` create() option. */
  hasClipboardHandler?: boolean;
}

export function createCanvasWorkbench(
  host: HTMLElement,
  surface: CanvasWorkbenchSurfaceInput,
  options: CreateCanvasWorkbenchOptions = {},
): CanvasWorkbenchHandle {
  const store = createWorkbenchStore(surface);
  const requestBus = createRequestBus();
  const dragHooks = createDragHooks();
  const stageBundle = createStageLayers(host);
  const registry = options.registry ?? createDefaultRegistry();
  const dragUnbinders = new Map<string, () => void>();
  const selectionUnbinders = new Map<string, () => void>();
  const doubleClickUnbinders = new Map<string, () => void>();

  const reconciler = createReconciler(stageBundle, store, registry, {
    onNodeMounted(group, node) {
      selectionUnbinders.set(node.id, bindNodeSelection(group, store));
      dragUnbinders.set(
        node.id,
        bindNodeDrag(group, node, store, () => reconciler.nodeGroups, dragHooks),
      );
      const onOpen = () => requestBus.emit("nodeOpened", node.id);
      group.on(NODE_OPEN_DOUBLE_CLICK, onOpen);
      doubleClickUnbinders.set(node.id, () => group.off(NODE_OPEN_DOUBLE_CLICK, onOpen));
    },
  });

  const detachPanZoom = attachPanZoom(stageBundle.stage, stageBundle.background, store);
  const detachDeselect = bindBackgroundDeselect(stageBundle.background, store);

  const extensionHost = new ExtensionHost({
    stage: stageBundle.stage,
    layers: stageBundle.layers,
    store,
    host,
    nodeGroups: () => reconciler.nodeGroups,
    requestBus,
    dragHooks,
  });

  const contextMenu = createContextMenuExtension();
  extensionHost.register(contextMenu);
  extensionHost.register(
    createClipboardExtension({ hasClipboardHandler: options.hasClipboardHandler ?? false }),
  );
  const diagnostics = createDiagnosticsExtension();
  extensionHost.register(diagnostics);
  extensionHost.register(createMarqueeExtension());
  extensionHost.register(createSnapGuidesExtension());
  const minimap = createMinimapExtension();
  extensionHost.register(minimap);

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
      // Pivoting on the world origin (what a bare `{ zoom }` update does — panX/panY are left
      // untouched) reads as "top-left" whenever the origin isn't smack in the middle of the
      // current view, which is most of the time. Anchor on the viewport's own center instead,
      // the same `zoomAtPoint` pivot math the wheel handler already uses (interaction/pan-zoom.ts)
      // — just with the pointer fixed at the center rather than wherever the cursor happens to be.
      const uiState = store.getSurface().uiState;
      const viewportCenter = {
        x: stageBundle.stage.width() / 2,
        y: stageBundle.stage.height() / 2,
      };
      const factor = zoomPercent / 100 / uiState.zoom;
      const next = zoomAtPoint(
        { zoom: uiState.zoom, panX: uiState.panX, panY: uiState.panY },
        viewportCenter,
        factor,
      );
      store.setViewport(next);
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

    openContextSubmenu(actionId) {
      contextMenu.openContextSubmenu(actionId);
    },

    openQuickCreateMenu(anchorElement) {
      contextMenu.openQuickCreateMenu(anchorElement);
    },

    openCreateComposer(action, request) {
      contextMenu.openCreateComposer(action, request);
    },

    toggleDiagnostics() {
      diagnostics.toggle();
    },

    getDiagnostics() {
      return diagnostics.getSnapshot();
    },

    toggleMinimap() {
      minimap.toggle();
    },

    on(event: never, handler: (payload: never) => void) {
      if (event === "selectionChanged" || event === "nodesMoved") {
        return store.on(event, handler as never);
      }
      return requestBus.on(event, handler as never);
    },

    registerExtension(extension) {
      extensionHost.register(extension);
    },

    dispose() {
      detachPanZoom();
      detachDeselect();
      for (const unbind of dragUnbinders.values()) unbind();
      for (const unbind of selectionUnbinders.values()) unbind();
      for (const unbind of doubleClickUnbinders.values()) unbind();
      extensionHost.destroy();
      reconciler.destroy();
      stageBundle.destroy();
    },
  };
}
