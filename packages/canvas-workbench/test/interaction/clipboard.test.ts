import { describe, expect, it } from "vite-plus/test";
import { isActionAllowed } from "../../src/interaction/extensions/clipboard.js";

describe("isActionAllowed", () => {
  it("defaults every action to allowed when no flags are set", () => {
    expect(isActionAllowed("Copy", {})).toBe(true);
    expect(isActionAllowed("Cut", {})).toBe(true);
    expect(isActionAllowed("Paste", {})).toBe(true);
    expect(isActionAllowed("Duplicate", {})).toBe(true);
  });

  it("respects an explicit false for the matching action only", () => {
    const options = { allowCut: false };
    expect(isActionAllowed("Cut", options)).toBe(false);
    expect(isActionAllowed("Copy", options)).toBe(true);
  });
});
