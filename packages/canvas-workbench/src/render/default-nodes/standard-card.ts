import Konva from "konva";
import type { CanvasWorkbenchChip, CanvasWorkbenchPort, ResolvedNode } from "../../model/types.js";
import type { NodeRenderer, PortAnchorQuery, RenderContext } from "../registry.js";
import { computeCardLayout } from "../sizing.js";
import { resolveTone } from "../theme.js";

// Card size and internal layout (header row, ports list, footer stack) are computed per node by
// render/sizing.ts's computeCardLayout() — see that module for the algorithm. This file only
// turns those numbers into Konva shapes.
const MARKER_RADIUS = 4;
const ANCHOR_RADIUS = 4;
const PADDING_X = 12;
const CHIP_HEIGHT = 18;
const CHIP_GAP = 6;
const ANNOTATION_ROW_HEIGHT = 16;
const PORT_ANCHOR_INSET = 10;

/**
 * Connector-anchor dots at each port's edge position, per `chrome.connectorAnchors` (slice 8 —
 * lowest priority in the plan doc, with no evidence of a real consumer need today). Scoped down
 * from the old engine's design: only the selection-driven half is implemented
 * (`showOnSelection`) since that's already flowing through RenderContext.selected on every
 * render pass; `showOnHover` would need new live per-node hover-state plumbing with no current
 * reader to justify it, so it's typed (see model/types.ts) but not wired here. Kept as a distinct
 * overlay from the always-visible port pills below (paintPorts) — this one exists for a
 * drag-to-connect hot-zone highlight, not general port display.
 */
function paintConnectorAnchors(
  group: Konva.Group,
  ctx: RenderContext,
  size: { width: number },
): void {
  const anchorGroup = group.findOne<Konva.Group>(".card-connector-anchors");
  if (!anchorGroup) return;

  const options = ctx.connectorAnchors;
  const visible = options.isEnabled !== false && options.showOnSelection !== false && ctx.selected;
  anchorGroup.visible(visible);
  if (!visible) return;

  anchorGroup.destroyChildren();

  const layout = computeCardLayout(ctx.node);
  function addAnchors(ports: CanvasWorkbenchPort[], edgeX: number): void {
    ports.forEach((port, index) => {
      const tokens = resolveTone(port.tone);
      const y = layout.portsAreaTop + index * layout.portRowHeight + layout.portRowHeight / 2;
      anchorGroup?.add(
        new Konva.Circle({
          x: edgeX,
          y,
          radius: ANCHOR_RADIUS,
          fill: tokens.fill,
          stroke: tokens.stroke,
          strokeWidth: 1,
        }),
      );
    });
  }

  addAnchors(ctx.node.inputPorts, PADDING_X + PORT_ANCHOR_INSET);
  addAnchors(ctx.node.outputPorts, size.width - PADDING_X - PORT_ANCHOR_INSET);
}

/** Rebuilds a horizontal row of tone-colored pills (rounded rect + text) into `group`, matching
 * the legacy DOM engine's chip-pill visual language. Returns the row's height, or 0 if empty. */
function paintChipRow(group: Konva.Group, chips: CanvasWorkbenchChip[], width: number): number {
  group.destroyChildren();
  if (chips.length === 0) return 0;

  let x = 0;
  for (const chip of chips) {
    const tokens = resolveTone(chip.tone);
    const label = new Konva.Text({
      text: chip.text,
      fontSize: 10,
      fontStyle: "bold",
      fill: tokens.text,
      wrap: "none",
      padding: 0,
    });
    const pillWidth = label.width() + 16;
    if (x > 0 && x + pillWidth > width) break;

    const pill = new Konva.Group({ x, y: 0 });
    pill.add(
      new Konva.Rect({
        width: pillWidth,
        height: CHIP_HEIGHT,
        cornerRadius: CHIP_HEIGHT / 2,
        fill: tokens.fill,
        stroke: tokens.stroke,
        strokeWidth: 1,
      }),
    );
    label.position({ x: 8, y: (CHIP_HEIGHT - label.height()) / 2 });
    pill.add(label);
    group.add(pill);

    x += pillWidth + CHIP_GAP;
  }
  return CHIP_HEIGHT;
}

/** Rebuilds a wrapping row of small tone-colored annotation badges (dot + label), capped like
 * `card-markers` to avoid an unbounded card. */
