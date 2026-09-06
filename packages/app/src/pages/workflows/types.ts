// Label/enum layer the generated @candoitall/api-client can't supply: the backend serializes
// every workflow enum as a plain number with no `JsonStringEnumConverter`. Ordinals verified
// verbatim against CanDoItAll/src/MAF/Common/CanDoItAll.AgentFramework.Models/Workflows/{
// WorkflowModels.cs,WorkflowExecutorModels.cs} and
// CanDoItAll/src/Foundation/CanDoItAll.SharedKernel/Configuration/ConfigurationSchema.cs — not
// guessed. See pages/prompts/types.ts for the established convention this mirrors.

export const WorkflowNodeKind = {
  Start: 0,
  LlmCall: 1,
  Triage: 2,
  StrictLogic: 3,
  Executor: 4,
  Artifact: 5,
  HumanInput: 6,
  AgentStep: 7,
  Subworkflow: 8,
  End: 9,
} as const;
export type WorkflowNodeKind = (typeof WorkflowNodeKind)[keyof typeof WorkflowNodeKind];

export const WorkflowEdgeKind = {
  Direct: 0,
  Conditional: 1,
  FanOut: 2,
  FanIn: 3,
} as const;
export type WorkflowEdgeKind = (typeof WorkflowEdgeKind)[keyof typeof WorkflowEdgeKind];

export const WorkflowRouteKind = {
  Always: 0,
  Predicate: 1,
  SwitchCase: 2,
  SwitchDefault: 3,
  FanOutSelector: 4,
} as const;
export type WorkflowRouteKind = (typeof WorkflowRouteKind)[keyof typeof WorkflowRouteKind];

export const WorkflowRouteOperator = {
  Exists: 0,
  DoesNotExist: 1,
  Equals: 2,
  NotEquals: 3,
  Contains: 4,
  StartsWith: 5,
  EndsWith: 6,
  GreaterThan: 7,
  GreaterThanOrEqual: 8,
  LessThan: 9,
  LessThanOrEqual: 10,
  IsTruthy: 11,
  IsFalsy: 12,
} as const;
export type WorkflowRouteOperator =
  (typeof WorkflowRouteOperator)[keyof typeof WorkflowRouteOperator];

export const WorkflowRouteValueKind = {
  String: 0,
  Number: 1,
  Boolean: 2,
  Null: 3,
  Json: 4,
} as const;
export type WorkflowRouteValueKind =
  (typeof WorkflowRouteValueKind)[keyof typeof WorkflowRouteValueKind];

export const WorkflowPortDirection = {
  Input: 0,
  Output: 1,
} as const;
export type WorkflowPortDirection =
  (typeof WorkflowPortDirection)[keyof typeof WorkflowPortDirection];

export const WorkflowValueShapeKind = {
  Text: 0,
  Json: 1,
  Object: 2,
  Boolean: 3,
  Number: 4,
  FileReference: 5,
  ArtifactReference: 6,
} as const;
export type WorkflowValueShapeKind =
  (typeof WorkflowValueShapeKind)[keyof typeof WorkflowValueShapeKind];

export const WorkflowLifecycleStatus = {
  Draft: 0,
  Active: 1,
  Suspended: 2,
  Archived: 3,
} as const;
export type WorkflowLifecycleStatus =
  (typeof WorkflowLifecycleStatus)[keyof typeof WorkflowLifecycleStatus];

export const WorkflowRuntimeBackendKind = {
  InProcess: 0,
  DurableTask: 1,
  AzureFunctions: 2,
} as const;
export type WorkflowRuntimeBackendKind =
  (typeof WorkflowRuntimeBackendKind)[keyof typeof WorkflowRuntimeBackendKind];

export const ConfigurationFieldType = {
  Text: 0,
  Url: 1,
  Number: 2,
  Boolean: 3,
  Json: 4,
  SecretReference: 5,
  Select: 6,
  MultilineText: 7,
  Guid: 8,
} as const;
export type ConfigurationFieldType =
  (typeof ConfigurationFieldType)[keyof typeof ConfigurationFieldType];

