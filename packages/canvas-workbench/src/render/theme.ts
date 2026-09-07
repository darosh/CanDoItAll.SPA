// The overridable "look" layer: tone name -> paint tokens. This is the intended override point
// for consumers who want different visuals without touching render/registry.ts's mount/update
// logic — call setThemeOverrides() before creating a workbench, or per-instance via
// CanvasWorkbenchHandle in a future slice.

export interface ToneTokens {
  fill: string;
  stroke: string;
  text: string;
}

const BASE_TOKENS: Record<string, ToneTokens> = {
  neutral: { fill: "#f4f4f5", stroke: "#d4d4d8", text: "#27272a" },
  accent: { fill: "#eff6ff", stroke: "#93c5fd", text: "#1e3a8a" },
  success: { fill: "#f0fdf4", stroke: "#86efac", text: "#14532d" },
  warning: { fill: "#fffbeb", stroke: "#fcd34d", text: "#78350f" },
  destructive: { fill: "#fef2f2", stroke: "#fca5a5", text: "#7f1d1d" },
};

let overrides: Record<string, ToneTokens> = {};

export function setThemeOverrides(next: Record<string, ToneTokens>): void {
  overrides = next;
}

/** Custom tone strings not in the base palette get a stable color hashed from the tone name. */
export function resolveTone(tone: string | undefined | null): ToneTokens {
  const key = tone && tone.length > 0 ? tone : "neutral";
  if (overrides[key]) return overrides[key];
  if (BASE_TOKENS[key]) return BASE_TOKENS[key];
  return hashTone(key);
}

function hashTone(tone: string): ToneTokens {
  let hash = 0;
  for (let i = 0; i < tone.length; i++) {
    hash = (hash * 31 + tone.charCodeAt(i)) >>> 0;
  }
  const hue = hash % 360;
  return {
    fill: `hsl(${hue}, 70%, 95%)`,
    stroke: `hsl(${hue}, 55%, 70%)`,
    text: `hsl(${hue}, 60%, 25%)`,
  };
}