function paintAnnotations(group: Konva.Group, node: ResolvedNode, width: number): number {
  group.destroyChildren();
  const annotations = node.annotations.slice(0, 4);
  if (annotations.length === 0) return 0;

  let x = 0;
  let y = 0;
  for (const annotation of annotations) {
    const tokens = resolveTone(annotation.tone);
    const label = new Konva.Text({
      text: annotation.label,
      fontSize: 10,
      fill: tokens.text,
    });
    const entryWidth = 10 + label.width();
    if (x + entryWidth > width && x > 0) {
      x = 0;
      y += ANNOTATION_ROW_HEIGHT;
    }

    const entry = new Konva.Group({ x, y });
    entry.add(new Konva.Circle({ x: 3, y: 5, radius: 3, fill: tokens.stroke }));
    label.position({ x: 10, y: 0 });
    entry.add(label);
    group.add(entry);

    x += entryWidth + 8;
  }
  return y + ANNOTATION_ROW_HEIGHT;
}

/** One column (INPUTS or OUTPUTS) of port pills — a rounded box per port with an anchor dot and
 * the port's label/type text, matching the original app's `drawCanvasPortPill`. */
function paintPortColumn(
  group: Konva.Group,
  ports: CanvasWorkbenchPort[],
  side: "input" | "output",
  columnWidth: number,
  rowHeight: number,
): void {
  group.destroyChildren();
  ports.forEach((port, index) => {
    const tokens = resolveTone(port.tone);
    const pill = new Konva.Group({ x: 0, y: index * rowHeight });
    pill.add(
      new Konva.Rect({
        width: columnWidth,
        height: rowHeight - 4,
        cornerRadius: (rowHeight - 4) / 2,
        fill: tokens.fill,
        stroke: tokens.stroke,
        strokeWidth: 1,
      }),
    );
    const anchorX = side === "input" ? PORT_ANCHOR_INSET : columnWidth - PORT_ANCHOR_INSET;
    pill.add(
      new Konva.Circle({
        x: anchorX,
        y: (rowHeight - 4) / 2,
        radius: 3,
        fill: tokens.stroke,
      }),
    );
    const label = new Konva.Text({
      text: port.label || port.id,
      fontSize: 9,
      fontStyle: "bold",
      fill: tokens.text,
      width: columnWidth - PORT_ANCHOR_INSET * 2 - 8,
      align: side === "input" ? "left" : "right",
      wrap: "none",
      ellipsis: true,
    });
    label.position({
      x: side === "input" ? PORT_ANCHOR_INSET + 8 : PORT_ANCHOR_INSET,
      y: (rowHeight - 4 - label.height()) / 2,
    });
    pill.add(label);
    group.add(pill);
  });
}

