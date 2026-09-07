<script setup lang="ts">
import { useRoute } from "vue-router";

import PageHeader from "@/components/shared/PageHeader.vue";
import PageShell from "@/components/shared/PageShell.vue";
import SubNavTabs, { type SubNavTab } from "@/components/shared/SubNavTabs.vue";

defineProps<{ title: string; tabs?: SubNavTab[]; selected?: string }>();
const route = useRoute();
const params = Object.entries(route.params).filter(([, v]) => v !== undefined && v !== "");
</script>

<template>
  <PageShell>
    <template #tabs><SubNavTabs v-if="tabs" :tabs="tabs" :selected="selected!" /></template>
    <PageHeader :title="title" todo />
    <p v-if="params.length" class="text-sm text-muted-foreground">
      <span v-for="([key, value], i) in params" :key="key">
        <span v-if="i > 0">&middot; </span>{{ key }}:
        <code class="text-foreground">{{ value }}</code>
      </span>
    </p>
  </PageShell>
</template>
