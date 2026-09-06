// The generated @candoitall/api-client now carries the real prompt-gallery
// response/request shapes (see CLAUDE.md's "API client generation" section for
// how the backend's OpenAPI annotations were fixed to make this possible). This
// file only supplies the label/enum layer the generated client can't: the
// backend serializes every prompt-gallery enum as a plain number with no
// `JsonStringEnumConverter`, so there are no generated string unions to import.

import type { PromptGallerySearchItem } from "@candoitall/api-client";

export const PromptKind = {
  FullPrompt: 0,
  Part: 1,
} as const;
export type PromptKind = (typeof PromptKind)[keyof typeof PromptKind];

export const PromptStatus = {
  Draft: 0,
  Final: 1,
} as const;
export type PromptStatus = (typeof PromptStatus)[keyof typeof PromptStatus];

export const PromptGalleryConsumer = {
  Workflow: 0,
  AgentRuntime: 1,
  Chat: 2,
  ProjectWorkbench: 3,
} as const;
export type PromptGalleryConsumer =
  (typeof PromptGalleryConsumer)[keyof typeof PromptGalleryConsumer];

export const PromptCompatibilityIssueCode = {
  Archived: 0,
  MissingFinalVersion: 1,
  ConsumerNotSupported: 2,
  ItemKindMismatch: 3,
  ProviderModelNotSupported: 4,
} as const;
export type PromptCompatibilityIssueCode =
  (typeof PromptCompatibilityIssueCode)[keyof typeof PromptCompatibilityIssueCode];

export function formatKind(kind: number): string {
  return kind === PromptKind.Part ? "Prompt part" : "Full prompt";
}

export function formatConsumer(consumer: number): string {
  switch (consumer) {
    case PromptGalleryConsumer.Workflow:
      return "Workflow";
    case PromptGalleryConsumer.AgentRuntime:
      return "Agent runtime";
    case PromptGalleryConsumer.Chat:
      return "Chat";
    case PromptGalleryConsumer.ProjectWorkbench:
      return "Project workbench";
    default:
      return `Consumer ${consumer}`;
  }
}

export function formatWarningIssue(issueCode: number): string {
  switch (issueCode) {
    case PromptCompatibilityIssueCode.ItemKindMismatch:
      return "item-kind warnings";
    case PromptCompatibilityIssueCode.ProviderModelNotSupported:
      return "provider/model warnings";
    case PromptCompatibilityIssueCode.Archived:
      return "archived warnings";
    case PromptCompatibilityIssueCode.MissingFinalVersion:
      return "missing-final-version warnings";
    case PromptCompatibilityIssueCode.ConsumerNotSupported:
      return "consumer warnings";
    default:
      return `issue ${issueCode} warnings`;
  }
}

export function totalPages(totalCount: number, pageSize: number): number {
  return totalCount === 0 ? 0 : Math.ceil(totalCount / pageSize);
}

export interface PromptGalleryQuery {
  text?: string;
  tags?: string[];
  kind?: PromptKind;
  status?: PromptStatus;
  includeArchived?: boolean;
  favoritesOnly?: boolean;
  pageIndex?: number;
  pageSize?: number;
}

export type { PromptGallerySearchItem };
