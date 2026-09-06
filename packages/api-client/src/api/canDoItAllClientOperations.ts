import { parse } from "uri-template";
import { CanDoItAllClientContext } from "./canDoItAllClientContext.js";
import { createRestError } from "../helpers/error.js";
import type { OperationOptions } from "../helpers/interfaces.js";
import {
  dateDeserializer,
  dateRfc3339Serializer,
  jsonAgentChatApiRequestToTransportTransform,
  jsonAgentChatAttachmentStagingResultToApplicationTransform,
  jsonAgentChatPageBootstrapApiResponseToApplicationTransform,
  jsonAgentChatRunApiResponseToApplicationTransform,
  jsonAgentChatRuntimeApiResponseToApplicationTransform,
  jsonAgentChatSessionApiResponseToApplicationTransform,
  jsonAgentChatWorkspaceApiResponseToApplicationTransform,
  jsonAgentCloneApiRequestToTransportTransform,
  jsonAgentEditorModelToTransportTransform,
  jsonAgentExecutionRunApiRequestToTransportTransform,
  jsonAgentExecutionRunDetailApiResponseToApplicationTransform,
  jsonAgentExecutionRunResultApiResponseToApplicationTransform,
  jsonAgentExecutionRunStartApiRequestToTransportTransform,
  jsonAgentExternalProvisioningReceiptToApplicationTransform,
  jsonAgentExternalProvisioningResourceToApplicationTransform,
  jsonAgentImportApiRequestToTransportTransform,
  jsonAgentPackageImportReceiptToApplicationTransform,
  jsonAgentProviderFailureCategoryToApplicationTransform,
  jsonAgentRecruitingCandidateReadinessToApplicationTransform,
  jsonAgentRecruitingInterviewToApplicationTransform,
  jsonAgentTeamEditorModelToTransportTransform,
  jsonAgentTeamMembersApiRequestToTransportTransform,
  jsonAgentTemplateConversionApiRequestToTransportTransform,
  jsonApiAccessStatusToApplicationTransform,
  jsonApiAckToApplicationTransform,
  jsonApiErrorResponseToApplicationTransform,
  jsonApiTokenIssueRequestToTransportTransform,
  jsonApiTokenIssueResultToApplicationTransform,
  jsonAppendAgentRecruitingAttemptCommandToTransportTransform,
  jsonAppendAgentRecruitingReviewCommandToTransportTransform,
  jsonArrayAgentChatSessionApiResponseToApplicationTransform,
  jsonArrayAgentDefinitionToApplicationTransform,
  jsonArrayAgentExecutionApprovalApiResponseToApplicationTransform,
  jsonArrayAgentExecutionArtifactApiResponseToApplicationTransform,
  jsonArrayAgentExecutionCheckpointApiResponseToApplicationTransform,
  jsonArrayAgentExecutionLogApiResponseToApplicationTransform,
  jsonArrayAgentExecutionRunApiResponseToApplicationTransform,
  jsonArrayAgentExecutionToolReceiptApiResponseToApplicationTransform,
  jsonArrayAgentRecruitingAttemptToApplicationTransform,
  jsonArrayAgentRecruitingHumanReviewToApplicationTransform,
  jsonArrayAgentRecruitingInterviewToApplicationTransform,
  jsonArrayAgentRunMetricApiResponseToApplicationTransform,
  jsonArrayApiErrorItemToApplicationTransform,
  jsonArrayLlmCallComponentToApplicationTransform,
  jsonArrayLlmChatInvocationAttemptApiResponseToApplicationTransform,
  jsonArrayLlmChatMessageApiResponseToApplicationTransform,
  jsonArrayLlmChatProviderOptionApiResponseToApplicationTransform,
  jsonArrayMemoryProviderProfileApiResponseToApplicationTransform,
  jsonArrayProjectAccessListItemToApplicationTransform,
  jsonArrayProjectDeletionCompletionNoticeToApplicationTransform,
  jsonArrayProjectDeletionPendingCleanupToApplicationTransform,
  jsonArrayProjectHierarchyLinkSummaryToApplicationTransform,
  jsonArrayProjectSummaryToApplicationTransform,
  jsonArrayProviderProfileToApplicationTransform,
  jsonArrayStringToApplicationTransform,
  jsonArrayStringToTransportTransform,
  jsonArrayToApplicationTransform,
  jsonArrayToApplicationTransform_14 as jsonArrayToApplicationTransform_10,
  jsonArrayToApplicationTransform_15 as jsonArrayToApplicationTransform_11,
  jsonArrayToApplicationTransform_16 as jsonArrayToApplicationTransform_12,
  jsonArrayToApplicationTransform_17 as jsonArrayToApplicationTransform_13,
  jsonArrayToApplicationTransform_18 as jsonArrayToApplicationTransform_14,
  jsonArrayToApplicationTransform_19 as jsonArrayToApplicationTransform_15,
  jsonArrayToApplicationTransform_21 as jsonArrayToApplicationTransform_16,
  jsonArrayToApplicationTransform_22 as jsonArrayToApplicationTransform_17,
  jsonArrayToApplicationTransform_23 as jsonArrayToApplicationTransform_18,
  jsonArrayToApplicationTransform_24 as jsonArrayToApplicationTransform_19,
  jsonArrayToApplicationTransform_5 as jsonArrayToApplicationTransform_2,
  jsonArrayToApplicationTransform_25 as jsonArrayToApplicationTransform_20,
  jsonArrayToApplicationTransform_27 as jsonArrayToApplicationTransform_21,
  jsonArrayToApplicationTransform_30 as jsonArrayToApplicationTransform_22,
  jsonArrayToApplicationTransform_6 as jsonArrayToApplicationTransform_3,
  jsonArrayToApplicationTransform_7 as jsonArrayToApplicationTransform_4,
  jsonArrayToApplicationTransform_9 as jsonArrayToApplicationTransform_5,
  jsonArrayToApplicationTransform_10 as jsonArrayToApplicationTransform_6,
  jsonArrayToApplicationTransform_11 as jsonArrayToApplicationTransform_7,
  jsonArrayToApplicationTransform_12 as jsonArrayToApplicationTransform_8,
  jsonArrayToApplicationTransform_13 as jsonArrayToApplicationTransform_9,
  jsonArrayWorkflowArtifactRecordToApplicationTransform,
  jsonArrayWorkflowCatalogItemToApplicationTransform,
  jsonArrayWorkflowCheckpointRecordToApplicationTransform,
  jsonArrayWorkflowEventRecordToApplicationTransform,
  jsonArrayWorkflowExecutorDescriptorToApplicationTransform,
  jsonArrayWorkflowExternalRequestRecordToApplicationTransform,
  jsonArrayWorkflowProviderOptionToApplicationTransform,
  jsonArrayWorkflowTemplateCatalogItemToApplicationTransform,
  jsonCapabilityAccessPreviewRequestToTransportTransform,
  jsonCapabilityEditorModelToTransportTransform,
  jsonCapabilityMcpSetupTestRequestToTransportTransform,
  jsonCapabilityToolSetupTestRequestToTransportTransform,
  jsonCapacityBlockSaveApiRequestToTransportTransform,
  jsonChatSessionRenameApiRequestToTransportTransform,
  jsonCreateAgentRecruitingInterviewCommandToTransportTransform,
  jsonCreateLlmChatConversationApiRequestToTransportTransform,
  jsonHostCapabilitySnapshotToApplicationTransform,
  jsonIFormFileToTransportTransform,
  jsonLifecycleTaskSaveApiRequestToTransportTransform,
  jsonLlmCallComponentSaveRequestToTransportTransform,
  jsonLlmCallComponentToApplicationTransform,
  jsonLlmChatApiPageOfLlmChatConversationApiResponseToApplicationTransform,
  jsonLlmChatApiPageOfLlmChatDefinitionApiResponseToApplicationTransform,
  jsonLlmChatConversationApiResponseToApplicationTransform,
  jsonLlmChatConversationOriginToApplicationTransform,
  jsonLlmChatConversationStatusToApplicationTransform,
  jsonLlmChatDefinitionApiResponseToApplicationTransform,
  jsonLlmChatDefinitionEditorApiResponseToApplicationTransform,
  jsonLlmChatDefinitionMutationApiRequestToTransportTransform,
  jsonLlmChatDefinitionStatusToApplicationTransform,
  jsonLlmChatExpectedConcurrencyApiRequestToTransportTransform,
  jsonLlmChatMessageApiResponseToApplicationTransform,
  jsonLlmChatModelSettingsApiResponseToApplicationTransform,
  jsonLlmChatOperationApiResponseToApplicationTransform,
  jsonLlmChatOperationFailureApiResponseToApplicationTransform,
  jsonLlmChatOperationStatusToApplicationTransform,
  jsonLlmChatResponseFormatApiResponseToApplicationTransform,
  jsonMemoryAcceptedOperationApiResponseToApplicationTransform,
  jsonMemoryContextPackApiResponseToApplicationTransform,
  jsonMemoryEditorModelToTransportTransform,
  jsonMemoryOperationHandlerStatusToApplicationTransform,
  jsonMemoryProviderOperationApiResponseToApplicationTransform,
  jsonMemoryProviderOperationStatusApiResponseToApplicationTransform,
  jsonMemoryProviderProfileApiRequestToTransportTransform,
  jsonMemoryProviderProfileApiResponseToApplicationTransform,
  jsonMemoryProviderQueryApiRequestToTransportTransform,
  jsonMemoryProviderQueryApiResponseToApplicationTransform,
  jsonMemoryProviderSelectionApiResponseToApplicationTransform,
  jsonPartyCreateApiRequestToTransportTransform,
  jsonPartyRelationshipsReplaceApiRequestToTransportTransform,
  jsonPartySkillSaveApiRequestToTransportTransform,
  jsonPendingApprovalApiRequestToTransportTransform,
  jsonPluginConnectionSaveRequestToTransportTransform,
  jsonPluginGrantUpdateRequestToTransportTransform,
  jsonPluginInstallationUpdateRequestToTransportTransform,
  jsonPluginInstallRequestToTransportTransform,
  jsonPluginOAuthStartRequestToTransportTransform,
  jsonPluginPackageInstallRequestToTransportTransform,
  jsonPluginRuntimeRestartRequestToTransportTransform,
  jsonPostgreSqlDevDatabaseProfileRequestToTransportTransform,
  jsonProblemDetailsToApplicationTransform,
  jsonProcessApiContractResponseToApplicationTransform,
  jsonProcessDefinitionCatalogApiResponseToApplicationTransform,
  jsonProcessDefinitionEditorProjectionToApplicationTransform,
  jsonProcessDefinitionRoleEditorProjectionToApplicationTransform,
  jsonProcessDefinitionStepEditorProjectionToApplicationTransform,
  jsonProcessDispatchApiRequestToTransportTransform,
  jsonProcessLaunchApiRequestToTransportTransform,
  jsonProcessRuntimeCancelApiRequestToTransportTransform,
  jsonProcessRuntimeReworkApiRequestToTransportTransform,
  jsonProjectDeletionRecoveryToApplicationTransform,
  jsonProjectDeletionResultToApplicationTransform,
  jsonProjectEditorModelToApplicationTransform,
  jsonProjectEditorModelToTransportTransform,
  jsonProjectHierarchySnapshotToApplicationTransform,
  jsonProjectManagementGuidanceQueryRequestToTransportTransform,
  jsonProjectPlanSummaryQueryToTransportTransform,
  jsonProjectReconnectSubprojectApiRequestToTransportTransform,
  jsonProjectStructureAnalyticsQueryRequestToTransportTransform,
  jsonProjectStructureApprovalRequestCreateInputToTransportTransform,
  jsonProjectStructureAssetCreateInputToTransportTransform,
  jsonProjectStructureAssetRevisionRequestToTransportTransform,
  jsonProjectStructureChecklistRequestToTransportTransform,
  jsonProjectStructureDependencyQueryRequestToTransportTransform,
  jsonProjectStructureImportRequestToTransportTransform,
  jsonProjectStructureLeaseAcquireRequestToTransportTransform,
  jsonProjectStructureLeaseReleaseRequestToTransportTransform,
  jsonProjectStructureLeaseRenewRequestToTransportTransform,
  jsonProjectStructureLinkInputToTransportTransform,
  jsonProjectStructureMarkerBatchInputToTransportTransform,
  jsonProjectStructureMarkerInputToTransportTransform,
  jsonProjectStructureNodeCommandInputToTransportTransform,
  jsonProjectStructureNodeCreateOpenApiRequestToTransportTransform,
  jsonProjectStructureNodeDeleteBatchInputToTransportTransform,
  jsonProjectStructureNodeDeleteInputToTransportTransform,
  jsonProjectStructureNodeEditOpenApiRequestToTransportTransform,
  jsonProjectStructureNodeMetadataInputToTransportTransform,
  jsonProjectStructureNodeMoveInputToTransportTransform,
  jsonProjectStructureNodeParentInputToTransportTransform,
  jsonProjectStructureNodeRecomposeInputToTransportTransform,
  jsonProjectStructureNodeReparentInputToTransportTransform,
  jsonProjectStructureNodesCopyInputToTransportTransform,
  jsonProjectStructureNodesToSubprojectInputToTransportTransform,
  jsonProjectStructureNodeTypeInputToTransportTransform,
  jsonProjectStructurePriorityBatchInputToTransportTransform,
  jsonProjectStructurePriorityInputToTransportTransform,
  jsonProjectStructureProcessDefinitionLinkInputToTransportTransform,
  jsonProjectStructureProcessNodeStartInputToTransportTransform,
  jsonProjectStructureProgressBatchInputToTransportTransform,
  jsonProjectStructureProgressInputToTransportTransform,
  jsonProjectStructureProjectSaveRequestToTransportTransform,
  jsonProjectStructureReadRequestToTransportTransform,
  jsonProjectStructureStatusBatchInputToTransportTransform,
  jsonProjectStructureStatusInputToTransportTransform,
  jsonProjectStructureSubprojectChangeRequestToTransportTransform,
  jsonProjectStructureSubtreeTransferInputToTransportTransform,
  jsonProjectStructureTaskCreateRequestToTransportTransform,
  jsonProjectStructureTaskDetailsUpdateRequestToTransportTransform,
  jsonProjectStructureTaskResourceAttachRequestToTransportTransform,
  jsonProjectStructureWorkflowAddOptionsInputToTransportTransform,
  jsonProjectStructureWorkflowNodeCreateInputToTransportTransform,
  jsonProjectStructureWorkflowNodeStartInputToTransportTransform,
  jsonPromptCompatibilityResultToApplicationTransform,
  jsonPromptDraftSaveReceiptToApplicationTransform,
  jsonPromptGalleryItemDetailsToApplicationTransform,
  jsonPromptGalleryPageOfPromptGallerySearchItemToApplicationTransform,
  jsonPromptVersionSnapshotToApplicationTransform,
  jsonProviderChatCompletionApiRequestToTransportTransform,
  jsonProviderModelMaintenanceEditorRequestToTransportTransform,
  jsonProviderProfileEditorModelToTransportTransform,
  jsonProviderTestChatRequestToTransportTransform,
  jsonRecruitmentApplicationSaveApiRequestToTransportTransform,
  jsonRecruitmentConversionApiRequestToTransportTransform,
  jsonRecruitmentInterviewSaveApiRequestToTransportTransform,
  jsonRecruitmentSupportAssignmentsSaveApiRequestToTransportTransform,
  jsonRenameLlmChatConversationApiRequestToTransportTransform,
  jsonSendLlmChatTurnApiRequestToTransportTransform,
  jsonSkillDefinitionSaveApiRequestToTransportTransform,
  jsonWorkflowDefinitionDetailToApplicationTransform,
  jsonWorkflowDefinitionImportRequestToTransportTransform,
  jsonWorkflowDefinitionSaveRequestToTransportTransform,
  jsonWorkflowDefinitionToApplicationTransform,
  jsonWorkflowDefinitionToTransportTransform,
  jsonWorkflowExternalRequestResponseApiRequestToTransportTransform,
  jsonWorkflowLaunchIdempotencyEvidenceToApplicationTransform,
  jsonWorkflowRunDetailApiResponseToApplicationTransform,
  jsonWorkflowRunSnapshotToApplicationTransform,
  jsonWorkflowRunStartApiRequestToTransportTransform,
  jsonWorkflowRunStartApiResponseToApplicationTransform,
  jsonWorkflowSettingsToTransportTransform,
  jsonWorkflowStableIdentityResolutionToApplicationTransform,
  jsonWorkflowTestRunRequestToTransportTransform,
  jsonWorkflowValidationResultToApplicationTransform,
  jsonWorkforceProfileSaveApiRequestToTransportTransform,
  jsonWorkspaceSettingsModelToApplicationTransform,
  jsonWorkspaceSettingsModelToTransportTransform,
} from "../models/internal/serializers.js";
import {
  type AgentChatApiRequest,
  type AgentChatAttachmentStagingResult,
  type AgentChatPageBootstrapApiResponse,
  type AgentChatRunApiResponse,
  type AgentChatRuntimeApiResponse,
  type AgentChatSessionApiResponse,
  type AgentChatWorkspaceApiResponse,
  type AgentCloneApiRequest,
  type AgentDefinition,
  type AgentEditorModel,
  type AgentExecutionApprovalApiResponse,
  type AgentExecutionArtifactApiResponse,
  type AgentExecutionCheckpointApiResponse,
  type AgentExecutionLogApiResponse,
  type AgentExecutionRunApiRequest,
  type AgentExecutionRunApiResponse,
  type AgentExecutionRunDetailApiResponse,
  type AgentExecutionRunResultApiResponse,
  type AgentExecutionRunStartApiRequest,
  type AgentExecutionToolReceiptApiResponse,
  type AgentExternalProvisioningReceipt,
  type AgentExternalProvisioningResource,
  type AgentImageAttachmentUploadRequest,
  type AgentImportApiRequest,
  type AgentPackageImportApiForm,
  type AgentPackageImportReceipt,
  type AgentRecruitingCandidateReadiness,
  type AgentRecruitingInterview,
  type AgentRunMetricApiResponse,
  type AgentTeamEditorModel,
  type AgentTeamMembersApiRequest,
  type AgentTemplateConversionApiRequest,
  type ApiAccessStatus,
  type ApiAck,
  type ApiErrorResponse,
  type ApiTokenIssueRequest,
  type ApiTokenIssueResult,
  type AppendAgentRecruitingAttemptCommand,
  type AppendAgentRecruitingReviewCommand,
  type CapabilityAccessPreviewRequest,
  type CapabilityEditorModel,
  type CapabilityMcpSetupTestRequest,
  type CapabilityToolSetupTestRequest,
  type CapacityBlockSaveApiRequest,
  type ChatSessionRenameApiRequest,
  type CreateAgentRecruitingInterviewCommand,
  CreateLlmChatConversationApiRequest,
  type HostCapabilitySnapshot,
  type IFormFile,
  type LifecycleTaskSaveApiRequest,
  type LlmCallComponent,
  type LlmCallComponentSaveRequest,
  type LlmChatApiPageOfLlmChatConversationApiResponse,
  type LlmChatApiPageOfLlmChatDefinitionApiResponse,
  type LlmChatConversationApiResponse,
  type LlmChatDefinitionApiResponse,
  type LlmChatDefinitionEditorApiResponse,
  LlmChatDefinitionMutationApiRequest,
  LlmChatExpectedConcurrencyApiRequest,
  type LlmChatOperationApiResponse,
  type LlmChatProviderOptionApiResponse,
  type MemoryEditorModel,
  type MemoryProviderOperationStatusApiResponse,
  type MemoryProviderProfileApiRequest,
  type MemoryProviderProfileApiResponse,
  type MemoryProviderQueryApiRequest,
  type MemoryProviderQueryApiResponse,
  type PartyCreateApiRequest,
  type PartyRelationshipsReplaceApiRequest,
  type PartySkillSaveApiRequest,
  type PendingApprovalApiRequest,
  type PluginConnectionSaveRequest,
  type PluginGrantUpdateRequest,
  type PluginInstallationUpdateRequest,
  type PluginInstallRequest,
  type PluginOAuthStartRequest,
  type PluginPackageInstallRequest,
  type PluginRuntimeRestartRequest,
  type PostgreSqlDevDatabaseProfileRequest,
  type ProblemDetails,
  type ProcessApiContractResponse,
  type ProcessDefinitionCatalogApiResponse,
  type ProcessDefinitionEditorProjection,
  type ProcessDefinitionRoleEditorProjection,
  type ProcessDefinitionStepEditorProjection,
  type ProcessDispatchApiRequest,
  type ProcessLaunchApiRequest,
  type ProcessRuntimeCancelApiRequest,
  type ProcessRuntimeReworkApiRequest,
  type ProjectAccessListItem,
  type ProjectDeletionCleanupPendingApiResponse,
  type ProjectDeletionCompletionNotice,
  type ProjectDeletionPendingCleanup,
  type ProjectDeletionResult,
  type ProjectEditorModel,
  type ProjectHierarchyLinkSummary,
  type ProjectHierarchySnapshot,
  type ProjectManagementGuidanceQueryRequest,
  type ProjectPlanSummaryQuery,
  type ProjectReconnectSubprojectApiRequest,
  type ProjectStructureAnalyticsQueryRequest,
  type ProjectStructureApprovalRequestCreateInput,
  type ProjectStructureAssetCreateInput,
  type ProjectStructureAssetRevisionRequest,
  type ProjectStructureChecklistRequest,
  type ProjectStructureDependencyQueryRequest,
  type ProjectStructureImportRequest,
  type ProjectStructureLeaseAcquireRequest,
  type ProjectStructureLeaseReleaseRequest,
  type ProjectStructureLeaseRenewRequest,
  type ProjectStructureLinkInput,
  type ProjectStructureMarkerBatchInput,
  type ProjectStructureMarkerInput,
  type ProjectStructureNodeCommandInput,
  type ProjectStructureNodeCreateOpenApiRequest,
  type ProjectStructureNodeDeleteBatchInput,
  type ProjectStructureNodeDeleteInput,
  type ProjectStructureNodeEditOpenApiRequest,
  type ProjectStructureNodeMetadataInput,
  type ProjectStructureNodeMoveInput,
  type ProjectStructureNodeParentInput,
  type ProjectStructureNodeRecomposeInput,
  type ProjectStructureNodeReparentInput,
  type ProjectStructureNodesCopyInput,
  type ProjectStructureNodesToSubprojectInput,
  type ProjectStructureNodeTypeInput,
  type ProjectStructurePriorityBatchInput,
  type ProjectStructurePriorityInput,
  type ProjectStructureProcessDefinitionLinkInput,
  type ProjectStructureProcessNodeStartInput,
  type ProjectStructureProgressBatchInput,
  type ProjectStructureProgressInput,
  type ProjectStructureProjectSaveRequest,
  type ProjectStructureReadRequest,
  type ProjectStructureStatusBatchInput,
  type ProjectStructureStatusInput,
  type ProjectStructureSubprojectChangeRequest,
  type ProjectStructureSubtreeTransferInput,
  type ProjectStructureTaskCreateRequest,
  type ProjectStructureTaskDetailsUpdateRequest,
  type ProjectStructureTaskResourceAttachRequest,
  type ProjectStructureWorkflowAddOptionsInput,
  type ProjectStructureWorkflowNodeCreateInput,
  type ProjectStructureWorkflowNodeStartInput,
  type ProjectSummary,
  type PromptCompatibilityResult,
  type PromptDraftSaveReceipt,
  type PromptGalleryArchiveRequest,
  type PromptGalleryCompatibilityApiRequest,
  type PromptGalleryDraft,
  type PromptGalleryFavoriteRequest,
  type PromptGalleryItemDetails,
  type PromptGalleryPageOfPromptGallerySearchItem,
  type PromptGalleryWarningSuppressionApiRequest,
  type PromptVersionCreateRequest,
  type PromptVersionSnapshot,
  type ProviderChatCompletionApiRequest,
  type ProviderModelMaintenanceEditorRequest,
  type ProviderProfile,
  type ProviderProfileEditorModel,
  type ProviderTestChatRequest,
  type RecruitmentApplicationSaveApiRequest,
  type RecruitmentConversionApiRequest,
  type RecruitmentInterviewSaveApiRequest,
  type RecruitmentSupportAssignmentsSaveApiRequest,
  RenameLlmChatConversationApiRequest,
  SendLlmChatTurnApiRequest,
  type SkillDefinitionSaveApiRequest,
  type WorkflowCatalogItem,
  type WorkflowDefinition,
  type WorkflowDefinitionDetail,
  type WorkflowDefinitionImportRequest,
  type WorkflowDefinitionSaveRequest,
  type WorkflowExecutorDescriptor,
  type WorkflowExternalRequestResponseApiRequest,
  type WorkflowLaunchIdempotencyEvidence,
  type WorkflowProviderOption,
  type WorkflowRunDetailApiResponse,
  type WorkflowRunStartApiRequest,
  type WorkflowRunStartApiResponse,
  type WorkflowSettings,
  type WorkflowStableIdentityResolution,
  type WorkflowTemplateCatalogItem,
  type WorkflowTestRunRequest,
  type WorkflowTestRunResult,
  type WorkflowValidationResult,
  type WorkforceProfileSaveApiRequest,
  type WorkspaceSettingsModel,
} from "../models/models.js";

