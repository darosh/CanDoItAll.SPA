import type { Component } from "vue";
import { navGroups, settingsLink } from "@/router/nav";

const allNavPaths = [
  ...navGroups.flatMap((group) => group.items.map((item) => item.to)),
  settingsLink.to,
];

// Some nav paths are prefixes of others (e.g. "/agents" vs "/agents/sessions"),
// so the longest matching path wins rather than every prefix lighting up at once.
export function isNavItemActive(currentPath: string, itemPath: string): boolean {
  if (itemPath === "/") return currentPath === "/";
  if (!currentPath.startsWith(itemPath)) return false;
  return !allNavPaths.some(
    (path) => path !== itemPath && path.length > itemPath.length && currentPath.startsWith(path),
  );
}

const allNavItems = [...navGroups.flatMap((group) => group.items), settingsLink];

// Resolves a tab's icon from the sidebar item that would be highlighted as
// active for this path, so dynamic/detail routes (e.g. "/projects/:id")
// inherit their parent section's icon via the same longest-prefix match.
export function findActiveNavIcon(currentPath: string): Component | undefined {
  return allNavItems.find((item) => isNavItemActive(currentPath, item.to))?.icon;
}
