<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Workbench/Pages/ProjectStructurePage.razor
 * original URL     : http://localhost:5032/projects/:projectId/structure
 * original trigger : switch to the Gantt view within Structure
 * URL              : http://localhost:5173/projects/:projectId/gantt
 */

import { useRoute } from "vue-router";
import DevNotes from "@/components/DevNotes.vue";
import StubPage from "@/components/StubPage.vue";
import { projectDetailTabs } from "@/lib/subNavTabs";

const devNotes = `original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Workbench/Pages/ProjectStructurePage.razor
original URL     : http://localhost:5032/projects/:projectId/structure
original trigger : switch to the Gantt view within Structure
URL              : http://localhost:5173/projects/:projectId/gantt`;

const route = useRoute();
</script>

<template>
  <StubPage
    title="Project gantt"
    :tabs="projectDetailTabs(String(route.params.projectId))"
    selected="gantt"
  />
  <DevNotes :text="devNotes" />
</template>
