<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.CrmHr/Pages/CrmHrCrmPage.razor
 * original URL     : http://localhost:5032/crm-hr/crm
 * original trigger : select an account
 * URL              : http://localhost:5173/crm-hr/accounts/:partyId
 */

import StubPage from "@/components/StubPage.vue";
import { crmHrTabs } from "@/lib/subNavTabs";
</script>

<template>
  <StubPage title="Account detail" :tabs="crmHrTabs()" selected="accounts" />
</template>
