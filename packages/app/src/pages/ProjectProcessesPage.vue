<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Processes/Pages/ProjectProcessesPage.razor
 * original URL     : http://localhost:5032/projects/:projectId/processes
 * URL              : http://localhost:5173/projects/:projectId/processes
 */

import { useRoute } from "vue-router";
import StubPage from "@/components/StubPage.vue";
import { projectDetailTabs } from "@/lib/subNavTabs";

const route = useRoute();
</script>

<template>
  <StubPage
    title="Project processes"
    :tabs="projectDetailTabs(String(route.params.projectId))"
    selected="processes"
  />
</template>
