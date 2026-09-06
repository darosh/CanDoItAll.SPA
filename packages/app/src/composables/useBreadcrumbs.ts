import { computed } from "vue";
import { useRoute } from "vue-router";

import {
  breadcrumbEntityTitleCache,
  breadcrumbPatternOverrides,
  pageTitleOverride,
} from "@/composables/usePageTitle";
import { routeTitles } from "@/router";

export interface Breadcrumb {
  title: string;
  to?: string;
  // True for the crumb resolved from a dynamicTitle route (e.g. an entity's
  // name) — AppTabs uses this to build its "<entity> · <leaf>" tab titles.
  entity?: boolean;
}

// A route-shaped input rather than vue-router's own types, so this can be
// called with either a live useRoute() or a plain RouteLocationNormalized
// from a router.afterEach hook (see useAppTabs.ts).
interface RouteLike {
  matched: { path: string }[];
  path: string;
  params: Record<string, string | string[]>;
}

// Ancestor patterns for "/prompts/:promptId" are ["/prompts", "/prompts/:promptId"] —
// each one looked up in routeTitles to build a crumb, since routes here are flat
// rather than nested vue-router children.
function ancestorPatterns(pattern: string): string[] {
  const segments = pattern.split("/").filter(Boolean);
  const patterns = segments.slice(0, -1).map((_, i) => `/${segments.slice(0, i + 1).join("/")}`);
  patterns.push(pattern);
  return patterns;
}

function resolveHref(pattern: string, params: Record<string, string | string[]>): string {
  const href = pattern
    .split("/")
    .map((segment) => {
      if (!segment.startsWith(":")) return segment;
      const value = params[segment.slice(1)];
      return (Array.isArray(value) ? value.join("/") : value) ?? segment;
    })
    .join("/");
  return href || "/";
}

export function computeBreadcrumbs(route: RouteLike): Breadcrumb[] {
  const pattern = route.matched.at(-1)?.path ?? route.path;
  const patterns = ancestorPatterns(pattern);

  const breadcrumbs: Breadcrumb[] = [];

  for (const [index, current] of patterns.entries()) {
    const isLeaf = index === patterns.length - 1;
    const registered = routeTitles.find((r) => r.path === current);
    const entityHref = resolveHref(current, route.params);
    const override =
      (isLeaf ? pageTitleOverride.value : breadcrumbPatternOverrides[current]) ||
      breadcrumbEntityTitleCache[entityHref];

    // An entity route can be an ancestor of a static sub-page such as
    // "/processes/:processId/design". Its fallback title is only a route
    // label, not the entity's name. Do not render that crumb — or any crumb
    // after it — until the page has supplied the loaded entity title.
    if (registered?.dynamicTitle && !override) break;

    const title = override || registered?.title || current;
    const entity = registered?.dynamicTitle === true;
    breadcrumbs.push(
      isLeaf ? { title, entity } : { title, to: resolveHref(current, route.params), entity },
    );
  }

  return breadcrumbs;
}

// A tab's title: the leaf crumb for routes with no id, or "<entity> · <leaf>"
// when the route has an id and the entity crumb isn't itself the leaf (e.g.
// "/projects/:id/design" is "<project name> · Design", while
// "/projects/:id" is just the project name, not doubled).
export function resolveTabTitle(breadcrumbs: Breadcrumb[]): string {
  const leaf = breadcrumbs.at(-1);
  if (!leaf) return "";

  const entityIndex = breadcrumbs.findIndex((crumb) => crumb.entity);
  if (entityIndex === -1 || entityIndex === breadcrumbs.length - 1) return leaf.title;

  return `${breadcrumbs[entityIndex].title} · ${leaf.title}`;
}

export function useBreadcrumbs() {
  const route = useRoute();

  return computed<Breadcrumb[]>(() => computeBreadcrumbs(route));
}
