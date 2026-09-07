import type { CreateActionRequest, CreateComposerRequest } from "../../model/events.js";
import type { CanvasWorkbenchAction } from "../../model/types.js";

export interface ComposerSubmitContext {
  action: CanvasWorkbenchAction;
  sourceNodeId: string | null;
  parentNodeId: string | null;
  x: number;
  y: number;
}

/**
 * Builds the create-composer dialog as a plain DOM overlay (matching the old engine's own
 * approach — context-menu-and-composer.js is DOM, not canvas-drawn). Returns the root element;
 * caller (context-menu.ts) is responsible for appending/removing it and positioning it.
 */
export function renderComposer(
  action: CanvasWorkbenchAction,
  prefill: CreateComposerRequest,
  submitContext: ComposerSubmitContext,
  onSubmit: (request: CreateActionRequest) => void,
  onCancel: () => void,
): HTMLDivElement {
  const root = document.createElement("div");
  root.className = "cw-composer";
  Object.assign(root.style, {
    position: "absolute",
    zIndex: "30",
    background: "var(--cw-composer-bg, white)",
    border: "1px solid #d4d4d8",
    borderRadius: "8px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.16)",
    padding: "12px",
    minWidth: "260px",
    font: "13px system-ui, sans-serif",
  });

  const showDefaultFields = action.showDefaultTextFields !== false;
  const inputs: Record<string, HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> = {};
  let uploadedFile: CreateActionRequest["uploadedFile"] = null;

  function addField(
    key: string,
    label: string,
    placeholder: string,
    initial: string,
    multiline = false,
  ): void {
    const wrapper = document.createElement("label");
    wrapper.style.display = "block";
    wrapper.style.marginBottom = "8px";
    const labelEl = document.createElement("span");
    labelEl.textContent = label;
    labelEl.style.display = "block";
    labelEl.style.marginBottom = "2px";
    labelEl.style.color = "#71717a";
    wrapper.appendChild(labelEl);
    const input = multiline ? document.createElement("textarea") : document.createElement("input");
    if (!multiline) (input as HTMLInputElement).type = "text";
    input.value = initial;
    input.placeholder = placeholder;
    input.style.width = "100%";
    input.style.boxSizing = "border-box";
    input.style.padding = "6px 8px";
    input.style.border = "1px solid #d4d4d8";
    input.style.borderRadius = "4px";
    wrapper.appendChild(input);
    root.appendChild(wrapper);
    inputs[key] = input;
  }

  if (showDefaultFields) {
    addField(
      "title",
      action.titleLabel ?? "Title",
      action.titlePlaceholder ?? "",
      prefill.title ?? "",
    );
    addField(
      "subtitle",
      action.subtitleLabel ?? "Subtitle",
      action.subtitlePlaceholder ?? "",
      prefill.subtitle ?? "",
    );
    addField(
      "notes",
      action.notesLabel ?? "Notes",
      action.notesPlaceholder ?? "",
      prefill.notes ?? "",
      true,
    );
  }

  for (const field of action.inputFields ?? []) {
    const initial = prefill.inputValues?.find((value) => value.key === field.key)?.value ?? "";
    if (field.options && field.options.length > 0) {
      const wrapper = document.createElement("label");
      wrapper.style.display = "block";
      wrapper.style.marginBottom = "8px";
      const labelEl = document.createElement("span");
      labelEl.textContent = field.label;
      labelEl.style.display = "block";
      labelEl.style.marginBottom = "2px";
      labelEl.style.color = "#71717a";
      wrapper.appendChild(labelEl);
      const select = document.createElement("select");
      select.style.width = "100%";
      select.style.padding = "6px 8px";
      select.style.border = "1px solid #d4d4d8";
      select.style.borderRadius = "4px";
      for (const option of field.options) {
        const optionEl = document.createElement("option");
        optionEl.value = option.value;
        optionEl.textContent = option.label;
        if (option.value === initial) optionEl.selected = true;
        select.appendChild(optionEl);
      }
      wrapper.appendChild(select);
      root.appendChild(wrapper);
      inputs[field.key] = select;
    } else {
      addField(field.key, field.label, field.placeholder ?? "", initial);
    }
  }

  if (action.requiresFile) {
    const dropzone = document.createElement("div");
    dropzone.textContent = action.filePrompt ?? "Drop a file here, or click to choose one";
    Object.assign(dropzone.style, {
      border: "1px dashed #a1a1aa",
      borderRadius: "6px",
      padding: "16px",
      textAlign: "center",
      color: "#71717a",
      marginBottom: "8px",
      cursor: "pointer",
    });
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = action.acceptedFileTypes ?? "";
    fileInput.style.display = "none";

    function readFile(file: File): void {
      const reader = new FileReader();
      reader.onload = () => {
        const result = typeof reader.result === "string" ? reader.result : "";
        const base64Data = result.includes(",") ? (result.split(",")[1] ?? "") : result;
        uploadedFile = { fileName: file.name, contentType: file.type, base64Data };
        dropzone.textContent = file.name;
      };
      reader.readAsDataURL(file);
    }

    dropzone.addEventListener("click", () => fileInput.click());
    fileInput.addEventListener("change", () => {
      const file = fileInput.files?.[0];
      if (file) readFile(file);
    });
    if (action.supportsDragDrop) {
      dropzone.addEventListener("dragover", (event) => event.preventDefault());
      dropzone.addEventListener("drop", (event) => {
        event.preventDefault();
        const file = event.dataTransfer?.files?.[0];
        if (file) readFile(file);
      });
    }
    root.appendChild(dropzone);
    root.appendChild(fileInput);
  }

  const buttonRow = document.createElement("div");
  buttonRow.style.display = "flex";
  buttonRow.style.justifyContent = "flex-end";
  buttonRow.style.gap = "8px";
  buttonRow.style.marginTop = "4px";

  const cancelButton = document.createElement("button");
  cancelButton.type = "button";
  cancelButton.textContent = "Cancel";
  cancelButton.addEventListener("click", onCancel);

  const submitButton = document.createElement("button");
  submitButton.type = "button";
  submitButton.textContent = action.submitLabel ?? "Create";
  submitButton.addEventListener("click", () => {
    const inputValues = (action.inputFields ?? []).map((field) => ({
      key: field.key,
      value: inputs[field.key]?.value ?? "",
    }));
    onSubmit({
      actionId: action.actionId,
      sourceNodeId: submitContext.sourceNodeId,
      parentNodeId: submitContext.parentNodeId,
      x: submitContext.x,
      y: submitContext.y,
      title: (inputs.title as HTMLInputElement | undefined)?.value ?? "",
      subtitle: (inputs.subtitle as HTMLInputElement | undefined)?.value ?? "",
      notes: (inputs.notes as HTMLTextAreaElement | undefined)?.value ?? "",
      createMode: action.createMode ?? "",
      objectSubtype: action.objectSubtype ?? "",
      uploadedFile,
      inputValues,
    });
  });

  buttonRow.appendChild(cancelButton);
  buttonRow.appendChild(submitButton);
  root.appendChild(buttonRow);

  return root;
}
