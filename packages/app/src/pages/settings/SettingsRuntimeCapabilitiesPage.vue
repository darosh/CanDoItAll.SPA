<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/App/CanDoItAll.Web/Components/Pages/RuntimeCapabilities.razor
 * original URL     : http://localhost:5032/settings/runtime-capabilities
 * URL              : http://localhost:5173/settings/runtime-capabilities
 */

import type { HostCapabilityAvailability, HostCapabilityDescriptor } from "@candoitall/api-client";
import { RefreshCw } from "@lucide/vue";
import { onMounted, ref } from "vue";

import PageShell from "@/components/shared/PageShell.vue";
import SubNavTabs from "@/components/shared/SubNavTabs.vue";
import { Badge, type BadgeVariants } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { settingsTabs } from "@/lib/subNavTabs";

import { getRuntimeCapabilities } from "./api";

const snapshot = ref<Awaited<ReturnType<typeof getRuntimeCapabilities>> | null>(null);
const loading = ref(false);
const hasLoaded = ref(false);
const error = ref<string | null>(null);

async function load() {
  loading.value = true;
  error.value = null;
  try {
    snapshot.value = await getRuntimeCapabilities();
  } catch (cause) {
    error.value =
      cause instanceof Error ? cause.message : "Runtime capabilities could not be loaded.";
  } finally {
    loading.value = false;
    hasLoaded.value = true;
  }
}

function formatName(value: string) {
  return value.replace(/([a-z])([A-Z])/g, "$1 $2");
}

function availabilityVariant(availability: HostCapabilityAvailability): BadgeVariants["variant"] {
  if (availability === "Available") return "success";
  if (availability === "Unavailable" || availability === "Misconfigured") return "destructive";
  if (availability === "Unsupported" || availability === "Unverified") return "warning";
  return "secondary";
}

function remediationVariant(capability: HostCapabilityDescriptor): BadgeVariants["variant"] {
  if (capability.availability === "Unavailable" || capability.availability === "Misconfigured") {
    return "destructive";
  }
  if (capability.availability !== "Available" || capability.reasonCode !== "Ready")
    return "warning";
  return "secondary";
}

function formatObservedAt(value: Date) {
  return value.toLocaleString(undefined, { dateStyle: "medium", timeStyle: "medium" });
}

function implementationIdentity(capability: HostCapabilityDescriptor) {
  if (capability.implementationRegistration !== "Registered") return null;
  return capability.implementationVersion
    ? `${capability.implementationId ?? "Registered implementation"} ${capability.implementationVersion}`
    : (capability.implementationId ?? "Registered implementation");
}

onMounted(load);
</script>

