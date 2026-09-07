import { describe, expect, it } from "vite-plus/test";
import {
  computeMinimapTransform,
  minimapToWorld,
  worldToMinimap,
} from "../../src/state/minimap.js";

describe("computeMinimapTransform", () => {
  it("centers content and picks a scale that fits both dimensions", () => {
    const bounds = { minX: 0, minY: 0, maxX: 800, maxY: 400 };
    const transform = computeMinimapTransform(bounds, { width: 160, height: 120 }, 0);
    // 160/800 = 0.2, 120/400 = 0.3 -> min is 0.2
    expect(transform.scale).toBeCloseTo(0.2);
    // content center (400, 200) * 0.2 = (80, 40); minimap center (80, 60)
    expect(transform.offsetX).toBeCloseTo(0);
    expect(transform.offsetY).toBeCloseTo(20);
  });
});

describe("worldToMinimap / minimapToWorld", () => {
  it("round-trips a point through the transform", () => {
    const bounds = { minX: -100, minY: 50, maxX: 900, maxY: 650 };
    const transform = computeMinimapTransform(bounds, { width: 160, height: 120 }, 8);
    const worldPoint = { x: 250, y: 300 };
    const minimapPoint = worldToMinimap(worldPoint, transform);
    const roundTripped = minimapToWorld(minimapPoint, transform);
    expect(roundTripped.x).toBeCloseTo(worldPoint.x);
    expect(roundTripped.y).toBeCloseTo(worldPoint.y);
  });

  it("maps the content center to the minimap center", () => {
    const bounds = { minX: 0, minY: 0, maxX: 200, maxY: 200 };
    const transform = computeMinimapTransform(bounds, { width: 160, height: 120 }, 0);
    const center = worldToMinimap({ x: 100, y: 100 }, transform);
    expect(center.x).toBeCloseTo(80);
    expect(center.y).toBeCloseTo(60);
  });
});
