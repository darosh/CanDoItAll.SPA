import { openContextSubmenu } from "./context-menu-and-composer.js";
import { renderGroupFrames, renderLinks } from "./canvas-renderers.js";
import { clearSceneHotZones } from "./canvas-scene-and-hit-testing.js";
import {
  applySceneTransform,
  renderNodes,
  renderSnapGuides,
  renderConnectorAnchorOverlay,
  renderTransformHandlesOverlay,
  renderDebugDecorations,
  renderMinimap,
  scheduleNodeMeasurement,
} from "./runtime-rendering.js";
import {
  contextSubmenuHoverDelayMs,
  selectionModel,
  getTextMeasureService,
  createElement,
  clamp,
  now,
  resetLastDragPatchMetrics,
  round,
  normalizeMenuActionScale,
  toSelectionSet,
  getVisibleNodes,
  getProjectedNodes,
  ensureLayoutPositions,
  getNodePosition,
  serializeState,
} from "./foundation.js";
import {
  createProgressBadge,
  resolveProgressPresetBadgeOptions,
  resolveMarkerGlyph,
  renderEmptyStateOverlay,
  renderDiagnosticsOverlay,
  getHostPoint,
  worldToHostPoint,
} from "./layout-and-legacy-render.js";

function openContextSubmenuLayer(state, parentLayer, options, action, offset) {
  openContextSubmenu(state, parentLayer, options, action, offset);
}

export function hitTestNode(state, target) {
  const nodeElement = target?.closest?.(".cw-node");
  if (!nodeElement) {
    return null;
  }

  return state.lookups.byId.get(nodeElement.dataset.nodeId) || null;
}

export function hitTestFrameHandle(target) {
  const handle = target?.closest?.(".cw-group-frame__handle, .cw-group-frame__label");
  if (!handle) {
    return null;
  }

  return handle.dataset.frameId || null;
}

export function hitTestProgressBadge(target) {
  return target?.closest?.(".cw-node__progress") || null;
}

export function isOverlayTarget(target) {
  return !!target?.closest?.(
    ".cw-context-menu, .cw-canvas-composer, .cw-workbench__popover, .cw-minimap, .cw-status-notice",
  );
}

export function applyFullTextTooltip(element, text) {
  const fullText = typeof text === "string" ? text.trim() : "";
  if (element && fullText) {
    element.dataset.fullText = fullText;
    element.title = fullText;
  }

  return element;
}

export function reconcileSelection(state) {
  const normalized = selectionModel.removeMissing(
    state.ui.selectedNodeIds,
    state.surface.nodes.map((node) => node.id),
    state.ui.selectedNodeIds[0] || null,
  );

  state.ui.selectedNodeIds = normalized.selectedNodeIds;
  state.selectedIds = toSelectionSet(normalized.selectedNodeIds);
  return normalized;
}

export function shouldClearNodeHighlightsForSelection(state, selectedNodeIds) {
  if (!state.highlightedIds || state.highlightedIds.size === 0) {
    return false;
  }

  if (!Array.isArray(selectedNodeIds) || selectedNodeIds.length === 0) {
    return true;
  }

  return selectedNodeIds.some((nodeId) => !state.highlightedIds.has(nodeId));
}

export function clearNodeHighlights(state, options) {
  if (!state?.highlightedIds || state.highlightedIds.size === 0) {
    return false;
  }

  state.highlightedIds = new Set();
  state.ui.highlightedNodeIds = [];

  if (options?.render !== false) {
    render(state);
  }

  if (options?.publish !== false) {
    publishState(state);
  }

  return true;
}

export function applySelection(state, selectedNodeIds, primaryNodeId, options) {
  const currentSelection = Array.isArray(state.ui?.selectedNodeIds) ? state.ui.selectedNodeIds : [];
  const normalized = selectionModel.replace(selectedNodeIds, primaryNodeId);
  const shouldClearHighlights = shouldClearNodeHighlightsForSelection(
    state,
    normalized.selectedNodeIds,
  );
  const isUnchangedSelection =
    currentSelection.length === normalized.selectedNodeIds.length &&
    currentSelection.every((nodeId, index) => nodeId === normalized.selectedNodeIds[index]);

  if (isUnchangedSelection && !shouldClearHighlights) {
    state.selectedIds = toSelectionSet(currentSelection);
    return normalized;
  }

  state.ui.selectedNodeIds = normalized.selectedNodeIds;
  state.selectedIds = toSelectionSet(normalized.selectedNodeIds);
  if (shouldClearHighlights) {
    clearNodeHighlights(state, { render: false, publish: false });
  }

  if (options?.render !== false) {
    render(state);
  }

  const shouldPublishSelection = options?.publish !== false && options?.publishSelection !== false;
  const shouldPublishState = options?.publish !== false && options?.publishState !== false;

  if (shouldPublishSelection) {
    publishSelection(state);
  }

  if (shouldPublishState) {
    publishState(state);
  }

  return normalized;
}

export function selectSingleNode(state, nodeId, options) {
  const normalized = selectionModel.selectOne(nodeId);
  return applySelection(state, normalized.selectedNodeIds, normalized.primaryNodeId, options);
}

export function publishSelection(state) {
  const normalized = selectionModel.normalize(
    state.ui.selectedNodeIds,
    state.ui.selectedNodeIds[0] || null,
  );
  state.ui.selectedNodeIds = normalized.selectedNodeIds;
  state.selectedIds = toSelectionSet(normalized.selectedNodeIds);
  state.selectionDispatchId = (state.selectionDispatchId || 0) + 1;
  state.dotNetRef.invokeMethodAsync(
    "OnSelectionChanged",
    normalized.primaryNodeId,
    JSON.stringify(normalized.selectedNodeIds),
    state.selectionDispatchId,
  );
}

export function clearViewportStateCommit(state) {
  window.clearTimeout(state.viewportStateTimer);
  state.viewportStateTimer = 0;
}

export function createSerializedStateSnapshot(state) {
  state.stateDispatchId = (state.stateDispatchId || 0) + 1;
  return {
    dispatchId: state.stateDispatchId,
    stateJson: serializeState(state),
  };
}

