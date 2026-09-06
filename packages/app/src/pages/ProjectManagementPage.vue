<script setup lang="ts">
/**
 * URL              : http://localhost:5173/projects/:projectId/management
 */

import { useRoute } from "vue-router";
import StubPage from "@/components/StubPage.vue";
import { projectDetailTabs } from "@/lib/subNavTabs";

const route = useRoute();
</script>

<template>
  <StubPage
    title="Project management"
    :tabs="projectDetailTabs(String(route.params.projectId))"
    selected="management"
  />
</template>
