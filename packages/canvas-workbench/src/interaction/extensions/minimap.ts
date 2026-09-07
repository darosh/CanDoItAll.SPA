import Konva from "konva";
import { resolveTone } from "../../render/theme.js";
import {
  computeMinimapTransform,
  minimapToWorld,
  worldToMinimap,
  type MinimapTransform,
  type WorldBounds,
} from "../../state/minimap.js";
import { computeFocusNode } from "../../state/viewport.js";
import type { WorkbenchExtension, WorkbenchExtensionContext } from "../extensions.js";

const MINIMAP_WIDTH = 160;
const MINIMAP_HEIGHT = 120;
const MINIMAP_PADDING = 8;

export interface MinimapController extends WorkbenchExtension {
  toggle(): void;
}

/**
 * A small second `Konva.Stage` (simpler than the old engine's separate raw `<canvas>` + manual
 * scale math) appended into the main stage's own `content` div, positioned via CSS in a corner —
 * scale-to-fit all node bounds, one small Rect per node (fill reflects selection, reusing
 * render/theme.ts), plus an outline Rect for the current main-stage viewport. Click-to-navigate
 * re-centers the main viewport via state/viewport.ts's computeFocusNode(). Unlike diagnostics
 * (opt-in, starts hidden), the old engine showed the minimap immediately by default — `visible`
 * here starts `true`.
 */
