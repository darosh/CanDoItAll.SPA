<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.CrmHr/Pages/CrmHrCrmPage.razor
 * original URL     : http://localhost:5032/crm-hr/crm
 * URL              : http://localhost:5173/crm-hr/accounts
 */

import DevNotes from "@/components/DevNotes.vue";
import StubPage from "@/components/StubPage.vue";
import { crmHrTabs } from "@/lib/subNavTabs";

const devNotes = `original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.CrmHr/Pages/CrmHrCrmPage.razor
original URL     : http://localhost:5032/crm-hr/crm
URL              : http://localhost:5173/crm-hr/accounts`;
</script>

<template>
  <StubPage title="Accounts" :tabs="crmHrTabs()" selected="accounts" />
  <DevNotes :text="devNotes" />
</template>
