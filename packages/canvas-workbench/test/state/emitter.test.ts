import { describe, expect, it, vi } from "vite-plus/test";
import { createEmitter } from "../../src/state/emitter.js";

interface TestEvents {
  ping: number;
  pong: string;
}

describe("createEmitter", () => {
  it("delivers emitted payloads to registered listeners", () => {
    const emitter = createEmitter<TestEvents>(["ping", "pong"]);
    const handler = vi.fn();
    emitter.on("ping", handler);
    emitter.emit("ping", 42);
    expect(handler).toHaveBeenCalledWith(42);
  });

  it("unsubscribes via the returned function", () => {
    const emitter = createEmitter<TestEvents>(["ping", "pong"]);
    const handler = vi.fn();
    const unsubscribe = emitter.on("ping", handler);
    unsubscribe();
    emitter.emit("ping", 1);
    expect(handler).not.toHaveBeenCalled();
  });

  it("keeps event channels independent", () => {
    const emitter = createEmitter<TestEvents>(["ping", "pong"]);
    const pingHandler = vi.fn();
    const pongHandler = vi.fn();
    emitter.on("ping", pingHandler);
    emitter.on("pong", pongHandler);
    emitter.emit("pong", "hi");
    expect(pingHandler).not.toHaveBeenCalled();
    expect(pongHandler).toHaveBeenCalledWith("hi");
  });

  it("throws for an event name it wasn't constructed with", () => {
    const emitter = createEmitter<TestEvents>(["ping", "pong"]);
    expect(() => emitter.emit("missing" as never, 1 as never)).toThrow();
  });
});
