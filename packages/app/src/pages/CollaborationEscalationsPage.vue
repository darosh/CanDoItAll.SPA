<script setup lang="ts">
import StubPage from "@/components/StubPage.vue";
import { collaborationTabs } from "@/lib/subNavTabs";
</script>

<template>
  <StubPage title="Escalations" :tabs="collaborationTabs()" selected="escalations" />
</template>
