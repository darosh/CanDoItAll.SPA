import { reactive, ref } from "vue";

// Lets a page override the static route title in the breadcrumb's leaf crumb
// once it knows the real item name (e.g. a prompt's title after it loads).
// PageHeader.vue sets this from its `title` prop, so any page using PageHeader
// gets breadcrumb support for free; the router resets it on every navigation.
export const pageTitleOverride = ref<string | undefined>(undefined);

export function setPageTitle(title: string | undefined) {
  pageTitleOverride.value = title;
}

// Lets a page override a NON-leaf breadcrumb crumb by its route pattern — e.g.
// a shared sub-nav (see SubNavTabs.vue) resolves "/processes/:processId" to the
// loaded entity's display name so "Processes > Roles" becomes
// "Processes > <entity name> > Roles". Keyed by pattern rather than a single
// value since a leaf page's ancestor chain can need more than one override.
// The router resets this on every navigation, same as pageTitleOverride.
export const breadcrumbPatternOverrides = reactive<Record<string, string>>({});

// Names that have already been loaded in this browser session. Unlike the
// per-navigation overrides above, this is deliberately retained while moving
// between an entity's tabs so its breadcrumb never has to wait on a duplicate
// request just to redisplay a known name.
export const breadcrumbEntityTitleCache = reactive<Record<string, string>>({});

export function setBreadcrumbPatternTitle(
  pattern: string,
  title: string | undefined,
  entityHref?: string,
) {
  if (title) {
    breadcrumbPatternOverrides[pattern] = title;
    if (entityHref) breadcrumbEntityTitleCache[entityHref] = title;
  } else {
    delete breadcrumbPatternOverrides[pattern];
  }
}

export function resetBreadcrumbPatternOverrides() {
  for (const key of Object.keys(breadcrumbPatternOverrides)) {
    delete breadcrumbPatternOverrides[key];
  }
}
