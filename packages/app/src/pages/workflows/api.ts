import type {
  ApiErrorResponse,
  LlmCallComponent,
  LlmCallComponentSaveRequest,
  WorkflowDefinition,
  WorkflowDefinitionDetail,
  WorkflowDefinitionSaveRequest,
  WorkflowExecutorDescriptor,
  WorkflowProviderOption,
  WorkflowTestRunRequest,
  WorkflowTestRunResult,
  WorkflowValidationResult,
} from "@candoitall/api-client";

import { apiClient } from "@/lib/api-client";

function isApiError(value: unknown): value is ApiErrorResponse {
  return !!value && typeof value === "object" && "errors" in value;
}

function unwrap<T>(result: T | ApiErrorResponse): T {
  if (isApiError(result)) {
    const message = result.errors.map((error) => error.message).join(" ") || "Request failed.";
    throw new Error(message);
  }
  return result;
}

export function friendlyErrorMessage(e: unknown, fallback: string): string {
  const message = e instanceof Error ? e.message : fallback;
  return message.includes("concurrency-conflict")
    ? "This workflow was changed elsewhere — reload to see the latest version before saving again."
    : message;
}

export async function getWorkflowDefinition(workflowId: string): Promise<WorkflowDefinitionDetail> {
  const result = await apiClient.getWorkflowDefinition(workflowId);
  return unwrap(result);
}

export async function getWorkflowDefinitionVersion(
  workflowId: string,
  versionId: string,
): Promise<WorkflowDefinitionDetail> {
  const result = await apiClient.getWorkflowDefinitionVersion(workflowId, versionId);
  return unwrap(result);
}

export async function saveWorkflowDefinition(
  request: WorkflowDefinitionSaveRequest,
): Promise<WorkflowDefinition> {
  const result = await apiClient.saveWorkflowDefinition(request);
  return unwrap(result);
}

export async function listWorkflowExecutorCatalog(): Promise<WorkflowExecutorDescriptor[]> {
  return apiClient.listWorkflowExecutorCatalog();
}

export async function listWorkflowProviderOptions(): Promise<WorkflowProviderOption[]> {
  return apiClient.listWorkflowProviderOptions();
}

export async function listWorkflowComponents(): Promise<LlmCallComponent[]> {
  return apiClient.listWorkflowComponents();
}

export async function getWorkflowComponent(componentId: string): Promise<LlmCallComponent> {
  const result = await apiClient.getWorkflowComponent(componentId);
  return unwrap(result);
}

export async function saveWorkflowComponent(
  request: LlmCallComponentSaveRequest,
): Promise<LlmCallComponent> {
  const result = await apiClient.saveWorkflowComponent(request);
  return unwrap(result);
}

export async function deleteWorkflowComponent(componentId: string): Promise<void> {
  await apiClient.deleteWorkflowComponent(componentId);
}

export async function validateSavedWorkflowDefinition(
  workflowId: string,
): Promise<WorkflowValidationResult> {
  const result = await apiClient.validateSavedWorkflowDefinition(workflowId);
  return unwrap(result);
}

export async function validateDraftWorkflowDefinition(
  definition: WorkflowDefinition,
): Promise<WorkflowValidationResult> {
  return apiClient.validateDraftWorkflowDefinition(definition);
}

export async function runWorkflowTest(
  request: WorkflowTestRunRequest,
): Promise<WorkflowTestRunResult> {
  return apiClient.runWorkflowTest(request);
}

/**
 * Validate/test-run endpoints need a full `WorkflowDefinition` (id, versionId, createdAtUtc,
 * updatedAtUtc), which the editable in-memory draft doesn't track. Backfills those from the last
 * definition loaded from the server — fine for a preview/validate call, which never persists.
 */
export function toDraftDefinition(
  draft: Pick<
    WorkflowDefinition,
    "name" | "description" | "status" | "graph" | "runtimePolicy" | "inputParameters"
  >,
  loaded: WorkflowDefinition,
): WorkflowDefinition {
  return {
    ...loaded,
    name: draft.name,
    description: draft.description,
    status: draft.status,
    graph: draft.graph,
    runtimePolicy: draft.runtimePolicy,
    inputParameters: draft.inputParameters,
  };
}
