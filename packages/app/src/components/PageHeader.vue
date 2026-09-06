<script setup lang="ts">
import { watch } from "vue";

import { setPageTitle } from "@/composables/usePageTitle";

const props = defineProps<{ title: string; description?: string }>();

// Only push a real title into the breadcrumb override — a placeholder
// fallback (e.g. "Process overview" shown while an entity name loads) would
// otherwise flash there before the real name replaces it a moment later.
watch(
  () => props.title,
  (title) => {
    if (title) setPageTitle(title);
  },
  { immediate: true },
);
</script>

<template>
  <header class="flex flex-wrap items-start justify-between gap-3">
    <div class="space-y-1">
      <h1 class="text-lg font-semibold tracking-tight text-foreground">{{ title }}</h1>
      <p v-if="description" class="text-sm text-muted-foreground">{{ description }}</p>
    </div>
    <div class="flex items-center gap-2">
      <slot name="actions" />
    </div>
  </header>
</template>