export function invokeStateChanged(state, snapshot, mode) {
  if (state.metrics) {
    state.metrics.statePublishCommitCount += 1;
    state.metrics.lastStatePublishMode = mode || "unspecified";
    state.metrics.lastCommittedStateSize =
      typeof snapshot?.stateJson === "string" ? snapshot.stateJson.length : 0;
  }

  state.dotNetRef
    .invokeMethodAsync("OnStateChanged", snapshot?.stateJson || "{}", snapshot?.dispatchId || 0)
    .catch(() => {});
}

export function publishState(state) {
  if (state.metrics) {
    state.metrics.statePublishRequestCount += 1;
  }

  clearViewportStateCommit(state);
  state.publishStateDebounced(createSerializedStateSnapshot(state));
}

export function publishStateNow(state, mode) {
  if (state.metrics) {
    state.metrics.statePublishImmediateCount += 1;
  }

  clearViewportStateCommit(state);
  state.publishStateDebounced.cancel?.();
  invokeStateChanged(state, createSerializedStateSnapshot(state), mode || "immediate");
}

export function scheduleViewportStateCommit(state, delayMs) {
  if (state.metrics) {
    state.metrics.viewportCommitScheduleCount += 1;
  }

  clearViewportStateCommit(state);
  state.viewportStateTimer = window.setTimeout(() => {
    if (state.metrics) {
      state.metrics.viewportCommitCount += 1;
    }

    publishStateNow(state, "viewport-idle");
  }, delayMs ?? 280);
}

export function publishNodesMoved(state, movedIds, resolvedPositions) {
  const payload = movedIds.map((nodeId) => {
    const position = resolvedPositions?.[nodeId] ||
      state.ui.manualPositions[nodeId] || { x: 0, y: 0 };
    return {
      nodeId,
      x: round(position.x),
      y: round(position.y),
    };
  });

  if (state.metrics) {
    state.metrics.movePublishRequestCount += 1;
    state.metrics.lastMovePublishStatus = "pending";
  }

  return state.dotNetRef
    .invokeMethodAsync("OnNodesMoved", JSON.stringify(payload))
    .then(() => {
      if (state.metrics) {
        state.metrics.movePublishSuccessCount += 1;
        state.metrics.lastMovePublishStatus = "success";
      }

      return true;
    })
    .catch((error) => {
      if (state.metrics) {
        state.metrics.movePublishFailureCount += 1;
        state.metrics.lastMovePublishStatus = error?.message || "failed";
      }

      return false;
    });
}

export function setSelection(state, nodeIds, keepOrderPrimary) {
  const primaryNodeId = keepOrderPrimary && Array.isArray(nodeIds) ? nodeIds[0] || null : null;
  applySelection(state, nodeIds, primaryNodeId);
}

export function toggleSelection(state, nodeId) {
  const normalized = selectionModel.toggle(
    state.ui.selectedNodeIds,
    nodeId,
    state.ui.selectedNodeIds[0] || null,
  );
  applySelection(state, normalized.selectedNodeIds, normalized.primaryNodeId);
}

export function toggleCollapse(state, nodeId) {
  if (state.collapsedIds.has(nodeId)) {
    state.collapsedIds.delete(nodeId);
  } else {
    state.collapsedIds.add(nodeId);
  }

  state.ui.collapsedNodeIds = [...state.collapsedIds];
  render(state);
  publishState(state);
}

export function clearContextMenu(state) {
  cancelPendingContextSubmenu(state);
  state.contextMenu.innerHTML = "";
  state.contextMenu.style.display = "none";
  state.contextMenuState = null;
}

export function removeComposerElements(state, exceptElement) {
  if (!state?.host) {
    return false;
  }

  let removed = false;
  for (const element of state.host.querySelectorAll(":scope > .cw-canvas-composer")) {
    if (element !== exceptElement) {
      element.remove();
      removed = true;
    }
  }

  return removed;
}

export function closeComposer(state, options) {
  const focusHost = options?.focusHost !== false;
  const element = state.composer?.element || null;
  let removed = false;
  if (element) {
    element.remove();
    removed = true;
  }

  removed = removeComposerElements(state, element) || removed;
  state.composer = null;
  if (focusHost && removed) {
    deferHostFocus(state);
  }
}

export function ensureHostFocus(state) {
  try {
    state.host.focus({ preventScroll: true });
  } catch {
    state.host.focus();
  }
}

export function deferHostFocus(state) {
  window.requestAnimationFrame(() => ensureHostFocus(state));
}

export function resolveComposerAnchor(state) {
  if (!state.composer) {
    return null;
  }

  if (state.composer.nodeId) {
    const node = state.lookups.byId.get(state.composer.nodeId);
    if (node) {
      return worldToHostPoint(state, getNodePosition(state, node));
    }
  }

  if (state.composer.anchorWorld) {
    return worldToHostPoint(state, state.composer.anchorWorld);
  }

  return state.composer.anchorHost || null;
}

export function layoutComposer(state) {
  if (!state.composer?.element) {
    return;
  }

  const anchor = resolveComposerAnchor(state);
  if (!anchor) {
    return;
  }

  const element = state.composer.element;
  const hostRect = state.host.getBoundingClientRect();
  const composerRect = element.getBoundingClientRect();
  const margin = 18;
  let left = anchor.x - composerRect.width / 2;
  let top = anchor.y + 24;

  if (state.composer.kind === "note-create" || state.composer.kind === "note-edit") {
    top = anchor.y - composerRect.height / 2;
  }

  left = clamp(left, margin, Math.max(margin, hostRect.width - composerRect.width - margin));
  top = clamp(top, margin, Math.max(margin, hostRect.height - composerRect.height - margin));
  element.style.left = `${round(left)}px`;
  element.style.top = `${round(top)}px`;
}

export function applyViewportPreviewTransform(state) {
  if (!state?.canvasStack) {
    return;
  }

  const rendered = state.renderedViewport || {
    panX: state.ui.panX,
    panY: state.ui.panY,
    zoom: state.ui.zoom,
  };
  const renderedZoom = Math.max(0.001, rendered.zoom || 1);
  const nextZoom = Math.max(0.001, state.ui.zoom || 1);
  const scale = nextZoom / renderedZoom;
  const translateX = state.ui.panX - rendered.panX * scale;
  const translateY = state.ui.panY - rendered.panY * scale;

  if (Math.abs(translateX) <= 0.1 && Math.abs(translateY) <= 0.1 && Math.abs(scale - 1) <= 0.001) {
    state.canvasStack.style.transform = "";
    state.canvasStack.style.willChange = "";
    return;
  }

  state.canvasStack.style.transformOrigin = "0 0";
  state.canvasStack.style.willChange = "transform";
  state.canvasStack.style.transform = `translate3d(${round(translateX)}px, ${round(translateY)}px, 0) scale(${scale})`;
}

