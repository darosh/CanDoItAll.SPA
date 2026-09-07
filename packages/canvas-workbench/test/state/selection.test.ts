import { describe, expect, it } from "vite-plus/test";
import { clearSelection, selectSingle, toggleSelection } from "../../src/state/selection.js";

describe("selectSingle", () => {
  it("returns a single-element selection", () => {
    expect(selectSingle("a")).toEqual(["a"]);
  });
});

describe("toggleSelection", () => {
  it("adds an id not already selected", () => {
    expect(toggleSelection(["a"], "b")).toEqual(["a", "b"]);
  });

  it("removes an id already selected", () => {
    expect(toggleSelection(["a", "b"], "b")).toEqual(["a"]);
  });
});

describe("clearSelection", () => {
  it("returns an empty array", () => {
    expect(clearSelection()).toEqual([]);
  });
});
