<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Prompts/Pages/PromptGalleryPage.razor
 * original URL     : http://localhost:5032/prompt-gallery
 * original trigger : select or open a prompt from the gallery
 * URL              : http://localhost:5173/prompts/:promptId
 */

import type { PromptGalleryVersionInfo, PromptProviderModel } from "@candoitall/api-client";
import { Archive, ArchiveRestore, Plus, X } from "@lucide/vue";
import { computed, onMounted, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

import PageHeader from "@/components/shared/PageHeader.vue";
import PageShell from "@/components/shared/PageShell.vue";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
// import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";

import { archivePrompt, createVersion, getPrompt, saveDraft, setWarningSuppression } from "./api";
import {
  formatConsumer,
  formatKind,
  formatWarningIssue,
  PromptCompatibilityIssueCode,
  PromptGalleryConsumer,
  PromptKind,
  PromptStatus,
} from "./types";

const route = useRoute();
const router = useRouter();
const promptId = route.params.promptId as string;

const loading = ref(true);
const loadError = ref<string | null>(null);
const isBusy = ref(false);
const feedback = ref<{ type: "success" | "error"; message: string } | null>(null);

const loadedItemId = ref<string | null>(null);
const projectId = ref<string | null>(null);
const collectionId = ref<string | null>(null);
const expectedUpdatedAtUtc = ref<Date | null>(null);
const createdAtUtc = ref<Date | null>(null);
const isArchived = ref(false);
const status = ref<number>(PromptStatus.Draft);
const isFavorite = ref(false);
const currentVersionNumber = ref(0);
const versions = ref<PromptGalleryVersionInfo[]>([]);

const editor = reactive({
  title: "",
  summary: "",
  kind: PromptKind.FullPrompt as number,
  phase: "",
  content: "",
  tags: [] as string[],
  supportedModels: [] as PromptProviderModel[],
  supportedConsumers: [] as number[],
  warningSuppressions: [] as { consumer: number; issueCode: number }[],
  temperature: null as number | null,
  topP: null as number | null,
  maxOutputTokens: null as number | null,
});

const tagInput = ref("");
const providerToAdd = ref("");
const modelToAdd = ref("");

const warningConsumers = [PromptGalleryConsumer.Chat, PromptGalleryConsumer.Workflow];
const warningIssues = [
  PromptCompatibilityIssueCode.ItemKindMismatch,
  PromptCompatibilityIssueCode.ProviderModelNotSupported,
];

function toNumberOrNull(value: unknown): number | null {
  if (value === null || value === undefined) return null;
  const num = Number(value);
  return Number.isNaN(num) ? null : num;
}

async function load(options: { silent?: boolean } = {}) {
  if (!options.silent) loading.value = true;
  loadError.value = null;
  try {
    const prompt = await getPrompt(promptId);
    loadedItemId.value = prompt.id;
    projectId.value = prompt.projectId;
    collectionId.value = prompt.collectionId;
    expectedUpdatedAtUtc.value = prompt.updatedAtUtc;
    createdAtUtc.value = prompt.createdAtUtc;
    isArchived.value = prompt.isArchived;
    status.value = prompt.status;
    isFavorite.value = prompt.isFavorite ?? false;
    currentVersionNumber.value = Number(prompt.currentVersionNumber);
    versions.value = prompt.versions;

    editor.title = prompt.title;
    editor.summary = prompt.summary;
    editor.kind = prompt.kind;
    editor.phase = prompt.phase;
    editor.content = prompt.draftContent;
    editor.tags = [...prompt.tags];
    editor.supportedModels = prompt.supportedModels.map((model) => ({ ...model }));
    editor.supportedConsumers = [...prompt.supportedConsumers];
    editor.warningSuppressions = prompt.warningSuppressions.map((suppression) => ({
      consumer: suppression.consumer,
      issueCode: suppression.issueCode,
    }));
    editor.temperature = toNumberOrNull(prompt.recommendations.temperature);
    editor.topP = toNumberOrNull(prompt.recommendations.topP);
    editor.maxOutputTokens = toNumberOrNull(prompt.recommendations.maxOutputTokens);
  } catch (e) {
    loadError.value = e instanceof Error ? e.message : "The prompt could not be loaded.";
  } finally {
    if (!options.silent) loading.value = false;
  }
}

onMounted(() => load());

const validationError = computed(() => {
  if (!editor.title.trim()) return "Title is required.";
  if (editor.title.length > 200) return "Title must be 200 characters or fewer.";
  if (editor.summary.length > 10_000) return "Summary must be 10,000 characters or fewer.";
  if (editor.phase.length > 80) return "Phase must be 80 characters or fewer.";
  if (!editor.content.trim()) return "Content is required.";
  if (editor.content.length > 64_000) return "Content must be 64,000 characters or fewer.";
  if (editor.tags.length > 20) return "No more than 20 tags are allowed.";
  if (editor.supportedModels.length > 100) return "No more than 100 supported models are allowed.";
  if (editor.temperature !== null && (editor.temperature < 0 || editor.temperature > 2))
    return "Temperature must be between 0 and 2.";
  if (editor.topP !== null && (editor.topP < 0 || editor.topP > 1))
    return "Top-p must be between 0 and 1.";
  if (
    editor.maxOutputTokens !== null &&
    (editor.maxOutputTokens < 1 || editor.maxOutputTokens > 1_000_000)
  )
    return "Max output tokens must be between 1 and 1,000,000.";
  return null;
});

function friendlyErrorMessage(e: unknown, fallback: string): string {
  const message = e instanceof Error ? e.message : fallback;
  return message.includes("concurrency-conflict")
    ? "This item was changed elsewhere — reload to see the latest version before saving again."
    : message;
}

async function saveCore() {
  if (isBusy.value) return null;
  if (validationError.value) {
    feedback.value = { type: "error", message: validationError.value };
    return null;
  }
  isBusy.value = true;
  feedback.value = null;
  try {
    const receipt = await saveDraft({
      id: loadedItemId.value,
      projectId: projectId.value,
      collectionId: collectionId.value,
      title: editor.title.trim(),
      summary: editor.summary.trim(),
      kind: editor.kind,
      phase: editor.phase.trim(),
      content: editor.content,
      tags: editor.tags,
      supportedModels: editor.supportedModels,
      supportedConsumers: editor.supportedConsumers,
      recommendations: {
        temperature: editor.temperature,
        topP: editor.topP,
        maxOutputTokens: editor.maxOutputTokens,
      },
      expectedUpdatedAtUtc: expectedUpdatedAtUtc.value,
    });
    if (receipt.updatedAtUtc) expectedUpdatedAtUtc.value = receipt.updatedAtUtc;
    await load({ silent: true });
    return receipt;
  } catch (e) {
    feedback.value = {
      type: "error",
      message: friendlyErrorMessage(e, "The draft could not be saved."),
    };
    return null;
  } finally {
    isBusy.value = false;
  }
}

async function save() {
  const receipt = await saveCore();
  if (receipt) feedback.value = { type: "success", message: "Draft saved." };
}

async function handleCreateVersion() {
  const receipt = await saveCore();
  if (!receipt?.promptArtifactId || !receipt.updatedAtUtc) return;
  isBusy.value = true;
  try {
    await createVersion(receipt.promptArtifactId, {
      creationReason: "Ready for reuse",
      expectedUpdatedAtUtc: receipt.updatedAtUtc,
    });
    await load({ silent: true });
    feedback.value = { type: "success", message: "Final version created." };
  } catch (e) {
    feedback.value = {
      type: "error",
      message: friendlyErrorMessage(e, "The final version could not be created."),
    };
  } finally {
    isBusy.value = false;
  }
}

async function toggleArchived() {
  if (isBusy.value || !loadedItemId.value) return;
  isBusy.value = true;
  try {
    await archivePrompt(loadedItemId.value, !isArchived.value);
    await load({ silent: true });
    feedback.value = {
      type: "success",
      message: isArchived.value ? "Prompt archived." : "Prompt restored.",
    };
  } catch (e) {
    feedback.value = {
      type: "error",
      message: friendlyErrorMessage(e, "The archive state could not be updated."),
    };
  } finally {
    isBusy.value = false;
  }
}

function isWarningSuppressed(consumer: number, issueCode: number): boolean {
  return editor.warningSuppressions.some(
    (w) => w.consumer === consumer && w.issueCode === issueCode,
  );
}

async function toggleWarningSuppression(consumer: number, issueCode: number, suppressed: boolean) {
  if (isBusy.value || !loadedItemId.value) return;
  isBusy.value = true;
  try {
    await setWarningSuppression(loadedItemId.value, consumer, issueCode, suppressed);
    await load({ silent: true });
  } catch (e) {
    feedback.value = {
      type: "error",
      message: friendlyErrorMessage(e, "The warning preference could not be updated."),
    };
  } finally {
    isBusy.value = false;
  }
}

function cancel() {
  router.push("/prompts");
}

function addTag() {
  const value = tagInput.value.trim();
  if (!value || editor.tags.length >= 20 || editor.tags.includes(value)) return;
  editor.tags.push(value);
  tagInput.value = "";
}

function removeTag(tag: string) {
  editor.tags = editor.tags.filter((t) => t !== tag);
}

function addModel() {
  const provider = providerToAdd.value.trim();
  const model = modelToAdd.value.trim();
  if (!provider || !model) return;
  const exists = editor.supportedModels.some(
    (m) =>
      m.provider.toLowerCase() === provider.toLowerCase() &&
      m.model.toLowerCase() === model.toLowerCase(),
  );
  if (exists) return;
  editor.supportedModels.push({
    provider,
    model,
    isPreferred: editor.supportedModels.length === 0,
  });
  providerToAdd.value = "";
  modelToAdd.value = "";
}

function removeModel(index: number) {
  editor.supportedModels.splice(index, 1);
}

function setPreferredModel(index: number, preferred: boolean) {
  editor.supportedModels.forEach((model, i) => {
    model.isPreferred = preferred && i === index;
  });
}

function isConsumerSelected(consumer: number): boolean {
  return editor.supportedConsumers.includes(consumer);
}

function toggleConsumer(consumer: number, checked: boolean) {
  editor.supportedConsumers = checked
    ? [...editor.supportedConsumers.filter((c) => c !== consumer), consumer]
    : editor.supportedConsumers.filter((c) => c !== consumer);
}
</script>

<template>
  <PageShell>
    <PageHeader :title="editor.title || 'Prompt detail'" :description="editor.summary">
      <template #actions>
        <Badge variant="outline">{{ formatKind(editor.kind) }}</Badge>
        <Badge v-if="isFavorite" variant="warning">Favorite</Badge>
        <Badge
          :variant="
            isArchived ? 'warning' : status === PromptStatus.Final ? 'success' : 'secondary'
          "
        >
          {{ isArchived ? "Archived" : status === PromptStatus.Final ? "Final" : "Draft" }}
        </Badge>
        <Badge v-if="currentVersionNumber > 0" variant="secondary"
          >v{{ currentVersionNumber }}</Badge
        >
      </template>
    </PageHeader>

    <p v-if="loading" class="text-sm text-muted-foreground">Loading&hellip;</p>
    <p v-else-if="loadError" class="text-sm text-destructive">{{ loadError }}</p>

    <template v-else>
      <div
        v-if="feedback"
        :class="[
          'rounded-md border p-4 text-sm',
          feedback.type === 'error'
            ? 'border-destructive/30 bg-destructive/5 text-destructive'
            : 'border-success/30 bg-success/5 text-success',
        ]"
      >
        {{ feedback.message }}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Prompt identity</CardTitle>
        </CardHeader>
        <CardContent class="flex flex-col gap-4">
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div class="flex flex-col gap-2">
              <Label for="prompt-title">Title</Label>
              <Input id="prompt-title" v-model="editor.title" maxlength="200" />
            </div>
            <div class="flex flex-col gap-2">
              <Label>Kind</Label>
              <Select
                :model-value="String(editor.kind)"
                @update:model-value="(v) => (editor.kind = Number(v))"
              >
                <SelectTrigger class="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem :value="String(PromptKind.FullPrompt)">Full prompt</SelectItem>
                  <SelectItem :value="String(PromptKind.Part)">Prompt part</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div class="flex flex-col gap-2">
            <Label for="prompt-summary">Summary</Label>
            <Input id="prompt-summary" v-model="editor.summary" maxlength="10000" />
          </div>

          <div class="flex flex-col gap-2">
            <Label for="prompt-phase">Phase / group</Label>
            <Input id="prompt-phase" v-model="editor.phase" maxlength="80" class="max-w-xs" />
          </div>

          <div class="flex flex-col gap-2">
            <Label>Tags</Label>
            <div class="flex flex-wrap items-center gap-1">
              <Badge v-for="tag in editor.tags" :key="tag" variant="outline" class="gap-1">
                {{ tag }}
                <button type="button" class="cursor-pointer" @click="removeTag(tag)">
                  <X class="size-3" />
                </button>
              </Badge>
              <Input
                v-model="tagInput"
                placeholder="Add a tag"
                class="h-7 w-40"
                :disabled="editor.tags.length >= 20"
                @keydown.enter.prevent="addTag"
              />
              <Button
                variant="outline"
                size="icon-sm"
                :disabled="editor.tags.length >= 20"
                @click="addTag"
              >
                <Plus class="size-3.5" />
              </Button>
            </div>
            <p class="text-xs text-muted-foreground">Up to 20 tags.</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Reusable content</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            v-model="editor.content"
            maxlength="64000"
            class="min-h-64 font-mono text-sm"
            placeholder="Prompt content"
          />
          <p class="mt-1 text-xs text-muted-foreground">
            Finalization creates a separate immutable version — editing content here only changes
            the draft.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Supported consumers</CardTitle>
        </CardHeader>
        <CardContent>
          <p class="mb-2 text-xs text-muted-foreground">
            Leave all unchecked to allow every consumer.
          </p>
          <div class="flex flex-wrap gap-4">
            <Label
              v-for="consumer in Object.values(PromptGalleryConsumer)"
              :key="consumer"
              class="font-normal"
            >
              <Checkbox
                :model-value="isConsumerSelected(consumer)"
                @update:model-value="(v) => toggleConsumer(consumer, !!v)"
              />
              {{ formatConsumer(consumer) }}
            </Label>
          </div>
        </CardContent>
      </Card>

      <Card v-if="loadedItemId">
        <CardHeader>
          <CardTitle>Compatibility warning preferences</CardTitle>
        </CardHeader>
        <CardContent class="flex flex-col gap-3">
          <div v-for="consumer in warningConsumers" :key="consumer" class="flex flex-col gap-1">
            <p class="text-sm font-medium text-foreground my-2">{{ formatConsumer(consumer) }}</p>
            <div class="flex flex-wrap gap-4">
              <Label v-for="issue in warningIssues" :key="issue" class="font-normal">
                <Checkbox
                  :model-value="isWarningSuppressed(consumer, issue)"
                  :disabled="isBusy"
                  @update:model-value="(v) => toggleWarningSuppression(consumer, issue, !!v)"
                />
                Suppress {{ formatWarningIssue(issue) }}
              </Label>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Supported provider models</CardTitle>
        </CardHeader>
        <CardContent class="flex flex-col gap-3">
          <div class="flex flex-wrap items-end gap-2">
            <div class="flex flex-col gap-1">
              <Label for="model-provider" class="text-xs">Provider</Label>
              <Input id="model-provider" v-model="providerToAdd" class="w-40" maxlength="120" />
            </div>
            <div class="flex flex-col gap-1">
              <Label for="model-model" class="text-xs">Model</Label>
              <Input id="model-model" v-model="modelToAdd" class="w-48" maxlength="200" />
            </div>
            <Button variant="outline" size="sm" @click="addModel">
              <Plus class="size-3.5" />
              Add model
            </Button>
          </div>

          <p v-if="editor.supportedModels.length === 0" class="text-sm text-muted-foreground">
            No model restriction — any provider / model is allowed.
          </p>
          <Table v-else>
            <TableHeader>
              <TableRow>
                <TableHead>Provider</TableHead>
                <TableHead>Model</TableHead>
                <TableHead>Preferred</TableHead>
                <TableHead class="w-10"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow
                v-for="(model, index) in editor.supportedModels"
                :key="`${model.provider}:${model.model}`"
              >
                <TableCell>{{ model.provider }}</TableCell>
                <TableCell>{{ model.model }}</TableCell>
                <TableCell>
                  <Checkbox
                    :model-value="!!model.isPreferred"
                    @update:model-value="(v) => setPreferredModel(index, !!v)"
                  />
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon-sm" @click="removeModel(index)">
                    <X class="size-3.5" />
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recommended generation settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div class="flex flex-col gap-2">
              <Label for="temperature">Temperature (0–2)</Label>
              <Input
                id="temperature"
                type="number"
                step="0.1"
                :model-value="editor.temperature ?? ''"
                @update:model-value="(v) => (editor.temperature = v === '' ? null : Number(v))"
              />
            </div>
            <div class="flex flex-col gap-2">
              <Label for="top-p">Top-p (0–1)</Label>
              <Input
                id="top-p"
                type="number"
                step="0.05"
                :model-value="editor.topP ?? ''"
                @update:model-value="(v) => (editor.topP = v === '' ? null : Number(v))"
              />
            </div>
            <div class="flex flex-col gap-2">
              <Label for="max-output-tokens">Max output tokens</Label>
              <Input
                id="max-output-tokens"
                type="number"
                step="1"
                :model-value="editor.maxOutputTokens ?? ''"
                @update:model-value="(v) => (editor.maxOutputTokens = v === '' ? null : Number(v))"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card v-if="versions.length > 0">
        <CardHeader>
          <CardTitle>Immutable versions</CardTitle>
        </CardHeader>
        <CardContent class="space-y-2">
          <div
            v-for="version in versions"
            :key="version.id"
            class="flex items-center justify-between text-sm"
          >
            <span>v{{ version.versionNumber }} &middot; {{ version.creationReason }}</span>
            <span class="text-muted-foreground">{{
              new Date(version.createdAtUtc).toLocaleDateString()
            }}</span>
          </div>
        </CardContent>
      </Card>

      <p v-if="createdAtUtc" class="text-sm text-right text-muted-foreground">
        Created {{ createdAtUtc.toLocaleString() }} &middot; updated
        {{ expectedUpdatedAtUtc?.toLocaleString() }}
      </p>

      <div class="flex flex-wrap items-center justify-end gap-2">
        <div class="flex gap-2">
          <Button variant="outline" :disabled="isBusy" @click="cancel">Cancel</Button>
          <Button v-if="loadedItemId" variant="outline" :disabled="isBusy" @click="toggleArchived">
            <component :is="isArchived ? ArchiveRestore : Archive" class="size-4" />
            {{ isArchived ? "Restore" : "Archive" }}
          </Button>
          <Button variant="secondary" :disabled="isBusy" @click="handleCreateVersion"
            >Create final version</Button
          >
          <Button :disabled="isBusy" @click="save">Save draft</Button>
        </div>
      </div>
    </template>
  </PageShell>
</template>
