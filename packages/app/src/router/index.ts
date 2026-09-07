import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

import { __handleRouteChange, consumeSidebarNavigationFlag } from "@/composables/useAppTabs";
import { pageTitleOverride, resetBreadcrumbPatternOverrides } from "@/composables/usePageTitle";
import { generatedRoutes } from "@/router/routes.generated";

const handBuilt: RouteRecordRaw[] = [
  {
    path: "/prompts",
    name: "prompts",
    component: () => import("@/pages/prompts/PromptsPage.vue"),
    meta: { title: "Prompts" },
  },
  {
    path: "/prompts/:promptId",
    name: "prompt-detail",
    component: () => import("@/pages/prompts/PromptDetailPage.vue"),
    meta: { title: "Prompt detail", dynamicTitle: true },
  },
  {
    path: "/processes",
    name: "processes",
    component: () => import("@/pages/processes/ProcessesPage.vue"),
    meta: { title: "Processes" },
  },
  {
    path: "/processes/:processId",
    name: "process-overview",
    component: () => import("@/pages/processes/ProcessOverviewPage.vue"),
    meta: { title: "Process overview", dynamicTitle: true },
  },
  {
    path: "/processes/:processId/design",
    name: "process-design",
    component: () => import("@/pages/processes/ProcessDesignPage.vue"),
    meta: { title: "Process design" },
  },
  {
    path: "/processes/:processId/roles",
    name: "process-roles",
    component: () => import("@/pages/processes/ProcessRolesPage.vue"),
    meta: { title: "Process roles" },
  },
  {
    path: "/projects",
    name: "projects",
    component: () => import("@/pages/projects/ProjectsPage.vue"),
    meta: { title: "Projects" },
  },
  {
    path: "/projects/new",
    name: "project-new",
    component: () => import("@/pages/projects/ProjectNewPage.vue"),
    meta: { title: "New project" },
  },
  {
    path: "/projects/:projectId",
    name: "project-overview",
    component: () => import("@/pages/projects/ProjectOverviewPage.vue"),
    meta: { title: "Project overview", dynamicTitle: true },
  },
  {
    path: "/workflows",
    name: "workflows",
    component: () => import("@/pages/workflows/WorkflowsPage.vue"),
    meta: { title: "Workflows" },
  },
  {
    path: "/workflows/:workflowId/design",
    name: "workflow-design",
    component: () => import("@/pages/workflows/WorkflowDesignerPage.vue"),
    meta: { title: "Workflow designer", dynamicTitle: true },
  },
  {
    path: "/settings/runtime-capabilities",
    name: "settings-runtime-capabilities",
    component: () => import("@/pages/settings/SettingsRuntimeCapabilitiesPage.vue"),
    meta: { title: "Runtime capabilities" },
  },
  {
    path: "/settings/api-access",
    name: "settings-api-access",
    component: () => import("@/pages/settings/SettingsApiAccessPage.vue"),
    meta: { title: "API access" },
  },
];

const routes: RouteRecordRaw[] = [
  ...generatedRoutes
    .filter((route) => route.component !== null)
    .filter((route) => !handBuilt.some((handBuiltRoute) => handBuiltRoute.path === route.path))
    .map((route) => ({
      path: route.path,
      component: route.component!,
      meta: { title: route.title },
    })),
  ...handBuilt,
];

// Flat {path, title} registry used to resolve breadcrumb ancestors by trimming
// trailing path segments off the current route's pattern (see useBreadcrumbs.ts).
export const routeTitles: { path: string; title: string; dynamicTitle?: boolean }[] = [
  ...handBuilt.map((route) => ({
    path: route.path,
    title: route.meta!.title as string,
    dynamicTitle: route.meta!.dynamicTitle === true,
  })),
  // Hand-built routes are the active implementations for the patterns they
  // share with generated placeholder routes. Keep the registry unique so a
  // breadcrumb resolves the active route's dynamic-title metadata.
  ...generatedRoutes
    .filter((route) => !handBuilt.some((handBuiltRoute) => handBuiltRoute.path === route.path))
    .map((route) => ({ path: route.path, title: route.title })),
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Captured here (not in afterEach) so each navigation attempt consumes the
// flag exactly once, right after it's set — an unrelated later navigation
// never sees a stale value from an earlier click that didn't navigate.
let navIsSidebarInitiated = false;

router.beforeEach(() => {
  navIsSidebarInitiated = consumeSidebarNavigationFlag();
  pageTitleOverride.value = undefined;
  resetBreadcrumbPatternOverrides();
});

router.afterEach((to) => {
  const title = (to.meta.title as string | undefined) ?? "CanDoItAll";
  document.title = `${title} · CanDoItAll`;
  __handleRouteChange(to, navIsSidebarInitiated);
});