function paint(group: Konva.Group, ctx: RenderContext): void {
  const node = ctx.node;
  const layout = computeCardLayout(node);
  const contentWidth = layout.width - PADDING_X * 2;
  const tokens = resolveTone(node.accentColor || node.status || "neutral");

  const rect = group.findOne<Konva.Rect>(".card-rect");
  rect?.width(layout.width);
  rect?.height(layout.height);
  rect?.fill(tokens.fill);
  rect?.stroke(ctx.selected ? tokens.text : tokens.stroke);
  rect?.strokeWidth(ctx.selected ? 2.5 : 1.5);

  // Header row: a circular single-letter badge (from icon/kind) plus the node's kind label —
  // its own row above the title, so it never collides with a wrapped title (see standard-card.ts
  // history: this used to be an inline glyph squeezed beside the title and overlapped it).
  const badgeGroup = group.findOne<Konva.Group>(".card-badge");
  badgeGroup?.visible(layout.hasHeaderRow);
  if (layout.hasHeaderRow && badgeGroup) {
    badgeGroup.destroyChildren();
    const letter = (node.icon || node.kind || node.id).charAt(0).toUpperCase();
    badgeGroup.add(
      new Konva.Circle({
        x: 10,
        y: 10,
        radius: 10,
        fill: tokens.fill,
        stroke: tokens.stroke,
        strokeWidth: 1,
      }),
    );
    badgeGroup.add(
      new Konva.Text({
        text: letter,
        fontSize: 10,
        fontStyle: "bold",
        fill: tokens.text,
        width: 20,
        align: "center",
        x: 0,
        y: 5,
      }),
    );
    badgeGroup.position({ x: PADDING_X, y: 12 });
  }

  const kindLabel = group.findOne<Konva.Text>(".card-kind");
  kindLabel?.visible(layout.hasHeaderRow && node.kind.length > 0);
  if (layout.hasHeaderRow && node.kind.length > 0 && kindLabel) {
    kindLabel.text(node.kind);
    kindLabel.position({ x: PADDING_X + 26, y: 12 + 5 });
    kindLabel.width(contentWidth - 26);
  }

  const title = group.findOne<Konva.Text>(".card-title");
  title?.text(node.title || node.id);
  title?.fill(tokens.text);
  title?.x(PADDING_X);
  title?.y(layout.titleTop);
  title?.width(contentWidth);

  // Meta row: priority badge + status pill, below the title.
  const hasPriority = node.priority > 0;
  let metaX = PADDING_X;

  const priorityBadge = group.findOne<Konva.Group>(".card-priority");
  priorityBadge?.visible(hasPriority);
  if (hasPriority && priorityBadge) {
    priorityBadge.destroyChildren();
    const priorityTokens = resolveTone("warning");
    priorityBadge.add(
      new Konva.Circle({
        x: 8,
        y: 8,
        radius: 8,
        fill: priorityTokens.fill,
        stroke: priorityTokens.stroke,
        strokeWidth: 1,
      }),
    );
    priorityBadge.add(
      new Konva.Text({
        text: String(node.priority),
        fontSize: 9,
        fontStyle: "bold",
        fill: priorityTokens.text,
        width: 16,
        align: "center",
        x: 0,
        y: 4,
      }),
    );
    priorityBadge.position({ x: metaX, y: layout.subtitleTop - 22 });
    metaX += 22;
  }

  const hasStatusPill = node.statusPill.length > 0;
  const statusPill = group.findOne<Konva.Group>(".card-status-pill");
  statusPill?.visible(hasStatusPill);
  if (hasStatusPill && statusPill) {
    statusPill.destroyChildren();
    const pillTokens = resolveTone(node.status || "neutral");
    const label = new Konva.Text({
      text: node.statusPill,
      fontSize: 9,
      fontStyle: "bold",
      fill: pillTokens.text,
    });
    const pillWidth = label.width() + 14;
    statusPill.add(
      new Konva.Rect({
        width: pillWidth,
        height: 15,
        cornerRadius: 7.5,
        fill: pillTokens.fill,
        stroke: pillTokens.stroke,
        strokeWidth: 1,
      }),
    );
    label.position({ x: 7, y: 3 });
    statusPill.add(label);
    statusPill.position({ x: metaX, y: layout.subtitleTop - 22 });
  }

  const subtitle = group.findOne<Konva.Text>(".card-subtitle");
  subtitle?.visible(layout.hasSubtitle);
  let cursorY = layout.subtitleTop;
  if (layout.hasSubtitle && subtitle) {
    subtitle.text(node.subtitle);
    subtitle.x(PADDING_X);
    subtitle.width(contentWidth);
    subtitle.y(cursorY);
    cursorY += subtitle.height() + 6;
  }

  const compactPathText = group.findOne<Konva.Text>(".card-compact-path");
  const compactPathLabel = node.compactPath?.promotedText || node.compactPath?.displayText || "";
  compactPathText?.visible(compactPathLabel.length > 0);
  if (compactPathLabel && compactPathText) {
    compactPathText.text(compactPathLabel);
    compactPathText.x(PADDING_X);
    compactPathText.width(contentWidth);
    compactPathText.y(cursorY);
    cursorY += compactPathText.height() + 4;
  }

  const chipsGroup = group.findOne<Konva.Group>(".card-chips");
  if (chipsGroup) {
    chipsGroup.position({ x: PADDING_X, y: cursorY });
    const chipsHeight = paintChipRow(chipsGroup, node.chips, contentWidth);
    if (chipsHeight > 0) cursorY += chipsHeight + CHIP_GAP;
  }

  const annotationsGroup = group.findOne<Konva.Group>(".card-annotations");
  if (annotationsGroup) {
    annotationsGroup.position({ x: PADDING_X, y: cursorY });
    paintAnnotations(annotationsGroup, node, contentWidth);
  }

  // Ports: INPUTS/OUTPUTS column headers + one labeled pill per port, matching the original
  // app's advanced-node layout. Always visible (not selection-gated, unlike the connector-anchor
  // dots above) since this is the port list itself, not a drag-to-connect highlight.
  const portsHeader = group.findOne<Konva.Group>(".card-ports-header");
  portsHeader?.visible(layout.hasPorts);
  if (layout.hasPorts && portsHeader) {
    portsHeader.destroyChildren();
    const labelTokens = resolveTone("neutral");
    if (node.inputPorts.length > 0) {
      portsHeader.add(
        new Konva.Text({
          text: "INPUTS",
          x: 0,
          y: 0,
          fontSize: 8,
          fontStyle: "bold",
          fill: labelTokens.text,
        }),
      );
    }
    if (node.outputPorts.length > 0) {
      const hasBoth = node.inputPorts.length > 0;
      const columnWidth = hasBoth ? (contentWidth - 12) / 2 : contentWidth;
      const outputText = new Konva.Text({
        text: "OUTPUTS",
        fontSize: 8,
        fontStyle: "bold",
        fill: labelTokens.text,
        width: columnWidth,
        align: "right",
      });
      outputText.position({ x: hasBoth ? columnWidth + 12 : 0, y: 0 });
      portsHeader.add(outputText);
    }
    portsHeader.position({ x: PADDING_X, y: layout.portsHeaderTop });
  }

  const inputPortsGroup = group.findOne<Konva.Group>(".card-input-ports");
  const outputPortsGroup = group.findOne<Konva.Group>(".card-output-ports");
  if (layout.hasPorts && inputPortsGroup && outputPortsGroup) {
    const hasBoth = node.inputPorts.length > 0 && node.outputPorts.length > 0;
    const columnWidth = hasBoth ? (contentWidth - 12) / 2 : contentWidth;
    inputPortsGroup.position({ x: PADDING_X, y: layout.portsAreaTop });
    paintPortColumn(inputPortsGroup, node.inputPorts, "input", columnWidth, layout.portRowHeight);
    outputPortsGroup.position({
      x: PADDING_X + (hasBoth ? columnWidth + 12 : 0),
      y: layout.portsAreaTop,
    });
    paintPortColumn(
      outputPortsGroup,
      node.outputPorts,
      "output",
      columnWidth,
      layout.portRowHeight,
    );
  } else {
    inputPortsGroup?.destroyChildren();
    outputPortsGroup?.destroyChildren();
  }

  // Footer stack (bottom-anchored, computed by computeCardLayout to stay non-overlapping):
  // progress bar, then the required/optional pill + footerChips row, then markers.
  const progress = group.findOne<Konva.Group>(".card-progress");
  progress?.visible(layout.hasFooterProgress);
  if (layout.hasFooterProgress && progress) {
    progress.destroyChildren();
    const barWidth = contentWidth;
    const percent = node.progressMode === "complete" ? 100 : node.progressPercent;
    progress.add(
      new Konva.Rect({
        width: barWidth,
        height: 4,
        cornerRadius: 2,
        fill: resolveTone("neutral").stroke,
      }),
    );
    progress.add(
      new Konva.Rect({
        width: (barWidth * percent) / 100,
        height: 4,
        cornerRadius: 2,
        fill: resolveTone(percent >= 100 ? "success" : "accent").stroke,
      }),
    );
    progress.position({ x: PADDING_X, y: layout.footerProgressTop });
  }

  const requiredPill = group.findOne<Konva.Group>(".card-required");
  requiredPill?.visible(layout.hasFooterRow);
  let footerChipsX = 0;
  if (layout.hasFooterRow && requiredPill) {
    requiredPill.destroyChildren();
    const requiredTokens = resolveTone(node.isRequired ? "warning" : "neutral");
    const label = new Konva.Text({
      text: node.isRequired ? "required" : "optional",
      fontSize: 9,
      fontStyle: "bold",
      fill: requiredTokens.text,
    });
    const pillWidth = label.width() + 14;
    requiredPill.add(
      new Konva.Rect({
        width: pillWidth,
        height: 18,
        cornerRadius: 9,
        fill: requiredTokens.fill,
        stroke: requiredTokens.stroke,
        strokeWidth: 1,
      }),
    );
    label.position({ x: 7, y: 4 });
    requiredPill.add(label);
    requiredPill.position({ x: PADDING_X, y: layout.footerRowTop });
    footerChipsX = pillWidth + 6;
  }

  const footerChipsGroup = group.findOne<Konva.Group>(".card-footer-chips");
  if (footerChipsGroup) {
    footerChipsGroup.position({ x: PADDING_X + footerChipsX, y: layout.footerRowTop });
    paintChipRow(footerChipsGroup, node.footerChips, contentWidth - footerChipsX);
  }

  const markerGroup = group.findOne<Konva.Group>(".card-markers");
  markerGroup?.position({ x: PADDING_X, y: layout.footerMarkersTop });
  markerGroup?.destroyChildren();
  node.markers.slice(0, 6).forEach((marker, index) => {
    const markerTokens = resolveTone(marker.tone);
    markerGroup?.add(
      new Konva.Circle({
        x: index * (MARKER_RADIUS * 2 + 4) + MARKER_RADIUS,
        y: MARKER_RADIUS,
        radius: MARKER_RADIUS,
        fill: markerTokens.stroke,
      }),
    );
  });

  paintConnectorAnchors(group, ctx, layout);
}

