import type Konva from "konva";
import type { ResolvedNode, ResolvedSurface, ResolvedUiState } from "../model/types.js";
import { computeFrameBounds } from "../state/frames.js";
import { resolveAllPositions } from "../state/positions.js";
import type { WorkbenchStore } from "../state/store.js";
import { createFrameGroup, updateFrameGroup } from "./frames.js";
import { createLinkShape, updateLinkShape } from "./links.js";
import type { NodeRendererRegistry, RenderContext } from "./registry.js";
import type { WorkbenchStage } from "./stage.js";

export interface ReconcilerOptions {
  /** Called once, right after a node's Konva.Group is first mounted — the seam interaction/
   * handlers (selection.ts, drag.ts) attach through, keeping render/ free of any dependency on
   * interaction/. */
  onNodeMounted?(group: Konva.Group, node: ResolvedNode): void;
}

export interface Reconciler {
  render(): void;
  destroy(): void;
  nodeGroups: Map<string, Konva.Group>;
}

function linkKey(sourceId: string, targetId: string, kind: string): string {
  return `${sourceId}->${targetId}:${kind}`;
}

/**
 * The only place that walks the store's resolved scene and reconciles it onto Konva's retained
 * scene graph. Every collection is diffed by id/key so unchanged nodes/links/frames are never
 * rebuilt — only mount/update/unmount for what actually changed.
 */
