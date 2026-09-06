<script setup lang="ts">
import StubPage from "@/components/StubPage.vue";
import { schedulerLibraryTabs } from "@/lib/subNavTabs";
</script>

<template>
  <StubPage title="Scheduler" :tabs="schedulerLibraryTabs()" selected="catalog" />
</template>