export function resetViewportPreviewTransform(state) {
  if (!state) {
    return;
  }

  if (state.canvasStack) {
    state.canvasStack.style.transform = "";
    state.canvasStack.style.willChange = "";
  }

  state.renderedViewport = {
    panX: state.ui.panX,
    panY: state.ui.panY,
    zoom: state.ui.zoom,
  };
}

export function cancelDeferredViewportRender(state) {
  if (!state?.deferredViewportRenderTimer) {
    return false;
  }

  window.clearTimeout(state.deferredViewportRenderTimer);
  state.deferredViewportRenderTimer = 0;
  return true;
}

export function scheduleDeferredViewportRender(state, delayMs) {
  cancelDeferredViewportRender(state);
  state.deferredViewportRenderTimer = window.setTimeout(
    () => {
      state.deferredViewportRenderTimer = 0;
      render(state);
    },
    Math.max(0, delayMs ?? 180),
  );
}

export function flushDeferredViewportRender(state) {
  if (cancelDeferredViewportRender(state)) {
    render(state);
  }
}

export function render(state) {
  const startedAt = now();
  const visibleNodes = getVisibleNodes(state);
  const projectedNodes = getProjectedNodes(state, visibleNodes);
  const isPanning = state.interaction?.kind === "pan";
  if (state.metrics) {
    state.metrics.renderCount += 1;
    state.metrics.lastVisibleNodeCount = projectedNodes.length;
    resetLastDragPatchMetrics(state.metrics);
  }

  ensureLayoutPositions(state, visibleNodes);
  applySceneTransform(state);
  clearSceneHotZones?.(state);
  renderGroupFrames(state, projectedNodes);
  renderLinks(state, projectedNodes);
  renderSnapGuides(state);
  renderNodes(state, projectedNodes);
  renderEmptyStateOverlay(state, visibleNodes);
  if (isPanning) {
    if (state.anchorLayer) {
      state.anchorLayer.innerHTML = "";
    }

    if (state.transformLayer) {
      state.transformLayer.innerHTML = "";
    }

    if (state.debugLayer) {
      state.debugLayer.innerHTML = "";
    }
  } else {
    renderConnectorAnchorOverlay(state, projectedNodes);
    renderTransformHandlesOverlay(state, projectedNodes);
    renderDebugDecorations(state, projectedNodes);
    renderDiagnosticsOverlay(state, projectedNodes);
    renderMinimap(state, visibleNodes);
    layoutComposer(state);
    scheduleNodeMeasurement(state);
  }
  resetViewportPreviewTransform(state);

  if (state.metrics) {
    const elapsedMs = Math.max(0, now() - startedAt);
    state.metrics.totalRenderDurationMs += elapsedMs;
    state.metrics.lastRenderDurationMs = elapsedMs;
    state.metrics.maxRenderDurationMs = Math.max(state.metrics.maxRenderDurationMs, elapsedMs);
  }
}

export function getContextActions(state, node) {
  if (node && state.selectedIds.size > 1 && state.selectedIds.has(node.id)) {
    return state.surface.chrome.groupContextActions || [];
  }

  if (node) {
    return node.contextActions || [];
  }

  return state.surface.chrome.quickCreateActions || [];
}

export function isCreateAction(action) {
  if (action?.children?.length) {
    return false;
  }

  return !!action?.requiresInput || (action?.createMode && action.createMode !== "command");
}

export function buildCreateRequest(state, action, sourceNode, worldPoint, placementKind) {
  const point = worldPoint || (sourceNode ? getNodePosition(state, sourceNode) : { x: 0, y: 0 });
  return {
    actionId: action.actionId,
    sourceNodeId: sourceNode?.id || null,
    parentNodeId: sourceNode?.id || null,
    x: round(point.x),
    y: round(point.y),
    title: "",
    subtitle: "",
    notes: "",
    objectSubtype: action.objectSubtype || "",
    uploadedFile: null,
    inputValues: Array.isArray(action?.defaultInputValues)
      ? action.defaultInputValues.map((item) => ({
          key: item.key || "",
          value: item.value || "",
        }))
      : [],
    placementKind: placementKind || (sourceNode ? "child" : "canvas"),
    createMode: action.createMode || (action.requiresInput ? "dialog" : "command"),
  };
}

export function resolveMenuLabel(action) {
  if (action?.menuLabel) {
    return action.menuLabel;
  }

  const label = action?.label || action?.actionId || "Item";
  const parts = label.split(/\s+/).filter(Boolean);
  return parts[0] || label;
}

export function getMenuScale(state) {
  return normalizeMenuActionScale(state?.ui?.menuActionScale);
}

export function normalizeContextMenuLayout(layout) {
  return (layout || "").trim().toLowerCase();
}

export function isHiveLayout(layout) {
  const normalizedLayout = normalizeContextMenuLayout(layout);
  return (
    normalizedLayout === "hive" ||
    normalizedLayout === "compact-hive" ||
    normalizedLayout === "compact-ring"
  );
}

export function isCompactHiveLayout(layout) {
  const normalizedLayout = normalizeContextMenuLayout(layout);
  return normalizedLayout === "compact-hive" || normalizedLayout === "compact-ring";
}

export function resolveMenuActionVariant(action) {
  const actionId = (action?.actionId || "").toLowerCase();
  if (actionId.startsWith("progress:")) {
    return "progress-preset";
  }

  if (actionId.startsWith("marker:")) {
    return "marker-preset";
  }

  if (actionId.startsWith("priority:")) {
    return "priority-preset";
  }

  return (action?.menuSize || "").toLowerCase() === "compact" ? "compact" : "normal";
}

export function getActionMetrics(state, action) {
  const scale = getMenuScale(state);
  switch (resolveMenuActionVariant(action)) {
    case "progress-preset":
      return { halfWidth: round(32 * scale), halfHeight: round(28 * scale) };
    case "marker-preset":
      return { halfWidth: round(32 * scale), halfHeight: round(28 * scale) };
    case "priority-preset":
      return { halfWidth: round(25 * scale), halfHeight: round(22 * scale) };
    case "compact":
      return { halfWidth: round(25 * scale), halfHeight: round(22 * scale) };
    default:
      return { halfWidth: round(35 * scale), halfHeight: round(31 * scale) };
  }
}

