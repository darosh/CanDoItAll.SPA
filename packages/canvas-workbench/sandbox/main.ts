import { createCanvasWorkbench } from "../src/index.js";
import { sampleSurface } from "./fixtures/sample.js";

const host = document.getElementById("host");
if (!host) throw new Error("#host element not found");

const workbench = createCanvasWorkbench(host, sampleSurface, { hasClipboardHandler: true });
workbench.fitView();

workbench.on("selectionChanged", (event) => console.log("selectionChanged", event));
workbench.on("nodesMoved", (event) => console.log("nodesMoved", event));
workbench.on("contextAction", (event) => console.log("contextAction", event));
workbench.on("createAction", (event) => console.log("createAction", event));
workbench.on("nodeOpened", (nodeId) => console.log("nodeOpened", nodeId));
workbench.on("clipboardAction", (event) => console.log("clipboardAction", event));

document.getElementById("fit-view")?.addEventListener("click", () => workbench.fitView());
document.getElementById("zoom-100")?.addEventListener("click", () => workbench.setZoomPercent(100));
document
  .getElementById("select-check")
  ?.addEventListener("click", () => workbench.selectNodes(["check"]));
document
  .getElementById("quick-create")
  ?.addEventListener("click", (event) =>
    workbench.openQuickCreateMenu(event.currentTarget as HTMLElement),
  );
document
  .getElementById("toggle-diagnostics")
  ?.addEventListener("click", () => workbench.toggleDiagnostics());
document
  .getElementById("toggle-minimap")
  ?.addEventListener("click", () => workbench.toggleMinimap());

window.addEventListener("resize", () => workbench.resize());
