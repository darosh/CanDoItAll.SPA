import Konva from "konva";

export interface WorkbenchLayers {
  frames: Konva.Layer;
  links: Konva.Layer;
  nodes: Konva.Layer;
  /** Reserved for every deferred extension slice (minimap, diagnostics HUD, marquee rect,
   * snap-guide lines) — see interaction/extensions.ts. Never add a 5th Layer per feature; each
   * Layer is a real backing <canvas> element and Konva's own guidance caps practical layer count
   * around 3-5. */
  overlay: Konva.Layer;
}

export interface WorkbenchStage {
  stage: Konva.Stage;
  layers: WorkbenchLayers;
  background: Konva.Rect;
  resize(): void;
  destroy(): void;
}

export function createStageLayers(host: HTMLElement): WorkbenchStage {
  const width = host.clientWidth || 800;
  const height = host.clientHeight || 600;

  // Konva's StageConfig types `container` as `HTMLDivElement` specifically, but functionally
  // accepts any element with the container behaviors it needs (appendChild/ownerDocument) — the
  // public API here intentionally accepts the broader `HTMLElement` a consumer is likely to have.
  const stage = new Konva.Stage({ container: host as HTMLDivElement, width, height });

  const framesLayer = new Konva.Layer({ name: "frames" });
  const linksLayer = new Konva.Layer({ name: "links" });
  const nodesLayer = new Konva.Layer({ name: "nodes" });
  const overlayLayer = new Konva.Layer({ name: "overlay" });

  // A transparent full-viewport rect on the frames layer doubles as the pan-gesture surface
  // (see interaction/pan-zoom.ts) and the empty-canvas click target that clears selection.
  const background = new Konva.Rect({
    name: "background",
    x: 0,
    y: 0,
    width,
    height,
    fill: "transparent",
  });
  framesLayer.add(background);

  stage.add(framesLayer);
  stage.add(linksLayer);
  stage.add(nodesLayer);
  stage.add(overlayLayer);

  function resize(): void {
    const nextWidth = host.clientWidth || stage.width();
    const nextHeight = host.clientHeight || stage.height();
    stage.width(nextWidth);
    stage.height(nextHeight);
    background.width(nextWidth / stage.scaleX());
    background.height(nextHeight / stage.scaleY());
  }

  function destroy(): void {
    stage.destroy();
  }

  return {
    stage,
    layers: { frames: framesLayer, links: linksLayer, nodes: nodesLayer, overlay: overlayLayer },
    background,
    resize,
    destroy,
  };
}
