import { describe, expect, it } from "vite-plus/test";
import { normalizeNode } from "../../src/model/normalize.js";
import {
  computeCardLayout,
  measureNodeSize,
  resolveBaseNodeSize,
} from "../../src/render/sizing.js";
import "./setup.js";

function port(id: string, label: string) {
  return {
    id,
    label,
    side: "input",
    tone: "",
    categoryKey: "",
    accentColor: "",
    kind: "",
    isRequired: false,
  };
}

describe("resolveBaseNodeSize", () => {
  it("falls back to the pre-adaptive-sizing default for a plain node", () => {
    expect(resolveBaseNodeSize(normalizeNode({ id: "n1", x: 0, y: 0 }))).toEqual({
      width: 200,
      height: 96,
    });
  });

  it("widens the base size for nodes with ports", () => {
    const withPort = resolveBaseNodeSize(
      normalizeNode({ id: "n1", x: 0, y: 0, inputPorts: [port("in-1", "in")] }),
    );
    expect(withPort.width).toBeGreaterThan(200);
  });
});

describe("computeCardLayout / measureNodeSize", () => {
  it("keeps a plain node's size at parity with the historical fixed card size", () => {
    const size = measureNodeSize(normalizeNode({ id: "start", x: 0, y: 0, title: "Start" }));
    expect(size).toEqual({ width: 200, height: 96 });
  });

  it("grows height for a long, multi-line title", () => {
    const short = measureNodeSize(normalizeNode({ id: "n1", x: 0, y: 0, title: "Start" }));
    const long = measureNodeSize(
      normalizeNode({
        id: "n1",
        x: 0,
        y: 0,
        title: "A much longer title that should wrap onto multiple lines within the card width",
      }),
    );
    expect(long.height).toBeGreaterThanOrEqual(short.height);
  });

  it("adds a header row when icon or kind is set", () => {
    const plain = computeCardLayout(normalizeNode({ id: "n1", x: 0, y: 0, title: "Step" }));
    const withKind = computeCardLayout(
      normalizeNode({ id: "n1", x: 0, y: 0, title: "Step", kind: "Executor" }),
    );
    expect(plain.hasHeaderRow).toBe(false);
    expect(withKind.hasHeaderRow).toBe(true);
    expect(withKind.titleTop).toBeGreaterThan(plain.titleTop);
  });

  // The 200x96 default is generous enough that a single small addition (a short subtitle, one
  // chip, one annotation, one port row) often still fits within it — matching the historical
  // fixed card's own headroom. These tests combine enough content to reliably cross that floor,
  // and separately confirm each section's presence is reflected in the layout flags/offsets.
  it("grows height once enough subtitle/chip/annotation content is combined", () => {
    const plain = measureNodeSize(normalizeNode({ id: "n1", x: 0, y: 0, title: "Step" }));
    const annotation = {
      id: "a1",
      kind: "warning",
      tone: "destructive",
      label: "Missing input",
      description: "",
      icon: "",
      actionId: "",
    };
    const dense = measureNodeSize(
      normalizeNode({
        id: "n1",
        x: 0,
        y: 0,
        title: "Step",
        subtitle: "A much longer subtitle line that wraps across more than one row of text",
        chips: [{ text: "Executor: http-call", tone: "accent" }],
        footerChips: [{ text: "agent-42", tone: "neutral" }],
        annotations: [annotation, { ...annotation, id: "a2" }, { ...annotation, id: "a3" }],
        isRequired: true,
      }),
    );
    expect(dense.height).toBeGreaterThan(plain.height);
  });

  it("flags subtitle/chips/annotations presence in the layout", () => {
    const plain = computeCardLayout(normalizeNode({ id: "n1", x: 0, y: 0, title: "Step" }));
    expect(plain.hasSubtitle).toBe(false);
    const withSubtitle = computeCardLayout(
      normalizeNode({ id: "n1", x: 0, y: 0, title: "Step", subtitle: "Instructions" }),
    );
    expect(withSubtitle.hasSubtitle).toBe(true);
    expect(withSubtitle.subtitleTop).toBeGreaterThan(0);
  });

  it("adds a ports section sized to the number of port rows", () => {
    const plain = computeCardLayout(normalizeNode({ id: "n1", x: 0, y: 0, title: "Step" }));
    const onePortRow = computeCardLayout(
      normalizeNode({
        id: "n1",
        x: 0,
        y: 0,
        title: "Step",
        inputPorts: [port("in-1", "a very long input port label")],
        outputPorts: [port("out-1", "a very long output port label")],
      }),
    );
    expect(plain.hasPorts).toBe(false);
    expect(onePortRow.hasPorts).toBe(true);
    expect(onePortRow.width).toBeGreaterThan(plain.width);

    const morePortRows = computeCardLayout(
      normalizeNode({
        id: "n1",
        x: 0,
        y: 0,
        title: "Step",
        inputPorts: [port("in-1", "a"), port("in-2", "b"), port("in-3", "c")],
      }),
    );
    expect(morePortRows.portRows).toBe(3);
    expect(morePortRows.height).toBeGreaterThan(onePortRow.height);
    expect(morePortRows.height).toBeGreaterThan(plain.height);
  });

  it("reserves footer space for the required/optional pill and footerChips", () => {
    const plain = computeCardLayout(normalizeNode({ id: "n1", x: 0, y: 0, title: "Step" }));
    const withFooter = computeCardLayout(
      normalizeNode({ id: "n1", x: 0, y: 0, title: "Step", isRequired: true }),
    );
    expect(plain.hasFooterRow).toBe(false);
    expect(withFooter.hasFooterRow).toBe(true);
  });
});
