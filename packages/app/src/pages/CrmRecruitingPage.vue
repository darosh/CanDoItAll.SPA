<script setup lang="ts">
import StubPage from "@/components/StubPage.vue";
import { crmHrTabs } from "@/lib/subNavTabs";
</script>

<template>
  <StubPage title="Recruiting" :tabs="crmHrTabs()" selected="recruiting" />
</template>
