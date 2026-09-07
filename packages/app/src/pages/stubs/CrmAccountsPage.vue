<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.CrmHr/Pages/CrmHrCrmPage.razor
 * original URL     : http://localhost:5032/crm-hr/crm
 * URL              : http://localhost:5173/crm-hr/accounts
 * opens            : /crm-hr/accounts/:partyId
 * opens            : /crm-hr/opportunities/:opportunityId
 */

import DevNotes from "@/components/shared/DevNotes.vue";
import StubPage from "@/components/shared/StubPage.vue";
import { crmHrTabs } from "@/lib/subNavTabs";

const devNotes = `original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.CrmHr/Pages/CrmHrCrmPage.razor
original URL     : http://localhost:5032/crm-hr/crm
URL              : http://localhost:5173/crm-hr/accounts
opens            : /crm-hr/accounts/:partyId
opens            : /crm-hr/opportunities/:opportunityId`;
</script>

<template>
  <StubPage title="Accounts" :tabs="crmHrTabs()" selected="accounts" />
  <DevNotes :text="devNotes" />
</template>
