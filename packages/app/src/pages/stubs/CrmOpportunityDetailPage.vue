<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.CrmHr/Pages/CrmHrCrmPage.razor
 * original URL     : http://localhost:5032/crm-hr/crm
 * original trigger : select an opportunity
 * URL              : http://localhost:5173/crm-hr/opportunities/:opportunityId
 */

import DevNotes from "@/components/shared/DevNotes.vue";
import StubPage from "@/components/shared/StubPage.vue";

const devNotes = `original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.CrmHr/Pages/CrmHrCrmPage.razor
original URL     : http://localhost:5032/crm-hr/crm
original trigger : select an opportunity
URL              : http://localhost:5173/crm-hr/opportunities/:opportunityId`;
</script>

<template>
  <StubPage title="Opportunity detail" />
  <DevNotes :text="devNotes" />
</template>