export function applyProgressPresetTone(button, action) {
  const token = (action?.actionId || "").substring("progress:".length).toLowerCase();
  const percent = Number.parseInt(token, 10);
  let depth = 236;
  if (token === "na") {
    depth = 244;
  } else if (token === "started") {
    depth = 222;
  } else if (Number.isFinite(percent)) {
    depth = clamp(242 - Math.round(percent * 1.08), 126, 242);
  }

  const nextDepth = clamp(depth - 18, 96, 224);
  button.style.background = `linear-gradient(180deg, rgb(${depth} ${depth} ${depth}), rgb(${nextDepth} ${nextDepth} ${nextDepth}))`;
  button.style.color = nextDepth <= 142 ? "#f8fafc" : "#0f172a";
}

export function fitContextMenuLabel(button, label, variant) {
  if (!button || !label) {
    return;
  }

  window.requestAnimationFrame(() => {
    const maxWidthRatio = variant === "normal" ? 0.82 : variant === "compact" ? 0.74 : 0.78;
    const maxHeightRatio = variant === "normal" ? 0.33 : variant === "compact" ? 0.26 : 0.29;
    const maxWidth = Math.max(20, button.clientWidth * maxWidthRatio);
    const minFontSize = variant === "normal" ? 9.25 : variant === "compact" ? 7.4 : 7.7;
    const maxHeight = Math.max(14, button.clientHeight * maxHeightRatio);
    label.style.maxWidth = `${round(maxWidth)}px`;

    const measureService = getTextMeasureService();
    const initialFontSize =
      parseFloat(window.getComputedStyle(label).fontSize) || (variant === "normal" ? 11.5 : 8.4);
    if (measureService && typeof measureService.fitElementText === "function") {
      measureService.fitElementText(label, {
        text: label.dataset.fullText || label.textContent || "",
        maxWidth,
        maxHeight,
        maxLines: 2,
        minFontSize,
        initialFontSize,
        truncationMode: "ellipsis",
      });
      return;
    }

    let fontSize = initialFontSize;
    while (
      fontSize > minFontSize &&
      (label.scrollWidth > maxWidth + 0.5 || label.scrollHeight > maxHeight + 0.5)
    ) {
      fontSize -= 0.25;
      label.style.fontSize = `${fontSize}px`;
    }
  });
}

export function resolveActionGlyph(icon) {
  switch ((icon || "").toLowerCase()) {
    case "open":
      return "\u2197";
    case "copy":
      return "\u2398";
    case "link":
    case "plug":
      return "\u21C4";
    case "qa":
    case "use":
      return "\u2713";
    case "test":
      return "\u2697";
    case "fork":
      return "\u2442";
    case "skip":
      return "\u00BB";
    case "note":
      return "\u270E";
    case "choice":
      return "\u25C6";
    case "phase":
      return "\u25ED";
    case "date":
      return "\u25F7";
    case "feature":
      return "\u25C8";
    case "arch":
      return "\u25A3";
    case "build":
      return "\u2B22";
    case "rev":
      return "\u21BA";
    case "prompt":
      return "\u2736";
    case "research":
      return "\u2315";
    case "money":
      return "$";
    case "market":
      return "\u25CE";
    case "ops":
      return "\u2699";
    case "ship":
      return "\u21E2";
    case "risk":
      return "\u26A0";
    case "audit":
      return "\u2714";
    case "support":
      return "\u2630";
    case "flow":
      return "\u27F6";
    case "session":
      return "\u25C9";
    case "step":
      return "\u2192";
    case "repo":
      return "\u2318";
    case "file":
      return "\u25A4";
    case "image":
      return "\u25A7";
    case "video":
      return "\u25B6";
    case "shield":
      return "\u26E8";
    case "evidence":
      return "\u25C9";
    case "frame":
      return "\u25AD";
    case "clear":
      return "\u00D7";
    case "progress":
      return "\u25D4";
    case "marker":
      return "\u2736";
    case "priority":
      return "#";
    default:
      return (icon || "").slice(0, 1).toUpperCase() || "\u25CF";
  }
}

export function createMenuActionIcon(state, action) {
  const iconKey = (action?.icon || "").toLowerCase();
  const iconContainer = createElement(state.document, "span", "cw-context-menu__icon");

  if (iconKey.startsWith("progress-")) {
    const preset = resolveProgressPresetBadgeOptions(iconKey);
    iconContainer.appendChild(
      createProgressBadge(
        state.document,
        preset.progressMode,
        preset.progressPercent,
        "cw-node__progress--menu",
        preset.centerText,
        preset.title,
      ),
    );
    return iconContainer;
  }

  if (iconKey.startsWith("marker-")) {
    const markerIcon = iconKey.substring("marker-".length);
    const markerBadge = createElement(
      state.document,
      "span",
      `cw-node__badge cw-node__marker tone-${(action?.tone || "accent").toLowerCase()} cw-node__badge--menu text-xl`,
      resolveMarkerGlyph(markerIcon) || "\u2736",
    );
    iconContainer.appendChild(markerBadge);
    return iconContainer;
  }

  if (iconKey.startsWith("priority-")) {
    const priority = clamp(Math.round(Number(iconKey.substring("priority-".length)) || 0), 0, 6);
    const priorityBadge = createElement(
      state.document,
      "span",
      `cw-node__badge cw-node__priority is-level-${priority} cw-node__badge--menu`,
      `${priority}`,
    );
    iconContainer.appendChild(priorityBadge);
    return iconContainer;
  }

  iconContainer.appendChild(
    createElement(state.document, "span", "cw-context-menu__glyph", resolveActionGlyph(iconKey)),
  );
  return iconContainer;
}

