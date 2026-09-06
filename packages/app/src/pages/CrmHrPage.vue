<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.CrmHr/Pages/CrmHrHomePage.razor
 * original URL     : http://localhost:5032/crm-hr
 * URL              : http://localhost:5173/crm-hr
 */

import DevNotes from "@/components/DevNotes.vue";
import StubPage from "@/components/StubPage.vue";
import { crmHrTabs } from "@/lib/subNavTabs";

const devNotes = `original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.CrmHr/Pages/CrmHrHomePage.razor
original URL     : http://localhost:5032/crm-hr
URL              : http://localhost:5173/crm-hr`;
</script>

<template>
  <StubPage title="CRM / HR" :tabs="crmHrTabs()" selected="overview" />
  <DevNotes :text="devNotes" />
</template>
