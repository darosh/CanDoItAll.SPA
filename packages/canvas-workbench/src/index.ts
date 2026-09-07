export { createCanvasWorkbench } from "./api/facade.js";
export type { CanvasWorkbenchHandle, CreateCanvasWorkbenchOptions } from "./api/facade.js";

export type {
  CanvasWorkbenchAction,
  CanvasWorkbenchAnnotation,
  CanvasWorkbenchChromeInput,
  CanvasWorkbenchCompactPath,
  CanvasWorkbenchGroupFrameInput,
  CanvasWorkbenchLinkInput,
  CanvasWorkbenchMarker,
  CanvasWorkbenchMode,
  CanvasWorkbenchNodeInput,
  CanvasWorkbenchPoint,
  CanvasWorkbenchPort,
  CanvasWorkbenchSize,
  CanvasWorkbenchSurfaceInput,
  CanvasWorkbenchTone,
  CanvasWorkbenchUiStateInput,
  ResolvedGroupFrame,
  ResolvedLink,
  ResolvedNode,
  ResolvedSurface,
  ResolvedUiState,
} from "./model/types.js";

export type {
  ClipboardAction,
  ClipboardRequest,
  ContextActionRequest,
  CreateActionRequest,
  NodeEditRequest,
  NodePositionChange,
  NodesMovedEvent,
  SelectionChangedEvent,
  ViewportChangedEvent,
} from "./model/events.js";

export { createDefaultRegistry, NodeRendererRegistry } from "./render/registry.js";
export type { NodeRenderer, RenderContext } from "./render/registry.js";
export { resolveTone, setThemeOverrides } from "./render/theme.js";
export type { ToneTokens } from "./render/theme.js";

export { ExtensionHost } from "./interaction/extensions.js";
export type { WorkbenchExtension, WorkbenchExtensionContext } from "./interaction/extensions.js";

export { WorkbenchStore, createWorkbenchStore } from "./state/store.js";
