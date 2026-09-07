import type { CanvasWorkbenchSurfaceInput } from "../../src/model/types.js";

export const sampleSurface: CanvasWorkbenchSurfaceInput = {
  surfaceId: "sandbox",
  mode: "authoring",
  nodes: [
    { id: "start", title: "Start", subtitle: "Entry point", x: 40, y: 40, accentColor: "accent" },
    {
      id: "check",
      title: "Needs approval?",
      family: "workflow-decision",
      x: 320,
      y: 20,
      accentColor: "warning",
    },
    {
      id: "approve",
      title: "Approve",
      subtitle: "Manager sign-off",
      x: 620,
      y: -60,
      accentColor: "success",
    },
    {
      id: "reject",
      title: "Reject",
      subtitle: "Send back to author",
      x: 620,
      y: 100,
      accentColor: "destructive",
    },
    {
      id: "note",
      title: "Note",
      isInlineTextNode: true,
      inlineText: "",
      inlineTextPlaceholder: "Add a note...",
      x: 40,
      y: 220,
    },
  ],
  links: [
    { sourceId: "start", targetId: "check" },
    { sourceId: "check", targetId: "approve", label: "yes", tone: "success" },
    { sourceId: "check", targetId: "reject", label: "no", tone: "destructive" },
  ],
  uiState: {
    groupFrames: [
      { id: "frame-1", label: "Approval flow", anchorNodeIds: ["check", "approve", "reject"] },
    ],
  },
};
