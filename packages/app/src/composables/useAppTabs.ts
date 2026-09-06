import type { Component } from "vue";
import type { RouteLocationNormalized } from "vue-router";
import { reactive, ref, watchEffect } from "vue";
import { type Breadcrumb, computeBreadcrumbs, resolveTabTitle } from "@/composables/useBreadcrumbs";
import { findActiveNavIcon } from "@/composables/useNavActive";
import { router } from "@/router";

export interface AppTab {
  path: string;
  title: string;
  breadcrumbs: Breadcrumb[];
  icon?: Component;
  pinned: boolean;
  preview: boolean;
  lastVisited: number;
}

interface PersistedTab {
  path: string;
  title: string;
  breadcrumbs: Breadcrumb[];
  pinned: boolean;
  preview: boolean;
  lastVisited: number;
}

interface PersistedState {
  tabs: PersistedTab[];
  tabsVisible: boolean;
  previewAlways: boolean;
}

const STORAGE_KEY = "appTabs.state";

function loadPersisted(): PersistedState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { tabs: [], tabsVisible: false, previewAlways: true };
    const parsed = JSON.parse(raw) as Partial<PersistedState>;
    return {
      tabs: Array.isArray(parsed.tabs) ? parsed.tabs : [],
      tabsVisible: parsed.tabsVisible === true,
      previewAlways: parsed.previewAlways !== false,
    };
  } catch {
    return { tabs: [], tabsVisible: false, previewAlways: true };
  }
}

const persisted = loadPersisted();

const tabs = reactive<AppTab[]>(
  persisted.tabs.map((tab) => ({
    ...tab,
    breadcrumbs: tab.breadcrumbs ?? [],
    icon: findActiveNavIcon(tab.path),
  })),
);
const tabsVisible = ref(persisted.tabsVisible);
const previewAlways = ref(persisted.previewAlways);
// Set by __handleRouteChange on the initial navigation (router.isReady() in
// main.ts guarantees beforeEach/afterEach run before the app ever mounts).
const activePath = ref("");

let sidebarNavigationPending = false;

watchEffect(() => {
  const state: PersistedState = {
    tabs: tabs.map(({ path, title, breadcrumbs, pinned, preview, lastVisited }) => ({
      path,
      title,
      breadcrumbs,
      pinned,
      preview,
      lastVisited,
    })),
    tabsVisible: tabsVisible.value,
    previewAlways: previewAlways.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
});

// Deferred until first use (see useAppTabs()) so router.currentRoute isn't
// touched during this module's own top-level evaluation — router/index.ts
// imports this module before `router` itself is constructed there.
let activeTabWatcherStarted = false;

function ensureActiveTabWatcher() {
  if (activeTabWatcherStarted) return;
  activeTabWatcherStarted = true;

  // Only the currently active tab's title/breadcrumbs track pageTitleOverride
  // and breadcrumbPatternOverrides, matching how the breadcrumb leaf crumb
  // only updates for the active route (e.g. once an entity name loads).
  watchEffect(() => {
    const activeTab = tabs.find((tab) => tab.path === activePath.value);
    if (!activeTab) return;

    const currentRoute = router.currentRoute.value;
    if (currentRoute.fullPath !== activePath.value) return;

    const breadcrumbs = computeBreadcrumbs(currentRoute);
    activeTab.breadcrumbs = breadcrumbs;
    activeTab.title = resolveTabTitle(breadcrumbs);
  });
}

function touch(tab: AppTab) {
  tab.lastVisited = Date.now();
}

// Called once per completed navigation from router.beforeEach, immediately
// after reading the pending flag, so a later unrelated navigation never sees
// a stale value from a click that didn't end up navigating.
export function consumeSidebarNavigationFlag(): boolean {
  const value = sidebarNavigationPending;
  sidebarNavigationPending = false;
  return value;
}

// Set from a capture-phase click listener on the sidebar root (AppSidebar.vue) —
// cheaper and more robust than instrumenting every individual RouterLink.
export function markSidebarNavigation() {
  sidebarNavigationPending = true;
}

// Internal — called only from router/index.ts's afterEach hook. Not part of
// the public composable surface consumed by components.
export function __handleRouteChange(to: RouteLocationNormalized, isSidebarInitiated: boolean) {
  activePath.value = to.fullPath;

  const existing = tabs.find((tab) => tab.path === to.fullPath);
  if (existing) {
    touch(existing);
    return;
  }

  const breadcrumbs = computeBreadcrumbs(to);
  const title = resolveTabTitle(breadcrumbs);
  const icon = findActiveNavIcon(to.path);
  const now = Date.now();

  const reuseAsPreview = previewAlways.value || isSidebarInitiated;

  if (reuseAsPreview) {
    const preview = tabs.find((tab) => tab.preview);
    if (preview) {
      preview.path = to.fullPath;
      preview.title = title;
      preview.breadcrumbs = breadcrumbs;
      preview.icon = icon;
      preview.lastVisited = now;
      return;
    }
    tabs.push({
      path: to.fullPath,
      title,
      breadcrumbs,
      icon,
      pinned: false,
      preview: true,
      lastVisited: now,
    });
    return;
  }

  tabs.push({
    path: to.fullPath,
    title,
    breadcrumbs,
    icon,
    pinned: false,
    preview: false,
    lastVisited: now,
  });
}

export function useAppTabs() {
  ensureActiveTabWatcher();

  function toggleTabsVisible() {
    tabsVisible.value = !tabsVisible.value;
  }

  function activateTab(path: string) {
    void router.push(path);
  }

  function closeTab(path: string) {
    const index = tabs.findIndex((tab) => tab.path === path);
    if (index === -1) return;
    const wasActive = activePath.value === path;
    tabs.splice(index, 1);
    if (!wasActive) return;

    const neighbor = tabs[index] ?? tabs[index - 1];
    void router.push(neighbor ? neighbor.path : "/");
  }

  function pinTab(path: string) {
    const tab = tabs.find((t) => t.path === path);
    if (!tab) return;
    tab.preview = false;
    tab.pinned = true;
  }

  function unpinTab(path: string) {
    const tab = tabs.find((t) => t.path === path);
    if (tab) tab.pinned = false;
  }

  function promoteTab(path: string) {
    const tab = tabs.find((t) => t.path === path && t.preview);
    if (tab) tab.preview = false;
  }

  return {
    tabs,
    tabsVisible,
    previewAlways,
    activePath,
    toggleTabsVisible,
    activateTab,
    closeTab,
    pinTab,
    unpinTab,
    promoteTab,
  };
}
