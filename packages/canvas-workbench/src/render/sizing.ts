import Konva from "konva";
import type { CanvasWorkbenchChip, CanvasWorkbenchPort, ResolvedNode } from "../model/types.js";

export interface NodeSize {
  width: number;
  height: number;
}

// Ported from the legacy DOM engine's adaptive sizing
// (packages/app/src/lib/canvas-workbench/runtime/workbench/foundation.js's
// `resolveBaseNodeSize`/`estimateNodeSizeFromText`), then reshaped to match the original .NET
// app's actual card layout (badge+kind header row, an INPUTS/OUTPUTS port-pill list, a
// required/optional footer pill) once side-by-side comparison against the real app showed the
// first pass was missing them entirely — see `computeCardLayout` below, which both
// `measureNodeSize` and `standard-card.ts`'s paint/getPortAnchor consume so the card's reported
// size and its actual drawn content never drift apart. Only the standard card uses this module —
// decision-diamond and inline-text nodes keep their own fixed sizes. Computed on the fly from the
// node alone, on every mount/update/getPortAnchor call, rather than stored on ResolvedNode — this
// keeps the resolved model a pure data record and avoids a stale cached size if theme/font
// metrics ever change.
const DEFAULT_WIDTH = 200;
const DEFAULT_HEIGHT = 96;
const PORTS_BASE_WIDTH = 260;
const CARD_PADDING_X = 24; // matches standard-card.ts's 12px left/right inset
const MIN_WIDTH = 160;
const MAX_WIDTH = 360;
const MAX_HEIGHT = 340;

const TOP_PADDING = 12;
const HEADER_ROW_HEIGHT = 28; // badge circle + kind label, only when node.icon/kind is set
const TITLE_GAP = 4;
const META_ROW_HEIGHT = 22; // priority badge + status pill row, only when either is set
const SUBTITLE_GAP = 6;
const PORTS_GAP_BEFORE = 4;
const PORTS_HEADER_HEIGHT = 14; // "INPUTS"/"OUTPUTS" column labels
const PORT_ROW_HEIGHT = 22;
const FOOTER_BOTTOM_PADDING = 8;
const FOOTER_MARKERS_HEIGHT = 16;
const FOOTER_ROW_HEIGHT = 24; // required/optional pill + footerChips
const FOOTER_PROGRESS_HEIGHT = 12;

export function resolveBaseNodeSize(node: ResolvedNode): NodeSize {
  const portRows = Math.max(node.inputPorts.length, node.outputPorts.length);
  if (portRows > 0) {
    return { width: PORTS_BASE_WIDTH, height: DEFAULT_HEIGHT };
  }
  return { width: DEFAULT_WIDTH, height: DEFAULT_HEIGHT };
}

/** Everything `standard-card.ts` needs to lay out a node's content — computed once so the
 * reported `width`/`height` and the actual drawn rows (header, title, meta, subtitle, ports,
 * footer) never disagree about where anything sits. `portsAreaTop`/`portRowHeight` are also what
 * `getPortAnchor` uses, so a link always terminates exactly on the port pill's anchor dot. */
export interface CardLayout {
  width: number;
  height: number;
  hasHeaderRow: boolean;
  hasMetaRow: boolean;
  hasSubtitle: boolean;
  subtitleTop: number;
  titleTop: number;
  titleHeight: number;
  hasPorts: boolean;
  portsHeaderTop: number;
  portsAreaTop: number;
  portRowHeight: number;
  portRows: number;
  hasFooterRow: boolean;
  hasFooterMarkers: boolean;
  hasFooterProgress: boolean;
  footerProgressTop: number;
  footerRowTop: number;
  footerMarkersTop: number;
}

/** The public entry point (legacy's `getDefaultNodeSize`, reshaped around the real card layout —
 * see the module comment). The exact magic-number constants above are first-pass values; treat
 * them as a starting point for a future visual pass, not a spec. */
