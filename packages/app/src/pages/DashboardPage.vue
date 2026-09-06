<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/App/CanDoItAll.Web/Components/Pages/Home.razor
 * original URL     : http://localhost:5032/
 * URL              : http://localhost:5173/
 */

import DevNotes from "@/components/DevNotes.vue";
import StubPage from "@/components/StubPage.vue";

const devNotes = `original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/App/CanDoItAll.Web/Components/Pages/Home.razor
original URL     : http://localhost:5032/
URL              : http://localhost:5173/`;
</script>

<template>
  <StubPage title="Dashboard" />
  <DevNotes :text="devNotes" />
</template>
