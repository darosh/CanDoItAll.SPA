<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Workbench/Pages/Components/ProjectStructure/ProjectManagerSummaryPanel.razor
 * original URL     : http://localhost:5032/:projectId/structure
 * original trigger : select the Manager Summary tab
 * URL              : http://localhost:5173/projects/:projectId/manager-summary
 */

import { useRoute } from "vue-router";
import DevNotes from "@/components/shared/DevNotes.vue";
import StubPage from "@/components/shared/StubPage.vue";
import { projectDetailTabs } from "@/lib/subNavTabs";

const devNotes = `original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Workbench/Pages/Components/ProjectStructure/ProjectManagerSummaryPanel.razor
original URL     : http://localhost:5032/:projectId/structure
original trigger : select the Manager Summary tab
URL              : http://localhost:5173/projects/:projectId/manager-summary`;

const route = useRoute();
</script>

<template>
  <StubPage
    title="Project manager summary"
    :tabs="projectDetailTabs(String(route.params.projectId))"
    selected="manager-summary"
  />
  <DevNotes :text="devNotes" />
</template>
