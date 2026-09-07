<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.CrmHr/Pages/CrmHrWorkforcePage.razor
 * original URL     : http://localhost:5032/crm-hr/workforce
 * original trigger : select a workforce profile
 * URL              : http://localhost:5173/crm-hr/workforce/:partyId
 */

import DevNotes from "@/components/shared/DevNotes.vue";
import StubPage from "@/components/shared/StubPage.vue";
import { crmHrTabs } from "@/lib/subNavTabs";

const devNotes = `original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.CrmHr/Pages/CrmHrWorkforcePage.razor
original URL     : http://localhost:5032/crm-hr/workforce
original trigger : select a workforce profile
URL              : http://localhost:5173/crm-hr/workforce/:partyId`;
</script>

<template>
  <StubPage title="Workforce profile" :tabs="crmHrTabs()" selected="workforce" />
  <DevNotes :text="devNotes" />
</template>
