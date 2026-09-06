<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.CrmHr/Pages/CrmHrAssignmentsPage.razor
 * original URL     : http://localhost:5032/crm-hr/assignments
 * original trigger : select an assignment
 * URL              : http://localhost:5173/crm-hr/assignments/:assignmentId
 */

import DevNotes from "@/components/DevNotes.vue";
import StubPage from "@/components/StubPage.vue";
import { crmHrTabs } from "@/lib/subNavTabs";

const devNotes = `original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.CrmHr/Pages/CrmHrAssignmentsPage.razor
original URL     : http://localhost:5032/crm-hr/assignments
original trigger : select an assignment
URL              : http://localhost:5173/crm-hr/assignments/:assignmentId`;
</script>

<template>
  <StubPage title="Assignment detail" :tabs="crmHrTabs()" selected="assignments" />
  <DevNotes :text="devNotes" />
</template>