export function getRadialOffsets(count, baseRadius, ringStep) {
  if (count <= 0) {
    return [];
  }

  if (count === 1) {
    return [{ x: 0, y: 0 }];
  }

  const offsets = [];
  let remaining = count;
  let ringIndex = 0;
  const radiusStart = typeof baseRadius === "number" ? baseRadius : 84;
  const radiusStep = typeof ringStep === "number" ? ringStep : 62;

  while (remaining > 0) {
    const ringCapacity =
      ringIndex === 0 ? Math.min(remaining, 6) : Math.min(remaining, 12 + (ringIndex - 1) * 6);
    const radius = radiusStart + ringIndex * radiusStep;
    const startAngle = ringIndex % 2 === 0 ? -90 : -75;

    for (let index = 0; index < ringCapacity; index++) {
      const angle = ((startAngle + (360 / ringCapacity) * index) * Math.PI) / 180;
      offsets.push({
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
      });
    }

    remaining -= ringCapacity;
    ringIndex += 1;
  }

  return offsets;
}

export function buildCompactHiveCoordinates(count) {
  if (count <= 0) {
    return [];
  }

  const directions = [
    { q: 1, r: 0 },
    { q: 0, r: 1 },
    { q: -1, r: 1 },
    { q: -1, r: 0 },
    { q: 0, r: -1 },
    { q: 1, r: -1 },
  ];
  const coordinates = [];
  for (let ring = 1; coordinates.length < count; ring++) {
    let q = 0;
    let r = -ring;
    for (const direction of directions) {
      for (let step = 0; step < ring && coordinates.length < count; step++) {
        coordinates.push({ q, r });
        q += direction.q;
        r += direction.r;
      }
    }
  }

  return coordinates;
}

export function getCompactHiveOffsets(state, actions, layout) {
  if (!actions?.length) {
    return [];
  }

  let maxHalfWidth = 34;
  let maxHalfHeight = 29;
  actions.forEach((action) => {
    const metrics = getActionMetrics(state, action);
    maxHalfWidth = Math.max(maxHalfWidth, metrics.halfWidth);
    maxHalfHeight = Math.max(maxHalfHeight, metrics.halfHeight);
  });

  const scale = getMenuScale(state);
  const horizontalPadding = round((isCompactHiveLayout(layout) ? 6 : 8) * scale);
  const verticalPadding = round((isCompactHiveLayout(layout) ? 4 : 6) * scale);
  const hexHeight = Math.max(
    maxHalfHeight * 2 + verticalPadding,
    round((maxHalfWidth * 2 + horizontalPadding) * 0.8660254),
  );
  const hexWidth = Math.max(maxHalfWidth * 2 + horizontalPadding, round(hexHeight / 0.8660254));
  const horizontalStep = round(hexWidth * 0.75);
  const verticalStep = round(hexHeight);
  return buildCompactHiveCoordinates(actions.length).map((coordinate) => ({
    x: round(coordinate.q * horizontalStep),
    y: round((coordinate.r + coordinate.q / 2) * verticalStep),
  }));
}

export function resolveContextMenuOffsets(state, actions, baseRadius, ringStep, layout) {
  if (isHiveLayout(layout)) {
    return getCompactHiveOffsets(state, actions, layout);
  }

  return getRadialOffsets(actions.length, baseRadius, ringStep);
}

export function resolveContextMenuSafeTop(state) {
  const hostRect = state.host.getBoundingClientRect();
  const workbenchFrame = state.host.closest(".cw-workbench-frame");
  const toolbars = workbenchFrame
    ? Array.from(workbenchFrame.querySelectorAll(".cw-toolbar")).filter(
        (toolbar) => toolbar instanceof HTMLElement,
      )
    : [];
  if (!toolbars.length) {
    return 0;
  }

  const safeBottom = toolbars.reduce((maxBottom, toolbar) => {
    const toolbarRect = toolbar.getBoundingClientRect();
    return Math.max(maxBottom, toolbarRect.bottom);
  }, 0);
  return Math.max(0, Math.round(safeBottom - hostRect.top + 12));
}

export function getContextMenuLayerBounds(state, originOffset, offsets, radius, actions, layout) {
  const coreHalf = 38;
  const coreLabelAllowance = 30;
  const padding = isHiveLayout(layout) ? 12 : 16;
  const bounds = {
    minX: originOffset.x - coreHalf,
    maxX: originOffset.x + coreHalf,
    minY: originOffset.y - coreHalf,
    maxY: originOffset.y + coreHalf + coreLabelAllowance,
  };

  if (!(offsets || []).length && radius > coreHalf) {
    bounds.minX = Math.min(bounds.minX, originOffset.x - radius);
    bounds.maxX = Math.max(bounds.maxX, originOffset.x + radius);
    bounds.minY = Math.min(bounds.minY, originOffset.y - radius);
    bounds.maxY = Math.max(bounds.maxY, originOffset.y + radius);
  }

  for (let index = 0; index < (offsets || []).length; index++) {
    const offset = offsets[index];
    const metrics = getActionMetrics(state, actions?.[index]);
    const centerX = originOffset.x + offset.x;
    const centerY = originOffset.y + offset.y;
    bounds.minX = Math.min(bounds.minX, centerX - metrics.halfWidth);
    bounds.maxX = Math.max(bounds.maxX, centerX + metrics.halfWidth);
    bounds.minY = Math.min(bounds.minY, centerY - metrics.halfHeight);
    bounds.maxY = Math.max(bounds.maxY, centerY + metrics.halfHeight);
  }

  bounds.minX -= padding;
  bounds.maxX += padding;
  bounds.minY -= padding;
  bounds.maxY += padding;
  return bounds;
}

export function clampLayerBoundsToHost(state, bounds) {
  const rootCenter = state.contextMenuState?.rootCenter;
  if (!rootCenter) {
    return { x: 0, y: 0 };
  }

  const hostRect = state.host.getBoundingClientRect();
  const visibleMinX = -rootCenter.x;
  const visibleMaxX = hostRect.width - rootCenter.x;
  const visibleMinY = resolveContextMenuSafeTop(state) - rootCenter.y;
  const visibleMaxY = hostRect.height - rootCenter.y;
  let shiftX = 0;
  let shiftY = 0;

  if (bounds.minX < visibleMinX) {
    shiftX += visibleMinX - bounds.minX;
  }

  if (bounds.maxX > visibleMaxX) {
    shiftX -= bounds.maxX - visibleMaxX;
  }

  if (bounds.minY < visibleMinY) {
    shiftY += visibleMinY - bounds.minY;
  }

  if (bounds.maxY > visibleMaxY) {
    shiftY -= bounds.maxY - visibleMaxY;
  }

  return {
    x: round(shiftX),
    y: round(shiftY),
  };
}