export function computeCardLayout(node: ResolvedNode): CardLayout {
  const base = resolveBaseNodeSize(node);
  const hasPorts = node.inputPorts.length > 0 || node.outputPorts.length > 0;
  const contentBudget = Math.max(80, base.width - CARD_PADDING_X);

  const hasHeaderRow = node.icon.length > 0 || node.kind.length > 0;
  const titleTop = TOP_PADDING + (hasHeaderRow ? HEADER_ROW_HEIGHT : 0);

  const titleMeasure = measureText(node.title || node.id, {
    fontSize: 14,
    fontStyle: "bold",
    maxWidth: contentBudget,
    maxLines: 3,
  });

  const hasMetaRow = node.statusPill.length > 0 || node.priority > 0;
  const subtitleTop =
    titleTop + titleMeasure.height + TITLE_GAP + (hasMetaRow ? META_ROW_HEIGHT : 0);

  const hasSubtitle = node.subtitle.length > 0;
  const subtitleMeasure = hasSubtitle
    ? measureText(node.subtitle, { fontSize: 12, maxWidth: contentBudget, maxLines: 2 })
    : null;

  const chipsRowWidth = measureChipRowWidth(node.chips);
  const footerChipsRowWidth = measureChipRowWidth(node.footerChips);

  const portWidthBudget = hasPorts
    ? Math.min(
        420,
        Math.max(
          base.width,
          40 +
            (longestPortLabelLength(node.inputPorts) + longestPortLabelLength(node.outputPorts)) *
              6,
        ),
      )
    : 0;

  const annotationHeight =
    node.annotations.length > 0 ? Math.ceil(node.annotations.length / 2) * 16 : 0;
  const chipsRowHeight = node.chips.length > 0 ? 24 : 0;

  let cursorY = subtitleTop;
  if (hasSubtitle && subtitleMeasure) cursorY += subtitleMeasure.height + SUBTITLE_GAP;
  cursorY += chipsRowHeight;
  cursorY += annotationHeight;

  const portsHeaderTop = cursorY + (hasPorts ? PORTS_GAP_BEFORE : 0);
  const portsAreaTop = portsHeaderTop + PORTS_HEADER_HEIGHT;
  const portRows = Math.max(node.inputPorts.length, node.outputPorts.length);
  const portsHeight = hasPorts
    ? PORTS_GAP_BEFORE + PORTS_HEADER_HEIGHT + portRows * PORT_ROW_HEIGHT
    : 0;
  cursorY += portsHeight;

  const showProgress = node.progressMode === "percent" || node.progressMode === "complete";
  const hasFooterRow = node.isRequired || node.footerChips.length > 0;
  const hasFooterMarkers = node.markers.length > 0;
  const footerReserved =
    FOOTER_BOTTOM_PADDING +
    (hasFooterMarkers ? FOOTER_MARKERS_HEIGHT : 0) +
    (hasFooterRow ? FOOTER_ROW_HEIGHT : 0) +
    (showProgress ? FOOTER_PROGRESS_HEIGHT : 0);

  const bodyHeight = cursorY + footerReserved;

  const width = clamp(
    Math.ceil(
      Math.max(
        base.width,
        portWidthBudget,
        titleMeasure.width + CARD_PADDING_X,
        subtitleMeasure ? subtitleMeasure.width + CARD_PADDING_X : 0,
        chipsRowWidth + CARD_PADDING_X,
        footerChipsRowWidth + CARD_PADDING_X,
      ),
    ),
    MIN_WIDTH,
    MAX_WIDTH,
  );

  const height = clamp(Math.ceil(Math.max(base.height, bodyHeight)), base.height, MAX_HEIGHT);

  // Footer rows are anchored to the bottom of the (now-resolved) card height, stacked bottom-up:
  // markers lowest, then the required/optional + footerChips row, then the progress bar.
  let footerCursor = height - FOOTER_BOTTOM_PADDING;
  const footerMarkersTop = hasFooterMarkers ? footerCursor - FOOTER_MARKERS_HEIGHT : footerCursor;
  if (hasFooterMarkers) footerCursor = footerMarkersTop - 4;
  const footerRowTop = hasFooterRow ? footerCursor - FOOTER_ROW_HEIGHT + 6 : footerCursor;
  if (hasFooterRow) footerCursor = footerRowTop - 6;
  const footerProgressTop = showProgress ? footerCursor - FOOTER_PROGRESS_HEIGHT : footerCursor;

  return {
    width,
    height,
    hasHeaderRow,
    hasMetaRow,
    hasSubtitle,
    subtitleTop,
    titleTop,
    titleHeight: titleMeasure.height,
    hasPorts,
    portsHeaderTop,
    portsAreaTop,
    portRowHeight: PORT_ROW_HEIGHT,
    portRows,
    hasFooterRow,
    hasFooterMarkers,
    hasFooterProgress: showProgress,
    footerProgressTop,
    footerRowTop,
    footerMarkersTop,
  };
}

export function measureNodeSize(node: ResolvedNode): NodeSize {
  const layout = computeCardLayout(node);
  return { width: layout.width, height: layout.height };
}

/** Sums the pill widths a chip row would render at (matching standard-card.ts's paintChipRow
 * font/padding/gap constants), so the card grows wide enough to show the full row rather than
 * truncating it — capped at MAX_WIDTH regardless, same as every other width term. */
function measureChipRowWidth(chips: CanvasWorkbenchChip[]): number {
  if (chips.length === 0) return 0;
  let total = 0;
  for (const chip of chips) {
    const measured = measureText(chip.text, {
      fontSize: 10,
      fontStyle: "bold",
      maxWidth: 300,
      maxLines: 1,
    });
    total += measured.width + 16 + 6;
  }
  return total - 6;
}

function longestPortLabelLength(ports: CanvasWorkbenchPort[]): number {
  return ports.reduce((longest, port) => Math.max(longest, (port.label || port.id).length), 0);
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

interface MeasureTextOptions {
  fontSize: number;
  fontStyle?: string;
  maxWidth: number;
  maxLines: number;
}

/** Measures text using a detached, unattached `Konva.Text` node — no `document`/canvas
 * dependency of its own (Konva's node-canvas backend, wired in the browser sandbox and this
 * package's test env alike, already gives consistent font-metric measurement), so this works
 * identically inside `paint(group, ctx)` and `getPortAnchor(node)`, neither of which has a live
 * stage/layer to attach to. */
function measureText(text: string, options: MeasureTextOptions): { width: number; height: number } {
  if (!text) return { width: 0, height: 0 };

  const fontStyle = options.fontStyle ?? "normal";
  const natural = new Konva.Text({ text, fontSize: options.fontSize, fontStyle });
  const naturalWidth = natural.width();
  natural.destroy();

  const wrapped = new Konva.Text({
    text,
    fontSize: options.fontSize,
    fontStyle,
    width: options.maxWidth,
    wrap: "word",
    lineHeight: 1.3,
  });
  const wrappedHeight = wrapped.height();
  wrapped.destroy();

  const lineHeightPx = options.fontSize * 1.3;
  const maxHeight = lineHeightPx * options.maxLines;

  return {
    width: Math.min(naturalWidth, options.maxWidth),
    height: Math.min(wrappedHeight, maxHeight),
  };
}
