<script setup lang="ts">
import StubPage from "@/components/StubPage.vue";
import { crmHrTabs } from "@/lib/subNavTabs";
</script>

<template>
  <StubPage title="Business-facing agent detail" :tabs="crmHrTabs()" selected="agents" />
</template>
