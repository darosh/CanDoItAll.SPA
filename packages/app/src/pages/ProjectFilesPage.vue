<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Projects/Pages/ProjectsPage.razor
 * original URL     : http://localhost:5032/projects
 * original trigger : open the Files dialog for a project
 * URL              : http://localhost:5173/projects/:projectId/files
 */

import { useRoute } from "vue-router";
import DevNotes from "@/components/DevNotes.vue";
import StubPage from "@/components/StubPage.vue";
import { projectDetailTabs } from "@/lib/subNavTabs";

const devNotes = `original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Projects/Pages/ProjectsPage.razor
original URL     : http://localhost:5032/projects
original trigger : open the Files dialog for a project
URL              : http://localhost:5173/projects/:projectId/files`;

const route = useRoute();
</script>

<template>
  <StubPage
    title="Project files"
    :tabs="projectDetailTabs(String(route.params.projectId))"
    selected="files"
  />
  <DevNotes :text="devNotes" />
</template>
