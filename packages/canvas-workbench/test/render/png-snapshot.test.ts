import { mkdirSync, existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import pixelmatch from "pixelmatch";
import { PNG } from "pngjs";
import { describe, expect, it } from "vite-plus/test";
import { createDefaultRegistry } from "../../src/render/registry.js";
import { createReconciler } from "../../src/render/reconciler.js";
import { createStageLayers } from "../../src/render/stage.js";
import { createWorkbenchStore } from "../../src/state/store.js";
import { createTestContainer } from "./setup.js";
import type { CanvasWorkbenchSurfaceInput } from "../../src/model/types.js";

const testDir = dirname(fileURLToPath(import.meta.url));
const baselineDir = join(testDir, "..", "__images__", "baseline");
const diffDir = join(testDir, "..", "__images__", "diff");

const fixture: CanvasWorkbenchSurfaceInput = {
  surfaceId: "png-fixture",
  nodes: [
    { id: "start", title: "Start", x: 20, y: 20 },
    { id: "decision", title: "Decision", family: "workflow-decision", x: 280, y: 0 },
  ],
  links: [{ sourceId: "start", targetId: "decision" }],
};

/**
 * Secondary, human-reviewed net (see the plan doc's testing strategy): PNG rasterization via
 * node-canvas is platform-dependent for text glyphs, so this is a generous smoke bound, not a
 * strict pixel-perfect gate — the structural snapshot in reconciler.test.ts is what CI treats as
 * authoritative. A missing baseline is written on first run rather than failing; review it into
 * git like any other test fixture, and replace it deliberately (never automatically) when a
 * rendering change is intentional.
 */
describe("PNG snapshot (smoke)", () => {
  it("renders within a generous visual diff of the committed baseline", () => {
    const container = createTestContainer(400, 220);
    const stageBundle = createStageLayers(container);
    const store = createWorkbenchStore(fixture);
    const registry = createDefaultRegistry();
    const reconciler = createReconciler(stageBundle, store, registry);

    // node-canvas backend: Stage#toCanvas() returns a node-canvas Canvas with toBuffer().
    const canvas = stageBundle.stage.toCanvas() as unknown as {
      toBuffer(mime: "image/png"): Buffer;
    };
    const buffer = canvas.toBuffer("image/png");

    reconciler.destroy();
    stageBundle.destroy();

    const baselinePath = join(baselineDir, "basic-flow.png");
    if (!existsSync(baselinePath)) {
      mkdirSync(baselineDir, { recursive: true });
      writeFileSync(baselinePath, buffer);
      return;
    }

    const actual = PNG.sync.read(buffer);
    const baseline = PNG.sync.read(readFileSync(baselinePath));
    expect(actual.width).toBe(baseline.width);
    expect(actual.height).toBe(baseline.height);

    const diff = new PNG({ width: actual.width, height: actual.height });
    const diffPixels = pixelmatch(
      actual.data,
      baseline.data,
      diff.data,
      actual.width,
      actual.height,
      {
        threshold: 0.2,
      },
    );

    const totalPixels = actual.width * actual.height;
    if (diffPixels / totalPixels > 0.35) {
      mkdirSync(diffDir, { recursive: true });
      writeFileSync(join(diffDir, "basic-flow.png"), PNG.sync.write(diff));
    }
    expect(diffPixels / totalPixels).toBeLessThan(0.35);
  });
});