<template>
  <PageShell>
    <template #tabs>
      <SubNavTabs :tabs="settingsTabs()" selected="runtime-capabilities" />
    </template>

    <div class="flex flex-wrap items-start justify-between gap-4">
      <div class="flex flex-col gap-1">
        <h1 class="text-xl font-semibold tracking-tight">Runtime capabilities</h1>
        <p class="max-w-3xl text-sm text-muted-foreground">
          Owner-reported host readiness, support level, and execution boundaries for this
          application instance.
        </p>
      </div>
      <Button size="sm" variant="outline" :disabled="loading" @click="load">
        <RefreshCw data-icon="inline-start" :class="{ 'animate-spin': loading }" />
        {{ loading ? "Refreshing" : "Refresh capabilities" }}
      </Button>
    </div>

    <template v-if="loading && !snapshot">
      <Card>
        <CardHeader>
          <Skeleton class="h-5 w-64" />
          <Skeleton class="h-4 w-96" />
        </CardHeader>
        <CardContent class="grid gap-3 sm:grid-cols-3">
          <Skeleton class="h-16" />
          <Skeleton class="h-16" />
          <Skeleton class="h-16" />
        </CardContent>
      </Card>
      <div class="grid gap-6 lg:grid-cols-2">
        <Card v-for="index in 4" :key="index">
          <CardHeader><Skeleton class="h-5 w-48" /></CardHeader>
          <CardContent class="flex flex-col gap-3">
            <Skeleton class="h-16" />
            <Skeleton class="h-16" />
          </CardContent>
        </Card>
      </div>
    </template>

    <Card v-else-if="error">
      <CardHeader>
        <CardTitle>Capabilities unavailable</CardTitle>
        <CardDescription>{{ error }}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button size="sm" variant="outline" @click="load">
          <RefreshCw data-icon="inline-start" />
          Try again
        </Button>
      </CardContent>
    </Card>

    <template v-else-if="snapshot">
      <Card>
        <CardHeader>
          <div class="flex flex-wrap items-start justify-between gap-3">
            <div class="flex flex-col gap-1">
              <CardTitle>{{
                snapshot.isReady
                  ? "Mandatory runtime capabilities are ready."
                  : "Startup is blocked by a mandatory runtime capability."
              }}</CardTitle>
              <CardDescription>
                Profile {{ formatName(snapshot.profile) }} · operating system
                {{ formatName(snapshot.operatingSystem) }} ·
                {{ snapshot.isInteractive ? "interactive" : "headless" }}
              </CardDescription>
            </div>
            <Badge :variant="snapshot.isReady ? 'success' : 'destructive'">
              {{ snapshot.isReady ? "Ready" : "Blocked" }}
            </Badge>
          </div>
        </CardHeader>
        <CardContent class="grid gap-4 text-sm sm:grid-cols-3">
          <div class="flex flex-col gap-1">
            <span class="text-muted-foreground">Host profile</span
            ><span class="font-medium">{{ formatName(snapshot.profile) }}</span>
          </div>
          <div class="flex flex-col gap-1">
            <span class="text-muted-foreground">Capabilities</span
            ><span class="font-medium">{{ snapshot.capabilities.length }}</span>
          </div>
          <div class="flex flex-col gap-1">
            <span class="text-muted-foreground">Observed</span
            ><span class="font-medium">{{ formatObservedAt(snapshot.observedAtUtc) }}</span>
          </div>
        </CardContent>
      </Card>

      <div
        v-if="snapshot.capabilities.length === 0"
        class="py-12 text-center text-sm text-muted-foreground"
      >
        This runtime did not report any capabilities.
      </div>

      <div v-else class="grid gap-6 lg:grid-cols-2" data-testid="runtime-capability-grid">
        <Card
          v-for="capability in snapshot.capabilities"
          :key="capability.id"
          :data-testid="`runtime-capability-${capability.id.toLowerCase()}`"
        >
          <CardHeader>
            <div class="flex flex-wrap items-start justify-between gap-3">
              <div class="flex flex-col gap-1">
                <p class="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {{ capability.criticality }}
                </p>
                <CardTitle>{{ formatName(capability.id) }}</CardTitle>
              </div>
              <div class="flex flex-wrap gap-2">
                <Badge :variant="availabilityVariant(capability.availability)">{{
                  capability.availability
                }}</Badge>
                <Badge variant="outline">{{ formatName(capability.supportLevel) }}</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent class="flex flex-col gap-5">
            <dl class="grid gap-4 text-sm sm:grid-cols-2">
              <div class="flex flex-col gap-1">
                <dt class="text-muted-foreground">Reason</dt>
                <dd>{{ formatName(capability.reasonCode) }}</dd>
              </div>
              <div class="flex flex-col gap-1">
                <dt class="text-muted-foreground">Execution boundary</dt>
                <dd>{{ formatName(capability.executionBoundary) }}</dd>
              </div>
              <div class="flex flex-col gap-1">
                <dt class="text-muted-foreground">Implementation</dt>
                <dd>{{ formatName(capability.implementationRegistration) }}</dd>
              </div>
              <div class="flex flex-col gap-1">
                <dt class="text-muted-foreground">Observed</dt>
                <dd>{{ formatObservedAt(capability.observedAtUtc) }}</dd>
              </div>
              <div
                v-if="implementationIdentity(capability)"
                class="flex flex-col gap-1 sm:col-span-2"
              >
                <dt class="text-muted-foreground">Implementation identity</dt>
                <dd class="break-all">{{ implementationIdentity(capability) }}</dd>
              </div>
            </dl>
            <div class="flex flex-col gap-2 rounded-md border bg-muted/40 p-4 text-sm">
              <Badge :variant="remediationVariant(capability)">Remediation</Badge>
              <p class="text-muted-foreground">{{ capability.remediation }}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </template>

    <p v-else-if="hasLoaded" class="py-12 text-center text-sm text-muted-foreground">
      Runtime capabilities are unavailable.
    </p>
  </PageShell>
</template>
