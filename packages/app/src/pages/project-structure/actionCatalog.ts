import type { CanvasWorkbenchAction } from "@candoitall/canvas-workbench";

// Port of the highest-value slice of CanDoItAll/src/Modules/CanDoItAll.Modules.Workbench/
// CanvasAdapters/ProjectStructureActionCatalogAdapter.cs and
// .../ProjectStructure/ProjectStructureCanvasCatalog.cs.
//
// Simplification vs. the source (documented, not silently dropped): the real adapter composes a
// different action set per node family/type (file collections get browse/open-in-explorer
// actions, runtime-launchable nodes get start/stop, etc. — ~700 lines of conditional
// composition). This ports ONE generic action set applied to every editable node: open, edit,
// copy-id/info/subtree-ids, progress/marker/priority submenus, disconnect, delete. Type-specific
// actions (runtime launch, process/workflow start, block/note conversion, subproject transfer,
// dependency-link connect/reconnect, summary modal) are NOT ported — they need UI flows beyond a
// context-menu-to-REST mapping.

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
    titleLabel: partial.titleLabel ?? "Title",
    titlePlaceholder: partial.titlePlaceholder ?? "",
    subtitleLabel: partial.subtitleLabel ?? "Subtitle",
    subtitlePlaceholder: partial.subtitlePlaceholder ?? "",
    notesLabel: partial.notesLabel ?? "Notes",
    notesPlaceholder: partial.notesPlaceholder ?? "",
    showDefaultTextFields: partial.showDefaultTextFields ?? true,
    submitLabel: partial.submitLabel ?? "Create",
    requiresFile: partial.requiresFile ?? false,
    acceptedFileTypes: partial.acceptedFileTypes ?? "",
    filePrompt: partial.filePrompt ?? "",
    supportsDragDrop: partial.supportsDragDrop ?? true,
    inputFields: partial.inputFields ?? [],
    defaultInputValues: partial.defaultInputValues ?? [],
    children: partial.children ?? [],
  };
}

// Ported verbatim from BuildProgressPresetActions (tones/labels match exactly).
function buildProgressAction(): CanvasWorkbenchAction {
  const presets: CanvasWorkbenchAction[] = [
    action({
      actionId: "progress:0",
      label: "0%",
      description: "Reset the progress ring to 0 percent.",
      icon: "progress-0",
      tone: "ghost",
      menuSize: "compact",
    }),
    action({
      actionId: "progress:started",
      label: "Started",
      menuLabel: "Start",
      description: "Show that work started, but the percentage is still too early to judge.",
      icon: "progress-started",
      tone: "warn",
      menuSize: "compact",
    }),
  ];
  for (let percent = 10; percent <= 100; percent += 10) {
    const tone = percent >= 90 ? "mint" : percent >= 60 ? "sky" : percent >= 30 ? "accent" : "warn";
    presets.push(
      action({
        actionId: `progress:${percent}`,
        label: `${percent}%`,
        description: `Set the clockwise progress ring to ${percent} percent.`,
        icon: `progress-${percent}`,
        tone,
        menuSize: "compact",
      }),
    );
  }
  presets.push(
    action({
      actionId: "progress:na",
      label: "N/A",
      description: "Show the neutral not-applicable state.",
      icon: "progress-na",
      tone: "ghost",
      menuSize: "compact",
    }),
  );

  return action({
    actionId: "progress",
    label: "Progress",
    description: "Update progress for the selected item or active selection.",
    icon: "progress",
    tone: "mint",
    submenuLayout: "compact-hive",
    children: presets,
  });
}

// Ported verbatim from BuildMarkerAction's marker table (icon/tone/label).
function buildMarkerAction(): CanvasWorkbenchAction {
  const markers: Array<[string, string, string, string]> = [
    ["marker:none", "Clear", "marker-none", "ghost"],
    ["marker:question", "Question", "marker-question", "sky"],
    ["marker:alert", "Exclamation", "marker-alert", "danger"],
    ["marker:thumbs-up", "Approved", "marker-thumbs-up", "mint"],
    ["marker:thumbs-down", "Rejected", "marker-thumbs-down", "danger"],
    ["marker:pause", "Paused", "marker-pause", "warn"],
    ["marker:stop", "Stopped", "marker-stop", "primary"],
    ["marker:money", "Budget", "marker-money", "mint"],
    ["marker:car", "Transport", "marker-car", "sky"],
    ["marker:idea", "Idea", "marker-idea", "accent"],
    ["marker:risk", "Risk", "marker-risk", "danger"],
  ];

  return action({
    actionId: "marker",
    label: "Markers",
    description: "Attach a fast visual note marker to the selected item or active selection.",
    icon: "marker",
    tone: "primary",
    submenuLayout: "compact-hive",
    children: markers.map(([actionId, label, icon, tone]) =>
      action({ actionId, label, icon, tone, menuSize: "compact" }),
    ),
  });
}

// Ported verbatim from BuildPriorityAction's priority table.
function buildPriorityAction(): CanvasWorkbenchAction {
  const tones = ["ghost", "danger", "warn", "accent", "sky", "mint", "primary"];
  const children = tones.map((tone, priority) =>
    action({
      actionId: `priority:${priority}`,
      label: String(priority),
      description: priority === 0 ? "Clear the priority badge." : `Set priority ${priority}.`,
      icon: `priority-${priority}`,
      tone,
      menuSize: "compact",
    }),
  );

  return action({
    actionId: "priority",
    label: "Priority",
    description: "Attach a numbered priority badge to the selected item or active selection.",
    icon: "priority",
    tone: "warn",
    submenuLayout: "compact-hive",
    children,
  });
}

