import type { CanvasWorkbenchAction } from "@/lib/canvas-workbench/types";
import { formatNodeKind, WorkflowNodeKind } from "./types";

// Context-menu + quick-create action set for the workflow designer canvas, following the
// `action(partial)` builder pattern established in pages/project-structure/actionCatalog.ts.
// Unlike project-structure, workflow nodes have no progress/marker/priority concept, so this is a
// flat action set rather than per-family composition.

function action(
  partial: Partial<CanvasWorkbenchAction> & Pick<CanvasWorkbenchAction, "actionId" | "label">,
): CanvasWorkbenchAction {
  return {
    actionId: partial.actionId,
    label: partial.label,
    description: partial.description ?? "",
    icon: partial.icon ?? "",
    menuLabel: partial.menuLabel ?? partial.label,
    shortcutKey: partial.shortcutKey ?? "",
    menuSize: partial.menuSize ?? "normal",
    submenuLayout: partial.submenuLayout ?? "",
    tone: partial.tone ?? "neutral",
    setupRendererKey: partial.setupRendererKey ?? "",
    requiresInput: partial.requiresInput ?? false,
    createMode: partial.createMode ?? "command",
    objectSubtype: partial.objectSubtype ?? "",
    titleLabel: partial.titleLabel ?? "Name",
    titlePlaceholder: partial.titlePlaceholder ?? "",
    subtitleLabel: partial.subtitleLabel ?? "Subtitle",
    subtitlePlaceholder: partial.subtitlePlaceholder ?? "",
    notesLabel: partial.notesLabel ?? "Notes",
    notesPlaceholder: partial.notesPlaceholder ?? "",
    showDefaultTextFields: partial.showDefaultTextFields ?? true,
    submitLabel: partial.submitLabel ?? "Add",
    requiresFile: partial.requiresFile ?? false,
    acceptedFileTypes: partial.acceptedFileTypes ?? "",
    filePrompt: partial.filePrompt ?? "",
    supportsDragDrop: partial.supportsDragDrop ?? false,
    inputFields: partial.inputFields ?? [],
    defaultInputValues: partial.defaultInputValues ?? [],
    children: partial.children ?? [],
  };
}

/** Addable node kinds — excludes Start/End, which are structural singletons on every graph. */
export const QUICK_CREATE_NODE_KINDS: Record<string, number> = {
  "add-llm-call": WorkflowNodeKind.LlmCall,
  "add-triage": WorkflowNodeKind.Triage,
  "add-logic": WorkflowNodeKind.StrictLogic,
  "add-executor": WorkflowNodeKind.Executor,
  "add-artifact": WorkflowNodeKind.Artifact,
  "add-human-input": WorkflowNodeKind.HumanInput,
  "add-agent-step": WorkflowNodeKind.AgentStep,
  "add-subworkflow": WorkflowNodeKind.Subworkflow,
};

export function buildQuickCreateActions(): CanvasWorkbenchAction[] {
  return Object.entries(QUICK_CREATE_NODE_KINDS).map(([actionId, kind]) =>
    action({
      actionId,
      label: formatNodeKind(kind),
      description: `Add a ${formatNodeKind(kind)} node.`,
      requiresInput: true,
      createMode: "dialog",
      submitLabel: `Add ${formatNodeKind(kind)}`,
    }),
  );
}

/** Context-menu actions for a node. Start/End are structural — no duplicate/delete for them. */
export function buildNodeContextActions(kind: number): CanvasWorkbenchAction[] {
  const isStructural = kind === WorkflowNodeKind.Start || kind === WorkflowNodeKind.End;

  const actions = [
    action({
      actionId: "edit",
      label: "Edit",
      description: "Open this node's settings in the inspector.",
      tone: "accent",
    }),
    action({
      actionId: "copy-id",
      label: "Copy id",
      description: "Copy this node id to the clipboard.",
      tone: "ghost",
    }),
    action({
      actionId: "add-route",
      label: "Add outgoing route",
      description: "Open the Routes tab with this node pre-filled as the source.",
      tone: "sky",
    }),
  ];

  if (!isStructural) {
    actions.push(
      action({
        actionId: "duplicate",
        label: "Duplicate",
        description: "Duplicate this node with its settings.",
        tone: "primary",
      }),
      action({
        actionId: "delete",
        label: "Delete",
        description: "Delete this node and any routes that reference it.",
        tone: "danger",
      }),
    );
  }

  return actions;
}
