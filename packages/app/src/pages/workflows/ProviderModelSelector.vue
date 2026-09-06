<script setup lang="ts">
import type { WorkflowProviderOption } from "@candoitall/api-client";
import { computed, onMounted, ref } from "vue";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { listWorkflowProviderOptions } from "./api";

const providerProfileId = defineModel<string | null>("providerProfileId", { required: true });
const model = defineModel<string>("model", { required: true });

const providers = ref<WorkflowProviderOption[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

const selectedProvider = computed(
  () =>
    providers.value.find((provider) => provider.providerProfileId === providerProfileId.value) ??
    null,
);

onMounted(async () => {
  try {
    providers.value = await listWorkflowProviderOptions();
  } catch (e) {
    error.value = e instanceof Error ? e.message : "Provider options could not be loaded.";
  } finally {
    loading.value = false;
  }
});

function onProviderChange(value: unknown) {
  providerProfileId.value = String(value) || null;
  model.value = "";
}
</script>

<template>
  <div class="space-y-2">
    <p v-if="error" class="text-sm text-destructive">{{ error }}</p>
    <Select
      :model-value="providerProfileId ?? ''"
      :disabled="loading"
      @update:model-value="onProviderChange"
    >
      <SelectTrigger class="w-full"
        ><SelectValue placeholder="Use provider default"
      /></SelectTrigger>
      <SelectContent>
        <SelectItem
          v-for="provider in providers"
          :key="provider.providerProfileId"
          :value="provider.providerProfileId"
          >{{ provider.name }}</SelectItem
        >
      </SelectContent>
    </Select>
    <Select
      v-if="selectedProvider && selectedProvider.modelOptions.length"
      :model-value="model || ''"
      @update:model-value="(value) => (model = String(value))"
    >
      <SelectTrigger class="w-full"
        ><SelectValue :placeholder="`Use provider default (${selectedProvider.defaultModel})`"
      /></SelectTrigger>
      <SelectContent>
        <SelectItem v-for="option in selectedProvider.modelOptions" :key="option" :value="option">{{
          option
        }}</SelectItem>
      </SelectContent>
    </Select>
    <Input
      v-else-if="selectedProvider"
      :model-value="model"
      placeholder="Model (blank uses provider default)"
      @update:model-value="(value) => (model = String(value))"
    />
  </div>
</template>
