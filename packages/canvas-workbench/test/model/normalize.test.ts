import { describe, expect, it } from "vite-plus/test";
import { normalizeNode, normalizeSurface } from "../../src/model/normalize.js";

describe("normalizeNode", () => {
  it("fills defaults for every optional field", () => {
    const resolved = normalizeNode({ id: "n1", x: 10, y: 20 });
    expect(resolved).toMatchObject({
      id: "n1",
      parentId: null,
      family: "",
      title: "",
      markers: [],
      progressMode: "na",
      progressPercent: 0,
      isReadOnly: false,
      x: 10,
      y: 20,
    });
  });

  it("clamps progressPercent into [0, 100]", () => {
    expect(normalizeNode({ id: "n1", x: 0, y: 0, progressPercent: 250 }).progressPercent).toBe(100);
    expect(normalizeNode({ id: "n1", x: 0, y: 0, progressPercent: -10 }).progressPercent).toBe(0);
  });

  it("defaults chips/footerChips to empty and carries them through when provided", () => {
    expect(normalizeNode({ id: "n1", x: 0, y: 0 }).chips).toEqual([]);
    expect(normalizeNode({ id: "n1", x: 0, y: 0 }).footerChips).toEqual([]);

    const chips = [{ text: "Model: gpt-5", tone: "accent" }];
    const footerChips = [{ text: "agent-42", tone: "neutral" }];
    const resolved = normalizeNode({ id: "n1", x: 0, y: 0, chips, footerChips });
    expect(resolved.chips).toEqual(chips);
    expect(resolved.footerChips).toEqual(footerChips);
  });
});

describe("normalizeSurface", () => {
  it("normalizes nodes/links and defaults uiState/chrome", () => {
    const surface = normalizeSurface({
      surfaceId: "s1",
      nodes: [
        { id: "a", x: 0, y: 0 },
        { id: "b", x: 100, y: 0 },
      ],
      links: [{ sourceId: "a", targetId: "b" }],
    });

    expect(surface.mode).toBe("authoring");
    expect(surface.nodes).toHaveLength(2);
    expect(surface.links).toEqual([
      {
        sourceId: "a",
        targetId: "b",
        sourcePortId: "",
        targetPortId: "",
        kind: "",
        label: "",
        tone: "neutral",
        isUserAuthored: false,
      },
    ]);
    expect(surface.uiState.zoom).toBe(1);
    expect(surface.uiState.selectedNodeIds).toEqual([]);
    expect(surface.chrome).toEqual({});
  });

  it("preserves the previous uiState's viewport when preserveViewport-style previous state is passed", () => {
    const first = normalizeSurface({ surfaceId: "s1", nodes: [{ id: "a", x: 0, y: 0 }] });
    const withZoom = { ...first.uiState, zoom: 1.5, panX: 20, panY: -5 };
    const second = normalizeSurface(
      { surfaceId: "s1", nodes: [{ id: "a", x: 0, y: 0 }] },
      withZoom,
    );
    expect(second.uiState.zoom).toBe(1.5);
    expect(second.uiState.panX).toBe(20);
  });
});
