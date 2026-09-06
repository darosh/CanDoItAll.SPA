<script setup lang="ts">
import { useRoute } from "vue-router";
import StubPage from "@/components/StubPage.vue";
import { agentDetailTabs } from "@/lib/subNavTabs";

const route = useRoute();
</script>

<template>
  <StubPage
    title="Agent configuration"
    :tabs="agentDetailTabs(String(route.params.agentId))"
    selected="configuration"
  />
</template>
