<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.CrmHr/Pages/CrmHrWorkforcePage.razor
 * original URL     : http://localhost:5032/crm-hr/workforce
 * URL              : http://localhost:5173/crm-hr/workforce
 */

import DevNotes from "@/components/DevNotes.vue";
import StubPage from "@/components/StubPage.vue";
import { crmHrTabs } from "@/lib/subNavTabs";

const devNotes = `original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.CrmHr/Pages/CrmHrWorkforcePage.razor
original URL     : http://localhost:5032/crm-hr/workforce
URL              : http://localhost:5173/crm-hr/workforce`;
</script>

<template>
  <StubPage title="Workforce" :tabs="crmHrTabs()" selected="workforce" />
  <DevNotes :text="devNotes" />
</template>
