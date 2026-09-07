<script setup lang="ts">
import type { ConfigurationSchema } from "@candoitall/api-client";
import { computed } from "vue";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ConfigurationFieldType, WorkflowExecutorSettingsPresentationMode } from "../../types";

// Schema-driven executor settings form: reads/writes WorkflowNodeSettings.executorSettingsJson as
// a flat key->string map, mirroring the .NET ConfigurationState's own string-keyed storage. Falls
// back to a raw-JSON textarea only when there's no schema or the executor opts into a custom
// renderer (per the port plan's decision #5) — not for "anything complex".

const props = defineProps<{
  schema?: ConfigurationSchema;
  presentationMode?: number;
  modelValue: string;
}>();
const emit = defineEmits<{ "update:modelValue": [value: string] }>();

const useRawJson = computed(
  () =>
    props.presentationMode === WorkflowExecutorSettingsPresentationMode.CustomRenderer ||
    !props.schema ||
    props.schema.fields.length === 0,
);

const values = computed<Record<string, string>>(() => {
  if (!props.modelValue) return {};
  try {
    const parsed: unknown = JSON.parse(props.modelValue);
    return parsed && typeof parsed === "object" ? (parsed as Record<string, string>) : {};
  } catch {
    return {};
  }
});

function setField(key: string, value: string) {
  emit("update:modelValue", JSON.stringify({ ...values.value, [key]: value }));
}
</script>

<template>
  <div class="space-y-4">
    <div v-if="useRawJson" class="space-y-2">
      <Label for="executor-settings-json">Settings (JSON)</Label>
      <Textarea
        id="executor-settings-json"
        :model-value="modelValue"
        rows="8"
        class="font-mono text-xs"
        @update:model-value="(value) => emit('update:modelValue', String(value))"
      />
    </div>
    <template v-else>
      <div v-for="field in schema!.fields" :key="field.key" class="space-y-2">
        <Label :for="`executor-field-${field.key}`"
          >{{ field.label }}<span v-if="field.isRequired"> *</span></Label
        >
        <p v-if="field.helpText" class="text-xs text-muted-foreground">{{ field.helpText }}</p>

        <Textarea
          v-if="field.fieldType === ConfigurationFieldType.Json"
          :id="`executor-field-${field.key}`"
          :model-value="values[field.key] ?? ''"
          rows="4"
          class="font-mono text-xs"
          @update:model-value="(value) => setField(field.key, String(value))"
        />
        <Textarea
          v-else-if="field.fieldType === ConfigurationFieldType.MultilineText"
          :id="`executor-field-${field.key}`"
          :model-value="values[field.key] ?? ''"
          rows="3"
          @update:model-value="(value) => setField(field.key, String(value))"
        />
        <div
          v-else-if="field.fieldType === ConfigurationFieldType.Boolean"
          class="flex items-center gap-2"
        >
          <Checkbox
            :id="`executor-field-${field.key}`"
            :model-value="values[field.key] === 'true'"
            @update:model-value="(value) => setField(field.key, value ? 'true' : 'false')"
          />
        </div>
        <Select
          v-else-if="field.fieldType === ConfigurationFieldType.Select"
          :model-value="values[field.key] ?? ''"
          @update:model-value="(value) => setField(field.key, String(value))"
        >
          <SelectTrigger class="w-full"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem
              v-for="option in field.options ?? []"
              :key="option.value"
              :value="option.value"
              >{{ option.label }}</SelectItem
            >
          </SelectContent>
        </Select>
        <Input
          v-else
          :id="`executor-field-${field.key}`"
          :type="field.fieldType === ConfigurationFieldType.Number ? 'number' : 'text'"
          :model-value="values[field.key] ?? ''"
          @update:model-value="(value) => setField(field.key, String(value))"
        />
      </div>
    </template>
  </div>
</template>