export function positionContextMenu(state, center, offsets, actions, layout) {
  const hostRect = state.host.getBoundingClientRect();
  const radius = getContextMenuOrbitRadius(state, offsets || [], actions || []);
  const bounds = getContextMenuLayerBounds(
    state,
    { x: 0, y: 0 },
    offsets || [],
    radius,
    actions || [],
    layout,
  );
  const safeTop = resolveContextMenuSafeTop(state);
  const x = round(
    clamp(center.x, -bounds.minX, Math.max(-bounds.minX, hostRect.width - bounds.maxX)),
  );
  const y = round(
    clamp(
      center.y,
      safeTop - bounds.minY,
      Math.max(safeTop - bounds.minY, hostRect.height - bounds.maxY),
    ),
  );
  state.contextMenu.style.left = `${x}px`;
  state.contextMenu.style.top = `${y}px`;
  return { x, y };
}

export function getContextMenuOrbitRadius(state, offsets, actions) {
  let radius = 76 * getMenuScale(state);

  for (let index = 0; index < (offsets || []).length; index++) {
    const offset = offsets[index];
    const metrics = getActionMetrics(state, actions?.[index]);
    radius = Math.max(
      radius,
      Math.hypot(offset.x, offset.y) + Math.max(metrics.halfWidth, metrics.halfHeight) + 12,
    );
  }

  return radius;
}

export function getContextMenuLocalPoint(state, clientX, clientY) {
  const rootCenter = state.contextMenuState?.rootCenter;
  if (!rootCenter) {
    return null;
  }

  const hostPoint = getHostPoint(state, clientX, clientY);
  return {
    x: hostPoint.x - rootCenter.x,
    y: hostPoint.y - rootCenter.y,
  };
}

export function isPointInContextMenuLayer(layerState, localPoint) {
  if (!layerState || !localPoint) {
    return false;
  }

  if (layerState.mode === "panel" && layerState.bounds) {
    return (
      localPoint.x >= layerState.bounds.minX - 12 &&
      localPoint.x <= layerState.bounds.maxX + 12 &&
      localPoint.y >= layerState.bounds.minY - 12 &&
      localPoint.y <= layerState.bounds.maxY + 12
    );
  }

  if (layerState.bounds && isHiveLayout(layerState.layout)) {
    return (
      localPoint.x >= layerState.bounds.minX - 18 &&
      localPoint.x <= layerState.bounds.maxX + 18 &&
      localPoint.y >= layerState.bounds.minY - 18 &&
      localPoint.y <= layerState.bounds.maxY + 18
    );
  }

  const dx = localPoint.x - layerState.originOffset.x;
  const dy = localPoint.y - layerState.originOffset.y;
  return Math.hypot(dx, dy) <= layerState.radius + 18;
}

export function closeContextMenuLayersFrom(state, depth) {
  const layers = state.contextMenuState?.layers;
  if (!layers?.length || depth >= layers.length) {
    return;
  }

  cancelPendingContextSubmenu(state, (pending) => pending.ownerDepth + 1 >= depth);

  for (let index = layers.length - 1; index >= depth; index--) {
    layers[index].element.remove();
  }

  state.contextMenuState.layers = layers.slice(0, depth);
}

export function syncContextMenuLayers(state, event) {
  const layers = state.contextMenuState?.layers;
  if (!layers?.length) {
    return;
  }

  const hoveredAction = event.target?.closest?.(".cw-context-menu__action");
  if (hoveredAction && state.contextMenu?.contains(hoveredAction)) {
    const depth = Number.parseInt(hoveredAction.dataset.layerDepth || "0", 10) || 0;
    const layer = layers[depth];
    const entry = layer?.actionEntries?.get(hoveredAction.dataset.actionId || "");
    if (entry?.action?.children?.length) {
      scheduleContextSubmenuOpen(
        state,
        layer,
        entry.options,
        entry.action,
        entry.offset,
        hoveredAction,
      );
      return;
    }

    cancelPendingContextSubmenu(state);
    closeContextMenuLayersFrom(state, depth + 1);
    return;
  }

  if (layers.length < 2) {
    return;
  }

  const localPoint = getContextMenuLocalPoint(state, event.clientX, event.clientY);
  if (!localPoint) {
    return;
  }

  let deepestContainingLayer = 0;
  for (let index = 0; index < layers.length; index++) {
    if (isPointInContextMenuLayer(layers[index], localPoint)) {
      deepestContainingLayer = index;
    }
  }

  cancelPendingContextSubmenu(state, (pending) => pending.ownerDepth > deepestContainingLayer);
  closeContextMenuLayersFrom(state, deepestContainingLayer + 1);
}

export function resolveSubmenuOrigin(parentLayer, offset, layout) {
  const length = Math.hypot(offset.x, offset.y) || 1;
  const outwardDistance = isHiveLayout(layout)
    ? Math.max(84, round(parentLayer.radius * 0.24))
    : Math.max(108, round(parentLayer.radius * 0.34));
  return {
    x: round(parentLayer.originOffset.x + offset.x + (offset.x / length) * outwardDistance),
    y: round(parentLayer.originOffset.y + offset.y + (offset.y / length) * outwardDistance),
  };
}

export function ensureSubmenuLoadingIndicator(state, button) {
  let indicator = button.querySelector(".cw-context-menu__loading-indicator");
  if (indicator) {
    return indicator;
  }

  indicator = createElement(state.document, "span", "cw-context-menu__loading-indicator");
  indicator.appendChild(createElement(state.document, "span", "cw-context-menu__loading-ring"));
  button.appendChild(indicator);
  return indicator;
}

export function clearSubmenuLoadingIndicator(button) {
  if (!(button instanceof HTMLElement)) {
    return;
  }

  button.classList.remove("is-submenu-loading");
  button.querySelector(".cw-context-menu__loading-indicator")?.remove();
}

export function cancelPendingContextSubmenu(state, predicate) {
  const pending = state.contextMenuState?.pendingSubmenu;
  if (!pending) {
    return;
  }

  if (typeof predicate === "function" && !predicate(pending)) {
    return;
  }

  window.clearTimeout(pending.timerId);
  clearSubmenuLoadingIndicator(pending.button);
  state.contextMenuState.pendingSubmenu = null;
}

