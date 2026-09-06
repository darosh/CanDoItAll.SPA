<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Processes/Pages/ProcessesPage.razor
 * original URL     : http://localhost:5032/processes
 * original trigger : select a definition, then view its run activity
 * URL              : http://localhost:5173/processes/:processId/activity
 */

import { useRoute } from "vue-router";
import DevNotes from "@/components/DevNotes.vue";
import StubPage from "@/components/StubPage.vue";
import { processDetailTabs } from "@/pages/processes/types";

const devNotes = `original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Processes/Pages/ProcessesPage.razor
original URL     : http://localhost:5032/processes
original trigger : select a definition, then view its run activity
URL              : http://localhost:5173/processes/:processId/activity`;

const route = useRoute();
</script>

<template>
  <StubPage
    title="Process activity"
    :tabs="processDetailTabs(String(route.params.processId))"
    selected="activity"
  />
  <DevNotes :text="devNotes" />
</template>
