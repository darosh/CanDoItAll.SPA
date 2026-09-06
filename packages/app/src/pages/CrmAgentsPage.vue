<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.CrmHr/Pages/CrmHrAgentsPage.razor
 * original URL     : http://localhost:5032/crm-hr/agents
 * URL              : http://localhost:5173/crm-hr/agents
 */

import StubPage from "@/components/StubPage.vue";
import { crmHrTabs } from "@/lib/subNavTabs";
</script>

<template>
  <StubPage title="Business-facing agents" :tabs="crmHrTabs()" selected="agents" />
</template>