export function scheduleContextSubmenuOpen(state, parentLayer, options, action, offset, button) {
  if (!action?.children?.length || !state.contextMenuState) {
    cancelPendingContextSubmenu(state);
    return;
  }

  const nextDepth = parentLayer.depth + 1;
  const existingLayer = state.contextMenuState.layers?.[nextDepth];
  if (
    existingLayer &&
    existingLayer.ownerActionId === action.actionId &&
    existingLayer.ownerDepth === parentLayer.depth
  ) {
    cancelPendingContextSubmenu(state);
    return;
  }

  const pending = state.contextMenuState.pendingSubmenu;
  if (
    pending &&
    pending.ownerActionId === action.actionId &&
    pending.ownerDepth === parentLayer.depth
  ) {
    return;
  }

  cancelPendingContextSubmenu(state);
  if (!(button instanceof HTMLElement)) {
    return;
  }

  ensureSubmenuLoadingIndicator(state, button);
  button.classList.add("is-submenu-loading");

  const timerId = window.setTimeout(() => {
    if (
      !state.contextMenuState?.pendingSubmenu ||
      state.contextMenuState.pendingSubmenu.timerId !== timerId
    ) {
      return;
    }

    cancelPendingContextSubmenu(state);
    openContextSubmenuLayer(state, parentLayer, options, action, offset);
  }, contextSubmenuHoverDelayMs);

  state.contextMenuState.pendingSubmenu = {
    timerId,
    ownerActionId: action.actionId || "",
    ownerDepth: parentLayer.depth,
    button,
  };
}

export function clampLayerOriginToHost(state, originOffset, offsets, radius, actions, layout) {
  const bounds = getContextMenuLayerBounds(
    state,
    originOffset,
    offsets || [],
    radius,
    actions || [],
    layout,
  );
  const shift = clampLayerBoundsToHost(state, bounds);
  return {
    x: round(originOffset.x + shift.x),
    y: round(originOffset.y + shift.y),
  };
}

export function getToolboxPanelSize() {
  return { width: 452, height: 492 };
}

export function getToolboxPanelBounds(originOffset, panelSize) {
  return {
    minX: originOffset.x,
    maxX: originOffset.x + panelSize.width,
    minY: originOffset.y,
    maxY: originOffset.y + panelSize.height,
  };
}

export function clampToolboxPanelOriginToHost(state, originOffset, panelSize) {
  const bounds = getToolboxPanelBounds(originOffset, panelSize);
  const shift = clampLayerBoundsToHost(state, bounds);
  return {
    x: round(originOffset.x + shift.x),
    y: round(originOffset.y + shift.y),
  };
}

export function resolveToolboxPanelOrigin(parentLayer, offset, panelSize) {
  const openRight = offset.x >= 0;
  const anchorX =
    parentLayer.mode === "panel"
      ? openRight
        ? parentLayer.bounds.maxX
        : parentLayer.bounds.minX
      : parentLayer.originOffset.x + offset.x;
  const anchorY =
    parentLayer.mode === "panel"
      ? parentLayer.originOffset.y + 18
      : parentLayer.originOffset.y + offset.y - panelSize.height * 0.34;
  return {
    x: round(anchorX + (openRight ? 26 : -(panelSize.width + 26))),
    y: round(anchorY),
  };
}

export function createContextMenuLayer(state, options) {
  if ((options.mode || "") === "panel") {
    const panelSize = options.panelSize || getToolboxPanelSize();
    const layer = createElement(
      state.document,
      "div",
      `cw-context-menu__layer cw-context-menu__layer--panel ${options.depth > 0 ? "is-submenu" : "is-root"}`,
    );
    layer.style.zIndex = `${options.depth + 1}`;

    const panel = createElement(state.document, "div", "cw-context-toolbox");
    panel.style.left = `${options.originOffset.x}px`;
    panel.style.top = `${options.originOffset.y}px`;
    panel.style.setProperty("--cw-toolbox-width", `${panelSize.width}px`);
    panel.style.setProperty("--cw-toolbox-height", `${panelSize.height}px`);
    panel.addEventListener("pointerdown", (event) => event.stopPropagation());
    layer.appendChild(panel);

    return {
      depth: options.depth,
      element: layer,
      panel,
      mode: "panel",
      layout: normalizeContextMenuLayout(options.layout),
      originOffset: options.originOffset,
      bounds: getToolboxPanelBounds(options.originOffset, panelSize),
      radius: 0,
      ownerActionId: options.ownerActionId || "",
      ownerDepth: typeof options.ownerDepth === "number" ? options.ownerDepth : -1,
      actionEntries: new Map(),
    };
  }

  const layer = createElement(
    state.document,
    "div",
    `cw-context-menu__layer ${options.depth > 0 ? "is-submenu" : "is-root"}`,
  );
  layer.style.zIndex = `${options.depth + 1}`;
  const layout = normalizeContextMenuLayout(options.layout);
  const layoutClass = isHiveLayout(layout) ? "is-hive" : "is-radial";

  const backdrop = createElement(
    state.document,
    "div",
    `cw-context-menu__backdrop ${options.depth > 0 ? "is-submenu" : "is-root"} ${layoutClass}`,
  );
  backdrop.style.setProperty("--cw-orbit-x", `${options.originOffset.x}px`);
  backdrop.style.setProperty("--cw-orbit-y", `${options.originOffset.y}px`);
  layer.appendChild(backdrop);

  const orbit = createElement(
    state.document,
    "div",
    `cw-context-menu__orbit ${options.depth > 0 ? "is-submenu" : "is-root"} ${layoutClass}`,
  );
  orbit.style.setProperty("--cw-orbit-x", `${options.originOffset.x}px`);
  orbit.style.setProperty("--cw-orbit-y", `${options.originOffset.y}px`);
  orbit.addEventListener("pointerdown", (event) => event.stopPropagation());

  const core = createElement(
    state.document,
    "div",
    `cw-context-menu__core ${options.depth > 0 ? "is-submenu" : "is-root"}`,
  );
  core.appendChild(createElement(state.document, "span", "cw-context-menu__core-dot"));
  core.appendChild(
    createElement(state.document, "span", "cw-context-menu__core-label", options.label || "Canvas"),
  );
  orbit.appendChild(core);
  layer.appendChild(orbit);

  return {
    depth: options.depth,
    element: layer,
    backdrop,
    orbit,
    mode: "orbit",
    layout,
    originOffset: options.originOffset,
    bounds: null,
    radius: 0,
    ownerActionId: options.ownerActionId || "",
    ownerDepth: typeof options.ownerDepth === "number" ? options.ownerDepth : -1,
    actionEntries: new Map(),
  };
}

