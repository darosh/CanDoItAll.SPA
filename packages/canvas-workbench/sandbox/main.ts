import { createCanvasWorkbench } from "../src/index.js";
import { sampleSurface } from "./fixtures/sample.js";

const host = document.getElementById("host");
if (!host) throw new Error("#host element not found");

const workbench = createCanvasWorkbench(host, sampleSurface);
workbench.fitView();

workbench.on("selectionChanged", (event) => console.log("selectionChanged", event));
workbench.on("nodesMoved", (event) => console.log("nodesMoved", event));

document.getElementById("fit-view")?.addEventListener("click", () => workbench.fitView());
document.getElementById("zoom-100")?.addEventListener("click", () => workbench.setZoomPercent(100));
document
  .getElementById("select-check")
  ?.addEventListener("click", () => workbench.selectNodes(["check"]));

window.addEventListener("resize", () => workbench.resize());
