import type {
  ClipboardRequest,
  ContextActionRequest,
  CreateActionRequest,
  NodeEditRequest,
} from "../model/events.js";
import { createEmitter, type Emitter } from "../state/emitter.js";

/**
 * One-shot requests to the host page — context menus, the create composer, and clipboard actions
 * — as distinct from WorkbenchStore's canvas *state*. Keeping these separate means an extension
 * firing a "the user asked to create a node" request never gets mixed up with (or has to route
 * through) state-diffing machinery that has nothing to do with it. See api/facade.ts for where
 * this is instantiated and exposed to extensions via WorkbenchExtensionContext.
 */
export interface RequestBusEvents {
  contextAction: ContextActionRequest;
  createAction: CreateActionRequest;
  nodeEdited: NodeEditRequest;
  nodeOpened: string;
  clipboardAction: ClipboardRequest;
}

export type RequestBus = Emitter<RequestBusEvents>;

const REQUEST_EVENT_NAMES: (keyof RequestBusEvents)[] = [
  "contextAction",
  "createAction",
  "nodeEdited",
  "nodeOpened",
  "clipboardAction",
];

export function createRequestBus(): RequestBus {
  return createEmitter(REQUEST_EVENT_NAMES);
}
