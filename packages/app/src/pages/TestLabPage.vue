<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.TestLab/Pages/TestLabPage.razor
 * original URL     : http://localhost:5032/test-lab
 * URL              : http://localhost:5173/test-lab
 * opens            : /test-lab/plans/:planId
 */

import DevNotes from "@/components/DevNotes.vue";
import StubPage from "@/components/StubPage.vue";

const devNotes = `original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.TestLab/Pages/TestLabPage.razor
original URL     : http://localhost:5032/test-lab
URL              : http://localhost:5173/test-lab
opens            : /test-lab/plans/:planId`;
</script>

<template>
  <StubPage title="Test Lab" />
  <DevNotes :text="devNotes" />
</template>
