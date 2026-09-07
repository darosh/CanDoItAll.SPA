import { describe, expect, it } from "vite-plus/test";
import { createDefaultRegistry } from "../../src/render/registry.js";
import { createReconciler } from "../../src/render/reconciler.js";
import { createStageLayers } from "../../src/render/stage.js";
import { createWorkbenchStore } from "../../src/state/store.js";
import { createTestContainer } from "./setup.js";
import type { CanvasWorkbenchSurfaceInput } from "../../src/model/types.js";

const fixture: CanvasWorkbenchSurfaceInput = {
  surfaceId: "fixture",
  nodes: [
    { id: "start", title: "Start", x: 0, y: 0 },
    { id: "decision", title: "Needs approval?", family: "workflow-decision", x: 260, y: -10 },
    {
      id: "note",
      title: "Note",
      isInlineTextNode: true,
      inlineTextPlaceholder: "...",
      x: 0,
      y: 160,
    },
  ],
  links: [{ sourceId: "start", targetId: "decision", tone: "accent" }],
  uiState: {
    selectedNodeIds: ["decision"],
    groupFrames: [{ id: "frame-1", label: "Flow", anchorNodeIds: ["start", "decision"] }],
  },
};

function round(value: number): number {
  return Math.round(value * 100) / 100;
}

function buildScene() {
  const container = createTestContainer();
  const stageBundle = createStageLayers(container);
  const store = createWorkbenchStore(fixture);
  const registry = createDefaultRegistry();
  const reconciler = createReconciler(stageBundle, store, registry);

  const nodes = [...reconciler.nodeGroups.entries()]
    .map(([id, group]) => {
      const rect = group.getClientRect({ relativeTo: stageBundle.layers.nodes });
      return {
        id,
        x: round(rect.x),
        y: round(rect.y),
        width: round(rect.width),
        height: round(rect.height),
      };
    })
    .sort((a, b) => a.id.localeCompare(b.id));

  const links = stageBundle.layers.links.find("Arrow").map((arrow) => arrow.points().map(round));

  const frames = stageBundle.layers.frames.find(".frame-group").map((group) => {
    const rect = group.findOne(".frame-rect");
    return {
      id: group.id(),
      x: round(group.x()),
      y: round(group.y()),
      width: round(rect?.width() ?? 0),
      height: round(rect?.height() ?? 0),
    };
  });

  reconciler.destroy();
  stageBundle.destroy();

  return { nodes, links, frames };
}

describe("render reconciler", () => {
  it("produces a stable structural scene for a fixture surface", async () => {
    const scene = buildScene();
    await expect(JSON.stringify(scene, null, 2)).toMatchFileSnapshot(
      "../__snapshots__/basic-surface.json",
    );
  });

  it("marks the selected node and only the selected node", () => {
    const container = createTestContainer();
    const stageBundle = createStageLayers(container);
    const store = createWorkbenchStore(fixture);
    const registry = createDefaultRegistry();
    const reconciler = createReconciler(stageBundle, store, registry);

    const decisionGroup = reconciler.nodeGroups.get("decision");
    const startGroup = reconciler.nodeGroups.get("start");
    expect(decisionGroup?.findOne(".diamond-shape")?.strokeWidth()).toBe(2.5);
    expect(startGroup?.findOne(".card-rect")?.strokeWidth()).toBe(1.5);

    reconciler.destroy();
    stageBundle.destroy();
  });
});