export function createReconciler(
  stageBundle: WorkbenchStage,
  store: WorkbenchStore,
  registry: NodeRendererRegistry,
  options: ReconcilerOptions = {},
): Reconciler {
  const nodeGroups = new Map<string, Konva.Group>();
  const linkShapes = new Map<string, Konva.Arrow>();
  const frameGroups = new Map<string, Konva.Group>();

  function renderNodes(surface: ResolvedSurface): void {
    const positions = resolveAllPositions(surface.nodes, surface.uiState.manualPositions);
    const connectorAnchors = surface.chrome.connectorAnchors ?? {};
    const seen = new Set<string>();

    for (const node of surface.nodes) {
      seen.add(node.id);
      const position = positions.get(node.id) ?? { x: node.x, y: node.y };
      const selected = surface.uiState.selectedNodeIds.includes(node.id);
      const ctx: RenderContext = { node, position, selected, connectorAnchors };
      const renderer = registry.resolve(node);

      let group = nodeGroups.get(node.id);
      if (!group) {
        group = renderer.mount(ctx);
        nodeGroups.set(node.id, group);
        stageBundle.layers.nodes.add(group);
        options.onNodeMounted?.(group, node);
      } else {
        renderer.update(group, ctx);
      }
    }

    for (const [id, group] of nodeGroups) {
      if (!seen.has(id)) {
        group.destroy();
        nodeGroups.delete(id);
      }
    }
    stageBundle.layers.nodes.batchDraw();
  }

  function renderLinks(surface: ResolvedSurface): void {
    const nodeById = new Map(surface.nodes.map((node) => [node.id, node]));
    const seen = new Set<string>();
    for (const link of surface.links) {
      const key = linkKey(link.sourceId, link.targetId, link.kind);
      const sourceGroup = nodeGroups.get(link.sourceId);
      const targetGroup = nodeGroups.get(link.targetId);
      const sourceNode = nodeById.get(link.sourceId);
      const targetNode = nodeById.get(link.targetId);
      if (!sourceGroup || !targetGroup || !sourceNode || !targetNode) continue;
      seen.add(key);

      let arrow = linkShapes.get(key);
      if (!arrow) {
        arrow = createLinkShape();
        linkShapes.set(key, arrow);
        stageBundle.layers.links.add(arrow);
      }

      // Fallback (no getPortAnchor, e.g. inline-text nodes) uses the node's own bounding-box
      // center — matches the old plain center-to-center behavior for shapes with no port concept.
      const sourceRect = sourceGroup.getClientRect({ relativeTo: stageBundle.layers.nodes });
      const targetRect = targetGroup.getClientRect({ relativeTo: stageBundle.layers.nodes });
      const sourcePos = sourceGroup.position();
      const targetPos = targetGroup.position();
      const sourceCenterLocal = { x: sourceRect.width / 2, y: sourceRect.height / 2 };
      const targetCenterLocal = { x: targetRect.width / 2, y: targetRect.height / 2 };
      const targetCenterWorld = {
        x: targetPos.x + targetCenterLocal.x,
        y: targetPos.y + targetCenterLocal.y,
      };
      const sourceCenterWorld = {
        x: sourcePos.x + sourceCenterLocal.x,
        y: sourcePos.y + sourceCenterLocal.y,
      };

      const sourceRenderer = registry.resolve(sourceNode);
      const targetRenderer = registry.resolve(targetNode);
      const sourceLocal =
        sourceRenderer.getPortAnchor?.(sourceNode, {
          portId: link.sourcePortId,
          direction: "output",
          towardLocalPoint: {
            x: targetCenterWorld.x - sourcePos.x,
            y: targetCenterWorld.y - sourcePos.y,
          },
        }) ?? sourceCenterLocal;
      const targetLocal =
        targetRenderer.getPortAnchor?.(targetNode, {
          portId: link.targetPortId,
          direction: "input",
          towardLocalPoint: {
            x: sourceCenterWorld.x - targetPos.x,
            y: sourceCenterWorld.y - targetPos.y,
          },
        }) ?? targetCenterLocal;

      updateLinkShape(
        arrow,
        link,
        { x: sourcePos.x + sourceLocal.x, y: sourcePos.y + sourceLocal.y },
        { x: targetPos.x + targetLocal.x, y: targetPos.y + targetLocal.y },
      );
    }

    for (const [key, arrow] of linkShapes) {
      if (!seen.has(key)) {
        arrow.destroy();
        linkShapes.delete(key);
      }
    }
    stageBundle.layers.links.batchDraw();
  }

  function renderFrames(surface: ResolvedSurface): void {
    const seen = new Set<string>();
    const nodeBoxes = new Map<string, { x: number; y: number; width: number; height: number }>();
    for (const [id, group] of nodeGroups) {
      nodeBoxes.set(id, group.getClientRect({ relativeTo: stageBundle.layers.nodes }));
    }

    for (const frame of surface.uiState.groupFrames) {
      const bounds = computeFrameBounds(frame, nodeBoxes);
      if (!bounds) continue;
      seen.add(frame.id);

      let group = frameGroups.get(frame.id);
      if (!group) {
        group = createFrameGroup(frame);
        frameGroups.set(frame.id, group);
        stageBundle.layers.frames.add(group);
        group.moveToBottom();
      }
      updateFrameGroup(group, frame, bounds);
    }

    for (const [id, group] of frameGroups) {
      if (!seen.has(id)) {
        group.destroy();
        frameGroups.delete(id);
      }
    }
    stageBundle.layers.frames.batchDraw();
  }

  function applyViewport(uiState: ResolvedUiState): void {
    stageBundle.stage.scale({ x: uiState.zoom, y: uiState.zoom });
    stageBundle.stage.position({ x: uiState.panX, y: uiState.panY });
    // The background Rect is the pan-gesture hit target (interaction/pan-zoom.ts) and lives in
    // stage-local coordinates, which the scale/position above just moved out from under the
    // physical viewport — without this, panning drags the rect's covered area away from the
    // visible screen, so a second drag in the same spot misses it entirely (confirmed live: the
    // draggable area visibly drifts/shrinks after one pan). Re-fit it to the current inverse
    // transform every time so it always exactly covers the physical viewport.
    stageBundle.background.position({
      x: -uiState.panX / uiState.zoom,
      y: -uiState.panY / uiState.zoom,
    });
    stageBundle.background.size({
      width: stageBundle.stage.width() / uiState.zoom,
      height: stageBundle.stage.height() / uiState.zoom,
    });
    stageBundle.stage.batchDraw();
  }

  function render(): void {
    const surface = store.getSurface();
    renderNodes(surface);
    renderLinks(surface);
    renderFrames(surface);
    applyViewport(surface.uiState);
  }

  const unsubscribers = [
    store.on("surfaceChanged", render),
    store.on("selectionChanged", render),
    store.on("nodesMoved", render),
    store.on("viewportChanged", () => applyViewport(store.getSurface().uiState)),
  ];

  render();

  function destroy(): void {
    for (const unsubscribe of unsubscribers) unsubscribe();
  }

  return { render, destroy, nodeGroups };
}