export const ConfigurationNumberKind = {
  Int32: 0,
  Int64: 1,
  Decimal: 2,
  Double: 3,
} as const;
export type ConfigurationNumberKind =
  (typeof ConfigurationNumberKind)[keyof typeof ConfigurationNumberKind];

export const WorkflowExecutorAvailabilityKind = {
  Available: 0,
  Planned: 1,
  Disabled: 2,
  Unavailable: 3,
  Incompatible: 4,
} as const;
export type WorkflowExecutorAvailabilityKind =
  (typeof WorkflowExecutorAvailabilityKind)[keyof typeof WorkflowExecutorAvailabilityKind];

export const WorkflowExecutorSideEffectKind = {
  None: 0,
  WorkspaceRead: 1,
  WorkspaceWrite: 2,
  ExternalRead: 3,
  ExternalWrite: 4,
} as const;
export type WorkflowExecutorSideEffectKind =
  (typeof WorkflowExecutorSideEffectKind)[keyof typeof WorkflowExecutorSideEffectKind];

export const WorkflowExternalRequestKind = {
  HumanInput: 0,
  Approval: 1,
  ToolApproval: 2,
} as const;
export type WorkflowExternalRequestKind =
  (typeof WorkflowExternalRequestKind)[keyof typeof WorkflowExternalRequestKind];

export function formatExternalRequestKind(kind: number): string {
  switch (kind) {
    case WorkflowExternalRequestKind.HumanInput:
      return "Human input";
    case WorkflowExternalRequestKind.Approval:
      return "Approval";
    case WorkflowExternalRequestKind.ToolApproval:
      return "Tool approval";
    default:
      return `Request kind ${kind}`;
  }
}

export const WorkflowExecutorSettingsPresentationMode = {
  Schema: 0,
  CustomRenderer: 1,
} as const;
export type WorkflowExecutorSettingsPresentationMode =
  (typeof WorkflowExecutorSettingsPresentationMode)[keyof typeof WorkflowExecutorSettingsPresentationMode];

export function formatNodeKind(kind: number): string {
  switch (kind) {
    case WorkflowNodeKind.Start:
      return "Start";
    case WorkflowNodeKind.LlmCall:
      return "LLM call";
    case WorkflowNodeKind.Triage:
      return "Triage";
    case WorkflowNodeKind.StrictLogic:
      return "Logic";
    case WorkflowNodeKind.Executor:
      return "Executor";
    case WorkflowNodeKind.Artifact:
      return "Artifact";
    case WorkflowNodeKind.HumanInput:
      return "Human input";
    case WorkflowNodeKind.AgentStep:
      return "Agent step";
    case WorkflowNodeKind.Subworkflow:
      return "Subworkflow";
    case WorkflowNodeKind.End:
      return "End";
    default:
      return `Kind ${kind}`;
  }
}

export function formatEdgeKind(kind: number): string {
  switch (kind) {
    case WorkflowEdgeKind.Direct:
      return "Direct";
    case WorkflowEdgeKind.Conditional:
      return "Conditional";
    case WorkflowEdgeKind.FanOut:
      return "Fan-out";
    case WorkflowEdgeKind.FanIn:
      return "Fan-in";
    default:
      return `Edge kind ${kind}`;
  }
}

export function formatRouteKind(kind: number): string {
  switch (kind) {
    case WorkflowRouteKind.Always:
      return "Always";
    case WorkflowRouteKind.Predicate:
      return "Predicate";
    case WorkflowRouteKind.SwitchCase:
      return "Switch case";
    case WorkflowRouteKind.SwitchDefault:
      return "Switch default";
    case WorkflowRouteKind.FanOutSelector:
      return "Fan-out selector";
    default:
      return `Route kind ${kind}`;
  }
}

