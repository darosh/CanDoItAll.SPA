<script setup lang="ts">
import { watch } from "vue";
import { useRoute, useRouter } from "vue-router";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { setBreadcrumbPatternTitle } from "@/composables/usePageTitle";

export interface SubNavTab {
  key: string;
  label: string;
  to: string;
}

// Reusable sub-page navigation, e.g. an entity's Overview/Roles/Design tabs.
// The page supplies the tab list and which one is selected; this component
// only renders shadcn-vue Tabs styled as links (no tab-panel content) and
// navigates via the router. When `entityPattern` is given alongside
// `entityTitle`, it also overrides that ancestor's breadcrumb crumb with the
// loaded entity's display name (see usePageTitle.ts) — e.g. so
// "Processes > Roles" becomes "Processes > <entity name> > Roles".
const props = defineProps<{
  tabs: SubNavTab[];
  selected: string;
  entityTitle?: string;
  entityPattern?: string;
}>();

const router = useRouter();
const route = useRoute();

function resolveEntityHref(pattern: string): string {
  return (
    pattern
      .split("/")
      .map((segment) => {
        if (!segment.startsWith(":")) return segment;
        const value = route.params[segment.slice(1)];
        return (Array.isArray(value) ? value.join("/") : value) ?? segment;
      })
      .join("/") || "/"
  );
}

watch(
  () => props.entityTitle,
  (title) => {
    if (props.entityPattern) {
      setBreadcrumbPatternTitle(props.entityPattern, title, resolveEntityHref(props.entityPattern));
    }
  },
  { immediate: true },
);

function navigate(value: string | number) {
  const tab = props.tabs.find((t) => t.key === value);
  if (tab) router.push(tab.to);
}
</script>

<template>
  <Tabs :model-value="selected" @update:model-value="navigate">
    <TabsList class="w-full rounded-none border-b border-border">
      <TabsTrigger class="flex-none" v-for="tab in tabs" :key="tab.key" :value="tab.key">{{
        tab.label
      }}</TabsTrigger>
      <div class="grow"></div>
    </TabsList>
  </Tabs>
</template>
