import type {
  CanvasWorkbenchInputValue,
  CanvasWorkbenchPoint,
  CanvasWorkbenchUploadedFile,
} from "./types.js";

export interface SelectionChangedEvent {
  primaryNodeId: string | null;
  selectedNodeIds: string[];
}

export interface NodePositionChange {
  nodeId: string;
  x: number;
  y: number;
}

export interface NodesMovedEvent {
  positions: NodePositionChange[];
}

export interface ViewportChangedEvent {
  zoom: number;
  panX: number;
  panY: number;
}

// Fired by interaction/extensions/context-menu.ts when a context-menu leaf without `children`
// and without requiresInput/requiresFile is selected.
export interface ContextActionRequest {
  nodeId: string | null;
  actionId: string;
  x: number;
  y: number;
}

// Fired by interaction/extensions/composer.ts on submit — either directly (a quick-create action
// with no requiresInput/requiresFile) or after the user fills in the composer dialog.
export interface CreateActionRequest {
  actionId: string;
  sourceNodeId: string | null;
  x: number;
  y: number;
  parentNodeId: string | null;
  title: string;
  subtitle: string;
  notes: string;
  createMode: string;
  objectSubtype: string;
  uploadedFile: CanvasWorkbenchUploadedFile | null;
  inputValues: CanvasWorkbenchInputValue[];
}

// Pre-fill-only subset accepted by CanvasWorkbenchHandle.openCreateComposer() to seed the dialog.
export type CreateComposerRequest = Partial<
  Pick<
    CreateActionRequest,
    "title" | "subtitle" | "notes" | "x" | "y" | "objectSubtype" | "inputValues"
  >
>;

export interface NodeEditRequest {
  nodeId: string;
  title: string;
  notes: string;
}

export type ClipboardAction = "Copy" | "Cut" | "Paste" | "Duplicate";

export interface ClipboardRequest {
  action: ClipboardAction;
  surfaceId: string;
  primaryNodeId: string | null;
  selectedNodeIds: string[];
  anchorWorld: CanvasWorkbenchPoint | null;
}