export function formatRouteOperator(operator: number): string {
  switch (operator) {
    case WorkflowRouteOperator.Exists:
      return "exists";
    case WorkflowRouteOperator.DoesNotExist:
      return "does not exist";
    case WorkflowRouteOperator.Equals:
      return "equals";
    case WorkflowRouteOperator.NotEquals:
      return "not equals";
    case WorkflowRouteOperator.Contains:
      return "contains";
    case WorkflowRouteOperator.StartsWith:
      return "starts with";
    case WorkflowRouteOperator.EndsWith:
      return "ends with";
    case WorkflowRouteOperator.GreaterThan:
      return "greater than";
    case WorkflowRouteOperator.GreaterThanOrEqual:
      return "greater than or equal";
    case WorkflowRouteOperator.LessThan:
      return "less than";
    case WorkflowRouteOperator.LessThanOrEqual:
      return "less than or equal";
    case WorkflowRouteOperator.IsTruthy:
      return "is truthy";
    case WorkflowRouteOperator.IsFalsy:
      return "is falsy";
    default:
      return `operator ${operator}`;
  }
}

export function formatValueShapeKind(kind: number): string {
  switch (kind) {
    case WorkflowValueShapeKind.Text:
      return "Text";
    case WorkflowValueShapeKind.Json:
      return "JSON";
    case WorkflowValueShapeKind.Object:
      return "Object";
    case WorkflowValueShapeKind.Boolean:
      return "Boolean";
    case WorkflowValueShapeKind.Number:
      return "Number";
    case WorkflowValueShapeKind.FileReference:
      return "File reference";
    case WorkflowValueShapeKind.ArtifactReference:
      return "Artifact reference";
    default:
      return `Shape ${kind}`;
  }
}

export function formatLifecycleStatus(status: number): string {
  switch (status) {
    case WorkflowLifecycleStatus.Draft:
      return "Draft";
    case WorkflowLifecycleStatus.Active:
      return "Active";
    case WorkflowLifecycleStatus.Suspended:
      return "Suspended";
    case WorkflowLifecycleStatus.Archived:
      return "Archived";
    default:
      return `Status ${status}`;
  }
}

export function formatRuntimeBackend(kind: number): string {
  switch (kind) {
    case WorkflowRuntimeBackendKind.InProcess:
      return "InProcess";
    case WorkflowRuntimeBackendKind.DurableTask:
      return "DurableTask";
    case WorkflowRuntimeBackendKind.AzureFunctions:
      return "AzureFunctions";
    default:
      return `Backend ${kind}`;
  }
}

export function formatExecutorAvailability(kind: number): string {
  switch (kind) {
    case WorkflowExecutorAvailabilityKind.Available:
      return "Available";
    case WorkflowExecutorAvailabilityKind.Planned:
      return "Planned";
    case WorkflowExecutorAvailabilityKind.Disabled:
      return "Disabled";
    case WorkflowExecutorAvailabilityKind.Unavailable:
      return "Unavailable";
    case WorkflowExecutorAvailabilityKind.Incompatible:
      return "Incompatible";
    default:
      return `Availability ${kind}`;
  }
}

export function formatSideEffectKind(kind: number): string {
  switch (kind) {
    case WorkflowExecutorSideEffectKind.None:
      return "No side effects";
    case WorkflowExecutorSideEffectKind.WorkspaceRead:
      return "Reads workspace";
    case WorkflowExecutorSideEffectKind.WorkspaceWrite:
      return "Writes workspace";
    case WorkflowExecutorSideEffectKind.ExternalRead:
      return "Reads external data";
    case WorkflowExecutorSideEffectKind.ExternalWrite:
      return "Writes external data";
    default:
      return `Side effect ${kind}`;
  }
}

/**
 * Mirrors the old .NET app's `PromptGallerySelection` (a full content snapshot, not just an id)
 * so a picked prompt's content can be copied directly into a node's `instructions` field.
 */
export interface PromptGallerySelection {
  artifactId: string;
  versionId: string | null;
  title: string;
  instructions: string;
  supportedModels: string[];
}
