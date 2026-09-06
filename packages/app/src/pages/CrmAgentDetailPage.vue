<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.CrmHr/Pages/CrmHrAgentsPage.razor
 * original URL     : http://localhost:5032/crm-hr/agents
 * original trigger : select a business-facing agent
 * URL              : http://localhost:5173/crm-hr/agents/:partyId
 */

import StubPage from "@/components/StubPage.vue";
import { crmHrTabs } from "@/lib/subNavTabs";
</script>

<template>
  <StubPage title="Business-facing agent detail" :tabs="crmHrTabs()" selected="agents" />
</template>
