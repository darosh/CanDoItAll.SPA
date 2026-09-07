// Side-effect import: patches Konva's shared singleton to render via node-canvas (the `canvas`
// npm package) instead of a browser <canvas>. Must run before any Stage/Layer/Shape is created.
import "konva/canvas-backend";

interface FakeElement {
  style: Record<string, string>;
  children: unknown[];
  appendChild(node: unknown): void;
  removeChild(node: unknown): void;
  ownerDocument: { createElement(tag: string): FakeElement };
}

function createFakeElement(): FakeElement {
  const element: FakeElement = {
    style: {},
    children: [],
    appendChild(node) {
      element.children.push(node);
    },
    removeChild(node) {
      element.children = element.children.filter((child) => child !== node);
    },
    ownerDocument: { createElement: () => createFakeElement() },
  };
  return element;
}

/**
 * Konva's Stage requires a `container` shaped like a DOM element (ownerDocument.createElement,
 * appendChild) for its own bookkeeping, but the actual canvases it appends are node-canvas
 * objects, not real DOM nodes — a genuine jsdom container rejects them (WebIDL type-checks
 * `appendChild`'s argument as a same-realm Node). A minimal duck-typed stand-in sidesteps that
 * entirely, matching the plain-Node environment Konva's own node-canvas test suite uses.
 */
export function createTestContainer(width = 800, height = 600): HTMLElement {
  const container = createFakeElement() as unknown as HTMLElement;
  Object.defineProperty(container, "clientWidth", { value: width, configurable: true });
  Object.defineProperty(container, "clientHeight", { value: height, configurable: true });
  return container;
}

// Extensions (context-menu, composer, diagnostics) build small DOM overlays with the real global
// `document` — a minimal polyfill so their `onAttach()` can run under this same plain-Node/
// node-canvas setup rather than requiring jsdom (see the comment above on why jsdom conflicts
// with Konva's node-canvas backend).
if (typeof document === "undefined") {
  (globalThis as { document?: unknown }).document = {
    createElement: () => createFakeElement(),
    addEventListener: () => {},
    removeEventListener: () => {},
    activeElement: null,
  };
}