/**
 * Builds the generic node context-menu action set. `hasParent` gates "Disconnect" (moving a node
 * back to project root makes no sense for a node already at the root).
 */
export function buildNodeContextActions(
  hasParent: boolean,
  isReadOnly: boolean,
): CanvasWorkbenchAction[] {
  if (isReadOnly) {
    return [
      action({
        actionId: "copy-id",
        label: "Copy id",
        description: "Copy this node id to the clipboard.",
        icon: "copy",
        tone: "ghost",
      }),
    ];
  }

  const actions = [
    action({
      actionId: "edit",
      label: "Edit",
      description: "Edit this node's title and notes.",
      icon: "draw",
      tone: "accent",
    }),
    action({
      actionId: "copy-id",
      label: "Copy id",
      description: "Copy this node id to the clipboard.",
      icon: "copy",
      tone: "ghost",
    }),
    action({
      actionId: "copy-info",
      label: "Copy info",
      description: "Copy this node as type_title:id-hash.",
      icon: "copy",
      tone: "primary",
    }),
    action({
      actionId: "copy-subtree-ids",
      label: "Copy tree ids",
      menuLabel: "Copy tree",
      description: "Copy this node and descendants as type_title:id-hash entries.",
      icon: "copy",
      tone: "sky",
    }),
    buildProgressAction(),
    buildMarkerAction(),
    buildPriorityAction(),
  ];

  if (hasParent) {
    actions.push(
      action({
        actionId: "disconnect",
        label: "Disconnect",
        description: "Move this node back to the project root without deleting it.",
        icon: "unlink",
        tone: "ghost",
      }),
    );
  }

  actions.push(
    action({
      actionId: "delete",
      label: "Delete",
      description: "Delete this node.",
      icon: "delete",
      tone: "danger",
    }),
  );
  return actions;
}

// Ported subset of ProjectStructureCanvasCatalog's quick-create leaves: the four simplest
// creates (no file requirement, only the default title/subtitle/notes fields).
export const QUICK_CREATE_OBJECT_TYPES: Record<string, string> = {
  "add-note": "Note",
  "add-decision": "Decision",
  "add-phase": "Phase",
  "add-milestone": "Milestone",
};

export function buildQuickCreateActions(): CanvasWorkbenchAction[] {
  return [
    action({
      actionId: "add-note",
      label: "Note",
      description: "Add a freeform note.",
      icon: "note",
      shortcutKey: "n",
      requiresInput: true,
      createMode: "dialog",
      submitLabel: "Add note",
    }),
    action({
      actionId: "add-decision",
      label: "Decision",
      description: "Add a decision point.",
      icon: "decision",
      shortcutKey: "d",
      requiresInput: true,
      createMode: "dialog",
      submitLabel: "Add decision",
    }),
    action({
      actionId: "add-phase",
      label: "Phase",
      description: "Add a project phase.",
      icon: "phase",
      shortcutKey: "p",
      requiresInput: true,
      createMode: "dialog",
      submitLabel: "Add phase",
    }),
    action({
      actionId: "add-milestone",
      label: "Milestone",
      description: "Add a milestone.",
      icon: "milestone",
      shortcutKey: "m",
      requiresInput: true,
      createMode: "dialog",
      submitLabel: "Add milestone",
    }),
  ];
}

export function parseProgressAction(
  actionId: string,
): { progressMode: string; progressPercent: number } | null {
  if (!actionId.startsWith("progress:")) return null;
  const token = actionId.slice("progress:".length);
  if (token === "na") return { progressMode: "na", progressPercent: 0 };
  if (token === "started") return { progressMode: "started", progressPercent: 0 };
  const percent = Number(token);
  if (!Number.isFinite(percent)) return null;
  const clamped = Math.min(100, Math.max(0, percent));
  return { progressMode: clamped >= 100 ? "complete" : "progress", progressPercent: clamped };
}

const MARKER_TABLE: Record<
  string,
  { markerIcon: string; markerTone: string; markerLabel: string }
> = {
  "marker:none": { markerIcon: "", markerTone: "", markerLabel: "" },
  "marker:question": { markerIcon: "question", markerTone: "sky", markerLabel: "Question" },
  "marker:alert": { markerIcon: "alert", markerTone: "danger", markerLabel: "Exclamation" },
  "marker:thumbs-up": { markerIcon: "thumbs-up", markerTone: "mint", markerLabel: "Approved" },
  "marker:thumbs-down": {
    markerIcon: "thumbs-down",
    markerTone: "danger",
    markerLabel: "Rejected",
  },
  "marker:pause": { markerIcon: "pause", markerTone: "warn", markerLabel: "Paused" },
  "marker:stop": { markerIcon: "stop", markerTone: "primary", markerLabel: "Stopped" },
  "marker:money": { markerIcon: "money", markerTone: "mint", markerLabel: "Budget" },
  "marker:car": { markerIcon: "car", markerTone: "sky", markerLabel: "Transport" },
  "marker:idea": { markerIcon: "idea", markerTone: "accent", markerLabel: "Idea" },
  "marker:risk": { markerIcon: "risk", markerTone: "danger", markerLabel: "Risk" },
};

export function parseMarkerAction(
  actionId: string,
): { markerIcon: string; markerTone: string; markerLabel: string } | null {
  return MARKER_TABLE[actionId] ?? null;
}

export function parsePriorityAction(actionId: string): number | null {
  if (!actionId.startsWith("priority:")) return null;
  const priority = Number(actionId.slice("priority:".length));
  return Number.isFinite(priority) ? priority : null;
}
