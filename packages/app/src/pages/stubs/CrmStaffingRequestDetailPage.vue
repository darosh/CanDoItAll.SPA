<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.CrmHr/Pages/CrmHrAssignmentsPage.razor
 * original URL     : http://localhost:5032/crm-hr/assignments
 * original trigger : open a staffing request
 * URL              : http://localhost:5173/crm-hr/staffing-requests/:requestId
 */

import DevNotes from "@/components/shared/DevNotes.vue";
import StubPage from "@/components/shared/StubPage.vue";

const devNotes = `original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.CrmHr/Pages/CrmHrAssignmentsPage.razor
original URL     : http://localhost:5032/crm-hr/assignments
original trigger : open a staffing request
URL              : http://localhost:5173/crm-hr/staffing-requests/:requestId`;
</script>

<template>
  <StubPage title="Staffing request detail" />
  <DevNotes :text="devNotes" />
</template>
