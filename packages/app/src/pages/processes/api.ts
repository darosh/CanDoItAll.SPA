import type {
  ApiErrorResponse,
  ProcessDefinitionCatalogItemProjection,
  ProcessDefinitionEditorProjection,
  ProcessDefinitionRoleEditorProjection,
  ProcessDefinitionStepEditorProjection,
} from "@candoitall/api-client";

import { apiClient } from "@/lib/api-client";

import type { ProcessDefinitionCatalogQuery } from "./types";

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

export async function listProcessDefinitions(
  query: ProcessDefinitionCatalogQuery,
): Promise<ProcessDefinitionCatalogItemProjection[]> {
  const result = await apiClient.listProcessDefinitions({
    searchText: query.searchText,
    scopeFilter: query.scopeFilter,
  });
  return unwrap(result).items;
}

export async function getProcessDefinition(
  definitionKey: string,
): Promise<ProcessDefinitionEditorProjection> {
  const result = await apiClient.getProcessDefinition(definitionKey);
  return unwrap(result);
}

export async function getProcessDefinitionRoles(
  definitionKey: string,
): Promise<ProcessDefinitionRoleEditorProjection> {
  const result = await apiClient.getProcessDefinitionRoles(definitionKey);
  return unwrap(result);
}

export async function getProcessDefinitionSteps(
  definitionKey: string,
): Promise<ProcessDefinitionStepEditorProjection> {
  const result = await apiClient.getProcessDefinitionSteps(definitionKey);
  return unwrap(result);
}
