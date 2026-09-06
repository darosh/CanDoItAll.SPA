<script setup lang="ts">
import type {
  ApiAccessStatus,
  ApiTokenIssueRequest,
  ApiTokenIssueResult,
} from "@candoitall/api-client";
import { onMounted, ref } from "vue";

import PageShell from "@/components/PageShell.vue";
import SubNavTabs from "@/components/SubNavTabs.vue";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { apiClient } from "@/lib/api-client";
import { settingsTabs } from "@/lib/subNavTabs";

const status = ref<ApiAccessStatus | null>(null);
const issued = ref<ApiTokenIssueResult | null>(null);
const error = ref<string | null>(null);
const loading = ref(true);
const issuing = ref(false);
const token = ref<ApiTokenIssueRequest>({
  subject: "api-client",
  displayName: "API client",
  scopes: ["api"],
});
async function load() {
  loading.value = true;
  error.value = null;
  try {
    status.value = await apiClient.getApiAccessStatus();
    token.value.lifetimeMinutes = status.value.defaultTokenLifetimeMinutes;
  } catch (e) {
    error.value = e instanceof Error ? e.message : "API access status could not be loaded.";
  } finally {
    loading.value = false;
  }
}
async function issue() {
  issuing.value = true;
  error.value = null;
  try {
    issued.value = await apiClient.issueApiToken(token.value);
  } catch (e) {
    error.value = e instanceof Error ? e.message : "Token could not be created.";
  } finally {
    issuing.value = false;
  }
}
onMounted(load);
</script>

<template>
  <PageShell
    ><template #tabs><SubNavTabs :tabs="settingsTabs()" selected="api-access" /></template>
    <div class="flex flex-col gap-1">
      <h1 class="text-xl font-semibold">API access</h1>
      <p class="text-sm text-muted-foreground">
        Control the local API surface and create JWT bearer tokens when authorization is active.
      </p>
    </div>
    <p v-if="loading" class="text-sm text-muted-foreground">Loading API access settings&hellip;</p>
    <Card v-else-if="error"
      ><CardHeader
        ><CardTitle>API access unavailable</CardTitle
        ><CardDescription>{{ error }}</CardDescription></CardHeader
      ><CardContent
        ><Button size="sm" variant="outline" @click="load">Try again</Button></CardContent
      ></Card
    >
    <template v-else-if="status"
      ><Card
        ><CardHeader
          ><CardTitle>API access</CardTitle
          ><CardDescription
            >Local API availability and authorization requirements.</CardDescription
          ></CardHeader
        ><CardContent class="grid gap-6 md:grid-cols-2"
          ><div class="flex flex-col gap-2">
            <span class="text-xs font-medium uppercase text-muted-foreground">API</span
            ><Badge :variant="status.apiEnabled ? 'success' : 'warning'">{{
              status.apiEnabled ? "Enabled" : "Disabled"
            }}</Badge>
            <p class="text-sm text-muted-foreground">
              OpenAPI:
              {{
                status.openApiEnabled ? "/openapi/v1.json and /swagger/v1/swagger.json" : "Disabled"
              }}
            </p>
          </div>
          <div class="flex flex-col gap-2">
            <span class="text-xs font-medium uppercase text-muted-foreground">Authorization</span
            ><Badge :variant="status.authorizationEnabled ? 'warning' : 'secondary'">{{
              status.authorizationEnabled ? "JWT required" : "JWT disabled"
            }}</Badge>
            <p class="text-sm text-muted-foreground">
              {{
                status.authorizationEnabled
                  ? `Issuer: ${status.issuer} / Audience: ${status.audience}`
                  : "Bearer tokens are not required."
              }}
            </p>
          </div></CardContent
        ></Card
      >
      <Card v-if="status.authorizationEnabled && status.signingKeyConfigured"
        ><CardHeader
          ><CardTitle>Create token</CardTitle
          ><CardDescription
            >Maximum lifetime: {{ status.maxTokenLifetimeMinutes }} minutes.</CardDescription
          ></CardHeader
        ><CardContent
          ><form class="grid gap-5 md:grid-cols-2" @submit.prevent="issue">
            <div class="flex flex-col gap-2">
              <Label for="subject">Subject</Label><Input id="subject" v-model="token.subject" />
            </div>
            <div class="flex flex-col gap-2">
              <Label for="name">Display name</Label><Input id="name" v-model="token.displayName" />
            </div>
            <div class="flex flex-col gap-2">
              <Label for="lifetime">Lifetime minutes</Label
              ><Input id="lifetime" v-model.number="token.lifetimeMinutes" type="number" />
            </div>
            <div class="flex flex-col gap-2">
              <Label for="scopes">Scopes</Label
              ><Input
                id="scopes"
                :model-value="token.scopes.join(', ')"
                @update:model-value="token.scopes = String($event).split(/[ ,]+/).filter(Boolean)"
              />
            </div>
            <div class="md:col-span-2">
              <Button type="submit" :disabled="issuing">{{
                issuing ? "Creating" : "Create token"
              }}</Button>
            </div>
          </form></CardContent
        ></Card
      >
      <Card v-else
        ><CardHeader
          ><CardTitle>{{
            status.authorizationEnabled ? "Signing key required" : "JWT authorization is disabled"
          }}</CardTitle
          ><CardDescription>{{
            status.authorizationEnabled
              ? "Configure Api:Authorization:SigningKey with at least 32 UTF-8 bytes before creating tokens."
              : "API requests do not need bearer tokens until authorization is enabled."
          }}</CardDescription></CardHeader
        ></Card
      >
      <Card v-if="issued"
        ><CardHeader
          ><CardTitle>Token created for {{ issued.displayName }}</CardTitle
          ><CardDescription
            >Expires {{ issued.expiresAtUtc.toLocaleString() }}</CardDescription
          ></CardHeader
        ><CardContent
          ><Textarea :model-value="issued.token" readonly class="min-h-32" /></CardContent
      ></Card> </template
  ></PageShell>
</template>
