<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.SchedulerPlanner/Pages/SchedulerPlannerPage.razor
 * original URL     : http://localhost:5032/scheduler
 * original trigger : click the Schedules tab, then select a schedule
 * URL              : http://localhost:5173/scheduler/schedules/:scheduleId
 */

import DevNotes from "@/components/DevNotes.vue";
import StubPage from "@/components/StubPage.vue";

const devNotes = `original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.SchedulerPlanner/Pages/SchedulerPlannerPage.razor
original URL     : http://localhost:5032/scheduler
original trigger : click the Schedules tab, then select a schedule
URL              : http://localhost:5173/scheduler/schedules/:scheduleId`;
</script>

<template>
  <StubPage title="Schedule detail" />
  <DevNotes :text="devNotes" />
</template>
