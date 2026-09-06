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

export function useBreadcrumbs() {
  const route = useRoute();

  return computed<Breadcrumb[]>(() => {
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
      breadcrumbs.push(isLeaf ? { title } : { title, to: resolveHref(current, route.params) });
    }

    // if (import.meta.env.DEV) {
    //   console.debug("[breadcrumbs] render", {
    //     timestamp: new Date().toISOString(),
    //     route: route.fullPath,
    //     pattern,
    //     candidates: patterns.map((current, index) => ({
    //       pattern: current,
    //       dynamicTitle: routeTitles.find((entry) => entry.path === current)?.dynamicTitle ?? false,
    //       override:
    //         index === patterns.length - 1
    //           ? pageTitleOverride.value
    //           : breadcrumbPatternOverrides[current],
    //       cachedTitle: breadcrumbEntityTitleCache[resolveHref(current, route.params)],
    //     })),
    //     rendered: breadcrumbs,
    //   });
    // }

    return breadcrumbs;
  });
}
