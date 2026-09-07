<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Processes/Pages/LiveProcessesPage.razor
 * original URL     : http://localhost:5032/processes/live
 * original trigger : select a run
 * URL              : http://localhost:5173/processes/runs/:runId
 */

import DevNotes from "@/components/shared/DevNotes.vue";
import StubPage from "@/components/shared/StubPage.vue";

const devNotes = `original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Processes/Pages/LiveProcessesPage.razor
original URL     : http://localhost:5032/processes/live
original trigger : select a run
URL              : http://localhost:5173/processes/runs/:runId`;
</script>

<template>
  <StubPage title="Process run detail" />
  <DevNotes :text="devNotes" />
</template>
