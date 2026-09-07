/**
 * Shared by pan-zoom.ts and extensions/marquee.ts, which both bind `pointerdown` on the same
 * background Rect and need to agree on which one handles a given gesture: pan-zoom pans unless
 * the marquee modifier is held, marquee only activates when it is — see each module's own check.
 */
export function isModifierKeyPressed(
  event: PointerEvent | MouseEvent,
  modifierKey: string,
): boolean {
  switch (modifierKey.toLowerCase()) {
    case "alt":
      return event.altKey;
    case "shift":
      return event.shiftKey;
    case "control":
    case "ctrl":
      return event.ctrlKey;
    case "meta":
    case "cmd":
    case "command":
      return event.metaKey;
    default:
      return false;
  }
}