export interface GetAuthorizedFilesContentOptions extends OperationOptions {}
export async function getAuthorizedFilesContent(
  client: CanDoItAllClientContext,
  options?: GetAuthorizedFilesContentOptions,
): Promise<void> {
  const path = parse("/authorized-files/content").expand({});
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface GetAuthorizedFilesDownloadOptions extends OperationOptions {}
export async function getAuthorizedFilesDownload(
  client: CanDoItAllClientContext,
  options?: GetAuthorizedFilesDownloadOptions,
): Promise<void> {
  const path = parse("/authorized-files/download").expand({});
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface GetStorageObjectsPreviewOptions extends OperationOptions {}
export async function getStorageObjectsPreview(
  client: CanDoItAllClientContext,
  options?: GetStorageObjectsPreviewOptions,
): Promise<void> {
  const path = parse("/storage/objects/preview").expand({});
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface GetStorageObjectsDownloadOptions extends OperationOptions {}
export async function getStorageObjectsDownload(
  client: CanDoItAllClientContext,
  options?: GetStorageObjectsDownloadOptions,
): Promise<void> {
  const path = parse("/storage/objects/download").expand({});
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface GetManagedFilesPathOptions extends OperationOptions {}
export async function getManagedFilesPath(
  client: CanDoItAllClientContext,
  path: string,
  options?: GetManagedFilesPathOptions,
): Promise<void> {
  const path_2 = parse("/managed-files/{path}").expand({
    path: path
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path_2).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface GetDevRuntimeOptions extends OperationOptions {}
export async function getDevRuntime(
  client: CanDoItAllClientContext,
  options?: GetDevRuntimeOptions,
): Promise<void> {
  const path = parse("/_dev/runtime").expand({});
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface GetDevDatabaseSelectionOptions extends OperationOptions {}
export async function getDevDatabaseSelection(
  client: CanDoItAllClientContext,
  options?: GetDevDatabaseSelectionOptions,
): Promise<void> {
  const path = parse("/_dev/database/selection").expand({});
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface PostDevDatabaseProfilesPostgresqlOptions extends OperationOptions {

}
export async function postDevDatabaseProfilesPostgresql(
  client: CanDoItAllClientContext,
  body: PostgreSqlDevDatabaseProfileRequest,
  options?: PostDevDatabaseProfilesPostgresqlOptions,
): Promise<void> {
  const path = parse("/_dev/database/profiles/postgresql").expand({});
  const httpRequestOptions = {
    headers: {

    },body: jsonPostgreSqlDevDatabaseProfileRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface PostDevDatabaseSwitchProfileIdOptions extends OperationOptions {

}
export async function postDevDatabaseSwitchProfileId(
  client: CanDoItAllClientContext,
  profileId: string,
  options?: PostDevDatabaseSwitchProfileIdOptions,
): Promise<void> {
  const path = parse("/_dev/database/switch/{profileId}").expand({
    profileId: profileId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface PostDevDatabaseSeedProfileOptions extends OperationOptions {
  label?: string
}
export async function postDevDatabaseSeedProfile(
  client: CanDoItAllClientContext,
  options?: PostDevDatabaseSeedProfileOptions,
): Promise<void> {
  const path = parse("/_dev/database/seed-profile{?label}").expand({
    ...(options?.label != null && {label: options.label})
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface PostDevProjectsOptions extends OperationOptions {
  name?: string
  phase?: string
}
export async function postDevProjects(
  client: CanDoItAllClientContext,
  options?: PostDevProjectsOptions,
): Promise<void> {
  const path = parse("/_dev/projects{?name,phase}").expand({
    ...(options?.name != null && {name: options.name}),
    ...(options?.phase != null && {phase: options.phase})
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface PostDevAgentframeworkDiagnosticsOptions extends OperationOptions {

}
export async function postDevAgentframeworkDiagnostics(
  client: CanDoItAllClientContext,
  options?: PostDevAgentframeworkDiagnosticsOptions,
): Promise<void> {
  const path = parse("/_dev/agentframework/diagnostics").expand({});
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface GetDevAgentframeworkCredentialOptions extends OperationOptions {

}
export async function getDevAgentframeworkCredential(
  client: CanDoItAllClientContext,
  options?: GetDevAgentframeworkCredentialOptions,
): Promise<void> {
  const path = parse("/_dev/agentframework/credential").expand({});
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface PostDevAgentframeworkProbeAgentAgentIdOptions extends OperationOptions {
  promptMode?: string
  autoApprove?: boolean
  chatSessionId?: string
  sourceKind?: string
  sourceId?: string
  correlationId?: string
  causationId?: string
  requestedBy?: string
  requestedByKind?: string
  processRunId?: string
  processStepId?: string
  messageId?: string
}
export async function postDevAgentframeworkProbeAgentAgentId(
  client: CanDoItAllClientContext,
  agentId: string,
  persistTranscript: boolean,
  options?: PostDevAgentframeworkProbeAgentAgentIdOptions,
): Promise<void> {
  const path = parse("/_dev/agentframework/probe-agent/{agentId}{?promptMode,persistTranscript,autoApprove,chatSessionId,sourceKind,sourceId,correlationId,causationId,requestedBy,requestedByKind,processRunId,processStepId,messageId}").expand({
    agentId: agentId,
    ...(options?.promptMode != null && {promptMode: options.promptMode}),
    persistTranscript: persistTranscript,
    ...(options?.autoApprove != null && {autoApprove: options.autoApprove}),
    ...(options?.chatSessionId != null && {chatSessionId: options.chatSessionId}),
    ...(options?.sourceKind != null && {sourceKind: options.sourceKind}),
    ...(options?.sourceId != null && {sourceId: options.sourceId}),
    ...(options?.correlationId != null && {correlationId: options.correlationId}),
    ...(options?.causationId != null && {causationId: options.causationId}),
    ...(options?.requestedBy != null && {requestedBy: options.requestedBy}),
    ...(options?.requestedByKind != null && {requestedByKind: options.requestedByKind}),
    ...(options?.processRunId != null && {processRunId: options.processRunId}),
    ...(options?.processStepId != null && {processStepId: options.processStepId}),
    ...(options?.messageId != null && {messageId: options.messageId})
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface PostDevAgentframeworkDiagnosticsStepStepOptions extends OperationOptions {

}
export async function postDevAgentframeworkDiagnosticsStepStep(
  client: CanDoItAllClientContext,
  step: string,
  options?: PostDevAgentframeworkDiagnosticsStepStepOptions,
): Promise<void> {
  const path = parse("/_dev/agentframework/diagnostics-step/{step}").expand({
    step: step
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface GetApiSettingsWorkspaceOptions extends OperationOptions {}
export async function getApiSettingsWorkspace(
  client: CanDoItAllClientContext,
  options?: GetApiSettingsWorkspaceOptions,
): Promise<WorkspaceSettingsModel> {
  const path = parse("/api/settings/workspace").expand({});
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonWorkspaceSettingsModelToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface PutApiSettingsWorkspaceOptions extends OperationOptions {}
export async function putApiSettingsWorkspace(
  client: CanDoItAllClientContext,
  body: WorkspaceSettingsModel,
  options?: PutApiSettingsWorkspaceOptions,
): Promise<WorkspaceSettingsModel> {
  const path = parse("/api/settings/workspace").expand({});
  const httpRequestOptions = {
    headers: {},body: jsonWorkspaceSettingsModelToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).put(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonWorkspaceSettingsModelToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface GetApiRuntimeCapabilitiesOptions extends OperationOptions {}
export async function getApiRuntimeCapabilities(
  client: CanDoItAllClientContext,
  options?: GetApiRuntimeCapabilitiesOptions,
): Promise<HostCapabilitySnapshot> {
  const path = parse("/api/runtime/capabilities").expand({});
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonHostCapabilitySnapshotToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface GetApiRuntimeOperationsOptions extends OperationOptions {}
export async function getApiRuntimeOperations(
  client: CanDoItAllClientContext,
  options?: GetApiRuntimeOperationsOptions,
): Promise<void> {
  const path = parse("/api/runtime/operations").expand({});
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface GetApiProjectStructureNodeCatalogOptions extends OperationOptions {

}
export async function getApiProjectStructureNodeCatalog(
  client: CanDoItAllClientContext,
  options?: GetApiProjectStructureNodeCatalogOptions,
): Promise<{
  items: Array<{
    actionId: string;
    objectType: "ProjectRoot" | "Phase" | "Milestone" | "ProjectBlock" | "Meeting" | "Recording" | "Transcript" | "Participant" | "WorkItem" | "Repository" | "File" | "ImageAsset" | "VideoAsset" | "Link" | "Connector" | "Script" | "Environment" | "Infrastructure" | "PromptFlow" | "PromptSession" | "PromptStep" | "ProcessDefinition" | "ProcessRun" | "WorkflowDefinition" | "WorkflowRun" | "ValidationRun" | "TestPlan" | "TestEvidence" | "Note" | "Decision" | "SecretReference";
    objectSubtype: string;
    groupKey: string;
    label: string;
    description: string;
    defaultTitle: string;
    titleLabel: string;
    subtitleLabel: string;
    notesLabel: string;
    requiresFile: boolean;
    acceptedFileTypes: string;
    inputFields: Array<{
      key: string;
      label: string;
      inputMode: string;
      placeholder: string;
      isRequired: boolean;
      options: Array<{
        value: string;
        label: string;
      }>;
    }>;
    defaultInputValues: Array<{
      key: string;
      value: string;
    }>;
    aliases: Array<string>;
  }>;
  objectTypes: Array<{
    objectType: "ProjectRoot" | "Phase" | "Milestone" | "ProjectBlock" | "Meeting" | "Recording" | "Transcript" | "Participant" | "WorkItem" | "Repository" | "File" | "ImageAsset" | "VideoAsset" | "Link" | "Connector" | "Script" | "Environment" | "Infrastructure" | "PromptFlow" | "PromptSession" | "PromptStep" | "ProcessDefinition" | "ProcessRun" | "WorkflowDefinition" | "WorkflowRun" | "ValidationRun" | "TestPlan" | "TestEvidence" | "Note" | "Decision" | "SecretReference";
    label: string;
    isUserCreatable: boolean;
    creatableSubtypes: Array<string>;
  }>;
  linkKinds: Array<{
    kind: number;
    label: string;
    guidance: string;
  }>;
  guidance: Array<string>;
}> {
  const path = parse("/api/project-structure/node-catalog").expand({});
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return {
      items: jsonArrayToApplicationTransform(response.body.items),objectTypes: jsonArrayToApplicationTransform_2(response.body.objectTypes),linkKinds: jsonArrayToApplicationTransform_3(response.body.linkKinds),guidance: jsonArrayStringToApplicationTransform(response.body.guidance)
    }!;
  }
  throw createRestError(response);
}
;
export interface GetApiProjectStructureProjectsOptions extends OperationOptions {

}
export async function getApiProjectStructureProjects(
  client: CanDoItAllClientContext,
  options?: GetApiProjectStructureProjectsOptions,
): Promise<void> {
  const path = parse("/api/project-structure/projects").expand({});
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface PostApiProjectStructureProjectsOptions extends OperationOptions {

}
export async function postApiProjectStructureProjects(
  client: CanDoItAllClientContext,
  body: ProjectStructureProjectSaveRequest,
  options?: PostApiProjectStructureProjectsOptions,
): Promise<void> {
  const path = parse("/api/project-structure/projects").expand({});
  const httpRequestOptions = {
    headers: {

    },body: jsonProjectStructureProjectSaveRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface PutApiProjectStructureProjectsProjectIdOptions extends OperationOptions {

}
export async function putApiProjectStructureProjectsProjectId(
  client: CanDoItAllClientContext,
  projectId: string,
  body: ProjectStructureProjectSaveRequest,
  options?: PutApiProjectStructureProjectsProjectIdOptions,
): Promise<void> {
  const path = parse("/api/project-structure/projects/{projectId}").expand({
    projectId: projectId
  });
  const httpRequestOptions = {
    headers: {

    },body: jsonProjectStructureProjectSaveRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).put(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface GetApiProjectStructureProjectsProjectIdHierarchyOptions extends OperationOptions {

}
export async function getApiProjectStructureProjectsProjectIdHierarchy(
  client: CanDoItAllClientContext,
  projectId: string,
  options?: GetApiProjectStructureProjectsProjectIdHierarchyOptions,
): Promise<void> {
  const path = parse("/api/project-structure/projects/{projectId}/hierarchy").expand({
    projectId: projectId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface PostApiProjectStructureProjectsParentProjectIdSubprojectsOptions extends OperationOptions {

}
export async function postApiProjectStructureProjectsParentProjectIdSubprojects(
  client: CanDoItAllClientContext,
  parentProjectId: string,
  body: ProjectStructureSubprojectChangeRequest,
  options?: PostApiProjectStructureProjectsParentProjectIdSubprojectsOptions,
): Promise<void> {
  const path = parse("/api/project-structure/projects/{parentProjectId}/subprojects").expand({
    parentProjectId: parentProjectId
  });
  const httpRequestOptions = {
    headers: {

    },body: jsonProjectStructureSubprojectChangeRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface PostApiProjectStructureProjectsProjectIdStructureReadOptions extends OperationOptions {

}
export async function postApiProjectStructureProjectsProjectIdStructureRead(
  client: CanDoItAllClientContext,
  projectId: string,
  contentType: "application/json" | "application/*+json",
  body: ProjectStructureReadRequest,
  options?: PostApiProjectStructureProjectsProjectIdStructureReadOptions,
): Promise<{
  projectId: string;
  projectName: string;
  nodes: Array<{
    id: string;
    parentId: null | string;
    objectType: "ProjectRoot" | "Phase" | "Milestone" | "ProjectBlock" | "Meeting" | "Recording" | "Transcript" | "Participant" | "WorkItem" | "Repository" | "File" | "ImageAsset" | "VideoAsset" | "Link" | "Connector" | "Script" | "Environment" | "Infrastructure" | "PromptFlow" | "PromptSession" | "PromptStep" | "ProcessDefinition" | "ProcessRun" | "WorkflowDefinition" | "WorkflowRun" | "ValidationRun" | "TestPlan" | "TestEvidence" | "Note" | "Decision" | "SecretReference";
    objectSubtype: string;
    title: string;
    subtitle: string;
    status: string;
    notes: null | string;
    route: string;
    artifactKind: string;
    artifactId: null | string;
    mediaRelativePath: null | string;
    mediaContentType: null | string;
    mediaOriginalFileName: null | string;
    badges: Array<string>;
    progressMode: string;
    progressPercent: unknown;
    markerIcon: string;
    markerTone: string;
    markerLabel: string;
    priority: unknown;
    effectivePriority: unknown;
    startUtc: null | Date;
    endUtc: null | Date;
    metadataJson: null | string;
    projectRole: number;
    relatedProjectId: null | string;
    parentProjectCount: unknown;
    x: unknown;
    y: unknown;
    durationSeconds?: unknown;
    actionCapabilities?: null | {
      canRunNormally: boolean;
      canRunAsAdministrator: boolean;
      canOpenInFileExplorer: boolean;
      canOpenInNewTab: boolean;
      runtimeDisplayName: string;
      runtimeDisplayCommand: string;
      runtimeWorkingDirectory: string;
      openInNewTabRoute: string;
      storageProvider: string;
      storageLocatorKind: string;
      storageLocator: string;
      actions: Array<{
        actionId: string;
        label: string;
        surface: string;
        description: string;
      }>;
      guidance: Array<string>;
    };
  }>;
  links: Array<{
    sourceId: string;
    targetId: string;
    kind: number;
    isUserAuthored: boolean;
  }>;
  warnings: Array<string>;
}> {
  const path = parse("/api/project-structure/projects/{projectId}/structure/read").expand({
    projectId: projectId
  });
  const httpRequestOptions = {
    headers: {
      "content-type": contentType
    },body: jsonProjectStructureReadRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return {
      projectId: response.body.projectId,projectName: response.body.projectName,nodes: jsonArrayToApplicationTransform_4(response.body.nodes),links: jsonArrayToApplicationTransform_5(response.body.links),warnings: jsonArrayStringToApplicationTransform(response.body.warnings)
    }!;
  }
  throw createRestError(response);
}
;
export interface PostApiProjectStructureProjectsProjectIdPlanSummaryOptions extends OperationOptions {

}
export async function postApiProjectStructureProjectsProjectIdPlanSummary(
  client: CanDoItAllClientContext,
  projectId: string,
  body: ProjectPlanSummaryQuery,
  options?: PostApiProjectStructureProjectsProjectIdPlanSummaryOptions,
): Promise<void> {
  const path = parse("/api/project-structure/projects/{projectId}/plan/summary").expand({
    projectId: projectId
  });
  const httpRequestOptions = {
    headers: {},body: jsonProjectPlanSummaryQueryToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface PostApiProjectStructureProjectsProjectIdTasksOptions extends OperationOptions {

}
export async function postApiProjectStructureProjectsProjectIdTasks(
  client: CanDoItAllClientContext,
  projectId: string,
  body: ProjectStructureTaskCreateRequest,
  options?: PostApiProjectStructureProjectsProjectIdTasksOptions,
): Promise<void> {
  const path = parse("/api/project-structure/projects/{projectId}/tasks").expand({
    projectId: projectId
  });
  const httpRequestOptions = {
    headers: {

    },body: jsonProjectStructureTaskCreateRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface PutApiProjectStructureProjectsProjectIdTasksTaskIdOptions extends OperationOptions {

}
export async function putApiProjectStructureProjectsProjectIdTasksTaskId(
  client: CanDoItAllClientContext,
  projectId: string,
  taskId: string,
  body: ProjectStructureTaskDetailsUpdateRequest,
  options?: PutApiProjectStructureProjectsProjectIdTasksTaskIdOptions,
): Promise<void> {
  const path = parse("/api/project-structure/projects/{projectId}/tasks/{taskId}").expand({
    projectId: projectId,
    taskId: taskId
  });
  const httpRequestOptions = {
    headers: {

    },body: jsonProjectStructureTaskDetailsUpdateRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).put(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface PostApiProjectStructureProjectsProjectIdTasksTaskIdResourceOptions extends OperationOptions {

}
export async function postApiProjectStructureProjectsProjectIdTasksTaskIdResource(
  client: CanDoItAllClientContext,
  projectId: string,
  taskId: string,
  body: ProjectStructureTaskResourceAttachRequest,
  options?: PostApiProjectStructureProjectsProjectIdTasksTaskIdResourceOptions,
): Promise<void> {
  const path = parse("/api/project-structure/projects/{projectId}/tasks/{taskId}/resource").expand({
    projectId: projectId,
    taskId: taskId
  });
  const httpRequestOptions = {
    headers: {

    },body: jsonProjectStructureTaskResourceAttachRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface PostApiProjectStructureProjectsProjectIdNodesOptions extends OperationOptions {

}
export async function postApiProjectStructureProjectsProjectIdNodes(
  client: CanDoItAllClientContext,
  projectId: string,
  contentType: "application/json" | "application/*+json",
  body: ProjectStructureNodeCreateOpenApiRequest,
  options?: PostApiProjectStructureProjectsProjectIdNodesOptions,
): Promise<{
  id: string;
  parentId: null | string;
  objectType: "ProjectRoot" | "Phase" | "Milestone" | "ProjectBlock" | "Meeting" | "Recording" | "Transcript" | "Participant" | "WorkItem" | "Repository" | "File" | "ImageAsset" | "VideoAsset" | "Link" | "Connector" | "Script" | "Environment" | "Infrastructure" | "PromptFlow" | "PromptSession" | "PromptStep" | "ProcessDefinition" | "ProcessRun" | "WorkflowDefinition" | "WorkflowRun" | "ValidationRun" | "TestPlan" | "TestEvidence" | "Note" | "Decision" | "SecretReference";
  objectSubtype: string;
  title: string;
  subtitle: string;
  status: string;
  notes: null | string;
  route: string;
  artifactKind: string;
  artifactId: null | string;
  mediaRelativePath: null | string;
  mediaContentType: null | string;
  mediaOriginalFileName: null | string;
  badges: Array<string>;
  progressMode: string;
  progressPercent: unknown;
  markerIcon: string;
  markerTone: string;
  markerLabel: string;
  priority: unknown;
  effectivePriority: unknown;
  startUtc: null | Date;
  endUtc: null | Date;
  metadataJson: null | string;
  projectRole: number;
  relatedProjectId: null | string;
  parentProjectCount: unknown;
  x: unknown;
  y: unknown;
  durationSeconds?: unknown;
  actionCapabilities?: null | {
    canRunNormally: boolean;
    canRunAsAdministrator: boolean;
    canOpenInFileExplorer: boolean;
    canOpenInNewTab: boolean;
    runtimeDisplayName: string;
    runtimeDisplayCommand: string;
    runtimeWorkingDirectory: string;
    openInNewTabRoute: string;
    storageProvider: string;
    storageLocatorKind: string;
    storageLocator: string;
    actions: Array<{
      actionId: string;
      label: string;
      surface: string;
      description: string;
    }>;
    guidance: Array<string>;
  };
}> {
  const path = parse("/api/project-structure/projects/{projectId}/nodes").expand({
    projectId: projectId
  });
  const httpRequestOptions = {
    headers: {
      "content-type": contentType
    },body: jsonProjectStructureNodeCreateOpenApiRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return {
      id: response.body.id,parentId: response.body.parentId,objectType: response.body.objectType,objectSubtype: response.body.objectSubtype,title: response.body.title,subtitle: response.body.subtitle,status: response.body.status,notes: response.body.notes,route: response.body.route,artifactKind: response.body.artifactKind,artifactId: response.body.artifactId,mediaRelativePath: response.body.mediaRelativePath,mediaContentType: response.body.mediaContentType,mediaOriginalFileName: response.body.mediaOriginalFileName,badges: jsonArrayStringToApplicationTransform(response.body.badges),progressMode: response.body.progressMode,progressPercent: response.body.progressPercent,markerIcon: response.body.markerIcon,markerTone: response.body.markerTone,markerLabel: response.body.markerLabel,priority: response.body.priority,effectivePriority: response.body.effectivePriority,startUtc: dateDeserializer(response.body.startUtc)!,endUtc: dateDeserializer(response.body.endUtc)!,metadataJson: response.body.metadataJson,projectRole: response.body.projectRole,relatedProjectId: response.body.relatedProjectId,parentProjectCount: response.body.parentProjectCount,x: response.body.x,y: response.body.y,durationSeconds: response.body.durationSeconds,actionCapabilities: !response.body.actionCapabilities ? null : {
        canRunNormally: response.body.actionCapabilities.canRunNormally,canRunAsAdministrator: response.body.actionCapabilities.canRunAsAdministrator,canOpenInFileExplorer: response.body.actionCapabilities.canOpenInFileExplorer,canOpenInNewTab: response.body.actionCapabilities.canOpenInNewTab,runtimeDisplayName: response.body.actionCapabilities.runtimeDisplayName,runtimeDisplayCommand: response.body.actionCapabilities.runtimeDisplayCommand,runtimeWorkingDirectory: response.body.actionCapabilities.runtimeWorkingDirectory,openInNewTabRoute: response.body.actionCapabilities.openInNewTabRoute,storageProvider: response.body.actionCapabilities.storageProvider,storageLocatorKind: response.body.actionCapabilities.storageLocatorKind,storageLocator: response.body.actionCapabilities.storageLocator,actions: jsonArrayToApplicationTransform_6(response.body.actionCapabilities.actions),guidance: jsonArrayStringToApplicationTransform(response.body.actionCapabilities.guidance)
      }
    }!;
  }
  throw createRestError(response);
}
;
export interface PutApiProjectStructureProjectsProjectIdNodesNodeIdOptions extends OperationOptions {

}
export async function putApiProjectStructureProjectsProjectIdNodesNodeId(
  client: CanDoItAllClientContext,
  projectId: string,
  nodeId: string,
  contentType: "application/json" | "application/*+json",
  body: ProjectStructureNodeEditOpenApiRequest,
  options?: PutApiProjectStructureProjectsProjectIdNodesNodeIdOptions,
): Promise<{
  id: string;
  parentId: null | string;
  objectType: "ProjectRoot" | "Phase" | "Milestone" | "ProjectBlock" | "Meeting" | "Recording" | "Transcript" | "Participant" | "WorkItem" | "Repository" | "File" | "ImageAsset" | "VideoAsset" | "Link" | "Connector" | "Script" | "Environment" | "Infrastructure" | "PromptFlow" | "PromptSession" | "PromptStep" | "ProcessDefinition" | "ProcessRun" | "WorkflowDefinition" | "WorkflowRun" | "ValidationRun" | "TestPlan" | "TestEvidence" | "Note" | "Decision" | "SecretReference";
  objectSubtype: string;
  title: string;
  subtitle: string;
  status: string;
  notes: null | string;
  route: string;
  artifactKind: string;
  artifactId: null | string;
  mediaRelativePath: null | string;
  mediaContentType: null | string;
  mediaOriginalFileName: null | string;
  badges: Array<string>;
  progressMode: string;
  progressPercent: unknown;
  markerIcon: string;
  markerTone: string;
  markerLabel: string;
  priority: unknown;
  effectivePriority: unknown;
  startUtc: null | Date;
  endUtc: null | Date;
  metadataJson: null | string;
  projectRole: number;
  relatedProjectId: null | string;
  parentProjectCount: unknown;
  x: unknown;
  y: unknown;
  durationSeconds?: unknown;
  actionCapabilities?: null | {
    canRunNormally: boolean;
    canRunAsAdministrator: boolean;
    canOpenInFileExplorer: boolean;
    canOpenInNewTab: boolean;
    runtimeDisplayName: string;
    runtimeDisplayCommand: string;
    runtimeWorkingDirectory: string;
    openInNewTabRoute: string;
    storageProvider: string;
    storageLocatorKind: string;
    storageLocator: string;
    actions: Array<{
      actionId: string;
      label: string;
      surface: string;
      description: string;
    }>;
    guidance: Array<string>;
  };
}> {
  const path = parse("/api/project-structure/projects/{projectId}/nodes/{nodeId}").expand({
    projectId: projectId,
    nodeId: nodeId
  });
  const httpRequestOptions = {
    headers: {
      "content-type": contentType
    },body: jsonProjectStructureNodeEditOpenApiRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).put(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return {
      id: response.body.id,parentId: response.body.parentId,objectType: response.body.objectType,objectSubtype: response.body.objectSubtype,title: response.body.title,subtitle: response.body.subtitle,status: response.body.status,notes: response.body.notes,route: response.body.route,artifactKind: response.body.artifactKind,artifactId: response.body.artifactId,mediaRelativePath: response.body.mediaRelativePath,mediaContentType: response.body.mediaContentType,mediaOriginalFileName: response.body.mediaOriginalFileName,badges: jsonArrayStringToApplicationTransform(response.body.badges),progressMode: response.body.progressMode,progressPercent: response.body.progressPercent,markerIcon: response.body.markerIcon,markerTone: response.body.markerTone,markerLabel: response.body.markerLabel,priority: response.body.priority,effectivePriority: response.body.effectivePriority,startUtc: dateDeserializer(response.body.startUtc)!,endUtc: dateDeserializer(response.body.endUtc)!,metadataJson: response.body.metadataJson,projectRole: response.body.projectRole,relatedProjectId: response.body.relatedProjectId,parentProjectCount: response.body.parentProjectCount,x: response.body.x,y: response.body.y,durationSeconds: response.body.durationSeconds,actionCapabilities: !response.body.actionCapabilities ? null : {
        canRunNormally: response.body.actionCapabilities.canRunNormally,canRunAsAdministrator: response.body.actionCapabilities.canRunAsAdministrator,canOpenInFileExplorer: response.body.actionCapabilities.canOpenInFileExplorer,canOpenInNewTab: response.body.actionCapabilities.canOpenInNewTab,runtimeDisplayName: response.body.actionCapabilities.runtimeDisplayName,runtimeDisplayCommand: response.body.actionCapabilities.runtimeDisplayCommand,runtimeWorkingDirectory: response.body.actionCapabilities.runtimeWorkingDirectory,openInNewTabRoute: response.body.actionCapabilities.openInNewTabRoute,storageProvider: response.body.actionCapabilities.storageProvider,storageLocatorKind: response.body.actionCapabilities.storageLocatorKind,storageLocator: response.body.actionCapabilities.storageLocator,actions: jsonArrayToApplicationTransform_7(response.body.actionCapabilities.actions),guidance: jsonArrayStringToApplicationTransform(response.body.actionCapabilities.guidance)
      }
    }!;
  }
  throw createRestError(response);
}
;
export interface PostApiProjectStructureProjectsProjectIdNodesNodeIdTypeOptions extends OperationOptions {

}
export async function postApiProjectStructureProjectsProjectIdNodesNodeIdType(
  client: CanDoItAllClientContext,
  projectId: string,
  nodeId: string,
  contentType: "application/json" | "application/*+json",
  body: ProjectStructureNodeTypeInput,
  options?: PostApiProjectStructureProjectsProjectIdNodesNodeIdTypeOptions,
): Promise<{
  id: string;
  parentId: null | string;
  objectType: "ProjectRoot" | "Phase" | "Milestone" | "ProjectBlock" | "Meeting" | "Recording" | "Transcript" | "Participant" | "WorkItem" | "Repository" | "File" | "ImageAsset" | "VideoAsset" | "Link" | "Connector" | "Script" | "Environment" | "Infrastructure" | "PromptFlow" | "PromptSession" | "PromptStep" | "ProcessDefinition" | "ProcessRun" | "WorkflowDefinition" | "WorkflowRun" | "ValidationRun" | "TestPlan" | "TestEvidence" | "Note" | "Decision" | "SecretReference";
  objectSubtype: string;
  title: string;
  subtitle: string;
  status: string;
  notes: null | string;
  route: string;
  artifactKind: string;
  artifactId: null | string;
  mediaRelativePath: null | string;
  mediaContentType: null | string;
  mediaOriginalFileName: null | string;
  badges: Array<string>;
  progressMode: string;
  progressPercent: unknown;
  markerIcon: string;
  markerTone: string;
  markerLabel: string;
  priority: unknown;
  effectivePriority: unknown;
  startUtc: null | Date;
  endUtc: null | Date;
  metadataJson: null | string;
  projectRole: number;
  relatedProjectId: null | string;
  parentProjectCount: unknown;
  x: unknown;
  y: unknown;
  durationSeconds?: unknown;
  actionCapabilities?: null | {
    canRunNormally: boolean;
    canRunAsAdministrator: boolean;
    canOpenInFileExplorer: boolean;
    canOpenInNewTab: boolean;
    runtimeDisplayName: string;
    runtimeDisplayCommand: string;
    runtimeWorkingDirectory: string;
    openInNewTabRoute: string;
    storageProvider: string;
    storageLocatorKind: string;
    storageLocator: string;
    actions: Array<{
      actionId: string;
      label: string;
      surface: string;
      description: string;
    }>;
    guidance: Array<string>;
  };
}> {
  const path = parse("/api/project-structure/projects/{projectId}/nodes/{nodeId}/type").expand({
    projectId: projectId,
    nodeId: nodeId
  });
  const httpRequestOptions = {
    headers: {
      "content-type": contentType
    },body: jsonProjectStructureNodeTypeInputToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return {
      id: response.body.id,parentId: response.body.parentId,objectType: response.body.objectType,objectSubtype: response.body.objectSubtype,title: response.body.title,subtitle: response.body.subtitle,status: response.body.status,notes: response.body.notes,route: response.body.route,artifactKind: response.body.artifactKind,artifactId: response.body.artifactId,mediaRelativePath: response.body.mediaRelativePath,mediaContentType: response.body.mediaContentType,mediaOriginalFileName: response.body.mediaOriginalFileName,badges: jsonArrayStringToApplicationTransform(response.body.badges),progressMode: response.body.progressMode,progressPercent: response.body.progressPercent,markerIcon: response.body.markerIcon,markerTone: response.body.markerTone,markerLabel: response.body.markerLabel,priority: response.body.priority,effectivePriority: response.body.effectivePriority,startUtc: dateDeserializer(response.body.startUtc)!,endUtc: dateDeserializer(response.body.endUtc)!,metadataJson: response.body.metadataJson,projectRole: response.body.projectRole,relatedProjectId: response.body.relatedProjectId,parentProjectCount: response.body.parentProjectCount,x: response.body.x,y: response.body.y,durationSeconds: response.body.durationSeconds,actionCapabilities: !response.body.actionCapabilities ? null : {
        canRunNormally: response.body.actionCapabilities.canRunNormally,canRunAsAdministrator: response.body.actionCapabilities.canRunAsAdministrator,canOpenInFileExplorer: response.body.actionCapabilities.canOpenInFileExplorer,canOpenInNewTab: response.body.actionCapabilities.canOpenInNewTab,runtimeDisplayName: response.body.actionCapabilities.runtimeDisplayName,runtimeDisplayCommand: response.body.actionCapabilities.runtimeDisplayCommand,runtimeWorkingDirectory: response.body.actionCapabilities.runtimeWorkingDirectory,openInNewTabRoute: response.body.actionCapabilities.openInNewTabRoute,storageProvider: response.body.actionCapabilities.storageProvider,storageLocatorKind: response.body.actionCapabilities.storageLocatorKind,storageLocator: response.body.actionCapabilities.storageLocator,actions: jsonArrayToApplicationTransform_8(response.body.actionCapabilities.actions),guidance: jsonArrayStringToApplicationTransform(response.body.actionCapabilities.guidance)
      }
    }!;
  }
  throw createRestError(response);
}
;
export interface PostApiProjectStructureProjectsProjectIdNodesNodeIdMetadataOptions extends OperationOptions {

}
export async function postApiProjectStructureProjectsProjectIdNodesNodeIdMetadata(
  client: CanDoItAllClientContext,
  projectId: string,
  nodeId: string,
  body: ProjectStructureNodeMetadataInput,
  options?: PostApiProjectStructureProjectsProjectIdNodesNodeIdMetadataOptions,
): Promise<{
  id: string;
  parentId: null | string;
  objectType: "ProjectRoot" | "Phase" | "Milestone" | "ProjectBlock" | "Meeting" | "Recording" | "Transcript" | "Participant" | "WorkItem" | "Repository" | "File" | "ImageAsset" | "VideoAsset" | "Link" | "Connector" | "Script" | "Environment" | "Infrastructure" | "PromptFlow" | "PromptSession" | "PromptStep" | "ProcessDefinition" | "ProcessRun" | "WorkflowDefinition" | "WorkflowRun" | "ValidationRun" | "TestPlan" | "TestEvidence" | "Note" | "Decision" | "SecretReference";
  objectSubtype: string;
  title: string;
  subtitle: string;
  status: string;
  notes: null | string;
  route: string;
  artifactKind: string;
  artifactId: null | string;
  mediaRelativePath: null | string;
  mediaContentType: null | string;
  mediaOriginalFileName: null | string;
  badges: Array<string>;
  progressMode: string;
  progressPercent: unknown;
  markerIcon: string;
  markerTone: string;
  markerLabel: string;
  priority: unknown;
  effectivePriority: unknown;
  startUtc: null | Date;
  endUtc: null | Date;
  metadataJson: null | string;
  projectRole: number;
  relatedProjectId: null | string;
  parentProjectCount: unknown;
  x: unknown;
  y: unknown;
  durationSeconds?: unknown;
  actionCapabilities?: null | {
    canRunNormally: boolean;
    canRunAsAdministrator: boolean;
    canOpenInFileExplorer: boolean;
    canOpenInNewTab: boolean;
    runtimeDisplayName: string;
    runtimeDisplayCommand: string;
    runtimeWorkingDirectory: string;
    openInNewTabRoute: string;
    storageProvider: string;
    storageLocatorKind: string;
    storageLocator: string;
    actions: Array<{
      actionId: string;
      label: string;
      surface: string;
      description: string;
    }>;
    guidance: Array<string>;
  };
}> {
  const path = parse("/api/project-structure/projects/{projectId}/nodes/{nodeId}/metadata").expand({
    projectId: projectId,
    nodeId: nodeId
  });
  const httpRequestOptions = {
    headers: {

    },body: jsonProjectStructureNodeMetadataInputToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return {
      id: response.body.id,parentId: response.body.parentId,objectType: response.body.objectType,objectSubtype: response.body.objectSubtype,title: response.body.title,subtitle: response.body.subtitle,status: response.body.status,notes: response.body.notes,route: response.body.route,artifactKind: response.body.artifactKind,artifactId: response.body.artifactId,mediaRelativePath: response.body.mediaRelativePath,mediaContentType: response.body.mediaContentType,mediaOriginalFileName: response.body.mediaOriginalFileName,badges: jsonArrayStringToApplicationTransform(response.body.badges),progressMode: response.body.progressMode,progressPercent: response.body.progressPercent,markerIcon: response.body.markerIcon,markerTone: response.body.markerTone,markerLabel: response.body.markerLabel,priority: response.body.priority,effectivePriority: response.body.effectivePriority,startUtc: dateDeserializer(response.body.startUtc)!,endUtc: dateDeserializer(response.body.endUtc)!,metadataJson: response.body.metadataJson,projectRole: response.body.projectRole,relatedProjectId: response.body.relatedProjectId,parentProjectCount: response.body.parentProjectCount,x: response.body.x,y: response.body.y,durationSeconds: response.body.durationSeconds,actionCapabilities: !response.body.actionCapabilities ? null : {
        canRunNormally: response.body.actionCapabilities.canRunNormally,canRunAsAdministrator: response.body.actionCapabilities.canRunAsAdministrator,canOpenInFileExplorer: response.body.actionCapabilities.canOpenInFileExplorer,canOpenInNewTab: response.body.actionCapabilities.canOpenInNewTab,runtimeDisplayName: response.body.actionCapabilities.runtimeDisplayName,runtimeDisplayCommand: response.body.actionCapabilities.runtimeDisplayCommand,runtimeWorkingDirectory: response.body.actionCapabilities.runtimeWorkingDirectory,openInNewTabRoute: response.body.actionCapabilities.openInNewTabRoute,storageProvider: response.body.actionCapabilities.storageProvider,storageLocatorKind: response.body.actionCapabilities.storageLocatorKind,storageLocator: response.body.actionCapabilities.storageLocator,actions: jsonArrayToApplicationTransform_9(response.body.actionCapabilities.actions),guidance: jsonArrayStringToApplicationTransform(response.body.actionCapabilities.guidance)
      }
    }!;
  }
  throw createRestError(response);
}
;
export interface PostApiProjectStructureProjectsProjectIdNodesStatusesOptions extends OperationOptions {

}
export async function postApiProjectStructureProjectsProjectIdNodesStatuses(
  client: CanDoItAllClientContext,
  projectId: string,
  body: ProjectStructureStatusBatchInput,
  options?: PostApiProjectStructureProjectsProjectIdNodesStatusesOptions,
): Promise<void> {
  const path = parse("/api/project-structure/projects/{projectId}/nodes/statuses").expand({
    projectId: projectId
  });
  const httpRequestOptions = {
    headers: {

    },body: jsonProjectStructureStatusBatchInputToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface PostApiProjectStructureProjectsProjectIdNodesNodeIdStatusOptions extends OperationOptions {

}
export async function postApiProjectStructureProjectsProjectIdNodesNodeIdStatus(
  client: CanDoItAllClientContext,
  projectId: string,
  nodeId: string,
  body: ProjectStructureStatusInput,
  options?: PostApiProjectStructureProjectsProjectIdNodesNodeIdStatusOptions,
): Promise<void> {
  const path = parse("/api/project-structure/projects/{projectId}/nodes/{nodeId}/status").expand({
    projectId: projectId,
    nodeId: nodeId
  });
  const httpRequestOptions = {
    headers: {},body: jsonProjectStructureStatusInputToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface PostApiProjectStructureProjectsProjectIdNodesProgressOptions extends OperationOptions {

}
export async function postApiProjectStructureProjectsProjectIdNodesProgress(
  client: CanDoItAllClientContext,
  projectId: string,
  body: ProjectStructureProgressBatchInput,
  options?: PostApiProjectStructureProjectsProjectIdNodesProgressOptions,
): Promise<unknown> {
  const path = parse("/api/project-structure/projects/{projectId}/nodes/progress").expand({
    projectId: projectId
  });
  const httpRequestOptions = {
    headers: {

    },body: jsonProjectStructureProgressBatchInputToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return response.body!;
  }
  throw createRestError(response);
}
;
export interface PostApiProjectStructureProjectsProjectIdNodesNodeIdProgressOptions extends OperationOptions {

}
export async function postApiProjectStructureProjectsProjectIdNodesNodeIdProgress(
  client: CanDoItAllClientContext,
  projectId: string,
  nodeId: string,
  body: ProjectStructureProgressInput,
  options?: PostApiProjectStructureProjectsProjectIdNodesNodeIdProgressOptions,
): Promise<unknown> {
  const path = parse("/api/project-structure/projects/{projectId}/nodes/{nodeId}/progress").expand({
    projectId: projectId,
    nodeId: nodeId
  });
  const httpRequestOptions = {
    headers: {

    },body: jsonProjectStructureProgressInputToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return response.body!;
  }
  throw createRestError(response);
}
;
export interface PostApiProjectStructureProjectsProjectIdNodesMarkersOptions extends OperationOptions {

}
export async function postApiProjectStructureProjectsProjectIdNodesMarkers(
  client: CanDoItAllClientContext,
  projectId: string,
  body: ProjectStructureMarkerBatchInput,
  options?: PostApiProjectStructureProjectsProjectIdNodesMarkersOptions,
): Promise<unknown> {
  const path = parse("/api/project-structure/projects/{projectId}/nodes/markers").expand({
    projectId: projectId
  });
  const httpRequestOptions = {
    headers: {

    },body: jsonProjectStructureMarkerBatchInputToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return response.body!;
  }
  throw createRestError(response);
}
;
export interface PostApiProjectStructureProjectsProjectIdNodesNodeIdMarkersOptions extends OperationOptions {

}
export async function postApiProjectStructureProjectsProjectIdNodesNodeIdMarkers(
  client: CanDoItAllClientContext,
  projectId: string,
  nodeId: string,
  body: ProjectStructureMarkerInput,
  options?: PostApiProjectStructureProjectsProjectIdNodesNodeIdMarkersOptions,
): Promise<unknown> {
  const path = parse("/api/project-structure/projects/{projectId}/nodes/{nodeId}/markers").expand({
    projectId: projectId,
    nodeId: nodeId
  });
  const httpRequestOptions = {
    headers: {},body: jsonProjectStructureMarkerInputToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return response.body!;
  }
  throw createRestError(response);
}
;
export interface PostApiProjectStructureProjectsProjectIdNodesPrioritiesOptions extends OperationOptions {

}
export async function postApiProjectStructureProjectsProjectIdNodesPriorities(
  client: CanDoItAllClientContext,
  projectId: string,
  body: ProjectStructurePriorityBatchInput,
  options?: PostApiProjectStructureProjectsProjectIdNodesPrioritiesOptions,
): Promise<unknown> {
  const path = parse("/api/project-structure/projects/{projectId}/nodes/priorities").expand({
    projectId: projectId
  });
  const httpRequestOptions = {
    headers: {

    },body: jsonProjectStructurePriorityBatchInputToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return response.body!;
  }
  throw createRestError(response);
}
;
export interface PostApiProjectStructureProjectsProjectIdNodesNodeIdPriorityOptions extends OperationOptions {

}
export async function postApiProjectStructureProjectsProjectIdNodesNodeIdPriority(
  client: CanDoItAllClientContext,
  projectId: string,
  nodeId: string,
  body: ProjectStructurePriorityInput,
  options?: PostApiProjectStructureProjectsProjectIdNodesNodeIdPriorityOptions,
): Promise<unknown> {
  const path = parse("/api/project-structure/projects/{projectId}/nodes/{nodeId}/priority").expand({
    projectId: projectId,
    nodeId: nodeId
  });
  const httpRequestOptions = {
    headers: {

    },body: jsonProjectStructurePriorityInputToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return response.body!;
  }
  throw createRestError(response);
}
;
export interface PostApiProjectStructureProjectsProjectIdNodesMoveOptions extends OperationOptions {

}
export async function postApiProjectStructureProjectsProjectIdNodesMove(
  client: CanDoItAllClientContext,
  projectId: string,
  body: ProjectStructureNodeMoveInput,
  options?: PostApiProjectStructureProjectsProjectIdNodesMoveOptions,
): Promise<{
  ok: boolean;
}> {
  const path = parse("/api/project-structure/projects/{projectId}/nodes/move").expand({
    projectId: projectId
  });
  const httpRequestOptions = {
    headers: {

    },body: jsonProjectStructureNodeMoveInputToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return {
      ok: response.body.ok
    }!;
  }
  throw createRestError(response);
}
;
export interface PostApiProjectStructureProjectsProjectIdNodesRecomposeOptions extends OperationOptions {

}
export async function postApiProjectStructureProjectsProjectIdNodesRecompose(
  client: CanDoItAllClientContext,
  projectId: string,
  body: ProjectStructureNodeRecomposeInput,
  options?: PostApiProjectStructureProjectsProjectIdNodesRecomposeOptions,
): Promise<void> {
  const path = parse("/api/project-structure/projects/{projectId}/nodes/recompose").expand({
    projectId: projectId
  });
  const httpRequestOptions = {
    headers: {

    },body: jsonProjectStructureNodeRecomposeInputToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface PostApiProjectStructureProjectsProjectIdNodesNodeIdReparentOptions extends OperationOptions {

}
export async function postApiProjectStructureProjectsProjectIdNodesNodeIdReparent(
  client: CanDoItAllClientContext,
  projectId: string,
  nodeId: string,
  body: ProjectStructureNodeParentInput,
  options?: PostApiProjectStructureProjectsProjectIdNodesNodeIdReparentOptions,
): Promise<{
  id: string;
  parentId: null | string;
  objectType: "ProjectRoot" | "Phase" | "Milestone" | "ProjectBlock" | "Meeting" | "Recording" | "Transcript" | "Participant" | "WorkItem" | "Repository" | "File" | "ImageAsset" | "VideoAsset" | "Link" | "Connector" | "Script" | "Environment" | "Infrastructure" | "PromptFlow" | "PromptSession" | "PromptStep" | "ProcessDefinition" | "ProcessRun" | "WorkflowDefinition" | "WorkflowRun" | "ValidationRun" | "TestPlan" | "TestEvidence" | "Note" | "Decision" | "SecretReference";
  objectSubtype: string;
  title: string;
  subtitle: string;
  status: string;
  notes: null | string;
  route: string;
  artifactKind: string;
  artifactId: null | string;
  mediaRelativePath: null | string;
  mediaContentType: null | string;
  mediaOriginalFileName: null | string;
  badges: Array<string>;
  progressMode: string;
  progressPercent: unknown;
  markerIcon: string;
  markerTone: string;
  markerLabel: string;
  priority: unknown;
  effectivePriority: unknown;
  startUtc: null | Date;
  endUtc: null | Date;
  metadataJson: null | string;
  projectRole: number;
  relatedProjectId: null | string;
  parentProjectCount: unknown;
  x: unknown;
  y: unknown;
  durationSeconds?: unknown;
  actionCapabilities?: null | {
    canRunNormally: boolean;
    canRunAsAdministrator: boolean;
    canOpenInFileExplorer: boolean;
    canOpenInNewTab: boolean;
    runtimeDisplayName: string;
    runtimeDisplayCommand: string;
    runtimeWorkingDirectory: string;
    openInNewTabRoute: string;
    storageProvider: string;
    storageLocatorKind: string;
    storageLocator: string;
    actions: Array<{
      actionId: string;
      label: string;
      surface: string;
      description: string;
    }>;
    guidance: Array<string>;
  };
}> {
  const path = parse("/api/project-structure/projects/{projectId}/nodes/{nodeId}/reparent").expand({
    projectId: projectId,
    nodeId: nodeId
  });
  const httpRequestOptions = {
    headers: {

    },body: jsonProjectStructureNodeParentInputToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return {
      id: response.body.id,parentId: response.body.parentId,objectType: response.body.objectType,objectSubtype: response.body.objectSubtype,title: response.body.title,subtitle: response.body.subtitle,status: response.body.status,notes: response.body.notes,route: response.body.route,artifactKind: response.body.artifactKind,artifactId: response.body.artifactId,mediaRelativePath: response.body.mediaRelativePath,mediaContentType: response.body.mediaContentType,mediaOriginalFileName: response.body.mediaOriginalFileName,badges: jsonArrayStringToApplicationTransform(response.body.badges),progressMode: response.body.progressMode,progressPercent: response.body.progressPercent,markerIcon: response.body.markerIcon,markerTone: response.body.markerTone,markerLabel: response.body.markerLabel,priority: response.body.priority,effectivePriority: response.body.effectivePriority,startUtc: dateDeserializer(response.body.startUtc)!,endUtc: dateDeserializer(response.body.endUtc)!,metadataJson: response.body.metadataJson,projectRole: response.body.projectRole,relatedProjectId: response.body.relatedProjectId,parentProjectCount: response.body.parentProjectCount,x: response.body.x,y: response.body.y,durationSeconds: response.body.durationSeconds,actionCapabilities: !response.body.actionCapabilities ? null : {
        canRunNormally: response.body.actionCapabilities.canRunNormally,canRunAsAdministrator: response.body.actionCapabilities.canRunAsAdministrator,canOpenInFileExplorer: response.body.actionCapabilities.canOpenInFileExplorer,canOpenInNewTab: response.body.actionCapabilities.canOpenInNewTab,runtimeDisplayName: response.body.actionCapabilities.runtimeDisplayName,runtimeDisplayCommand: response.body.actionCapabilities.runtimeDisplayCommand,runtimeWorkingDirectory: response.body.actionCapabilities.runtimeWorkingDirectory,openInNewTabRoute: response.body.actionCapabilities.openInNewTabRoute,storageProvider: response.body.actionCapabilities.storageProvider,storageLocatorKind: response.body.actionCapabilities.storageLocatorKind,storageLocator: response.body.actionCapabilities.storageLocator,actions: jsonArrayToApplicationTransform_10(response.body.actionCapabilities.actions),guidance: jsonArrayStringToApplicationTransform(response.body.actionCapabilities.guidance)
      }
    }!;
  }
  throw createRestError(response);
}
;
export interface PostApiProjectStructureProjectsProjectIdNodesReparentOptions extends OperationOptions {

}
export async function postApiProjectStructureProjectsProjectIdNodesReparent(
  client: CanDoItAllClientContext,
  projectId: string,
  body: ProjectStructureNodeReparentInput,
  options?: PostApiProjectStructureProjectsProjectIdNodesReparentOptions,
): Promise<{
  id: string;
  parentId: null | string;
  objectType: "ProjectRoot" | "Phase" | "Milestone" | "ProjectBlock" | "Meeting" | "Recording" | "Transcript" | "Participant" | "WorkItem" | "Repository" | "File" | "ImageAsset" | "VideoAsset" | "Link" | "Connector" | "Script" | "Environment" | "Infrastructure" | "PromptFlow" | "PromptSession" | "PromptStep" | "ProcessDefinition" | "ProcessRun" | "WorkflowDefinition" | "WorkflowRun" | "ValidationRun" | "TestPlan" | "TestEvidence" | "Note" | "Decision" | "SecretReference";
  objectSubtype: string;
  title: string;
  subtitle: string;
  status: string;
  notes: null | string;
  route: string;
  artifactKind: string;
  artifactId: null | string;
  mediaRelativePath: null | string;
  mediaContentType: null | string;
  mediaOriginalFileName: null | string;
  badges: Array<string>;
  progressMode: string;
  progressPercent: unknown;
  markerIcon: string;
  markerTone: string;
  markerLabel: string;
  priority: unknown;
  effectivePriority: unknown;
  startUtc: null | Date;
  endUtc: null | Date;
  metadataJson: null | string;
  projectRole: number;
  relatedProjectId: null | string;
  parentProjectCount: unknown;
  x: unknown;
  y: unknown;
  durationSeconds?: unknown;
  actionCapabilities?: null | {
    canRunNormally: boolean;
    canRunAsAdministrator: boolean;
    canOpenInFileExplorer: boolean;
    canOpenInNewTab: boolean;
    runtimeDisplayName: string;
    runtimeDisplayCommand: string;
    runtimeWorkingDirectory: string;
    openInNewTabRoute: string;
    storageProvider: string;
    storageLocatorKind: string;
    storageLocator: string;
    actions: Array<{
      actionId: string;
      label: string;
      surface: string;
      description: string;
    }>;
    guidance: Array<string>;
  };
}> {
  const path = parse("/api/project-structure/projects/{projectId}/nodes/reparent").expand({
    projectId: projectId
  });
  const httpRequestOptions = {
    headers: {

    },body: jsonProjectStructureNodeReparentInputToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return {
      id: response.body.id,parentId: response.body.parentId,objectType: response.body.objectType,objectSubtype: response.body.objectSubtype,title: response.body.title,subtitle: response.body.subtitle,status: response.body.status,notes: response.body.notes,route: response.body.route,artifactKind: response.body.artifactKind,artifactId: response.body.artifactId,mediaRelativePath: response.body.mediaRelativePath,mediaContentType: response.body.mediaContentType,mediaOriginalFileName: response.body.mediaOriginalFileName,badges: jsonArrayStringToApplicationTransform(response.body.badges),progressMode: response.body.progressMode,progressPercent: response.body.progressPercent,markerIcon: response.body.markerIcon,markerTone: response.body.markerTone,markerLabel: response.body.markerLabel,priority: response.body.priority,effectivePriority: response.body.effectivePriority,startUtc: dateDeserializer(response.body.startUtc)!,endUtc: dateDeserializer(response.body.endUtc)!,metadataJson: response.body.metadataJson,projectRole: response.body.projectRole,relatedProjectId: response.body.relatedProjectId,parentProjectCount: response.body.parentProjectCount,x: response.body.x,y: response.body.y,durationSeconds: response.body.durationSeconds,actionCapabilities: !response.body.actionCapabilities ? null : {
        canRunNormally: response.body.actionCapabilities.canRunNormally,canRunAsAdministrator: response.body.actionCapabilities.canRunAsAdministrator,canOpenInFileExplorer: response.body.actionCapabilities.canOpenInFileExplorer,canOpenInNewTab: response.body.actionCapabilities.canOpenInNewTab,runtimeDisplayName: response.body.actionCapabilities.runtimeDisplayName,runtimeDisplayCommand: response.body.actionCapabilities.runtimeDisplayCommand,runtimeWorkingDirectory: response.body.actionCapabilities.runtimeWorkingDirectory,openInNewTabRoute: response.body.actionCapabilities.openInNewTabRoute,storageProvider: response.body.actionCapabilities.storageProvider,storageLocatorKind: response.body.actionCapabilities.storageLocatorKind,storageLocator: response.body.actionCapabilities.storageLocator,actions: jsonArrayToApplicationTransform_11(response.body.actionCapabilities.actions),guidance: jsonArrayStringToApplicationTransform(response.body.actionCapabilities.guidance)
      }
    }!;
  }
  throw createRestError(response);
}
;
export interface PostApiProjectStructureProjectsProjectIdNodesCopyOptions extends OperationOptions {

}
export async function postApiProjectStructureProjectsProjectIdNodesCopy(
  client: CanDoItAllClientContext,
  projectId: string,
  body: ProjectStructureNodesCopyInput,
  options?: PostApiProjectStructureProjectsProjectIdNodesCopyOptions,
): Promise<void> {
  const path = parse("/api/project-structure/projects/{projectId}/nodes/copy").expand({
    projectId: projectId
  });
  const httpRequestOptions = {
    headers: {

    },body: jsonProjectStructureNodesCopyInputToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface PostApiProjectStructureProjectsProjectIdNodesMoveToNewSubprojectOptions extends OperationOptions {

}
export async function postApiProjectStructureProjectsProjectIdNodesMoveToNewSubproject(
  client: CanDoItAllClientContext,
  projectId: string,
  body: ProjectStructureNodesToSubprojectInput,
  options?: PostApiProjectStructureProjectsProjectIdNodesMoveToNewSubprojectOptions,
): Promise<void> {
  const path = parse("/api/project-structure/projects/{projectId}/nodes/move-to-new-subproject").expand({
    projectId: projectId
  });
  const httpRequestOptions = {
    headers: {

    },body: jsonProjectStructureNodesToSubprojectInputToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface PostApiProjectStructureProjectsProjectIdNodesNodeIdMoveDescendantsToProjectOptions extends OperationOptions {

}
export async function postApiProjectStructureProjectsProjectIdNodesNodeIdMoveDescendantsToProject(
  client: CanDoItAllClientContext,
  projectId: string,
  nodeId: string,
  body: ProjectStructureSubtreeTransferInput,
  options?: PostApiProjectStructureProjectsProjectIdNodesNodeIdMoveDescendantsToProjectOptions,
): Promise<void> {
  const path = parse("/api/project-structure/projects/{projectId}/nodes/{nodeId}/move-descendants-to-project").expand({
    projectId: projectId,
    nodeId: nodeId
  });
  const httpRequestOptions = {
    headers: {

    },body: jsonProjectStructureSubtreeTransferInputToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface PostApiProjectStructureProjectsProjectIdNodesNodeIdCommandOptions extends OperationOptions {

}
export async function postApiProjectStructureProjectsProjectIdNodesNodeIdCommand(
  client: CanDoItAllClientContext,
  projectId: string,
  nodeId: string,
  body: ProjectStructureNodeCommandInput,
  options?: PostApiProjectStructureProjectsProjectIdNodesNodeIdCommandOptions,
): Promise<void> {
  const path = parse("/api/project-structure/projects/{projectId}/nodes/{nodeId}/command").expand({
    projectId: projectId,
    nodeId: nodeId
  });
  const httpRequestOptions = {
    headers: {

    },body: jsonProjectStructureNodeCommandInputToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface PostApiProjectStructureProjectsProjectIdNodesNodeIdProcessDefinitionOptions extends OperationOptions {

}
export async function postApiProjectStructureProjectsProjectIdNodesNodeIdProcessDefinition(
  client: CanDoItAllClientContext,
  projectId: string,
  nodeId: string,
  body: ProjectStructureProcessDefinitionLinkInput,
  options?: PostApiProjectStructureProjectsProjectIdNodesNodeIdProcessDefinitionOptions,
): Promise<void> {
  const path = parse("/api/project-structure/projects/{projectId}/nodes/{nodeId}/process-definition").expand({
    projectId: projectId,
    nodeId: nodeId
  });
  const httpRequestOptions = {
    headers: {

    },body: jsonProjectStructureProcessDefinitionLinkInputToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface PostApiProjectStructureProjectsProjectIdNodesNodeIdProcessStartOptions extends OperationOptions {

}
export async function postApiProjectStructureProjectsProjectIdNodesNodeIdProcessStart(
  client: CanDoItAllClientContext,
  projectId: string,
  nodeId: string,
  body: ProjectStructureProcessNodeStartInput,
  options?: PostApiProjectStructureProjectsProjectIdNodesNodeIdProcessStartOptions,
): Promise<void> {
  const path = parse("/api/project-structure/projects/{projectId}/nodes/{nodeId}/process/start").expand({
    projectId: projectId,
    nodeId: nodeId
  });
  const httpRequestOptions = {
    headers: {

    },body: jsonProjectStructureProcessNodeStartInputToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface PostApiProjectStructureProjectsProjectIdNodesNodeIdWorkflowAddOptionsOptions extends OperationOptions {

}
export async function postApiProjectStructureProjectsProjectIdNodesNodeIdWorkflowAddOptions(
  client: CanDoItAllClientContext,
  projectId: string,
  nodeId: string,
  body: ProjectStructureWorkflowAddOptionsInput,
  options?: PostApiProjectStructureProjectsProjectIdNodesNodeIdWorkflowAddOptionsOptions,
): Promise<{
  projectId: string;
  parentNode: {
    id: string;
    parentId: null | string;
    objectType: "ProjectRoot" | "Phase" | "Milestone" | "ProjectBlock" | "Meeting" | "Recording" | "Transcript" | "Participant" | "WorkItem" | "Repository" | "File" | "ImageAsset" | "VideoAsset" | "Link" | "Connector" | "Script" | "Environment" | "Infrastructure" | "PromptFlow" | "PromptSession" | "PromptStep" | "ProcessDefinition" | "ProcessRun" | "WorkflowDefinition" | "WorkflowRun" | "ValidationRun" | "TestPlan" | "TestEvidence" | "Note" | "Decision" | "SecretReference";
    objectSubtype: string;
    title: string;
    subtitle: string;
    status: string;
    notes: null | string;
    route: string;
    artifactKind: string;
    artifactId: null | string;
    mediaRelativePath: null | string;
    mediaContentType: null | string;
    mediaOriginalFileName: null | string;
    badges: Array<string>;
    progressMode: string;
    progressPercent: unknown;
    markerIcon: string;
    markerTone: string;
    markerLabel: string;
    priority: unknown;
    effectivePriority: unknown;
    startUtc: null | Date;
    endUtc: null | Date;
    metadataJson: null | string;
    projectRole: number;
    relatedProjectId: null | string;
    parentProjectCount: unknown;
    x: unknown;
    y: unknown;
    durationSeconds?: unknown;
    actionCapabilities?: null | {
      canRunNormally: boolean;
      canRunAsAdministrator: boolean;
      canOpenInFileExplorer: boolean;
      canOpenInNewTab: boolean;
      runtimeDisplayName: string;
      runtimeDisplayCommand: string;
      runtimeWorkingDirectory: string;
      openInNewTabRoute: string;
      storageProvider: string;
      storageLocatorKind: string;
      storageLocator: string;
      actions: Array<{
        actionId: string;
        label: string;
        surface: string;
        description: string;
      }>;
      guidance: Array<string>;
    };
  };
  workflows: Array<{
    workflowId: unknown;
    versionId: unknown;
    displayName: string;
    description: string;
    status: number;
    preferredBackend: number;
    isSelectable: boolean;
    disabledReason: string;
  }>;
  selectedWorkflowId: null | unknown;
  selectedVersionId: null | unknown;
  inputSettings: {
    includeProject?: boolean;
    includeParentNode?: boolean;
    includeParentNodeDetails?: boolean;
    includeParentSubtree?: boolean;
    includeAssets?: boolean;
    selectedNodeIds?: Array<string>;
    additionalSources?: Array<{
      kind: number;
      key: string;
      label: string;
      value: string;
      isEnabled?: boolean;
    }>;
    manualInputJson?: string;
  };
  preview: {
    summary: string;
    inputJson: string;
    sections: Array<{
      title: string;
      summary: string;
      rows: Array<{
        label: string;
        value: string;
      }>;
    }>;
  };
  warnings: Array<string>;
}> {
  const path = parse("/api/project-structure/projects/{projectId}/nodes/{nodeId}/workflow-add-options").expand({
    projectId: projectId,
    nodeId: nodeId
  });
  const httpRequestOptions = {
    headers: {

    },body: jsonProjectStructureWorkflowAddOptionsInputToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return {
      projectId: response.body.projectId,parentNode: {
        id: response.body.parentNode.id,parentId: response.body.parentNode.parentId,objectType: response.body.parentNode.objectType,objectSubtype: response.body.parentNode.objectSubtype,title: response.body.parentNode.title,subtitle: response.body.parentNode.subtitle,status: response.body.parentNode.status,notes: response.body.parentNode.notes,route: response.body.parentNode.route,artifactKind: response.body.parentNode.artifactKind,artifactId: response.body.parentNode.artifactId,mediaRelativePath: response.body.parentNode.mediaRelativePath,mediaContentType: response.body.parentNode.mediaContentType,mediaOriginalFileName: response.body.parentNode.mediaOriginalFileName,badges: jsonArrayStringToApplicationTransform(response.body.parentNode.badges),progressMode: response.body.parentNode.progressMode,progressPercent: response.body.parentNode.progressPercent,markerIcon: response.body.parentNode.markerIcon,markerTone: response.body.parentNode.markerTone,markerLabel: response.body.parentNode.markerLabel,priority: response.body.parentNode.priority,effectivePriority: response.body.parentNode.effectivePriority,startUtc: dateDeserializer(response.body.parentNode.startUtc)!,endUtc: dateDeserializer(response.body.parentNode.endUtc)!,metadataJson: response.body.parentNode.metadataJson,projectRole: response.body.parentNode.projectRole,relatedProjectId: response.body.parentNode.relatedProjectId,parentProjectCount: response.body.parentNode.parentProjectCount,x: response.body.parentNode.x,y: response.body.parentNode.y,durationSeconds: response.body.parentNode.durationSeconds,actionCapabilities: !response.body.parentNode.actionCapabilities ? null : {
          canRunNormally: response.body.parentNode.actionCapabilities.canRunNormally,canRunAsAdministrator: response.body.parentNode.actionCapabilities.canRunAsAdministrator,canOpenInFileExplorer: response.body.parentNode.actionCapabilities.canOpenInFileExplorer,canOpenInNewTab: response.body.parentNode.actionCapabilities.canOpenInNewTab,runtimeDisplayName: response.body.parentNode.actionCapabilities.runtimeDisplayName,runtimeDisplayCommand: response.body.parentNode.actionCapabilities.runtimeDisplayCommand,runtimeWorkingDirectory: response.body.parentNode.actionCapabilities.runtimeWorkingDirectory,openInNewTabRoute: response.body.parentNode.actionCapabilities.openInNewTabRoute,storageProvider: response.body.parentNode.actionCapabilities.storageProvider,storageLocatorKind: response.body.parentNode.actionCapabilities.storageLocatorKind,storageLocator: response.body.parentNode.actionCapabilities.storageLocator,actions: jsonArrayToApplicationTransform_12(response.body.parentNode.actionCapabilities.actions),guidance: jsonArrayStringToApplicationTransform(response.body.parentNode.actionCapabilities.guidance)
        }
      },workflows: jsonArrayToApplicationTransform_13(response.body.workflows),selectedWorkflowId: response.body.selectedWorkflowId,selectedVersionId: response.body.selectedVersionId,inputSettings: {
        includeProject: response.body.inputSettings.includeProject,includeParentNode: response.body.inputSettings.includeParentNode,includeParentNodeDetails: response.body.inputSettings.includeParentNodeDetails,includeParentSubtree: response.body.inputSettings.includeParentSubtree,includeAssets: response.body.inputSettings.includeAssets,selectedNodeIds: jsonArrayStringToApplicationTransform(response.body.inputSettings.selectedNodeIds),additionalSources: jsonArrayToApplicationTransform_14(response.body.inputSettings.additionalSources),manualInputJson: response.body.inputSettings.manualInputJson
      },preview: {
        summary: response.body.preview.summary,inputJson: response.body.preview.inputJson,sections: jsonArrayToApplicationTransform_15(response.body.preview.sections)
      },warnings: jsonArrayStringToApplicationTransform(response.body.warnings)
    }!;
  }
  throw createRestError(response);
}
;
export interface PostApiProjectStructureProjectsProjectIdNodesNodeIdWorkflowDefinitionOptions extends OperationOptions {

}
export async function postApiProjectStructureProjectsProjectIdNodesNodeIdWorkflowDefinition(
  client: CanDoItAllClientContext,
  projectId: string,
  nodeId: string,
  body: ProjectStructureWorkflowNodeCreateInput,
  options?: PostApiProjectStructureProjectsProjectIdNodesNodeIdWorkflowDefinitionOptions,
): Promise<{
  projectId: string;
  node: {
    id: string;
    parentId: null | string;
    objectType: "ProjectRoot" | "Phase" | "Milestone" | "ProjectBlock" | "Meeting" | "Recording" | "Transcript" | "Participant" | "WorkItem" | "Repository" | "File" | "ImageAsset" | "VideoAsset" | "Link" | "Connector" | "Script" | "Environment" | "Infrastructure" | "PromptFlow" | "PromptSession" | "PromptStep" | "ProcessDefinition" | "ProcessRun" | "WorkflowDefinition" | "WorkflowRun" | "ValidationRun" | "TestPlan" | "TestEvidence" | "Note" | "Decision" | "SecretReference";
    objectSubtype: string;
    title: string;
    subtitle: string;
    status: string;
    notes: null | string;
    route: string;
    artifactKind: string;
    artifactId: null | string;
    mediaRelativePath: null | string;
    mediaContentType: null | string;
    mediaOriginalFileName: null | string;
    badges: Array<string>;
    progressMode: string;
    progressPercent: unknown;
    markerIcon: string;
    markerTone: string;
    markerLabel: string;
    priority: unknown;
    effectivePriority: unknown;
    startUtc: null | Date;
    endUtc: null | Date;
    metadataJson: null | string;
    projectRole: number;
    relatedProjectId: null | string;
    parentProjectCount: unknown;
    x: unknown;
    y: unknown;
    durationSeconds?: unknown;
    actionCapabilities?: null | {
      canRunNormally: boolean;
      canRunAsAdministrator: boolean;
      canOpenInFileExplorer: boolean;
      canOpenInNewTab: boolean;
      runtimeDisplayName: string;
      runtimeDisplayCommand: string;
      runtimeWorkingDirectory: string;
      openInNewTabRoute: string;
      storageProvider: string;
      storageLocatorKind: string;
      storageLocator: string;
      actions: Array<{
        actionId: string;
        label: string;
        surface: string;
        description: string;
      }>;
      guidance: Array<string>;
    };
  };
  workflowId: unknown;
  workflowVersionId: unknown;
  warnings: Array<string>;
}> {
  const path = parse("/api/project-structure/projects/{projectId}/nodes/{nodeId}/workflow-definition").expand({
    projectId: projectId,
    nodeId: nodeId
  });
  const httpRequestOptions = {
    headers: {

    },body: jsonProjectStructureWorkflowNodeCreateInputToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return {
      projectId: response.body.projectId,node: {
        id: response.body.node.id,parentId: response.body.node.parentId,objectType: response.body.node.objectType,objectSubtype: response.body.node.objectSubtype,title: response.body.node.title,subtitle: response.body.node.subtitle,status: response.body.node.status,notes: response.body.node.notes,route: response.body.node.route,artifactKind: response.body.node.artifactKind,artifactId: response.body.node.artifactId,mediaRelativePath: response.body.node.mediaRelativePath,mediaContentType: response.body.node.mediaContentType,mediaOriginalFileName: response.body.node.mediaOriginalFileName,badges: jsonArrayStringToApplicationTransform(response.body.node.badges),progressMode: response.body.node.progressMode,progressPercent: response.body.node.progressPercent,markerIcon: response.body.node.markerIcon,markerTone: response.body.node.markerTone,markerLabel: response.body.node.markerLabel,priority: response.body.node.priority,effectivePriority: response.body.node.effectivePriority,startUtc: dateDeserializer(response.body.node.startUtc)!,endUtc: dateDeserializer(response.body.node.endUtc)!,metadataJson: response.body.node.metadataJson,projectRole: response.body.node.projectRole,relatedProjectId: response.body.node.relatedProjectId,parentProjectCount: response.body.node.parentProjectCount,x: response.body.node.x,y: response.body.node.y,durationSeconds: response.body.node.durationSeconds,actionCapabilities: !response.body.node.actionCapabilities ? null : {
          canRunNormally: response.body.node.actionCapabilities.canRunNormally,canRunAsAdministrator: response.body.node.actionCapabilities.canRunAsAdministrator,canOpenInFileExplorer: response.body.node.actionCapabilities.canOpenInFileExplorer,canOpenInNewTab: response.body.node.actionCapabilities.canOpenInNewTab,runtimeDisplayName: response.body.node.actionCapabilities.runtimeDisplayName,runtimeDisplayCommand: response.body.node.actionCapabilities.runtimeDisplayCommand,runtimeWorkingDirectory: response.body.node.actionCapabilities.runtimeWorkingDirectory,openInNewTabRoute: response.body.node.actionCapabilities.openInNewTabRoute,storageProvider: response.body.node.actionCapabilities.storageProvider,storageLocatorKind: response.body.node.actionCapabilities.storageLocatorKind,storageLocator: response.body.node.actionCapabilities.storageLocator,actions: jsonArrayToApplicationTransform_16(response.body.node.actionCapabilities.actions),guidance: jsonArrayStringToApplicationTransform(response.body.node.actionCapabilities.guidance)
        }
      },workflowId: response.body.workflowId,workflowVersionId: response.body.workflowVersionId,warnings: jsonArrayStringToApplicationTransform(response.body.warnings)
    }!;
  }
  throw createRestError(response);
}
;
export interface PostApiProjectStructureProjectsProjectIdNodesNodeIdWorkflowStartOptions extends OperationOptions {

}
export async function postApiProjectStructureProjectsProjectIdNodesNodeIdWorkflowStart(
  client: CanDoItAllClientContext,
  projectId: string,
  nodeId: string,
  body: ProjectStructureWorkflowNodeStartInput,
  options?: PostApiProjectStructureProjectsProjectIdNodesNodeIdWorkflowStartOptions,
): Promise<void> {
  const path = parse("/api/project-structure/projects/{projectId}/nodes/{nodeId}/workflow/start").expand({
    projectId: projectId,
    nodeId: nodeId
  });
  const httpRequestOptions = {
    headers: {

    },body: jsonProjectStructureWorkflowNodeStartInputToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface GetApiProjectStructureProjectsProjectIdNodesNodeIdWorkflowStatusOptions extends OperationOptions {

}
export async function getApiProjectStructureProjectsProjectIdNodesNodeIdWorkflowStatus(
  client: CanDoItAllClientContext,
  projectId: string,
  nodeId: string,
  options?: GetApiProjectStructureProjectsProjectIdNodesNodeIdWorkflowStatusOptions,
): Promise<void> {
  const path = parse("/api/project-structure/projects/{projectId}/nodes/{nodeId}/workflow/status").expand({
    projectId: projectId,
    nodeId: nodeId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface PostApiProjectStructureProjectsProjectIdNodesNodeIdDeleteOptions extends OperationOptions {

}
export async function postApiProjectStructureProjectsProjectIdNodesNodeIdDelete(
  client: CanDoItAllClientContext,
  projectId: string,
  nodeId: string,
  body: ProjectStructureNodeDeleteInput,
  options?: PostApiProjectStructureProjectsProjectIdNodesNodeIdDeleteOptions,
): Promise<{
  deletedNodeCount: unknown;
  deletionWarnings: Array<{
    kind: number;
    retainedObject: {
      provider: number;
      storageId: null | string;
      locatorKind: number;
      locator: string;
      reason: string;
    };
    message: string;
    remediation: string;
  }>;
  warnings?: null | Array<string>;
}> {
  const path = parse("/api/project-structure/projects/{projectId}/nodes/{nodeId}/delete").expand({
    projectId: projectId,
    nodeId: nodeId
  });
  const httpRequestOptions = {
    headers: {

    },body: jsonProjectStructureNodeDeleteInputToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return {
      deletedNodeCount: response.body.deletedNodeCount,deletionWarnings: jsonArrayToApplicationTransform_17(response.body.deletionWarnings),warnings: jsonArrayStringToApplicationTransform(response.body.warnings)
    }!;
  }
  throw createRestError(response);
}
;
export interface GetApiProjectStructureProjectsProjectIdDeletionCompletionNoticesOptions extends OperationOptions {

}
export async function getApiProjectStructureProjectsProjectIdDeletionCompletionNotices(
  client: CanDoItAllClientContext,
  projectId: string,
  options?: GetApiProjectStructureProjectsProjectIdDeletionCompletionNoticesOptions,
): Promise<void> {
  const path = parse("/api/project-structure/projects/{projectId}/deletion-completion-notices").expand({
    projectId: projectId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface GetApiProjectStructureProjectsProjectIdDeletionCleanupsOptions extends OperationOptions {

}
export async function getApiProjectStructureProjectsProjectIdDeletionCleanups(
  client: CanDoItAllClientContext,
  projectId: string,
  options?: GetApiProjectStructureProjectsProjectIdDeletionCleanupsOptions,
): Promise<void> {
  const path = parse("/api/project-structure/projects/{projectId}/deletion-cleanups").expand({
    projectId: projectId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface PostApiProjectStructureProjectsProjectIdNodesDeleteOptions extends OperationOptions {

}
export async function postApiProjectStructureProjectsProjectIdNodesDelete(
  client: CanDoItAllClientContext,
  projectId: string,
  body: ProjectStructureNodeDeleteBatchInput,
  options?: PostApiProjectStructureProjectsProjectIdNodesDeleteOptions,
): Promise<{
  deletedNodeCount: unknown;
  deletionWarnings: Array<{
    kind: number;
    retainedObject: {
      provider: number;
      storageId: null | string;
      locatorKind: number;
      locator: string;
      reason: string;
    };
    message: string;
    remediation: string;
  }>;
  warnings?: null | Array<string>;
}> {
  const path = parse("/api/project-structure/projects/{projectId}/nodes/delete").expand({
    projectId: projectId
  });
  const httpRequestOptions = {
    headers: {

    },body: jsonProjectStructureNodeDeleteBatchInputToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return {
      deletedNodeCount: response.body.deletedNodeCount,deletionWarnings: jsonArrayToApplicationTransform_18(response.body.deletionWarnings),warnings: jsonArrayStringToApplicationTransform(response.body.warnings)
    }!;
  }
  throw createRestError(response);
}
;
export interface PostApiProjectStructureProjectsProjectIdApprovalsRequestOptions extends OperationOptions {

}
export async function postApiProjectStructureProjectsProjectIdApprovalsRequest(
  client: CanDoItAllClientContext,
  projectId: string,
  body: ProjectStructureApprovalRequestCreateInput,
  options?: PostApiProjectStructureProjectsProjectIdApprovalsRequestOptions,
): Promise<{
  id: string;
  parentId: null | string;
  objectType: "ProjectRoot" | "Phase" | "Milestone" | "ProjectBlock" | "Meeting" | "Recording" | "Transcript" | "Participant" | "WorkItem" | "Repository" | "File" | "ImageAsset" | "VideoAsset" | "Link" | "Connector" | "Script" | "Environment" | "Infrastructure" | "PromptFlow" | "PromptSession" | "PromptStep" | "ProcessDefinition" | "ProcessRun" | "WorkflowDefinition" | "WorkflowRun" | "ValidationRun" | "TestPlan" | "TestEvidence" | "Note" | "Decision" | "SecretReference";
  objectSubtype: string;
  title: string;
  subtitle: string;
  status: string;
  notes: null | string;
  route: string;
  artifactKind: string;
  artifactId: null | string;
  mediaRelativePath: null | string;
  mediaContentType: null | string;
  mediaOriginalFileName: null | string;
  badges: Array<string>;
  progressMode: string;
  progressPercent: unknown;
  markerIcon: string;
  markerTone: string;
  markerLabel: string;
  priority: unknown;
  effectivePriority: unknown;
  startUtc: null | Date;
  endUtc: null | Date;
  metadataJson: null | string;
  projectRole: number;
  relatedProjectId: null | string;
  parentProjectCount: unknown;
  x: unknown;
  y: unknown;
  durationSeconds?: unknown;
  actionCapabilities?: null | {
    canRunNormally: boolean;
    canRunAsAdministrator: boolean;
    canOpenInFileExplorer: boolean;
    canOpenInNewTab: boolean;
    runtimeDisplayName: string;
    runtimeDisplayCommand: string;
    runtimeWorkingDirectory: string;
    openInNewTabRoute: string;
    storageProvider: string;
    storageLocatorKind: string;
    storageLocator: string;
    actions: Array<{
      actionId: string;
      label: string;
      surface: string;
      description: string;
    }>;
    guidance: Array<string>;
  };
}> {
  const path = parse("/api/project-structure/projects/{projectId}/approvals/request").expand({
    projectId: projectId
  });
  const httpRequestOptions = {
    headers: {

    },body: jsonProjectStructureApprovalRequestCreateInputToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return {
      id: response.body.id,parentId: response.body.parentId,objectType: response.body.objectType,objectSubtype: response.body.objectSubtype,title: response.body.title,subtitle: response.body.subtitle,status: response.body.status,notes: response.body.notes,route: response.body.route,artifactKind: response.body.artifactKind,artifactId: response.body.artifactId,mediaRelativePath: response.body.mediaRelativePath,mediaContentType: response.body.mediaContentType,mediaOriginalFileName: response.body.mediaOriginalFileName,badges: jsonArrayStringToApplicationTransform(response.body.badges),progressMode: response.body.progressMode,progressPercent: response.body.progressPercent,markerIcon: response.body.markerIcon,markerTone: response.body.markerTone,markerLabel: response.body.markerLabel,priority: response.body.priority,effectivePriority: response.body.effectivePriority,startUtc: dateDeserializer(response.body.startUtc)!,endUtc: dateDeserializer(response.body.endUtc)!,metadataJson: response.body.metadataJson,projectRole: response.body.projectRole,relatedProjectId: response.body.relatedProjectId,parentProjectCount: response.body.parentProjectCount,x: response.body.x,y: response.body.y,durationSeconds: response.body.durationSeconds,actionCapabilities: !response.body.actionCapabilities ? null : {
        canRunNormally: response.body.actionCapabilities.canRunNormally,canRunAsAdministrator: response.body.actionCapabilities.canRunAsAdministrator,canOpenInFileExplorer: response.body.actionCapabilities.canOpenInFileExplorer,canOpenInNewTab: response.body.actionCapabilities.canOpenInNewTab,runtimeDisplayName: response.body.actionCapabilities.runtimeDisplayName,runtimeDisplayCommand: response.body.actionCapabilities.runtimeDisplayCommand,runtimeWorkingDirectory: response.body.actionCapabilities.runtimeWorkingDirectory,openInNewTabRoute: response.body.actionCapabilities.openInNewTabRoute,storageProvider: response.body.actionCapabilities.storageProvider,storageLocatorKind: response.body.actionCapabilities.storageLocatorKind,storageLocator: response.body.actionCapabilities.storageLocator,actions: jsonArrayToApplicationTransform_19(response.body.actionCapabilities.actions),guidance: jsonArrayStringToApplicationTransform(response.body.actionCapabilities.guidance)
      }
    }!;
  }
  throw createRestError(response);
}
;
export interface PostApiProjectStructureProjectsProjectIdChecklistsQueryOptions extends OperationOptions {

}
export async function postApiProjectStructureProjectsProjectIdChecklistsQuery(
  client: CanDoItAllClientContext,
  projectId: string,
  contentType: "application/json" | "application/*+json",
  body: ProjectStructureChecklistRequest,
  options?: PostApiProjectStructureProjectsProjectIdChecklistsQueryOptions,
): Promise<{
  projectId: string;
  projectName: string;
  items: Array<{
    nodeId: string;
    parentNodeId: null | string;
    objectType: "ProjectRoot" | "Phase" | "Milestone" | "ProjectBlock" | "Meeting" | "Recording" | "Transcript" | "Participant" | "WorkItem" | "Repository" | "File" | "ImageAsset" | "VideoAsset" | "Link" | "Connector" | "Script" | "Environment" | "Infrastructure" | "PromptFlow" | "PromptSession" | "PromptStep" | "ProcessDefinition" | "ProcessRun" | "WorkflowDefinition" | "WorkflowRun" | "ValidationRun" | "TestPlan" | "TestEvidence" | "Note" | "Decision" | "SecretReference";
    objectSubtype: string;
    title: string;
    status: string;
    progressMode: string;
    progressPercent: unknown;
    markerLabel: string;
    priority: unknown;
    effectivePriority: unknown;
    route: string;
    prerequisites: Array<{
      nodeId: string;
      title: string;
      status: string;
      effectivePriority: unknown;
      reason: string;
    }>;
  }>;
  warnings: Array<string>;
}> {
  const path = parse("/api/project-structure/projects/{projectId}/checklists/query").expand({
    projectId: projectId
  });
  const httpRequestOptions = {
    headers: {
      "content-type": contentType
    },body: jsonProjectStructureChecklistRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return {
      projectId: response.body.projectId,projectName: response.body.projectName,items: jsonArrayToApplicationTransform_20(response.body.items),warnings: jsonArrayStringToApplicationTransform(response.body.warnings)
    }!;
  }
  throw createRestError(response);
}
;
export interface PostApiProjectStructureProjectsProjectIdDependenciesQueryOptions extends OperationOptions {

}
export async function postApiProjectStructureProjectsProjectIdDependenciesQuery(
  client: CanDoItAllClientContext,
  projectId: string,
  body: ProjectStructureDependencyQueryRequest,
  options?: PostApiProjectStructureProjectsProjectIdDependenciesQueryOptions,
): Promise<{
  projectId: string;
  projectName: string;
  defaultDurationSeconds: unknown;
  items: Array<{
    nodeId: string;
    parentNodeId: null | string;
    objectType: "ProjectRoot" | "Phase" | "Milestone" | "ProjectBlock" | "Meeting" | "Recording" | "Transcript" | "Participant" | "WorkItem" | "Repository" | "File" | "ImageAsset" | "VideoAsset" | "Link" | "Connector" | "Script" | "Environment" | "Infrastructure" | "PromptFlow" | "PromptSession" | "PromptStep" | "ProcessDefinition" | "ProcessRun" | "WorkflowDefinition" | "WorkflowRun" | "ValidationRun" | "TestPlan" | "TestEvidence" | "Note" | "Decision" | "SecretReference";
    objectSubtype: string;
    title: string;
    status: string;
    progressMode: string;
    progressPercent: unknown;
    markerLabel: string;
    priority: unknown;
    effectivePriority: unknown;
    isFinished: boolean;
    isPausedOrStopped: boolean;
    canExecute: boolean;
    durationSeconds: unknown;
    effectiveDurationSeconds: unknown;
    startUtc: null | Date;
    endUtc: null | Date;
    route: string;
    prerequisites: Array<{
      nodeId: string;
      title: string;
      status: string;
      effectivePriority: unknown;
      isFinished: boolean;
      reason: string;
    }>;
    dependents: Array<{
      nodeId: string;
      title: string;
      status: string;
      effectivePriority: unknown;
      isFinished: boolean;
      reason: string;
    }>;
  }>;
  warnings: Array<string>;
}> {
  const path = parse("/api/project-structure/projects/{projectId}/dependencies/query").expand({
    projectId: projectId
  });
  const httpRequestOptions = {
    headers: {

    },body: jsonProjectStructureDependencyQueryRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return {
      projectId: response.body.projectId,projectName: response.body.projectName,defaultDurationSeconds: response.body.defaultDurationSeconds,items: jsonArrayToApplicationTransform_21(response.body.items),warnings: jsonArrayStringToApplicationTransform(response.body.warnings)
    }!;
  }
  throw createRestError(response);
}
;
export interface PostApiProjectStructureProjectsProjectIdLinksOptions extends OperationOptions {

}
export async function postApiProjectStructureProjectsProjectIdLinks(
  client: CanDoItAllClientContext,
  projectId: string,
  body: ProjectStructureLinkInput,
  options?: PostApiProjectStructureProjectsProjectIdLinksOptions,
): Promise<void> {
  const path = parse("/api/project-structure/projects/{projectId}/links").expand({
    projectId: projectId
  });
  const httpRequestOptions = {
    headers: {},body: jsonProjectStructureLinkInputToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface PostApiProjectStructureProjectsProjectIdLinksUnlinkOptions extends OperationOptions {

}
export async function postApiProjectStructureProjectsProjectIdLinksUnlink(
  client: CanDoItAllClientContext,
  projectId: string,
  body: ProjectStructureLinkInput,
  options?: PostApiProjectStructureProjectsProjectIdLinksUnlinkOptions,
): Promise<void> {
  const path = parse("/api/project-structure/projects/{projectId}/links/unlink").expand({
    projectId: projectId
  });
  const httpRequestOptions = {
    headers: {},body: jsonProjectStructureLinkInputToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface PostApiProjectStructureProjectsProjectIdDependenciesLinkOptions extends OperationOptions {

}
export async function postApiProjectStructureProjectsProjectIdDependenciesLink(
  client: CanDoItAllClientContext,
  projectId: string,
  body: ProjectStructureLinkInput,
  options?: PostApiProjectStructureProjectsProjectIdDependenciesLinkOptions,
): Promise<void> {
  const path = parse("/api/project-structure/projects/{projectId}/dependencies/link").expand({
    projectId: projectId
  });
  const httpRequestOptions = {
    headers: {},body: jsonProjectStructureLinkInputToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface PostApiProjectStructureProjectsProjectIdDependenciesUnlinkOptions extends OperationOptions {

}
export async function postApiProjectStructureProjectsProjectIdDependenciesUnlink(
  client: CanDoItAllClientContext,
  projectId: string,
  body: ProjectStructureLinkInput,
  options?: PostApiProjectStructureProjectsProjectIdDependenciesUnlinkOptions,
): Promise<void> {
  const path = parse("/api/project-structure/projects/{projectId}/dependencies/unlink").expand({
    projectId: projectId
  });
  const httpRequestOptions = {
    headers: {},body: jsonProjectStructureLinkInputToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface GetApiProjectStructureProjectsProjectIdAssetsNodeIdOptions extends OperationOptions {

}
export async function getApiProjectStructureProjectsProjectIdAssetsNodeId(
  client: CanDoItAllClientContext,
  projectId: string,
  nodeId: string,
  options?: GetApiProjectStructureProjectsProjectIdAssetsNodeIdOptions,
): Promise<{
  projectId: string;
  nodeId: string;
  objectType: "ProjectRoot" | "Phase" | "Milestone" | "ProjectBlock" | "Meeting" | "Recording" | "Transcript" | "Participant" | "WorkItem" | "Repository" | "File" | "ImageAsset" | "VideoAsset" | "Link" | "Connector" | "Script" | "Environment" | "Infrastructure" | "PromptFlow" | "PromptSession" | "PromptStep" | "ProcessDefinition" | "ProcessRun" | "WorkflowDefinition" | "WorkflowRun" | "ValidationRun" | "TestPlan" | "TestEvidence" | "Note" | "Decision" | "SecretReference";
  objectSubtype: string;
  title: string;
  subtitle: string;
  route: string;
  mediaRelativePath: string;
  mediaContentType: string;
  mediaOriginalFileName: string;
  metadataJson: string;
  isReadonly: boolean;
  revisionParentNodeId: null | string;
}> {
  const path = parse("/api/project-structure/projects/{projectId}/assets/{nodeId}").expand({
    projectId: projectId,
    nodeId: nodeId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return {
      projectId: response.body.projectId,nodeId: response.body.nodeId,objectType: response.body.objectType,objectSubtype: response.body.objectSubtype,title: response.body.title,subtitle: response.body.subtitle,route: response.body.route,mediaRelativePath: response.body.mediaRelativePath,mediaContentType: response.body.mediaContentType,mediaOriginalFileName: response.body.mediaOriginalFileName,metadataJson: response.body.metadataJson,isReadonly: response.body.isReadonly,revisionParentNodeId: response.body.revisionParentNodeId
    }!;
  }
  throw createRestError(response);
}
;
export interface GetApiProjectStructureProjectsProjectIdAssetsNodeIdContentOptions extends OperationOptions {

}
export async function getApiProjectStructureProjectsProjectIdAssetsNodeIdContent(
  client: CanDoItAllClientContext,
  projectId: string,
  nodeId: string,
  options?: GetApiProjectStructureProjectsProjectIdAssetsNodeIdContentOptions,
): Promise<{
  asset: {
    projectId: string;
    nodeId: string;
    objectType: "ProjectRoot" | "Phase" | "Milestone" | "ProjectBlock" | "Meeting" | "Recording" | "Transcript" | "Participant" | "WorkItem" | "Repository" | "File" | "ImageAsset" | "VideoAsset" | "Link" | "Connector" | "Script" | "Environment" | "Infrastructure" | "PromptFlow" | "PromptSession" | "PromptStep" | "ProcessDefinition" | "ProcessRun" | "WorkflowDefinition" | "WorkflowRun" | "ValidationRun" | "TestPlan" | "TestEvidence" | "Note" | "Decision" | "SecretReference";
    objectSubtype: string;
    title: string;
    subtitle: string;
    route: string;
    mediaRelativePath: string;
    mediaContentType: string;
    mediaOriginalFileName: string;
    metadataJson: string;
    isReadonly: boolean;
    revisionParentNodeId: null | string;
  };
  contentLength: unknown;
  base64Data: string;
  base64DataOmitted?: boolean;
  contentSummary?: string;
}> {
  const path = parse("/api/project-structure/projects/{projectId}/assets/{nodeId}/content").expand({
    projectId: projectId,
    nodeId: nodeId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return {
      asset: {
        projectId: response.body.asset.projectId,nodeId: response.body.asset.nodeId,objectType: response.body.asset.objectType,objectSubtype: response.body.asset.objectSubtype,title: response.body.asset.title,subtitle: response.body.asset.subtitle,route: response.body.asset.route,mediaRelativePath: response.body.asset.mediaRelativePath,mediaContentType: response.body.asset.mediaContentType,mediaOriginalFileName: response.body.asset.mediaOriginalFileName,metadataJson: response.body.asset.metadataJson,isReadonly: response.body.asset.isReadonly,revisionParentNodeId: response.body.asset.revisionParentNodeId
      },contentLength: response.body.contentLength,base64Data: response.body.base64Data,base64DataOmitted: response.body.base64DataOmitted,contentSummary: response.body.contentSummary
    }!;
  }
  throw createRestError(response);
}
;
export interface PostApiProjectStructureProjectsProjectIdAssetsOptions extends OperationOptions {

}
export async function postApiProjectStructureProjectsProjectIdAssets(
  client: CanDoItAllClientContext,
  projectId: string,
  contentType: "application/json" | "application/*+json",
  body: ProjectStructureAssetCreateInput,
  options?: PostApiProjectStructureProjectsProjectIdAssetsOptions,
): Promise<{
  id: string;
  parentId: null | string;
  objectType: "ProjectRoot" | "Phase" | "Milestone" | "ProjectBlock" | "Meeting" | "Recording" | "Transcript" | "Participant" | "WorkItem" | "Repository" | "File" | "ImageAsset" | "VideoAsset" | "Link" | "Connector" | "Script" | "Environment" | "Infrastructure" | "PromptFlow" | "PromptSession" | "PromptStep" | "ProcessDefinition" | "ProcessRun" | "WorkflowDefinition" | "WorkflowRun" | "ValidationRun" | "TestPlan" | "TestEvidence" | "Note" | "Decision" | "SecretReference";
  objectSubtype: string;
  title: string;
  subtitle: string;
  status: string;
  notes: null | string;
  route: string;
  artifactKind: string;
  artifactId: null | string;
  mediaRelativePath: null | string;
  mediaContentType: null | string;
  mediaOriginalFileName: null | string;
  badges: Array<string>;
  progressMode: string;
  progressPercent: unknown;
  markerIcon: string;
  markerTone: string;
  markerLabel: string;
  priority: unknown;
  effectivePriority: unknown;
  startUtc: null | Date;
  endUtc: null | Date;
  metadataJson: null | string;
  projectRole: number;
  relatedProjectId: null | string;
  parentProjectCount: unknown;
  x: unknown;
  y: unknown;
  durationSeconds?: unknown;
  actionCapabilities?: null | {
    canRunNormally: boolean;
    canRunAsAdministrator: boolean;
    canOpenInFileExplorer: boolean;
    canOpenInNewTab: boolean;
    runtimeDisplayName: string;
    runtimeDisplayCommand: string;
    runtimeWorkingDirectory: string;
    openInNewTabRoute: string;
    storageProvider: string;
    storageLocatorKind: string;
    storageLocator: string;
    actions: Array<{
      actionId: string;
      label: string;
      surface: string;
      description: string;
    }>;
    guidance: Array<string>;
  };
}> {
  const path = parse("/api/project-structure/projects/{projectId}/assets").expand({
    projectId: projectId
  });
  const httpRequestOptions = {
    headers: {
      "content-type": contentType
    },body: jsonProjectStructureAssetCreateInputToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return {
      id: response.body.id,parentId: response.body.parentId,objectType: response.body.objectType,objectSubtype: response.body.objectSubtype,title: response.body.title,subtitle: response.body.subtitle,status: response.body.status,notes: response.body.notes,route: response.body.route,artifactKind: response.body.artifactKind,artifactId: response.body.artifactId,mediaRelativePath: response.body.mediaRelativePath,mediaContentType: response.body.mediaContentType,mediaOriginalFileName: response.body.mediaOriginalFileName,badges: jsonArrayStringToApplicationTransform(response.body.badges),progressMode: response.body.progressMode,progressPercent: response.body.progressPercent,markerIcon: response.body.markerIcon,markerTone: response.body.markerTone,markerLabel: response.body.markerLabel,priority: response.body.priority,effectivePriority: response.body.effectivePriority,startUtc: dateDeserializer(response.body.startUtc)!,endUtc: dateDeserializer(response.body.endUtc)!,metadataJson: response.body.metadataJson,projectRole: response.body.projectRole,relatedProjectId: response.body.relatedProjectId,parentProjectCount: response.body.parentProjectCount,x: response.body.x,y: response.body.y,durationSeconds: response.body.durationSeconds,actionCapabilities: !response.body.actionCapabilities ? null : {
        canRunNormally: response.body.actionCapabilities.canRunNormally,canRunAsAdministrator: response.body.actionCapabilities.canRunAsAdministrator,canOpenInFileExplorer: response.body.actionCapabilities.canOpenInFileExplorer,canOpenInNewTab: response.body.actionCapabilities.canOpenInNewTab,runtimeDisplayName: response.body.actionCapabilities.runtimeDisplayName,runtimeDisplayCommand: response.body.actionCapabilities.runtimeDisplayCommand,runtimeWorkingDirectory: response.body.actionCapabilities.runtimeWorkingDirectory,openInNewTabRoute: response.body.actionCapabilities.openInNewTabRoute,storageProvider: response.body.actionCapabilities.storageProvider,storageLocatorKind: response.body.actionCapabilities.storageLocatorKind,storageLocator: response.body.actionCapabilities.storageLocator,actions: jsonArrayToApplicationTransform_22(response.body.actionCapabilities.actions),guidance: jsonArrayStringToApplicationTransform(response.body.actionCapabilities.guidance)
      }
    }!;
  }
  throw createRestError(response);
}
;
export interface PostApiProjectStructureProjectsProjectIdAssetsNodeIdRevisionsOptions extends OperationOptions {

}
export async function postApiProjectStructureProjectsProjectIdAssetsNodeIdRevisions(
  client: CanDoItAllClientContext,
  projectId: string,
  nodeId: string,
  body: ProjectStructureAssetRevisionRequest,
  options?: PostApiProjectStructureProjectsProjectIdAssetsNodeIdRevisionsOptions,
): Promise<{
  projectId: string;
  nodeId: string;
  objectType: "ProjectRoot" | "Phase" | "Milestone" | "ProjectBlock" | "Meeting" | "Recording" | "Transcript" | "Participant" | "WorkItem" | "Repository" | "File" | "ImageAsset" | "VideoAsset" | "Link" | "Connector" | "Script" | "Environment" | "Infrastructure" | "PromptFlow" | "PromptSession" | "PromptStep" | "ProcessDefinition" | "ProcessRun" | "WorkflowDefinition" | "WorkflowRun" | "ValidationRun" | "TestPlan" | "TestEvidence" | "Note" | "Decision" | "SecretReference";
  objectSubtype: string;
  title: string;
  subtitle: string;
  route: string;
  mediaRelativePath: string;
  mediaContentType: string;
  mediaOriginalFileName: string;
  metadataJson: string;
  isReadonly: boolean;
  revisionParentNodeId: null | string;
}> {
  const path = parse("/api/project-structure/projects/{projectId}/assets/{nodeId}/revisions").expand({
    projectId: projectId,
    nodeId: nodeId
  });
  const httpRequestOptions = {
    headers: {

    },body: jsonProjectStructureAssetRevisionRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return {
      projectId: response.body.projectId,nodeId: response.body.nodeId,objectType: response.body.objectType,objectSubtype: response.body.objectSubtype,title: response.body.title,subtitle: response.body.subtitle,route: response.body.route,mediaRelativePath: response.body.mediaRelativePath,mediaContentType: response.body.mediaContentType,mediaOriginalFileName: response.body.mediaOriginalFileName,metadataJson: response.body.metadataJson,isReadonly: response.body.isReadonly,revisionParentNodeId: response.body.revisionParentNodeId
    }!;
  }
  throw createRestError(response);
}
;
export interface PostApiProjectStructureImportsOptions extends OperationOptions {

}
export async function postApiProjectStructureImports(
  client: CanDoItAllClientContext,
  body: ProjectStructureImportRequest,
  options?: PostApiProjectStructureImportsOptions,
): Promise<void> {
  const path = parse("/api/project-structure/imports").expand({});
  const httpRequestOptions = {
    headers: {

    },body: jsonProjectStructureImportRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface PostApiProjectStructureKnowledgeQueryOptions extends OperationOptions {

}
export async function postApiProjectStructureKnowledgeQuery(
  client: CanDoItAllClientContext,
  body: ProjectManagementGuidanceQueryRequest,
  options?: PostApiProjectStructureKnowledgeQueryOptions,
): Promise<void> {
  const path = parse("/api/project-structure/knowledge/query").expand({});
  const httpRequestOptions = {
    headers: {

    },body: jsonProjectManagementGuidanceQueryRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface PostApiProjectStructureLeasesAcquireOptions extends OperationOptions {

}
export async function postApiProjectStructureLeasesAcquire(
  client: CanDoItAllClientContext,
  body: ProjectStructureLeaseAcquireRequest,
  options?: PostApiProjectStructureLeasesAcquireOptions,
): Promise<void> {
  const path = parse("/api/project-structure/leases/acquire").expand({});
  const httpRequestOptions = {
    headers: {

    },body: jsonProjectStructureLeaseAcquireRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface PostApiProjectStructureLeasesRenewOptions extends OperationOptions {

}
export async function postApiProjectStructureLeasesRenew(
  client: CanDoItAllClientContext,
  body: ProjectStructureLeaseRenewRequest,
  options?: PostApiProjectStructureLeasesRenewOptions,
): Promise<void> {
  const path = parse("/api/project-structure/leases/renew").expand({});
  const httpRequestOptions = {
    headers: {

    },body: jsonProjectStructureLeaseRenewRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface PostApiProjectStructureLeasesReleaseOptions extends OperationOptions {

}
export async function postApiProjectStructureLeasesRelease(
  client: CanDoItAllClientContext,
  body: ProjectStructureLeaseReleaseRequest,
  options?: PostApiProjectStructureLeasesReleaseOptions,
): Promise<void> {
  const path = parse("/api/project-structure/leases/release").expand({});
  const httpRequestOptions = {
    headers: {

    },body: jsonProjectStructureLeaseReleaseRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface GetApiProjectStructureLeasesCurrentOptions extends OperationOptions {

}
export async function getApiProjectStructureLeasesCurrent(
  client: CanDoItAllClientContext,
  scopeKind: string,
  scopeKey: string,
  options?: GetApiProjectStructureLeasesCurrentOptions,
): Promise<void> {
  const path = parse("/api/project-structure/leases/current{?scopeKind,scopeKey}").expand({
    scopeKind: scopeKind,
    scopeKey: scopeKey
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface PostApiProjectStructureAnalyticsQueryOptions extends OperationOptions {

}
export async function postApiProjectStructureAnalyticsQuery(
  client: CanDoItAllClientContext,
  body: ProjectStructureAnalyticsQueryRequest,
  options?: PostApiProjectStructureAnalyticsQueryOptions,
): Promise<void> {
  const path = parse("/api/project-structure/analytics/query").expand({});
  const httpRequestOptions = {
    headers: {

    },body: jsonProjectStructureAnalyticsQueryRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface GetApiAccessStatusOptions extends OperationOptions {}
export async function getApiAccessStatus(
  client: CanDoItAllClientContext,
  options?: GetApiAccessStatusOptions,
): Promise<ApiAccessStatus> {
  const path = parse("/api/access/status").expand({});
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonApiAccessStatusToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface IssueApiTokenOptions extends OperationOptions {}
export async function issueApiToken(
  client: CanDoItAllClientContext,
  body: ApiTokenIssueRequest,
  options?: IssueApiTokenOptions,
): Promise<ApiTokenIssueResult> {
  const path = parse("/api/access/tokens").expand({});
  const httpRequestOptions = {
    headers: {},body: jsonApiTokenIssueRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonApiTokenIssueResultToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface ListProjectsOptions extends OperationOptions {}
export async function listProjects(
  client: CanDoItAllClientContext,
  options?: ListProjectsOptions,
): Promise<Array<ProjectSummary>> {
  const path = parse("/api/projects").expand({});
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonArrayProjectSummaryToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface SaveProjectOptions extends OperationOptions {}
export async function saveProject(
  client: CanDoItAllClientContext,
  body: ProjectEditorModel,
  options?: SaveProjectOptions,
): Promise<string | ApiErrorResponse | ApiErrorResponse> {
  const path = parse("/api/projects").expand({});
  const httpRequestOptions = {
    headers: {},body: jsonProjectEditorModelToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return response.body!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface ListProjectAccessItemsOptions extends OperationOptions {}
export async function listProjectAccessItems(
  client: CanDoItAllClientContext,
  options?: ListProjectAccessItemsOptions,
): Promise<Array<ProjectAccessListItem>> {
  const path = parse("/api/projects/access-list").expand({});
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonArrayProjectAccessListItemToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface ListProjectHierarchyLinksOptions extends OperationOptions {}
export async function listProjectHierarchyLinks(
  client: CanDoItAllClientContext,
  options?: ListProjectHierarchyLinksOptions,
): Promise<Array<ProjectHierarchyLinkSummary>> {
  const path = parse("/api/projects/hierarchy-links").expand({});
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonArrayProjectHierarchyLinkSummaryToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface DeleteProjectOptions extends OperationOptions {}
export async function deleteProject(
  client: CanDoItAllClientContext,
  projectId: string,
  options?: DeleteProjectOptions,
): Promise<ProjectDeletionResult | ProjectDeletionCleanupPendingApiResponse> {
  const path = parse("/api/projects/{projectId}").expand({
    projectId: projectId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).delete(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonProjectDeletionResultToApplicationTransform(response.body)!;
  }
  if (+response.status === 409 && response.headers["content-type"]?.includes("application/json")) {
    return {
      code: response.body.code,message: response.body.message,recovery: jsonProjectDeletionRecoveryToApplicationTransform(response.body.recovery)
    }!;
  }
  throw createRestError(response);
}
;
export interface GetProjectEditorOptions extends OperationOptions {}
export async function getProjectEditor(
  client: CanDoItAllClientContext,
  projectId: string,
  options?: GetProjectEditorOptions,
): Promise<ProjectEditorModel> {
  const path = parse("/api/projects/{projectId}").expand({
    projectId: projectId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonProjectEditorModelToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface ListPendingProjectDeletionCleanupsOptions extends OperationOptions {

}
export async function listPendingProjectDeletionCleanups(
  client: CanDoItAllClientContext,
  options?: ListPendingProjectDeletionCleanupsOptions,
): Promise<Array<ProjectDeletionPendingCleanup>> {
  const path = parse("/api/projects/deletion-cleanups").expand({});
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonArrayProjectDeletionPendingCleanupToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface ListProjectDeletionCompletionNoticesOptions extends OperationOptions {

}
export async function listProjectDeletionCompletionNotices(
  client: CanDoItAllClientContext,
  options?: ListProjectDeletionCompletionNoticesOptions,
): Promise<Array<ProjectDeletionCompletionNotice>> {
  const path = parse("/api/projects/deletion-completion-notices").expand({});
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonArrayProjectDeletionCompletionNoticeToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface RetryPendingProjectDeletionCleanupOptions extends OperationOptions {

}
export async function retryPendingProjectDeletionCleanup(
  client: CanDoItAllClientContext,
  projectId: string,
  participantId: string,
  recoveryId: string,
  options?: RetryPendingProjectDeletionCleanupOptions,
): Promise<ProjectDeletionResult | ApiErrorResponse | ApiErrorResponse | ProjectDeletionCleanupPendingApiResponse> {
  const path = parse("/api/projects/{projectId}/deletion-cleanups/{participantId}/{recoveryId}/retry").expand({
    projectId: projectId,
    participantId: participantId,
    recoveryId: recoveryId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonProjectDeletionResultToApplicationTransform(response.body)!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 409 && response.headers["content-type"]?.includes("application/json")) {
    return {
      code: response.body.code,message: response.body.message,recovery: jsonProjectDeletionRecoveryToApplicationTransform(response.body.recovery)
    }!;
  }
  throw createRestError(response);
}
;
export interface GetProjectHierarchyOptions extends OperationOptions {}
export async function getProjectHierarchy(
  client: CanDoItAllClientContext,
  projectId: string,
  options?: GetProjectHierarchyOptions,
): Promise<ProjectHierarchySnapshot> {
  const path = parse("/api/projects/{projectId}/hierarchy").expand({
    projectId: projectId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonProjectHierarchySnapshotToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface DetachProjectSubprojectOptions extends OperationOptions {}
export async function detachProjectSubproject(
  client: CanDoItAllClientContext,
  parentProjectId: string,
  childProjectId: string,
  options?: DetachProjectSubprojectOptions,
): Promise<ApiAck | ApiErrorResponse> {
  const path = parse("/api/projects/{parentProjectId}/subprojects/{childProjectId}").expand({
    parentProjectId: parentProjectId,
    childProjectId: childProjectId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).delete(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonApiAckToApplicationTransform(response.body)!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface AttachProjectSubprojectOptions extends OperationOptions {}
export async function attachProjectSubproject(
  client: CanDoItAllClientContext,
  parentProjectId: string,
  childProjectId: string,
  options?: AttachProjectSubprojectOptions,
): Promise<ApiAck | ApiErrorResponse> {
  const path = parse("/api/projects/{parentProjectId}/subprojects/{childProjectId}").expand({
    parentProjectId: parentProjectId,
    childProjectId: childProjectId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonApiAckToApplicationTransform(response.body)!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface ReconnectProjectSubprojectOptions extends OperationOptions {}
export async function reconnectProjectSubproject(
  client: CanDoItAllClientContext,
  childProjectId: string,
  body: ProjectReconnectSubprojectApiRequest,
  options?: ReconnectProjectSubprojectOptions,
): Promise<ApiAck | ApiErrorResponse> {
  const path = parse("/api/projects/{childProjectId}/reconnect-subproject").expand({
    childProjectId: childProjectId
  });
  const httpRequestOptions = {
    headers: {

    },body: jsonProjectReconnectSubprojectApiRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonApiAckToApplicationTransform(response.body)!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface ListAgentsOptions extends OperationOptions {
  includeTemplates?: boolean
}
export async function listAgents(
  client: CanDoItAllClientContext,
  options?: ListAgentsOptions,
): Promise<Array<AgentDefinition> | ApiErrorResponse | ApiErrorResponse> {
  const path = parse("/api/agents{?includeTemplates}").expand({
    ...(options?.includeTemplates != null && {includeTemplates: options.includeTemplates})
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonArrayAgentDefinitionToApplicationTransform(response.body)!;
  }
  if (+response.status === 401 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 403 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface SaveAgentOptions extends OperationOptions {}
export async function saveAgent(
  client: CanDoItAllClientContext,
  body: AgentEditorModel,
  options?: SaveAgentOptions,
): Promise<string | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse> {
  const path = parse("/api/agents").expand({});
  const httpRequestOptions = {
    headers: {},body: jsonAgentEditorModelToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return response.body!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 401 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 403 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface GetAgentBootstrapOptions extends OperationOptions {
  includeTemplates?: boolean
}
export async function getAgentBootstrap(
  client: CanDoItAllClientContext,
  options?: GetAgentBootstrapOptions,
): Promise<AgentChatPageBootstrapApiResponse> {
  const path = parse("/api/agents/bootstrap{?includeTemplates}").expand({
    ...(options?.includeTemplates != null && {includeTemplates: options.includeTemplates})
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonAgentChatPageBootstrapApiResponseToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface DeleteAgentOptions extends OperationOptions {}
export async function deleteAgent(
  client: CanDoItAllClientContext,
  agentId: string,
  options?: DeleteAgentOptions,
): Promise<ApiAck | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse> {
  const path = parse("/api/agents/{agentId}").expand({
    agentId: agentId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).delete(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonApiAckToApplicationTransform(response.body)!;
  }
  if (+response.status === 401 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 403 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 409 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface GetAgentEditorOptions extends OperationOptions {}
export async function getAgentEditor(
  client: CanDoItAllClientContext,
  agentId: string,
  options?: GetAgentEditorOptions,
): Promise<void> {
  const path = parse("/api/agents/{agentId}").expand({
    agentId: agentId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface CloneAgentOptions extends OperationOptions {}
export async function cloneAgent(
  client: CanDoItAllClientContext,
  agentId: string,
  body: AgentCloneApiRequest,
  options?: CloneAgentOptions,
): Promise<void> {
  const path = parse("/api/agents/{agentId}/clone").expand({
    agentId: agentId
  });
  const httpRequestOptions = {
    headers: {},body: jsonAgentCloneApiRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface ConvertAgentToTemplateOptions extends OperationOptions {}
export async function convertAgentToTemplate(
  client: CanDoItAllClientContext,
  agentId: string,
  body: AgentTemplateConversionApiRequest,
  options?: ConvertAgentToTemplateOptions,
): Promise<void> {
  const path = parse("/api/agents/{agentId}/convert-to-template").expand({
    agentId: agentId
  });
  const httpRequestOptions = {
    headers: {

    },body: jsonAgentTemplateConversionApiRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface ExportAgentOptions extends OperationOptions {}
export async function exportAgent(
  client: CanDoItAllClientContext,
  agentId: string,
  options?: ExportAgentOptions,
): Promise<void> {
  const path = parse("/api/agents/{agentId}/export").expand({
    agentId: agentId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface ImportAgentOptions extends OperationOptions {}
export async function importAgent(
  client: CanDoItAllClientContext,
  body: AgentImportApiRequest,
  options?: ImportAgentOptions,
): Promise<void> {
  const path = parse("/api/agents/import").expand({});
  const httpRequestOptions = {
    headers: {},body: jsonAgentImportApiRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface ImportAgentPackageOptions extends OperationOptions {
  idempotencyKey?: string
  contentType?: "multipart/form-data"
}
export async function importAgentPackage(
  client: CanDoItAllClientContext,
  body: AgentPackageImportApiForm,
  options?: ImportAgentPackageOptions,
): Promise<AgentPackageImportReceipt | AgentPackageImportReceipt | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse> {
  const path = parse("/api/agents/import-package").expand({});
  const httpRequestOptions = {
    headers: {
      ...(options?.idempotencyKey != null && {"idempotency-key": options.idempotencyKey}),
      "content-type": options?.contentType ?? "multipart/form-data"
    },body: [{
      name: "package",
      body: body.package_
    },
    {
      name: "mode",
      body: body.mode
    },
    {
      name: "externalKey",
      body: body.externalKey
    },
    {
      name: "externalNamespace",
      body: body.externalNamespace
    },
    {
      name: "expectedPackageSha256",
      body: body.expectedPackageSha256
    },
    {
      name: "expectedAgentVersion",
      body: body.expectedAgentVersion
    }],
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonAgentPackageImportReceiptToApplicationTransform(response.body)!;
  }
  if (+response.status === 201 && response.headers["content-type"]?.includes("application/json")) {
    return {
      agentId: response.body.agentId,mode: response.body.mode,externalKey: response.body.externalKey,packageSha256: response.body.packageSha256,packageSchemaVersion: response.body.packageSchemaVersion,importedVersion: response.body.importedVersion,configurationSha256: response.body.configurationSha256,unresolvedPrerequisites: jsonArrayStringToApplicationTransform(response.body.unresolvedPrerequisites),warnings: jsonArrayStringToApplicationTransform(response.body.warnings),replayed: response.body.replayed,externalNamespace: response.body.externalNamespace
    }!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 401 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 403 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 409 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 412 && response.headers["content-type"]?.includes("application/json")) {
    return jsonApiErrorResponseToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface ArchiveAgentByExternalKeyOptions extends OperationOptions {
  idempotencyKey?: string
  ifMatch?: string
}
export async function archiveAgentByExternalKey(
  client: CanDoItAllClientContext,
  externalNamespace: string,
  key: string,
  options?: ArchiveAgentByExternalKeyOptions,
): Promise<AgentExternalProvisioningReceipt | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse> {
  const path = parse("/api/agents/by-external-key/{externalNamespace}/{key}").expand({
    externalNamespace: externalNamespace,
    key: key
  });
  const httpRequestOptions = {
    headers: {
      ...(options?.idempotencyKey != null && {"idempotency-key": options.idempotencyKey}),
      ...(options?.ifMatch != null && {"if-match": options.ifMatch})
    },
  };
  const response = await client.pathUnchecked(path).delete(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonAgentExternalProvisioningReceiptToApplicationTransform(response.body)!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 401 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 403 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 409 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 412 && response.headers["content-type"]?.includes("application/json")) {
    return jsonApiErrorResponseToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface GetAgentByExternalKeyOptions extends OperationOptions {}
export async function getAgentByExternalKey(
  client: CanDoItAllClientContext,
  externalNamespace: string,
  key: string,
  options?: GetAgentByExternalKeyOptions,
): Promise<AgentExternalProvisioningResource | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse> {
  const path = parse("/api/agents/by-external-key/{externalNamespace}/{key}").expand({
    externalNamespace: externalNamespace,
    key: key
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonAgentExternalProvisioningResourceToApplicationTransform(response.body)!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 401 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 403 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface ProvisionAgentByExternalKeyOptions extends OperationOptions {
  idempotencyKey?: string
  ifMatch?: string
}
export async function provisionAgentByExternalKey(
  client: CanDoItAllClientContext,
  externalNamespace: string,
  key: string,
  body: AgentEditorModel,
  options?: ProvisionAgentByExternalKeyOptions,
): Promise<AgentExternalProvisioningReceipt | AgentExternalProvisioningReceipt | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse> {
  const path = parse("/api/agents/by-external-key/{externalNamespace}/{key}").expand({
    externalNamespace: externalNamespace,
    key: key
  });
  const httpRequestOptions = {
    headers: {
      ...(options?.idempotencyKey != null && {"idempotency-key": options.idempotencyKey}),
      ...(options?.ifMatch != null && {"if-match": options.ifMatch})
    },body: jsonAgentEditorModelToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).put(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonAgentExternalProvisioningReceiptToApplicationTransform(response.body)!;
  }
  if (+response.status === 201 && response.headers["content-type"]?.includes("application/json")) {
    return {
      namespace: response.body.namespace,key: response.body.key,agentId: response.body.agentId,configurationVersion: response.body.configurationVersion,created: response.body.created,replayed: response.body.replayed,archived: response.body.archived,warnings: jsonArrayStringToApplicationTransform(response.body.warnings)
    }!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 401 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 403 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 409 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 412 && response.headers["content-type"]?.includes("application/json")) {
    return jsonApiErrorResponseToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface ListAgentTeamsOptions extends OperationOptions {}
export async function listAgentTeams(
  client: CanDoItAllClientContext,
  options?: ListAgentTeamsOptions,
): Promise<void> {
  const path = parse("/api/agents/teams").expand({});
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface SaveAgentTeamOptions extends OperationOptions {}
export async function saveAgentTeam(
  client: CanDoItAllClientContext,
  body: AgentTeamEditorModel,
  options?: SaveAgentTeamOptions,
): Promise<void> {
  const path = parse("/api/agents/teams").expand({});
  const httpRequestOptions = {
    headers: {},body: jsonAgentTeamEditorModelToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface DeleteAgentTeamOptions extends OperationOptions {}
export async function deleteAgentTeam(
  client: CanDoItAllClientContext,
  teamId: string,
  options?: DeleteAgentTeamOptions,
): Promise<void> {
  const path = parse("/api/agents/teams/{teamId}").expand({
    teamId: teamId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).delete(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface GetAgentTeamOptions extends OperationOptions {}
export async function getAgentTeam(
  client: CanDoItAllClientContext,
  teamId: string,
  options?: GetAgentTeamOptions,
): Promise<void> {
  const path = parse("/api/agents/teams/{teamId}").expand({
    teamId: teamId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface UpdateAgentTeamOptions extends OperationOptions {}
export async function updateAgentTeam(
  client: CanDoItAllClientContext,
  teamId: string,
  body: AgentTeamEditorModel,
  options?: UpdateAgentTeamOptions,
): Promise<void> {
  const path = parse("/api/agents/teams/{teamId}").expand({
    teamId: teamId
  });
  const httpRequestOptions = {
    headers: {},body: jsonAgentTeamEditorModelToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).put(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface GetAgentTeamEditorOptions extends OperationOptions {}
export async function getAgentTeamEditor(
  client: CanDoItAllClientContext,
  teamId: string,
  options?: GetAgentTeamEditorOptions,
): Promise<void> {
  const path = parse("/api/agents/teams/{teamId}/editor").expand({
    teamId: teamId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface ListAgentTeamAgentsOptions extends OperationOptions {
  includeTemplates?: boolean
}
export async function listAgentTeamAgents(
  client: CanDoItAllClientContext,
  teamId: string,
  options?: ListAgentTeamAgentsOptions,
): Promise<void> {
  const path = parse("/api/agents/teams/{teamId}/agents{?includeTemplates}").expand({
    teamId: teamId,
    ...(options?.includeTemplates != null && {includeTemplates: options.includeTemplates})
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface UpdateAgentTeamMembersOptions extends OperationOptions {}
export async function updateAgentTeamMembers(
  client: CanDoItAllClientContext,
  teamId: string,
  body: AgentTeamMembersApiRequest,
  options?: UpdateAgentTeamMembersOptions,
): Promise<void> {
  const path = parse("/api/agents/teams/{teamId}/members").expand({
    teamId: teamId
  });
  const httpRequestOptions = {
    headers: {},body: jsonAgentTeamMembersApiRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface ReplaceAgentTeamMembersOptions extends OperationOptions {}
export async function replaceAgentTeamMembers(
  client: CanDoItAllClientContext,
  teamId: string,
  body: AgentTeamMembersApiRequest,
  options?: ReplaceAgentTeamMembersOptions,
): Promise<void> {
  const path = parse("/api/agents/teams/{teamId}/members").expand({
    teamId: teamId
  });
  const httpRequestOptions = {
    headers: {},body: jsonAgentTeamMembersApiRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).put(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface ListAgentProvidersOptions extends OperationOptions {}
export async function listAgentProviders(
  client: CanDoItAllClientContext,
  options?: ListAgentProvidersOptions,
): Promise<Array<ProviderProfile> | ApiErrorResponse | ApiErrorResponse> {
  const path = parse("/api/agents/providers").expand({});
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonArrayProviderProfileToApplicationTransform(response.body)!;
  }
  if (+response.status === 401 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 403 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface SaveAgentProviderOptions extends OperationOptions {}
export async function saveAgentProvider(
  client: CanDoItAllClientContext,
  body: ProviderProfileEditorModel,
  options?: SaveAgentProviderOptions,
): Promise<string | ApiErrorResponse | ApiErrorResponse> {
  const path = parse("/api/agents/providers").expand({});
  const httpRequestOptions = {
    headers: {},body: jsonProviderProfileEditorModelToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return response.body!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 500 && response.headers["content-type"]?.includes("application/json")) {
    return jsonApiErrorResponseToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface GetAgentProviderEditorOptions extends OperationOptions {}
export async function getAgentProviderEditor(
  client: CanDoItAllClientContext,
  providerId: string,
  options?: GetAgentProviderEditorOptions,
): Promise<void> {
  const path = parse("/api/agents/providers/{providerId}/editor").expand({
    providerId: providerId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface DeleteAgentProviderOptions extends OperationOptions {}
export async function deleteAgentProvider(
  client: CanDoItAllClientContext,
  providerId: string,
  options?: DeleteAgentProviderOptions,
): Promise<void> {
  const path = parse("/api/agents/providers/{providerId}").expand({
    providerId: providerId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).delete(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface TestAgentProviderOptions extends OperationOptions {}
export async function testAgentProvider(
  client: CanDoItAllClientContext,
  providerId: string,
  options?: TestAgentProviderOptions,
): Promise<void> {
  const path = parse("/api/agents/providers/{providerId}/test").expand({
    providerId: providerId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface RunAgentProviderTestChatOptions extends OperationOptions {}
export async function runAgentProviderTestChat(
  client: CanDoItAllClientContext,
  providerId: string,
  body: ProviderTestChatRequest,
  options?: RunAgentProviderTestChatOptions,
): Promise<void> {
  const path = parse("/api/agents/providers/{providerId}/test-chat").expand({
    providerId: providerId
  });
  const httpRequestOptions = {
    headers: {},body: jsonProviderTestChatRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface CreateAgentProviderModelMaintenanceOptions extends OperationOptions {

}
export async function createAgentProviderModelMaintenance(
  client: CanDoItAllClientContext,
  providerId: string,
  body: ProviderModelMaintenanceEditorRequest,
  options?: CreateAgentProviderModelMaintenanceOptions,
): Promise<void> {
  const path = parse("/api/agents/providers/{providerId}/ollama-modelfile").expand({
    providerId: providerId
  });
  const httpRequestOptions = {
    headers: {

    },body: jsonProviderModelMaintenanceEditorRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface ListAgentCapabilitiesOptions extends OperationOptions {}
export async function listAgentCapabilities(
  client: CanDoItAllClientContext,
  options?: ListAgentCapabilitiesOptions,
): Promise<void> {
  const path = parse("/api/agents/capabilities").expand({});
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface SaveAgentCapabilityOptions extends OperationOptions {}
export async function saveAgentCapability(
  client: CanDoItAllClientContext,
  body: CapabilityEditorModel,
  options?: SaveAgentCapabilityOptions,
): Promise<void> {
  const path = parse("/api/agents/capabilities").expand({});
  const httpRequestOptions = {
    headers: {},body: jsonCapabilityEditorModelToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface GetAgentCapabilityEditorOptions extends OperationOptions {}
export async function getAgentCapabilityEditor(
  client: CanDoItAllClientContext,
  capabilityId: string,
  options?: GetAgentCapabilityEditorOptions,
): Promise<void> {
  const path = parse("/api/agents/capabilities/{capabilityId}/editor").expand({
    capabilityId: capabilityId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface DeleteAgentCapabilityOptions extends OperationOptions {}
export async function deleteAgentCapability(
  client: CanDoItAllClientContext,
  capabilityId: string,
  options?: DeleteAgentCapabilityOptions,
): Promise<void> {
  const path = parse("/api/agents/capabilities/{capabilityId}").expand({
    capabilityId: capabilityId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).delete(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface VerifyAgentCapabilityOptions extends OperationOptions {}
export async function verifyAgentCapability(
  client: CanDoItAllClientContext,
  agentId: string,
  capabilityId: string,
  options?: VerifyAgentCapabilityOptions,
): Promise<void> {
  const path = parse("/api/agents/{agentId}/capabilities/{capabilityId}/verify").expand({
    agentId: agentId,
    capabilityId: capabilityId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface TestAgentToolCapabilitySetupOptions extends OperationOptions {}
export async function testAgentToolCapabilitySetup(
  client: CanDoItAllClientContext,
  body: CapabilityToolSetupTestRequest,
  options?: TestAgentToolCapabilitySetupOptions,
): Promise<void> {
  const path = parse("/api/agents/capabilities/setup-tests/tool").expand({});
  const httpRequestOptions = {
    headers: {

    },body: jsonCapabilityToolSetupTestRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface TestAgentMcpCapabilitySetupOptions extends OperationOptions {}
export async function testAgentMcpCapabilitySetup(
  client: CanDoItAllClientContext,
  body: CapabilityMcpSetupTestRequest,
  options?: TestAgentMcpCapabilitySetupOptions,
): Promise<void> {
  const path = parse("/api/agents/capabilities/setup-tests/mcp").expand({});
  const httpRequestOptions = {
    headers: {

    },body: jsonCapabilityMcpSetupTestRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface PreviewAgentCapabilityAccessOptions extends OperationOptions {}
export async function previewAgentCapabilityAccess(
  client: CanDoItAllClientContext,
  body: CapabilityAccessPreviewRequest,
  options?: PreviewAgentCapabilityAccessOptions,
): Promise<void> {
  const path = parse("/api/agents/capabilities/access-preview").expand({});
  const httpRequestOptions = {
    headers: {

    },body: jsonCapabilityAccessPreviewRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface ListAgentMemoryOptions extends OperationOptions {}
export async function listAgentMemory(
  client: CanDoItAllClientContext,
  agentId: string,
  options?: ListAgentMemoryOptions,
): Promise<void> {
  const path = parse("/api/agents/{agentId}/memory").expand({
    agentId: agentId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface SaveAgentMemoryOptions extends OperationOptions {}
export async function saveAgentMemory(
  client: CanDoItAllClientContext,
  body: MemoryEditorModel,
  options?: SaveAgentMemoryOptions,
): Promise<void> {
  const path = parse("/api/agents/memory").expand({});
  const httpRequestOptions = {
    headers: {},body: jsonMemoryEditorModelToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface DeleteAgentMemoryOptions extends OperationOptions {}
export async function deleteAgentMemory(
  client: CanDoItAllClientContext,
  memoryId: string,
  options?: DeleteAgentMemoryOptions,
): Promise<void> {
  const path = parse("/api/agents/memory/{memoryId}").expand({
    memoryId: memoryId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).delete(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface ListAgentChatSessionsOptions extends OperationOptions {}
export async function listAgentChatSessions(
  client: CanDoItAllClientContext,
  agentId: string,
  options?: ListAgentChatSessionsOptions,
): Promise<Array<AgentChatSessionApiResponse>> {
  const path = parse("/api/agents/{agentId}/chat-sessions").expand({
    agentId: agentId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonArrayAgentChatSessionApiResponseToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface CreateAgentChatSessionOptions extends OperationOptions {
  chatSessionId?: string
}
export async function createAgentChatSession(
  client: CanDoItAllClientContext,
  agentId: string,
  options?: CreateAgentChatSessionOptions,
): Promise<AgentChatSessionApiResponse> {
  const path = parse("/api/agents/{agentId}/chat-sessions{?chatSessionId}").expand({
    agentId: agentId,
    ...(options?.chatSessionId != null && {chatSessionId: options.chatSessionId})
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonAgentChatSessionApiResponseToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface RenameAgentChatSessionOptions extends OperationOptions {}
export async function renameAgentChatSession(
  client: CanDoItAllClientContext,
  agentId: string,
  chatSessionId: string,
  body: ChatSessionRenameApiRequest,
  options?: RenameAgentChatSessionOptions,
): Promise<AgentChatSessionApiResponse> {
  const path = parse("/api/agents/{agentId}/chat-sessions/{chatSessionId}/rename").expand({
    agentId: agentId,
    chatSessionId: chatSessionId
  });
  const httpRequestOptions = {
    headers: {},body: jsonChatSessionRenameApiRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonAgentChatSessionApiResponseToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface GetAgentChatWorkspaceOptions extends OperationOptions {
  preferredSessionId?: string
}
export async function getAgentChatWorkspace(
  client: CanDoItAllClientContext,
  agentId: string,
  options?: GetAgentChatWorkspaceOptions,
): Promise<AgentChatWorkspaceApiResponse> {
  const path = parse("/api/agents/{agentId}/chat-workspace{?preferredSessionId}").expand({
    agentId: agentId,
    ...(options?.preferredSessionId != null && {preferredSessionId: options.preferredSessionId})
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonAgentChatWorkspaceApiResponseToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface SendAgentChatMessageOptions extends OperationOptions {}
export async function sendAgentChatMessage(
  client: CanDoItAllClientContext,
  agentId: string,
  body: AgentChatApiRequest,
  options?: SendAgentChatMessageOptions,
): Promise<AgentChatRunApiResponse | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse> {
  const path = parse("/api/agents/{agentId}/chat").expand({
    agentId: agentId
  });
  const httpRequestOptions = {
    headers: {},body: jsonAgentChatApiRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonAgentChatRunApiResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 409 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 410 && response.headers["content-type"]?.includes("application/json")) {
    return jsonApiErrorResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 422 && response.headers["content-type"]?.includes("application/json")) {
    return jsonApiErrorResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 500 && response.headers["content-type"]?.includes("application/json")) {
    return jsonApiErrorResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 503 && response.headers["content-type"]?.includes("application/json")) {
    return jsonApiErrorResponseToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface RespondToAgentExecutionApprovalsOptions extends OperationOptions {

}
export async function respondToAgentExecutionApprovals(
  client: CanDoItAllClientContext,
  executionRunId: string,
  body: PendingApprovalApiRequest,
  options?: RespondToAgentExecutionApprovalsOptions,
): Promise<AgentExecutionRunResultApiResponse | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse> {
  const path = parse("/api/agents/execution-runs/{executionRunId}/pending-approvals").expand({
    executionRunId: executionRunId
  });
  const httpRequestOptions = {
    headers: {},body: jsonPendingApprovalApiRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonAgentExecutionRunResultApiResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 409 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 410 && response.headers["content-type"]?.includes("application/json")) {
    return jsonApiErrorResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 422 && response.headers["content-type"]?.includes("application/json")) {
    return jsonApiErrorResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 500 && response.headers["content-type"]?.includes("application/json")) {
    return jsonApiErrorResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 503 && response.headers["content-type"]?.includes("application/json")) {
    return jsonApiErrorResponseToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface ListAgentExecutionRunsOptions extends OperationOptions {
  agentId?: string
  chatSessionId?: string
  correlationId?: string
  sourceKind?: string
  sourceId?: string
  take?: unknown
  processRunId?: string
  processStepId?: string
  schedulerRunId?: string
  messageId?: string
  state?: number
  outcome?: number
  approvalStatus?: number
  createdFromUtc?: Date
  createdToUtc?: Date
  updatedFromUtc?: Date
  updatedToUtc?: Date
}
export async function listAgentExecutionRuns(
  client: CanDoItAllClientContext,
  options?: ListAgentExecutionRunsOptions,
): Promise<Array<AgentExecutionRunApiResponse>> {
  const path = parse("/api/agents/execution-runs{?AgentId,ChatSessionId,CorrelationId,SourceKind,SourceId,Take,ProcessRunId,ProcessStepId,SchedulerRunId,MessageId,State,Outcome,ApprovalStatus,CreatedFromUtc,CreatedToUtc,UpdatedFromUtc,UpdatedToUtc}").expand({
    ...(options?.agentId != null && {AgentId: options.agentId}),
    ...(options?.chatSessionId != null && {ChatSessionId: options.chatSessionId}),
    ...(options?.correlationId != null && {CorrelationId: options.correlationId}),
    ...(options?.sourceKind != null && {SourceKind: options.sourceKind}),
    ...(options?.sourceId != null && {SourceId: options.sourceId}),
    ...(options?.take != null && {Take: options.take}),
    ...(options?.processRunId != null && {ProcessRunId: options.processRunId}),
    ...(options?.processStepId != null && {ProcessStepId: options.processStepId}),
    ...(options?.schedulerRunId != null && {SchedulerRunId: options.schedulerRunId}),
    ...(options?.messageId != null && {MessageId: options.messageId}),
    ...(options?.state != null && {State: options.state}),
    ...(options?.outcome != null && {Outcome: options.outcome}),
    ...(options?.approvalStatus != null && {ApprovalStatus: options.approvalStatus}),
    ...(options?.createdFromUtc != null && {CreatedFromUtc: dateRfc3339Serializer(options.createdFromUtc)}),
    ...(options?.createdToUtc != null && {CreatedToUtc: dateRfc3339Serializer(options.createdToUtc)}),
    ...(options?.updatedFromUtc != null && {UpdatedFromUtc: dateRfc3339Serializer(options.updatedFromUtc)}),
    ...(options?.updatedToUtc != null && {UpdatedToUtc: dateRfc3339Serializer(options.updatedToUtc)})
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonArrayAgentExecutionRunApiResponseToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface StartAgentExecutionRunOptions extends OperationOptions {}
export async function startAgentExecutionRun(
  client: CanDoItAllClientContext,
  body: AgentExecutionRunApiRequest,
  options?: StartAgentExecutionRunOptions,
): Promise<AgentExecutionRunResultApiResponse | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse> {
  const path = parse("/api/agents/execution-runs").expand({});
  const httpRequestOptions = {
    headers: {},body: jsonAgentExecutionRunApiRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonAgentExecutionRunResultApiResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 401 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 403 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 409 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 410 && response.headers["content-type"]?.includes("application/json")) {
    return jsonApiErrorResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 422 && response.headers["content-type"]?.includes("application/json")) {
    return jsonApiErrorResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 500 && response.headers["content-type"]?.includes("application/json")) {
    return jsonApiErrorResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 503 && response.headers["content-type"]?.includes("application/json")) {
    return jsonApiErrorResponseToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface ListAgentScopedExecutionRunsOptions extends OperationOptions {
  chatSessionId?: string
  correlationId?: string
  sourceKind?: string
  sourceId?: string
  take?: unknown
  processRunId?: string
  processStepId?: string
  schedulerRunId?: string
  messageId?: string
  state?: number
  outcome?: number
  approvalStatus?: number
  createdFromUtc?: Date
  createdToUtc?: Date
  updatedFromUtc?: Date
  updatedToUtc?: Date
}
export async function listAgentScopedExecutionRuns(
  client: CanDoItAllClientContext,
  agentId: string,
  options?: ListAgentScopedExecutionRunsOptions,
): Promise<Array<AgentExecutionRunApiResponse>> {
  const path = parse("/api/agents/{agentId}/execution-runs{?ChatSessionId,CorrelationId,SourceKind,SourceId,Take,ProcessRunId,ProcessStepId,SchedulerRunId,MessageId,State,Outcome,ApprovalStatus,CreatedFromUtc,CreatedToUtc,UpdatedFromUtc,UpdatedToUtc}").expand({
    agentId: agentId,
    ...(options?.chatSessionId != null && {ChatSessionId: options.chatSessionId}),
    ...(options?.correlationId != null && {CorrelationId: options.correlationId}),
    ...(options?.sourceKind != null && {SourceKind: options.sourceKind}),
    ...(options?.sourceId != null && {SourceId: options.sourceId}),
    ...(options?.take != null && {Take: options.take}),
    ...(options?.processRunId != null && {ProcessRunId: options.processRunId}),
    ...(options?.processStepId != null && {ProcessStepId: options.processStepId}),
    ...(options?.schedulerRunId != null && {SchedulerRunId: options.schedulerRunId}),
    ...(options?.messageId != null && {MessageId: options.messageId}),
    ...(options?.state != null && {State: options.state}),
    ...(options?.outcome != null && {Outcome: options.outcome}),
    ...(options?.approvalStatus != null && {ApprovalStatus: options.approvalStatus}),
    ...(options?.createdFromUtc != null && {CreatedFromUtc: dateRfc3339Serializer(options.createdFromUtc)}),
    ...(options?.createdToUtc != null && {CreatedToUtc: dateRfc3339Serializer(options.createdToUtc)}),
    ...(options?.updatedFromUtc != null && {UpdatedFromUtc: dateRfc3339Serializer(options.updatedFromUtc)}),
    ...(options?.updatedToUtc != null && {UpdatedToUtc: dateRfc3339Serializer(options.updatedToUtc)})
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonArrayAgentExecutionRunApiResponseToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface StartAgentScopedExecutionRunOptions extends OperationOptions {}
export async function startAgentScopedExecutionRun(
  client: CanDoItAllClientContext,
  agentId: string,
  body: AgentExecutionRunStartApiRequest,
  options?: StartAgentScopedExecutionRunOptions,
): Promise<AgentExecutionRunResultApiResponse | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse> {
  const path = parse("/api/agents/{agentId}/execution-runs").expand({
    agentId: agentId
  });
  const httpRequestOptions = {
    headers: {

    },body: jsonAgentExecutionRunStartApiRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonAgentExecutionRunResultApiResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 401 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 403 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 409 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 410 && response.headers["content-type"]?.includes("application/json")) {
    return jsonApiErrorResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 422 && response.headers["content-type"]?.includes("application/json")) {
    return jsonApiErrorResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 500 && response.headers["content-type"]?.includes("application/json")) {
    return jsonApiErrorResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 503 && response.headers["content-type"]?.includes("application/json")) {
    return jsonApiErrorResponseToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface GetAgentExecutionRunDetailOptions extends OperationOptions {}
export async function getAgentExecutionRunDetail(
  client: CanDoItAllClientContext,
  executionRunId: string,
  options?: GetAgentExecutionRunDetailOptions,
): Promise<AgentExecutionRunDetailApiResponse> {
  const path = parse("/api/agents/execution-runs/{executionRunId}").expand({
    executionRunId: executionRunId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonAgentExecutionRunDetailApiResponseToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface GetAgentScopedExecutionRunDetailOptions extends OperationOptions {

}
export async function getAgentScopedExecutionRunDetail(
  client: CanDoItAllClientContext,
  agentId: string,
  executionRunId: string,
  options?: GetAgentScopedExecutionRunDetailOptions,
): Promise<AgentExecutionRunDetailApiResponse | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse> {
  const path = parse("/api/agents/{agentId}/execution-runs/{executionRunId}").expand({
    agentId: agentId,
    executionRunId: executionRunId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonAgentExecutionRunDetailApiResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 401 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 403 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface ListAgentExecutionArtifactsOptions extends OperationOptions {}
export async function listAgentExecutionArtifacts(
  client: CanDoItAllClientContext,
  executionRunId: string,
  options?: ListAgentExecutionArtifactsOptions,
): Promise<Array<AgentExecutionArtifactApiResponse>> {
  const path = parse("/api/agents/execution-runs/{executionRunId}/artifacts").expand({
    executionRunId: executionRunId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonArrayAgentExecutionArtifactApiResponseToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface ListAgentScopedExecutionArtifactsOptions extends OperationOptions {

}
export async function listAgentScopedExecutionArtifacts(
  client: CanDoItAllClientContext,
  agentId: string,
  executionRunId: string,
  options?: ListAgentScopedExecutionArtifactsOptions,
): Promise<Array<AgentExecutionArtifactApiResponse>> {
  const path = parse("/api/agents/{agentId}/execution-runs/{executionRunId}/artifacts").expand({
    agentId: agentId,
    executionRunId: executionRunId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonArrayAgentExecutionArtifactApiResponseToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface ListAgentExecutionCheckpointsOptions extends OperationOptions {

}
export async function listAgentExecutionCheckpoints(
  client: CanDoItAllClientContext,
  executionRunId: string,
  options?: ListAgentExecutionCheckpointsOptions,
): Promise<Array<AgentExecutionCheckpointApiResponse>> {
  const path = parse("/api/agents/execution-runs/{executionRunId}/checkpoints").expand({
    executionRunId: executionRunId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonArrayAgentExecutionCheckpointApiResponseToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface ListAgentScopedExecutionCheckpointsOptions extends OperationOptions {

}
export async function listAgentScopedExecutionCheckpoints(
  client: CanDoItAllClientContext,
  agentId: string,
  executionRunId: string,
  options?: ListAgentScopedExecutionCheckpointsOptions,
): Promise<Array<AgentExecutionCheckpointApiResponse>> {
  const path = parse("/api/agents/{agentId}/execution-runs/{executionRunId}/checkpoints").expand({
    agentId: agentId,
    executionRunId: executionRunId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonArrayAgentExecutionCheckpointApiResponseToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface ListAgentExecutionToolReceiptsOptions extends OperationOptions {

}
export async function listAgentExecutionToolReceipts(
  client: CanDoItAllClientContext,
  executionRunId: string,
  options?: ListAgentExecutionToolReceiptsOptions,
): Promise<Array<AgentExecutionToolReceiptApiResponse>> {
  const path = parse("/api/agents/execution-runs/{executionRunId}/tool-receipts").expand({
    executionRunId: executionRunId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonArrayAgentExecutionToolReceiptApiResponseToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface ListAgentScopedExecutionToolReceiptsOptions extends OperationOptions {

}
export async function listAgentScopedExecutionToolReceipts(
  client: CanDoItAllClientContext,
  agentId: string,
  executionRunId: string,
  options?: ListAgentScopedExecutionToolReceiptsOptions,
): Promise<Array<AgentExecutionToolReceiptApiResponse>> {
  const path = parse("/api/agents/{agentId}/execution-runs/{executionRunId}/tool-receipts").expand({
    agentId: agentId,
    executionRunId: executionRunId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonArrayAgentExecutionToolReceiptApiResponseToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface ListAgentScopedExecutionLogOptions extends OperationOptions {}
export async function listAgentScopedExecutionLog(
  client: CanDoItAllClientContext,
  agentId: string,
  executionRunId: string,
  options?: ListAgentScopedExecutionLogOptions,
): Promise<Array<AgentExecutionLogApiResponse>> {
  const path = parse("/api/agents/{agentId}/execution-runs/{executionRunId}/log").expand({
    agentId: agentId,
    executionRunId: executionRunId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonArrayAgentExecutionLogApiResponseToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface ListAgentScopedExecutionMetricsOptions extends OperationOptions {

}
export async function listAgentScopedExecutionMetrics(
  client: CanDoItAllClientContext,
  agentId: string,
  executionRunId: string,
  options?: ListAgentScopedExecutionMetricsOptions,
): Promise<Array<AgentRunMetricApiResponse>> {
  const path = parse("/api/agents/{agentId}/execution-runs/{executionRunId}/metrics").expand({
    agentId: agentId,
    executionRunId: executionRunId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonArrayAgentRunMetricApiResponseToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface ListAgentScopedExecutionApprovalsOptions extends OperationOptions {

}
export async function listAgentScopedExecutionApprovals(
  client: CanDoItAllClientContext,
  agentId: string,
  executionRunId: string,
  options?: ListAgentScopedExecutionApprovalsOptions,
): Promise<Array<AgentExecutionApprovalApiResponse>> {
  const path = parse("/api/agents/{agentId}/execution-runs/{executionRunId}/approvals").expand({
    agentId: agentId,
    executionRunId: executionRunId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonArrayAgentExecutionApprovalApiResponseToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface ListAgentExecutionApprovalsOptions extends OperationOptions {}
export async function listAgentExecutionApprovals(
  client: CanDoItAllClientContext,
  executionRunId: string,
  options?: ListAgentExecutionApprovalsOptions,
): Promise<Array<AgentExecutionApprovalApiResponse>> {
  const path = parse("/api/agents/execution-runs/{executionRunId}/approvals").expand({
    executionRunId: executionRunId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonArrayAgentExecutionApprovalApiResponseToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface ListAgentExecutionLogOptions extends OperationOptions {
  chatSessionId?: string
}
export async function listAgentExecutionLog(
  client: CanDoItAllClientContext,
  agentId: string,
  options?: ListAgentExecutionLogOptions,
): Promise<Array<AgentExecutionLogApiResponse>> {
  const path = parse("/api/agents/{agentId}/execution-log{?chatSessionId}").expand({
    agentId: agentId,
    ...(options?.chatSessionId != null && {chatSessionId: options.chatSessionId})
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonArrayAgentExecutionLogApiResponseToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface GetAgentRuntimeSnapshotOptions extends OperationOptions {
  chatSessionId?: string
}
export async function getAgentRuntimeSnapshot(
  client: CanDoItAllClientContext,
  agentId: string,
  options?: GetAgentRuntimeSnapshotOptions,
): Promise<AgentChatRuntimeApiResponse> {
  const path = parse("/api/agents/{agentId}/runtime-snapshot{?chatSessionId}").expand({
    agentId: agentId,
    ...(options?.chatSessionId != null && {chatSessionId: options.chatSessionId})
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonAgentChatRuntimeApiResponseToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface ListAgentMetricsOptions extends OperationOptions {}
export async function listAgentMetrics(
  client: CanDoItAllClientContext,
  agentId: string,
  options?: ListAgentMetricsOptions,
): Promise<Array<AgentRunMetricApiResponse>> {
  const path = parse("/api/agents/{agentId}/metrics").expand({
    agentId: agentId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonArrayAgentRunMetricApiResponseToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface StreamAgentExecutionOperationEventsOptions extends OperationOptions {

}
export async function streamAgentExecutionOperationEvents(
  client: CanDoItAllClientContext,
  operationId: string,
  options?: StreamAgentExecutionOperationEventsOptions,
): Promise<string | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse> {
  const path = parse("/api/agents/execution-operations/{operationId}/events/stream").expand({
    operationId: operationId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("text/event-stream")) {
    return response.body!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 401 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 403 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface StreamAgentChatMessageOptions extends OperationOptions {}
export async function streamAgentChatMessage(
  client: CanDoItAllClientContext,
  agentId: string,
  body: AgentChatApiRequest,
  options?: StreamAgentChatMessageOptions,
): Promise<string | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse> {
  const path = parse("/api/agents/{agentId}/chat/stream").expand({
    agentId: agentId
  });
  const httpRequestOptions = {
    headers: {},body: jsonAgentChatApiRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("text/event-stream")) {
    return response.body!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 401 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 403 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 409 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 410 && response.headers["content-type"]?.includes("application/json")) {
    return jsonApiErrorResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 422 && response.headers["content-type"]?.includes("application/json")) {
    return jsonApiErrorResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 500 && response.headers["content-type"]?.includes("application/json")) {
    return jsonApiErrorResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 503 && response.headers["content-type"]?.includes("application/json")) {
    return jsonApiErrorResponseToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface StreamAgentExecutionRunOptions extends OperationOptions {}
export async function streamAgentExecutionRun(
  client: CanDoItAllClientContext,
  body: AgentExecutionRunApiRequest,
  options?: StreamAgentExecutionRunOptions,
): Promise<string | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse> {
  const path = parse("/api/agents/execution-runs/stream").expand({});
  const httpRequestOptions = {
    headers: {},body: jsonAgentExecutionRunApiRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("text/event-stream")) {
    return response.body!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 401 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 403 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 409 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 410 && response.headers["content-type"]?.includes("application/json")) {
    return jsonApiErrorResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 422 && response.headers["content-type"]?.includes("application/json")) {
    return jsonApiErrorResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 500 && response.headers["content-type"]?.includes("application/json")) {
    return jsonApiErrorResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 503 && response.headers["content-type"]?.includes("application/json")) {
    return jsonApiErrorResponseToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface StreamAgentScopedExecutionRunOptions extends OperationOptions {

}
export async function streamAgentScopedExecutionRun(
  client: CanDoItAllClientContext,
  agentId: string,
  body: AgentExecutionRunStartApiRequest,
  options?: StreamAgentScopedExecutionRunOptions,
): Promise<string | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse> {
  const path = parse("/api/agents/{agentId}/execution-runs/stream").expand({
    agentId: agentId
  });
  const httpRequestOptions = {
    headers: {

    },body: jsonAgentExecutionRunStartApiRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("text/event-stream")) {
    return response.body!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 401 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 403 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 409 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 410 && response.headers["content-type"]?.includes("application/json")) {
    return jsonApiErrorResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 422 && response.headers["content-type"]?.includes("application/json")) {
    return jsonApiErrorResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 500 && response.headers["content-type"]?.includes("application/json")) {
    return jsonApiErrorResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 503 && response.headers["content-type"]?.includes("application/json")) {
    return jsonApiErrorResponseToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface StreamAgentExecutionApprovalResponseOptions extends OperationOptions {

}
export async function streamAgentExecutionApprovalResponse(
  client: CanDoItAllClientContext,
  executionRunId: string,
  body: PendingApprovalApiRequest,
  options?: StreamAgentExecutionApprovalResponseOptions,
): Promise<string | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse> {
  const path = parse("/api/agents/execution-runs/{executionRunId}/pending-approvals/stream").expand({
    executionRunId: executionRunId
  });
  const httpRequestOptions = {
    headers: {},body: jsonPendingApprovalApiRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("text/event-stream")) {
    return response.body!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 401 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 403 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 409 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 410 && response.headers["content-type"]?.includes("application/json")) {
    return jsonApiErrorResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 422 && response.headers["content-type"]?.includes("application/json")) {
    return jsonApiErrorResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 500 && response.headers["content-type"]?.includes("application/json")) {
    return jsonApiErrorResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 503 && response.headers["content-type"]?.includes("application/json")) {
    return jsonApiErrorResponseToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface StreamAgentProviderChatCompletionOptions extends OperationOptions {

}
export async function streamAgentProviderChatCompletion(
  client: CanDoItAllClientContext,
  providerId: string,
  body: ProviderChatCompletionApiRequest,
  options?: StreamAgentProviderChatCompletionOptions,
): Promise<string | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse> {
  const path = parse("/api/agents/providers/{providerId}/chat-completions/stream").expand({
    providerId: providerId
  });
  const httpRequestOptions = {
    headers: {

    },body: jsonProviderChatCompletionApiRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("text/event-stream")) {
    return response.body!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 401 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 403 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface StageAgentImageAttachmentOptions extends OperationOptions {
  contentType?: "multipart/form-data"
}
export async function stageAgentImageAttachment(
  client: CanDoItAllClientContext,
  body: AgentImageAttachmentUploadRequest,
  options?: StageAgentImageAttachmentOptions,
): Promise<AgentChatAttachmentStagingResult | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse> {
  const path = parse("/api/agents/attachments/images").expand({});
  const httpRequestOptions = {
    headers: {
      "content-type": options?.contentType ?? "multipart/form-data"
    },body: [{
      name: "file",
      body: body.file
    }],
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonAgentChatAttachmentStagingResultToApplicationTransform(response.body)!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 401 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 403 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface CreateAgentRecruitingInterviewOptions extends OperationOptions {

}
export async function createAgentRecruitingInterview(
  client: CanDoItAllClientContext,
  body: CreateAgentRecruitingInterviewCommand,
  options?: CreateAgentRecruitingInterviewOptions,
): Promise<AgentRecruitingInterview | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse> {
  const path = parse("/api/agent-recruiting/interviews").expand({});
  const httpRequestOptions = {
    headers: {

    },body: jsonCreateAgentRecruitingInterviewCommandToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 201 && response.headers["content-type"]?.includes("application/json")) {
    return {
      id: response.body.id,candidateAgentId: response.body.candidateAgentId,candidateConfigurationVersion: response.body.candidateConfigurationVersion,candidateNameSnapshot: response.body.candidateNameSnapshot,candidateModelSnapshot: response.body.candidateModelSnapshot,purpose: response.body.purpose,createdAtUtc: dateDeserializer(response.body.createdAtUtc)!,attempts: jsonArrayAgentRecruitingAttemptToApplicationTransform(response.body.attempts),reviews: jsonArrayAgentRecruitingHumanReviewToApplicationTransform(response.body.reviews),recruitmentApplicationId: response.body.recruitmentApplicationId,projectId: response.body.projectId
    }!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 401 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 403 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 409 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface AppendAgentRecruitingAttemptOptions extends OperationOptions {}
export async function appendAgentRecruitingAttempt(
  client: CanDoItAllClientContext,
  interviewId: string,
  body: AppendAgentRecruitingAttemptCommand,
  options?: AppendAgentRecruitingAttemptOptions,
): Promise<AgentRecruitingInterview | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse> {
  const path = parse("/api/agent-recruiting/interviews/{interviewId}/attempts").expand({
    interviewId: interviewId
  });
  const httpRequestOptions = {
    headers: {

    },body: jsonAppendAgentRecruitingAttemptCommandToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 201 && response.headers["content-type"]?.includes("application/json")) {
    return {
      id: response.body.id,candidateAgentId: response.body.candidateAgentId,candidateConfigurationVersion: response.body.candidateConfigurationVersion,candidateNameSnapshot: response.body.candidateNameSnapshot,candidateModelSnapshot: response.body.candidateModelSnapshot,purpose: response.body.purpose,createdAtUtc: dateDeserializer(response.body.createdAtUtc)!,attempts: jsonArrayAgentRecruitingAttemptToApplicationTransform(response.body.attempts),reviews: jsonArrayAgentRecruitingHumanReviewToApplicationTransform(response.body.reviews),recruitmentApplicationId: response.body.recruitmentApplicationId,projectId: response.body.projectId
    }!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 401 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 403 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 409 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface AppendAgentRecruitingHumanReviewOptions extends OperationOptions {

}
export async function appendAgentRecruitingHumanReview(
  client: CanDoItAllClientContext,
  interviewId: string,
  body: AppendAgentRecruitingReviewCommand,
  options?: AppendAgentRecruitingHumanReviewOptions,
): Promise<AgentRecruitingInterview | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse> {
  const path = parse("/api/agent-recruiting/interviews/{interviewId}/reviews").expand({
    interviewId: interviewId
  });
  const httpRequestOptions = {
    headers: {

    },body: jsonAppendAgentRecruitingReviewCommandToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 201 && response.headers["content-type"]?.includes("application/json")) {
    return {
      id: response.body.id,candidateAgentId: response.body.candidateAgentId,candidateConfigurationVersion: response.body.candidateConfigurationVersion,candidateNameSnapshot: response.body.candidateNameSnapshot,candidateModelSnapshot: response.body.candidateModelSnapshot,purpose: response.body.purpose,createdAtUtc: dateDeserializer(response.body.createdAtUtc)!,attempts: jsonArrayAgentRecruitingAttemptToApplicationTransform(response.body.attempts),reviews: jsonArrayAgentRecruitingHumanReviewToApplicationTransform(response.body.reviews),recruitmentApplicationId: response.body.recruitmentApplicationId,projectId: response.body.projectId
    }!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 401 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 403 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 409 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface GetAgentRecruitingInterviewOptions extends OperationOptions {}
export async function getAgentRecruitingInterview(
  client: CanDoItAllClientContext,
  interviewId: string,
  options?: GetAgentRecruitingInterviewOptions,
): Promise<AgentRecruitingInterview | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse> {
  const path = parse("/api/agent-recruiting/interviews/{interviewId}").expand({
    interviewId: interviewId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonAgentRecruitingInterviewToApplicationTransform(response.body)!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 401 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 403 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface ListAgentRecruitingCandidateInterviewsOptions extends OperationOptions {
  recruitmentApplicationId?: string
}
export async function listAgentRecruitingCandidateInterviews(
  client: CanDoItAllClientContext,
  candidateAgentId: string,
  options?: ListAgentRecruitingCandidateInterviewsOptions,
): Promise<Array<AgentRecruitingInterview> | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse> {
  const path = parse("/api/agent-recruiting/candidates/{candidateAgentId}/interviews{?recruitmentApplicationId}").expand({
    candidateAgentId: candidateAgentId,
    ...(options?.recruitmentApplicationId != null && {recruitmentApplicationId: options.recruitmentApplicationId})
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonArrayAgentRecruitingInterviewToApplicationTransform(response.body)!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 401 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 403 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface GetAgentRecruitingCandidateReadinessOptions extends OperationOptions {
  recruitmentApplicationId?: string
}
export async function getAgentRecruitingCandidateReadiness(
  client: CanDoItAllClientContext,
  agentId: string,
  options?: GetAgentRecruitingCandidateReadinessOptions,
): Promise<AgentRecruitingCandidateReadiness | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse> {
  const path = parse("/api/agent-recruiting/candidates/{agentId}/readiness{?recruitmentApplicationId}").expand({
    agentId: agentId,
    ...(options?.recruitmentApplicationId != null && {recruitmentApplicationId: options.recruitmentApplicationId})
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonAgentRecruitingCandidateReadinessToApplicationTransform(response.body)!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 401 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 403 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface SearchPromptGalleryItemsOptions extends OperationOptions {
  text?: string
  tag?: Array<string>
  kind?: number
  status?: number
  includeArchived?: boolean
  provider?: string
  model?: string
  consumer?: number
  pageIndex?: unknown
  pageSize?: unknown
  favoritesOnly?: boolean
}
export async function searchPromptGalleryItems(
  client: CanDoItAllClientContext,
  options?: SearchPromptGalleryItemsOptions,
): Promise<PromptGalleryPageOfPromptGallerySearchItem | ApiErrorResponse | ApiErrorResponse> {
  const path = parse("/api/prompt-gallery/items{?Text,Tag*,Kind,Status,IncludeArchived,Provider,Model,Consumer,PageIndex,PageSize,FavoritesOnly}").expand({
    ...(options?.text != null && {Text: options.text}),
    ...(options?.tag != null && {Tag: jsonArrayStringToTransportTransform(options.tag)}),
    ...(options?.kind != null && {Kind: options.kind}),
    ...(options?.status != null && {Status: options.status}),
    ...(options?.includeArchived != null && {IncludeArchived: options.includeArchived}),
    ...(options?.provider != null && {Provider: options.provider}),
    ...(options?.model != null && {Model: options.model}),
    ...(options?.consumer != null && {Consumer: options.consumer}),
    ...(options?.pageIndex != null && {PageIndex: options.pageIndex}),
    PageSize: options?.pageSize ?? 25,
    ...(options?.favoritesOnly != null && {FavoritesOnly: options.favoritesOnly})
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonPromptGalleryPageOfPromptGallerySearchItemToApplicationTransform(response.body)!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface SavePromptGalleryDraftOptions extends OperationOptions {}
export async function savePromptGalleryDraft(
  client: CanDoItAllClientContext,
  body: null | PromptGalleryDraft,
  options?: SavePromptGalleryDraftOptions,
): Promise<PromptDraftSaveReceipt | ApiErrorResponse | ApiErrorResponse> {
  const path = parse("/api/prompt-gallery/items").expand({});
  const httpRequestOptions = {
    headers: {},body: body,
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonPromptDraftSaveReceiptToApplicationTransform(response.body)!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface GetPromptGalleryItemOptions extends OperationOptions {}
export async function getPromptGalleryItem(
  client: CanDoItAllClientContext,
  promptId: string,
  options?: GetPromptGalleryItemOptions,
): Promise<PromptGalleryItemDetails | ApiErrorResponse | ApiErrorResponse> {
  const path = parse("/api/prompt-gallery/items/{promptId}").expand({
    promptId: promptId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonPromptGalleryItemDetailsToApplicationTransform(response.body)!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface CreatePromptGalleryVersionOptions extends OperationOptions {}
export async function createPromptGalleryVersion(
  client: CanDoItAllClientContext,
  promptId: string,
  body: null | PromptVersionCreateRequest,
  options?: CreatePromptGalleryVersionOptions,
): Promise<PromptVersionSnapshot | ApiErrorResponse | ApiErrorResponse> {
  const path = parse("/api/prompt-gallery/items/{promptId}/versions").expand({
    promptId: promptId
  });
  const httpRequestOptions = {
    headers: {},body: body,
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonPromptVersionSnapshotToApplicationTransform(response.body)!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface GetPromptGalleryVersionOptions extends OperationOptions {}
export async function getPromptGalleryVersion(
  client: CanDoItAllClientContext,
  promptId: string,
  versionId: string,
  options?: GetPromptGalleryVersionOptions,
): Promise<PromptVersionSnapshot | ApiErrorResponse | ApiErrorResponse> {
  const path = parse("/api/prompt-gallery/items/{promptId}/versions/{versionId}").expand({
    promptId: promptId,
    versionId: versionId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonPromptVersionSnapshotToApplicationTransform(response.body)!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface ArchivePromptGalleryItemOptions extends OperationOptions {}
export async function archivePromptGalleryItem(
  client: CanDoItAllClientContext,
  promptId: string,
  body: null | PromptGalleryArchiveRequest,
  options?: ArchivePromptGalleryItemOptions,
): Promise<ApiAck | ApiErrorResponse | ApiErrorResponse> {
  const path = parse("/api/prompt-gallery/items/{promptId}/archive").expand({
    promptId: promptId
  });
  const httpRequestOptions = {
    headers: {},body: body,
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonApiAckToApplicationTransform(response.body)!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface SetPromptGalleryFavoriteOptions extends OperationOptions {}
export async function setPromptGalleryFavorite(
  client: CanDoItAllClientContext,
  promptId: string,
  body: null | PromptGalleryFavoriteRequest,
  options?: SetPromptGalleryFavoriteOptions,
): Promise<ApiAck | ApiErrorResponse | ApiErrorResponse> {
  const path = parse("/api/prompt-gallery/items/{promptId}/favorite").expand({
    promptId: promptId
  });
  const httpRequestOptions = {
    headers: {},body: body,
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonApiAckToApplicationTransform(response.body)!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface EvaluatePromptGalleryCompatibilityOptions extends OperationOptions {

}
export async function evaluatePromptGalleryCompatibility(
  client: CanDoItAllClientContext,
  body: null | PromptGalleryCompatibilityApiRequest,
  options?: EvaluatePromptGalleryCompatibilityOptions,
): Promise<PromptCompatibilityResult | ApiErrorResponse | ApiErrorResponse> {
  const path = parse("/api/prompt-gallery/compatibility/evaluate").expand({});
  const httpRequestOptions = {
    headers: {},body: body,
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonPromptCompatibilityResultToApplicationTransform(response.body)!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface SetPromptGalleryWarningSuppressionOptions extends OperationOptions {

}
export async function setPromptGalleryWarningSuppression(
  client: CanDoItAllClientContext,
  body: null | PromptGalleryWarningSuppressionApiRequest,
  options?: SetPromptGalleryWarningSuppressionOptions,
): Promise<ApiAck | ApiErrorResponse | ApiErrorResponse> {
  const path = parse("/api/prompt-gallery/warning-suppressions").expand({});
  const httpRequestOptions = {
    headers: {},body: body,
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonApiAckToApplicationTransform(response.body)!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface GetPromptGalleryProjectionStatusOptions extends OperationOptions {

}
export async function getPromptGalleryProjectionStatus(
  client: CanDoItAllClientContext,
  options?: GetPromptGalleryProjectionStatusOptions,
): Promise<void> {
  const path = parse("/api/prompt-gallery/projection").expand({});
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface RebuildPromptGalleryProjectionOptions extends OperationOptions {

}
export async function rebuildPromptGalleryProjection(
  client: CanDoItAllClientContext,
  options?: RebuildPromptGalleryProjectionOptions,
): Promise<void> {
  const path = parse("/api/prompt-gallery/projection/rebuild").expand({});
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface StartWorkflowDefinitionRunOptions extends OperationOptions {
  idempotencyKey?: string
}
export async function startWorkflowDefinitionRun(
  client: CanDoItAllClientContext,
  workflowId: string,
  body: WorkflowRunStartApiRequest,
  options?: StartWorkflowDefinitionRunOptions,
): Promise<WorkflowRunStartApiResponse | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse> {
  const path = parse("/api/workflows/definitions/{workflowId}/runs/start").expand({
    workflowId: workflowId
  });
  const httpRequestOptions = {
    headers: {
      ...(options?.idempotencyKey != null && {"idempotency-key": options.idempotencyKey})
    },body: jsonWorkflowRunStartApiRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonWorkflowRunStartApiResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 401 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 403 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 409 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface StartWorkflowRunOptions extends OperationOptions {
  idempotencyKey?: string
}
export async function startWorkflowRun(
  client: CanDoItAllClientContext,
  body: WorkflowRunStartApiRequest,
  options?: StartWorkflowRunOptions,
): Promise<WorkflowRunStartApiResponse | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse> {
  const path = parse("/api/workflows/runs/start").expand({});
  const httpRequestOptions = {
    headers: {
      ...(options?.idempotencyKey != null && {"idempotency-key": options.idempotencyKey})
    },body: jsonWorkflowRunStartApiRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonWorkflowRunStartApiResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 401 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 403 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 409 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface CancelWorkflowRunOptions extends OperationOptions {}
export async function cancelWorkflowRun(
  client: CanDoItAllClientContext,
  runId: string,
  options?: CancelWorkflowRunOptions,
): Promise<void> {
  const path = parse("/api/workflows/runs/{runId}/cancel").expand({
    runId: runId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface RespondToWorkflowExternalRequestOptions extends OperationOptions {

}
export async function respondToWorkflowExternalRequest(
  client: CanDoItAllClientContext,
  requestId: string,
  body: WorkflowExternalRequestResponseApiRequest,
  options?: RespondToWorkflowExternalRequestOptions,
): Promise<void> {
  const path = parse("/api/workflows/external-requests/{requestId}/response").expand({
    requestId: requestId
  });
  const httpRequestOptions = {
    headers: {

    },body: jsonWorkflowExternalRequestResponseApiRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface GetWorkflowRunByIdempotencyKeyOptions extends OperationOptions {

}
export async function getWorkflowRunByIdempotencyKey(
  client: CanDoItAllClientContext,
  key: string,
  options?: GetWorkflowRunByIdempotencyKeyOptions,
): Promise<WorkflowLaunchIdempotencyEvidence | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse> {
  const path = parse("/api/workflows/runs/by-idempotency-key/{key}").expand({
    key: key
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonWorkflowLaunchIdempotencyEvidenceToApplicationTransform(response.body)!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 401 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 403 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface ListWorkflowDefinitionsOptions extends OperationOptions {
  externalNamespace?: string
  externalKey?: string
}
export async function listWorkflowDefinitions(
  client: CanDoItAllClientContext,
  options?: ListWorkflowDefinitionsOptions,
): Promise<Array<WorkflowCatalogItem> | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse> {
  const path = parse("/api/workflows/definitions{?externalNamespace,externalKey}").expand({
    ...(options?.externalNamespace != null && {externalNamespace: options.externalNamespace}),
    ...(options?.externalKey != null && {externalKey: options.externalKey})
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonArrayWorkflowCatalogItemToApplicationTransform(response.body)!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 401 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 403 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface SaveWorkflowDefinitionOptions extends OperationOptions {}
export async function saveWorkflowDefinition(
  client: CanDoItAllClientContext,
  body: WorkflowDefinitionSaveRequest,
  options?: SaveWorkflowDefinitionOptions,
): Promise<WorkflowDefinition | ApiErrorResponse | ApiErrorResponse> {
  const path = parse("/api/workflows/definitions").expand({});
  const httpRequestOptions = {
    headers: {

    },body: jsonWorkflowDefinitionSaveRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonWorkflowDefinitionToApplicationTransform(response.body)!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface GetWorkflowDefinitionByTemplateKeyOptions extends OperationOptions {

}
export async function getWorkflowDefinitionByTemplateKey(
  client: CanDoItAllClientContext,
  templateKey: string,
  options?: GetWorkflowDefinitionByTemplateKeyOptions,
): Promise<WorkflowStableIdentityResolution | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse> {
  const path = parse("/api/workflows/definitions/by-template-key/{templateKey}").expand({
    templateKey: templateKey
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonWorkflowStableIdentityResolutionToApplicationTransform(response.body)!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 401 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 403 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface GetWorkflowDefinitionByExternalKeyOptions extends OperationOptions {

}
export async function getWorkflowDefinitionByExternalKey(
  client: CanDoItAllClientContext,
  externalNamespace: string,
  externalKey: string,
  options?: GetWorkflowDefinitionByExternalKeyOptions,
): Promise<WorkflowStableIdentityResolution | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse> {
  const path = parse("/api/workflows/definitions/by-external-key/{externalNamespace}/{externalKey}").expand({
    externalNamespace: externalNamespace,
    externalKey: externalKey
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonWorkflowStableIdentityResolutionToApplicationTransform(response.body)!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 401 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 403 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface GetWorkflowsApiContractOptions extends OperationOptions {}
export async function getWorkflowsApiContract(
  client: CanDoItAllClientContext,
  options?: GetWorkflowsApiContractOptions,
): Promise<void> {
  const path = parse("/api/workflows/contract").expand({});
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface GetWorkflowSettingsOptions extends OperationOptions {}
export async function getWorkflowSettings(
  client: CanDoItAllClientContext,
  options?: GetWorkflowSettingsOptions,
): Promise<void> {
  const path = parse("/api/workflows/settings").expand({});
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface SaveWorkflowSettingsOptions extends OperationOptions {}
export async function saveWorkflowSettings(
  client: CanDoItAllClientContext,
  body: WorkflowSettings,
  options?: SaveWorkflowSettingsOptions,
): Promise<void> {
  const path = parse("/api/workflows/settings").expand({});
  const httpRequestOptions = {
    headers: {},body: jsonWorkflowSettingsToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface ListWorkflowRuntimeBackendsOptions extends OperationOptions {}
export async function listWorkflowRuntimeBackends(
  client: CanDoItAllClientContext,
  options?: ListWorkflowRuntimeBackendsOptions,
): Promise<void> {
  const path = parse("/api/workflows/runtime-backends").expand({});
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface ListWorkflowExecutorCatalogOptions extends OperationOptions {}
export async function listWorkflowExecutorCatalog(
  client: CanDoItAllClientContext,
  options?: ListWorkflowExecutorCatalogOptions,
): Promise<Array<WorkflowExecutorDescriptor>> {
  const path = parse("/api/workflows/executor-catalog").expand({});
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonArrayWorkflowExecutorDescriptorToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface ListWorkflowTemplatesOptions extends OperationOptions {}
export async function listWorkflowTemplates(
  client: CanDoItAllClientContext,
  options?: ListWorkflowTemplatesOptions,
): Promise<Array<WorkflowTemplateCatalogItem>> {
  const path = parse("/api/workflows/templates").expand({});
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonArrayWorkflowTemplateCatalogItemToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface AddWorkflowTemplateToDraftsOptions extends OperationOptions {}
export async function addWorkflowTemplateToDrafts(
  client: CanDoItAllClientContext,
  templateKey: string,
  options?: AddWorkflowTemplateToDraftsOptions,
): Promise<WorkflowDefinition | ApiErrorResponse> {
  const path = parse("/api/workflows/templates/{templateKey}/drafts").expand({
    templateKey: templateKey
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonWorkflowDefinitionToApplicationTransform(response.body)!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface DeleteWorkflowDefinitionOptions extends OperationOptions {}
export async function deleteWorkflowDefinition(
  client: CanDoItAllClientContext,
  workflowId: string,
  options?: DeleteWorkflowDefinitionOptions,
): Promise<void> {
  const path = parse("/api/workflows/definitions/{workflowId}").expand({
    workflowId: workflowId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).delete(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface GetWorkflowDefinitionOptions extends OperationOptions {}
export async function getWorkflowDefinition(
  client: CanDoItAllClientContext,
  workflowId: string,
  options?: GetWorkflowDefinitionOptions,
): Promise<WorkflowDefinitionDetail | ApiErrorResponse> {
  const path = parse("/api/workflows/definitions/{workflowId}").expand({
    workflowId: workflowId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonWorkflowDefinitionDetailToApplicationTransform(response.body)!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface GetWorkflowDefinitionVersionOptions extends OperationOptions {}
export async function getWorkflowDefinitionVersion(
  client: CanDoItAllClientContext,
  workflowId: string,
  versionId: string,
  options?: GetWorkflowDefinitionVersionOptions,
): Promise<WorkflowDefinitionDetail | ApiErrorResponse> {
  const path = parse("/api/workflows/definitions/{workflowId}/versions/{versionId}").expand({
    workflowId: workflowId,
    versionId: versionId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonWorkflowDefinitionDetailToApplicationTransform(response.body)!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface ExportWorkflowDefinitionOptions extends OperationOptions {
  versionId?: string
}
export async function exportWorkflowDefinition(
  client: CanDoItAllClientContext,
  workflowId: string,
  options?: ExportWorkflowDefinitionOptions,
): Promise<void> {
  const path = parse("/api/workflows/definitions/{workflowId}/export{?versionId}").expand({
    workflowId: workflowId,
    ...(options?.versionId != null && {versionId: options.versionId})
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface ImportWorkflowDefinitionOptions extends OperationOptions {}
export async function importWorkflowDefinition(
  client: CanDoItAllClientContext,
  body: WorkflowDefinitionImportRequest,
  options?: ImportWorkflowDefinitionOptions,
): Promise<WorkflowDefinition | ApiErrorResponse | ApiErrorResponse> {
  const path = parse("/api/workflows/definitions/import").expand({});
  const httpRequestOptions = {
    headers: {

    },body: jsonWorkflowDefinitionImportRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonWorkflowDefinitionToApplicationTransform(response.body)!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface PublishWorkflowDefinitionOptions extends OperationOptions {
  expectedVersionId?: string
}
export async function publishWorkflowDefinition(
  client: CanDoItAllClientContext,
  workflowId: string,
  options?: PublishWorkflowDefinitionOptions,
): Promise<void> {
  const path = parse("/api/workflows/definitions/{workflowId}/publish{?expectedVersionId}").expand({
    workflowId: workflowId,
    ...(options?.expectedVersionId != null && {expectedVersionId: options.expectedVersionId})
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface SuspendWorkflowDefinitionOptions extends OperationOptions {
  expectedVersionId?: string
}
export async function suspendWorkflowDefinition(
  client: CanDoItAllClientContext,
  workflowId: string,
  options?: SuspendWorkflowDefinitionOptions,
): Promise<void> {
  const path = parse("/api/workflows/definitions/{workflowId}/suspend{?expectedVersionId}").expand({
    workflowId: workflowId,
    ...(options?.expectedVersionId != null && {expectedVersionId: options.expectedVersionId})
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface ArchiveWorkflowDefinitionOptions extends OperationOptions {
  expectedVersionId?: string
}
export async function archiveWorkflowDefinition(
  client: CanDoItAllClientContext,
  workflowId: string,
  options?: ArchiveWorkflowDefinitionOptions,
): Promise<void> {
  const path = parse("/api/workflows/definitions/{workflowId}/archive{?expectedVersionId}").expand({
    workflowId: workflowId,
    ...(options?.expectedVersionId != null && {expectedVersionId: options.expectedVersionId})
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface ValidateSavedWorkflowDefinitionOptions extends OperationOptions {

}
export async function validateSavedWorkflowDefinition(
  client: CanDoItAllClientContext,
  workflowId: string,
  options?: ValidateSavedWorkflowDefinitionOptions,
): Promise<WorkflowValidationResult | ApiErrorResponse> {
  const path = parse("/api/workflows/definitions/{workflowId}/validate").expand({
    workflowId: workflowId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonWorkflowValidationResultToApplicationTransform(response.body)!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface ValidateDraftWorkflowDefinitionOptions extends OperationOptions {

}
export async function validateDraftWorkflowDefinition(
  client: CanDoItAllClientContext,
  body: WorkflowDefinition,
  options?: ValidateDraftWorkflowDefinitionOptions,
): Promise<WorkflowValidationResult> {
  const path = parse("/api/workflows/validate").expand({});
  const httpRequestOptions = {
    headers: {},body: jsonWorkflowDefinitionToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonWorkflowValidationResultToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface ListWorkflowProviderOptionsOptions extends OperationOptions {}
export async function listWorkflowProviderOptions(
  client: CanDoItAllClientContext,
  options?: ListWorkflowProviderOptionsOptions,
): Promise<Array<WorkflowProviderOption>> {
  const path = parse("/api/workflows/provider-options").expand({});
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonArrayWorkflowProviderOptionToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface ListWorkflowComponentsOptions extends OperationOptions {}
export async function listWorkflowComponents(
  client: CanDoItAllClientContext,
  options?: ListWorkflowComponentsOptions,
): Promise<Array<LlmCallComponent>> {
  const path = parse("/api/workflows/components").expand({});
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonArrayLlmCallComponentToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface SaveWorkflowComponentOptions extends OperationOptions {}
export async function saveWorkflowComponent(
  client: CanDoItAllClientContext,
  body: LlmCallComponentSaveRequest,
  options?: SaveWorkflowComponentOptions,
): Promise<LlmCallComponent | ApiErrorResponse | ApiErrorResponse> {
  const path = parse("/api/workflows/components").expand({});
  const httpRequestOptions = {
    headers: {},body: jsonLlmCallComponentSaveRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonLlmCallComponentToApplicationTransform(response.body)!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface DeleteWorkflowComponentOptions extends OperationOptions {}
export async function deleteWorkflowComponent(
  client: CanDoItAllClientContext,
  componentId: string,
  options?: DeleteWorkflowComponentOptions,
): Promise<ApiAck> {
  const path = parse("/api/workflows/components/{componentId}").expand({
    componentId: componentId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).delete(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonApiAckToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface GetWorkflowComponentOptions extends OperationOptions {}
export async function getWorkflowComponent(
  client: CanDoItAllClientContext,
  componentId: string,
  options?: GetWorkflowComponentOptions,
): Promise<LlmCallComponent | ApiErrorResponse> {
  const path = parse("/api/workflows/components/{componentId}").expand({
    componentId: componentId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonLlmCallComponentToApplicationTransform(response.body)!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface RunWorkflowTestOptions extends OperationOptions {}
export async function runWorkflowTest(
  client: CanDoItAllClientContext,
  body: WorkflowTestRunRequest,
  options?: RunWorkflowTestOptions,
): Promise<WorkflowTestRunResult> {
  const path = parse("/api/workflows/test-runs").expand({});
  const httpRequestOptions = {
    headers: {},body: jsonWorkflowTestRunRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      succeeded: response.body.succeeded,validation: jsonWorkflowValidationResultToApplicationTransform(response.body.validation),run: jsonWorkflowRunSnapshotToApplicationTransform(response.body.run),events: jsonArrayWorkflowEventRecordToApplicationTransform(response.body.events),artifacts: jsonArrayWorkflowArtifactRecordToApplicationTransform(response.body.artifacts),pendingExternalRequests: jsonArrayWorkflowExternalRequestRecordToApplicationTransform(response.body.pendingExternalRequests),errorMessage: response.body.errorMessage,checkpoints: jsonArrayWorkflowCheckpointRecordToApplicationTransform(response.body.checkpoints)
    }!;
  }
  throw createRestError(response);
}
;
export interface ListWorkflowRunsOptions extends OperationOptions {
  workflowId?: string
  state?: number
  backend?: number
  search?: string
  take?: unknown
  pageIndex?: unknown
  pageSize?: unknown
}
export async function listWorkflowRuns(
  client: CanDoItAllClientContext,
  options?: ListWorkflowRunsOptions,
): Promise<void> {
  const path = parse("/api/workflows/runs{?WorkflowId,State,Backend,Search,Take,PageIndex,PageSize}").expand({
    ...(options?.workflowId != null && {WorkflowId: options.workflowId}),
    ...(options?.state != null && {State: options.state}),
    ...(options?.backend != null && {Backend: options.backend}),
    ...(options?.search != null && {Search: options.search}),
    ...(options?.take != null && {Take: options.take}),
    ...(options?.pageIndex != null && {PageIndex: options.pageIndex}),
    ...(options?.pageSize != null && {PageSize: options.pageSize})
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface ListWorkflowRunPageOptions extends OperationOptions {
  workflowId?: string
  state?: number
  backend?: number
  search?: string
  take?: unknown
  pageIndex?: unknown
  pageSize?: unknown
}
export async function listWorkflowRunPage(
  client: CanDoItAllClientContext,
  options?: ListWorkflowRunPageOptions,
): Promise<void> {
  const path = parse("/api/workflows/runs/page{?WorkflowId,State,Backend,Search,Take,PageIndex,PageSize}").expand({
    ...(options?.workflowId != null && {WorkflowId: options.workflowId}),
    ...(options?.state != null && {State: options.state}),
    ...(options?.backend != null && {Backend: options.backend}),
    ...(options?.search != null && {Search: options.search}),
    ...(options?.take != null && {Take: options.take}),
    ...(options?.pageIndex != null && {PageIndex: options.pageIndex}),
    ...(options?.pageSize != null && {PageSize: options.pageSize})
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface GetWorkflowRunOptions extends OperationOptions {}
export async function getWorkflowRun(
  client: CanDoItAllClientContext,
  runId: string,
  options?: GetWorkflowRunOptions,
): Promise<void> {
  const path = parse("/api/workflows/runs/{runId}").expand({
    runId: runId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface GetWorkflowRunDetailOptions extends OperationOptions {}
export async function getWorkflowRunDetail(
  client: CanDoItAllClientContext,
  runId: string,
  options?: GetWorkflowRunDetailOptions,
): Promise<WorkflowRunDetailApiResponse | ApiErrorResponse | ApiErrorResponse | ApiErrorResponse> {
  const path = parse("/api/workflows/runs/{runId}/detail").expand({
    runId: runId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonWorkflowRunDetailApiResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 401 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 403 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface ListWorkflowRunEventsOptions extends OperationOptions {}
export async function listWorkflowRunEvents(
  client: CanDoItAllClientContext,
  runId: string,
  options?: ListWorkflowRunEventsOptions,
): Promise<void> {
  const path = parse("/api/workflows/runs/{runId}/events").expand({
    runId: runId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface ListWorkflowRunEventPageOptions extends OperationOptions {
  pageIndex?: unknown
  pageSize?: unknown
}
export async function listWorkflowRunEventPage(
  client: CanDoItAllClientContext,
  runId: string,
  options?: ListWorkflowRunEventPageOptions,
): Promise<void> {
  const path = parse("/api/workflows/runs/{runId}/events/page{?PageIndex,PageSize}").expand({
    runId: runId,
    ...(options?.pageIndex != null && {PageIndex: options.pageIndex}),
    ...(options?.pageSize != null && {PageSize: options.pageSize})
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface ListWorkflowRunArtifactsOptions extends OperationOptions {}
export async function listWorkflowRunArtifacts(
  client: CanDoItAllClientContext,
  runId: string,
  options?: ListWorkflowRunArtifactsOptions,
): Promise<void> {
  const path = parse("/api/workflows/runs/{runId}/artifacts").expand({
    runId: runId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface GetWorkflowRunArtifactContentOptions extends OperationOptions {

}
export async function getWorkflowRunArtifactContent(
  client: CanDoItAllClientContext,
  runId: string,
  artifactId: string,
  options?: GetWorkflowRunArtifactContentOptions,
): Promise<void> {
  const path = parse("/api/workflows/runs/{runId}/artifacts/{artifactId}/content").expand({
    runId: runId,
    artifactId: artifactId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface ListWorkflowRunCheckpointsOptions extends OperationOptions {}
export async function listWorkflowRunCheckpoints(
  client: CanDoItAllClientContext,
  runId: string,
  options?: ListWorkflowRunCheckpointsOptions,
): Promise<void> {
  const path = parse("/api/workflows/runs/{runId}/checkpoints").expand({
    runId: runId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface ListWorkflowRunPendingRequestsOptions extends OperationOptions {

}
export async function listWorkflowRunPendingRequests(
  client: CanDoItAllClientContext,
  runId: string,
  options?: ListWorkflowRunPendingRequestsOptions,
): Promise<void> {
  const path = parse("/api/workflows/runs/{runId}/pending-requests").expand({
    runId: runId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface GetWorkflowAnalyticsOptions extends OperationOptions {
  workflowId?: string
  state?: number
  backend?: number
  search?: string
  take?: unknown
}
export async function getWorkflowAnalytics(
  client: CanDoItAllClientContext,
  options?: GetWorkflowAnalyticsOptions,
): Promise<void> {
  const path = parse("/api/workflows/analytics{?WorkflowId,State,Backend,Search,Take}").expand({
    ...(options?.workflowId != null && {WorkflowId: options.workflowId}),
    ...(options?.state != null && {State: options.state}),
    ...(options?.backend != null && {Backend: options.backend}),
    ...(options?.search != null && {Search: options.search}),
    ...(options?.take != null && {Take: options.take})
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface StreamWorkflowRunEventsOptions extends OperationOptions {}
export async function streamWorkflowRunEvents(
  client: CanDoItAllClientContext,
  options?: StreamWorkflowRunEventsOptions,
): Promise<string | ApiErrorResponse> {
  const path = parse("/api/workflows/events/stream").expand({});
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("text/event-stream")) {
    return response.body!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface StreamWorkflowRunEventsByRunOptions extends OperationOptions {}
export async function streamWorkflowRunEventsByRun(
  client: CanDoItAllClientContext,
  runId: string,
  options?: StreamWorkflowRunEventsByRunOptions,
): Promise<string | ApiErrorResponse> {
  const path = parse("/api/workflows/runs/{runId}/events/stream").expand({
    runId: runId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("text/event-stream")) {
    return response.body!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface ListProcessRunRecordsOptions extends OperationOptions {
  projectId?: string
  definitionId?: string
  rootRunId?: string
  disposition?: string
  participantId?: string
  fromUtc?: Date
  toUtc?: Date
  take?: unknown
  cursor?: string
}
export async function listProcessRunRecords(
  client: CanDoItAllClientContext,
  options?: ListProcessRunRecordsOptions,
): Promise<void> {
  const path = parse("/api/processes/runs{?projectId,definitionId,rootRunId,disposition,participantId,fromUtc,toUtc,take,cursor}").expand({
    ...(options?.projectId != null && {projectId: options.projectId}),
    ...(options?.definitionId != null && {definitionId: options.definitionId}),
    ...(options?.rootRunId != null && {rootRunId: options.rootRunId}),
    ...(options?.disposition != null && {disposition: options.disposition}),
    ...(options?.participantId != null && {participantId: options.participantId}),
    ...(options?.fromUtc != null && {fromUtc: dateRfc3339Serializer(options.fromUtc)}),
    ...(options?.toUtc != null && {toUtc: dateRfc3339Serializer(options.toUtc)}),
    ...(options?.take != null && {take: options.take}),
    ...(options?.cursor != null && {cursor: options.cursor})
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface GetProcessRunRecordAnalyticsOptions extends OperationOptions {
  projectId?: string
  definitionId?: string
  rootRunId?: string
  participantId?: string
  fromUtc?: Date
  toUtc?: Date
}
export async function getProcessRunRecordAnalytics(
  client: CanDoItAllClientContext,
  options?: GetProcessRunRecordAnalyticsOptions,
): Promise<void> {
  const path = parse("/api/processes/runs/analytics{?projectId,definitionId,rootRunId,participantId,fromUtc,toUtc}").expand({
    ...(options?.projectId != null && {projectId: options.projectId}),
    ...(options?.definitionId != null && {definitionId: options.definitionId}),
    ...(options?.rootRunId != null && {rootRunId: options.rootRunId}),
    ...(options?.participantId != null && {participantId: options.participantId}),
    ...(options?.fromUtc != null && {fromUtc: dateRfc3339Serializer(options.fromUtc)}),
    ...(options?.toUtc != null && {toUtc: dateRfc3339Serializer(options.toUtc)})
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface GetProcessRunRecordSummaryOptions extends OperationOptions {
  stepOffset?: unknown
  stepTake?: unknown
  runtimeEventMinuteOffset?: unknown
  runtimeEventMinuteTake?: unknown
}
export async function getProcessRunRecordSummary(
  client: CanDoItAllClientContext,
  runId: string,
  options?: GetProcessRunRecordSummaryOptions,
): Promise<void> {
  const path = parse("/api/processes/runs/{runId}/summary{?stepOffset,stepTake,runtimeEventMinuteOffset,runtimeEventMinuteTake}").expand({
    runId: runId,
    ...(options?.stepOffset != null && {stepOffset: options.stepOffset}),
    ...(options?.stepTake != null && {stepTake: options.stepTake}),
    ...(options?.runtimeEventMinuteOffset != null && {runtimeEventMinuteOffset: options.runtimeEventMinuteOffset}),
    ...(options?.runtimeEventMinuteTake != null && {runtimeEventMinuteTake: options.runtimeEventMinuteTake})
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface GetProcessRunRecordGraphOptions extends OperationOptions {
  stepOffset?: unknown
  stepTake?: unknown
}
export async function getProcessRunRecordGraph(
  client: CanDoItAllClientContext,
  runId: string,
  options?: GetProcessRunRecordGraphOptions,
): Promise<void> {
  const path = parse("/api/processes/runs/{runId}/graph{?stepOffset,stepTake}").expand({
    runId: runId,
    ...(options?.stepOffset != null && {stepOffset: options.stepOffset}),
    ...(options?.stepTake != null && {stepTake: options.stepTake})
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface GetProcessesApiContractOptions extends OperationOptions {}
export async function getProcessesApiContract(
  client: CanDoItAllClientContext,
  options?: GetProcessesApiContractOptions,
): Promise<ProcessApiContractResponse> {
  const path = parse("/api/processes/contract").expand({});
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonProcessApiContractResponseToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface CheckProcessLaunchOptions extends OperationOptions {}
export async function checkProcessLaunch(
  client: CanDoItAllClientContext,
  body: ProcessLaunchApiRequest,
  options?: CheckProcessLaunchOptions,
): Promise<void> {
  const path = parse("/api/processes/launch/check").expand({});
  const httpRequestOptions = {
    headers: {},body: jsonProcessLaunchApiRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface LaunchProcessOptions extends OperationOptions {}
export async function launchProcess(
  client: CanDoItAllClientContext,
  body: ProcessLaunchApiRequest,
  options?: LaunchProcessOptions,
): Promise<void> {
  const path = parse("/api/processes/launch").expand({});
  const httpRequestOptions = {
    headers: {},body: jsonProcessLaunchApiRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface DispatchProcessRunOptions extends OperationOptions {}
export async function dispatchProcessRun(
  client: CanDoItAllClientContext,
  runId: string,
  body: ProcessDispatchApiRequest,
  options?: DispatchProcessRunOptions,
): Promise<void> {
  const path = parse("/api/processes/runs/{runId}/dispatch").expand({
    runId: runId
  });
  const httpRequestOptions = {
    headers: {},body: jsonProcessDispatchApiRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface CancelProcessRunOptions extends OperationOptions {}
export async function cancelProcessRun(
  client: CanDoItAllClientContext,
  runId: string,
  body: ProcessRuntimeCancelApiRequest,
  options?: CancelProcessRunOptions,
): Promise<void> {
  const path = parse("/api/processes/runs/{runId}/cancel").expand({
    runId: runId
  });
  const httpRequestOptions = {
    headers: {

    },body: jsonProcessRuntimeCancelApiRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface RequestProcessStepReworkOptions extends OperationOptions {}
export async function requestProcessStepRework(
  client: CanDoItAllClientContext,
  runId: string,
  stepInstanceId: string,
  body: ProcessRuntimeReworkApiRequest,
  options?: RequestProcessStepReworkOptions,
): Promise<void> {
  const path = parse("/api/processes/runs/{runId}/steps/{stepInstanceId}/rework").expand({
    runId: runId,
    stepInstanceId: stepInstanceId
  });
  const httpRequestOptions = {
    headers: {

    },body: jsonProcessRuntimeReworkApiRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface ListLiveProcessesOptions extends OperationOptions {
  take?: unknown
  windowMinutes?: unknown
}
export async function listLiveProcesses(
  client: CanDoItAllClientContext,
  options?: ListLiveProcessesOptions,
): Promise<void> {
  const path = parse("/api/processes/live{?take,windowMinutes}").expand({
    ...(options?.take != null && {take: options.take}),
    ...(options?.windowMinutes != null && {windowMinutes: options.windowMinutes})
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface GetProcessRunOptions extends OperationOptions {}
export async function getProcessRun(
  client: CanDoItAllClientContext,
  runId: string,
  options?: GetProcessRunOptions,
): Promise<void> {
  const path = parse("/api/processes/runs/{runId}").expand({
    runId: runId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface GetProcessRunHistoryOptions extends OperationOptions {
  fromUtc?: Date
  toUtc?: Date
  take?: unknown
}
export async function getProcessRunHistory(
  client: CanDoItAllClientContext,
  runId: string,
  options?: GetProcessRunHistoryOptions,
): Promise<void> {
  const path = parse("/api/processes/runs/{runId}/history{?fromUtc,toUtc,take}").expand({
    runId: runId,
    ...(options?.fromUtc != null && {fromUtc: dateRfc3339Serializer(options.fromUtc)}),
    ...(options?.toUtc != null && {toUtc: dateRfc3339Serializer(options.toUtc)}),
    ...(options?.take != null && {take: options.take})
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface ListProcessDefinitionsOptions extends OperationOptions {
  searchText?: string
  scopeFilter?: number
}
/**
 * Lists the process definition catalog, optionally filtered by search text and
 * scope.
 *
 * @param {CanDoItAllClientContext} client
 * @param {ListProcessDefinitionsOptions} [options]
 */
export async function listProcessDefinitions(
  client: CanDoItAllClientContext,
  options?: ListProcessDefinitionsOptions,
): Promise<ProcessDefinitionCatalogApiResponse> {
  const path = parse("/api/processes/definitions{?searchText,scopeFilter}").expand({
    ...(options?.searchText != null && {searchText: options.searchText}),
    ...(options?.scopeFilter != null && {scopeFilter: options.scopeFilter})
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonProcessDefinitionCatalogApiResponseToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface GetProcessDefinitionOptions extends OperationOptions {}
/**
 * Gets the overview/editor projection for a single process definition.
 *
 * @param {CanDoItAllClientContext} client
 * @param {string} definitionKey
 * @param {GetProcessDefinitionOptions} [options]
 */
export async function getProcessDefinition(
  client: CanDoItAllClientContext,
  definitionKey: string,
  options?: GetProcessDefinitionOptions,
): Promise<ProcessDefinitionEditorProjection | ApiErrorResponse> {
  const path = parse("/api/processes/definitions/{definitionKey}").expand({
    definitionKey: definitionKey
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonProcessDefinitionEditorProjectionToApplicationTransform(response.body)!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface GetProcessDefinitionRolesOptions extends OperationOptions {}
/**
 * Gets the role editor projection for a single process definition.
 *
 * @param {CanDoItAllClientContext} client
 * @param {string} definitionKey
 * @param {GetProcessDefinitionRolesOptions} [options]
 */
export async function getProcessDefinitionRoles(
  client: CanDoItAllClientContext,
  definitionKey: string,
  options?: GetProcessDefinitionRolesOptions,
): Promise<ProcessDefinitionRoleEditorProjection | ApiErrorResponse> {
  const path = parse("/api/processes/definitions/{definitionKey}/roles").expand({
    definitionKey: definitionKey
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonProcessDefinitionRoleEditorProjectionToApplicationTransform(response.body)!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface GetProcessDefinitionStepsOptions extends OperationOptions {}
/**
 * Gets the step editor projection for a single process definition.
 *
 * @param {CanDoItAllClientContext} client
 * @param {string} definitionKey
 * @param {GetProcessDefinitionStepsOptions} [options]
 */
export async function getProcessDefinitionSteps(
  client: CanDoItAllClientContext,
  definitionKey: string,
  options?: GetProcessDefinitionStepsOptions,
): Promise<ProcessDefinitionStepEditorProjection | ApiErrorResponse> {
  const path = parse("/api/processes/definitions/{definitionKey}/steps").expand({
    definitionKey: definitionKey
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonProcessDefinitionStepEditorProjectionToApplicationTransform(response.body)!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface StreamProcessRunEventsOptions extends OperationOptions {}
export async function streamProcessRunEvents(
  client: CanDoItAllClientContext,
  options?: StreamProcessRunEventsOptions,
): Promise<string | ApiErrorResponse> {
  const path = parse("/api/processes/events/stream").expand({});
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("text/event-stream")) {
    return response.body!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface StreamProcessRunEventsByRunOptions extends OperationOptions {}
export async function streamProcessRunEventsByRun(
  client: CanDoItAllClientContext,
  runId: string,
  options?: StreamProcessRunEventsByRunOptions,
): Promise<string | ApiErrorResponse> {
  const path = parse("/api/processes/runs/{runId}/events/stream").expand({
    runId: runId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("text/event-stream")) {
    return response.body!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface ListMemoryProvidersOptions extends OperationOptions {}
export async function listMemoryProviders(
  client: CanDoItAllClientContext,
  options?: ListMemoryProvidersOptions,
): Promise<Array<MemoryProviderProfileApiResponse>> {
  const path = parse("/api/memory-providers").expand({});
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonArrayMemoryProviderProfileApiResponseToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface GetMemoryProviderOptions extends OperationOptions {}
export async function getMemoryProvider(
  client: CanDoItAllClientContext,
  providerId: string,
  options?: GetMemoryProviderOptions,
): Promise<MemoryProviderProfileApiResponse | ApiErrorResponse | ApiErrorResponse> {
  const path = parse("/api/memory-providers/{providerId}").expand({
    providerId: providerId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonMemoryProviderProfileApiResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface UpsertMemoryProviderOptions extends OperationOptions {}
export async function upsertMemoryProvider(
  client: CanDoItAllClientContext,
  providerId: string,
  body: MemoryProviderProfileApiRequest,
  options?: UpsertMemoryProviderOptions,
): Promise<MemoryProviderProfileApiResponse | ApiErrorResponse> {
  const path = parse("/api/memory-providers/{providerId}").expand({
    providerId: providerId
  });
  const httpRequestOptions = {
    headers: {

    },body: jsonMemoryProviderProfileApiRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).put(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonMemoryProviderProfileApiResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  throw createRestError(response);
}
;
export interface QueryMemoryProviderOptions extends OperationOptions {}
export async function queryMemoryProvider(
  client: CanDoItAllClientContext,
  providerId: string,
  body: MemoryProviderQueryApiRequest,
  options?: QueryMemoryProviderOptions,
): Promise<MemoryProviderQueryApiResponse | ApiErrorResponse | MemoryProviderQueryApiResponse | MemoryProviderQueryApiResponse | MemoryProviderQueryApiResponse | MemoryProviderQueryApiResponse> {
  const path = parse("/api/memory-providers/{providerId}/queries").expand({
    providerId: providerId
  });
  const httpRequestOptions = {
    headers: {

    },body: jsonMemoryProviderQueryApiRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 202 && response.headers["content-type"]?.includes("application/json")) {
    return {
      status: jsonMemoryOperationHandlerStatusToApplicationTransform(response.body.status),diagnostic: response.body.diagnostic,selection: jsonMemoryProviderSelectionApiResponseToApplicationTransform(response.body.selection),operation: jsonMemoryProviderOperationApiResponseToApplicationTransform(response.body.operation),contextPack: jsonMemoryContextPackApiResponseToApplicationTransform(response.body.contextPack),acceptedOperation: jsonMemoryAcceptedOperationApiResponseToApplicationTransform(response.body.acceptedOperation),feedbackHandle: response.body.feedbackHandle,driverDispatchAttempted: response.body.driverDispatchAttempted
    }!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 403 && response.headers["content-type"]?.includes("application/json")) {
    return {
      status: jsonMemoryOperationHandlerStatusToApplicationTransform(response.body.status),diagnostic: response.body.diagnostic,selection: jsonMemoryProviderSelectionApiResponseToApplicationTransform(response.body.selection),operation: jsonMemoryProviderOperationApiResponseToApplicationTransform(response.body.operation),contextPack: jsonMemoryContextPackApiResponseToApplicationTransform(response.body.contextPack),acceptedOperation: jsonMemoryAcceptedOperationApiResponseToApplicationTransform(response.body.acceptedOperation),feedbackHandle: response.body.feedbackHandle,driverDispatchAttempted: response.body.driverDispatchAttempted
    }!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      status: jsonMemoryOperationHandlerStatusToApplicationTransform(response.body.status),diagnostic: response.body.diagnostic,selection: jsonMemoryProviderSelectionApiResponseToApplicationTransform(response.body.selection),operation: jsonMemoryProviderOperationApiResponseToApplicationTransform(response.body.operation),contextPack: jsonMemoryContextPackApiResponseToApplicationTransform(response.body.contextPack),acceptedOperation: jsonMemoryAcceptedOperationApiResponseToApplicationTransform(response.body.acceptedOperation),feedbackHandle: response.body.feedbackHandle,driverDispatchAttempted: response.body.driverDispatchAttempted
    }!;
  }
  if (+response.status === 409 && response.headers["content-type"]?.includes("application/json")) {
    return {
      status: jsonMemoryOperationHandlerStatusToApplicationTransform(response.body.status),diagnostic: response.body.diagnostic,selection: jsonMemoryProviderSelectionApiResponseToApplicationTransform(response.body.selection),operation: jsonMemoryProviderOperationApiResponseToApplicationTransform(response.body.operation),contextPack: jsonMemoryContextPackApiResponseToApplicationTransform(response.body.contextPack),acceptedOperation: jsonMemoryAcceptedOperationApiResponseToApplicationTransform(response.body.acceptedOperation),feedbackHandle: response.body.feedbackHandle,driverDispatchAttempted: response.body.driverDispatchAttempted
    }!;
  }
  if (+response.status === 502 && response.headers["content-type"]?.includes("application/json")) {
    return jsonMemoryProviderQueryApiResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 504 && response.headers["content-type"]?.includes("application/json")) {
    return jsonMemoryProviderQueryApiResponseToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface GetMemoryProviderOperationOptions extends OperationOptions {}
export async function getMemoryProviderOperation(
  client: CanDoItAllClientContext,
  operationId: string,
  options?: GetMemoryProviderOperationOptions,
): Promise<ApiErrorResponse | MemoryProviderOperationStatusApiResponse | MemoryProviderOperationStatusApiResponse | MemoryProviderOperationStatusApiResponse | MemoryProviderOperationStatusApiResponse> {
  const path = parse("/api/memory-providers/operations/{operationId}").expand({
    operationId: operationId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      errors: jsonArrayApiErrorItemToApplicationTransform(response.body.errors),correlationId: response.body.correlationId,agentId: response.body.agentId,executionRunId: response.body.executionRunId,chatSessionId: response.body.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(response.body.providerFailureCategory)
    }!;
  }
  if (+response.status === 403 && response.headers["content-type"]?.includes("application/json")) {
    return {
      status: jsonMemoryOperationHandlerStatusToApplicationTransform(response.body.status),diagnostic: response.body.diagnostic,selection: jsonMemoryProviderSelectionApiResponseToApplicationTransform(response.body.selection),operation: jsonMemoryProviderOperationApiResponseToApplicationTransform(response.body.operation)
    }!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      status: jsonMemoryOperationHandlerStatusToApplicationTransform(response.body.status),diagnostic: response.body.diagnostic,selection: jsonMemoryProviderSelectionApiResponseToApplicationTransform(response.body.selection),operation: jsonMemoryProviderOperationApiResponseToApplicationTransform(response.body.operation)
    }!;
  }
  if (+response.status === 409 && response.headers["content-type"]?.includes("application/json")) {
    return {
      status: jsonMemoryOperationHandlerStatusToApplicationTransform(response.body.status),diagnostic: response.body.diagnostic,selection: jsonMemoryProviderSelectionApiResponseToApplicationTransform(response.body.selection),operation: jsonMemoryProviderOperationApiResponseToApplicationTransform(response.body.operation)
    }!;
  }
  if (+response.status === 502 && response.headers["content-type"]?.includes("application/json")) {
    return jsonMemoryProviderOperationStatusApiResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 504 && response.headers["content-type"]?.includes("application/json")) {
    return jsonMemoryProviderOperationStatusApiResponseToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface ListPluginCatalogOptions extends OperationOptions {}
export async function listPluginCatalog(
  client: CanDoItAllClientContext,
  options?: ListPluginCatalogOptions,
): Promise<void> {
  const path = parse("/api/plugins/catalog").expand({});
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface ListPluginPackageCatalogOptions extends OperationOptions {}
export async function listPluginPackageCatalog(
  client: CanDoItAllClientContext,
  options?: ListPluginPackageCatalogOptions,
): Promise<void> {
  const path = parse("/api/plugins/packages/catalog").expand({});
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface GetPluginPackageIconOptions extends OperationOptions {}
export async function getPluginPackageIcon(
  client: CanDoItAllClientContext,
  packageId: string,
  options?: GetPluginPackageIconOptions,
): Promise<void> {
  const path = parse("/api/plugins/packages/{packageId}/icon").expand({
    packageId: packageId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface ListPluginLogsOptions extends OperationOptions {
  streamKind?: number
  pluginId?: string
  packageId?: string
}
export async function listPluginLogs(
  client: CanDoItAllClientContext,
  options?: ListPluginLogsOptions,
): Promise<void> {
  const path = parse("/api/plugins/logs{?streamKind,pluginId,packageId}").expand({
    ...(options?.streamKind != null && {streamKind: options.streamKind}),
    ...(options?.pluginId != null && {pluginId: options.pluginId}),
    ...(options?.packageId != null && {packageId: options.packageId})
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface InstallPluginPackageFromCatalogOptions extends OperationOptions {

}
export async function installPluginPackageFromCatalog(
  client: CanDoItAllClientContext,
  packageId: string,
  body: PluginPackageInstallRequest,
  options?: InstallPluginPackageFromCatalogOptions,
): Promise<void> {
  const path = parse("/api/plugins/packages/catalog/{packageId}/install").expand({
    packageId: packageId
  });
  const httpRequestOptions = {
    headers: {},body: jsonPluginPackageInstallRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface UploadPluginPackageOptions extends OperationOptions {
  enable?: boolean
  contentType?: "multipart/form-data"
}
export async function uploadPluginPackage(
  client: CanDoItAllClientContext,
  body: {
      file: IFormFile;
    },
  options?: UploadPluginPackageOptions,
): Promise<void> {
  const path = parse("/api/plugins/packages/upload{?enable}").expand({
    ...(options?.enable != null && {enable: options.enable})
  });
  const httpRequestOptions = {
    headers: {
      "content-type": options?.contentType ?? "multipart/form-data"
    },body: [{
      name: "file",
      body: jsonIFormFileToTransportTransform(body.file)
    }],
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface GetPluginRuntimeRestartStatusOptions extends OperationOptions {

}
export async function getPluginRuntimeRestartStatus(
  client: CanDoItAllClientContext,
  options?: GetPluginRuntimeRestartStatusOptions,
): Promise<void> {
  const path = parse("/api/plugins/runtime/restart-status").expand({});
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface RestartPluginRuntimeOptions extends OperationOptions {}
export async function restartPluginRuntime(
  client: CanDoItAllClientContext,
  body: PluginRuntimeRestartRequest,
  options?: RestartPluginRuntimeOptions,
): Promise<void> {
  const path = parse("/api/plugins/runtime/restart").expand({});
  const httpRequestOptions = {
    headers: {},body: jsonPluginRuntimeRestartRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface InstallPluginOptions extends OperationOptions {}
export async function installPlugin(
  client: CanDoItAllClientContext,
  pluginId: string,
  body: PluginInstallRequest,
  options?: InstallPluginOptions,
): Promise<void> {
  const path = parse("/api/plugins/{pluginId}/install").expand({
    pluginId: pluginId
  });
  const httpRequestOptions = {
    headers: {},body: jsonPluginInstallRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface EnablePluginOptions extends OperationOptions {}
export async function enablePlugin(
  client: CanDoItAllClientContext,
  pluginId: string,
  body: PluginInstallationUpdateRequest,
  options?: EnablePluginOptions,
): Promise<void> {
  const path = parse("/api/plugins/{pluginId}/enable").expand({
    pluginId: pluginId
  });
  const httpRequestOptions = {
    headers: {

    },body: jsonPluginInstallationUpdateRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface DisablePluginOptions extends OperationOptions {}
export async function disablePlugin(
  client: CanDoItAllClientContext,
  pluginId: string,
  body: PluginInstallationUpdateRequest,
  options?: DisablePluginOptions,
): Promise<void> {
  const path = parse("/api/plugins/{pluginId}/disable").expand({
    pluginId: pluginId
  });
  const httpRequestOptions = {
    headers: {

    },body: jsonPluginInstallationUpdateRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface GetPluginSettingsOptions extends OperationOptions {}
export async function getPluginSettings(
  client: CanDoItAllClientContext,
  pluginId: string,
  options?: GetPluginSettingsOptions,
): Promise<void> {
  const path = parse("/api/plugins/{pluginId}/settings").expand({
    pluginId: pluginId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface ListPluginGrantsOptions extends OperationOptions {}
export async function listPluginGrants(
  client: CanDoItAllClientContext,
  pluginId: string,
  options?: ListPluginGrantsOptions,
): Promise<void> {
  const path = parse("/api/plugins/{pluginId}/grants").expand({
    pluginId: pluginId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface UpdatePluginGrantOptions extends OperationOptions {}
export async function updatePluginGrant(
  client: CanDoItAllClientContext,
  pluginId: string,
  body: PluginGrantUpdateRequest,
  options?: UpdatePluginGrantOptions,
): Promise<void> {
  const path = parse("/api/plugins/{pluginId}/grants").expand({
    pluginId: pluginId
  });
  const httpRequestOptions = {
    headers: {},body: jsonPluginGrantUpdateRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).put(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface ListPluginConnectionsOptions extends OperationOptions {}
export async function listPluginConnections(
  client: CanDoItAllClientContext,
  pluginId: string,
  options?: ListPluginConnectionsOptions,
): Promise<void> {
  const path = parse("/api/plugins/{pluginId}/connections").expand({
    pluginId: pluginId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface SavePluginConnectionOptions extends OperationOptions {}
export async function savePluginConnection(
  client: CanDoItAllClientContext,
  pluginId: string,
  body: PluginConnectionSaveRequest,
  options?: SavePluginConnectionOptions,
): Promise<void> {
  const path = parse("/api/plugins/{pluginId}/connections").expand({
    pluginId: pluginId
  });
  const httpRequestOptions = {
    headers: {},body: jsonPluginConnectionSaveRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface ListPluginOAuthStatusesOptions extends OperationOptions {}
export async function listPluginOAuthStatuses(
  client: CanDoItAllClientContext,
  pluginId: string,
  options?: ListPluginOAuthStatusesOptions,
): Promise<void> {
  const path = parse("/api/plugins/{pluginId}/oauth/status").expand({
    pluginId: pluginId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface StartPluginOAuthOptions extends OperationOptions {}
export async function startPluginOAuth(
  client: CanDoItAllClientContext,
  pluginId: string,
  body: PluginOAuthStartRequest,
  options?: StartPluginOAuthOptions,
): Promise<void> {
  const path = parse("/api/plugins/{pluginId}/oauth/start").expand({
    pluginId: pluginId
  });
  const httpRequestOptions = {
    headers: {},body: jsonPluginOAuthStartRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface DisconnectPluginOAuthOptions extends OperationOptions {}
export async function disconnectPluginOAuth(
  client: CanDoItAllClientContext,
  pluginId: string,
  connectionId: string,
  options?: DisconnectPluginOAuthOptions,
): Promise<void> {
  const path = parse("/api/plugins/{pluginId}/connections/{connectionId}/oauth/disconnect").expand({
    pluginId: pluginId,
    connectionId: connectionId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface CompletePluginOAuthCallbackOptions extends OperationOptions {
  state?: string
  code?: string
  error?: string
  errorDescription?: string
}
export async function completePluginOAuthCallback(
  client: CanDoItAllClientContext,
  options?: CompletePluginOAuthCallbackOptions,
): Promise<void> {
  const path = parse("/api/plugins/oauth/callback{?state,code,error,error_description}").expand({
    ...(options?.state != null && {state: options.state}),
    ...(options?.code != null && {code: options.code}),
    ...(options?.error != null && {error: options.error}),
    ...(options?.errorDescription != null && {error_description: options.errorDescription})
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface ListCrmHrPartiesOptions extends OperationOptions {
  search?: string
  tags?: Array<string>
  scope?: number
  pageIndex?: unknown
  pageSize?: unknown
  includeArchived?: boolean
}
export async function listCrmHrParties(
  client: CanDoItAllClientContext,
  options?: ListCrmHrPartiesOptions,
): Promise<void> {
  const path = parse("/api/crm-hr/parties{?Search,Tags*,Scope,PageIndex,PageSize,IncludeArchived}").expand({
    ...(options?.search != null && {Search: options.search}),
    ...(options?.tags != null && {Tags: jsonArrayStringToTransportTransform(options.tags)}),
    ...(options?.scope != null && {Scope: options.scope}),
    ...(options?.pageIndex != null && {PageIndex: options.pageIndex}),
    ...(options?.pageSize != null && {PageSize: options.pageSize}),
    ...(options?.includeArchived != null && {IncludeArchived: options.includeArchived})
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface CreateCrmHrPartyOptions extends OperationOptions {}
export async function createCrmHrParty(
  client: CanDoItAllClientContext,
  body: PartyCreateApiRequest,
  options?: CreateCrmHrPartyOptions,
): Promise<void> {
  const path = parse("/api/crm-hr/parties").expand({});
  const httpRequestOptions = {
    headers: {},body: jsonPartyCreateApiRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface GetCrmHrPartyOptions extends OperationOptions {}
export async function getCrmHrParty(
  client: CanDoItAllClientContext,
  partyId: string,
  options?: GetCrmHrPartyOptions,
): Promise<void> {
  const path = parse("/api/crm-hr/parties/{partyId}").expand({
    partyId: partyId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface ListCrmHrPartyRelationshipsOptions extends OperationOptions {}
export async function listCrmHrPartyRelationships(
  client: CanDoItAllClientContext,
  partyId: string,
  options?: ListCrmHrPartyRelationshipsOptions,
): Promise<void> {
  const path = parse("/api/crm-hr/parties/{partyId}/relationships").expand({
    partyId: partyId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface ReplaceCrmHrPartyRelationshipsOptions extends OperationOptions {

}
export async function replaceCrmHrPartyRelationships(
  client: CanDoItAllClientContext,
  partyId: string,
  body: PartyRelationshipsReplaceApiRequest,
  options?: ReplaceCrmHrPartyRelationshipsOptions,
): Promise<void> {
  const path = parse("/api/crm-hr/parties/{partyId}/relationships").expand({
    partyId: partyId
  });
  const httpRequestOptions = {
    headers: {

    },body: jsonPartyRelationshipsReplaceApiRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).put(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface ListCrmHrWorkforceOptions extends OperationOptions {
  search?: string
  tags?: Array<string>
  pageIndex?: unknown
  pageSize?: unknown
  includeArchived?: boolean
}
export async function listCrmHrWorkforce(
  client: CanDoItAllClientContext,
  options?: ListCrmHrWorkforceOptions,
): Promise<void> {
  const path = parse("/api/crm-hr/workforce{?Search,Tags*,PageIndex,PageSize,IncludeArchived}").expand({
    ...(options?.search != null && {Search: options.search}),
    ...(options?.tags != null && {Tags: jsonArrayStringToTransportTransform(options.tags)}),
    ...(options?.pageIndex != null && {PageIndex: options.pageIndex}),
    ...(options?.pageSize != null && {PageSize: options.pageSize}),
    ...(options?.includeArchived != null && {IncludeArchived: options.includeArchived})
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface GetCrmHrWorkforceWorkspaceOptions extends OperationOptions {}
export async function getCrmHrWorkforceWorkspace(
  client: CanDoItAllClientContext,
  partyId: string,
  options?: GetCrmHrWorkforceWorkspaceOptions,
): Promise<void> {
  const path = parse("/api/crm-hr/workforce/{partyId}").expand({
    partyId: partyId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface SaveCrmHrWorkforceProfileOptions extends OperationOptions {}
export async function saveCrmHrWorkforceProfile(
  client: CanDoItAllClientContext,
  body: WorkforceProfileSaveApiRequest,
  options?: SaveCrmHrWorkforceProfileOptions,
): Promise<void> {
  const path = parse("/api/crm-hr/workforce/profiles").expand({});
  const httpRequestOptions = {
    headers: {

    },body: jsonWorkforceProfileSaveApiRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface ListCrmHrSkillDefinitionsOptions extends OperationOptions {}
export async function listCrmHrSkillDefinitions(
  client: CanDoItAllClientContext,
  options?: ListCrmHrSkillDefinitionsOptions,
): Promise<void> {
  const path = parse("/api/crm-hr/workforce/skills").expand({});
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface SaveCrmHrSkillDefinitionOptions extends OperationOptions {}
export async function saveCrmHrSkillDefinition(
  client: CanDoItAllClientContext,
  body: SkillDefinitionSaveApiRequest,
  options?: SaveCrmHrSkillDefinitionOptions,
): Promise<void> {
  const path = parse("/api/crm-hr/workforce/skills").expand({});
  const httpRequestOptions = {
    headers: {

    },body: jsonSkillDefinitionSaveApiRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface SaveCrmHrPartySkillOptions extends OperationOptions {}
export async function saveCrmHrPartySkill(
  client: CanDoItAllClientContext,
  body: PartySkillSaveApiRequest,
  options?: SaveCrmHrPartySkillOptions,
): Promise<void> {
  const path = parse("/api/crm-hr/workforce/party-skills").expand({});
  const httpRequestOptions = {
    headers: {},body: jsonPartySkillSaveApiRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface SaveCrmHrCapacityBlockOptions extends OperationOptions {}
export async function saveCrmHrCapacityBlock(
  client: CanDoItAllClientContext,
  body: CapacityBlockSaveApiRequest,
  options?: SaveCrmHrCapacityBlockOptions,
): Promise<void> {
  const path = parse("/api/crm-hr/workforce/capacity-blocks").expand({});
  const httpRequestOptions = {
    headers: {},body: jsonCapacityBlockSaveApiRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface ListCrmHrRecruitmentApplicationsOptions extends OperationOptions {
  search?: string
  scope?: number
  pageIndex?: unknown
  pageSize?: unknown
}
export async function listCrmHrRecruitmentApplications(
  client: CanDoItAllClientContext,
  options?: ListCrmHrRecruitmentApplicationsOptions,
): Promise<void> {
  const path = parse("/api/crm-hr/recruiting/applications{?Search,Scope,PageIndex,PageSize}").expand({
    ...(options?.search != null && {Search: options.search}),
    ...(options?.scope != null && {Scope: options.scope}),
    ...(options?.pageIndex != null && {PageIndex: options.pageIndex}),
    ...(options?.pageSize != null && {PageSize: options.pageSize})
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface SaveCrmHrRecruitmentApplicationOptions extends OperationOptions {

}
export async function saveCrmHrRecruitmentApplication(
  client: CanDoItAllClientContext,
  body: RecruitmentApplicationSaveApiRequest,
  options?: SaveCrmHrRecruitmentApplicationOptions,
): Promise<void> {
  const path = parse("/api/crm-hr/recruiting/applications").expand({});
  const httpRequestOptions = {
    headers: {

    },body: jsonRecruitmentApplicationSaveApiRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface GetCrmHrRecruitmentApplicationOptions extends OperationOptions {

}
export async function getCrmHrRecruitmentApplication(
  client: CanDoItAllClientContext,
  applicationId: string,
  options?: GetCrmHrRecruitmentApplicationOptions,
): Promise<void> {
  const path = parse("/api/crm-hr/recruiting/applications/{applicationId}").expand({
    applicationId: applicationId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface SaveCrmHrRecruitmentInterviewOptions extends OperationOptions {

}
export async function saveCrmHrRecruitmentInterview(
  client: CanDoItAllClientContext,
  body: RecruitmentInterviewSaveApiRequest,
  options?: SaveCrmHrRecruitmentInterviewOptions,
): Promise<void> {
  const path = parse("/api/crm-hr/recruiting/interviews").expand({});
  const httpRequestOptions = {
    headers: {

    },body: jsonRecruitmentInterviewSaveApiRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface SaveCrmHrLifecycleTaskOptions extends OperationOptions {}
export async function saveCrmHrLifecycleTask(
  client: CanDoItAllClientContext,
  body: LifecycleTaskSaveApiRequest,
  options?: SaveCrmHrLifecycleTaskOptions,
): Promise<void> {
  const path = parse("/api/crm-hr/recruiting/lifecycle-tasks").expand({});
  const httpRequestOptions = {
    headers: {},body: jsonLifecycleTaskSaveApiRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface SaveCrmHrRecruitmentSupportAssignmentsOptions extends OperationOptions {

}
export async function saveCrmHrRecruitmentSupportAssignments(
  client: CanDoItAllClientContext,
  body: RecruitmentSupportAssignmentsSaveApiRequest,
  options?: SaveCrmHrRecruitmentSupportAssignmentsOptions,
): Promise<void> {
  const path = parse("/api/crm-hr/recruiting/support-assignments").expand({});
  const httpRequestOptions = {
    headers: {

    },body: jsonRecruitmentSupportAssignmentsSaveApiRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface ConvertCrmHrRecruitmentCandidateOptions extends OperationOptions {

}
export async function convertCrmHrRecruitmentCandidate(
  client: CanDoItAllClientContext,
  body: RecruitmentConversionApiRequest,
  options?: ConvertCrmHrRecruitmentCandidateOptions,
): Promise<void> {
  const path = parse("/api/crm-hr/recruiting/conversions").expand({});
  const httpRequestOptions = {
    headers: {

    },body: jsonRecruitmentConversionApiRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && !response.body) {
    return;
  }
  throw createRestError(response);
}
;
export interface ListLlmChatProviderOptionsOptions extends OperationOptions {}
/**
 * Lists credential-free provider, model, and thinking-effort options available
 * to LLM Chat definitions.
 *
 * @param {CanDoItAllClientContext} client
 * @param {ListLlmChatProviderOptionsOptions} [options]
 */
export async function listLlmChatProviderOptions(
  client: CanDoItAllClientContext,
  options?: ListLlmChatProviderOptionsOptions,
): Promise<Array<LlmChatProviderOptionApiResponse> | ProblemDetails> {
  const path = parse("/api/llm-chats/provider-options").expand({});
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonArrayLlmChatProviderOptionApiResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 422 && response.headers["content-type"]?.includes("application/json")) {
    return jsonProblemDetailsToApplicationTransform(response.body)!;
  }
  if (+response.status === 500 && response.headers["content-type"]?.includes("application/json")) {
    return jsonProblemDetailsToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface ListLlmChatDefinitionsOptions extends OperationOptions {
  take?: unknown
  cursor?: string
  status?: string
}
/**
 * Lists a bounded page of LLM Chat definitions, optionally filtered by
 * lifecycle status.
 *
 * @param {CanDoItAllClientContext} client
 * @param {ListLlmChatDefinitionsOptions} [options]
 */
export async function listLlmChatDefinitions(
  client: CanDoItAllClientContext,
  options?: ListLlmChatDefinitionsOptions,
): Promise<LlmChatApiPageOfLlmChatDefinitionApiResponse | ProblemDetails> {
  const path = parse("/api/llm-chats{?take,cursor,status}").expand({
    ...(options?.take != null && {take: options.take}),
    ...(options?.cursor != null && {cursor: options.cursor}),
    ...(options?.status != null && {status: options.status})
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonLlmChatApiPageOfLlmChatDefinitionApiResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      type: response.body.type,title: response.body.title,status: response.body.status,detail: response.body.detail,instance: response.body.instance
    }!;
  }
  throw createRestError(response);
}
;
export interface CreateLlmChatDefinitionOptions extends OperationOptions {}
/**
 * Creates a revisioned LLM Chat definition after validating its provider,
 * model, thinking effort, and response format.
 *
 * @param {CanDoItAllClientContext} client
 * @param {LlmChatDefinitionMutationApiRequest} body
 * @param {CreateLlmChatDefinitionOptions} [options]
 */
export async function createLlmChatDefinition(
  client: CanDoItAllClientContext,
  body: LlmChatDefinitionMutationApiRequest,
  options?: CreateLlmChatDefinitionOptions,
): Promise<LlmChatDefinitionApiResponse | ProblemDetails | ProblemDetails> {
  const path = parse("/api/llm-chats").expand({});
  const httpRequestOptions = {
    headers: {

    },body: jsonLlmChatDefinitionMutationApiRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 201 && response.headers["content-type"]?.includes("application/json")) {
    return {
      id: response.body.id,name: response.body.name,summary: response.body.summary,avatarImageUrl: response.body.avatarImageUrl,status: jsonLlmChatDefinitionStatusToApplicationTransform(response.body.status),currentRevision: response.body.currentRevision,providerProfileId: response.body.providerProfileId,providerName: response.body.providerName,providerKind: response.body.providerKind,model: response.body.model,thinkingEffort: response.body.thinkingEffort,tags: jsonArrayStringToApplicationTransform(response.body.tags),concurrencyToken: response.body.concurrencyToken,createdAtUtc: dateDeserializer(response.body.createdAtUtc)!,updatedAtUtc: dateDeserializer(response.body.updatedAtUtc)!,modelSettings: jsonLlmChatModelSettingsApiResponseToApplicationTransform(response.body.modelSettings),responseFormat: jsonLlmChatResponseFormatApiResponseToApplicationTransform(response.body.responseFormat),revisionReason: response.body.revisionReason
    }!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      type: response.body.type,title: response.body.title,status: response.body.status,detail: response.body.detail,instance: response.body.instance
    }!;
  }
  if (+response.status === 422 && response.headers["content-type"]?.includes("application/json")) {
    return jsonProblemDetailsToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface GetLlmChatDefinitionOptions extends OperationOptions {}
/**
 * Gets the safe definition detail without returning the system prompt or
 * provider credentials.
 *
 * @param {CanDoItAllClientContext} client
 * @param {string} definitionId
 * @param {GetLlmChatDefinitionOptions} [options]
 */
export async function getLlmChatDefinition(
  client: CanDoItAllClientContext,
  definitionId: string,
  options?: GetLlmChatDefinitionOptions,
): Promise<LlmChatDefinitionApiResponse | ProblemDetails | ProblemDetails> {
  const path = parse("/api/llm-chats/{definitionId}").expand({
    definitionId: definitionId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonLlmChatDefinitionApiResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      type: response.body.type,title: response.body.title,status: response.body.status,detail: response.body.detail,instance: response.body.instance
    }!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      type: response.body.type,title: response.body.title,status: response.body.status,detail: response.body.detail,instance: response.body.instance
    }!;
  }
  throw createRestError(response);
}
;
export interface UpdateLlmChatDefinitionOptions extends OperationOptions {
  ifMatch?: string
}
/**
 * Appends a validated immutable definition revision using the expected
 * concurrency token from the body or If-Match header.
 *
 * @param {CanDoItAllClientContext} client
 * @param {string} definitionId
 * @param {LlmChatDefinitionMutationApiRequest} body
 * @param {UpdateLlmChatDefinitionOptions} [options]
 */
export async function updateLlmChatDefinition(
  client: CanDoItAllClientContext,
  definitionId: string,
  body: LlmChatDefinitionMutationApiRequest,
  options?: UpdateLlmChatDefinitionOptions,
): Promise<LlmChatDefinitionApiResponse | ProblemDetails | ProblemDetails | ProblemDetails | ProblemDetails> {
  const path = parse("/api/llm-chats/{definitionId}").expand({
    definitionId: definitionId
  });
  const httpRequestOptions = {
    headers: {
      ...(options?.ifMatch != null && {"if-match": options.ifMatch})
    },body: jsonLlmChatDefinitionMutationApiRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).put(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonLlmChatDefinitionApiResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      type: response.body.type,title: response.body.title,status: response.body.status,detail: response.body.detail,instance: response.body.instance
    }!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      type: response.body.type,title: response.body.title,status: response.body.status,detail: response.body.detail,instance: response.body.instance
    }!;
  }
  if (+response.status === 409 && response.headers["content-type"]?.includes("application/json")) {
    return {
      type: response.body.type,title: response.body.title,status: response.body.status,detail: response.body.detail,instance: response.body.instance
    }!;
  }
  if (+response.status === 422 && response.headers["content-type"]?.includes("application/json")) {
    return jsonProblemDetailsToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface GetLlmChatDefinitionEditorOptions extends OperationOptions {}
/**
 * Gets the manage-scoped editable revision, including the system prompt and
 * current concurrency token.
 *
 * @param {CanDoItAllClientContext} client
 * @param {string} definitionId
 * @param {GetLlmChatDefinitionEditorOptions} [options]
 */
export async function getLlmChatDefinitionEditor(
  client: CanDoItAllClientContext,
  definitionId: string,
  options?: GetLlmChatDefinitionEditorOptions,
): Promise<LlmChatDefinitionEditorApiResponse | ProblemDetails | ProblemDetails> {
  const path = parse("/api/llm-chats/{definitionId}/editor").expand({
    definitionId: definitionId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonLlmChatDefinitionEditorApiResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      type: response.body.type,title: response.body.title,status: response.body.status,detail: response.body.detail,instance: response.body.instance
    }!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      type: response.body.type,title: response.body.title,status: response.body.status,detail: response.body.detail,instance: response.body.instance
    }!;
  }
  throw createRestError(response);
}
;
export interface ActivateLlmChatDefinitionOptions extends OperationOptions {
  ifMatch?: string
}
/**
 * Activates the definition using the expected concurrency token from the body
 * or If-Match header.
 *
 * @param {CanDoItAllClientContext} client
 * @param {string} definitionId
 * @param {LlmChatExpectedConcurrencyApiRequest} body
 * @param {ActivateLlmChatDefinitionOptions} [options]
 */
export async function activateLlmChatDefinition(
  client: CanDoItAllClientContext,
  definitionId: string,
  body: LlmChatExpectedConcurrencyApiRequest,
  options?: ActivateLlmChatDefinitionOptions,
): Promise<LlmChatDefinitionApiResponse | ProblemDetails | ProblemDetails | ProblemDetails> {
  const path = parse("/api/llm-chats/{definitionId}/activate").expand({
    definitionId: definitionId
  });
  const httpRequestOptions = {
    headers: {
      ...(options?.ifMatch != null && {"if-match": options.ifMatch})
    },body: jsonLlmChatExpectedConcurrencyApiRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonLlmChatDefinitionApiResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      type: response.body.type,title: response.body.title,status: response.body.status,detail: response.body.detail,instance: response.body.instance
    }!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      type: response.body.type,title: response.body.title,status: response.body.status,detail: response.body.detail,instance: response.body.instance
    }!;
  }
  if (+response.status === 409 && response.headers["content-type"]?.includes("application/json")) {
    return {
      type: response.body.type,title: response.body.title,status: response.body.status,detail: response.body.detail,instance: response.body.instance
    }!;
  }
  throw createRestError(response);
}
;
export interface SuspendLlmChatDefinitionOptions extends OperationOptions {
  ifMatch?: string
}
/**
 * Suspends the definition using the expected concurrency token from the body or
 * If-Match header.
 *
 * @param {CanDoItAllClientContext} client
 * @param {string} definitionId
 * @param {LlmChatExpectedConcurrencyApiRequest} body
 * @param {SuspendLlmChatDefinitionOptions} [options]
 */
export async function suspendLlmChatDefinition(
  client: CanDoItAllClientContext,
  definitionId: string,
  body: LlmChatExpectedConcurrencyApiRequest,
  options?: SuspendLlmChatDefinitionOptions,
): Promise<LlmChatDefinitionApiResponse | ProblemDetails | ProblemDetails | ProblemDetails> {
  const path = parse("/api/llm-chats/{definitionId}/suspend").expand({
    definitionId: definitionId
  });
  const httpRequestOptions = {
    headers: {
      ...(options?.ifMatch != null && {"if-match": options.ifMatch})
    },body: jsonLlmChatExpectedConcurrencyApiRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonLlmChatDefinitionApiResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      type: response.body.type,title: response.body.title,status: response.body.status,detail: response.body.detail,instance: response.body.instance
    }!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      type: response.body.type,title: response.body.title,status: response.body.status,detail: response.body.detail,instance: response.body.instance
    }!;
  }
  if (+response.status === 409 && response.headers["content-type"]?.includes("application/json")) {
    return {
      type: response.body.type,title: response.body.title,status: response.body.status,detail: response.body.detail,instance: response.body.instance
    }!;
  }
  throw createRestError(response);
}
;
export interface ArchiveLlmChatDefinitionOptions extends OperationOptions {
  ifMatch?: string
}
/**
 * Archives the definition using the expected concurrency token from the body or
 * If-Match header.
 *
 * @param {CanDoItAllClientContext} client
 * @param {string} definitionId
 * @param {LlmChatExpectedConcurrencyApiRequest} body
 * @param {ArchiveLlmChatDefinitionOptions} [options]
 */
export async function archiveLlmChatDefinition(
  client: CanDoItAllClientContext,
  definitionId: string,
  body: LlmChatExpectedConcurrencyApiRequest,
  options?: ArchiveLlmChatDefinitionOptions,
): Promise<LlmChatDefinitionApiResponse | ProblemDetails | ProblemDetails | ProblemDetails> {
  const path = parse("/api/llm-chats/{definitionId}/archive").expand({
    definitionId: definitionId
  });
  const httpRequestOptions = {
    headers: {
      ...(options?.ifMatch != null && {"if-match": options.ifMatch})
    },body: jsonLlmChatExpectedConcurrencyApiRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonLlmChatDefinitionApiResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      type: response.body.type,title: response.body.title,status: response.body.status,detail: response.body.detail,instance: response.body.instance
    }!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      type: response.body.type,title: response.body.title,status: response.body.status,detail: response.body.detail,instance: response.body.instance
    }!;
  }
  if (+response.status === 409 && response.headers["content-type"]?.includes("application/json")) {
    return {
      type: response.body.type,title: response.body.title,status: response.body.status,detail: response.body.detail,instance: response.body.instance
    }!;
  }
  throw createRestError(response);
}
;
export interface CreateLlmChatConversationOptions extends OperationOptions {}
/**
 * Creates an API-origin conversation. Creation is not idempotent; callers must
 * not blindly retry an ambiguous response.
 *
 * @param {CanDoItAllClientContext} client
 * @param {string} definitionId
 * @param {CreateLlmChatConversationApiRequest} body
 * @param {CreateLlmChatConversationOptions} [options]
 */
export async function createLlmChatConversation(
  client: CanDoItAllClientContext,
  definitionId: string,
  body: CreateLlmChatConversationApiRequest,
  options?: CreateLlmChatConversationOptions,
): Promise<LlmChatConversationApiResponse | ProblemDetails | ProblemDetails | ProblemDetails> {
  const path = parse("/api/llm-chats/{definitionId}/conversations").expand({
    definitionId: definitionId
  });
  const httpRequestOptions = {
    headers: {

    },body: jsonCreateLlmChatConversationApiRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 201 && response.headers["content-type"]?.includes("application/json")) {
    return {
      id: response.body.id,definitionId: response.body.definitionId,definitionRevision: response.body.definitionRevision,definitionName: response.body.definitionName,title: response.body.title,status: jsonLlmChatConversationStatusToApplicationTransform(response.body.status),origin: jsonLlmChatConversationOriginToApplicationTransform(response.body.origin),transcriptRevision: response.body.transcriptRevision,hasActiveTurn: response.body.hasActiveTurn,concurrencyToken: response.body.concurrencyToken,createdAtUtc: dateDeserializer(response.body.createdAtUtc)!,updatedAtUtc: dateDeserializer(response.body.updatedAtUtc)!,activeOperationId: response.body.activeOperationId,messages: jsonArrayLlmChatMessageApiResponseToApplicationTransform(response.body.messages),nextMessageCursor: response.body.nextMessageCursor
    }!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      type: response.body.type,title: response.body.title,status: response.body.status,detail: response.body.detail,instance: response.body.instance
    }!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      type: response.body.type,title: response.body.title,status: response.body.status,detail: response.body.detail,instance: response.body.instance
    }!;
  }
  if (+response.status === 409 && response.headers["content-type"]?.includes("application/json")) {
    return {
      type: response.body.type,title: response.body.title,status: response.body.status,detail: response.body.detail,instance: response.body.instance
    }!;
  }
  throw createRestError(response);
}
;
export interface ListLlmChatConversationsOptions extends OperationOptions {
  take?: unknown
  cursor?: string
  definitionId?: string
}
/**
 * Lists a bounded page of conversations, optionally filtered by definition,
 * using an opaque cursor.
 *
 * @param {CanDoItAllClientContext} client
 * @param {ListLlmChatConversationsOptions} [options]
 */
export async function listLlmChatConversations(
  client: CanDoItAllClientContext,
  options?: ListLlmChatConversationsOptions,
): Promise<LlmChatApiPageOfLlmChatConversationApiResponse | ProblemDetails> {
  const path = parse("/api/llm-conversations{?take,cursor,definitionId}").expand({
    ...(options?.take != null && {take: options.take}),
    ...(options?.cursor != null && {cursor: options.cursor}),
    ...(options?.definitionId != null && {definitionId: options.definitionId})
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonLlmChatApiPageOfLlmChatConversationApiResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      type: response.body.type,title: response.body.title,status: response.body.status,detail: response.body.detail,instance: response.body.instance
    }!;
  }
  throw createRestError(response);
}
;
export interface GetLlmChatConversationOptions extends OperationOptions {
  messageTake?: unknown
  messageCursor?: string
}
/**
 * Gets a conversation and a bounded page of its non-system transcript messages.
 *
 * @param {CanDoItAllClientContext} client
 * @param {string} conversationId
 * @param {GetLlmChatConversationOptions} [options]
 */
export async function getLlmChatConversation(
  client: CanDoItAllClientContext,
  conversationId: string,
  options?: GetLlmChatConversationOptions,
): Promise<LlmChatConversationApiResponse | ProblemDetails | ProblemDetails> {
  const path = parse("/api/llm-conversations/{conversationId}{?messageTake,messageCursor}").expand({
    conversationId: conversationId,
    ...(options?.messageTake != null && {messageTake: options.messageTake}),
    ...(options?.messageCursor != null && {messageCursor: options.messageCursor})
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonLlmChatConversationApiResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      type: response.body.type,title: response.body.title,status: response.body.status,detail: response.body.detail,instance: response.body.instance
    }!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      type: response.body.type,title: response.body.title,status: response.body.status,detail: response.body.detail,instance: response.body.instance
    }!;
  }
  throw createRestError(response);
}
;
export interface RenameLlmChatConversationOptions extends OperationOptions {
  ifMatch?: string
}
/**
 * Renames a conversation using its expected transcript revision and concurrency
 * token.
 *
 * @param {CanDoItAllClientContext} client
 * @param {string} conversationId
 * @param {RenameLlmChatConversationApiRequest} body
 * @param {RenameLlmChatConversationOptions} [options]
 */
export async function renameLlmChatConversation(
  client: CanDoItAllClientContext,
  conversationId: string,
  body: RenameLlmChatConversationApiRequest,
  options?: RenameLlmChatConversationOptions,
): Promise<LlmChatConversationApiResponse | ProblemDetails | ProblemDetails | ProblemDetails> {
  const path = parse("/api/llm-conversations/{conversationId}/title").expand({
    conversationId: conversationId
  });
  const httpRequestOptions = {
    headers: {
      ...(options?.ifMatch != null && {"if-match": options.ifMatch})
    },body: jsonRenameLlmChatConversationApiRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).patch(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonLlmChatConversationApiResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      type: response.body.type,title: response.body.title,status: response.body.status,detail: response.body.detail,instance: response.body.instance
    }!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      type: response.body.type,title: response.body.title,status: response.body.status,detail: response.body.detail,instance: response.body.instance
    }!;
  }
  if (+response.status === 409 && response.headers["content-type"]?.includes("application/json")) {
    return {
      type: response.body.type,title: response.body.title,status: response.body.status,detail: response.body.detail,instance: response.body.instance
    }!;
  }
  throw createRestError(response);
}
;
export interface ArchiveLlmChatConversationOptions extends OperationOptions {
  ifMatch?: string
}
/**
 * Archives a conversation using the expected concurrency token from the body or
 * If-Match header.
 *
 * @param {CanDoItAllClientContext} client
 * @param {string} conversationId
 * @param {LlmChatExpectedConcurrencyApiRequest} body
 * @param {ArchiveLlmChatConversationOptions} [options]
 */
export async function archiveLlmChatConversation(
  client: CanDoItAllClientContext,
  conversationId: string,
  body: LlmChatExpectedConcurrencyApiRequest,
  options?: ArchiveLlmChatConversationOptions,
): Promise<LlmChatConversationApiResponse | ProblemDetails | ProblemDetails | ProblemDetails> {
  const path = parse("/api/llm-conversations/{conversationId}/archive").expand({
    conversationId: conversationId
  });
  const httpRequestOptions = {
    headers: {
      ...(options?.ifMatch != null && {"if-match": options.ifMatch})
    },body: jsonLlmChatExpectedConcurrencyApiRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonLlmChatConversationApiResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      type: response.body.type,title: response.body.title,status: response.body.status,detail: response.body.detail,instance: response.body.instance
    }!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      type: response.body.type,title: response.body.title,status: response.body.status,detail: response.body.detail,instance: response.body.instance
    }!;
  }
  if (+response.status === 409 && response.headers["content-type"]?.includes("application/json")) {
    return {
      type: response.body.type,title: response.body.title,status: response.body.status,detail: response.body.detail,instance: response.body.instance
    }!;
  }
  throw createRestError(response);
}
;
export interface SendLlmChatTurnOptions extends OperationOptions {}
/**
 * Admits one retry-safe turn. Retry the same logical request with the same
 * operationId and identical body; use a new operationId only for an
 * intentionally distinct turn. expectedTranscriptRevision is the optimistic
 * transcript token.
 *
 * @param {CanDoItAllClientContext} client
 * @param {string} conversationId
 * @param {SendLlmChatTurnApiRequest} body
 * @param {SendLlmChatTurnOptions} [options]
 */
export async function sendLlmChatTurn(
  client: CanDoItAllClientContext,
  conversationId: string,
  body: SendLlmChatTurnApiRequest,
  options?: SendLlmChatTurnOptions,
): Promise<LlmChatOperationApiResponse | ProblemDetails | ProblemDetails | ProblemDetails | ProblemDetails> {
  const path = parse("/api/llm-conversations/{conversationId}/turns").expand({
    conversationId: conversationId
  });
  const httpRequestOptions = {
    headers: {},body: jsonSendLlmChatTurnApiRequestToTransportTransform(body),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 202 && response.headers["content-type"]?.includes("application/json")) {
    return {
      schema: response.body.schema,operationId: response.body.operationId,conversationId: response.body.conversationId,status: jsonLlmChatOperationStatusToApplicationTransform(response.body.status),replayed: response.body.replayed,expectedTranscriptRevision: response.body.expectedTranscriptRevision,resultingTranscriptRevision: response.body.resultingTranscriptRevision,lastEventSequence: response.body.lastEventSequence,statusUrl: response.body.statusUrl,eventsUrl: response.body.eventsUrl,cancelUrl: response.body.cancelUrl,invocationAttempts: jsonArrayLlmChatInvocationAttemptApiResponseToApplicationTransform(response.body.invocationAttempts),assistantMessage: jsonLlmChatMessageApiResponseToApplicationTransform(response.body.assistantMessage),failure: jsonLlmChatOperationFailureApiResponseToApplicationTransform(response.body.failure),startedAtUtc: dateDeserializer(response.body.startedAtUtc)!,completedAtUtc: dateDeserializer(response.body.completedAtUtc)!
    }!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      type: response.body.type,title: response.body.title,status: response.body.status,detail: response.body.detail,instance: response.body.instance
    }!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      type: response.body.type,title: response.body.title,status: response.body.status,detail: response.body.detail,instance: response.body.instance
    }!;
  }
  if (+response.status === 409 && response.headers["content-type"]?.includes("application/json")) {
    return {
      type: response.body.type,title: response.body.title,status: response.body.status,detail: response.body.detail,instance: response.body.instance
    }!;
  }
  if (+response.status === 422 && response.headers["content-type"]?.includes("application/json")) {
    return jsonProblemDetailsToApplicationTransform(response.body)!;
  }
  if (+response.status === 503 && response.headers["content-type"]?.includes("application/json")) {
    return jsonProblemDetailsToApplicationTransform(response.body)!;
  }
  if (+response.status === 504 && response.headers["content-type"]?.includes("application/json")) {
    return jsonProblemDetailsToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface AbandonLlmChatActiveTurnOptions extends OperationOptions {}
/**
 * Abandons only the exact RecoveryRequired turn after its live execution owner
 * has drained.
 *
 * @param {CanDoItAllClientContext} client
 * @param {string} conversationId
 * @param {string} turnId
 * @param {AbandonLlmChatActiveTurnOptions} [options]
 */
export async function abandonLlmChatActiveTurn(
  client: CanDoItAllClientContext,
  conversationId: string,
  turnId: string,
  options?: AbandonLlmChatActiveTurnOptions,
): Promise<LlmChatOperationApiResponse | ProblemDetails | ProblemDetails | ProblemDetails> {
  const path = parse("/api/llm-conversations/{conversationId}/active-turns/{turnId}/abandon").expand({
    conversationId: conversationId,
    turnId: turnId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonLlmChatOperationApiResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      type: response.body.type,title: response.body.title,status: response.body.status,detail: response.body.detail,instance: response.body.instance
    }!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      type: response.body.type,title: response.body.title,status: response.body.status,detail: response.body.detail,instance: response.body.instance
    }!;
  }
  if (+response.status === 409 && response.headers["content-type"]?.includes("application/json")) {
    return {
      type: response.body.type,title: response.body.title,status: response.body.status,detail: response.body.detail,instance: response.body.instance
    }!;
  }
  throw createRestError(response);
}
;
export interface GetLlmChatOperationOptions extends OperationOptions {}
/**
 * Gets durable operation state, result metadata, and bounded provider
 * invocation evidence.
 *
 * @param {CanDoItAllClientContext} client
 * @param {string} operationId
 * @param {GetLlmChatOperationOptions} [options]
 */
export async function getLlmChatOperation(
  client: CanDoItAllClientContext,
  operationId: string,
  options?: GetLlmChatOperationOptions,
): Promise<LlmChatOperationApiResponse | ProblemDetails | ProblemDetails> {
  const path = parse("/api/llm-chat-operations/{operationId}").expand({
    operationId: operationId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonLlmChatOperationApiResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      type: response.body.type,title: response.body.title,status: response.body.status,detail: response.body.detail,instance: response.body.instance
    }!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      type: response.body.type,title: response.body.title,status: response.body.status,detail: response.body.detail,instance: response.body.instance
    }!;
  }
  throw createRestError(response);
}
;
export interface StreamLlmChatOperationEventsOptions extends OperationOptions {}
/**
 * Replays durable operation events after Last-Event-ID or the after query
 * cursor and follows committed updates until a terminal operation event. Bearer
 * credentials are accepted only through the normal Authorization header, never
 * query parameters.
 *
 * @param {CanDoItAllClientContext} client
 * @param {string} operationId
 * @param {StreamLlmChatOperationEventsOptions} [options]
 */
export async function streamLlmChatOperationEvents(
  client: CanDoItAllClientContext,
  operationId: string,
  options?: StreamLlmChatOperationEventsOptions,
): Promise<string | ProblemDetails | ProblemDetails | ProblemDetails> {
  const path = parse("/api/llm-chat-operations/{operationId}/events").expand({
    operationId: operationId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("text/event-stream")) {
    return response.body!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      type: response.body.type,title: response.body.title,status: response.body.status,detail: response.body.detail,instance: response.body.instance
    }!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      type: response.body.type,title: response.body.title,status: response.body.status,detail: response.body.detail,instance: response.body.instance
    }!;
  }
  if (+response.status === 409 && response.headers["content-type"]?.includes("application/json")) {
    return {
      type: response.body.type,title: response.body.title,status: response.body.status,detail: response.body.detail,instance: response.body.instance
    }!;
  }
  throw createRestError(response);
}
;
export interface CancelLlmChatOperationOptions extends OperationOptions {}
/**
 * Durably requests cancellation and signals a live in-process provider call
 * when owned here.
 *
 * @param {CanDoItAllClientContext} client
 * @param {string} operationId
 * @param {CancelLlmChatOperationOptions} [options]
 */
export async function cancelLlmChatOperation(
  client: CanDoItAllClientContext,
  operationId: string,
  options?: CancelLlmChatOperationOptions,
): Promise<LlmChatOperationApiResponse | LlmChatOperationApiResponse | ProblemDetails | ProblemDetails> {
  const path = parse("/api/llm-chat-operations/{operationId}/cancel").expand({
    operationId: operationId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonLlmChatOperationApiResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 202 && response.headers["content-type"]?.includes("application/json")) {
    return {
      schema: response.body.schema,operationId: response.body.operationId,conversationId: response.body.conversationId,status: jsonLlmChatOperationStatusToApplicationTransform(response.body.status),replayed: response.body.replayed,expectedTranscriptRevision: response.body.expectedTranscriptRevision,resultingTranscriptRevision: response.body.resultingTranscriptRevision,lastEventSequence: response.body.lastEventSequence,statusUrl: response.body.statusUrl,eventsUrl: response.body.eventsUrl,cancelUrl: response.body.cancelUrl,invocationAttempts: jsonArrayLlmChatInvocationAttemptApiResponseToApplicationTransform(response.body.invocationAttempts),assistantMessage: jsonLlmChatMessageApiResponseToApplicationTransform(response.body.assistantMessage),failure: jsonLlmChatOperationFailureApiResponseToApplicationTransform(response.body.failure),startedAtUtc: dateDeserializer(response.body.startedAtUtc)!,completedAtUtc: dateDeserializer(response.body.completedAtUtc)!
    }!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      type: response.body.type,title: response.body.title,status: response.body.status,detail: response.body.detail,instance: response.body.instance
    }!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      type: response.body.type,title: response.body.title,status: response.body.status,detail: response.body.detail,instance: response.body.instance
    }!;
  }
  throw createRestError(response);
}
;
export interface ReconcileLlmChatOperationOptions extends OperationOptions {}
/**
 * Reconciles an operation only from durable transcript, invocation, dispatch,
 * and lease evidence. Ambiguous post-dispatch work remains recovery-required
 * and is never redispatched.
 *
 * @param {CanDoItAllClientContext} client
 * @param {string} operationId
 * @param {ReconcileLlmChatOperationOptions} [options]
 */
export async function reconcileLlmChatOperation(
  client: CanDoItAllClientContext,
  operationId: string,
  options?: ReconcileLlmChatOperationOptions,
): Promise<LlmChatOperationApiResponse | ProblemDetails | ProblemDetails | ProblemDetails> {
  const path = parse("/api/llm-chat-operations/{operationId}/reconcile").expand({
    operationId: operationId
  });
  const httpRequestOptions = {
    headers: {},
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);


  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonLlmChatOperationApiResponseToApplicationTransform(response.body)!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return {
      type: response.body.type,title: response.body.title,status: response.body.status,detail: response.body.detail,instance: response.body.instance
    }!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return {
      type: response.body.type,title: response.body.title,status: response.body.status,detail: response.body.detail,instance: response.body.instance
    }!;
  }
  if (+response.status === 409 && response.headers["content-type"]?.includes("application/json")) {
    return {
      type: response.body.type,title: response.body.title,status: response.body.status,detail: response.body.detail,instance: response.body.instance
    }!;
  }
  throw createRestError(response);
}
;