export function createMinimapExtension(): MinimapController {
  let ctx: WorkbenchExtensionContext | null = null;
  let wrapper: HTMLDivElement | null = null;
  let miniStage: Konva.Stage | null = null;
  let nodesGroup: Konva.Group | null = null;
  let viewportRect: Konva.Rect | null = null;
  let lastTransform: MinimapTransform | null = null;
  let visible = true;
  const unsubscribers: (() => void)[] = [];

  function options() {
    return ctx?.store.getSurface().chrome.minimap;
  }

  function isEnabled(): boolean {
    return options()?.isEnabled !== false;
  }

  function currentBounds(): WorldBounds | null {
    if (!ctx) return null;
    const groups = ctx.nodeGroups();
    if (groups.size === 0) return null;
    let minX = Number.POSITIVE_INFINITY;
    let minY = Number.POSITIVE_INFINITY;
    let maxX = Number.NEGATIVE_INFINITY;
    let maxY = Number.NEGATIVE_INFINITY;
    for (const [, group] of groups) {
      const rect = group.getClientRect({ relativeTo: ctx.layers.nodes });
      minX = Math.min(minX, rect.x);
      minY = Math.min(minY, rect.y);
      maxX = Math.max(maxX, rect.x + rect.width);
      maxY = Math.max(maxY, rect.y + rect.height);
    }
    return { minX, minY, maxX, maxY };
  }

  function render(): void {
    if (!ctx || !wrapper || !miniStage || !nodesGroup || !viewportRect) return;
    const showing = visible && isEnabled();
    wrapper.style.display = showing ? "block" : "none";
    if (!showing) return;

    const surface = ctx.store.getSurface();
    const uiState = surface.uiState;
    const zoom = uiState.zoom || 1;
    const viewportWorld = {
      x: -uiState.panX / zoom,
      y: -uiState.panY / zoom,
      width: ctx.stage.width() / zoom,
      height: ctx.stage.height() / zoom,
    };
    const viewportBounds: WorldBounds = {
      minX: viewportWorld.x,
      minY: viewportWorld.y,
      maxX: viewportWorld.x + viewportWorld.width,
      maxY: viewportWorld.y + viewportWorld.height,
    };

    const nodeBounds = currentBounds();
    // Scale-to-fit the union of node bounds AND the current viewport, not node bounds alone —
    // after fitView() the main viewport is padded well past the node bounds, and scaling only to
    // the nodes drew the viewport outline past the minimap's own canvas edge, where Canvas2D
    // silently clips anything outside its pixel dimensions (confirmed live: the outline's right
    // edge vanished after Fit view). This keeps the whole outline visible always.
    const bounds: WorldBounds = nodeBounds
      ? {
          minX: Math.min(nodeBounds.minX, viewportBounds.minX),
          minY: Math.min(nodeBounds.minY, viewportBounds.minY),
          maxX: Math.max(nodeBounds.maxX, viewportBounds.maxX),
          maxY: Math.max(nodeBounds.maxY, viewportBounds.maxY),
        }
      : viewportBounds;

    nodesGroup.destroyChildren();
    const transform = computeMinimapTransform(
      bounds,
      { width: MINIMAP_WIDTH, height: MINIMAP_HEIGHT },
      MINIMAP_PADDING,
    );
    lastTransform = transform;

    for (const [nodeId, group] of ctx.nodeGroups()) {
      const rect = group.getClientRect({ relativeTo: ctx.layers.nodes });
      const topLeft = worldToMinimap({ x: rect.x, y: rect.y }, transform);
      const node = surface.nodes.find((candidate) => candidate.id === nodeId);
      const selected = surface.uiState.selectedNodeIds.includes(nodeId);
      const tokens = resolveTone(node?.accentColor || node?.status || "neutral");
      nodesGroup.add(
        new Konva.Rect({
          x: topLeft.x,
          y: topLeft.y,
          width: Math.max(rect.width * transform.scale, 2),
          height: Math.max(rect.height * transform.scale, 2),
          fill: selected ? tokens.text : tokens.stroke,
        }),
      );
    }

    const viewportTopLeft = worldToMinimap({ x: viewportWorld.x, y: viewportWorld.y }, transform);
    viewportRect.setAttrs({
      x: viewportTopLeft.x,
      y: viewportTopLeft.y,
      width: viewportWorld.width * transform.scale,
      height: viewportWorld.height * transform.scale,
    });

    miniStage.batchDraw();
  }

  function onClick(): void {
    if (!ctx || !miniStage || !lastTransform) return;
    const pointer = miniStage.getPointerPosition();
    if (!pointer) return;
    const worldPoint = minimapToWorld(pointer, lastTransform);
    const zoom = ctx.store.getSurface().uiState.zoom;
    const viewport = computeFocusNode(
      worldPoint,
      { width: ctx.stage.width(), height: ctx.stage.height() },
      zoom,
    );
    ctx.store.setViewport(viewport);
  }

  return {
    id: "minimap",

    onAttach(context) {
      ctx = context;
      // Nested Konva.Stage requires a real browser (see render/stage.ts's Konva.isBrowser note
      // via diagnostics.ts) — skip entirely under the node-canvas test backend rather than
      // constructing a stage that can never draw anything useful.
      if (!context.stage.content) return;

      wrapper = document.createElement("div");
      wrapper.className = "cw-minimap";
      Object.assign(wrapper.style, {
        position: "absolute",
        bottom: "8px",
        right: "8px",
        zIndex: "12",
        width: `${MINIMAP_WIDTH}px`,
        height: `${MINIMAP_HEIGHT}px`,
        background: "rgba(255, 255, 255, 0.9)",
        border: "1px solid #d4d4d8",
        borderRadius: "6px",
        overflow: "hidden",
        cursor: "pointer",
      });
      context.stage.content.appendChild(wrapper);

      miniStage = new Konva.Stage({
        container: wrapper,
        width: MINIMAP_WIDTH,
        height: MINIMAP_HEIGHT,
      });
      const layer = new Konva.Layer();
      nodesGroup = new Konva.Group({ listening: false });
      viewportRect = new Konva.Rect({
        stroke: "#3b82f6",
        strokeWidth: 1,
        fill: "rgba(59, 130, 246, 0.08)",
        listening: false,
      });
      layer.add(nodesGroup);
      layer.add(viewportRect);
      miniStage.add(layer);
      miniStage.on("click", onClick);

      unsubscribers.push(
        context.store.on("surfaceChanged", render),
        context.store.on("selectionChanged", render),
        context.store.on("nodesMoved", render),
        context.store.on("viewportChanged", render),
      );
      render();
    },

    onDetach() {
      for (const unsubscribe of unsubscribers) unsubscribe();
      unsubscribers.length = 0;
      miniStage?.destroy();
      wrapper?.remove();
      miniStage = null;
      wrapper = null;
      nodesGroup = null;
      viewportRect = null;
      lastTransform = null;
      ctx = null;
    },

    toggle() {
      visible = !visible;
      render();
    },
  };
}
