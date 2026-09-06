<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.CrmHr/Pages/CrmHrAgentsPage.razor
 * original URL     : http://localhost:5032/crm-hr/agents
 * URL              : http://localhost:5173/crm-hr/agents
 * opens            : /crm-hr/agents/:partyId
 */

import DevNotes from "@/components/DevNotes.vue";
import StubPage from "@/components/StubPage.vue";
import { crmHrTabs } from "@/lib/subNavTabs";

const devNotes = `original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.CrmHr/Pages/CrmHrAgentsPage.razor
original URL     : http://localhost:5032/crm-hr/agents
URL              : http://localhost:5173/crm-hr/agents
opens            : /crm-hr/agents/:partyId`;
</script>

<template>
  <StubPage title="Business-facing agents" :tabs="crmHrTabs()" selected="agents" />
  <DevNotes :text="devNotes" />
</template>
