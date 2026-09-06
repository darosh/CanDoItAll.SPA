<script setup lang="ts">
import { useRoute } from "vue-router";
import StubPage from "@/components/StubPage.vue";
import { workflowDetailTabs } from "@/lib/subNavTabs";

const route = useRoute();
</script>

<template>
  <StubPage
    title="Workflow designer"
    :tabs="workflowDetailTabs(String(route.params.workflowId))"
    selected="design"
  />
</template>
