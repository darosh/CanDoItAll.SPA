<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Workspace/Pages/SettingsPage.razor
 * original URL     : http://localhost:5032/settings
 * URL              : http://localhost:5173/settings
 * opens            : /settings/api-access
 * opens            : /settings/data-sources
 * opens            : /settings/database
 * opens            : /settings/files
 * opens            : /settings/runtime-capabilities
 * opens            : /settings/secrets
 * opens            : /settings/storage
 */

import type { WorkspaceSettingsModel } from "@candoitall/api-client";
import { onMounted, ref } from "vue";

import PageShell from "@/components/shared/PageShell.vue";
import SubNavTabs from "@/components/shared/SubNavTabs.vue";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { apiClient } from "@/lib/api-client";
import { settingsTabs } from "@/lib/subNavTabs";

const model = ref<WorkspaceSettingsModel | null>(null);
const loading = ref(true);
const saving = ref(false);
const error = ref<string | null>(null);

async function load() {
  loading.value = true;
  error.value = null;
  try {
    model.value = await apiClient.getApiSettingsWorkspace();
  } catch (cause) {
    error.value =
      cause instanceof Error ? cause.message : "Workspace settings could not be loaded.";
  } finally {
    loading.value = false;
  }
}

async function save() {
  if (!model.value) return;
  saving.value = true;
  error.value = null;
  try {
    model.value = await apiClient.putApiSettingsWorkspace(model.value);
  } catch (cause) {
    error.value = cause instanceof Error ? cause.message : "Workspace defaults could not be saved.";
  } finally {
    saving.value = false;
  }
}

onMounted(load);
</script>

<template>
  <PageShell>
    <template #tabs><SubNavTabs :tabs="settingsTabs()" selected="workspace" /></template>
    <div class="flex flex-col gap-1">
      <h1 class="text-xl font-semibold">Workspace</h1>
      <p class="text-sm text-muted-foreground">
        Defaults for the workspace and new prompt sessions.
      </p>
    </div>
    <p v-if="loading" class="text-sm text-muted-foreground">Loading workspace defaults&hellip;</p>
    <Card v-else-if="error"
      ><CardHeader
        ><CardTitle>Settings unavailable</CardTitle
        ><CardDescription>{{ error }}</CardDescription></CardHeader
      ><CardContent
        ><Button size="sm" variant="outline" @click="load">Try again</Button></CardContent
      ></Card
    >
    <form v-else-if="model" class="flex flex-col gap-6" @submit.prevent="save">
      <Card
        ><CardHeader
          ><CardTitle>Workspace defaults</CardTitle
          ><CardDescription
            >These values define how the app boots and which provider new prompt sessions
            prefer.</CardDescription
          ></CardHeader
        ><CardContent class="grid gap-5 md:grid-cols-2">
          <div class="flex flex-col gap-2 md:col-span-2">
            <Label for="workspace-name">Workspace name</Label
            ><Input id="workspace-name" v-model="model.workspaceName" />
          </div>
          <div class="flex flex-col gap-2">
            <Label for="output-format">Default output format</Label
            ><Input id="output-format" v-model="model.defaultPromptOutputFormat" />
          </div>
          <div class="flex flex-col gap-2">
            <Label for="currency-code">Currency code</Label
            ><Input id="currency-code" v-model="model.currencyCode" maxlength="3" />
          </div>
          <div class="flex flex-col gap-2">
            <Label for="currency-culture">Currency culture</Label
            ><Input id="currency-culture" v-model="model.currencyCultureName" />
          </div> </CardContent
      ></Card>
      <Card
        ><CardHeader
          ><CardTitle>Workspace notes</CardTitle
          ><CardDescription
            >Keep operating notes and setup caveats close to the defaults.</CardDescription
          ></CardHeader
        ><CardContent
          ><div class="flex flex-col gap-2">
            <Label for="notes">Notes</Label
            ><Textarea id="notes" v-model="model.notes" class="min-h-32" /></div></CardContent
      ></Card>
      <div class="flex justify-end">
        <Button type="submit" :disabled="saving">{{ saving ? "Saving" : "Save defaults" }}</Button>
      </div>
    </form>
  </PageShell>
</template>
