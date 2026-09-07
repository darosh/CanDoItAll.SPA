// Pure set operations over selection arrays. No range/marquee selection yet — that needs an
// ordering context (last-clicked index, or a rubber-band hit list) that only the marquee-selection
// extension slice will have; see interaction/extensions.ts for where that plugs in later.

export function selectSingle(nodeId: string): string[] {
  return [nodeId];
}

export function toggleSelection(current: string[], nodeId: string): string[] {
  return current.includes(nodeId) ? current.filter((id) => id !== nodeId) : [...current, nodeId];
}

export function clearSelection(): string[] {
  return [];
}
