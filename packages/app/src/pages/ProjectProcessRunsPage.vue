<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Processes/Pages/LiveProcessesPage.razor
 * original URL     : http://localhost:5032/projects/:projectId/processes/live
 * original trigger : select the Live Processes tab within Processes
 * URL              : http://localhost:5173/projects/:projectId/processes/runs
 * opens            : /processes/runs/:runId
 */

import { useRoute } from "vue-router";
import DevNotes from "@/components/DevNotes.vue";
import StubPage from "@/components/StubPage.vue";
import { projectDetailTabs } from "@/lib/subNavTabs";

const devNotes = `original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Processes/Pages/LiveProcessesPage.razor
original URL     : http://localhost:5032/projects/:projectId/processes/live
original trigger : select the Live Processes tab within Processes
URL              : http://localhost:5173/projects/:projectId/processes/runs
opens            : /processes/runs/:runId`;

const route = useRoute();
</script>

<template>
  <StubPage
    title="Project process runs"
    :tabs="projectDetailTabs(String(route.params.projectId))"
    selected="runs"
  />
  <DevNotes :text="devNotes" />
</template>