export function syncContextMenuLayerShellGeometry(layerState) {
  if (!layerState || layerState.mode === "panel" || !layerState.orbit) {
    return;
  }

  const halfWidth = layerState.bounds
    ? Math.max(
        52,
        round(
          Math.max(
            layerState.originOffset.x - layerState.bounds.minX,
            layerState.bounds.maxX - layerState.originOffset.x,
          ),
        ),
      )
    : round(layerState.radius || 0);
  const halfHeight = layerState.bounds
    ? Math.max(
        52,
        round(
          Math.max(
            layerState.originOffset.y - layerState.bounds.minY,
            layerState.bounds.maxY - layerState.originOffset.y,
          ),
        ),
      )
    : round(layerState.radius || 0);
  const width = halfWidth * 2;
  const height = halfHeight * 2;

  layerState.orbit.style.setProperty("--cw-orbit-size", `${Math.max(width, height)}px`);
  layerState.orbit.style.setProperty("--cw-orbit-width", `${width}px`);
  layerState.orbit.style.setProperty("--cw-orbit-height", `${height}px`);
  if (layerState.backdrop) {
    layerState.backdrop.style.setProperty("--cw-orbit-size", `${Math.max(width, height)}px`);
    layerState.backdrop.style.setProperty("--cw-orbit-width", `${width}px`);
    layerState.backdrop.style.setProperty("--cw-orbit-height", `${height}px`);
  }
}

export function shiftContextMenuLayerOrigin(layerState, deltaX, deltaY) {
  if (!layerState || (Math.abs(deltaX) < 0.5 && Math.abs(deltaY) < 0.5)) {
    return;
  }

  layerState.originOffset = {
    x: round(layerState.originOffset.x + deltaX),
    y: round(layerState.originOffset.y + deltaY),
  };

  if (layerState.mode === "panel") {
    layerState.panel.style.left = `${layerState.originOffset.x}px`;
    layerState.panel.style.top = `${layerState.originOffset.y}px`;
    const panelSize = getToolboxPanelSize();
    layerState.bounds = getToolboxPanelBounds(layerState.originOffset, panelSize);
    return;
  }

  if (layerState.bounds) {
    layerState.bounds = {
      minX: round(layerState.bounds.minX + deltaX),
      maxX: round(layerState.bounds.maxX + deltaX),
      minY: round(layerState.bounds.minY + deltaY),
      maxY: round(layerState.bounds.maxY + deltaY),
    };
  }

  layerState.backdrop.style.setProperty("--cw-orbit-x", `${layerState.originOffset.x}px`);
  layerState.backdrop.style.setProperty("--cw-orbit-y", `${layerState.originOffset.y}px`);
  layerState.orbit.style.setProperty("--cw-orbit-x", `${layerState.originOffset.x}px`);
  layerState.orbit.style.setProperty("--cw-orbit-y", `${layerState.originOffset.y}px`);
}

export function nudgeContextMenuLayerIntoVisibleHost(state, layerState) {
  if (!layerState?.element?.isConnected) {
    return;
  }

  const hostRect = state.host.getBoundingClientRect();
  const safeTop = hostRect.top + resolveContextMenuSafeTop(state);
  const sideMargin = 12;
  const targetRect =
    layerState.mode === "panel"
      ? layerState.panel.getBoundingClientRect()
      : layerState.orbit.getBoundingClientRect();
  let shiftX = 0;
  let shiftY = 0;

  if (targetRect.left < hostRect.left + sideMargin) {
    shiftX += hostRect.left + sideMargin - targetRect.left;
  }

  if (targetRect.right > hostRect.right - sideMargin) {
    shiftX -= targetRect.right - (hostRect.right - sideMargin);
  }

  if (targetRect.top < safeTop) {
    shiftY += safeTop - targetRect.top;
  }

  if (targetRect.bottom > hostRect.bottom - sideMargin) {
    shiftY -= targetRect.bottom - (hostRect.bottom - sideMargin);
  }

  shiftContextMenuLayerOrigin(layerState, shiftX, shiftY);
}

export function resolveQuickCreateSourceNode(state) {
  const selectedId = state.ui.selectedNodeIds[0];
  if (selectedId && state.lookups.byId.has(selectedId)) {
    return state.lookups.byId.get(selectedId);
  }

  return (
    state.surface.nodes.find((node) => (node.family || "").toLowerCase() === "root") ||
    state.surface.nodes.find((node) => !node.parentId) ||
    state.surface.nodes[0] ||
    null
  );
}

export function submitCreateRequest(state, payload, options) {
  const createSignature = JSON.stringify({
    actionId: payload?.actionId || "",
    sourceNodeId: payload?.sourceNodeId || null,
    parentNodeId: payload?.parentNodeId || null,
    placementKind: payload?.placementKind || "child",
    objectSubtype: payload?.objectSubtype || "",
    title: payload?.title || "",
    subtitle: payload?.subtitle || "",
    notes: payload?.notes || "",
    uploadedFileName: payload?.uploadedFile?.fileName || "",
    inputValues: Array.isArray(payload?.inputValues) ? payload.inputValues : [],
  });
  const requestedAt = Date.now();
  if (
    state.lastCreateSignature === createSignature &&
    requestedAt - (state.lastCreateRequestedAt || 0) < 450
  ) {
    return;
  }

  state.lastCreateSignature = createSignature;
  state.lastCreateRequestedAt = requestedAt;
  state.pendingCreate = {
    actionId: payload?.actionId || "",
    sourceNodeId: payload?.sourceNodeId || null,
    placementKind: payload?.placementKind || "child",
    requestedAt,
    focusHost: options?.focusHost !== false,
  };
  state.dotNetRef.invokeMethodAsync("OnCreateAction", JSON.stringify(payload));
}

export function submitNodeEdit(state, payload) {
  state.dotNetRef.invokeMethodAsync("OnNodeEdited", JSON.stringify(payload));
}
