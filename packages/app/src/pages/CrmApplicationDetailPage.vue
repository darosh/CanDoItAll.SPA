<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.CrmHr/Pages/CrmHrRecruitingPage.razor
 * original URL     : http://localhost:5032/crm-hr/recruiting
 * original trigger : select an application
 * URL              : http://localhost:5173/crm-hr/recruiting/:applicationId
 */

import StubPage from "@/components/StubPage.vue";
import { crmHrTabs } from "@/lib/subNavTabs";
</script>

<template>
  <StubPage title="Application detail" :tabs="crmHrTabs()" selected="recruiting" />
</template>
