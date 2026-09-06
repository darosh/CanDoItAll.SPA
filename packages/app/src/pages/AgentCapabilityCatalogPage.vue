<script setup lang="ts">
import StubPage from "@/components/StubPage.vue";
import { agentsCatalogTabs } from "@/lib/subNavTabs";
</script>

<template>
  <StubPage title="Capability catalog" :tabs="agentsCatalogTabs()" selected="capabilities" />
</template>
