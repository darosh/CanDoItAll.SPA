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
    const seen = new Set<string>();

    for (const node of surface.nodes) {
      seen.add(node.id);
      const position = positions.get(node.id) ?? { x: node.x, y: node.y };
      const selected = surface.uiState.selectedNodeIds.includes(node.id);
      const ctx: RenderContext = { node, position, selected };
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
    const seen = new Set<string>();
    for (const link of surface.links) {
      const key = linkKey(link.sourceId, link.targetId, link.kind);
      const sourceGroup = nodeGroups.get(link.sourceId);
      const targetGroup = nodeGroups.get(link.targetId);
      if (!sourceGroup || !targetGroup) continue;
      seen.add(key);

      let arrow = linkShapes.get(key);
      if (!arrow) {
        arrow = createLinkShape();
        linkShapes.set(key, arrow);
        stageBundle.layers.links.add(arrow);
      }
      updateLinkShape(
        arrow,
        link,
        sourceGroup.getClientRect({ relativeTo: stageBundle.layers.nodes }),
        targetGroup.getClientRect({ relativeTo: stageBundle.layers.nodes }),
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
