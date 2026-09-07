<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Workbench/Pages/ProjectCalendarPage.razor
 * original URL     : http://localhost:5032/projects/:projectId/calendar
 * URL              : http://localhost:5173/projects/:projectId/calendar
 */

import { useRoute } from "vue-router";
import DevNotes from "@/components/shared/DevNotes.vue";
import StubPage from "@/components/shared/StubPage.vue";
import { projectDetailTabs } from "@/lib/subNavTabs";

const devNotes = `original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Workbench/Pages/ProjectCalendarPage.razor
original URL     : http://localhost:5032/projects/:projectId/calendar
URL              : http://localhost:5173/projects/:projectId/calendar`;

const route = useRoute();
</script>

<template>
  <StubPage
    title="Project calendar"
    :tabs="projectDetailTabs(String(route.params.projectId))"
    selected="calendar"
  />
  <DevNotes :text="devNotes" />
</template>
