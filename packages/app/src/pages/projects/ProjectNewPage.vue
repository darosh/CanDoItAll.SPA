<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Projects/Pages/ProjectsPage.razor
 * original URL     : http://localhost:5032/projects
 * original trigger : click "New project"
 * URL              : http://localhost:5173/projects/new
 */

import { computed, reactive, ref } from "vue";
import { useRouter } from "vue-router";

import PageHeader from "@/components/PageHeader.vue";
import PageShell from "@/components/PageShell.vue";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

import { saveProject } from "./api";
import { formatProjectStatus, ProjectStatus } from "./types";

const router = useRouter();

const isBusy = ref(false);
const feedback = ref<{ type: "success" | "error"; message: string } | null>(null);

const form = reactive({
  name: "",
  description: "",
  objective: "",
  status: ProjectStatus.Draft as number,
  currentPhase: "",
  targetDate: "",
});

const validationError = computed(() => {
  if (!form.name.trim()) return "Name is required.";
  return null;
});

async function create() {
  if (isBusy.value) return;
  if (validationError.value) {
    feedback.value = { type: "error", message: validationError.value };
    return;
  }
  isBusy.value = true;
  feedback.value = null;
  try {
    const newId = await saveProject({
      id: null,
      name: form.name.trim(),
      description: form.description.trim(),
      objective: form.objective.trim(),
      status: form.status,
      currentPhase: form.currentPhase.trim(),
      targetDateUtc: form.targetDate ? new Date(form.targetDate) : null,
      phases: [],
      options: [],
    });
    router.push(`/projects/${newId}`);
  } catch (e) {
    feedback.value = {
      type: "error",
      message: e instanceof Error ? e.message : "The project could not be created.",
    };
  } finally {
    isBusy.value = false;
  }
}

function cancel() {
  router.push("/projects");
}
</script>

<template>
  <PageShell>
    <PageHeader title="New project" description="Nothing is saved until you create the project." />

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
        <CardTitle>Identity</CardTitle>
      </CardHeader>
      <CardContent class="flex flex-col gap-4">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div class="flex flex-col gap-2">
            <Label for="project-name">Name</Label>
            <Input id="project-name" v-model="form.name" maxlength="200" />
          </div>
          <div class="flex flex-col gap-2">
            <Label>Status</Label>
            <Select
              :model-value="String(form.status)"
              @update:model-value="(v) => (form.status = Number(v))"
            >
              <SelectTrigger class="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem
                  v-for="status in Object.values(ProjectStatus)"
                  :key="status"
                  :value="String(status)"
                >
                  {{ formatProjectStatus(status) }}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div class="flex flex-col gap-2">
            <Label for="project-phase">Current phase</Label>
            <Input id="project-phase" v-model="form.currentPhase" maxlength="80" />
          </div>
          <div class="flex flex-col gap-2">
            <Label for="project-target-date">Target date</Label>
            <Input id="project-target-date" v-model="form.targetDate" type="date" />
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <Label for="project-description">Description</Label>
          <Textarea id="project-description" v-model="form.description" class="min-h-24" />
        </div>

        <div class="flex flex-col gap-2">
          <Label for="project-objective">Objective</Label>
          <Textarea id="project-objective" v-model="form.objective" class="min-h-24" />
        </div>
      </CardContent>
    </Card>

    <div class="flex flex-wrap items-center justify-end gap-2">
      <Button variant="outline" :disabled="isBusy" @click="cancel">Cancel</Button>
      <Button :disabled="isBusy" @click="create">Create project</Button>
    </div>
  </PageShell>
</template>
