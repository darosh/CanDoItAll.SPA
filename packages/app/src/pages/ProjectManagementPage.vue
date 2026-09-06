<script setup lang="ts">
/**
 * URL              : http://localhost:5173/projects/:projectId/management
 */

import { useRoute } from "vue-router";
import DevNotes from "@/components/DevNotes.vue";
import StubPage from "@/components/StubPage.vue";
import { projectDetailTabs } from "@/lib/subNavTabs";

const devNotes = `URL              : http://localhost:5173/projects/:projectId/management`;

const route = useRoute();
</script>

<template>
  <StubPage
    title="Project management"
    :tabs="projectDetailTabs(String(route.params.projectId))"
    selected="management"
  />
  <DevNotes :text="devNotes" />
</template>
