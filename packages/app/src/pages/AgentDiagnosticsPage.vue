<script setup lang="ts">
import StubPage from "@/components/StubPage.vue";
import { agentsCatalogTabs } from "@/lib/subNavTabs";
</script>

<template>
  <StubPage title="Diagnostics" :tabs="agentsCatalogTabs()" selected="diagnostics" />
</template>
