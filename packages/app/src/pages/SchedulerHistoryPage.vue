<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.SchedulerPlanner/Pages/SchedulerPlannerPage.razor
 * original URL     : http://localhost:5032/scheduler
 * original trigger : click the History tab
 * URL              : http://localhost:5173/scheduler/history
 */

import DevNotes from "@/components/DevNotes.vue";
import StubPage from "@/components/StubPage.vue";

const devNotes = `original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.SchedulerPlanner/Pages/SchedulerPlannerPage.razor
original URL     : http://localhost:5032/scheduler
original trigger : click the History tab
URL              : http://localhost:5173/scheduler/history`;
</script>

<template>
  <StubPage title="Schedule history" />
  <DevNotes :text="devNotes" />
</template>