export const standardCardRenderer: NodeRenderer = {
  mount(ctx: RenderContext): Konva.Group {
    const layout = computeCardLayout(ctx.node);
    const group = new Konva.Group({
      x: ctx.position.x,
      y: ctx.position.y,
      name: "node-group",
      id: ctx.node.id,
    });

    group.add(
      new Konva.Rect({
        name: "card-rect",
        width: layout.width,
        height: layout.height,
        cornerRadius: 8,
      }),
    );
    group.add(new Konva.Group({ name: "card-badge", visible: false }));
    group.add(new Konva.Text({ name: "card-kind", fontSize: 10, fill: "#71717a", wrap: "none" }));
    group.add(
      new Konva.Text({
        name: "card-title",
        fontSize: 14,
        fontStyle: "bold",
        wrap: "word",
      }),
    );
    group.add(new Konva.Group({ name: "card-status-pill", visible: false }));
    group.add(new Konva.Group({ name: "card-priority", visible: false }));
    group.add(
      new Konva.Text({ name: "card-subtitle", fontSize: 12, fill: "#71717a", wrap: "word" }),
    );
    group.add(
      new Konva.Text({
        name: "card-compact-path",
        fontSize: 10,
        fontStyle: "italic",
        fill: "#a1a1aa",
        wrap: "word",
      }),
    );
    group.add(new Konva.Group({ name: "card-chips" }));
    group.add(new Konva.Group({ name: "card-annotations" }));
    group.add(new Konva.Group({ name: "card-ports-header", visible: false }));
    group.add(new Konva.Group({ name: "card-input-ports" }));
    group.add(new Konva.Group({ name: "card-output-ports" }));
    group.add(new Konva.Group({ name: "card-progress", visible: false }));
    group.add(new Konva.Group({ name: "card-required", visible: false }));
    group.add(new Konva.Group({ name: "card-footer-chips" }));
    group.add(new Konva.Group({ name: "card-markers" }));
    group.add(
      new Konva.Group({ name: "card-connector-anchors", listening: false, visible: false }),
    );

    paint(group, ctx);
    return group;
  },

  update(group: Konva.Group, ctx: RenderContext): void {
    group.position(ctx.position);
    paint(group, ctx);
  },

  getPortAnchor(node: ResolvedNode, query: PortAnchorQuery) {
    const layout = computeCardLayout(node);
    const ports = query.direction === "input" ? node.inputPorts : node.outputPorts;
    const index = query.portId ? ports.findIndex((port) => port.id === query.portId) : -1;
    if (!layout.hasPorts || ports.length === 0 || index === -1) {
      return { x: query.direction === "input" ? 0 : layout.width, y: layout.height / 2 };
    }
    const y = layout.portsAreaTop + index * layout.portRowHeight + layout.portRowHeight / 2;
    const x =
      query.direction === "input"
        ? PADDING_X + PORT_ANCHOR_INSET
        : layout.width - PADDING_X - PORT_ANCHOR_INSET;
    return { x, y };
  },
};
