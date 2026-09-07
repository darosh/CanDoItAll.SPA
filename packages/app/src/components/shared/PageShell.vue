<script setup lang="ts"></script>

<template>
  <slot name="tabs" />
  <div class="mx-auto flex w-full flex-col gap-6 px-6 py-6">
    <slot />
  </div>
</template>
