<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.CrmHr/Pages/CrmHrDirectoryPage.razor
 * original URL     : http://localhost:5032/crm-hr/directory
 * original trigger : select a party from the directory
 * URL              : http://localhost:5173/crm-hr/directory/:partyId
 */

import DevNotes from "@/components/shared/DevNotes.vue";
import StubPage from "@/components/shared/StubPage.vue";
import { crmHrTabs } from "@/lib/subNavTabs";

const devNotes = `original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.CrmHr/Pages/CrmHrDirectoryPage.razor
original URL     : http://localhost:5032/crm-hr/directory
original trigger : select a party from the directory
URL              : http://localhost:5173/crm-hr/directory/:partyId`;
</script>

<template>
  <StubPage title="Party detail" :tabs="crmHrTabs()" selected="directory" />
  <DevNotes :text="devNotes" />
</template>
