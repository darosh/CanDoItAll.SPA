import Konva from "konva";
import type { WorkbenchExtension, WorkbenchExtensionContext } from "../extensions.js";

/**
 * Re-derived from the new engine's own state, not the old `CanvasWorkbenchDiagnosticsSnapshot`
 * shape verbatim — that described old-engine internals (hand-rolled canvas-layer sizes, a
 * cumulative render/publish/drag-patch metrics block instrumenting the old render pipeline) that
 * don't map onto this engine. Add fields here only when profiling this engine actually needs them.
 */
export interface DiagnosticsSnapshot {
  nodeCount: number;
  linkCount: number;
  frameCount: number;
  selectedCount: number;
  zoomPercent: number;
  panX: number;
  panY: number;
  canvasSize: { width: number; height: number };
}

export interface DiagnosticsController extends WorkbenchExtension {
  toggle(): void;
  getSnapshot(): DiagnosticsSnapshot;
}

const EMPTY_SNAPSHOT: DiagnosticsSnapshot = {
  nodeCount: 0,
  linkCount: 0,
  frameCount: 0,
  selectedCount: 0,
  zoomPercent: 100,
  panX: 0,
  panY: 0,
  canvasSize: { width: 0, height: 0 },
};

function buildSnapshot(ctx: WorkbenchExtensionContext): DiagnosticsSnapshot {
  const surface = ctx.store.getSurface();
  return {
    nodeCount: surface.nodes.length,
    linkCount: surface.links.length,
    frameCount: surface.uiState.groupFrames.length,
    selectedCount: surface.uiState.selectedNodeIds.length,
    zoomPercent: Math.round(surface.uiState.zoom * 100),
    panX: Math.round(surface.uiState.panX),
    panY: Math.round(surface.uiState.panY),
    canvasSize: { width: ctx.stage.width(), height: ctx.stage.height() },
  };
}

function renderRow(label: string, value: string): HTMLDivElement {
  const row = document.createElement("div");
  row.style.display = "flex";
  row.style.justifyContent = "space-between";
  row.style.gap = "12px";
  const labelEl = document.createElement("span");
  labelEl.textContent = label;
  labelEl.style.opacity = "0.7";
  const valueEl = document.createElement("span");
  valueEl.textContent = value;
  row.appendChild(labelEl);
  row.appendChild(valueEl);
  return row;
}

/**
 * HTML side panel (matching the old engine's own DOM-panel approach, not canvas-drawn), plus an
 * optional canvas-drawn node-bounds overlay for `chrome.diagnostics.showNodeBounds`. Both are
 * gated behind `chrome.diagnostics.isEnabled` (default off) AND this extension's own `visible`
 * toggle (flipped via `toggleDiagnostics()` on the handle) — the chrome flag says the feature is
 * available at all, the toggle says whether it's currently showing.
 */
export function createDiagnosticsExtension(): DiagnosticsController {
  let ctx: WorkbenchExtensionContext | null = null;
  let panel: HTMLDivElement | null = null;
  let nodeBoundsGroup: Konva.Group | null = null;
  let visible = false;
  const unsubscribers: (() => void)[] = [];

  function isEnabled(): boolean {
    return ctx?.store.getSurface().chrome.diagnostics?.isEnabled === true;
  }

  function render(): void {
    if (!ctx || !panel || !nodeBoundsGroup) return;
    const showing = visible && isEnabled();
    panel.style.display = showing ? "block" : "none";
    nodeBoundsGroup.visible(
      showing && ctx.store.getSurface().chrome.diagnostics?.showNodeBounds === true,
    );

    if (showing) {
      const snapshot = buildSnapshot(ctx);
      panel.innerHTML = "";
      panel.appendChild(renderRow("Nodes", String(snapshot.nodeCount)));
      panel.appendChild(renderRow("Links", String(snapshot.linkCount)));
      panel.appendChild(renderRow("Frames", String(snapshot.frameCount)));
      panel.appendChild(renderRow("Selected", String(snapshot.selectedCount)));
      panel.appendChild(renderRow("Zoom", `${snapshot.zoomPercent}%`));
      panel.appendChild(renderRow("Pan", `${snapshot.panX}, ${snapshot.panY}`));
      panel.appendChild(
        renderRow("Canvas", `${snapshot.canvasSize.width}×${snapshot.canvasSize.height}`),
      );
    }

    if (nodeBoundsGroup.visible()) {
      nodeBoundsGroup.destroyChildren();
      for (const [, group] of ctx.nodeGroups()) {
        const rect = group.getClientRect({ relativeTo: ctx.layers.nodes });
        nodeBoundsGroup.add(
          new Konva.Rect({
            x: rect.x,
            y: rect.y,
            width: rect.width,
            height: rect.height,
            stroke: "#ef4444",
            strokeWidth: 1,
            dash: [4, 4],
          }),
        );
      }
    }
    ctx.layers.overlay.batchDraw();
  }

  return {
    id: "diagnostics",

    onAttach(context) {
      ctx = context;

      // `stage.content` only exists when Konva detects a real browser (Konva.isBrowser) — it's
      // deliberately absent under the node-canvas backend used by this package's own tests (see
      // test/render/setup.ts). Guard rather than crash: `getSnapshot()` still works headless,
      // only the DOM panel itself is skipped.
      if (context.stage.content) {
        panel = document.createElement("div");
        panel.className = "cw-diagnostics-panel";
        Object.assign(panel.style, {
          position: "absolute",
          top: "8px",
          right: "8px",
          zIndex: "15",
          display: "none",
          background: "rgba(24, 24, 27, 0.85)",
          color: "#f4f4f5",
          font: "11px ui-monospace, monospace",
          padding: "8px 10px",
          borderRadius: "6px",
          minWidth: "140px",
          pointerEvents: "none",
        });
        context.stage.content.appendChild(panel);
      }

      nodeBoundsGroup = new Konva.Group({
        name: "diagnostics-node-bounds",
        listening: false,
        visible: false,
      });
      context.layers.overlay.add(nodeBoundsGroup);

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
      panel?.remove();
      panel = null;
      nodeBoundsGroup?.destroy();
      nodeBoundsGroup = null;
      ctx = null;
    },

    toggle() {
      visible = !visible;
      render();
    },

    getSnapshot() {
      return ctx ? buildSnapshot(ctx) : EMPTY_SNAPSHOT;
    },
  };
}
