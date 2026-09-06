<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.SchedulerPlanner/Pages/SchedulerPlannerPage.razor
 * original URL     : http://localhost:5032/scheduler
 * original trigger : click the Schedules tab
 * URL              : http://localhost:5173/scheduler/schedules
 */

import StubPage from "@/components/StubPage.vue";
import { schedulerLibraryTabs } from "@/lib/subNavTabs";
</script>

<template>
  <StubPage title="Schedules" :tabs="schedulerLibraryTabs()" selected="schedules" />
</template>
