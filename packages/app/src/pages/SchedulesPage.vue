<script setup lang="ts">
import StubPage from "@/components/StubPage.vue";
import { schedulerLibraryTabs } from "@/lib/subNavTabs";
</script>

<template>
  <StubPage title="Schedules" :tabs="schedulerLibraryTabs()" selected="schedules" />
</template>
