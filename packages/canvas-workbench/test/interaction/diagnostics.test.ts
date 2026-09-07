import { describe, expect, it } from "vite-plus/test";
import { createDiagnosticsExtension } from "../../src/interaction/extensions/diagnostics.js";
import { createRequestBus } from "../../src/interaction/request-bus.js";
import { createDefaultRegistry } from "../../src/render/registry.js";
import { createReconciler } from "../../src/render/reconciler.js";
import { createStageLayers } from "../../src/render/stage.js";
import { createWorkbenchStore } from "../../src/state/store.js";
import { createTestContainer } from "../render/setup.js";
import type { CanvasWorkbenchSurfaceInput } from "../../src/model/types.js";

const fixture: CanvasWorkbenchSurfaceInput = {
  surfaceId: "diagnostics-fixture",
  nodes: [
    { id: "a", title: "A", x: 0, y: 0 },
    { id: "b", title: "B", x: 200, y: 0 },
  ],
  links: [{ sourceId: "a", targetId: "b" }],
  uiState: {
    selectedNodeIds: ["a"],
    groupFrames: [{ id: "f1", anchorNodeIds: ["a", "b"] }],
    zoom: 1.5,
    panX: 10,
    panY: 20,
  },
};

describe("diagnostics extension", () => {
  it("reports counts and viewport state from the live store", () => {
    const container = createTestContainer(640, 480);
    const stageBundle = createStageLayers(container);
    const store = createWorkbenchStore(fixture);
    const registry = createDefaultRegistry();
    const reconciler = createReconciler(stageBundle, store, registry);

    const diagnostics = createDiagnosticsExtension();
    diagnostics.onAttach({
      stage: stageBundle.stage,
      layers: stageBundle.layers,
      store,
      host: container,
      nodeGroups: () => reconciler.nodeGroups,
      requestBus: createRequestBus(),
    });

    const snapshot = diagnostics.getSnapshot();
    expect(snapshot).toEqual({
      nodeCount: 2,
      linkCount: 1,
      frameCount: 1,
      selectedCount: 1,
      zoomPercent: 150,
      panX: 10,
      panY: 20,
      canvasSize: { width: 640, height: 480 },
    });

    diagnostics.onDetach?.();
    reconciler.destroy();
    stageBundle.destroy();
  });

  it("returns an empty snapshot before attaching", () => {
    const diagnostics = createDiagnosticsExtension();
    expect(diagnostics.getSnapshot().nodeCount).toBe(0);
  });
});
