<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Processes/Pages/ProjectProcessesPage.razor
 * original URL     : http://localhost:5032/projects/:projectId/processes
 * URL              : http://localhost:5173/projects/:projectId/processes
 * opens            : /projects/:projectId/processes/runs
 */

import { useRoute } from "vue-router";
import DevNotes from "@/components/shared/DevNotes.vue";
import StubPage from "@/components/shared/StubPage.vue";
import { projectDetailTabs } from "@/lib/subNavTabs";

const devNotes = `original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Processes/Pages/ProjectProcessesPage.razor
original URL     : http://localhost:5032/projects/:projectId/processes
URL              : http://localhost:5173/projects/:projectId/processes
opens            : /projects/:projectId/processes/runs`;

const route = useRoute();
</script>

<template>
  <StubPage
    title="Project processes"
    :tabs="projectDetailTabs(String(route.params.projectId))"
    selected="processes"
  />
  <DevNotes :text="devNotes" />
</template>
