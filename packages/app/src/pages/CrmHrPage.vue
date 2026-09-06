<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.CrmHr/Pages/CrmHrHomePage.razor
 * original URL     : http://localhost:5032/crm-hr
 * URL              : http://localhost:5173/crm-hr
 * opens            : /crm-hr/directory
 * opens            : /crm-hr/accounts
 * opens            : /crm-hr/workforce
 * opens            : /crm-hr/recruiting
 * opens            : /crm-hr/agents
 * opens            : /crm-hr/assignments
 */

import DevNotes from "@/components/DevNotes.vue";
import StubPage from "@/components/StubPage.vue";
import { crmHrTabs } from "@/lib/subNavTabs";

const devNotes = `original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.CrmHr/Pages/CrmHrHomePage.razor
original URL     : http://localhost:5032/crm-hr
URL              : http://localhost:5173/crm-hr
opens            : /crm-hr/directory
opens            : /crm-hr/accounts
opens            : /crm-hr/workforce
opens            : /crm-hr/recruiting
opens            : /crm-hr/agents
opens            : /crm-hr/assignments`;
</script>

<template>
  <StubPage title="CRM / HR" :tabs="crmHrTabs()" selected="overview" />
  <DevNotes :text="devNotes" />
</template>
