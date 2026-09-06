import type {
  ApiErrorResponse,
  PromptGalleryConsumerContext,
  PromptGalleryDraft,
  PromptGalleryItemDetails,
  PromptGalleryPageOfPromptGallerySearchItem,
  PromptCompatibilityResult,
  PromptDraftSaveReceipt,
  PromptVersionCreateRequest,
  PromptVersionSnapshot,
} from "@candoitall/api-client";

import { apiClient } from "@/lib/api-client";

import type { PromptGalleryQuery } from "./types";

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

export async function searchPrompts(
  query: PromptGalleryQuery,
): Promise<PromptGalleryPageOfPromptGallerySearchItem> {
  const result = await apiClient.searchPromptGalleryItems({
    text: query.text,
    tag: query.tags,
    kind: query.kind,
    status: query.status,
    includeArchived: query.includeArchived,
    favoritesOnly: query.favoritesOnly,
    pageIndex: query.pageIndex,
    pageSize: query.pageSize,
  });
  return unwrap(result);
}

export async function getPrompt(promptId: string): Promise<PromptGalleryItemDetails> {
  const result = await apiClient.getPromptGalleryItem(promptId);
  return unwrap(result);
}

export async function saveDraft(draft: PromptGalleryDraft): Promise<PromptDraftSaveReceipt> {
  const result = await apiClient.savePromptGalleryDraft(draft);
  return unwrap(result);
}

export async function createVersion(
  promptId: string,
  request: PromptVersionCreateRequest,
): Promise<PromptVersionSnapshot> {
  const result = await apiClient.createPromptGalleryVersion(promptId, request);
  return unwrap(result);
}

export async function getVersion(
  promptId: string,
  versionId: string,
): Promise<PromptVersionSnapshot> {
  const result = await apiClient.getPromptGalleryVersion(promptId, versionId);
  return unwrap(result);
}

export async function archivePrompt(promptId: string, archived: boolean): Promise<void> {
  const result = await apiClient.archivePromptGalleryItem(promptId, { archived });
  unwrap(result);
}

export async function setFavorite(promptId: string, favorite: boolean): Promise<void> {
  const result = await apiClient.setPromptGalleryFavorite(promptId, { favorite });
  unwrap(result);
}

export async function evaluateCompatibility(
  promptArtifactId: string,
  context: PromptGalleryConsumerContext,
): Promise<PromptCompatibilityResult> {
  const result = await apiClient.evaluatePromptGalleryCompatibility({
    promptArtifactId,
    context,
  });
  return unwrap(result);
}

export async function setWarningSuppression(
  promptArtifactId: string,
  consumer: number,
  issueCode: number,
  suppressed: boolean,
): Promise<void> {
  const result = await apiClient.setPromptGalleryWarningSuppression({
    promptArtifactId,
    consumer,
    issueCode,
    suppressed,
  });
  unwrap(result);
}
