<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.CrmHr/Pages/CrmHrDirectoryPage.razor
 * original URL     : http://localhost:5032/crm-hr/directory
 * URL              : http://localhost:5173/crm-hr/directory
 */

import StubPage from "@/components/StubPage.vue";
import { crmHrTabs } from "@/lib/subNavTabs";
</script>

<template>
  <StubPage title="Directory" :tabs="crmHrTabs()" selected="directory" />
</template>
