<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.CrmHr/Pages/CrmHrRecruitingPage.razor
 * original URL     : http://localhost:5032/crm-hr/recruiting
 * URL              : http://localhost:5173/crm-hr/recruiting
 */

import DevNotes from "@/components/DevNotes.vue";
import StubPage from "@/components/StubPage.vue";
import { crmHrTabs } from "@/lib/subNavTabs";

const devNotes = `original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.CrmHr/Pages/CrmHrRecruitingPage.razor
original URL     : http://localhost:5032/crm-hr/recruiting
URL              : http://localhost:5173/crm-hr/recruiting`;
</script>

<template>
  <StubPage title="Recruiting" :tabs="crmHrTabs()" selected="recruiting" />
  <DevNotes :text="devNotes" />
</template>
