import type {
  AgentAllowedSecretReference,
  AgentCapabilityAssignment,
  AgentCatalogItemApiResponse,
  AgentChatApiRequest,
  AgentChatAttachmentStagingResult,
  AgentChatMessageApiResponse,
  AgentChatPageBootstrapApiResponse,
  AgentChatRunApiResponse,
  AgentChatRunSummaryApiResponse,
  AgentChatRuntimeApiResponse,
  AgentChatSessionApiResponse,
  AgentChatSessionSummaryApiResponse,
  AgentChatWorkspaceApiResponse,
  AgentCloneApiRequest,
  AgentDefinition,
  AgentEditorModel,
  AgentExecutionApprovalApiResponse,
  AgentExecutionArtifactApiResponse,
  AgentExecutionCheckpointApiResponse,
  AgentExecutionLogApiResponse,
  AgentExecutionRunApiRequest,
  AgentExecutionRunApiResponse,
  AgentExecutionRunDetailApiResponse,
  AgentExecutionRunResultApiResponse,
  AgentExecutionRunStartApiRequest,
  AgentExecutionToolReceiptApiResponse,
  AgentExternalProvisioningReceipt,
  AgentExternalProvisioningResource,
  AgentFinalizerMode,
  AgentImageAttachmentUploadRequest,
  AgentImageGenerationAccessSettings,
  AgentImportApiRequest,
  AgentJsonSchemaOutputContract,
  AgentJsonSchemaOutputValidationStatus,
  AgentMemoryAccessSettings,
  AgentMemoryProviderAlias,
  AgentMemoryProviderAssignmentSetting,
  AgentMemoryProviderBindingSetting,
  AgentPackageImportApiForm,
  AgentPackageImportReceipt,
  AgentPendingApprovalApiResponse,
  AgentPermissionsPolicy,
  AgentProcessAccessSettings,
  AgentProjectStructureAccessSettings,
  AgentProviderFailureCategory,
  AgentProviderUsageTotalsApiResponse,
  AgentRecruitingAssessmentAnalysis,
  AgentRecruitingAssessmentClassification,
  AgentRecruitingAttempt,
  AgentRecruitingAttemptComparison,
  AgentRecruitingAutomatedDecision,
  AgentRecruitingAutomatedEvaluation,
  AgentRecruitingCandidateReadiness,
  AgentRecruitingEvidenceCompleteness,
  AgentRecruitingExecutionTarget,
  AgentRecruitingHumanDecision,
  AgentRecruitingHumanReview,
  AgentRecruitingInterview,
  AgentRecruitingProposedNextStep,
  AgentRecruitingReadinessStatus,
  AgentRecruitingTargetKind,
  AgentRunMetricApiResponse,
  AgentSpeechToTextSettings,
  AgentStructuredOutputApiResponse,
  AgentStructuredOutputValidationErrorApiResponse,
  AgentTeamEditorModel,
  AgentTeamMembersApiRequest,
  AgentTemplateConversionApiRequest,
  AgentTextToSpeechSettings,
  AgentVoiceAccessSettings,
  AgentVoiceSettings,
  AgentWorkspaceToolAccessSettings,
  ApiAccessStatus,
  ApiAck,
  ApiErrorItem,
  ApiErrorResponse,
  ApiTokenIssueRequest,
  ApiTokenIssueResult,
  AppendAgentRecruitingAttemptCommand,
  AppendAgentRecruitingReviewCommand,
  ApplicationPurposeRootConfigurationSource,
  ApplicationPurposeRootKind,
  ApplicationPurposeRootReadiness,
  CapabilityAccessPolicyTemplateDto,
  CapabilityAccessPreviewRequest,
  CapabilityAccessRuleTemplateDto,
  CapabilityEditorModel,
  CapabilityIdentityEditorModel,
  CapabilityMcpSetupTestRequest,
  CapabilitySelectorTemplateDto,
  CapabilityToolSetupTestRequest,
  CapacityBlockSaveApiRequest,
  ChatSessionRenameApiRequest,
  ConfigurationFieldDescriptor,
  ConfigurationFieldOption,
  ConfigurationSchema,
  CreateAgentRecruitingInterviewCommand,
  CreateLlmChatConversationApiRequest,
  ExecutionInvocationContext,
  ExecutionInvocationPolicy,
  ExternalTargetRootBinding,
  GanttTaskDateChange,
  GanttTaskId,
  GanttTaskScheduleChangeRequest,
  HostCapabilityAvailability,
  HostCapabilityCriticality,
  HostCapabilityDescriptor,
  HostCapabilityExecutionBoundary,
  HostCapabilityId,
  HostCapabilityImplementationRegistration,
  HostCapabilityReasonCode,
  HostCapabilitySnapshot,
  HostCapabilitySupportLevel,
  IFormFile,
  LifecycleTaskSaveApiRequest,
  LlmCallComponent,
  LlmCallComponentSaveRequest,
  LlmChatApiPageOfLlmChatConversationApiResponse,
  LlmChatApiPageOfLlmChatDefinitionApiResponse,
  LlmChatConversationApiResponse,
  LlmChatConversationOrigin,
  LlmChatConversationStatus,
  LlmChatDefinitionApiResponse,
  LlmChatDefinitionEditorApiResponse,
  LlmChatDefinitionMutationApiRequest,
  LlmChatDefinitionStatus,
  LlmChatExpectedConcurrencyApiRequest,
  LlmChatInvocationAttemptApiResponse,
  LlmChatMessageApiResponse,
  LlmChatModelOptionApiResponse,
  LlmChatModelSettingsApiRequest,
  LlmChatModelSettingsApiResponse,
  LlmChatOperationApiResponse,
  LlmChatOperationFailureApiResponse,
  LlmChatOperationStatus,
  LlmChatProviderOptionApiResponse,
  LlmChatResponseFormatApiRequest,
  LlmChatResponseFormatApiResponse,
  LlmChatThinkingEffortOptionApiResponse,
  LlmChatUsageApiResponse,
  LlmMessageRole,
  MemoryAcceptedOperationApiResponse,
  MemoryCapabilityId,
  MemoryCitationApiResponse,
  MemoryContextPackApiResponse,
  MemoryContextSectionApiResponse,
  MemoryEditorModel,
  MemoryLedgerStatus,
  MemoryOperationHandlerStatus,
  MemoryOperationKind,
  MemoryProviderCapabilitiesApiRequest,
  MemoryProviderCapabilitiesApiResponse,
  MemoryProviderDriverKind,
  MemoryProviderDriverKindApiRequest,
  MemoryProviderFallbackBehavior,
  MemoryProviderFallbackBehaviorApiRequest,
  MemoryProviderHealthState,
  MemoryProviderHttpTransportApiModel,
  MemoryProviderInstanceId,
  MemoryProviderInteractionSupportApiResponse,
  MemoryProviderLimitsApiResponse,
  MemoryProviderMcpTransportApiModel,
  MemoryProviderOperationApiResponse,
  MemoryProviderOperationStatusApiResponse,
  MemoryProviderProfileApiRequest,
  MemoryProviderProfileApiResponse,
  MemoryProviderQueryApiRequest,
  MemoryProviderQueryApiResponse,
  MemoryProviderQueryMode,
  MemoryProviderSelectionApiResponse,
  MemoryProviderSelectionReason,
  MemoryProviderSelectionStatus,
  MemoryProviderWorkspaceScope,
  MemoryWarningApiResponse,
  MemoryWarningKind,
  PartyAddressCreateApiRequest,
  PartyCreateApiRequest,
  PartyPublicContactCreateApiRequest,
  PartyRelationshipReplaceItemApiRequest,
  PartyRelationshipsReplaceApiRequest,
  PartyRoleCreateApiRequest,
  PartySkillSaveApiRequest,
  PathFoundationReadinessReason,
  PathFoundationReadinessState,
  PendingApprovalApiRequest,
  PendingApprovalDecisionApiRequest,
  PluginConnectionSaveRequest,
  PluginGrantUpdateRequest,
  PluginInstallationUpdateRequest,
  PluginInstallRequest,
  PluginOAuthStartRequest,
  PluginPackageInstallRequest,
  PluginRuntimeRestartRequest,
  PostgreSqlDevDatabaseProfileRequest,
  ProblemDetails,
  ProcessApiContractResponse,
  ProcessDefinitionArtifactExpectationKey,
  ProcessDefinitionArtifactExpectationProjection,
  ProcessDefinitionBranchOutcomeKey,
  ProcessDefinitionBranchOutcomeProjection,
  ProcessDefinitionCanvasCommandProjection,
  ProcessDefinitionCanvasCommandReceipt,
  ProcessDefinitionCanvasEdgeKey,
  ProcessDefinitionCanvasEdgeProjection,
  ProcessDefinitionCanvasEditorNodeProjection,
  ProcessDefinitionCanvasEditorProjection,
  ProcessDefinitionCanvasNodeKey,
  ProcessDefinitionCanvasPortProjection,
  ProcessDefinitionCanvasSelectionProjection,
  ProcessDefinitionCanvasToolboxActionKey,
  ProcessDefinitionCanvasToolboxActionProjection,
  ProcessDefinitionCanvasVersionToken,
  ProcessDefinitionCanvasViewportProjection,
  ProcessDefinitionCatalogApiResponse,
  ProcessDefinitionCatalogItemKey,
  ProcessDefinitionCatalogItemProjection,
  ProcessDefinitionEditorCommandProjection,
  ProcessDefinitionEditorCommandReceipt,
  ProcessDefinitionEditorContractProjection,
  ProcessDefinitionEditorGovernanceProjection,
  ProcessDefinitionEditorIdentityProjection,
  ProcessDefinitionEditorLintIssueProjection,
  ProcessDefinitionEditorLintProjection,
  ProcessDefinitionEditorProjection,
  ProcessDefinitionEditorSimulationProjection,
  ProcessDefinitionEditorVersionToken,
  ProcessDefinitionLoopBudgetProjection,
  ProcessDefinitionRoleCommandProjection,
  ProcessDefinitionRoleCommandReceipt,
  ProcessDefinitionRoleDraftProjection,
  ProcessDefinitionRoleEditorProjection,
  ProcessDefinitionRoleEditorVersionToken,
  ProcessDefinitionRoleKey,
  ProcessDefinitionRoleLintIssueProjection,
  ProcessDefinitionRoleLintProjection,
  ProcessDefinitionRoleProjection,
  ProcessDefinitionRoleTemplateActionKey,
  ProcessDefinitionRoleTemplateActionProjection,
  ProcessDefinitionRouteTargetProjection,
  ProcessDefinitionStepBasicDraftProjection,
  ProcessDefinitionStepCommandProjection,
  ProcessDefinitionStepCommandReceipt,
  ProcessDefinitionStepContractsProjection,
  ProcessDefinitionStepDraftProjection,
  ProcessDefinitionStepEditorProjection,
  ProcessDefinitionStepEditorVersionToken,
  ProcessDefinitionStepKey,
  ProcessDefinitionStepLintIssueProjection,
  ProcessDefinitionStepLintProjection,
  ProcessDefinitionStepListItemProjection,
  ProcessDefinitionStepOperationContractProjection,
  ProcessDefinitionStepRoleBindingProjection,
  ProcessDefinitionSubprocessMappingProjection,
  ProcessDefinitionSubprocessOptionProjection,
  ProcessDefinitionWorkflowPreferenceProjection,
  ProcessDispatchApiRequest,
  ProcessLaunchApiRequest,
  ProcessRuntimeCancelApiRequest,
  ProcessRuntimeReworkApiRequest,
  ProcessTemplateCatalogCategoryProjection,
  ProcessTemplateCatalogFactProjection,
  ProcessTemplateCatalogItemKey,
  ProcessTemplateCatalogItemProjection,
  ProcessTemplateCatalogPreviewProjection,
  ProcessTemplateCatalogProjection,
  ProcessTemplateCatalogQueryProjection,
  ProcessTemplateCatalogVersionToken,
  ProcessTemplateImportCommandProjection,
  ProcessTemplateImportCommandReceipt,
  ProcessTemplateImportedComponentProjection,
  ProcessTemplateImportTargetStepProjection,
  ProcessTemplateRelatedComponentProjection,
  ProcessTemplateStructureNodeProjection,
  ProjectAccessListItem,
  ProjectDeletionCleanupPendingApiResponse,
  ProjectDeletionCompletionNotice,
  ProjectDeletionParticipantId,
  ProjectDeletionPendingCleanup,
  ProjectDeletionRecovery,
  ProjectDeletionRecoveryFailure,
  ProjectDeletionResult,
  ProjectDeletionRetainedObjectDescriptor,
  ProjectDeletionWarning,
  ProjectEditorModel,
  ProjectHierarchyLinkSummary,
  ProjectHierarchySnapshot,
  ProjectManagementGuidanceQueryRequest,
  ProjectObjectMediaPayload,
  ProjectOptionEditorModel,
  ProjectPhaseEditorModel,
  ProjectPlanSummaryQuery,
  ProjectPortfolioPartyItem,
  ProjectReconnectSubprojectApiRequest,
  ProjectStructureAnalyticsQueryRequest,
  ProjectStructureApprovalRequestCreateInput,
  ProjectStructureAssetCreateInput,
  ProjectStructureAssetRevisionRequest,
  ProjectStructureChecklistRequest,
  ProjectStructureDependencyQueryRequest,
  ProjectStructureImportRequest,
  ProjectStructureLeaseAcquireRequest,
  ProjectStructureLeaseReleaseRequest,
  ProjectStructureLeaseRenewRequest,
  ProjectStructureLinkInput,
  ProjectStructureManagedStorageDisposition,
  ProjectStructureMarkerBatchInput,
  ProjectStructureMarkerInput,
  ProjectStructureNodeCommandInput,
  ProjectStructureNodeCreateOpenApiRequest,
  ProjectStructureNodeDeleteBatchInput,
  ProjectStructureNodeDeleteInput,
  ProjectStructureNodeEditOpenApiRequest,
  ProjectStructureNodeMetadataInput,
  ProjectStructureNodeMoveInput,
  ProjectStructureNodeParentInput,
  ProjectStructureNodeRecomposeInput,
  ProjectStructureNodeReparentInput,
  ProjectStructureNodesCopyInput,
  ProjectStructureNodesToSubprojectInput,
  ProjectStructureNodeTypeInput,
  ProjectStructurePriorityBatchInput,
  ProjectStructurePriorityInput,
  ProjectStructureProcessDefinitionLinkInput,
  ProjectStructureProcessNodeStartInput,
  ProjectStructureProgressBatchInput,
  ProjectStructureProgressInput,
  ProjectStructureProjectSaveRequest,
  ProjectStructureReadRequest,
  ProjectStructureStatusBatchInput,
  ProjectStructureStatusInput,
  ProjectStructureSubprojectChangeRequest,
  ProjectStructureSubtreeTransferInput,
  ProjectStructureTaskCreateRequest,
  ProjectStructureTaskDetailsUpdateRequest,
  ProjectStructureTaskResourceAttachRequest,
  ProjectStructureTaskResourceSelection,
  ProjectStructureWorkflowAddOptionsInput,
  ProjectStructureWorkflowInputSettings,
  ProjectStructureWorkflowInputSource,
  ProjectStructureWorkflowNodeCreateInput,
  ProjectStructureWorkflowNodeStartInput,
  ProjectSummary,
  ProjectTaskEstimate,
  ProjectTaskExecutionSnapshot,
  ProjectTaskExpectedCostBasis,
  PromptCompatibilityIssue,
  PromptCompatibilityResult,
  PromptDraftSaveReceipt,
  PromptGalleryArchiveRequest,
  PromptGalleryCompatibilityApiRequest,
  PromptGalleryConsumerContext,
  PromptGalleryDraft,
  PromptGalleryFavoriteRequest,
  PromptGalleryItemDetails,
  PromptGalleryPageOfPromptGallerySearchItem,
  PromptGallerySearchItem,
  PromptGallerySourceInfo,
  PromptGalleryVersionInfo,
  PromptGalleryWarningSuppressionApiRequest,
  PromptModelRecommendations,
  PromptProviderModel,
  PromptVersionCreateRequest,
  PromptVersionSnapshot,
  PromptWarningSuppression,
  ProviderChatCompletionApiRequest,
  ProviderModelMaintenanceEditorRequest,
  ProviderModelThinkingEffortCapability,
  ProviderModelTokenPrice,
  ProviderModelTokenPriceEditorModel,
  ProviderProfile,
  ProviderProfileEditorModel,
  ProviderTestChatMessage,
  ProviderTestChatRequest,
  RecruitmentApplicationSaveApiRequest,
  RecruitmentConversionApiRequest,
  RecruitmentInterviewSaveApiRequest,
  RecruitmentSupportAssignmentsSaveApiRequest,
  RenameLlmChatConversationApiRequest,
  RuntimeHostOperatingSystem,
  RuntimeHostProfileKind,
  SendLlmChatTurnApiRequest,
  SkillDefinitionSaveApiRequest,
  UiIconDescriptor,
  WorkflowArtifactPolicy,
  WorkflowArtifactRecord,
  WorkflowCatalogItem,
  WorkflowCheckpointRecord,
  WorkflowDefinition,
  WorkflowDefinitionDetail,
  WorkflowDefinitionExportEnvelope,
  WorkflowDefinitionImportRequest,
  WorkflowDefinitionSaveRequest,
  WorkflowEdge,
  WorkflowEdgeRouting,
  WorkflowEventRecord,
  WorkflowExecutorAvailabilityDescriptor,
  WorkflowExecutorDescriptor,
  WorkflowExecutorDeterministicTestModeDescriptor,
  WorkflowExecutorExecutionPolicy,
  WorkflowExecutorPermissionPolicy,
  WorkflowExecutorSettingsSchemaDescriptor,
  WorkflowExecutorSideEffectDescriptor,
  WorkflowExecutorSimulationDescriptor,
  WorkflowExecutorSourceDescriptor,
  WorkflowExternalRequestRecord,
  WorkflowExternalRequestResponseApiRequest,
  WorkflowGraph,
  WorkflowHumanInLoopPolicy,
  WorkflowInputParameterDescriptor,
  WorkflowInputParameterOption,
  WorkflowInputParameterOptionSource,
  WorkflowLaunchActor,
  WorkflowLaunchCorrelationId,
  WorkflowLaunchIdempotencyEvidence,
  WorkflowLaunchOrigin,
  WorkflowLaunchOriginAgentRuntimeInvocation,
  WorkflowLaunchOriginApi,
  WorkflowLaunchOriginPreview,
  WorkflowLaunchOriginProcessAssignment,
  WorkflowLaunchOriginProjectStructureNode,
  WorkflowLaunchOriginSchedulerPlanRun,
  WorkflowLaunchSessionId,
  WorkflowModelSettings,
  WorkflowNode,
  WorkflowNodeSettings,
  WorkflowPort,
  WorkflowPreviewSimulationPlan,
  WorkflowPreviewSimulationStep,
  WorkflowProjectStructureNodeId,
  WorkflowProviderOption,
  WorkflowRunDetailApiResponse,
  WorkflowRunSnapshot,
  WorkflowRunStartApiRequest,
  WorkflowRunStartApiResponse,
  WorkflowRuntimePolicy,
  WorkflowSchedulerFireId,
  WorkflowSettings,
  WorkflowStableIdentityKind,
  WorkflowStableIdentityResolution,
  WorkflowStableIdentityResolutionStatus,
  WorkflowTemplateCatalogItem,
  WorkflowTestRunRequest,
  WorkflowTestRunResult,
  WorkflowValidationIssue,
  WorkflowValidationResult,
  WorkflowValueShape,
  WorkforceProfileSaveApiRequest,
  WorkspaceSettingsModel,
} from "../models.js";

export function decodeBase64(value: string): Uint8Array | undefined {
  if(!value) {
    return value as any;
  }
  // Normalize Base64URL to Base64
  const base64 = value.replace(/-/g, '+').replace(/_/g, '/')
    .padEnd(value.length + (4 - (value.length % 4)) % 4, '=');

  return new Uint8Array(Buffer.from(base64, 'base64'));
}export function encodeUint8Array(
  value: Uint8Array | undefined | null,
  encoding: BufferEncoding,
): string | undefined {
  if (!value) {
    return value as any;
  }
  return Buffer.from(value).toString(encoding);
}export function dateDeserializer(date?: string | null): Date {
  if (!date) {
    return date as any;
  }

  return new Date(date);
}export function dateRfc7231Deserializer(date?: string | null): Date {
  if (!date) {
    return date as any;
  }

  return new Date(date);
}export function dateRfc3339Serializer(date?: Date | null): string {
  if (!date) {
    return date as any
  }

  return date.toISOString();
}export function dateRfc7231Serializer(date?: Date | null): string {
  if (!date) {
    return date as any;
  }

  return date.toUTCString();
}export function dateUnixTimestampSerializer(date?: Date | null): number {
  if (!date) {
    return date as any;
  }

  return Math.floor(date.getTime() / 1000);
}export function dateUnixTimestampDeserializer(date?: number | null): Date {
  if (!date) {
    return date as any;
  }

  return new Date(date * 1000);
}export function postDevDatabaseProfilesPostgresqlPayloadToTransport(
  payload: PostgreSqlDevDatabaseProfileRequest,
) {
  return jsonPostgreSqlDevDatabaseProfileRequestToTransportTransform(payload)!;
}export function putApiSettingsWorkspacePayloadToTransport(
  payload: WorkspaceSettingsModel,
) {
  return jsonWorkspaceSettingsModelToTransportTransform(payload)!;
}export function postApiProjectStructureProjectsPayloadToTransport(
  payload: ProjectStructureProjectSaveRequest,
) {
  return jsonProjectStructureProjectSaveRequestToTransportTransform(payload)!;
}export function putApiProjectStructureProjectsProjectIdPayloadToTransport(
  payload: ProjectStructureProjectSaveRequest,
) {
  return jsonProjectStructureProjectSaveRequestToTransportTransform(payload)!;
}export function postApiProjectStructureProjectsParentProjectIdSubprojectsPayloadToTransport(
  payload: ProjectStructureSubprojectChangeRequest,
) {
  return jsonProjectStructureSubprojectChangeRequestToTransportTransform(payload)!;
}export function postApiProjectStructureProjectsProjectIdStructureReadPayloadToTransport(
  payload: ProjectStructureReadRequest,
) {
  return jsonProjectStructureReadRequestToTransportTransform(payload)!;
}export function postApiProjectStructureProjectsProjectIdPlanSummaryPayloadToTransport(
  payload: ProjectPlanSummaryQuery,
) {
  return jsonProjectPlanSummaryQueryToTransportTransform(payload)!;
}export function postApiProjectStructureProjectsProjectIdTasksPayloadToTransport(
  payload: ProjectStructureTaskCreateRequest,
) {
  return jsonProjectStructureTaskCreateRequestToTransportTransform(payload)!;
}export function putApiProjectStructureProjectsProjectIdTasksTaskIdPayloadToTransport(
  payload: ProjectStructureTaskDetailsUpdateRequest,
) {
  return jsonProjectStructureTaskDetailsUpdateRequestToTransportTransform(payload)!;
}export function postApiProjectStructureProjectsProjectIdTasksTaskIdResourcePayloadToTransport(
  payload: ProjectStructureTaskResourceAttachRequest,
) {
  return jsonProjectStructureTaskResourceAttachRequestToTransportTransform(payload)!;
}export function postApiProjectStructureProjectsProjectIdNodesPayloadToTransport(
  payload: ProjectStructureNodeCreateOpenApiRequest,
) {
  return jsonProjectStructureNodeCreateOpenApiRequestToTransportTransform(payload)!;
}export function putApiProjectStructureProjectsProjectIdNodesNodeIdPayloadToTransport(
  payload: ProjectStructureNodeEditOpenApiRequest,
) {
  return jsonProjectStructureNodeEditOpenApiRequestToTransportTransform(payload)!;
}export function postApiProjectStructureProjectsProjectIdNodesNodeIdTypePayloadToTransport(
  payload: ProjectStructureNodeTypeInput,
) {
  return jsonProjectStructureNodeTypeInputToTransportTransform(payload)!;
}export function postApiProjectStructureProjectsProjectIdNodesNodeIdMetadataPayloadToTransport(
  payload: ProjectStructureNodeMetadataInput,
) {
  return jsonProjectStructureNodeMetadataInputToTransportTransform(payload)!;
}export function postApiProjectStructureProjectsProjectIdNodesStatusesPayloadToTransport(
  payload: ProjectStructureStatusBatchInput,
) {
  return jsonProjectStructureStatusBatchInputToTransportTransform(payload)!;
}export function postApiProjectStructureProjectsProjectIdNodesNodeIdStatusPayloadToTransport(
  payload: ProjectStructureStatusInput,
) {
  return jsonProjectStructureStatusInputToTransportTransform(payload)!;
}export function postApiProjectStructureProjectsProjectIdNodesProgressPayloadToTransport(
  payload: ProjectStructureProgressBatchInput,
) {
  return jsonProjectStructureProgressBatchInputToTransportTransform(payload)!;
}export function postApiProjectStructureProjectsProjectIdNodesNodeIdProgressPayloadToTransport(
  payload: ProjectStructureProgressInput,
) {
  return jsonProjectStructureProgressInputToTransportTransform(payload)!;
}export function postApiProjectStructureProjectsProjectIdNodesMarkersPayloadToTransport(
  payload: ProjectStructureMarkerBatchInput,
) {
  return jsonProjectStructureMarkerBatchInputToTransportTransform(payload)!;
}export function postApiProjectStructureProjectsProjectIdNodesNodeIdMarkersPayloadToTransport(
  payload: ProjectStructureMarkerInput,
) {
  return jsonProjectStructureMarkerInputToTransportTransform(payload)!;
}export function postApiProjectStructureProjectsProjectIdNodesPrioritiesPayloadToTransport(
  payload: ProjectStructurePriorityBatchInput,
) {
  return jsonProjectStructurePriorityBatchInputToTransportTransform(payload)!;
}export function postApiProjectStructureProjectsProjectIdNodesNodeIdPriorityPayloadToTransport(
  payload: ProjectStructurePriorityInput,
) {
  return jsonProjectStructurePriorityInputToTransportTransform(payload)!;
}export function postApiProjectStructureProjectsProjectIdNodesMovePayloadToTransport(
  payload: ProjectStructureNodeMoveInput,
) {
  return jsonProjectStructureNodeMoveInputToTransportTransform(payload)!;
}export function postApiProjectStructureProjectsProjectIdNodesRecomposePayloadToTransport(
  payload: ProjectStructureNodeRecomposeInput,
) {
  return jsonProjectStructureNodeRecomposeInputToTransportTransform(payload)!;
}export function postApiProjectStructureProjectsProjectIdNodesNodeIdReparentPayloadToTransport(
  payload: ProjectStructureNodeParentInput,
) {
  return jsonProjectStructureNodeParentInputToTransportTransform(payload)!;
}export function postApiProjectStructureProjectsProjectIdNodesReparentPayloadToTransport(
  payload: ProjectStructureNodeReparentInput,
) {
  return jsonProjectStructureNodeReparentInputToTransportTransform(payload)!;
}export function postApiProjectStructureProjectsProjectIdNodesCopyPayloadToTransport(
  payload: ProjectStructureNodesCopyInput,
) {
  return jsonProjectStructureNodesCopyInputToTransportTransform(payload)!;
}export function postApiProjectStructureProjectsProjectIdNodesMoveToNewSubprojectPayloadToTransport(
  payload: ProjectStructureNodesToSubprojectInput,
) {
  return jsonProjectStructureNodesToSubprojectInputToTransportTransform(payload)!;
}export function postApiProjectStructureProjectsProjectIdNodesNodeIdMoveDescendantsToProjectPayloadToTransport(
  payload: ProjectStructureSubtreeTransferInput,
) {
  return jsonProjectStructureSubtreeTransferInputToTransportTransform(payload)!;
}export function postApiProjectStructureProjectsProjectIdNodesNodeIdCommandPayloadToTransport(
  payload: ProjectStructureNodeCommandInput,
) {
  return jsonProjectStructureNodeCommandInputToTransportTransform(payload)!;
}export function postApiProjectStructureProjectsProjectIdNodesNodeIdProcessDefinitionPayloadToTransport(
  payload: ProjectStructureProcessDefinitionLinkInput,
) {
  return jsonProjectStructureProcessDefinitionLinkInputToTransportTransform(payload)!;
}export function postApiProjectStructureProjectsProjectIdNodesNodeIdProcessStartPayloadToTransport(
  payload: ProjectStructureProcessNodeStartInput,
) {
  return jsonProjectStructureProcessNodeStartInputToTransportTransform(payload)!;
}export function postApiProjectStructureProjectsProjectIdNodesNodeIdWorkflowAddOptionsPayloadToTransport(
  payload: ProjectStructureWorkflowAddOptionsInput,
) {
  return jsonProjectStructureWorkflowAddOptionsInputToTransportTransform(payload)!;
}export function postApiProjectStructureProjectsProjectIdNodesNodeIdWorkflowDefinitionPayloadToTransport(
  payload: ProjectStructureWorkflowNodeCreateInput,
) {
  return jsonProjectStructureWorkflowNodeCreateInputToTransportTransform(payload)!;
}export function postApiProjectStructureProjectsProjectIdNodesNodeIdWorkflowStartPayloadToTransport(
  payload: ProjectStructureWorkflowNodeStartInput,
) {
  return jsonProjectStructureWorkflowNodeStartInputToTransportTransform(payload)!;
}export function postApiProjectStructureProjectsProjectIdNodesNodeIdDeletePayloadToTransport(
  payload: ProjectStructureNodeDeleteInput,
) {
  return jsonProjectStructureNodeDeleteInputToTransportTransform(payload)!;
}export function postApiProjectStructureProjectsProjectIdNodesDeletePayloadToTransport(
  payload: ProjectStructureNodeDeleteBatchInput,
) {
  return jsonProjectStructureNodeDeleteBatchInputToTransportTransform(payload)!;
}export function postApiProjectStructureProjectsProjectIdApprovalsRequestPayloadToTransport(
  payload: ProjectStructureApprovalRequestCreateInput,
) {
  return jsonProjectStructureApprovalRequestCreateInputToTransportTransform(payload)!;
}export function postApiProjectStructureProjectsProjectIdChecklistsQueryPayloadToTransport(
  payload: ProjectStructureChecklistRequest,
) {
  return jsonProjectStructureChecklistRequestToTransportTransform(payload)!;
}export function postApiProjectStructureProjectsProjectIdDependenciesQueryPayloadToTransport(
  payload: ProjectStructureDependencyQueryRequest,
) {
  return jsonProjectStructureDependencyQueryRequestToTransportTransform(payload)!;
}export function postApiProjectStructureProjectsProjectIdLinksPayloadToTransport(
  payload: ProjectStructureLinkInput,
) {
  return jsonProjectStructureLinkInputToTransportTransform(payload)!;
}export function postApiProjectStructureProjectsProjectIdLinksUnlinkPayloadToTransport(
  payload: ProjectStructureLinkInput,
) {
  return jsonProjectStructureLinkInputToTransportTransform(payload)!;
}export function postApiProjectStructureProjectsProjectIdDependenciesLinkPayloadToTransport(
  payload: ProjectStructureLinkInput,
) {
  return jsonProjectStructureLinkInputToTransportTransform(payload)!;
}export function postApiProjectStructureProjectsProjectIdDependenciesUnlinkPayloadToTransport(
  payload: ProjectStructureLinkInput,
) {
  return jsonProjectStructureLinkInputToTransportTransform(payload)!;
}export function postApiProjectStructureProjectsProjectIdAssetsPayloadToTransport(
  payload: ProjectStructureAssetCreateInput,
) {
  return jsonProjectStructureAssetCreateInputToTransportTransform(payload)!;
}export function postApiProjectStructureProjectsProjectIdAssetsNodeIdRevisionsPayloadToTransport(
  payload: ProjectStructureAssetRevisionRequest,
) {
  return jsonProjectStructureAssetRevisionRequestToTransportTransform(payload)!;
}export function postApiProjectStructureImportsPayloadToTransport(
  payload: ProjectStructureImportRequest,
) {
  return jsonProjectStructureImportRequestToTransportTransform(payload)!;
}export function postApiProjectStructureKnowledgeQueryPayloadToTransport(
  payload: ProjectManagementGuidanceQueryRequest,
) {
  return jsonProjectManagementGuidanceQueryRequestToTransportTransform(payload)!;
}export function postApiProjectStructureLeasesAcquirePayloadToTransport(
  payload: ProjectStructureLeaseAcquireRequest,
) {
  return jsonProjectStructureLeaseAcquireRequestToTransportTransform(payload)!;
}export function postApiProjectStructureLeasesRenewPayloadToTransport(
  payload: ProjectStructureLeaseRenewRequest,
) {
  return jsonProjectStructureLeaseRenewRequestToTransportTransform(payload)!;
}export function postApiProjectStructureLeasesReleasePayloadToTransport(
  payload: ProjectStructureLeaseReleaseRequest,
) {
  return jsonProjectStructureLeaseReleaseRequestToTransportTransform(payload)!;
}export function postApiProjectStructureAnalyticsQueryPayloadToTransport(
  payload: ProjectStructureAnalyticsQueryRequest,
) {
  return jsonProjectStructureAnalyticsQueryRequestToTransportTransform(payload)!;
}export function issueApiTokenPayloadToTransport(
  payload: ApiTokenIssueRequest,
) {
  return jsonApiTokenIssueRequestToTransportTransform(payload)!;
}export function saveProjectPayloadToTransport(payload: ProjectEditorModel) {
  return jsonProjectEditorModelToTransportTransform(payload)!;
}export function reconnectProjectSubprojectPayloadToTransport(
  payload: ProjectReconnectSubprojectApiRequest,
) {
  return jsonProjectReconnectSubprojectApiRequestToTransportTransform(payload)!;
}export function saveAgentPayloadToTransport(payload: AgentEditorModel) {
  return jsonAgentEditorModelToTransportTransform(payload)!;
}export function cloneAgentPayloadToTransport(payload: AgentCloneApiRequest) {
  return jsonAgentCloneApiRequestToTransportTransform(payload)!;
}export function convertAgentToTemplatePayloadToTransport(
  payload: AgentTemplateConversionApiRequest,
) {
  return jsonAgentTemplateConversionApiRequestToTransportTransform(payload)!;
}export function importAgentPayloadToTransport(payload: AgentImportApiRequest) {
  return jsonAgentImportApiRequestToTransportTransform(payload)!;
}export function provisionAgentByExternalKeyPayloadToTransport(
  payload: AgentEditorModel,
) {
  return jsonAgentEditorModelToTransportTransform(payload)!;
}export function saveAgentTeamPayloadToTransport(
  payload: AgentTeamEditorModel,
) {
  return jsonAgentTeamEditorModelToTransportTransform(payload)!;
}export function updateAgentTeamPayloadToTransport(
  payload: AgentTeamEditorModel,
) {
  return jsonAgentTeamEditorModelToTransportTransform(payload)!;
}export function updateAgentTeamMembersPayloadToTransport(
  payload: AgentTeamMembersApiRequest,
) {
  return jsonAgentTeamMembersApiRequestToTransportTransform(payload)!;
}export function replaceAgentTeamMembersPayloadToTransport(
  payload: AgentTeamMembersApiRequest,
) {
  return jsonAgentTeamMembersApiRequestToTransportTransform(payload)!;
}export function saveAgentProviderPayloadToTransport(
  payload: ProviderProfileEditorModel,
) {
  return jsonProviderProfileEditorModelToTransportTransform(payload)!;
}export function runAgentProviderTestChatPayloadToTransport(
  payload: ProviderTestChatRequest,
) {
  return jsonProviderTestChatRequestToTransportTransform(payload)!;
}export function createAgentProviderModelMaintenancePayloadToTransport(
  payload: ProviderModelMaintenanceEditorRequest,
) {
  return jsonProviderModelMaintenanceEditorRequestToTransportTransform(payload)!;
}export function saveAgentCapabilityPayloadToTransport(
  payload: CapabilityEditorModel,
) {
  return jsonCapabilityEditorModelToTransportTransform(payload)!;
}export function testAgentToolCapabilitySetupPayloadToTransport(
  payload: CapabilityToolSetupTestRequest,
) {
  return jsonCapabilityToolSetupTestRequestToTransportTransform(payload)!;
}export function testAgentMcpCapabilitySetupPayloadToTransport(
  payload: CapabilityMcpSetupTestRequest,
) {
  return jsonCapabilityMcpSetupTestRequestToTransportTransform(payload)!;
}export function previewAgentCapabilityAccessPayloadToTransport(
  payload: CapabilityAccessPreviewRequest,
) {
  return jsonCapabilityAccessPreviewRequestToTransportTransform(payload)!;
}export function saveAgentMemoryPayloadToTransport(payload: MemoryEditorModel) {
  return jsonMemoryEditorModelToTransportTransform(payload)!;
}export function renameAgentChatSessionPayloadToTransport(
  payload: ChatSessionRenameApiRequest,
) {
  return jsonChatSessionRenameApiRequestToTransportTransform(payload)!;
}export function sendAgentChatMessagePayloadToTransport(
  payload: AgentChatApiRequest,
) {
  return jsonAgentChatApiRequestToTransportTransform(payload)!;
}export function respondToAgentExecutionApprovalsPayloadToTransport(
  payload: PendingApprovalApiRequest,
) {
  return jsonPendingApprovalApiRequestToTransportTransform(payload)!;
}export function startAgentExecutionRunPayloadToTransport(
  payload: AgentExecutionRunApiRequest,
) {
  return jsonAgentExecutionRunApiRequestToTransportTransform(payload)!;
}export function startAgentScopedExecutionRunPayloadToTransport(
  payload: AgentExecutionRunStartApiRequest,
) {
  return jsonAgentExecutionRunStartApiRequestToTransportTransform(payload)!;
}export function streamAgentChatMessagePayloadToTransport(
  payload: AgentChatApiRequest,
) {
  return jsonAgentChatApiRequestToTransportTransform(payload)!;
}export function streamAgentExecutionRunPayloadToTransport(
  payload: AgentExecutionRunApiRequest,
) {
  return jsonAgentExecutionRunApiRequestToTransportTransform(payload)!;
}export function streamAgentScopedExecutionRunPayloadToTransport(
  payload: AgentExecutionRunStartApiRequest,
) {
  return jsonAgentExecutionRunStartApiRequestToTransportTransform(payload)!;
}export function streamAgentExecutionApprovalResponsePayloadToTransport(
  payload: PendingApprovalApiRequest,
) {
  return jsonPendingApprovalApiRequestToTransportTransform(payload)!;
}export function streamAgentProviderChatCompletionPayloadToTransport(
  payload: ProviderChatCompletionApiRequest,
) {
  return jsonProviderChatCompletionApiRequestToTransportTransform(payload)!;
}export function createAgentRecruitingInterviewPayloadToTransport(
  payload: CreateAgentRecruitingInterviewCommand,
) {
  return jsonCreateAgentRecruitingInterviewCommandToTransportTransform(payload)!;
}export function appendAgentRecruitingAttemptPayloadToTransport(
  payload: AppendAgentRecruitingAttemptCommand,
) {
  return jsonAppendAgentRecruitingAttemptCommandToTransportTransform(payload)!;
}export function appendAgentRecruitingHumanReviewPayloadToTransport(
  payload: AppendAgentRecruitingReviewCommand,
) {
  return jsonAppendAgentRecruitingReviewCommandToTransportTransform(payload)!;
}export function savePromptGalleryDraftPayloadToTransport(
  payload: null | PromptGalleryDraft,
) {
  return payload!;
}export function createPromptGalleryVersionPayloadToTransport(
  payload: null | PromptVersionCreateRequest,
) {
  return payload!;
}export function archivePromptGalleryItemPayloadToTransport(
  payload: null | PromptGalleryArchiveRequest,
) {
  return payload!;
}export function setPromptGalleryFavoritePayloadToTransport(
  payload: null | PromptGalleryFavoriteRequest,
) {
  return payload!;
}export function evaluatePromptGalleryCompatibilityPayloadToTransport(
  payload: null | PromptGalleryCompatibilityApiRequest,
) {
  return payload!;
}export function setPromptGalleryWarningSuppressionPayloadToTransport(
  payload: null | PromptGalleryWarningSuppressionApiRequest,
) {
  return payload!;
}export function startWorkflowDefinitionRunPayloadToTransport(
  payload: WorkflowRunStartApiRequest,
) {
  return jsonWorkflowRunStartApiRequestToTransportTransform(payload)!;
}export function startWorkflowRunPayloadToTransport(
  payload: WorkflowRunStartApiRequest,
) {
  return jsonWorkflowRunStartApiRequestToTransportTransform(payload)!;
}export function respondToWorkflowExternalRequestPayloadToTransport(
  payload: WorkflowExternalRequestResponseApiRequest,
) {
  return jsonWorkflowExternalRequestResponseApiRequestToTransportTransform(payload)!;
}export function saveWorkflowDefinitionPayloadToTransport(
  payload: WorkflowDefinitionSaveRequest,
) {
  return jsonWorkflowDefinitionSaveRequestToTransportTransform(payload)!;
}export function saveWorkflowSettingsPayloadToTransport(
  payload: WorkflowSettings,
) {
  return jsonWorkflowSettingsToTransportTransform(payload)!;
}export function importWorkflowDefinitionPayloadToTransport(
  payload: WorkflowDefinitionImportRequest,
) {
  return jsonWorkflowDefinitionImportRequestToTransportTransform(payload)!;
}export function validateDraftWorkflowDefinitionPayloadToTransport(
  payload: WorkflowDefinition,
) {
  return jsonWorkflowDefinitionToTransportTransform(payload)!;
}export function saveWorkflowComponentPayloadToTransport(
  payload: LlmCallComponentSaveRequest,
) {
  return jsonLlmCallComponentSaveRequestToTransportTransform(payload)!;
}export function runWorkflowTestPayloadToTransport(
  payload: WorkflowTestRunRequest,
) {
  return jsonWorkflowTestRunRequestToTransportTransform(payload)!;
}export function checkProcessLaunchPayloadToTransport(
  payload: ProcessLaunchApiRequest,
) {
  return jsonProcessLaunchApiRequestToTransportTransform(payload)!;
}export function launchProcessPayloadToTransport(
  payload: ProcessLaunchApiRequest,
) {
  return jsonProcessLaunchApiRequestToTransportTransform(payload)!;
}export function dispatchProcessRunPayloadToTransport(
  payload: ProcessDispatchApiRequest,
) {
  return jsonProcessDispatchApiRequestToTransportTransform(payload)!;
}export function cancelProcessRunPayloadToTransport(
  payload: ProcessRuntimeCancelApiRequest,
) {
  return jsonProcessRuntimeCancelApiRequestToTransportTransform(payload)!;
}export function requestProcessStepReworkPayloadToTransport(
  payload: ProcessRuntimeReworkApiRequest,
) {
  return jsonProcessRuntimeReworkApiRequestToTransportTransform(payload)!;
}export function upsertMemoryProviderPayloadToTransport(
  payload: MemoryProviderProfileApiRequest,
) {
  return jsonMemoryProviderProfileApiRequestToTransportTransform(payload)!;
}export function queryMemoryProviderPayloadToTransport(
  payload: MemoryProviderQueryApiRequest,
) {
  return jsonMemoryProviderQueryApiRequestToTransportTransform(payload)!;
}export function installPluginPackageFromCatalogPayloadToTransport(
  payload: PluginPackageInstallRequest,
) {
  return jsonPluginPackageInstallRequestToTransportTransform(payload)!;
}export function restartPluginRuntimePayloadToTransport(
  payload: PluginRuntimeRestartRequest,
) {
  return jsonPluginRuntimeRestartRequestToTransportTransform(payload)!;
}export function installPluginPayloadToTransport(
  payload: PluginInstallRequest,
) {
  return jsonPluginInstallRequestToTransportTransform(payload)!;
}export function enablePluginPayloadToTransport(
  payload: PluginInstallationUpdateRequest,
) {
  return jsonPluginInstallationUpdateRequestToTransportTransform(payload)!;
}export function disablePluginPayloadToTransport(
  payload: PluginInstallationUpdateRequest,
) {
  return jsonPluginInstallationUpdateRequestToTransportTransform(payload)!;
}export function updatePluginGrantPayloadToTransport(
  payload: PluginGrantUpdateRequest,
) {
  return jsonPluginGrantUpdateRequestToTransportTransform(payload)!;
}export function savePluginConnectionPayloadToTransport(
  payload: PluginConnectionSaveRequest,
) {
  return jsonPluginConnectionSaveRequestToTransportTransform(payload)!;
}export function startPluginOAuthPayloadToTransport(
  payload: PluginOAuthStartRequest,
) {
  return jsonPluginOAuthStartRequestToTransportTransform(payload)!;
}export function createCrmHrPartyPayloadToTransport(
  payload: PartyCreateApiRequest,
) {
  return jsonPartyCreateApiRequestToTransportTransform(payload)!;
}export function replaceCrmHrPartyRelationshipsPayloadToTransport(
  payload: PartyRelationshipsReplaceApiRequest,
) {
  return jsonPartyRelationshipsReplaceApiRequestToTransportTransform(payload)!;
}export function saveCrmHrWorkforceProfilePayloadToTransport(
  payload: WorkforceProfileSaveApiRequest,
) {
  return jsonWorkforceProfileSaveApiRequestToTransportTransform(payload)!;
}export function saveCrmHrSkillDefinitionPayloadToTransport(
  payload: SkillDefinitionSaveApiRequest,
) {
  return jsonSkillDefinitionSaveApiRequestToTransportTransform(payload)!;
}export function saveCrmHrPartySkillPayloadToTransport(
  payload: PartySkillSaveApiRequest,
) {
  return jsonPartySkillSaveApiRequestToTransportTransform(payload)!;
}export function saveCrmHrCapacityBlockPayloadToTransport(
  payload: CapacityBlockSaveApiRequest,
) {
  return jsonCapacityBlockSaveApiRequestToTransportTransform(payload)!;
}export function saveCrmHrRecruitmentApplicationPayloadToTransport(
  payload: RecruitmentApplicationSaveApiRequest,
) {
  return jsonRecruitmentApplicationSaveApiRequestToTransportTransform(payload)!;
}export function saveCrmHrRecruitmentInterviewPayloadToTransport(
  payload: RecruitmentInterviewSaveApiRequest,
) {
  return jsonRecruitmentInterviewSaveApiRequestToTransportTransform(payload)!;
}export function saveCrmHrLifecycleTaskPayloadToTransport(
  payload: LifecycleTaskSaveApiRequest,
) {
  return jsonLifecycleTaskSaveApiRequestToTransportTransform(payload)!;
}export function saveCrmHrRecruitmentSupportAssignmentsPayloadToTransport(
  payload: RecruitmentSupportAssignmentsSaveApiRequest,
) {
  return jsonRecruitmentSupportAssignmentsSaveApiRequestToTransportTransform(payload)!;
}export function convertCrmHrRecruitmentCandidatePayloadToTransport(
  payload: RecruitmentConversionApiRequest,
) {
  return jsonRecruitmentConversionApiRequestToTransportTransform(payload)!;
}export function createLlmChatDefinitionPayloadToTransport(
  payload: LlmChatDefinitionMutationApiRequest,
) {
  return jsonLlmChatDefinitionMutationApiRequestToTransportTransform(payload)!;
}export function updateLlmChatDefinitionPayloadToTransport(
  payload: LlmChatDefinitionMutationApiRequest,
) {
  return jsonLlmChatDefinitionMutationApiRequestToTransportTransform(payload)!;
}export function activateLlmChatDefinitionPayloadToTransport(
  payload: LlmChatExpectedConcurrencyApiRequest,
) {
  return jsonLlmChatExpectedConcurrencyApiRequestToTransportTransform(payload)!;
}export function suspendLlmChatDefinitionPayloadToTransport(
  payload: LlmChatExpectedConcurrencyApiRequest,
) {
  return jsonLlmChatExpectedConcurrencyApiRequestToTransportTransform(payload)!;
}export function archiveLlmChatDefinitionPayloadToTransport(
  payload: LlmChatExpectedConcurrencyApiRequest,
) {
  return jsonLlmChatExpectedConcurrencyApiRequestToTransportTransform(payload)!;
}export function createLlmChatConversationPayloadToTransport(
  payload: CreateLlmChatConversationApiRequest,
) {
  return jsonCreateLlmChatConversationApiRequestToTransportTransform(payload)!;
}export function renameLlmChatConversationPayloadToTransport(
  payload: RenameLlmChatConversationApiRequest,
) {
  return jsonRenameLlmChatConversationApiRequestToTransportTransform(payload)!;
}export function archiveLlmChatConversationPayloadToTransport(
  payload: LlmChatExpectedConcurrencyApiRequest,
) {
  return jsonLlmChatExpectedConcurrencyApiRequestToTransportTransform(payload)!;
}export function sendLlmChatTurnPayloadToTransport(
  payload: SendLlmChatTurnApiRequest,
) {
  return jsonSendLlmChatTurnApiRequestToTransportTransform(payload)!;
}export function jsonPostgreSqlDevDatabaseProfileRequestToTransportTransform(
  input_?: PostgreSqlDevDatabaseProfileRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    displayName: input_.displayName,host: input_.host,port: input_.port,databaseName: input_.databaseName,username: input_.username,password: input_.password,adminDatabaseName: input_.adminDatabaseName,trustServerCertificate: input_.trustServerCertificate,workspaceRoot: input_.workspaceRoot,activate: input_.activate
  }!;
}export function jsonPostgreSqlDevDatabaseProfileRequestToApplicationTransform(
  input_?: any,
): PostgreSqlDevDatabaseProfileRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    displayName: input_.displayName,host: input_.host,port: input_.port,databaseName: input_.databaseName,username: input_.username,password: input_.password,adminDatabaseName: input_.adminDatabaseName,trustServerCertificate: input_.trustServerCertificate,workspaceRoot: input_.workspaceRoot,activate: input_.activate
  }!;
}export function jsonWorkspaceSettingsModelToTransportTransform(
  input_?: WorkspaceSettingsModel | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    defaultProviderProfileId: input_.defaultProviderProfileId,workspaceName: input_.workspaceName,defaultPromptOutputFormat: input_.defaultPromptOutputFormat,currencyCode: input_.currencyCode,currencyCultureName: input_.currencyCultureName,notes: input_.notes
  }!;
}export function jsonWorkspaceSettingsModelToApplicationTransform(
  input_?: any,
): WorkspaceSettingsModel {
  if(!input_) {
    return input_ as any;
  }
    return {
    defaultProviderProfileId: input_.defaultProviderProfileId,workspaceName: input_.workspaceName,defaultPromptOutputFormat: input_.defaultPromptOutputFormat,currencyCode: input_.currencyCode,currencyCultureName: input_.currencyCultureName,notes: input_.notes
  }!;
}export function jsonHostCapabilitySnapshotToTransportTransform(
  input_?: HostCapabilitySnapshot | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    profile: jsonRuntimeHostProfileKindToTransportTransform(input_.profile),operatingSystem: jsonRuntimeHostOperatingSystemToTransportTransform(input_.operatingSystem),isInteractive: input_.isInteractive,isReady: input_.isReady,observedAtUtc: dateRfc3339Serializer(input_.observedAtUtc),purposeRoots: jsonArrayApplicationPurposeRootReadinessToTransportTransform(input_.purposeRoots),capabilities: jsonArrayHostCapabilityDescriptorToTransportTransform(input_.capabilities)
  }!;
}export function jsonHostCapabilitySnapshotToApplicationTransform(
  input_?: any,
): HostCapabilitySnapshot {
  if(!input_) {
    return input_ as any;
  }
    return {
    profile: jsonRuntimeHostProfileKindToApplicationTransform(input_.profile),operatingSystem: jsonRuntimeHostOperatingSystemToApplicationTransform(input_.operatingSystem),isInteractive: input_.isInteractive,isReady: input_.isReady,observedAtUtc: dateDeserializer(input_.observedAtUtc)!,purposeRoots: jsonArrayApplicationPurposeRootReadinessToApplicationTransform(input_.purposeRoots),capabilities: jsonArrayHostCapabilityDescriptorToApplicationTransform(input_.capabilities)
  }!;
}export function jsonRuntimeHostProfileKindToTransportTransform(
  input_?: RuntimeHostProfileKind | null,
): any {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonRuntimeHostProfileKindToApplicationTransform(
  input_?: any,
): RuntimeHostProfileKind {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonRuntimeHostOperatingSystemToTransportTransform(
  input_?: RuntimeHostOperatingSystem | null,
): any {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonRuntimeHostOperatingSystemToApplicationTransform(
  input_?: any,
): RuntimeHostOperatingSystem {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonArrayApplicationPurposeRootReadinessToTransportTransform(
  items_?: Array<ApplicationPurposeRootReadiness> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonApplicationPurposeRootReadinessToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayApplicationPurposeRootReadinessToApplicationTransform(
  items_?: any,
): Array<ApplicationPurposeRootReadiness> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonApplicationPurposeRootReadinessToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonApplicationPurposeRootReadinessToTransportTransform(
  input_?: ApplicationPurposeRootReadiness | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    purpose: jsonApplicationPurposeRootKindToTransportTransform(input_.purpose),configurationSource: jsonApplicationPurposeRootConfigurationSourceToTransportTransform(input_.configurationSource),state: jsonPathFoundationReadinessStateToTransportTransform(input_.state),reason: jsonPathFoundationReadinessReasonToTransportTransform(input_.reason)
  }!;
}export function jsonApplicationPurposeRootReadinessToApplicationTransform(
  input_?: any,
): ApplicationPurposeRootReadiness {
  if(!input_) {
    return input_ as any;
  }
    return {
    purpose: jsonApplicationPurposeRootKindToApplicationTransform(input_.purpose),configurationSource: jsonApplicationPurposeRootConfigurationSourceToApplicationTransform(input_.configurationSource),state: jsonPathFoundationReadinessStateToApplicationTransform(input_.state),reason: jsonPathFoundationReadinessReasonToApplicationTransform(input_.reason)
  }!;
}export function jsonApplicationPurposeRootKindToTransportTransform(
  input_?: ApplicationPurposeRootKind | null,
): any {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonApplicationPurposeRootKindToApplicationTransform(
  input_?: any,
): ApplicationPurposeRootKind {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonApplicationPurposeRootConfigurationSourceToTransportTransform(
  input_?: ApplicationPurposeRootConfigurationSource | null,
): any {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonApplicationPurposeRootConfigurationSourceToApplicationTransform(
  input_?: any,
): ApplicationPurposeRootConfigurationSource {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonPathFoundationReadinessStateToTransportTransform(
  input_?: PathFoundationReadinessState | null,
): any {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonPathFoundationReadinessStateToApplicationTransform(
  input_?: any,
): PathFoundationReadinessState {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonPathFoundationReadinessReasonToTransportTransform(
  input_?: PathFoundationReadinessReason | null,
): any {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonPathFoundationReadinessReasonToApplicationTransform(
  input_?: any,
): PathFoundationReadinessReason {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonArrayHostCapabilityDescriptorToTransportTransform(
  items_?: Array<HostCapabilityDescriptor> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonHostCapabilityDescriptorToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayHostCapabilityDescriptorToApplicationTransform(
  items_?: any,
): Array<HostCapabilityDescriptor> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonHostCapabilityDescriptorToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonHostCapabilityDescriptorToTransportTransform(
  input_?: HostCapabilityDescriptor | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: jsonHostCapabilityIdToTransportTransform(input_.id),criticality: jsonHostCapabilityCriticalityToTransportTransform(input_.criticality),availability: jsonHostCapabilityAvailabilityToTransportTransform(input_.availability),reasonCode: jsonHostCapabilityReasonCodeToTransportTransform(input_.reasonCode),remediation: input_.remediation,supportLevel: jsonHostCapabilitySupportLevelToTransportTransform(input_.supportLevel),implementationRegistration: jsonHostCapabilityImplementationRegistrationToTransportTransform(input_.implementationRegistration),implementationId: input_.implementationId,implementationVersion: input_.implementationVersion,executionBoundary: jsonHostCapabilityExecutionBoundaryToTransportTransform(input_.executionBoundary),supportProfile: jsonRuntimeHostProfileKindToTransportTransform(input_.supportProfile),observedAtUtc: dateRfc3339Serializer(input_.observedAtUtc)
  }!;
}export function jsonHostCapabilityDescriptorToApplicationTransform(
  input_?: any,
): HostCapabilityDescriptor {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: jsonHostCapabilityIdToApplicationTransform(input_.id),criticality: jsonHostCapabilityCriticalityToApplicationTransform(input_.criticality),availability: jsonHostCapabilityAvailabilityToApplicationTransform(input_.availability),reasonCode: jsonHostCapabilityReasonCodeToApplicationTransform(input_.reasonCode),remediation: input_.remediation,supportLevel: jsonHostCapabilitySupportLevelToApplicationTransform(input_.supportLevel),implementationRegistration: jsonHostCapabilityImplementationRegistrationToApplicationTransform(input_.implementationRegistration),implementationId: input_.implementationId,implementationVersion: input_.implementationVersion,executionBoundary: jsonHostCapabilityExecutionBoundaryToApplicationTransform(input_.executionBoundary),supportProfile: jsonRuntimeHostProfileKindToApplicationTransform(input_.supportProfile),observedAtUtc: dateDeserializer(input_.observedAtUtc)!
  }!;
}export function jsonHostCapabilityIdToTransportTransform(
  input_?: HostCapabilityId | null,
): any {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonHostCapabilityIdToApplicationTransform(
  input_?: any,
): HostCapabilityId {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonHostCapabilityCriticalityToTransportTransform(
  input_?: HostCapabilityCriticality | null,
): any {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonHostCapabilityCriticalityToApplicationTransform(
  input_?: any,
): HostCapabilityCriticality {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonHostCapabilityAvailabilityToTransportTransform(
  input_?: HostCapabilityAvailability | null,
): any {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonHostCapabilityAvailabilityToApplicationTransform(
  input_?: any,
): HostCapabilityAvailability {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonHostCapabilityReasonCodeToTransportTransform(
  input_?: HostCapabilityReasonCode | null,
): any {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonHostCapabilityReasonCodeToApplicationTransform(
  input_?: any,
): HostCapabilityReasonCode {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonHostCapabilitySupportLevelToTransportTransform(
  input_?: HostCapabilitySupportLevel | null,
): any {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonHostCapabilitySupportLevelToApplicationTransform(
  input_?: any,
): HostCapabilitySupportLevel {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonHostCapabilityImplementationRegistrationToTransportTransform(
  input_?: HostCapabilityImplementationRegistration | null,
): any {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonHostCapabilityImplementationRegistrationToApplicationTransform(
  input_?: any,
): HostCapabilityImplementationRegistration {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonHostCapabilityExecutionBoundaryToTransportTransform(
  input_?: HostCapabilityExecutionBoundary | null,
): any {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonHostCapabilityExecutionBoundaryToApplicationTransform(
  input_?: any,
): HostCapabilityExecutionBoundary {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonArrayToTransportTransform(
  items_?: Array<{
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
    }> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      actionId: (item as any).actionId,objectType: (item as any).objectType,objectSubtype: (item as any).objectSubtype,groupKey: (item as any).groupKey,label: (item as any).label,description: (item as any).description,defaultTitle: (item as any).defaultTitle,titleLabel: (item as any).titleLabel,subtitleLabel: (item as any).subtitleLabel,notesLabel: (item as any).notesLabel,requiresFile: (item as any).requiresFile,acceptedFileTypes: (item as any).acceptedFileTypes,inputFields: jsonArrayToTransportTransform_2((item as any).inputFields),defaultInputValues: jsonArrayToTransportTransform_4((item as any).defaultInputValues),aliases: jsonArrayStringToTransportTransform((item as any).aliases)
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayToApplicationTransform(items_?: any): Array<{
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
}> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      actionId: (item as any).actionId,objectType: (item as any).objectType,objectSubtype: (item as any).objectSubtype,groupKey: (item as any).groupKey,label: (item as any).label,description: (item as any).description,defaultTitle: (item as any).defaultTitle,titleLabel: (item as any).titleLabel,subtitleLabel: (item as any).subtitleLabel,notesLabel: (item as any).notesLabel,requiresFile: (item as any).requiresFile,acceptedFileTypes: (item as any).acceptedFileTypes,inputFields: jsonArrayToApplicationTransform_2((item as any).inputFields),defaultInputValues: jsonArrayToApplicationTransform_4((item as any).defaultInputValues),aliases: jsonArrayStringToApplicationTransform((item as any).aliases)
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayToTransportTransform_2(
  items_?: Array<{
      key: string;
      label: string;
      inputMode: string;
      placeholder: string;
      isRequired: boolean;
      options: Array<{
        value: string;
        label: string;
      }>;
    }> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      key: (item as any).key,label: (item as any).label,inputMode: (item as any).inputMode,placeholder: (item as any).placeholder,isRequired: (item as any).isRequired,options: jsonArrayToTransportTransform_3((item as any).options)
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayToApplicationTransform_2(items_?: any): Array<{
  key: string;
  label: string;
  inputMode: string;
  placeholder: string;
  isRequired: boolean;
  options: Array<{
    value: string;
    label: string;
  }>;
}> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      key: (item as any).key,label: (item as any).label,inputMode: (item as any).inputMode,placeholder: (item as any).placeholder,isRequired: (item as any).isRequired,options: jsonArrayToApplicationTransform_3((item as any).options)
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayToTransportTransform_3(
  items_?: Array<{
      value: string;
      label: string;
    }> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      value: (item as any).value,label: (item as any).label
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayToApplicationTransform_3(items_?: any): Array<{
  value: string;
  label: string;
}> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      value: (item as any).value,label: (item as any).label
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayToTransportTransform_4(
  items_?: Array<{
      key: string;
      value: string;
    }> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      key: (item as any).key,value: (item as any).value
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayToApplicationTransform_4(items_?: any): Array<{
  key: string;
  value: string;
}> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      key: (item as any).key,value: (item as any).value
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayStringToTransportTransform(
  items_?: Array<string> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = item as any;
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayStringToApplicationTransform(
  items_?: any,
): Array<string> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = item as any;
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayToTransportTransform_5(
  items_?: Array<{
      objectType: "ProjectRoot" | "Phase" | "Milestone" | "ProjectBlock" | "Meeting" | "Recording" | "Transcript" | "Participant" | "WorkItem" | "Repository" | "File" | "ImageAsset" | "VideoAsset" | "Link" | "Connector" | "Script" | "Environment" | "Infrastructure" | "PromptFlow" | "PromptSession" | "PromptStep" | "ProcessDefinition" | "ProcessRun" | "WorkflowDefinition" | "WorkflowRun" | "ValidationRun" | "TestPlan" | "TestEvidence" | "Note" | "Decision" | "SecretReference";
      label: string;
      isUserCreatable: boolean;
      creatableSubtypes: Array<string>;
    }> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      objectType: (item as any).objectType,label: (item as any).label,isUserCreatable: (item as any).isUserCreatable,creatableSubtypes: jsonArrayStringToTransportTransform((item as any).creatableSubtypes)
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayToApplicationTransform_5(items_?: any): Array<{
  objectType: "ProjectRoot" | "Phase" | "Milestone" | "ProjectBlock" | "Meeting" | "Recording" | "Transcript" | "Participant" | "WorkItem" | "Repository" | "File" | "ImageAsset" | "VideoAsset" | "Link" | "Connector" | "Script" | "Environment" | "Infrastructure" | "PromptFlow" | "PromptSession" | "PromptStep" | "ProcessDefinition" | "ProcessRun" | "WorkflowDefinition" | "WorkflowRun" | "ValidationRun" | "TestPlan" | "TestEvidence" | "Note" | "Decision" | "SecretReference";
  label: string;
  isUserCreatable: boolean;
  creatableSubtypes: Array<string>;
}> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      objectType: (item as any).objectType,label: (item as any).label,isUserCreatable: (item as any).isUserCreatable,creatableSubtypes: jsonArrayStringToApplicationTransform((item as any).creatableSubtypes)
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayToTransportTransform_6(
  items_?: Array<{
      kind: number;
      label: string;
      guidance: string;
    }> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      kind: (item as any).kind,label: (item as any).label,guidance: (item as any).guidance
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayToApplicationTransform_6(items_?: any): Array<{
  kind: number;
  label: string;
  guidance: string;
}> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      kind: (item as any).kind,label: (item as any).label,guidance: (item as any).guidance
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProjectStructureProjectSaveRequestToTransportTransform(
  input_?: ProjectStructureProjectSaveRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    name: input_.name,description: input_.description,objective: input_.objective,currentPhase: input_.currentPhase,status: input_.status,targetDateUtc: dateRfc3339Serializer(input_.targetDateUtc),leaseToken: input_.leaseToken
  }!;
}export function jsonProjectStructureProjectSaveRequestToApplicationTransform(
  input_?: any,
): ProjectStructureProjectSaveRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    name: input_.name,description: input_.description,objective: input_.objective,currentPhase: input_.currentPhase,status: input_.status,targetDateUtc: dateDeserializer(input_.targetDateUtc)!,leaseToken: input_.leaseToken
  }!;
}export function jsonProjectStructureSubprojectChangeRequestToTransportTransform(
  input_?: ProjectStructureSubprojectChangeRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    childProjectId: input_.childProjectId,currentParentProjectId: input_.currentParentProjectId,leaseToken: input_.leaseToken
  }!;
}export function jsonProjectStructureSubprojectChangeRequestToApplicationTransform(
  input_?: any,
): ProjectStructureSubprojectChangeRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    childProjectId: input_.childProjectId,currentParentProjectId: input_.currentParentProjectId,leaseToken: input_.leaseToken
  }!;
}export function jsonProjectStructureReadRequestToTransportTransform(
  input_?: ProjectStructureReadRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    nodeIds: jsonArrayStringToTransportTransform(input_.nodeIds),subtreeRootIds: jsonArrayStringToTransportTransform(input_.subtreeRootIds),objectTypes: jsonArrayElementToTransportTransform(input_.objectTypes),projectRoles: jsonArrayProjectStructureProjectRoleToTransportTransform(input_.projectRoles),statuses: jsonArrayStringToTransportTransform(input_.statuses),onlyUnfinished: input_.onlyUnfinished,maxPriority: input_.maxPriority,includeLinks: input_.includeLinks,includeLayout: input_.includeLayout,includeMetadata: input_.includeMetadata,includeNotes: input_.includeNotes,includeAssets: input_.includeAssets,take: input_.take,source: input_.source
  }!;
}export function jsonProjectStructureReadRequestToApplicationTransform(
  input_?: any,
): ProjectStructureReadRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    nodeIds: jsonArrayStringToApplicationTransform(input_.nodeIds),subtreeRootIds: jsonArrayStringToApplicationTransform(input_.subtreeRootIds),objectTypes: jsonArrayElementToApplicationTransform(input_.objectTypes),projectRoles: jsonArrayProjectStructureProjectRoleToApplicationTransform(input_.projectRoles),statuses: jsonArrayStringToApplicationTransform(input_.statuses),onlyUnfinished: input_.onlyUnfinished,maxPriority: input_.maxPriority,includeLinks: input_.includeLinks,includeLayout: input_.includeLayout,includeMetadata: input_.includeMetadata,includeNotes: input_.includeNotes,includeAssets: input_.includeAssets,take: input_.take,source: input_.source
  }!;
}export function jsonArrayElementToTransportTransform(
  items_?: Array<"ProjectRoot" | "Phase" | "Milestone" | "ProjectBlock" | "Meeting" | "Recording" | "Transcript" | "Participant" | "WorkItem" | "Repository" | "File" | "ImageAsset" | "VideoAsset" | "Link" | "Connector" | "Script" | "Environment" | "Infrastructure" | "PromptFlow" | "PromptSession" | "PromptStep" | "ProcessDefinition" | "ProcessRun" | "WorkflowDefinition" | "WorkflowRun" | "ValidationRun" | "TestPlan" | "TestEvidence" | "Note" | "Decision" | "SecretReference" | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = item as any;
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayElementToApplicationTransform(
  items_?: any,
): Array<"ProjectRoot" | "Phase" | "Milestone" | "ProjectBlock" | "Meeting" | "Recording" | "Transcript" | "Participant" | "WorkItem" | "Repository" | "File" | "ImageAsset" | "VideoAsset" | "Link" | "Connector" | "Script" | "Environment" | "Infrastructure" | "PromptFlow" | "PromptSession" | "PromptStep" | "ProcessDefinition" | "ProcessRun" | "WorkflowDefinition" | "WorkflowRun" | "ValidationRun" | "TestPlan" | "TestEvidence" | "Note" | "Decision" | "SecretReference" | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = item as any;
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayProjectStructureProjectRoleToTransportTransform(
  items_?: Array<number> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = item as any;
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayProjectStructureProjectRoleToApplicationTransform(
  items_?: any,
): Array<number> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = item as any;
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayToTransportTransform_7(
  items_?: Array<{
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
    }> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      id: (item as any).id,parentId: (item as any).parentId,objectType: (item as any).objectType,objectSubtype: (item as any).objectSubtype,title: (item as any).title,subtitle: (item as any).subtitle,status: (item as any).status,notes: (item as any).notes,route: (item as any).route,artifactKind: (item as any).artifactKind,artifactId: (item as any).artifactId,mediaRelativePath: (item as any).mediaRelativePath,mediaContentType: (item as any).mediaContentType,mediaOriginalFileName: (item as any).mediaOriginalFileName,badges: jsonArrayStringToTransportTransform((item as any).badges),progressMode: (item as any).progressMode,progressPercent: (item as any).progressPercent,markerIcon: (item as any).markerIcon,markerTone: (item as any).markerTone,markerLabel: (item as any).markerLabel,priority: (item as any).priority,effectivePriority: (item as any).effectivePriority,startUtc: dateRfc3339Serializer((item as any).startUtc),endUtc: dateRfc3339Serializer((item as any).endUtc),metadataJson: (item as any).metadataJson,projectRole: (item as any).projectRole,relatedProjectId: (item as any).relatedProjectId,parentProjectCount: (item as any).parentProjectCount,x: (item as any).x,y: (item as any).y,durationSeconds: (item as any).durationSeconds,actionCapabilities: !(item as any).actionCapabilities ? null : {
        canRunNormally: (item as any).actionCapabilities.canRunNormally,canRunAsAdministrator: (item as any).actionCapabilities.canRunAsAdministrator,canOpenInFileExplorer: (item as any).actionCapabilities.canOpenInFileExplorer,canOpenInNewTab: (item as any).actionCapabilities.canOpenInNewTab,runtimeDisplayName: (item as any).actionCapabilities.runtimeDisplayName,runtimeDisplayCommand: (item as any).actionCapabilities.runtimeDisplayCommand,runtimeWorkingDirectory: (item as any).actionCapabilities.runtimeWorkingDirectory,openInNewTabRoute: (item as any).actionCapabilities.openInNewTabRoute,storageProvider: (item as any).actionCapabilities.storageProvider,storageLocatorKind: (item as any).actionCapabilities.storageLocatorKind,storageLocator: (item as any).actionCapabilities.storageLocator,actions: jsonArrayToTransportTransform_8((item as any).actionCapabilities.actions),guidance: jsonArrayStringToTransportTransform((item as any).actionCapabilities.guidance)
      }
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayToApplicationTransform_7(items_?: any): Array<{
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
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      id: (item as any).id,parentId: (item as any).parentId,objectType: (item as any).objectType,objectSubtype: (item as any).objectSubtype,title: (item as any).title,subtitle: (item as any).subtitle,status: (item as any).status,notes: (item as any).notes,route: (item as any).route,artifactKind: (item as any).artifactKind,artifactId: (item as any).artifactId,mediaRelativePath: (item as any).mediaRelativePath,mediaContentType: (item as any).mediaContentType,mediaOriginalFileName: (item as any).mediaOriginalFileName,badges: jsonArrayStringToApplicationTransform((item as any).badges),progressMode: (item as any).progressMode,progressPercent: (item as any).progressPercent,markerIcon: (item as any).markerIcon,markerTone: (item as any).markerTone,markerLabel: (item as any).markerLabel,priority: (item as any).priority,effectivePriority: (item as any).effectivePriority,startUtc: dateDeserializer((item as any).startUtc)!,endUtc: dateDeserializer((item as any).endUtc)!,metadataJson: (item as any).metadataJson,projectRole: (item as any).projectRole,relatedProjectId: (item as any).relatedProjectId,parentProjectCount: (item as any).parentProjectCount,x: (item as any).x,y: (item as any).y,durationSeconds: (item as any).durationSeconds,actionCapabilities: !(item as any).actionCapabilities ? null : {
        canRunNormally: (item as any).actionCapabilities.canRunNormally,canRunAsAdministrator: (item as any).actionCapabilities.canRunAsAdministrator,canOpenInFileExplorer: (item as any).actionCapabilities.canOpenInFileExplorer,canOpenInNewTab: (item as any).actionCapabilities.canOpenInNewTab,runtimeDisplayName: (item as any).actionCapabilities.runtimeDisplayName,runtimeDisplayCommand: (item as any).actionCapabilities.runtimeDisplayCommand,runtimeWorkingDirectory: (item as any).actionCapabilities.runtimeWorkingDirectory,openInNewTabRoute: (item as any).actionCapabilities.openInNewTabRoute,storageProvider: (item as any).actionCapabilities.storageProvider,storageLocatorKind: (item as any).actionCapabilities.storageLocatorKind,storageLocator: (item as any).actionCapabilities.storageLocator,actions: jsonArrayToApplicationTransform_8((item as any).actionCapabilities.actions),guidance: jsonArrayStringToApplicationTransform((item as any).actionCapabilities.guidance)
      }
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayToTransportTransform_8(
  items_?: Array<{
      actionId: string;
      label: string;
      surface: string;
      description: string;
    }> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      actionId: (item as any).actionId,label: (item as any).label,surface: (item as any).surface,description: (item as any).description
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayToApplicationTransform_8(items_?: any): Array<{
  actionId: string;
  label: string;
  surface: string;
  description: string;
}> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      actionId: (item as any).actionId,label: (item as any).label,surface: (item as any).surface,description: (item as any).description
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayToTransportTransform_9(
  items_?: Array<{
      sourceId: string;
      targetId: string;
      kind: number;
      isUserAuthored: boolean;
    }> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      sourceId: (item as any).sourceId,targetId: (item as any).targetId,kind: (item as any).kind,isUserAuthored: (item as any).isUserAuthored
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayToApplicationTransform_9(items_?: any): Array<{
  sourceId: string;
  targetId: string;
  kind: number;
  isUserAuthored: boolean;
}> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      sourceId: (item as any).sourceId,targetId: (item as any).targetId,kind: (item as any).kind,isUserAuthored: (item as any).isUserAuthored
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProjectPlanSummaryQueryToTransportTransform(
  input_?: ProjectPlanSummaryQuery | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    asOfUtc: dateRfc3339Serializer(input_.asOfUtc),taskPreviewLimit: input_.taskPreviewLimit,hoursPerManDay: input_.hoursPerManDay
  }!;
}export function jsonProjectPlanSummaryQueryToApplicationTransform(
  input_?: any,
): ProjectPlanSummaryQuery {
  if(!input_) {
    return input_ as any;
  }
    return {
    asOfUtc: dateDeserializer(input_.asOfUtc)!,taskPreviewLimit: input_.taskPreviewLimit,hoursPerManDay: input_.hoursPerManDay
  }!;
}export function jsonProjectStructureTaskCreateRequestToTransportTransform(
  input_?: ProjectStructureTaskCreateRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    title: input_.title,startUtc: dateRfc3339Serializer(input_.startUtc),endUtc: dateRfc3339Serializer(input_.endUtc),afterTaskNodeId: input_.afterTaskNodeId,resource: jsonProjectStructureTaskResourceSelectionToTransportTransform(input_.resource),estimate: jsonProjectTaskEstimateToTransportTransform(input_.estimate),duration: input_.duration
  }!;
}export function jsonProjectStructureTaskCreateRequestToApplicationTransform(
  input_?: any,
): ProjectStructureTaskCreateRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    title: input_.title,startUtc: dateDeserializer(input_.startUtc)!,endUtc: dateDeserializer(input_.endUtc)!,afterTaskNodeId: input_.afterTaskNodeId,resource: jsonProjectStructureTaskResourceSelectionToApplicationTransform(input_.resource),estimate: jsonProjectTaskEstimateToApplicationTransform(input_.estimate),duration: input_.duration
  }!;
}export function jsonProjectStructureTaskResourceSelectionToTransportTransform(
  input_?: ProjectStructureTaskResourceSelection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: input_.kind,resourceId: input_.resourceId,versionId: input_.versionId
  }!;
}export function jsonProjectStructureTaskResourceSelectionToApplicationTransform(
  input_?: any,
): ProjectStructureTaskResourceSelection {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: input_.kind,resourceId: input_.resourceId,versionId: input_.versionId
  }!;
}export function jsonProjectTaskEstimateToTransportTransform(
  input_?: ProjectTaskEstimate | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    expectedEffortHours: input_.expectedEffortHours,expectedEffortUnit: input_.expectedEffortUnit,expectedCostAmount: input_.expectedCostAmount,expectedCostCurrencyCode: input_.expectedCostCurrencyCode
  }!;
}export function jsonProjectTaskEstimateToApplicationTransform(
  input_?: any,
): ProjectTaskEstimate {
  if(!input_) {
    return input_ as any;
  }
    return {
    expectedEffortHours: input_.expectedEffortHours,expectedEffortUnit: input_.expectedEffortUnit,expectedCostAmount: input_.expectedCostAmount,expectedCostCurrencyCode: input_.expectedCostCurrencyCode
  }!;
}export function jsonProjectStructureTaskDetailsUpdateRequestToTransportTransform(
  input_?: ProjectStructureTaskDetailsUpdateRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    taskId: jsonGanttTaskIdToTransportTransform(input_.taskId),currentTitle: input_.currentTitle,proposedTitle: input_.proposedTitle,currentProgressPercent: input_.currentProgressPercent,proposedProgressPercent: input_.proposedProgressPercent,currentEstimate: jsonProjectTaskEstimateToTransportTransform(input_.currentEstimate),proposedEstimate: jsonProjectTaskEstimateToTransportTransform(input_.proposedEstimate),scheduleChange: jsonGanttTaskScheduleChangeRequestToTransportTransform(input_.scheduleChange),assigneeChanged: input_.assigneeChanged,proposedAssignee: jsonProjectStructureTaskResourceSelectionToTransportTransform(input_.proposedAssignee),currentExecution: jsonProjectTaskExecutionSnapshotToTransportTransform(input_.currentExecution),proposedExecution: jsonProjectTaskExecutionSnapshotToTransportTransform(input_.proposedExecution),currentCostBasis: jsonProjectTaskExpectedCostBasisToTransportTransform(input_.currentCostBasis),currentDirectAssignmentRevision: input_.currentDirectAssignmentRevision
  }!;
}export function jsonProjectStructureTaskDetailsUpdateRequestToApplicationTransform(
  input_?: any,
): ProjectStructureTaskDetailsUpdateRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    taskId: jsonGanttTaskIdToApplicationTransform(input_.taskId),currentTitle: input_.currentTitle,proposedTitle: input_.proposedTitle,currentProgressPercent: input_.currentProgressPercent,proposedProgressPercent: input_.proposedProgressPercent,currentEstimate: jsonProjectTaskEstimateToApplicationTransform(input_.currentEstimate),proposedEstimate: jsonProjectTaskEstimateToApplicationTransform(input_.proposedEstimate),scheduleChange: jsonGanttTaskScheduleChangeRequestToApplicationTransform(input_.scheduleChange),assigneeChanged: input_.assigneeChanged,proposedAssignee: jsonProjectStructureTaskResourceSelectionToApplicationTransform(input_.proposedAssignee),currentExecution: jsonProjectTaskExecutionSnapshotToApplicationTransform(input_.currentExecution),proposedExecution: jsonProjectTaskExecutionSnapshotToApplicationTransform(input_.proposedExecution),currentCostBasis: jsonProjectTaskExpectedCostBasisToApplicationTransform(input_.currentCostBasis),currentDirectAssignmentRevision: input_.currentDirectAssignmentRevision
  }!;
}export function jsonGanttTaskIdToTransportTransform(
  input_?: GanttTaskId | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value
  }!;
}export function jsonGanttTaskIdToApplicationTransform(
  input_?: any,
): GanttTaskId {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value
  }!;
}export function jsonGanttTaskScheduleChangeRequestToTransportTransform(
  input_?: GanttTaskScheduleChangeRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    taskId: jsonGanttTaskIdToTransportTransform(input_.taskId),gesture: input_.gesture,affectedTasks: jsonArrayGanttTaskDateChangeToTransportTransform(input_.affectedTasks),criticalTaskIds: jsonArrayGanttTaskIdToTransportTransform(input_.criticalTaskIds)
  }!;
}export function jsonGanttTaskScheduleChangeRequestToApplicationTransform(
  input_?: any,
): GanttTaskScheduleChangeRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    taskId: jsonGanttTaskIdToApplicationTransform(input_.taskId),gesture: input_.gesture,affectedTasks: jsonArrayGanttTaskDateChangeToApplicationTransform(input_.affectedTasks),criticalTaskIds: jsonArrayGanttTaskIdToApplicationTransform(input_.criticalTaskIds)
  }!;
}export function jsonArrayGanttTaskDateChangeToTransportTransform(
  items_?: Array<GanttTaskDateChange> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonGanttTaskDateChangeToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayGanttTaskDateChangeToApplicationTransform(
  items_?: any,
): Array<GanttTaskDateChange> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonGanttTaskDateChangeToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonGanttTaskDateChangeToTransportTransform(
  input_?: GanttTaskDateChange | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    taskId: jsonGanttTaskIdToTransportTransform(input_.taskId),previousStart: dateRfc3339Serializer(input_.previousStart),previousEnd: dateRfc3339Serializer(input_.previousEnd),proposedStart: dateRfc3339Serializer(input_.proposedStart),proposedEnd: dateRfc3339Serializer(input_.proposedEnd),isCritical: input_.isCritical
  }!;
}export function jsonGanttTaskDateChangeToApplicationTransform(
  input_?: any,
): GanttTaskDateChange {
  if(!input_) {
    return input_ as any;
  }
    return {
    taskId: jsonGanttTaskIdToApplicationTransform(input_.taskId),previousStart: dateDeserializer(input_.previousStart)!,previousEnd: dateDeserializer(input_.previousEnd)!,proposedStart: dateDeserializer(input_.proposedStart)!,proposedEnd: dateDeserializer(input_.proposedEnd)!,isCritical: input_.isCritical
  }!;
}export function jsonArrayGanttTaskIdToTransportTransform(
  items_?: Array<GanttTaskId> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonGanttTaskIdToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayGanttTaskIdToApplicationTransform(
  items_?: any,
): Array<GanttTaskId> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonGanttTaskIdToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProjectTaskExecutionSnapshotToTransportTransform(
  input_?: ProjectTaskExecutionSnapshot | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    state: input_.state,actualStartedAtUtc: dateRfc3339Serializer(input_.actualStartedAtUtc),actualEndedAtUtc: dateRfc3339Serializer(input_.actualEndedAtUtc)
  }!;
}export function jsonProjectTaskExecutionSnapshotToApplicationTransform(
  input_?: any,
): ProjectTaskExecutionSnapshot {
  if(!input_) {
    return input_ as any;
  }
    return {
    state: input_.state,actualStartedAtUtc: dateDeserializer(input_.actualStartedAtUtc)!,actualEndedAtUtc: dateDeserializer(input_.actualEndedAtUtc)!
  }!;
}export function jsonProjectTaskExpectedCostBasisToTransportTransform(
  input_?: ProjectTaskExpectedCostBasis | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    resourceKind: input_.resourceKind,resourceId: input_.resourceId,resourceVersionId: input_.resourceVersionId,source: input_.source,calculatedAtUtc: dateRfc3339Serializer(input_.calculatedAtUtc)
  }!;
}export function jsonProjectTaskExpectedCostBasisToApplicationTransform(
  input_?: any,
): ProjectTaskExpectedCostBasis {
  if(!input_) {
    return input_ as any;
  }
    return {
    resourceKind: input_.resourceKind,resourceId: input_.resourceId,resourceVersionId: input_.resourceVersionId,source: input_.source,calculatedAtUtc: dateDeserializer(input_.calculatedAtUtc)!
  }!;
}export function jsonProjectStructureTaskResourceAttachRequestToTransportTransform(
  input_?: ProjectStructureTaskResourceAttachRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    resource: jsonProjectStructureTaskResourceSelectionToTransportTransform(input_.resource),currentExecution: jsonProjectTaskExecutionSnapshotToTransportTransform(input_.currentExecution)
  }!;
}export function jsonProjectStructureTaskResourceAttachRequestToApplicationTransform(
  input_?: any,
): ProjectStructureTaskResourceAttachRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    resource: jsonProjectStructureTaskResourceSelectionToApplicationTransform(input_.resource),currentExecution: jsonProjectTaskExecutionSnapshotToApplicationTransform(input_.currentExecution)
  }!;
}export function jsonProjectStructureNodeCreateOpenApiRequestToTransportTransform(
  input_?: ProjectStructureNodeCreateOpenApiRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    objectType: input_.objectType,title: input_.title,subtitle: input_.subtitle,notes: input_.notes,parentNodeKey: input_.parentNodeKey,x: input_.x,y: input_.y,startUtc: dateRfc3339Serializer(input_.startUtc),endUtc: dateRfc3339Serializer(input_.endUtc),objectSubtype: input_.objectSubtype,media: jsonProjectObjectMediaPayloadToTransportTransform(input_.media),metadataJson: input_.metadataJson,metadata: input_.metadata,leaseToken: input_.leaseToken,durationSeconds: input_.durationSeconds
  }!;
}export function jsonProjectStructureNodeCreateOpenApiRequestToApplicationTransform(
  input_?: any,
): ProjectStructureNodeCreateOpenApiRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    objectType: input_.objectType,title: input_.title,subtitle: input_.subtitle,notes: input_.notes,parentNodeKey: input_.parentNodeKey,x: input_.x,y: input_.y,startUtc: dateDeserializer(input_.startUtc)!,endUtc: dateDeserializer(input_.endUtc)!,objectSubtype: input_.objectSubtype,media: jsonProjectObjectMediaPayloadToApplicationTransform(input_.media),metadataJson: input_.metadataJson,metadata: input_.metadata,leaseToken: input_.leaseToken,durationSeconds: input_.durationSeconds
  }!;
}export function jsonProjectObjectMediaPayloadToTransportTransform(
  input_?: ProjectObjectMediaPayload | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    fileName: input_.fileName,contentType: input_.contentType,base64Data: input_.base64Data
  }!;
}export function jsonProjectObjectMediaPayloadToApplicationTransform(
  input_?: any,
): ProjectObjectMediaPayload {
  if(!input_) {
    return input_ as any;
  }
    return {
    fileName: input_.fileName,contentType: input_.contentType,base64Data: input_.base64Data
  }!;
}export function jsonArrayToTransportTransform_10(
  items_?: Array<{
      actionId: string;
      label: string;
      surface: string;
      description: string;
    }> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      actionId: (item as any).actionId,label: (item as any).label,surface: (item as any).surface,description: (item as any).description
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayToApplicationTransform_10(items_?: any): Array<{
  actionId: string;
  label: string;
  surface: string;
  description: string;
}> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      actionId: (item as any).actionId,label: (item as any).label,surface: (item as any).surface,description: (item as any).description
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProjectStructureNodeEditOpenApiRequestToTransportTransform(
  input_?: ProjectStructureNodeEditOpenApiRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    title: input_.title,subtitle: input_.subtitle,notes: input_.notes,objectType: input_.objectType,objectSubtype: input_.objectSubtype,startUtc: dateRfc3339Serializer(input_.startUtc),endUtc: dateRfc3339Serializer(input_.endUtc),metadataJson: input_.metadataJson,metadata: input_.metadata,leaseToken: input_.leaseToken,durationSeconds: input_.durationSeconds
  }!;
}export function jsonProjectStructureNodeEditOpenApiRequestToApplicationTransform(
  input_?: any,
): ProjectStructureNodeEditOpenApiRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    title: input_.title,subtitle: input_.subtitle,notes: input_.notes,objectType: input_.objectType,objectSubtype: input_.objectSubtype,startUtc: dateDeserializer(input_.startUtc)!,endUtc: dateDeserializer(input_.endUtc)!,metadataJson: input_.metadataJson,metadata: input_.metadata,leaseToken: input_.leaseToken,durationSeconds: input_.durationSeconds
  }!;
}export function jsonArrayToTransportTransform_11(
  items_?: Array<{
      actionId: string;
      label: string;
      surface: string;
      description: string;
    }> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      actionId: (item as any).actionId,label: (item as any).label,surface: (item as any).surface,description: (item as any).description
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayToApplicationTransform_11(items_?: any): Array<{
  actionId: string;
  label: string;
  surface: string;
  description: string;
}> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      actionId: (item as any).actionId,label: (item as any).label,surface: (item as any).surface,description: (item as any).description
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProjectStructureNodeTypeInputToTransportTransform(
  input_?: ProjectStructureNodeTypeInput | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    objectType: input_.objectType,objectSubtype: input_.objectSubtype,leaseToken: input_.leaseToken
  }!;
}export function jsonProjectStructureNodeTypeInputToApplicationTransform(
  input_?: any,
): ProjectStructureNodeTypeInput {
  if(!input_) {
    return input_ as any;
  }
    return {
    objectType: input_.objectType,objectSubtype: input_.objectSubtype,leaseToken: input_.leaseToken
  }!;
}export function jsonArrayToTransportTransform_12(
  items_?: Array<{
      actionId: string;
      label: string;
      surface: string;
      description: string;
    }> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      actionId: (item as any).actionId,label: (item as any).label,surface: (item as any).surface,description: (item as any).description
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayToApplicationTransform_12(items_?: any): Array<{
  actionId: string;
  label: string;
  surface: string;
  description: string;
}> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      actionId: (item as any).actionId,label: (item as any).label,surface: (item as any).surface,description: (item as any).description
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProjectStructureNodeMetadataInputToTransportTransform(
  input_?: ProjectStructureNodeMetadataInput | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    metadataJson: input_.metadataJson,notes: input_.notes,status: input_.status,leaseToken: input_.leaseToken
  }!;
}export function jsonProjectStructureNodeMetadataInputToApplicationTransform(
  input_?: any,
): ProjectStructureNodeMetadataInput {
  if(!input_) {
    return input_ as any;
  }
    return {
    metadataJson: input_.metadataJson,notes: input_.notes,status: input_.status,leaseToken: input_.leaseToken
  }!;
}export function jsonArrayToTransportTransform_13(
  items_?: Array<{
      actionId: string;
      label: string;
      surface: string;
      description: string;
    }> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      actionId: (item as any).actionId,label: (item as any).label,surface: (item as any).surface,description: (item as any).description
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayToApplicationTransform_13(items_?: any): Array<{
  actionId: string;
  label: string;
  surface: string;
  description: string;
}> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      actionId: (item as any).actionId,label: (item as any).label,surface: (item as any).surface,description: (item as any).description
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProjectStructureStatusBatchInputToTransportTransform(
  input_?: ProjectStructureStatusBatchInput | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    nodeIds: jsonArrayStringToTransportTransform(input_.nodeIds),status: input_.status,leaseToken: input_.leaseToken
  }!;
}export function jsonProjectStructureStatusBatchInputToApplicationTransform(
  input_?: any,
): ProjectStructureStatusBatchInput {
  if(!input_) {
    return input_ as any;
  }
    return {
    nodeIds: jsonArrayStringToApplicationTransform(input_.nodeIds),status: input_.status,leaseToken: input_.leaseToken
  }!;
}export function jsonProjectStructureStatusInputToTransportTransform(
  input_?: ProjectStructureStatusInput | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    status: input_.status,leaseToken: input_.leaseToken
  }!;
}export function jsonProjectStructureStatusInputToApplicationTransform(
  input_?: any,
): ProjectStructureStatusInput {
  if(!input_) {
    return input_ as any;
  }
    return {
    status: input_.status,leaseToken: input_.leaseToken
  }!;
}export function jsonProjectStructureProgressBatchInputToTransportTransform(
  input_?: ProjectStructureProgressBatchInput | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    nodeIds: jsonArrayStringToTransportTransform(input_.nodeIds),progressMode: input_.progressMode,progressPercent: input_.progressPercent,leaseToken: input_.leaseToken
  }!;
}export function jsonProjectStructureProgressBatchInputToApplicationTransform(
  input_?: any,
): ProjectStructureProgressBatchInput {
  if(!input_) {
    return input_ as any;
  }
    return {
    nodeIds: jsonArrayStringToApplicationTransform(input_.nodeIds),progressMode: input_.progressMode,progressPercent: input_.progressPercent,leaseToken: input_.leaseToken
  }!;
}export function jsonProjectStructureProgressInputToTransportTransform(
  input_?: ProjectStructureProgressInput | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    progressMode: input_.progressMode,progressPercent: input_.progressPercent,leaseToken: input_.leaseToken
  }!;
}export function jsonProjectStructureProgressInputToApplicationTransform(
  input_?: any,
): ProjectStructureProgressInput {
  if(!input_) {
    return input_ as any;
  }
    return {
    progressMode: input_.progressMode,progressPercent: input_.progressPercent,leaseToken: input_.leaseToken
  }!;
}export function jsonProjectStructureMarkerBatchInputToTransportTransform(
  input_?: ProjectStructureMarkerBatchInput | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    nodeIds: jsonArrayStringToTransportTransform(input_.nodeIds),markerIcon: input_.markerIcon,markerTone: input_.markerTone,markerLabel: input_.markerLabel,leaseToken: input_.leaseToken
  }!;
}export function jsonProjectStructureMarkerBatchInputToApplicationTransform(
  input_?: any,
): ProjectStructureMarkerBatchInput {
  if(!input_) {
    return input_ as any;
  }
    return {
    nodeIds: jsonArrayStringToApplicationTransform(input_.nodeIds),markerIcon: input_.markerIcon,markerTone: input_.markerTone,markerLabel: input_.markerLabel,leaseToken: input_.leaseToken
  }!;
}export function jsonProjectStructureMarkerInputToTransportTransform(
  input_?: ProjectStructureMarkerInput | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    mode: input_.mode,markerIcon: input_.markerIcon,markerTone: input_.markerTone,markerLabel: input_.markerLabel,leaseToken: input_.leaseToken
  }!;
}export function jsonProjectStructureMarkerInputToApplicationTransform(
  input_?: any,
): ProjectStructureMarkerInput {
  if(!input_) {
    return input_ as any;
  }
    return {
    mode: input_.mode,markerIcon: input_.markerIcon,markerTone: input_.markerTone,markerLabel: input_.markerLabel,leaseToken: input_.leaseToken
  }!;
}export function jsonProjectStructurePriorityBatchInputToTransportTransform(
  input_?: ProjectStructurePriorityBatchInput | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    nodeIds: jsonArrayStringToTransportTransform(input_.nodeIds),priority: input_.priority,leaseToken: input_.leaseToken
  }!;
}export function jsonProjectStructurePriorityBatchInputToApplicationTransform(
  input_?: any,
): ProjectStructurePriorityBatchInput {
  if(!input_) {
    return input_ as any;
  }
    return {
    nodeIds: jsonArrayStringToApplicationTransform(input_.nodeIds),priority: input_.priority,leaseToken: input_.leaseToken
  }!;
}export function jsonProjectStructurePriorityInputToTransportTransform(
  input_?: ProjectStructurePriorityInput | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    priority: input_.priority,leaseToken: input_.leaseToken
  }!;
}export function jsonProjectStructurePriorityInputToApplicationTransform(
  input_?: any,
): ProjectStructurePriorityInput {
  if(!input_) {
    return input_ as any;
  }
    return {
    priority: input_.priority,leaseToken: input_.leaseToken
  }!;
}export function jsonProjectStructureNodeMoveInputToTransportTransform(
  input_?: ProjectStructureNodeMoveInput | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    nodeId: input_.nodeId,x: input_.x,y: input_.y,leaseToken: input_.leaseToken
  }!;
}export function jsonProjectStructureNodeMoveInputToApplicationTransform(
  input_?: any,
): ProjectStructureNodeMoveInput {
  if(!input_) {
    return input_ as any;
  }
    return {
    nodeId: input_.nodeId,x: input_.x,y: input_.y,leaseToken: input_.leaseToken
  }!;
}export function jsonProjectStructureNodeRecomposeInputToTransportTransform(
  input_?: ProjectStructureNodeRecomposeInput | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    rootNodeId: input_.rootNodeId,leaseToken: input_.leaseToken
  }!;
}export function jsonProjectStructureNodeRecomposeInputToApplicationTransform(
  input_?: any,
): ProjectStructureNodeRecomposeInput {
  if(!input_) {
    return input_ as any;
  }
    return {
    rootNodeId: input_.rootNodeId,leaseToken: input_.leaseToken
  }!;
}export function jsonProjectStructureNodeParentInputToTransportTransform(
  input_?: ProjectStructureNodeParentInput | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    parentNodeKey: input_.parentNodeKey,leaseToken: input_.leaseToken
  }!;
}export function jsonProjectStructureNodeParentInputToApplicationTransform(
  input_?: any,
): ProjectStructureNodeParentInput {
  if(!input_) {
    return input_ as any;
  }
    return {
    parentNodeKey: input_.parentNodeKey,leaseToken: input_.leaseToken
  }!;
}export function jsonArrayToTransportTransform_14(
  items_?: Array<{
      actionId: string;
      label: string;
      surface: string;
      description: string;
    }> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      actionId: (item as any).actionId,label: (item as any).label,surface: (item as any).surface,description: (item as any).description
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayToApplicationTransform_14(items_?: any): Array<{
  actionId: string;
  label: string;
  surface: string;
  description: string;
}> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      actionId: (item as any).actionId,label: (item as any).label,surface: (item as any).surface,description: (item as any).description
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProjectStructureNodeReparentInputToTransportTransform(
  input_?: ProjectStructureNodeReparentInput | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    nodeId: input_.nodeId,parentNodeKey: input_.parentNodeKey,leaseToken: input_.leaseToken
  }!;
}export function jsonProjectStructureNodeReparentInputToApplicationTransform(
  input_?: any,
): ProjectStructureNodeReparentInput {
  if(!input_) {
    return input_ as any;
  }
    return {
    nodeId: input_.nodeId,parentNodeKey: input_.parentNodeKey,leaseToken: input_.leaseToken
  }!;
}export function jsonArrayToTransportTransform_15(
  items_?: Array<{
      actionId: string;
      label: string;
      surface: string;
      description: string;
    }> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      actionId: (item as any).actionId,label: (item as any).label,surface: (item as any).surface,description: (item as any).description
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayToApplicationTransform_15(items_?: any): Array<{
  actionId: string;
  label: string;
  surface: string;
  description: string;
}> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      actionId: (item as any).actionId,label: (item as any).label,surface: (item as any).surface,description: (item as any).description
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProjectStructureNodesCopyInputToTransportTransform(
  input_?: ProjectStructureNodesCopyInput | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    sourceNodeIds: jsonArrayStringToTransportTransform(input_.sourceNodeIds),destinationParentNodeId: input_.destinationParentNodeId,leaseToken: input_.leaseToken
  }!;
}export function jsonProjectStructureNodesCopyInputToApplicationTransform(
  input_?: any,
): ProjectStructureNodesCopyInput {
  if(!input_) {
    return input_ as any;
  }
    return {
    sourceNodeIds: jsonArrayStringToApplicationTransform(input_.sourceNodeIds),destinationParentNodeId: input_.destinationParentNodeId,leaseToken: input_.leaseToken
  }!;
}export function jsonProjectStructureNodesToSubprojectInputToTransportTransform(
  input_?: ProjectStructureNodesToSubprojectInput | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    name: input_.name,nodeIds: jsonArrayStringToTransportTransform(input_.nodeIds),description: input_.description,objective: input_.objective,currentPhase: input_.currentPhase,status: input_.status,includeDescendants: input_.includeDescendants,leaseToken: input_.leaseToken
  }!;
}export function jsonProjectStructureNodesToSubprojectInputToApplicationTransform(
  input_?: any,
): ProjectStructureNodesToSubprojectInput {
  if(!input_) {
    return input_ as any;
  }
    return {
    name: input_.name,nodeIds: jsonArrayStringToApplicationTransform(input_.nodeIds),description: input_.description,objective: input_.objective,currentPhase: input_.currentPhase,status: input_.status,includeDescendants: input_.includeDescendants,leaseToken: input_.leaseToken
  }!;
}export function jsonProjectStructureSubtreeTransferInputToTransportTransform(
  input_?: ProjectStructureSubtreeTransferInput | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    targetProjectId: input_.targetProjectId,leaseToken: input_.leaseToken,targetLeaseToken: input_.targetLeaseToken
  }!;
}export function jsonProjectStructureSubtreeTransferInputToApplicationTransform(
  input_?: any,
): ProjectStructureSubtreeTransferInput {
  if(!input_) {
    return input_ as any;
  }
    return {
    targetProjectId: input_.targetProjectId,leaseToken: input_.leaseToken,targetLeaseToken: input_.targetLeaseToken
  }!;
}export function jsonProjectStructureNodeCommandInputToTransportTransform(
  input_?: ProjectStructureNodeCommandInput | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    commandKind: input_.commandKind,leaseToken: input_.leaseToken
  }!;
}export function jsonProjectStructureNodeCommandInputToApplicationTransform(
  input_?: any,
): ProjectStructureNodeCommandInput {
  if(!input_) {
    return input_ as any;
  }
    return {
    commandKind: input_.commandKind,leaseToken: input_.leaseToken
  }!;
}export function jsonProjectStructureProcessDefinitionLinkInputToTransportTransform(
  input_?: ProjectStructureProcessDefinitionLinkInput | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    processDefinitionId: input_.processDefinitionId,leaseToken: input_.leaseToken
  }!;
}export function jsonProjectStructureProcessDefinitionLinkInputToApplicationTransform(
  input_?: any,
): ProjectStructureProcessDefinitionLinkInput {
  if(!input_) {
    return input_ as any;
  }
    return {
    processDefinitionId: input_.processDefinitionId,leaseToken: input_.leaseToken
  }!;
}export function jsonProjectStructureProcessNodeStartInputToTransportTransform(
  input_?: ProjectStructureProcessNodeStartInput | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    processDefinitionId: input_.processDefinitionId,runHrMatch: input_.runHrMatch,execute: input_.execute,includeLaunchPlan: input_.includeLaunchPlan,requestedBy: input_.requestedBy,leaseToken: input_.leaseToken
  }!;
}export function jsonProjectStructureProcessNodeStartInputToApplicationTransform(
  input_?: any,
): ProjectStructureProcessNodeStartInput {
  if(!input_) {
    return input_ as any;
  }
    return {
    processDefinitionId: input_.processDefinitionId,runHrMatch: input_.runHrMatch,execute: input_.execute,includeLaunchPlan: input_.includeLaunchPlan,requestedBy: input_.requestedBy,leaseToken: input_.leaseToken
  }!;
}export function jsonProjectStructureWorkflowAddOptionsInputToTransportTransform(
  input_?: ProjectStructureWorkflowAddOptionsInput | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    workflowId: input_.workflowId,versionId: input_.versionId,inputSettings: jsonProjectStructureWorkflowInputSettingsToTransportTransform(input_.inputSettings),selectedNodeIds: jsonArrayStringToTransportTransform(input_.selectedNodeIds)
  }!;
}export function jsonProjectStructureWorkflowAddOptionsInputToApplicationTransform(
  input_?: any,
): ProjectStructureWorkflowAddOptionsInput {
  if(!input_) {
    return input_ as any;
  }
    return {
    workflowId: input_.workflowId,versionId: input_.versionId,inputSettings: jsonProjectStructureWorkflowInputSettingsToApplicationTransform(input_.inputSettings),selectedNodeIds: jsonArrayStringToApplicationTransform(input_.selectedNodeIds)
  }!;
}export function jsonProjectStructureWorkflowInputSettingsToTransportTransform(
  input_?: ProjectStructureWorkflowInputSettings | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    includeProject: input_.includeProject,includeParentNode: input_.includeParentNode,includeParentNodeDetails: input_.includeParentNodeDetails,includeParentSubtree: input_.includeParentSubtree,includeAssets: input_.includeAssets,selectedNodeIds: jsonArrayStringToTransportTransform(input_.selectedNodeIds),additionalSources: jsonArrayProjectStructureWorkflowInputSourceToTransportTransform(input_.additionalSources),manualInputJson: input_.manualInputJson
  }!;
}export function jsonProjectStructureWorkflowInputSettingsToApplicationTransform(
  input_?: any,
): ProjectStructureWorkflowInputSettings {
  if(!input_) {
    return input_ as any;
  }
    return {
    includeProject: input_.includeProject,includeParentNode: input_.includeParentNode,includeParentNodeDetails: input_.includeParentNodeDetails,includeParentSubtree: input_.includeParentSubtree,includeAssets: input_.includeAssets,selectedNodeIds: jsonArrayStringToApplicationTransform(input_.selectedNodeIds),additionalSources: jsonArrayProjectStructureWorkflowInputSourceToApplicationTransform(input_.additionalSources),manualInputJson: input_.manualInputJson
  }!;
}export function jsonArrayProjectStructureWorkflowInputSourceToTransportTransform(
  items_?: Array<ProjectStructureWorkflowInputSource> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProjectStructureWorkflowInputSourceToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayProjectStructureWorkflowInputSourceToApplicationTransform(
  items_?: any,
): Array<ProjectStructureWorkflowInputSource> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProjectStructureWorkflowInputSourceToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProjectStructureWorkflowInputSourceToTransportTransform(
  input_?: ProjectStructureWorkflowInputSource | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: input_.kind,key: input_.key,label: input_.label,value: input_.value,isEnabled: input_.isEnabled
  }!;
}export function jsonProjectStructureWorkflowInputSourceToApplicationTransform(
  input_?: any,
): ProjectStructureWorkflowInputSource {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: input_.kind,key: input_.key,label: input_.label,value: input_.value,isEnabled: input_.isEnabled
  }!;
}export function jsonArrayToTransportTransform_16(
  items_?: Array<{
      actionId: string;
      label: string;
      surface: string;
      description: string;
    }> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      actionId: (item as any).actionId,label: (item as any).label,surface: (item as any).surface,description: (item as any).description
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayToApplicationTransform_16(items_?: any): Array<{
  actionId: string;
  label: string;
  surface: string;
  description: string;
}> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      actionId: (item as any).actionId,label: (item as any).label,surface: (item as any).surface,description: (item as any).description
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayToTransportTransform_17(
  items_?: Array<{
      workflowId: unknown;
      versionId: unknown;
      displayName: string;
      description: string;
      status: number;
      preferredBackend: number;
      isSelectable: boolean;
      disabledReason: string;
    }> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      workflowId: (item as any).workflowId,versionId: (item as any).versionId,displayName: (item as any).displayName,description: (item as any).description,status: (item as any).status,preferredBackend: (item as any).preferredBackend,isSelectable: (item as any).isSelectable,disabledReason: (item as any).disabledReason
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayToApplicationTransform_17(items_?: any): Array<{
  workflowId: unknown;
  versionId: unknown;
  displayName: string;
  description: string;
  status: number;
  preferredBackend: number;
  isSelectable: boolean;
  disabledReason: string;
}> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      workflowId: (item as any).workflowId,versionId: (item as any).versionId,displayName: (item as any).displayName,description: (item as any).description,status: (item as any).status,preferredBackend: (item as any).preferredBackend,isSelectable: (item as any).isSelectable,disabledReason: (item as any).disabledReason
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayToTransportTransform_18(
  items_?: Array<{
      kind: number;
      key: string;
      label: string;
      value: string;
      isEnabled?: boolean;
    }> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      kind: (item as any).kind,key: (item as any).key,label: (item as any).label,value: (item as any).value,isEnabled: (item as any).isEnabled
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayToApplicationTransform_18(items_?: any): Array<{
  kind: number;
  key: string;
  label: string;
  value: string;
  isEnabled?: boolean;
}> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      kind: (item as any).kind,key: (item as any).key,label: (item as any).label,value: (item as any).value,isEnabled: (item as any).isEnabled
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayToTransportTransform_19(
  items_?: Array<{
      title: string;
      summary: string;
      rows: Array<{
        label: string;
        value: string;
      }>;
    }> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      title: (item as any).title,summary: (item as any).summary,rows: jsonArrayToTransportTransform_20((item as any).rows)
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayToApplicationTransform_19(items_?: any): Array<{
  title: string;
  summary: string;
  rows: Array<{
    label: string;
    value: string;
  }>;
}> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      title: (item as any).title,summary: (item as any).summary,rows: jsonArrayToApplicationTransform_20((item as any).rows)
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayToTransportTransform_20(
  items_?: Array<{
      label: string;
      value: string;
    }> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      label: (item as any).label,value: (item as any).value
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayToApplicationTransform_20(items_?: any): Array<{
  label: string;
  value: string;
}> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      label: (item as any).label,value: (item as any).value
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProjectStructureWorkflowNodeCreateInputToTransportTransform(
  input_?: ProjectStructureWorkflowNodeCreateInput | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    workflowId: input_.workflowId,versionId: input_.versionId,title: input_.title,subtitle: input_.subtitle,notes: input_.notes,inputSettings: jsonProjectStructureWorkflowInputSettingsToTransportTransform(input_.inputSettings),x: input_.x,y: input_.y,leaseToken: input_.leaseToken
  }!;
}export function jsonProjectStructureWorkflowNodeCreateInputToApplicationTransform(
  input_?: any,
): ProjectStructureWorkflowNodeCreateInput {
  if(!input_) {
    return input_ as any;
  }
    return {
    workflowId: input_.workflowId,versionId: input_.versionId,title: input_.title,subtitle: input_.subtitle,notes: input_.notes,inputSettings: jsonProjectStructureWorkflowInputSettingsToApplicationTransform(input_.inputSettings),x: input_.x,y: input_.y,leaseToken: input_.leaseToken
  }!;
}export function jsonArrayToTransportTransform_21(
  items_?: Array<{
      actionId: string;
      label: string;
      surface: string;
      description: string;
    }> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      actionId: (item as any).actionId,label: (item as any).label,surface: (item as any).surface,description: (item as any).description
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayToApplicationTransform_21(items_?: any): Array<{
  actionId: string;
  label: string;
  surface: string;
  description: string;
}> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      actionId: (item as any).actionId,label: (item as any).label,surface: (item as any).surface,description: (item as any).description
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProjectStructureWorkflowNodeStartInputToTransportTransform(
  input_?: ProjectStructureWorkflowNodeStartInput | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    requestedBackend: input_.requestedBackend,requestedBy: input_.requestedBy,leaseToken: input_.leaseToken,simulatedNodeIds: jsonArrayStringToTransportTransform(input_.simulatedNodeIds)
  }!;
}export function jsonProjectStructureWorkflowNodeStartInputToApplicationTransform(
  input_?: any,
): ProjectStructureWorkflowNodeStartInput {
  if(!input_) {
    return input_ as any;
  }
    return {
    requestedBackend: input_.requestedBackend,requestedBy: input_.requestedBy,leaseToken: input_.leaseToken,simulatedNodeIds: jsonArrayStringToApplicationTransform(input_.simulatedNodeIds)
  }!;
}export function jsonProjectStructureNodeDeleteInputToTransportTransform(
  input_?: ProjectStructureNodeDeleteInput | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    managedStorageDisposition: jsonProjectStructureManagedStorageDispositionToTransportTransform(input_.managedStorageDisposition),leaseToken: input_.leaseToken,durableMutationId: input_.durableMutationId
  }!;
}export function jsonProjectStructureNodeDeleteInputToApplicationTransform(
  input_?: any,
): ProjectStructureNodeDeleteInput {
  if(!input_) {
    return input_ as any;
  }
    return {
    managedStorageDisposition: jsonProjectStructureManagedStorageDispositionToApplicationTransform(input_.managedStorageDisposition),leaseToken: input_.leaseToken,durableMutationId: input_.durableMutationId
  }!;
}export function jsonProjectStructureManagedStorageDispositionToTransportTransform(
  input_?: ProjectStructureManagedStorageDisposition | null,
): any {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonProjectStructureManagedStorageDispositionToApplicationTransform(
  input_?: any,
): ProjectStructureManagedStorageDisposition {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonArrayToTransportTransform_22(
  items_?: Array<{
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
    }> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      kind: (item as any).kind,retainedObject: {
        provider: (item as any).retainedObject.provider,storageId: (item as any).retainedObject.storageId,locatorKind: (item as any).retainedObject.locatorKind,locator: (item as any).retainedObject.locator,reason: (item as any).retainedObject.reason
      },message: (item as any).message,remediation: (item as any).remediation
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayToApplicationTransform_22(items_?: any): Array<{
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
}> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      kind: (item as any).kind,retainedObject: {
        provider: (item as any).retainedObject.provider,storageId: (item as any).retainedObject.storageId,locatorKind: (item as any).retainedObject.locatorKind,locator: (item as any).retainedObject.locator,reason: (item as any).retainedObject.reason
      },message: (item as any).message,remediation: (item as any).remediation
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProjectStructureNodeDeleteBatchInputToTransportTransform(
  input_?: ProjectStructureNodeDeleteBatchInput | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    nodeIds: jsonArrayStringToTransportTransform(input_.nodeIds),managedStorageDisposition: jsonProjectStructureManagedStorageDispositionToTransportTransform(input_.managedStorageDisposition),leaseToken: input_.leaseToken
  }!;
}export function jsonProjectStructureNodeDeleteBatchInputToApplicationTransform(
  input_?: any,
): ProjectStructureNodeDeleteBatchInput {
  if(!input_) {
    return input_ as any;
  }
    return {
    nodeIds: jsonArrayStringToApplicationTransform(input_.nodeIds),managedStorageDisposition: jsonProjectStructureManagedStorageDispositionToApplicationTransform(input_.managedStorageDisposition),leaseToken: input_.leaseToken
  }!;
}export function jsonArrayToTransportTransform_23(
  items_?: Array<{
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
    }> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      kind: (item as any).kind,retainedObject: {
        provider: (item as any).retainedObject.provider,storageId: (item as any).retainedObject.storageId,locatorKind: (item as any).retainedObject.locatorKind,locator: (item as any).retainedObject.locator,reason: (item as any).retainedObject.reason
      },message: (item as any).message,remediation: (item as any).remediation
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayToApplicationTransform_23(items_?: any): Array<{
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
}> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      kind: (item as any).kind,retainedObject: {
        provider: (item as any).retainedObject.provider,storageId: (item as any).retainedObject.storageId,locatorKind: (item as any).retainedObject.locatorKind,locator: (item as any).retainedObject.locator,reason: (item as any).retainedObject.reason
      },message: (item as any).message,remediation: (item as any).remediation
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProjectStructureApprovalRequestCreateInputToTransportTransform(
  input_?: ProjectStructureApprovalRequestCreateInput | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    title: input_.title,subtitle: input_.subtitle,notes: input_.notes,requestedOperation: input_.requestedOperation,parentNodeKey: input_.parentNodeKey,estimatedMinutes: input_.estimatedMinutes,metadataJson: input_.metadataJson,leaseToken: input_.leaseToken
  }!;
}export function jsonProjectStructureApprovalRequestCreateInputToApplicationTransform(
  input_?: any,
): ProjectStructureApprovalRequestCreateInput {
  if(!input_) {
    return input_ as any;
  }
    return {
    title: input_.title,subtitle: input_.subtitle,notes: input_.notes,requestedOperation: input_.requestedOperation,parentNodeKey: input_.parentNodeKey,estimatedMinutes: input_.estimatedMinutes,metadataJson: input_.metadataJson,leaseToken: input_.leaseToken
  }!;
}export function jsonArrayToTransportTransform_24(
  items_?: Array<{
      actionId: string;
      label: string;
      surface: string;
      description: string;
    }> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      actionId: (item as any).actionId,label: (item as any).label,surface: (item as any).surface,description: (item as any).description
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayToApplicationTransform_24(items_?: any): Array<{
  actionId: string;
  label: string;
  surface: string;
  description: string;
}> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      actionId: (item as any).actionId,label: (item as any).label,surface: (item as any).surface,description: (item as any).description
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProjectStructureChecklistRequestToTransportTransform(
  input_?: ProjectStructureChecklistRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    maxPriority: input_.maxPriority,objectTypes: jsonArrayElementToTransportTransform_2(input_.objectTypes),includePaused: input_.includePaused,take: input_.take
  }!;
}export function jsonProjectStructureChecklistRequestToApplicationTransform(
  input_?: any,
): ProjectStructureChecklistRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    maxPriority: input_.maxPriority,objectTypes: jsonArrayElementToApplicationTransform_2(input_.objectTypes),includePaused: input_.includePaused,take: input_.take
  }!;
}export function jsonArrayElementToTransportTransform_2(
  items_?: Array<"ProjectRoot" | "Phase" | "Milestone" | "ProjectBlock" | "Meeting" | "Recording" | "Transcript" | "Participant" | "WorkItem" | "Repository" | "File" | "ImageAsset" | "VideoAsset" | "Link" | "Connector" | "Script" | "Environment" | "Infrastructure" | "PromptFlow" | "PromptSession" | "PromptStep" | "ProcessDefinition" | "ProcessRun" | "WorkflowDefinition" | "WorkflowRun" | "ValidationRun" | "TestPlan" | "TestEvidence" | "Note" | "Decision" | "SecretReference" | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = item as any;
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayElementToApplicationTransform_2(
  items_?: any,
): Array<"ProjectRoot" | "Phase" | "Milestone" | "ProjectBlock" | "Meeting" | "Recording" | "Transcript" | "Participant" | "WorkItem" | "Repository" | "File" | "ImageAsset" | "VideoAsset" | "Link" | "Connector" | "Script" | "Environment" | "Infrastructure" | "PromptFlow" | "PromptSession" | "PromptStep" | "ProcessDefinition" | "ProcessRun" | "WorkflowDefinition" | "WorkflowRun" | "ValidationRun" | "TestPlan" | "TestEvidence" | "Note" | "Decision" | "SecretReference" | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = item as any;
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayToTransportTransform_25(
  items_?: Array<{
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
    }> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      nodeId: (item as any).nodeId,parentNodeId: (item as any).parentNodeId,objectType: (item as any).objectType,objectSubtype: (item as any).objectSubtype,title: (item as any).title,status: (item as any).status,progressMode: (item as any).progressMode,progressPercent: (item as any).progressPercent,markerLabel: (item as any).markerLabel,priority: (item as any).priority,effectivePriority: (item as any).effectivePriority,route: (item as any).route,prerequisites: jsonArrayToTransportTransform_26((item as any).prerequisites)
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayToApplicationTransform_25(items_?: any): Array<{
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
}> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      nodeId: (item as any).nodeId,parentNodeId: (item as any).parentNodeId,objectType: (item as any).objectType,objectSubtype: (item as any).objectSubtype,title: (item as any).title,status: (item as any).status,progressMode: (item as any).progressMode,progressPercent: (item as any).progressPercent,markerLabel: (item as any).markerLabel,priority: (item as any).priority,effectivePriority: (item as any).effectivePriority,route: (item as any).route,prerequisites: jsonArrayToApplicationTransform_26((item as any).prerequisites)
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayToTransportTransform_26(
  items_?: Array<{
      nodeId: string;
      title: string;
      status: string;
      effectivePriority: unknown;
      reason: string;
    }> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      nodeId: (item as any).nodeId,title: (item as any).title,status: (item as any).status,effectivePriority: (item as any).effectivePriority,reason: (item as any).reason
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayToApplicationTransform_26(items_?: any): Array<{
  nodeId: string;
  title: string;
  status: string;
  effectivePriority: unknown;
  reason: string;
}> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      nodeId: (item as any).nodeId,title: (item as any).title,status: (item as any).status,effectivePriority: (item as any).effectivePriority,reason: (item as any).reason
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProjectStructureDependencyQueryRequestToTransportTransform(
  input_?: ProjectStructureDependencyQueryRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    nodeIds: jsonArrayStringToTransportTransform(input_.nodeIds),includeFinished: input_.includeFinished,defaultDurationSeconds: input_.defaultDurationSeconds,take: input_.take
  }!;
}export function jsonProjectStructureDependencyQueryRequestToApplicationTransform(
  input_?: any,
): ProjectStructureDependencyQueryRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    nodeIds: jsonArrayStringToApplicationTransform(input_.nodeIds),includeFinished: input_.includeFinished,defaultDurationSeconds: input_.defaultDurationSeconds,take: input_.take
  }!;
}export function jsonArrayToTransportTransform_27(
  items_?: Array<{
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
    }> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      nodeId: (item as any).nodeId,parentNodeId: (item as any).parentNodeId,objectType: (item as any).objectType,objectSubtype: (item as any).objectSubtype,title: (item as any).title,status: (item as any).status,progressMode: (item as any).progressMode,progressPercent: (item as any).progressPercent,markerLabel: (item as any).markerLabel,priority: (item as any).priority,effectivePriority: (item as any).effectivePriority,isFinished: (item as any).isFinished,isPausedOrStopped: (item as any).isPausedOrStopped,canExecute: (item as any).canExecute,durationSeconds: (item as any).durationSeconds,effectiveDurationSeconds: (item as any).effectiveDurationSeconds,startUtc: dateRfc3339Serializer((item as any).startUtc),endUtc: dateRfc3339Serializer((item as any).endUtc),route: (item as any).route,prerequisites: jsonArrayToTransportTransform_28((item as any).prerequisites),dependents: jsonArrayToTransportTransform_29((item as any).dependents)
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayToApplicationTransform_27(items_?: any): Array<{
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
}> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      nodeId: (item as any).nodeId,parentNodeId: (item as any).parentNodeId,objectType: (item as any).objectType,objectSubtype: (item as any).objectSubtype,title: (item as any).title,status: (item as any).status,progressMode: (item as any).progressMode,progressPercent: (item as any).progressPercent,markerLabel: (item as any).markerLabel,priority: (item as any).priority,effectivePriority: (item as any).effectivePriority,isFinished: (item as any).isFinished,isPausedOrStopped: (item as any).isPausedOrStopped,canExecute: (item as any).canExecute,durationSeconds: (item as any).durationSeconds,effectiveDurationSeconds: (item as any).effectiveDurationSeconds,startUtc: dateDeserializer((item as any).startUtc)!,endUtc: dateDeserializer((item as any).endUtc)!,route: (item as any).route,prerequisites: jsonArrayToApplicationTransform_28((item as any).prerequisites),dependents: jsonArrayToApplicationTransform_29((item as any).dependents)
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayToTransportTransform_28(
  items_?: Array<{
      nodeId: string;
      title: string;
      status: string;
      effectivePriority: unknown;
      isFinished: boolean;
      reason: string;
    }> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      nodeId: (item as any).nodeId,title: (item as any).title,status: (item as any).status,effectivePriority: (item as any).effectivePriority,isFinished: (item as any).isFinished,reason: (item as any).reason
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayToApplicationTransform_28(items_?: any): Array<{
  nodeId: string;
  title: string;
  status: string;
  effectivePriority: unknown;
  isFinished: boolean;
  reason: string;
}> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      nodeId: (item as any).nodeId,title: (item as any).title,status: (item as any).status,effectivePriority: (item as any).effectivePriority,isFinished: (item as any).isFinished,reason: (item as any).reason
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayToTransportTransform_29(
  items_?: Array<{
      nodeId: string;
      title: string;
      status: string;
      effectivePriority: unknown;
      isFinished: boolean;
      reason: string;
    }> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      nodeId: (item as any).nodeId,title: (item as any).title,status: (item as any).status,effectivePriority: (item as any).effectivePriority,isFinished: (item as any).isFinished,reason: (item as any).reason
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayToApplicationTransform_29(items_?: any): Array<{
  nodeId: string;
  title: string;
  status: string;
  effectivePriority: unknown;
  isFinished: boolean;
  reason: string;
}> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      nodeId: (item as any).nodeId,title: (item as any).title,status: (item as any).status,effectivePriority: (item as any).effectivePriority,isFinished: (item as any).isFinished,reason: (item as any).reason
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProjectStructureLinkInputToTransportTransform(
  input_?: ProjectStructureLinkInput | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    sourceNodeId: input_.sourceNodeId,targetNodeId: input_.targetNodeId,kind: input_.kind,leaseToken: input_.leaseToken
  }!;
}export function jsonProjectStructureLinkInputToApplicationTransform(
  input_?: any,
): ProjectStructureLinkInput {
  if(!input_) {
    return input_ as any;
  }
    return {
    sourceNodeId: input_.sourceNodeId,targetNodeId: input_.targetNodeId,kind: input_.kind,leaseToken: input_.leaseToken
  }!;
}export function jsonProjectStructureAssetCreateInputToTransportTransform(
  input_?: ProjectStructureAssetCreateInput | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    objectType: input_.objectType,title: input_.title,subtitle: input_.subtitle,notes: input_.notes,media: jsonProjectObjectMediaPayloadToTransportTransform(input_.media),parentNodeKey: input_.parentNodeKey,objectSubtype: input_.objectSubtype,metadataJson: input_.metadataJson,leaseToken: input_.leaseToken,sourceWorkspacePath: input_.sourceWorkspacePath,sourceFileName: input_.sourceFileName,sourceContentType: input_.sourceContentType,sourceUrl: input_.sourceUrl
  }!;
}export function jsonProjectStructureAssetCreateInputToApplicationTransform(
  input_?: any,
): ProjectStructureAssetCreateInput {
  if(!input_) {
    return input_ as any;
  }
    return {
    objectType: input_.objectType,title: input_.title,subtitle: input_.subtitle,notes: input_.notes,media: jsonProjectObjectMediaPayloadToApplicationTransform(input_.media),parentNodeKey: input_.parentNodeKey,objectSubtype: input_.objectSubtype,metadataJson: input_.metadataJson,leaseToken: input_.leaseToken,sourceWorkspacePath: input_.sourceWorkspacePath,sourceFileName: input_.sourceFileName,sourceContentType: input_.sourceContentType,sourceUrl: input_.sourceUrl
  }!;
}export function jsonArrayToTransportTransform_30(
  items_?: Array<{
      actionId: string;
      label: string;
      surface: string;
      description: string;
    }> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      actionId: (item as any).actionId,label: (item as any).label,surface: (item as any).surface,description: (item as any).description
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayToApplicationTransform_30(items_?: any): Array<{
  actionId: string;
  label: string;
  surface: string;
  description: string;
}> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = {
      actionId: (item as any).actionId,label: (item as any).label,surface: (item as any).surface,description: (item as any).description
    };
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProjectStructureAssetRevisionRequestToTransportTransform(
  input_?: ProjectStructureAssetRevisionRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    title: input_.title,subtitle: input_.subtitle,notes: input_.notes,media: jsonProjectObjectMediaPayloadToTransportTransform(input_.media),objectSubtype: input_.objectSubtype,metadataJson: input_.metadataJson,leaseToken: input_.leaseToken
  }!;
}export function jsonProjectStructureAssetRevisionRequestToApplicationTransform(
  input_?: any,
): ProjectStructureAssetRevisionRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    title: input_.title,subtitle: input_.subtitle,notes: input_.notes,media: jsonProjectObjectMediaPayloadToApplicationTransform(input_.media),objectSubtype: input_.objectSubtype,metadataJson: input_.metadataJson,leaseToken: input_.leaseToken
  }!;
}export function jsonProjectStructureImportRequestToTransportTransform(
  input_?: ProjectStructureImportRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    projectId: input_.projectId,parentNodeKey: input_.parentNodeKey,sourceKind: input_.sourceKind,title: input_.title,sourceText: input_.sourceText,sourceAsset: jsonProjectObjectMediaPayloadToTransportTransform(input_.sourceAsset),containerBlockSubtype: input_.containerBlockSubtype,leafWorkItemSubtype: input_.leafWorkItemSubtype,leaseToken: input_.leaseToken
  }!;
}export function jsonProjectStructureImportRequestToApplicationTransform(
  input_?: any,
): ProjectStructureImportRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    projectId: input_.projectId,parentNodeKey: input_.parentNodeKey,sourceKind: input_.sourceKind,title: input_.title,sourceText: input_.sourceText,sourceAsset: jsonProjectObjectMediaPayloadToApplicationTransform(input_.sourceAsset),containerBlockSubtype: input_.containerBlockSubtype,leafWorkItemSubtype: input_.leafWorkItemSubtype,leaseToken: input_.leaseToken
  }!;
}export function jsonProjectManagementGuidanceQueryRequestToTransportTransform(
  input_?: ProjectManagementGuidanceQueryRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    categories: jsonArrayProjectManagementGuidanceCategoryToTransportTransform(input_.categories),query: input_.query,take: input_.take
  }!;
}export function jsonProjectManagementGuidanceQueryRequestToApplicationTransform(
  input_?: any,
): ProjectManagementGuidanceQueryRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    categories: jsonArrayProjectManagementGuidanceCategoryToApplicationTransform(input_.categories),query: input_.query,take: input_.take
  }!;
}export function jsonArrayProjectManagementGuidanceCategoryToTransportTransform(
  items_?: Array<number> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = item as any;
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayProjectManagementGuidanceCategoryToApplicationTransform(
  items_?: any,
): Array<number> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = item as any;
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProjectStructureLeaseAcquireRequestToTransportTransform(
  input_?: ProjectStructureLeaseAcquireRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    scopeKind: input_.scopeKind,scopeKey: input_.scopeKey,reason: input_.reason,durationMinutes: input_.durationMinutes
  }!;
}export function jsonProjectStructureLeaseAcquireRequestToApplicationTransform(
  input_?: any,
): ProjectStructureLeaseAcquireRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    scopeKind: input_.scopeKind,scopeKey: input_.scopeKey,reason: input_.reason,durationMinutes: input_.durationMinutes
  }!;
}export function jsonProjectStructureLeaseRenewRequestToTransportTransform(
  input_?: ProjectStructureLeaseRenewRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    scopeKind: input_.scopeKind,scopeKey: input_.scopeKey,leaseToken: input_.leaseToken,durationMinutes: input_.durationMinutes
  }!;
}export function jsonProjectStructureLeaseRenewRequestToApplicationTransform(
  input_?: any,
): ProjectStructureLeaseRenewRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    scopeKind: input_.scopeKind,scopeKey: input_.scopeKey,leaseToken: input_.leaseToken,durationMinutes: input_.durationMinutes
  }!;
}export function jsonProjectStructureLeaseReleaseRequestToTransportTransform(
  input_?: ProjectStructureLeaseReleaseRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    scopeKind: input_.scopeKind,scopeKey: input_.scopeKey,leaseToken: input_.leaseToken
  }!;
}export function jsonProjectStructureLeaseReleaseRequestToApplicationTransform(
  input_?: any,
): ProjectStructureLeaseReleaseRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    scopeKind: input_.scopeKind,scopeKey: input_.scopeKey,leaseToken: input_.leaseToken
  }!;
}export function jsonProjectStructureAnalyticsQueryRequestToTransportTransform(
  input_?: ProjectStructureAnalyticsQueryRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    projectId: input_.projectId,operationName: input_.operationName,agentId: input_.agentId,succeeded: input_.succeeded,take: input_.take
  }!;
}export function jsonProjectStructureAnalyticsQueryRequestToApplicationTransform(
  input_?: any,
): ProjectStructureAnalyticsQueryRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    projectId: input_.projectId,operationName: input_.operationName,agentId: input_.agentId,succeeded: input_.succeeded,take: input_.take
  }!;
}export function jsonApiAccessStatusToTransportTransform(
  input_?: ApiAccessStatus | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    apiEnabled: input_.apiEnabled,openApiEnabled: input_.openApiEnabled,swaggerUiEnabled: input_.swaggerUiEnabled,authorizationEnabled: input_.authorizationEnabled,signingKeyConfigured: input_.signingKeyConfigured,issuer: input_.issuer,audience: input_.audience,defaultTokenLifetimeMinutes: input_.defaultTokenLifetimeMinutes,maxTokenLifetimeMinutes: input_.maxTokenLifetimeMinutes
  }!;
}export function jsonApiAccessStatusToApplicationTransform(
  input_?: any,
): ApiAccessStatus {
  if(!input_) {
    return input_ as any;
  }
    return {
    apiEnabled: input_.apiEnabled,openApiEnabled: input_.openApiEnabled,swaggerUiEnabled: input_.swaggerUiEnabled,authorizationEnabled: input_.authorizationEnabled,signingKeyConfigured: input_.signingKeyConfigured,issuer: input_.issuer,audience: input_.audience,defaultTokenLifetimeMinutes: input_.defaultTokenLifetimeMinutes,maxTokenLifetimeMinutes: input_.maxTokenLifetimeMinutes
  }!;
}export function jsonApiTokenIssueRequestToTransportTransform(
  input_?: ApiTokenIssueRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    subject: input_.subject,displayName: input_.displayName,lifetimeMinutes: input_.lifetimeMinutes,scopes: jsonArrayStringToTransportTransform(input_.scopes)
  }!;
}export function jsonApiTokenIssueRequestToApplicationTransform(
  input_?: any,
): ApiTokenIssueRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    subject: input_.subject,displayName: input_.displayName,lifetimeMinutes: input_.lifetimeMinutes,scopes: jsonArrayStringToApplicationTransform(input_.scopes)
  }!;
}export function jsonApiTokenIssueResultToTransportTransform(
  input_?: ApiTokenIssueResult | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    token: input_.token,tokenType: input_.tokenType,expiresAtUtc: dateRfc3339Serializer(input_.expiresAtUtc),subject: input_.subject,displayName: input_.displayName,scopes: jsonArrayStringToTransportTransform(input_.scopes)
  }!;
}export function jsonApiTokenIssueResultToApplicationTransform(
  input_?: any,
): ApiTokenIssueResult {
  if(!input_) {
    return input_ as any;
  }
    return {
    token: input_.token,tokenType: input_.tokenType,expiresAtUtc: dateDeserializer(input_.expiresAtUtc)!,subject: input_.subject,displayName: input_.displayName,scopes: jsonArrayStringToApplicationTransform(input_.scopes)
  }!;
}export function jsonArrayProjectSummaryToTransportTransform(
  items_?: Array<ProjectSummary> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProjectSummaryToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayProjectSummaryToApplicationTransform(
  items_?: any,
): Array<ProjectSummary> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProjectSummaryToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProjectSummaryToTransportTransform(
  input_?: ProjectSummary | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,name: input_.name,status: input_.status,currentPhase: input_.currentPhase,phaseCount: input_.phaseCount,parentCount: input_.parentCount,childCount: input_.childCount,updatedAtUtc: dateRfc3339Serializer(input_.updatedAtUtc),primaryCustomerName: input_.primaryCustomerName,primaryDeliveryUnitName: input_.primaryDeliveryUnitName,primaryOwnerName: input_.primaryOwnerName,relatedParties: jsonArrayProjectPortfolioPartyItemToTransportTransform(input_.relatedParties),relatedPartySearchText: input_.relatedPartySearchText
  }!;
}export function jsonProjectSummaryToApplicationTransform(
  input_?: any,
): ProjectSummary {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,name: input_.name,status: input_.status,currentPhase: input_.currentPhase,phaseCount: input_.phaseCount,parentCount: input_.parentCount,childCount: input_.childCount,updatedAtUtc: dateDeserializer(input_.updatedAtUtc)!,primaryCustomerName: input_.primaryCustomerName,primaryDeliveryUnitName: input_.primaryDeliveryUnitName,primaryOwnerName: input_.primaryOwnerName,relatedParties: jsonArrayProjectPortfolioPartyItemToApplicationTransform(input_.relatedParties),relatedPartySearchText: input_.relatedPartySearchText
  }!;
}export function jsonArrayProjectPortfolioPartyItemToTransportTransform(
  items_?: Array<ProjectPortfolioPartyItem> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProjectPortfolioPartyItemToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayProjectPortfolioPartyItemToApplicationTransform(
  items_?: any,
): Array<ProjectPortfolioPartyItem> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProjectPortfolioPartyItemToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProjectPortfolioPartyItemToTransportTransform(
  input_?: ProjectPortfolioPartyItem | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    category: input_.category,label: input_.label,displayName: input_.displayName,isPrimary: input_.isPrimary
  }!;
}export function jsonProjectPortfolioPartyItemToApplicationTransform(
  input_?: any,
): ProjectPortfolioPartyItem {
  if(!input_) {
    return input_ as any;
  }
    return {
    category: input_.category,label: input_.label,displayName: input_.displayName,isPrimary: input_.isPrimary
  }!;
}export function jsonProjectEditorModelToTransportTransform(
  input_?: ProjectEditorModel | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,name: input_.name,description: input_.description,objective: input_.objective,status: input_.status,currentPhase: input_.currentPhase,targetDateUtc: dateRfc3339Serializer(input_.targetDateUtc),phases: jsonArrayProjectPhaseEditorModelToTransportTransform(input_.phases),options: jsonArrayProjectOptionEditorModelToTransportTransform(input_.options)
  }!;
}export function jsonProjectEditorModelToApplicationTransform(
  input_?: any,
): ProjectEditorModel {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,name: input_.name,description: input_.description,objective: input_.objective,status: input_.status,currentPhase: input_.currentPhase,targetDateUtc: dateDeserializer(input_.targetDateUtc)!,phases: jsonArrayProjectPhaseEditorModelToApplicationTransform(input_.phases),options: jsonArrayProjectOptionEditorModelToApplicationTransform(input_.options)
  }!;
}export function jsonArrayProjectPhaseEditorModelToTransportTransform(
  items_?: Array<ProjectPhaseEditorModel> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProjectPhaseEditorModelToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayProjectPhaseEditorModelToApplicationTransform(
  items_?: any,
): Array<ProjectPhaseEditorModel> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProjectPhaseEditorModelToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProjectPhaseEditorModelToTransportTransform(
  input_?: ProjectPhaseEditorModel | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,name: input_.name,goal: input_.goal,status: input_.status,startDateUtc: dateRfc3339Serializer(input_.startDateUtc),endDateUtc: dateRfc3339Serializer(input_.endDateUtc)
  }!;
}export function jsonProjectPhaseEditorModelToApplicationTransform(
  input_?: any,
): ProjectPhaseEditorModel {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,name: input_.name,goal: input_.goal,status: input_.status,startDateUtc: dateDeserializer(input_.startDateUtc)!,endDateUtc: dateDeserializer(input_.endDateUtc)!
  }!;
}export function jsonArrayProjectOptionEditorModelToTransportTransform(
  items_?: Array<ProjectOptionEditorModel> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProjectOptionEditorModelToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayProjectOptionEditorModelToApplicationTransform(
  items_?: any,
): Array<ProjectOptionEditorModel> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProjectOptionEditorModelToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProjectOptionEditorModelToTransportTransform(
  input_?: ProjectOptionEditorModel | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,category: input_.category,optionName: input_.optionName,notes: input_.notes
  }!;
}export function jsonProjectOptionEditorModelToApplicationTransform(
  input_?: any,
): ProjectOptionEditorModel {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,category: input_.category,optionName: input_.optionName,notes: input_.notes
  }!;
}export function jsonApiErrorResponseToTransportTransform(
  input_?: ApiErrorResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    errors: jsonArrayApiErrorItemToTransportTransform(input_.errors),correlationId: input_.correlationId,agentId: input_.agentId,executionRunId: input_.executionRunId,chatSessionId: input_.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToTransportTransform(input_.providerFailureCategory)
  }!;
}export function jsonApiErrorResponseToApplicationTransform(
  input_?: any,
): ApiErrorResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    errors: jsonArrayApiErrorItemToApplicationTransform(input_.errors),correlationId: input_.correlationId,agentId: input_.agentId,executionRunId: input_.executionRunId,chatSessionId: input_.chatSessionId,providerFailureCategory: jsonAgentProviderFailureCategoryToApplicationTransform(input_.providerFailureCategory)
  }!;
}export function jsonArrayApiErrorItemToTransportTransform(
  items_?: Array<ApiErrorItem> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonApiErrorItemToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayApiErrorItemToApplicationTransform(
  items_?: any,
): Array<ApiErrorItem> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonApiErrorItemToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonApiErrorItemToTransportTransform(
  input_?: ApiErrorItem | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    code: input_.code,message: input_.message,severity: input_.severity
  }!;
}export function jsonApiErrorItemToApplicationTransform(
  input_?: any,
): ApiErrorItem {
  if(!input_) {
    return input_ as any;
  }
    return {
    code: input_.code,message: input_.message,severity: input_.severity
  }!;
}export function jsonAgentProviderFailureCategoryToTransportTransform(
  input_?: AgentProviderFailureCategory | null,
): any {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonAgentProviderFailureCategoryToApplicationTransform(
  input_?: any,
): AgentProviderFailureCategory {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonArrayProjectAccessListItemToTransportTransform(
  items_?: Array<ProjectAccessListItem> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProjectAccessListItemToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayProjectAccessListItemToApplicationTransform(
  items_?: any,
): Array<ProjectAccessListItem> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProjectAccessListItemToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProjectAccessListItemToTransportTransform(
  input_?: ProjectAccessListItem | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,name: input_.name
  }!;
}export function jsonProjectAccessListItemToApplicationTransform(
  input_?: any,
): ProjectAccessListItem {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,name: input_.name
  }!;
}export function jsonArrayProjectHierarchyLinkSummaryToTransportTransform(
  items_?: Array<ProjectHierarchyLinkSummary> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProjectHierarchyLinkSummaryToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayProjectHierarchyLinkSummaryToApplicationTransform(
  items_?: any,
): Array<ProjectHierarchyLinkSummary> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProjectHierarchyLinkSummaryToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProjectHierarchyLinkSummaryToTransportTransform(
  input_?: ProjectHierarchyLinkSummary | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    parentProjectId: input_.parentProjectId,childProjectId: input_.childProjectId,createdAtUtc: dateRfc3339Serializer(input_.createdAtUtc)
  }!;
}export function jsonProjectHierarchyLinkSummaryToApplicationTransform(
  input_?: any,
): ProjectHierarchyLinkSummary {
  if(!input_) {
    return input_ as any;
  }
    return {
    parentProjectId: input_.parentProjectId,childProjectId: input_.childProjectId,createdAtUtc: dateDeserializer(input_.createdAtUtc)!
  }!;
}export function jsonProjectDeletionResultToTransportTransform(
  input_?: ProjectDeletionResult | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    projectId: input_.projectId,warnings: jsonArrayProjectDeletionWarningToTransportTransform(input_.warnings)
  }!;
}export function jsonProjectDeletionResultToApplicationTransform(
  input_?: any,
): ProjectDeletionResult {
  if(!input_) {
    return input_ as any;
  }
    return {
    projectId: input_.projectId,warnings: jsonArrayProjectDeletionWarningToApplicationTransform(input_.warnings)
  }!;
}export function jsonArrayProjectDeletionWarningToTransportTransform(
  items_?: Array<ProjectDeletionWarning> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProjectDeletionWarningToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayProjectDeletionWarningToApplicationTransform(
  items_?: any,
): Array<ProjectDeletionWarning> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProjectDeletionWarningToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProjectDeletionWarningToTransportTransform(
  input_?: ProjectDeletionWarning | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: input_.kind,participantId: jsonProjectDeletionParticipantIdToTransportTransform(input_.participantId),recoveryId: input_.recoveryId,retainedObject: jsonProjectDeletionRetainedObjectDescriptorToTransportTransform(input_.retainedObject),message: input_.message,remediation: input_.remediation
  }!;
}export function jsonProjectDeletionWarningToApplicationTransform(
  input_?: any,
): ProjectDeletionWarning {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: input_.kind,participantId: jsonProjectDeletionParticipantIdToApplicationTransform(input_.participantId),recoveryId: input_.recoveryId,retainedObject: jsonProjectDeletionRetainedObjectDescriptorToApplicationTransform(input_.retainedObject),message: input_.message,remediation: input_.remediation
  }!;
}export function jsonProjectDeletionParticipantIdToTransportTransform(
  input_?: ProjectDeletionParticipantId | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value
  }!;
}export function jsonProjectDeletionParticipantIdToApplicationTransform(
  input_?: any,
): ProjectDeletionParticipantId {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value
  }!;
}export function jsonProjectDeletionRetainedObjectDescriptorToTransportTransform(
  input_?: ProjectDeletionRetainedObjectDescriptor | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    provider: input_.provider,storageId: input_.storageId,locatorKind: input_.locatorKind,locator: input_.locator,reason: input_.reason
  }!;
}export function jsonProjectDeletionRetainedObjectDescriptorToApplicationTransform(
  input_?: any,
): ProjectDeletionRetainedObjectDescriptor {
  if(!input_) {
    return input_ as any;
  }
    return {
    provider: input_.provider,storageId: input_.storageId,locatorKind: input_.locatorKind,locator: input_.locator,reason: input_.reason
  }!;
}export function jsonProjectDeletionCleanupPendingApiResponseToTransportTransform(
  input_?: ProjectDeletionCleanupPendingApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    code: input_.code,message: input_.message,recovery: jsonProjectDeletionRecoveryToTransportTransform(input_.recovery)
  }!;
}export function jsonProjectDeletionCleanupPendingApiResponseToApplicationTransform(
  input_?: any,
): ProjectDeletionCleanupPendingApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    code: input_.code,message: input_.message,recovery: jsonProjectDeletionRecoveryToApplicationTransform(input_.recovery)
  }!;
}export function jsonProjectDeletionRecoveryToTransportTransform(
  input_?: ProjectDeletionRecovery | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    projectId: input_.projectId,failures: jsonArrayProjectDeletionRecoveryFailureToTransportTransform(input_.failures),retryGuidance: input_.retryGuidance
  }!;
}export function jsonProjectDeletionRecoveryToApplicationTransform(
  input_?: any,
): ProjectDeletionRecovery {
  if(!input_) {
    return input_ as any;
  }
    return {
    projectId: input_.projectId,failures: jsonArrayProjectDeletionRecoveryFailureToApplicationTransform(input_.failures),retryGuidance: input_.retryGuidance
  }!;
}export function jsonArrayProjectDeletionRecoveryFailureToTransportTransform(
  items_?: Array<ProjectDeletionRecoveryFailure> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProjectDeletionRecoveryFailureToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayProjectDeletionRecoveryFailureToApplicationTransform(
  items_?: any,
): Array<ProjectDeletionRecoveryFailure> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProjectDeletionRecoveryFailureToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProjectDeletionRecoveryFailureToTransportTransform(
  input_?: ProjectDeletionRecoveryFailure | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    operation: input_.operation,participantId: jsonProjectDeletionParticipantIdToTransportTransform(input_.participantId),recoveryId: input_.recoveryId
  }!;
}export function jsonProjectDeletionRecoveryFailureToApplicationTransform(
  input_?: any,
): ProjectDeletionRecoveryFailure {
  if(!input_) {
    return input_ as any;
  }
    return {
    operation: input_.operation,participantId: jsonProjectDeletionParticipantIdToApplicationTransform(input_.participantId),recoveryId: input_.recoveryId
  }!;
}export function jsonArrayProjectDeletionPendingCleanupToTransportTransform(
  items_?: Array<ProjectDeletionPendingCleanup> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProjectDeletionPendingCleanupToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayProjectDeletionPendingCleanupToApplicationTransform(
  items_?: any,
): Array<ProjectDeletionPendingCleanup> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProjectDeletionPendingCleanupToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProjectDeletionPendingCleanupToTransportTransform(
  input_?: ProjectDeletionPendingCleanup | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    projectId: input_.projectId,participantId: jsonProjectDeletionParticipantIdToTransportTransform(input_.participantId),recoveryId: input_.recoveryId,status: input_.status,canRetryNow: input_.canRetryNow,retryAvailableAtUtc: dateRfc3339Serializer(input_.retryAvailableAtUtc),retryGuidance: input_.retryGuidance
  }!;
}export function jsonProjectDeletionPendingCleanupToApplicationTransform(
  input_?: any,
): ProjectDeletionPendingCleanup {
  if(!input_) {
    return input_ as any;
  }
    return {
    projectId: input_.projectId,participantId: jsonProjectDeletionParticipantIdToApplicationTransform(input_.participantId),recoveryId: input_.recoveryId,status: input_.status,canRetryNow: input_.canRetryNow,retryAvailableAtUtc: dateDeserializer(input_.retryAvailableAtUtc)!,retryGuidance: input_.retryGuidance
  }!;
}export function jsonArrayProjectDeletionCompletionNoticeToTransportTransform(
  items_?: Array<ProjectDeletionCompletionNotice> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProjectDeletionCompletionNoticeToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayProjectDeletionCompletionNoticeToApplicationTransform(
  items_?: any,
): Array<ProjectDeletionCompletionNotice> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProjectDeletionCompletionNoticeToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProjectDeletionCompletionNoticeToTransportTransform(
  input_?: ProjectDeletionCompletionNotice | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    projectId: input_.projectId,participantId: jsonProjectDeletionParticipantIdToTransportTransform(input_.participantId),recoveryId: input_.recoveryId,operation: input_.operation,warnings: jsonArrayProjectDeletionWarningToTransportTransform(input_.warnings)
  }!;
}export function jsonProjectDeletionCompletionNoticeToApplicationTransform(
  input_?: any,
): ProjectDeletionCompletionNotice {
  if(!input_) {
    return input_ as any;
  }
    return {
    projectId: input_.projectId,participantId: jsonProjectDeletionParticipantIdToApplicationTransform(input_.participantId),recoveryId: input_.recoveryId,operation: input_.operation,warnings: jsonArrayProjectDeletionWarningToApplicationTransform(input_.warnings)
  }!;
}export function jsonProjectHierarchySnapshotToTransportTransform(
  input_?: ProjectHierarchySnapshot | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    projectId: input_.projectId,parentProjects: jsonArrayProjectSummaryToTransportTransform(input_.parentProjects),childProjects: jsonArrayProjectSummaryToTransportTransform(input_.childProjects)
  }!;
}export function jsonProjectHierarchySnapshotToApplicationTransform(
  input_?: any,
): ProjectHierarchySnapshot {
  if(!input_) {
    return input_ as any;
  }
    return {
    projectId: input_.projectId,parentProjects: jsonArrayProjectSummaryToApplicationTransform(input_.parentProjects),childProjects: jsonArrayProjectSummaryToApplicationTransform(input_.childProjects)
  }!;
}export function jsonApiAckToTransportTransform(input_?: ApiAck | null): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    ok: input_.ok
  }!;
}export function jsonApiAckToApplicationTransform(input_?: any): ApiAck {
  if(!input_) {
    return input_ as any;
  }
    return {
    ok: input_.ok
  }!;
}export function jsonProjectReconnectSubprojectApiRequestToTransportTransform(
  input_?: ProjectReconnectSubprojectApiRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    currentParentProjectId: input_.currentParentProjectId,newParentProjectId: input_.newParentProjectId
  }!;
}export function jsonProjectReconnectSubprojectApiRequestToApplicationTransform(
  input_?: any,
): ProjectReconnectSubprojectApiRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    currentParentProjectId: input_.currentParentProjectId,newParentProjectId: input_.newParentProjectId
  }!;
}export function jsonArrayAgentDefinitionToTransportTransform(
  items_?: Array<AgentDefinition> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonAgentDefinitionToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayAgentDefinitionToApplicationTransform(
  items_?: any,
): Array<AgentDefinition> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonAgentDefinitionToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonAgentDefinitionToTransportTransform(
  input_?: AgentDefinition | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,name: input_.name,roleTitle: input_.roleTitle,summary: input_.summary,instructions: input_.instructions,status: input_.status,providerProfileId: input_.providerProfileId,model: input_.model,workload: input_.workload,chatHistoryMode: input_.chatHistoryMode,temperature: input_.temperature,requirePerServiceCallChatHistoryPersistence: input_.requirePerServiceCallChatHistoryPersistence,enableBackgroundResponses: input_.enableBackgroundResponses,configurationJson: input_.configurationJson,isTemplate: input_.isTemplate,templateKey: input_.templateKey,permissions: jsonAgentPermissionsPolicyToTransportTransform(input_.permissions),capabilities: jsonArrayAgentCapabilityAssignmentToTransportTransform(input_.capabilities),tags: jsonArrayStringToTransportTransform(input_.tags),createdAtUtc: dateRfc3339Serializer(input_.createdAtUtc),updatedAtUtc: dateRfc3339Serializer(input_.updatedAtUtc),avatarImageUrl: input_.avatarImageUrl
  }!;
}export function jsonAgentDefinitionToApplicationTransform(
  input_?: any,
): AgentDefinition {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,name: input_.name,roleTitle: input_.roleTitle,summary: input_.summary,instructions: input_.instructions,status: input_.status,providerProfileId: input_.providerProfileId,model: input_.model,workload: input_.workload,chatHistoryMode: input_.chatHistoryMode,temperature: input_.temperature,requirePerServiceCallChatHistoryPersistence: input_.requirePerServiceCallChatHistoryPersistence,enableBackgroundResponses: input_.enableBackgroundResponses,configurationJson: input_.configurationJson,isTemplate: input_.isTemplate,templateKey: input_.templateKey,permissions: jsonAgentPermissionsPolicyToApplicationTransform(input_.permissions),capabilities: jsonArrayAgentCapabilityAssignmentToApplicationTransform(input_.capabilities),tags: jsonArrayStringToApplicationTransform(input_.tags),createdAtUtc: dateDeserializer(input_.createdAtUtc)!,updatedAtUtc: dateDeserializer(input_.updatedAtUtc)!,avatarImageUrl: input_.avatarImageUrl
  }!;
}export function jsonAgentPermissionsPolicyToTransportTransform(
  input_?: AgentPermissionsPolicy | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    canUseTools: input_.canUseTools,canAskOtherAgents: input_.canAskOtherAgents,canEscalateToHuman: input_.canEscalateToHuman,canObserveOtherAgents: input_.canObserveOtherAgents,canScheduleWork: input_.canScheduleWork,requiresApprovalForExternalCalls: input_.requiresApprovalForExternalCalls,autoApproveExternalCallsByDefault: input_.autoApproveExternalCallsByDefault,allowedSecrets: jsonArrayAgentAllowedSecretReferenceToTransportTransform(input_.allowedSecrets)
  }!;
}export function jsonAgentPermissionsPolicyToApplicationTransform(
  input_?: any,
): AgentPermissionsPolicy {
  if(!input_) {
    return input_ as any;
  }
    return {
    canUseTools: input_.canUseTools,canAskOtherAgents: input_.canAskOtherAgents,canEscalateToHuman: input_.canEscalateToHuman,canObserveOtherAgents: input_.canObserveOtherAgents,canScheduleWork: input_.canScheduleWork,requiresApprovalForExternalCalls: input_.requiresApprovalForExternalCalls,autoApproveExternalCallsByDefault: input_.autoApproveExternalCallsByDefault,allowedSecrets: jsonArrayAgentAllowedSecretReferenceToApplicationTransform(input_.allowedSecrets)
  }!;
}export function jsonArrayAgentAllowedSecretReferenceToTransportTransform(
  items_?: Array<AgentAllowedSecretReference> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonAgentAllowedSecretReferenceToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayAgentAllowedSecretReferenceToApplicationTransform(
  items_?: any,
): Array<AgentAllowedSecretReference> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonAgentAllowedSecretReferenceToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonAgentAllowedSecretReferenceToTransportTransform(
  input_?: AgentAllowedSecretReference | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    secretId: input_.secretId,nameSnapshot: input_.nameSnapshot,purpose: input_.purpose
  }!;
}export function jsonAgentAllowedSecretReferenceToApplicationTransform(
  input_?: any,
): AgentAllowedSecretReference {
  if(!input_) {
    return input_ as any;
  }
    return {
    secretId: input_.secretId,nameSnapshot: input_.nameSnapshot,purpose: input_.purpose
  }!;
}export function jsonArrayAgentCapabilityAssignmentToTransportTransform(
  items_?: Array<AgentCapabilityAssignment> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonAgentCapabilityAssignmentToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayAgentCapabilityAssignmentToApplicationTransform(
  items_?: any,
): Array<AgentCapabilityAssignment> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonAgentCapabilityAssignmentToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonAgentCapabilityAssignmentToTransportTransform(
  input_?: AgentCapabilityAssignment | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    capabilityId: input_.capabilityId,capabilityKey: input_.capabilityKey,kind: input_.kind,proofStatus: input_.proofStatus,lastVerifiedAtUtc: dateRfc3339Serializer(input_.lastVerifiedAtUtc),proofNotes: input_.proofNotes
  }!;
}export function jsonAgentCapabilityAssignmentToApplicationTransform(
  input_?: any,
): AgentCapabilityAssignment {
  if(!input_) {
    return input_ as any;
  }
    return {
    capabilityId: input_.capabilityId,capabilityKey: input_.capabilityKey,kind: input_.kind,proofStatus: input_.proofStatus,lastVerifiedAtUtc: dateDeserializer(input_.lastVerifiedAtUtc)!,proofNotes: input_.proofNotes
  }!;
}export function jsonAgentEditorModelToTransportTransform(
  input_?: AgentEditorModel | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,expectedUpdatedAtUtc: dateRfc3339Serializer(input_.expectedUpdatedAtUtc),name: input_.name,roleTitle: input_.roleTitle,summary: input_.summary,instructions: input_.instructions,avatarImageUrl: input_.avatarImageUrl,status: input_.status,providerProfileId: input_.providerProfileId,model: input_.model,thinkingEffortOverride: input_.thinkingEffortOverride,isThinkingEffortOverrideEdited: input_.isThinkingEffortOverrideEdited,workload: input_.workload,chatHistoryMode: input_.chatHistoryMode,temperature: input_.temperature,requirePerServiceCallChatHistoryPersistence: input_.requirePerServiceCallChatHistoryPersistence,enableBackgroundResponses: input_.enableBackgroundResponses,configurationJson: input_.configurationJson,isTemplate: input_.isTemplate,templateKey: input_.templateKey,permissions: jsonAgentPermissionsPolicyToTransportTransform(input_.permissions),allowedSecretReferences: jsonArrayAgentAllowedSecretReferenceToTransportTransform(input_.allowedSecretReferences),projectStructureAccess: jsonAgentProjectStructureAccessSettingsToTransportTransform(input_.projectStructureAccess),processAccess: jsonAgentProcessAccessSettingsToTransportTransform(input_.processAccess),workspaceToolAccess: jsonAgentWorkspaceToolAccessSettingsToTransportTransform(input_.workspaceToolAccess),imageGenerationAccess: jsonAgentImageGenerationAccessSettingsToTransportTransform(input_.imageGenerationAccess),voiceAccess: jsonAgentVoiceAccessSettingsToTransportTransform(input_.voiceAccess),memoryAccess: jsonAgentMemoryAccessSettingsToTransportTransform(input_.memoryAccess),selectedCapabilityIds: jsonArrayStringToTransportTransform(input_.selectedCapabilityIds),tags: jsonArrayStringToTransportTransform(input_.tags)
  }!;
}export function jsonAgentEditorModelToApplicationTransform(
  input_?: any,
): AgentEditorModel {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,expectedUpdatedAtUtc: dateDeserializer(input_.expectedUpdatedAtUtc)!,name: input_.name,roleTitle: input_.roleTitle,summary: input_.summary,instructions: input_.instructions,avatarImageUrl: input_.avatarImageUrl,status: input_.status,providerProfileId: input_.providerProfileId,model: input_.model,thinkingEffortOverride: input_.thinkingEffortOverride,isThinkingEffortOverrideEdited: input_.isThinkingEffortOverrideEdited,workload: input_.workload,chatHistoryMode: input_.chatHistoryMode,temperature: input_.temperature,requirePerServiceCallChatHistoryPersistence: input_.requirePerServiceCallChatHistoryPersistence,enableBackgroundResponses: input_.enableBackgroundResponses,configurationJson: input_.configurationJson,isTemplate: input_.isTemplate,templateKey: input_.templateKey,permissions: jsonAgentPermissionsPolicyToApplicationTransform(input_.permissions),allowedSecretReferences: jsonArrayAgentAllowedSecretReferenceToApplicationTransform(input_.allowedSecretReferences),projectStructureAccess: jsonAgentProjectStructureAccessSettingsToApplicationTransform(input_.projectStructureAccess),processAccess: jsonAgentProcessAccessSettingsToApplicationTransform(input_.processAccess),workspaceToolAccess: jsonAgentWorkspaceToolAccessSettingsToApplicationTransform(input_.workspaceToolAccess),imageGenerationAccess: jsonAgentImageGenerationAccessSettingsToApplicationTransform(input_.imageGenerationAccess),voiceAccess: jsonAgentVoiceAccessSettingsToApplicationTransform(input_.voiceAccess),memoryAccess: jsonAgentMemoryAccessSettingsToApplicationTransform(input_.memoryAccess),selectedCapabilityIds: jsonArrayStringToApplicationTransform(input_.selectedCapabilityIds),tags: jsonArrayStringToApplicationTransform(input_.tags)
  }!;
}export function jsonAgentProjectStructureAccessSettingsToTransportTransform(
  input_?: AgentProjectStructureAccessSettings | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    canRead: input_.canRead,canWrite: input_.canWrite,canWriteNonTaskStructure: input_.canWriteNonTaskStructure,canWriteTasks: input_.canWriteTasks,canCreateProjects: input_.canCreateProjects,canCreateSubprojects: input_.canCreateSubprojects,allowAllProjects: input_.allowAllProjects,allowedProjectIds: jsonArrayStringToTransportTransform(input_.allowedProjectIds)
  }!;
}export function jsonAgentProjectStructureAccessSettingsToApplicationTransform(
  input_?: any,
): AgentProjectStructureAccessSettings {
  if(!input_) {
    return input_ as any;
  }
    return {
    canRead: input_.canRead,canWrite: input_.canWrite,canWriteNonTaskStructure: input_.canWriteNonTaskStructure,canWriteTasks: input_.canWriteTasks,canCreateProjects: input_.canCreateProjects,canCreateSubprojects: input_.canCreateSubprojects,allowAllProjects: input_.allowAllProjects,allowedProjectIds: jsonArrayStringToApplicationTransform(input_.allowedProjectIds)
  }!;
}export function jsonAgentProcessAccessSettingsToTransportTransform(
  input_?: AgentProcessAccessSettings | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    canRead: input_.canRead,canWrite: input_.canWrite,allowAllDefinitions: input_.allowAllDefinitions,allowedDefinitionIds: jsonArrayStringToTransportTransform(input_.allowedDefinitionIds)
  }!;
}export function jsonAgentProcessAccessSettingsToApplicationTransform(
  input_?: any,
): AgentProcessAccessSettings {
  if(!input_) {
    return input_ as any;
  }
    return {
    canRead: input_.canRead,canWrite: input_.canWrite,allowAllDefinitions: input_.allowAllDefinitions,allowedDefinitionIds: jsonArrayStringToApplicationTransform(input_.allowedDefinitionIds)
  }!;
}export function jsonAgentWorkspaceToolAccessSettingsToTransportTransform(
  input_?: AgentWorkspaceToolAccessSettings | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    profile: input_.profile,canReadFiles: input_.canReadFiles,canWriteFiles: input_.canWriteFiles,canRunValidationCommands: input_.canRunValidationCommands,canRunLocalScripts: input_.canRunLocalScripts,canScaffoldProjects: input_.canScaffoldProjects,canManageWorkspacePaths: input_.canManageWorkspacePaths,canTransformArtifacts: input_.canTransformArtifacts,allowedExternalTargetAliases: jsonArrayStringToTransportTransform(input_.allowedExternalTargetAliases),externalTargetRootBindings: jsonArrayExternalTargetRootBindingToTransportTransform(input_.externalTargetRootBindings),canReadStorage: input_.canReadStorage,canWriteStorage: input_.canWriteStorage,allowAllStorageCatalogs: input_.allowAllStorageCatalogs,allowedStorageCatalogIds: jsonArrayStringToTransportTransform(input_.allowedStorageCatalogIds)
  }!;
}export function jsonAgentWorkspaceToolAccessSettingsToApplicationTransform(
  input_?: any,
): AgentWorkspaceToolAccessSettings {
  if(!input_) {
    return input_ as any;
  }
    return {
    profile: input_.profile,canReadFiles: input_.canReadFiles,canWriteFiles: input_.canWriteFiles,canRunValidationCommands: input_.canRunValidationCommands,canRunLocalScripts: input_.canRunLocalScripts,canScaffoldProjects: input_.canScaffoldProjects,canManageWorkspacePaths: input_.canManageWorkspacePaths,canTransformArtifacts: input_.canTransformArtifacts,allowedExternalTargetAliases: jsonArrayStringToApplicationTransform(input_.allowedExternalTargetAliases),externalTargetRootBindings: jsonArrayExternalTargetRootBindingToApplicationTransform(input_.externalTargetRootBindings),canReadStorage: input_.canReadStorage,canWriteStorage: input_.canWriteStorage,allowAllStorageCatalogs: input_.allowAllStorageCatalogs,allowedStorageCatalogIds: jsonArrayStringToApplicationTransform(input_.allowedStorageCatalogIds)
  }!;
}export function jsonArrayExternalTargetRootBindingToTransportTransform(
  items_?: Array<ExternalTargetRootBinding> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonExternalTargetRootBindingToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayExternalTargetRootBindingToApplicationTransform(
  items_?: any,
): Array<ExternalTargetRootBinding> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonExternalTargetRootBindingToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonExternalTargetRootBindingToTransportTransform(
  input_?: ExternalTargetRootBinding | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    rootId: input_.rootId,hostPlatform: input_.hostPlatform,protectedRootToken: input_.protectedRootToken
  }!;
}export function jsonExternalTargetRootBindingToApplicationTransform(
  input_?: any,
): ExternalTargetRootBinding {
  if(!input_) {
    return input_ as any;
  }
    return {
    rootId: input_.rootId,hostPlatform: input_.hostPlatform,protectedRootToken: input_.protectedRootToken
  }!;
}export function jsonAgentImageGenerationAccessSettingsToTransportTransform(
  input_?: AgentImageGenerationAccessSettings | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    canGenerateImages: input_.canGenerateImages,preferredProviderProfileId: input_.preferredProviderProfileId,defaultModel: input_.defaultModel,canStoreImagesAsProjectAssets: input_.canStoreImagesAsProjectAssets
  }!;
}export function jsonAgentImageGenerationAccessSettingsToApplicationTransform(
  input_?: any,
): AgentImageGenerationAccessSettings {
  if(!input_) {
    return input_ as any;
  }
    return {
    canGenerateImages: input_.canGenerateImages,preferredProviderProfileId: input_.preferredProviderProfileId,defaultModel: input_.defaultModel,canStoreImagesAsProjectAssets: input_.canStoreImagesAsProjectAssets
  }!;
}export function jsonAgentVoiceAccessSettingsToTransportTransform(
  input_?: AgentVoiceAccessSettings | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    canUseVoiceMode: input_.canUseVoiceMode,preferredVoiceId: input_.preferredVoiceId
  }!;
}export function jsonAgentVoiceAccessSettingsToApplicationTransform(
  input_?: any,
): AgentVoiceAccessSettings {
  if(!input_) {
    return input_ as any;
  }
    return {
    canUseVoiceMode: input_.canUseVoiceMode,preferredVoiceId: input_.preferredVoiceId
  }!;
}export function jsonAgentMemoryAccessSettingsToTransportTransform(
  input_?: AgentMemoryAccessSettings | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    invocationMode: input_.invocationMode,canUseMemoryTools: input_.canUseMemoryTools,canUseContextContributions: input_.canUseContextContributions,requireContextContributions: input_.requireContextContributions,allowAsyncContextContributions: input_.allowAsyncContextContributions,canIngestSources: input_.canIngestSources,preferredProviderInstanceId: jsonMemoryProviderInstanceIdToTransportTransform(input_.preferredProviderInstanceId),defaultProviderInstanceId: jsonMemoryProviderInstanceIdToTransportTransform(input_.defaultProviderInstanceId),allowedProviderInstanceIds: jsonArrayMemoryProviderInstanceIdToTransportTransform(input_.allowedProviderInstanceIds),providerBindings: jsonArrayAgentMemoryProviderBindingSettingToTransportTransform(input_.providerBindings),allowedCapabilityIds: jsonArrayMemoryCapabilityIdToTransportTransform(input_.allowedCapabilityIds),deniedCapabilityIds: jsonArrayMemoryCapabilityIdToTransportTransform(input_.deniedCapabilityIds),allowedSourceScopes: jsonArrayMemorySourceScopeToTransportTransform(input_.allowedSourceScopes),providerAssignments: jsonArrayAgentMemoryProviderAssignmentSettingToTransportTransform(input_.providerAssignments)
  }!;
}export function jsonAgentMemoryAccessSettingsToApplicationTransform(
  input_?: any,
): AgentMemoryAccessSettings {
  if(!input_) {
    return input_ as any;
  }
    return {
    invocationMode: input_.invocationMode,canUseMemoryTools: input_.canUseMemoryTools,canUseContextContributions: input_.canUseContextContributions,requireContextContributions: input_.requireContextContributions,allowAsyncContextContributions: input_.allowAsyncContextContributions,canIngestSources: input_.canIngestSources,preferredProviderInstanceId: jsonMemoryProviderInstanceIdToApplicationTransform(input_.preferredProviderInstanceId),defaultProviderInstanceId: jsonMemoryProviderInstanceIdToApplicationTransform(input_.defaultProviderInstanceId),allowedProviderInstanceIds: jsonArrayMemoryProviderInstanceIdToApplicationTransform(input_.allowedProviderInstanceIds),providerBindings: jsonArrayAgentMemoryProviderBindingSettingToApplicationTransform(input_.providerBindings),allowedCapabilityIds: jsonArrayMemoryCapabilityIdToApplicationTransform(input_.allowedCapabilityIds),deniedCapabilityIds: jsonArrayMemoryCapabilityIdToApplicationTransform(input_.deniedCapabilityIds),allowedSourceScopes: jsonArrayMemorySourceScopeToApplicationTransform(input_.allowedSourceScopes),providerAssignments: jsonArrayAgentMemoryProviderAssignmentSettingToApplicationTransform(input_.providerAssignments)
  }!;
}export function jsonMemoryProviderInstanceIdToTransportTransform(
  input_?: MemoryProviderInstanceId | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value
  }!;
}export function jsonMemoryProviderInstanceIdToApplicationTransform(
  input_?: any,
): MemoryProviderInstanceId {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value
  }!;
}export function jsonArrayMemoryProviderInstanceIdToTransportTransform(
  items_?: Array<MemoryProviderInstanceId> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonMemoryProviderInstanceIdToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayMemoryProviderInstanceIdToApplicationTransform(
  items_?: any,
): Array<MemoryProviderInstanceId> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonMemoryProviderInstanceIdToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayAgentMemoryProviderBindingSettingToTransportTransform(
  items_?: Array<AgentMemoryProviderBindingSetting> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonAgentMemoryProviderBindingSettingToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayAgentMemoryProviderBindingSettingToApplicationTransform(
  items_?: any,
): Array<AgentMemoryProviderBindingSetting> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonAgentMemoryProviderBindingSettingToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonAgentMemoryProviderBindingSettingToTransportTransform(
  input_?: AgentMemoryProviderBindingSetting | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    alias: jsonAgentMemoryProviderAliasToTransportTransform(input_.alias),providerInstanceId: jsonMemoryProviderInstanceIdToTransportTransform(input_.providerInstanceId),includeInAutomaticContext: input_.includeInAutomaticContext,requirement: input_.requirement
  }!;
}export function jsonAgentMemoryProviderBindingSettingToApplicationTransform(
  input_?: any,
): AgentMemoryProviderBindingSetting {
  if(!input_) {
    return input_ as any;
  }
    return {
    alias: jsonAgentMemoryProviderAliasToApplicationTransform(input_.alias),providerInstanceId: jsonMemoryProviderInstanceIdToApplicationTransform(input_.providerInstanceId),includeInAutomaticContext: input_.includeInAutomaticContext,requirement: input_.requirement
  }!;
}export function jsonAgentMemoryProviderAliasToTransportTransform(
  input_?: AgentMemoryProviderAlias | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value
  }!;
}export function jsonAgentMemoryProviderAliasToApplicationTransform(
  input_?: any,
): AgentMemoryProviderAlias {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value
  }!;
}export function jsonArrayMemoryCapabilityIdToTransportTransform(
  items_?: Array<MemoryCapabilityId> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonMemoryCapabilityIdToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayMemoryCapabilityIdToApplicationTransform(
  items_?: any,
): Array<MemoryCapabilityId> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonMemoryCapabilityIdToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonMemoryCapabilityIdToTransportTransform(
  input_?: MemoryCapabilityId | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value
  }!;
}export function jsonMemoryCapabilityIdToApplicationTransform(
  input_?: any,
): MemoryCapabilityId {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value
  }!;
}export function jsonArrayMemorySourceScopeToTransportTransform(
  items_?: Array<number> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = item as any;
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayMemorySourceScopeToApplicationTransform(
  items_?: any,
): Array<number> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = item as any;
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayAgentMemoryProviderAssignmentSettingToTransportTransform(
  items_?: Array<AgentMemoryProviderAssignmentSetting> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonAgentMemoryProviderAssignmentSettingToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayAgentMemoryProviderAssignmentSettingToApplicationTransform(
  items_?: any,
): Array<AgentMemoryProviderAssignmentSetting> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonAgentMemoryProviderAssignmentSettingToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonAgentMemoryProviderAssignmentSettingToTransportTransform(
  input_?: AgentMemoryProviderAssignmentSetting | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    scope: input_.scope,key: input_.key,providerInstanceId: jsonMemoryProviderInstanceIdToTransportTransform(input_.providerInstanceId)
  }!;
}export function jsonAgentMemoryProviderAssignmentSettingToApplicationTransform(
  input_?: any,
): AgentMemoryProviderAssignmentSetting {
  if(!input_) {
    return input_ as any;
  }
    return {
    scope: input_.scope,key: input_.key,providerInstanceId: jsonMemoryProviderInstanceIdToApplicationTransform(input_.providerInstanceId)
  }!;
}export function jsonAgentChatPageBootstrapApiResponseToTransportTransform(
  input_?: AgentChatPageBootstrapApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    agents: jsonArrayAgentCatalogItemApiResponseToTransportTransform(input_.agents),initialAgentId: input_.initialAgentId,selectedAgentWorkspace: jsonAgentChatWorkspaceApiResponseToTransportTransform(input_.selectedAgentWorkspace)
  }!;
}export function jsonAgentChatPageBootstrapApiResponseToApplicationTransform(
  input_?: any,
): AgentChatPageBootstrapApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    agents: jsonArrayAgentCatalogItemApiResponseToApplicationTransform(input_.agents),initialAgentId: input_.initialAgentId,selectedAgentWorkspace: jsonAgentChatWorkspaceApiResponseToApplicationTransform(input_.selectedAgentWorkspace)
  }!;
}export function jsonArrayAgentCatalogItemApiResponseToTransportTransform(
  items_?: Array<AgentCatalogItemApiResponse> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonAgentCatalogItemApiResponseToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayAgentCatalogItemApiResponseToApplicationTransform(
  items_?: any,
): Array<AgentCatalogItemApiResponse> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonAgentCatalogItemApiResponseToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonAgentCatalogItemApiResponseToTransportTransform(
  input_?: AgentCatalogItemApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,name: input_.name,roleTitle: input_.roleTitle,summary: input_.summary,status: input_.status,model: input_.model,isTemplate: input_.isTemplate,avatarImageUrl: input_.avatarImageUrl
  }!;
}export function jsonAgentCatalogItemApiResponseToApplicationTransform(
  input_?: any,
): AgentCatalogItemApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,name: input_.name,roleTitle: input_.roleTitle,summary: input_.summary,status: input_.status,model: input_.model,isTemplate: input_.isTemplate,avatarImageUrl: input_.avatarImageUrl
  }!;
}export function jsonAgentChatWorkspaceApiResponseToTransportTransform(
  input_?: AgentChatWorkspaceApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    agentId: input_.agentId,sessions: jsonArrayAgentChatSessionSummaryApiResponseToTransportTransform(input_.sessions),selectedSession: jsonAgentChatSessionApiResponseToTransportTransform(input_.selectedSession),selectedSessionId: input_.selectedSessionId,latestRun: jsonAgentChatRunSummaryApiResponseToTransportTransform(input_.latestRun),selectedRun: jsonAgentExecutionRunApiResponseToTransportTransform(input_.selectedRun)
  }!;
}export function jsonAgentChatWorkspaceApiResponseToApplicationTransform(
  input_?: any,
): AgentChatWorkspaceApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    agentId: input_.agentId,sessions: jsonArrayAgentChatSessionSummaryApiResponseToApplicationTransform(input_.sessions),selectedSession: jsonAgentChatSessionApiResponseToApplicationTransform(input_.selectedSession),selectedSessionId: input_.selectedSessionId,latestRun: jsonAgentChatRunSummaryApiResponseToApplicationTransform(input_.latestRun),selectedRun: jsonAgentExecutionRunApiResponseToApplicationTransform(input_.selectedRun)
  }!;
}export function jsonArrayAgentChatSessionSummaryApiResponseToTransportTransform(
  items_?: Array<AgentChatSessionSummaryApiResponse> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonAgentChatSessionSummaryApiResponseToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayAgentChatSessionSummaryApiResponseToApplicationTransform(
  items_?: any,
): Array<AgentChatSessionSummaryApiResponse> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonAgentChatSessionSummaryApiResponseToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonAgentChatSessionSummaryApiResponseToTransportTransform(
  input_?: AgentChatSessionSummaryApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,agentId: input_.agentId,title: input_.title,createdAtUtc: dateRfc3339Serializer(input_.createdAtUtc),updatedAtUtc: dateRfc3339Serializer(input_.updatedAtUtc),messageCount: input_.messageCount,lastMessagePreview: input_.lastMessagePreview,pendingApprovalCount: input_.pendingApprovalCount,autoApprovePendingToolCalls: input_.autoApprovePendingToolCalls
  }!;
}export function jsonAgentChatSessionSummaryApiResponseToApplicationTransform(
  input_?: any,
): AgentChatSessionSummaryApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,agentId: input_.agentId,title: input_.title,createdAtUtc: dateDeserializer(input_.createdAtUtc)!,updatedAtUtc: dateDeserializer(input_.updatedAtUtc)!,messageCount: input_.messageCount,lastMessagePreview: input_.lastMessagePreview,pendingApprovalCount: input_.pendingApprovalCount,autoApprovePendingToolCalls: input_.autoApprovePendingToolCalls
  }!;
}export function jsonAgentChatSessionApiResponseToTransportTransform(
  input_?: AgentChatSessionApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,agentId: input_.agentId,title: input_.title,createdAtUtc: dateRfc3339Serializer(input_.createdAtUtc),updatedAtUtc: dateRfc3339Serializer(input_.updatedAtUtc),messages: jsonArrayAgentChatMessageApiResponseToTransportTransform(input_.messages),latestExecutionRunId: input_.latestExecutionRunId,pendingApprovals: jsonArrayAgentPendingApprovalApiResponseToTransportTransform(input_.pendingApprovals),autoApprovePendingToolCalls: input_.autoApprovePendingToolCalls
  }!;
}export function jsonAgentChatSessionApiResponseToApplicationTransform(
  input_?: any,
): AgentChatSessionApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,agentId: input_.agentId,title: input_.title,createdAtUtc: dateDeserializer(input_.createdAtUtc)!,updatedAtUtc: dateDeserializer(input_.updatedAtUtc)!,messages: jsonArrayAgentChatMessageApiResponseToApplicationTransform(input_.messages),latestExecutionRunId: input_.latestExecutionRunId,pendingApprovals: jsonArrayAgentPendingApprovalApiResponseToApplicationTransform(input_.pendingApprovals),autoApprovePendingToolCalls: input_.autoApprovePendingToolCalls
  }!;
}export function jsonArrayAgentChatMessageApiResponseToTransportTransform(
  items_?: Array<AgentChatMessageApiResponse> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonAgentChatMessageApiResponseToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayAgentChatMessageApiResponseToApplicationTransform(
  items_?: any,
): Array<AgentChatMessageApiResponse> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonAgentChatMessageApiResponseToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonAgentChatMessageApiResponseToTransportTransform(
  input_?: AgentChatMessageApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,role: input_.role,content: input_.content,createdAtUtc: dateRfc3339Serializer(input_.createdAtUtc)
  }!;
}export function jsonAgentChatMessageApiResponseToApplicationTransform(
  input_?: any,
): AgentChatMessageApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,role: input_.role,content: input_.content,createdAtUtc: dateDeserializer(input_.createdAtUtc)!
  }!;
}export function jsonArrayAgentPendingApprovalApiResponseToTransportTransform(
  items_?: Array<AgentPendingApprovalApiResponse> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonAgentPendingApprovalApiResponseToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayAgentPendingApprovalApiResponseToApplicationTransform(
  items_?: any,
): Array<AgentPendingApprovalApiResponse> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonAgentPendingApprovalApiResponseToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonAgentPendingApprovalApiResponseToTransportTransform(
  input_?: AgentPendingApprovalApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    approvalId: input_.approvalId,toolName: input_.toolName,toolKind: input_.toolKind
  }!;
}export function jsonAgentPendingApprovalApiResponseToApplicationTransform(
  input_?: any,
): AgentPendingApprovalApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    approvalId: input_.approvalId,toolName: input_.toolName,toolKind: input_.toolKind
  }!;
}export function jsonAgentChatRunSummaryApiResponseToTransportTransform(
  input_?: AgentChatRunSummaryApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    executionRunId: input_.executionRunId,agentId: input_.agentId,chatSessionId: input_.chatSessionId,title: input_.title,state: input_.state,phase: input_.phase,message: input_.message,outcome: input_.outcome,createdAtUtc: dateRfc3339Serializer(input_.createdAtUtc),updatedAtUtc: dateRfc3339Serializer(input_.updatedAtUtc),startedAtUtc: dateRfc3339Serializer(input_.startedAtUtc),completedAtUtc: dateRfc3339Serializer(input_.completedAtUtc),duration: input_.duration,knownCostUsd: input_.knownCostUsd,hasUnknownCost: input_.hasUnknownCost
  }!;
}export function jsonAgentChatRunSummaryApiResponseToApplicationTransform(
  input_?: any,
): AgentChatRunSummaryApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    executionRunId: input_.executionRunId,agentId: input_.agentId,chatSessionId: input_.chatSessionId,title: input_.title,state: input_.state,phase: input_.phase,message: input_.message,outcome: input_.outcome,createdAtUtc: dateDeserializer(input_.createdAtUtc)!,updatedAtUtc: dateDeserializer(input_.updatedAtUtc)!,startedAtUtc: dateDeserializer(input_.startedAtUtc)!,completedAtUtc: dateDeserializer(input_.completedAtUtc)!,duration: input_.duration,knownCostUsd: input_.knownCostUsd,hasUnknownCost: input_.hasUnknownCost
  }!;
}export function jsonAgentExecutionRunApiResponseToTransportTransform(
  input_?: AgentExecutionRunApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,agentId: input_.agentId,chatSessionId: input_.chatSessionId,title: input_.title,providerName: input_.providerName,model: input_.model,state: input_.state,outcome: input_.outcome,createdAtUtc: dateRfc3339Serializer(input_.createdAtUtc),updatedAtUtc: dateRfc3339Serializer(input_.updatedAtUtc),startedAtUtc: dateRfc3339Serializer(input_.startedAtUtc),completedAtUtc: dateRfc3339Serializer(input_.completedAtUtc),pendingApprovals: jsonArrayAgentPendingApprovalApiResponseToTransportTransform(input_.pendingApprovals),pendingApprovalCount: input_.pendingApprovalCount,autoApprovePendingToolCalls: input_.autoApprovePendingToolCalls,revision: input_.revision
  }!;
}export function jsonAgentExecutionRunApiResponseToApplicationTransform(
  input_?: any,
): AgentExecutionRunApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,agentId: input_.agentId,chatSessionId: input_.chatSessionId,title: input_.title,providerName: input_.providerName,model: input_.model,state: input_.state,outcome: input_.outcome,createdAtUtc: dateDeserializer(input_.createdAtUtc)!,updatedAtUtc: dateDeserializer(input_.updatedAtUtc)!,startedAtUtc: dateDeserializer(input_.startedAtUtc)!,completedAtUtc: dateDeserializer(input_.completedAtUtc)!,pendingApprovals: jsonArrayAgentPendingApprovalApiResponseToApplicationTransform(input_.pendingApprovals),pendingApprovalCount: input_.pendingApprovalCount,autoApprovePendingToolCalls: input_.autoApprovePendingToolCalls,revision: input_.revision
  }!;
}export function jsonAgentCloneApiRequestToTransportTransform(
  input_?: AgentCloneApiRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    cloneName: input_.cloneName
  }!;
}export function jsonAgentCloneApiRequestToApplicationTransform(
  input_?: any,
): AgentCloneApiRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    cloneName: input_.cloneName
  }!;
}export function jsonAgentTemplateConversionApiRequestToTransportTransform(
  input_?: AgentTemplateConversionApiRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    templateKey: input_.templateKey
  }!;
}export function jsonAgentTemplateConversionApiRequestToApplicationTransform(
  input_?: any,
): AgentTemplateConversionApiRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    templateKey: input_.templateKey
  }!;
}export function jsonAgentImportApiRequestToTransportTransform(
  input_?: AgentImportApiRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    packagePath: input_.packagePath
  }!;
}export function jsonAgentImportApiRequestToApplicationTransform(
  input_?: any,
): AgentImportApiRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    packagePath: input_.packagePath
  }!;
}export function jsonAgentPackageImportApiFormToTransportTransform(
  input_?: AgentPackageImportApiForm | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    package: jsonIFormFileToTransportTransform(input_.package_),mode: input_.mode,externalKey: input_.externalKey,externalNamespace: input_.externalNamespace,expectedPackageSha256: input_.expectedPackageSha256,expectedAgentVersion: dateRfc3339Serializer(input_.expectedAgentVersion)
  }!;
}export function jsonAgentPackageImportApiFormToApplicationTransform(
  input_?: any,
): AgentPackageImportApiForm {
  if(!input_) {
    return input_ as any;
  }
    return {
    package_: jsonIFormFileToApplicationTransform(input_.package),mode: input_.mode,externalKey: input_.externalKey,externalNamespace: input_.externalNamespace,expectedPackageSha256: input_.expectedPackageSha256,expectedAgentVersion: dateDeserializer(input_.expectedAgentVersion)!
  }!;
}export function jsonIFormFileToTransportTransform(
  input_?: IFormFile | null,
): any {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonIFormFileToApplicationTransform(input_?: any): IFormFile {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonAgentPackageImportReceiptToTransportTransform(
  input_?: AgentPackageImportReceipt | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    agentId: input_.agentId,mode: input_.mode,externalKey: input_.externalKey,packageSha256: input_.packageSha256,packageSchemaVersion: input_.packageSchemaVersion,importedVersion: input_.importedVersion,configurationSha256: input_.configurationSha256,unresolvedPrerequisites: jsonArrayStringToTransportTransform(input_.unresolvedPrerequisites),warnings: jsonArrayStringToTransportTransform(input_.warnings),replayed: input_.replayed,externalNamespace: input_.externalNamespace
  }!;
}export function jsonAgentPackageImportReceiptToApplicationTransform(
  input_?: any,
): AgentPackageImportReceipt {
  if(!input_) {
    return input_ as any;
  }
    return {
    agentId: input_.agentId,mode: input_.mode,externalKey: input_.externalKey,packageSha256: input_.packageSha256,packageSchemaVersion: input_.packageSchemaVersion,importedVersion: input_.importedVersion,configurationSha256: input_.configurationSha256,unresolvedPrerequisites: jsonArrayStringToApplicationTransform(input_.unresolvedPrerequisites),warnings: jsonArrayStringToApplicationTransform(input_.warnings),replayed: input_.replayed,externalNamespace: input_.externalNamespace
  }!;
}export function jsonAgentExternalProvisioningReceiptToTransportTransform(
  input_?: AgentExternalProvisioningReceipt | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    namespace: input_.namespace,key: input_.key,agentId: input_.agentId,configurationVersion: input_.configurationVersion,created: input_.created,replayed: input_.replayed,archived: input_.archived,warnings: jsonArrayStringToTransportTransform(input_.warnings)
  }!;
}export function jsonAgentExternalProvisioningReceiptToApplicationTransform(
  input_?: any,
): AgentExternalProvisioningReceipt {
  if(!input_) {
    return input_ as any;
  }
    return {
    namespace: input_.namespace,key: input_.key,agentId: input_.agentId,configurationVersion: input_.configurationVersion,created: input_.created,replayed: input_.replayed,archived: input_.archived,warnings: jsonArrayStringToApplicationTransform(input_.warnings)
  }!;
}export function jsonAgentExternalProvisioningResourceToTransportTransform(
  input_?: AgentExternalProvisioningResource | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    namespace: input_.namespace,key: input_.key,agentId: input_.agentId,configurationVersion: input_.configurationVersion,isArchived: input_.isArchived,updatedAtUtc: dateRfc3339Serializer(input_.updatedAtUtc)
  }!;
}export function jsonAgentExternalProvisioningResourceToApplicationTransform(
  input_?: any,
): AgentExternalProvisioningResource {
  if(!input_) {
    return input_ as any;
  }
    return {
    namespace: input_.namespace,key: input_.key,agentId: input_.agentId,configurationVersion: input_.configurationVersion,isArchived: input_.isArchived,updatedAtUtc: dateDeserializer(input_.updatedAtUtc)!
  }!;
}export function jsonAgentTeamEditorModelToTransportTransform(
  input_?: AgentTeamEditorModel | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,name: input_.name,description: input_.description,icon: input_.icon,agentIds: jsonArrayStringToTransportTransform(input_.agentIds)
  }!;
}export function jsonAgentTeamEditorModelToApplicationTransform(
  input_?: any,
): AgentTeamEditorModel {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,name: input_.name,description: input_.description,icon: input_.icon,agentIds: jsonArrayStringToApplicationTransform(input_.agentIds)
  }!;
}export function jsonAgentTeamMembersApiRequestToTransportTransform(
  input_?: AgentTeamMembersApiRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    agentIds: jsonArrayStringToTransportTransform(input_.agentIds)
  }!;
}export function jsonAgentTeamMembersApiRequestToApplicationTransform(
  input_?: any,
): AgentTeamMembersApiRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    agentIds: jsonArrayStringToApplicationTransform(input_.agentIds)
  }!;
}export function jsonArrayProviderProfileToTransportTransform(
  items_?: Array<ProviderProfile> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProviderProfileToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayProviderProfileToApplicationTransform(
  items_?: any,
): Array<ProviderProfile> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProviderProfileToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProviderProfileToTransportTransform(
  input_?: ProviderProfile | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,name: input_.name,kind: input_.kind,baseUrl: input_.baseUrl,apiKeyEnvironmentVariable: input_.apiKeyEnvironmentVariable,defaultModel: input_.defaultModel,transport: input_.transport,isEnabled: input_.isEnabled,supportsStreaming: input_.supportsStreaming,supportsTools: input_.supportsTools,preferFrameworkManagedChatHistory: input_.preferFrameworkManagedChatHistory,supportsBackgroundResponses: input_.supportsBackgroundResponses,configurationJson: input_.configurationJson,notes: input_.notes,healthStatus: input_.healthStatus,lastCheckedAtUtc: dateRfc3339Serializer(input_.lastCheckedAtUtc),suggestedModels: jsonArrayStringToTransportTransform(input_.suggestedModels),purpose: input_.purpose,isPrivateProvider: input_.isPrivateProvider,modelPrices: jsonArrayProviderModelTokenPriceToTransportTransform(input_.modelPrices),tags: jsonArrayStringToTransportTransform(input_.tags),modelThinkingEffortCapabilities: jsonArrayProviderModelThinkingEffortCapabilityToTransportTransform(input_.modelThinkingEffortCapabilities)
  }!;
}export function jsonProviderProfileToApplicationTransform(
  input_?: any,
): ProviderProfile {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,name: input_.name,kind: input_.kind,baseUrl: input_.baseUrl,apiKeyEnvironmentVariable: input_.apiKeyEnvironmentVariable,defaultModel: input_.defaultModel,transport: input_.transport,isEnabled: input_.isEnabled,supportsStreaming: input_.supportsStreaming,supportsTools: input_.supportsTools,preferFrameworkManagedChatHistory: input_.preferFrameworkManagedChatHistory,supportsBackgroundResponses: input_.supportsBackgroundResponses,configurationJson: input_.configurationJson,notes: input_.notes,healthStatus: input_.healthStatus,lastCheckedAtUtc: dateDeserializer(input_.lastCheckedAtUtc)!,suggestedModels: jsonArrayStringToApplicationTransform(input_.suggestedModels),purpose: input_.purpose,isPrivateProvider: input_.isPrivateProvider,modelPrices: jsonArrayProviderModelTokenPriceToApplicationTransform(input_.modelPrices),tags: jsonArrayStringToApplicationTransform(input_.tags),modelThinkingEffortCapabilities: jsonArrayProviderModelThinkingEffortCapabilityToApplicationTransform(input_.modelThinkingEffortCapabilities)
  }!;
}export function jsonArrayProviderModelTokenPriceToTransportTransform(
  items_?: Array<ProviderModelTokenPrice> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProviderModelTokenPriceToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayProviderModelTokenPriceToApplicationTransform(
  items_?: any,
): Array<ProviderModelTokenPrice> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProviderModelTokenPriceToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProviderModelTokenPriceToTransportTransform(
  input_?: ProviderModelTokenPrice | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    model: input_.model,inputPerMillionTokensUsd: input_.inputPerMillionTokensUsd,cachedInputPerMillionTokensUsd: input_.cachedInputPerMillionTokensUsd,outputPerMillionTokensUsd: input_.outputPerMillionTokensUsd,cacheWritePerMillionTokensUsd: input_.cacheWritePerMillionTokensUsd,longContextThresholdTokens: input_.longContextThresholdTokens,longContextInputPerMillionTokensUsd: input_.longContextInputPerMillionTokensUsd,longContextCachedInputPerMillionTokensUsd: input_.longContextCachedInputPerMillionTokensUsd,longContextCacheWritePerMillionTokensUsd: input_.longContextCacheWritePerMillionTokensUsd,longContextOutputPerMillionTokensUsd: input_.longContextOutputPerMillionTokensUsd,hasConfiguredStandardPrice: input_.hasConfiguredStandardPrice
  }!;
}export function jsonProviderModelTokenPriceToApplicationTransform(
  input_?: any,
): ProviderModelTokenPrice {
  if(!input_) {
    return input_ as any;
  }
    return {
    model: input_.model,inputPerMillionTokensUsd: input_.inputPerMillionTokensUsd,cachedInputPerMillionTokensUsd: input_.cachedInputPerMillionTokensUsd,outputPerMillionTokensUsd: input_.outputPerMillionTokensUsd,cacheWritePerMillionTokensUsd: input_.cacheWritePerMillionTokensUsd,longContextThresholdTokens: input_.longContextThresholdTokens,longContextInputPerMillionTokensUsd: input_.longContextInputPerMillionTokensUsd,longContextCachedInputPerMillionTokensUsd: input_.longContextCachedInputPerMillionTokensUsd,longContextCacheWritePerMillionTokensUsd: input_.longContextCacheWritePerMillionTokensUsd,longContextOutputPerMillionTokensUsd: input_.longContextOutputPerMillionTokensUsd,hasConfiguredStandardPrice: input_.hasConfiguredStandardPrice
  }!;
}export function jsonArrayProviderModelThinkingEffortCapabilityToTransportTransform(
  items_?: Array<ProviderModelThinkingEffortCapability> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProviderModelThinkingEffortCapabilityToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayProviderModelThinkingEffortCapabilityToApplicationTransform(
  items_?: any,
): Array<ProviderModelThinkingEffortCapability> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProviderModelThinkingEffortCapabilityToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProviderModelThinkingEffortCapabilityToTransportTransform(
  input_?: ProviderModelThinkingEffortCapability | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    model: input_.model,status: input_.status,source: input_.source,allowedEfforts: jsonArrayAgentReasoningEffortLevelToTransportTransform(input_.allowedEfforts),modelFamily: input_.modelFamily,summary: input_.summary,controlMode: input_.controlMode
  }!;
}export function jsonProviderModelThinkingEffortCapabilityToApplicationTransform(
  input_?: any,
): ProviderModelThinkingEffortCapability {
  if(!input_) {
    return input_ as any;
  }
    return {
    model: input_.model,status: input_.status,source: input_.source,allowedEfforts: jsonArrayAgentReasoningEffortLevelToApplicationTransform(input_.allowedEfforts),modelFamily: input_.modelFamily,summary: input_.summary,controlMode: input_.controlMode
  }!;
}export function jsonArrayAgentReasoningEffortLevelToTransportTransform(
  items_?: Array<number> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = item as any;
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayAgentReasoningEffortLevelToApplicationTransform(
  items_?: any,
): Array<number> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = item as any;
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProviderProfileEditorModelToTransportTransform(
  input_?: ProviderProfileEditorModel | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,name: input_.name,kind: input_.kind,baseUrl: input_.baseUrl,apiKeyEnvironmentVariable: input_.apiKeyEnvironmentVariable,defaultModel: input_.defaultModel,transport: input_.transport,purpose: input_.purpose,isEnabled: input_.isEnabled,supportsStreaming: input_.supportsStreaming,supportsTools: input_.supportsTools,preferFrameworkManagedChatHistory: input_.preferFrameworkManagedChatHistory,supportsBackgroundResponses: input_.supportsBackgroundResponses,configurationJson: input_.configurationJson,notes: input_.notes,isPrivateProvider: input_.isPrivateProvider,suggestedModels: jsonArrayStringToTransportTransform(input_.suggestedModels),modelPrices: jsonArrayProviderModelTokenPriceEditorModelToTransportTransform(input_.modelPrices),tags: jsonArrayStringToTransportTransform(input_.tags),modelThinkingEffortCapabilities: jsonArrayProviderModelThinkingEffortCapabilityToTransportTransform(input_.modelThinkingEffortCapabilities)
  }!;
}export function jsonProviderProfileEditorModelToApplicationTransform(
  input_?: any,
): ProviderProfileEditorModel {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,name: input_.name,kind: input_.kind,baseUrl: input_.baseUrl,apiKeyEnvironmentVariable: input_.apiKeyEnvironmentVariable,defaultModel: input_.defaultModel,transport: input_.transport,purpose: input_.purpose,isEnabled: input_.isEnabled,supportsStreaming: input_.supportsStreaming,supportsTools: input_.supportsTools,preferFrameworkManagedChatHistory: input_.preferFrameworkManagedChatHistory,supportsBackgroundResponses: input_.supportsBackgroundResponses,configurationJson: input_.configurationJson,notes: input_.notes,isPrivateProvider: input_.isPrivateProvider,suggestedModels: jsonArrayStringToApplicationTransform(input_.suggestedModels),modelPrices: jsonArrayProviderModelTokenPriceEditorModelToApplicationTransform(input_.modelPrices),tags: jsonArrayStringToApplicationTransform(input_.tags),modelThinkingEffortCapabilities: jsonArrayProviderModelThinkingEffortCapabilityToApplicationTransform(input_.modelThinkingEffortCapabilities)
  }!;
}export function jsonArrayProviderModelTokenPriceEditorModelToTransportTransform(
  items_?: Array<ProviderModelTokenPriceEditorModel> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProviderModelTokenPriceEditorModelToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayProviderModelTokenPriceEditorModelToApplicationTransform(
  items_?: any,
): Array<ProviderModelTokenPriceEditorModel> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProviderModelTokenPriceEditorModelToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProviderModelTokenPriceEditorModelToTransportTransform(
  input_?: ProviderModelTokenPriceEditorModel | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    model: input_.model,inputPerMillionTokensUsd: input_.inputPerMillionTokensUsd,cachedInputPerMillionTokensUsd: input_.cachedInputPerMillionTokensUsd,outputPerMillionTokensUsd: input_.outputPerMillionTokensUsd,cacheWritePerMillionTokensUsd: input_.cacheWritePerMillionTokensUsd,longContextThresholdTokens: input_.longContextThresholdTokens,longContextInputPerMillionTokensUsd: input_.longContextInputPerMillionTokensUsd,longContextCachedInputPerMillionTokensUsd: input_.longContextCachedInputPerMillionTokensUsd,longContextCacheWritePerMillionTokensUsd: input_.longContextCacheWritePerMillionTokensUsd,longContextOutputPerMillionTokensUsd: input_.longContextOutputPerMillionTokensUsd
  }!;
}export function jsonProviderModelTokenPriceEditorModelToApplicationTransform(
  input_?: any,
): ProviderModelTokenPriceEditorModel {
  if(!input_) {
    return input_ as any;
  }
    return {
    model: input_.model,inputPerMillionTokensUsd: input_.inputPerMillionTokensUsd,cachedInputPerMillionTokensUsd: input_.cachedInputPerMillionTokensUsd,outputPerMillionTokensUsd: input_.outputPerMillionTokensUsd,cacheWritePerMillionTokensUsd: input_.cacheWritePerMillionTokensUsd,longContextThresholdTokens: input_.longContextThresholdTokens,longContextInputPerMillionTokensUsd: input_.longContextInputPerMillionTokensUsd,longContextCachedInputPerMillionTokensUsd: input_.longContextCachedInputPerMillionTokensUsd,longContextCacheWritePerMillionTokensUsd: input_.longContextCacheWritePerMillionTokensUsd,longContextOutputPerMillionTokensUsd: input_.longContextOutputPerMillionTokensUsd
  }!;
}export function jsonProviderTestChatRequestToTransportTransform(
  input_?: ProviderTestChatRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    model: input_.model,systemPrompt: input_.systemPrompt,messages: jsonArrayProviderTestChatMessageToTransportTransform(input_.messages),prompt: input_.prompt
  }!;
}export function jsonProviderTestChatRequestToApplicationTransform(
  input_?: any,
): ProviderTestChatRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    model: input_.model,systemPrompt: input_.systemPrompt,messages: jsonArrayProviderTestChatMessageToApplicationTransform(input_.messages),prompt: input_.prompt
  }!;
}export function jsonArrayProviderTestChatMessageToTransportTransform(
  items_?: Array<ProviderTestChatMessage> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProviderTestChatMessageToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayProviderTestChatMessageToApplicationTransform(
  items_?: any,
): Array<ProviderTestChatMessage> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProviderTestChatMessageToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProviderTestChatMessageToTransportTransform(
  input_?: ProviderTestChatMessage | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    role: input_.role,content: input_.content,createdAtUtc: dateRfc3339Serializer(input_.createdAtUtc)
  }!;
}export function jsonProviderTestChatMessageToApplicationTransform(
  input_?: any,
): ProviderTestChatMessage {
  if(!input_) {
    return input_ as any;
  }
    return {
    role: input_.role,content: input_.content,createdAtUtc: dateDeserializer(input_.createdAtUtc)!
  }!;
}export function jsonProviderModelMaintenanceEditorRequestToTransportTransform(
  input_?: ProviderModelMaintenanceEditorRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    baseModel: input_.baseModel,targetModel: input_.targetModel,systemPrompt: input_.systemPrompt,contextLength: input_.contextLength
  }!;
}export function jsonProviderModelMaintenanceEditorRequestToApplicationTransform(
  input_?: any,
): ProviderModelMaintenanceEditorRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    baseModel: input_.baseModel,targetModel: input_.targetModel,systemPrompt: input_.systemPrompt,contextLength: input_.contextLength
  }!;
}export function jsonCapabilityEditorModelToTransportTransform(
  input_?: CapabilityEditorModel | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,expectedFingerprint: input_.expectedFingerprint,kind: input_.kind,key: input_.key,name: input_.name,description: input_.description,endpointOrPath: input_.endpointOrPath,configurationJson: input_.configurationJson,isBuiltIn: input_.isBuiltIn,tags: jsonArrayStringToTransportTransform(input_.tags)
  }!;
}export function jsonCapabilityEditorModelToApplicationTransform(
  input_?: any,
): CapabilityEditorModel {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,expectedFingerprint: input_.expectedFingerprint,kind: input_.kind,key: input_.key,name: input_.name,description: input_.description,endpointOrPath: input_.endpointOrPath,configurationJson: input_.configurationJson,isBuiltIn: input_.isBuiltIn,tags: jsonArrayStringToApplicationTransform(input_.tags)
  }!;
}export function jsonCapabilityToolSetupTestRequestToTransportTransform(
  input_?: CapabilityToolSetupTestRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    capability: jsonCapabilityEditorModelToTransportTransform(input_.capability),jsonInput: input_.jsonInput,correlationId: input_.correlationId
  }!;
}export function jsonCapabilityToolSetupTestRequestToApplicationTransform(
  input_?: any,
): CapabilityToolSetupTestRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    capability: jsonCapabilityEditorModelToApplicationTransform(input_.capability),jsonInput: input_.jsonInput,correlationId: input_.correlationId
  }!;
}export function jsonCapabilityMcpSetupTestRequestToTransportTransform(
  input_?: CapabilityMcpSetupTestRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    capability: jsonCapabilityEditorModelToTransportTransform(input_.capability),correlationId: input_.correlationId
  }!;
}export function jsonCapabilityMcpSetupTestRequestToApplicationTransform(
  input_?: any,
): CapabilityMcpSetupTestRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    capability: jsonCapabilityEditorModelToApplicationTransform(input_.capability),correlationId: input_.correlationId
  }!;
}export function jsonCapabilityAccessPreviewRequestToTransportTransform(
  input_?: CapabilityAccessPreviewRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    capabilityIds: jsonArrayStringToTransportTransform(input_.capabilityIds),draftCapabilities: jsonArrayCapabilityEditorModelToTransportTransform(input_.draftCapabilities),policy: jsonCapabilityAccessPolicyTemplateDtoToTransportTransform(input_.policy),requiredCapabilities: jsonArrayCapabilityIdentityEditorModelToTransportTransform(input_.requiredCapabilities),correlationId: input_.correlationId
  }!;
}export function jsonCapabilityAccessPreviewRequestToApplicationTransform(
  input_?: any,
): CapabilityAccessPreviewRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    capabilityIds: jsonArrayStringToApplicationTransform(input_.capabilityIds),draftCapabilities: jsonArrayCapabilityEditorModelToApplicationTransform(input_.draftCapabilities),policy: jsonCapabilityAccessPolicyTemplateDtoToApplicationTransform(input_.policy),requiredCapabilities: jsonArrayCapabilityIdentityEditorModelToApplicationTransform(input_.requiredCapabilities),correlationId: input_.correlationId
  }!;
}export function jsonArrayCapabilityEditorModelToTransportTransform(
  items_?: Array<CapabilityEditorModel> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonCapabilityEditorModelToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayCapabilityEditorModelToApplicationTransform(
  items_?: any,
): Array<CapabilityEditorModel> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonCapabilityEditorModelToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonCapabilityAccessPolicyTemplateDtoToTransportTransform(
  input_?: CapabilityAccessPolicyTemplateDto | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    defaultEffect: input_.defaultEffect,rules: jsonArrayCapabilityAccessRuleTemplateDtoToTransportTransform(input_.rules)
  }!;
}export function jsonCapabilityAccessPolicyTemplateDtoToApplicationTransform(
  input_?: any,
): CapabilityAccessPolicyTemplateDto {
  if(!input_) {
    return input_ as any;
  }
    return {
    defaultEffect: input_.defaultEffect,rules: jsonArrayCapabilityAccessRuleTemplateDtoToApplicationTransform(input_.rules)
  }!;
}export function jsonArrayCapabilityAccessRuleTemplateDtoToTransportTransform(
  items_?: Array<CapabilityAccessRuleTemplateDto> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonCapabilityAccessRuleTemplateDtoToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayCapabilityAccessRuleTemplateDtoToApplicationTransform(
  items_?: any,
): Array<CapabilityAccessRuleTemplateDto> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonCapabilityAccessRuleTemplateDtoToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonCapabilityAccessRuleTemplateDtoToTransportTransform(
  input_?: CapabilityAccessRuleTemplateDto | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,effect: input_.effect,scope: input_.scope,selector: jsonCapabilitySelectorTemplateDtoToTransportTransform(input_.selector),reason: input_.reason
  }!;
}export function jsonCapabilityAccessRuleTemplateDtoToApplicationTransform(
  input_?: any,
): CapabilityAccessRuleTemplateDto {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,effect: input_.effect,scope: input_.scope,selector: jsonCapabilitySelectorTemplateDtoToApplicationTransform(input_.selector),reason: input_.reason
  }!;
}export function jsonCapabilitySelectorTemplateDtoToTransportTransform(
  input_?: CapabilitySelectorTemplateDto | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: input_.kind,value: input_.value,serverKey: input_.serverKey
  }!;
}export function jsonCapabilitySelectorTemplateDtoToApplicationTransform(
  input_?: any,
): CapabilitySelectorTemplateDto {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: input_.kind,value: input_.value,serverKey: input_.serverKey
  }!;
}export function jsonArrayCapabilityIdentityEditorModelToTransportTransform(
  items_?: Array<CapabilityIdentityEditorModel> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonCapabilityIdentityEditorModelToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayCapabilityIdentityEditorModelToApplicationTransform(
  items_?: any,
): Array<CapabilityIdentityEditorModel> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonCapabilityIdentityEditorModelToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonCapabilityIdentityEditorModelToTransportTransform(
  input_?: CapabilityIdentityEditorModel | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: input_.kind,key: input_.key
  }!;
}export function jsonCapabilityIdentityEditorModelToApplicationTransform(
  input_?: any,
): CapabilityIdentityEditorModel {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: input_.kind,key: input_.key
  }!;
}export function jsonMemoryEditorModelToTransportTransform(
  input_?: MemoryEditorModel | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,agentId: input_.agentId,kind: input_.kind,title: input_.title,content: input_.content,source: input_.source,importance: input_.importance,metadataJson: input_.metadataJson
  }!;
}export function jsonMemoryEditorModelToApplicationTransform(
  input_?: any,
): MemoryEditorModel {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,agentId: input_.agentId,kind: input_.kind,title: input_.title,content: input_.content,source: input_.source,importance: input_.importance,metadataJson: input_.metadataJson
  }!;
}export function jsonArrayAgentChatSessionApiResponseToTransportTransform(
  items_?: Array<AgentChatSessionApiResponse> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonAgentChatSessionApiResponseToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayAgentChatSessionApiResponseToApplicationTransform(
  items_?: any,
): Array<AgentChatSessionApiResponse> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonAgentChatSessionApiResponseToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonChatSessionRenameApiRequestToTransportTransform(
  input_?: ChatSessionRenameApiRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    title: input_.title
  }!;
}export function jsonChatSessionRenameApiRequestToApplicationTransform(
  input_?: any,
): ChatSessionRenameApiRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    title: input_.title
  }!;
}export function jsonAgentChatApiRequestToTransportTransform(
  input_?: AgentChatApiRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    chatSessionId: input_.chatSessionId,prompt: input_.prompt,attachmentPaths: jsonArrayStringToTransportTransform(input_.attachmentPaths),activityOperationId: input_.activityOperationId
  }!;
}export function jsonAgentChatApiRequestToApplicationTransform(
  input_?: any,
): AgentChatApiRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    chatSessionId: input_.chatSessionId,prompt: input_.prompt,attachmentPaths: jsonArrayStringToApplicationTransform(input_.attachmentPaths),activityOperationId: input_.activityOperationId
  }!;
}export function jsonAgentChatRunApiResponseToTransportTransform(
  input_?: AgentChatRunApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    chatSessionId: input_.chatSessionId,assistantMessage: jsonAgentChatMessageApiResponseToTransportTransform(input_.assistantMessage),metric: jsonAgentRunMetricApiResponseToTransportTransform(input_.metric),executionRunId: input_.executionRunId,state: input_.state
  }!;
}export function jsonAgentChatRunApiResponseToApplicationTransform(
  input_?: any,
): AgentChatRunApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    chatSessionId: input_.chatSessionId,assistantMessage: jsonAgentChatMessageApiResponseToApplicationTransform(input_.assistantMessage),metric: jsonAgentRunMetricApiResponseToApplicationTransform(input_.metric),executionRunId: input_.executionRunId,state: input_.state
  }!;
}export function jsonAgentRunMetricApiResponseToTransportTransform(
  input_?: AgentRunMetricApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,createdAtUtc: dateRfc3339Serializer(input_.createdAtUtc),outcome: input_.outcome,providerName: input_.providerName,model: input_.model,durationMs: input_.durationMs,inputTokens: input_.inputTokens,cachedInputTokens: input_.cachedInputTokens,cacheWriteTokens: input_.cacheWriteTokens,outputTokens: input_.outputTokens,toolCalls: input_.toolCalls,costUsd: input_.costUsd
  }!;
}export function jsonAgentRunMetricApiResponseToApplicationTransform(
  input_?: any,
): AgentRunMetricApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,createdAtUtc: dateDeserializer(input_.createdAtUtc)!,outcome: input_.outcome,providerName: input_.providerName,model: input_.model,durationMs: input_.durationMs,inputTokens: input_.inputTokens,cachedInputTokens: input_.cachedInputTokens,cacheWriteTokens: input_.cacheWriteTokens,outputTokens: input_.outputTokens,toolCalls: input_.toolCalls,costUsd: input_.costUsd
  }!;
}export function jsonPendingApprovalApiRequestToTransportTransform(
  input_?: PendingApprovalApiRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    approved: input_.approved,autoApprovePendingToolCalls: input_.autoApprovePendingToolCalls,activityOperationId: input_.activityOperationId,decisions: jsonArrayPendingApprovalDecisionApiRequestToTransportTransform(input_.decisions)
  }!;
}export function jsonPendingApprovalApiRequestToApplicationTransform(
  input_?: any,
): PendingApprovalApiRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    approved: input_.approved,autoApprovePendingToolCalls: input_.autoApprovePendingToolCalls,activityOperationId: input_.activityOperationId,decisions: jsonArrayPendingApprovalDecisionApiRequestToApplicationTransform(input_.decisions)
  }!;
}export function jsonArrayPendingApprovalDecisionApiRequestToTransportTransform(
  items_?: Array<PendingApprovalDecisionApiRequest> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonPendingApprovalDecisionApiRequestToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayPendingApprovalDecisionApiRequestToApplicationTransform(
  items_?: any,
): Array<PendingApprovalDecisionApiRequest> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonPendingApprovalDecisionApiRequestToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonPendingApprovalDecisionApiRequestToTransportTransform(
  input_?: PendingApprovalDecisionApiRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    approvalId: input_.approvalId,approved: input_.approved
  }!;
}export function jsonPendingApprovalDecisionApiRequestToApplicationTransform(
  input_?: any,
): PendingApprovalDecisionApiRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    approvalId: input_.approvalId,approved: input_.approved
  }!;
}export function jsonAgentExecutionRunResultApiResponseToTransportTransform(
  input_?: AgentExecutionRunResultApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    executionRunId: input_.executionRunId,chatSessionId: input_.chatSessionId,responseText: input_.responseText,assistantMessage: jsonAgentChatMessageApiResponseToTransportTransform(input_.assistantMessage),metric: jsonAgentRunMetricApiResponseToTransportTransform(input_.metric),state: input_.state,structuredOutput: jsonAgentStructuredOutputApiResponseToTransportTransform(input_.structuredOutput)
  }!;
}export function jsonAgentExecutionRunResultApiResponseToApplicationTransform(
  input_?: any,
): AgentExecutionRunResultApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    executionRunId: input_.executionRunId,chatSessionId: input_.chatSessionId,responseText: input_.responseText,assistantMessage: jsonAgentChatMessageApiResponseToApplicationTransform(input_.assistantMessage),metric: jsonAgentRunMetricApiResponseToApplicationTransform(input_.metric),state: input_.state,structuredOutput: jsonAgentStructuredOutputApiResponseToApplicationTransform(input_.structuredOutput)
  }!;
}export function jsonAgentStructuredOutputApiResponseToTransportTransform(
  input_?: AgentStructuredOutputApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    data: input_.data,validationStatus: jsonAgentJsonSchemaOutputValidationStatusToTransportTransform(input_.validationStatus),validationErrors: jsonArrayAgentStructuredOutputValidationErrorApiResponseToTransportTransform(input_.validationErrors)
  }!;
}export function jsonAgentStructuredOutputApiResponseToApplicationTransform(
  input_?: any,
): AgentStructuredOutputApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    data: input_.data,validationStatus: jsonAgentJsonSchemaOutputValidationStatusToApplicationTransform(input_.validationStatus),validationErrors: jsonArrayAgentStructuredOutputValidationErrorApiResponseToApplicationTransform(input_.validationErrors)
  }!;
}export function jsonAgentJsonSchemaOutputValidationStatusToTransportTransform(
  input_?: AgentJsonSchemaOutputValidationStatus | null,
): any {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonAgentJsonSchemaOutputValidationStatusToApplicationTransform(
  input_?: any,
): AgentJsonSchemaOutputValidationStatus {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonArrayAgentStructuredOutputValidationErrorApiResponseToTransportTransform(
  items_?: Array<AgentStructuredOutputValidationErrorApiResponse> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonAgentStructuredOutputValidationErrorApiResponseToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayAgentStructuredOutputValidationErrorApiResponseToApplicationTransform(
  items_?: any,
): Array<AgentStructuredOutputValidationErrorApiResponse> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonAgentStructuredOutputValidationErrorApiResponseToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonAgentStructuredOutputValidationErrorApiResponseToTransportTransform(
  input_?: AgentStructuredOutputValidationErrorApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    code: input_.code,message: input_.message,path: input_.path
  }!;
}export function jsonAgentStructuredOutputValidationErrorApiResponseToApplicationTransform(
  input_?: any,
): AgentStructuredOutputValidationErrorApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    code: input_.code,message: input_.message,path: input_.path
  }!;
}export function jsonArrayAgentExecutionRunApiResponseToTransportTransform(
  items_?: Array<AgentExecutionRunApiResponse> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonAgentExecutionRunApiResponseToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayAgentExecutionRunApiResponseToApplicationTransform(
  items_?: any,
): Array<AgentExecutionRunApiResponse> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonAgentExecutionRunApiResponseToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonAgentExecutionRunApiRequestToTransportTransform(
  input_?: AgentExecutionRunApiRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    agentId: input_.agentId,prompt: input_.prompt,chatSessionId: input_.chatSessionId,context: jsonExecutionInvocationContextToTransportTransform(input_.context),autoApprovePendingToolCalls: input_.autoApprovePendingToolCalls,structuredOutput: jsonAgentJsonSchemaOutputContractToTransportTransform(input_.structuredOutput),inputAttachmentPaths: jsonArrayStringToTransportTransform(input_.inputAttachmentPaths),activityOperationId: input_.activityOperationId
  }!;
}export function jsonAgentExecutionRunApiRequestToApplicationTransform(
  input_?: any,
): AgentExecutionRunApiRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    agentId: input_.agentId,prompt: input_.prompt,chatSessionId: input_.chatSessionId,context: jsonExecutionInvocationContextToApplicationTransform(input_.context),autoApprovePendingToolCalls: input_.autoApprovePendingToolCalls,structuredOutput: jsonAgentJsonSchemaOutputContractToApplicationTransform(input_.structuredOutput),inputAttachmentPaths: jsonArrayStringToApplicationTransform(input_.inputAttachmentPaths),activityOperationId: input_.activityOperationId
  }!;
}export function jsonExecutionInvocationContextToTransportTransform(
  input_?: ExecutionInvocationContext | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    sourceKind: input_.sourceKind,sourceId: input_.sourceId,correlationId: input_.correlationId,causationId: input_.causationId,requestedBy: input_.requestedBy,requestedByKind: input_.requestedByKind,metadataJson: input_.metadataJson,processRunId: input_.processRunId,processStepId: input_.processStepId,schedulerRunId: input_.schedulerRunId,messageId: input_.messageId,policy: jsonExecutionInvocationPolicyToTransportTransform(input_.policy)
  }!;
}export function jsonExecutionInvocationContextToApplicationTransform(
  input_?: any,
): ExecutionInvocationContext {
  if(!input_) {
    return input_ as any;
  }
    return {
    sourceKind: input_.sourceKind,sourceId: input_.sourceId,correlationId: input_.correlationId,causationId: input_.causationId,requestedBy: input_.requestedBy,requestedByKind: input_.requestedByKind,metadataJson: input_.metadataJson,processRunId: input_.processRunId,processStepId: input_.processStepId,schedulerRunId: input_.schedulerRunId,messageId: input_.messageId,policy: jsonExecutionInvocationPolicyToApplicationTransform(input_.policy)
  }!;
}export function jsonExecutionInvocationPolicyToTransportTransform(
  input_?: ExecutionInvocationPolicy | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    finalizerMode: jsonAgentFinalizerModeToTransportTransform(input_.finalizerMode),maxStructuredOutputRepairAttempts: input_.maxStructuredOutputRepairAttempts,requireStructuredOutputValidation: input_.requireStructuredOutputValidation,allowRequiredFinalizerStructuredOutputRecovery: input_.allowRequiredFinalizerStructuredOutputRecovery
  }!;
}export function jsonExecutionInvocationPolicyToApplicationTransform(
  input_?: any,
): ExecutionInvocationPolicy {
  if(!input_) {
    return input_ as any;
  }
    return {
    finalizerMode: jsonAgentFinalizerModeToApplicationTransform(input_.finalizerMode),maxStructuredOutputRepairAttempts: input_.maxStructuredOutputRepairAttempts,requireStructuredOutputValidation: input_.requireStructuredOutputValidation,allowRequiredFinalizerStructuredOutputRecovery: input_.allowRequiredFinalizerStructuredOutputRecovery
  }!;
}export function jsonAgentFinalizerModeToTransportTransform(
  input_?: AgentFinalizerMode | null,
): any {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonAgentFinalizerModeToApplicationTransform(
  input_?: any,
): AgentFinalizerMode {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonAgentJsonSchemaOutputContractToTransportTransform(
  input_?: AgentJsonSchemaOutputContract | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: input_.kind,version: input_.version,name: input_.name,schema: input_.schema,strict: input_.strict
  }!;
}export function jsonAgentJsonSchemaOutputContractToApplicationTransform(
  input_?: any,
): AgentJsonSchemaOutputContract {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: input_.kind,version: input_.version,name: input_.name,schema: input_.schema,strict: input_.strict
  }!;
}export function jsonAgentExecutionRunStartApiRequestToTransportTransform(
  input_?: AgentExecutionRunStartApiRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    prompt: input_.prompt,chatSessionId: input_.chatSessionId,context: jsonExecutionInvocationContextToTransportTransform(input_.context),autoApprovePendingToolCalls: input_.autoApprovePendingToolCalls,structuredOutput: jsonAgentJsonSchemaOutputContractToTransportTransform(input_.structuredOutput),inputAttachmentPaths: jsonArrayStringToTransportTransform(input_.inputAttachmentPaths),activityOperationId: input_.activityOperationId
  }!;
}export function jsonAgentExecutionRunStartApiRequestToApplicationTransform(
  input_?: any,
): AgentExecutionRunStartApiRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    prompt: input_.prompt,chatSessionId: input_.chatSessionId,context: jsonExecutionInvocationContextToApplicationTransform(input_.context),autoApprovePendingToolCalls: input_.autoApprovePendingToolCalls,structuredOutput: jsonAgentJsonSchemaOutputContractToApplicationTransform(input_.structuredOutput),inputAttachmentPaths: jsonArrayStringToApplicationTransform(input_.inputAttachmentPaths),activityOperationId: input_.activityOperationId
  }!;
}export function jsonAgentExecutionRunDetailApiResponseToTransportTransform(
  input_?: AgentExecutionRunDetailApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    run: jsonAgentExecutionRunApiResponseToTransportTransform(input_.run),chatSession: jsonAgentChatSessionApiResponseToTransportTransform(input_.chatSession),executionLog: jsonArrayAgentExecutionLogApiResponseToTransportTransform(input_.executionLog),metrics: jsonArrayAgentRunMetricApiResponseToTransportTransform(input_.metrics),approvals: jsonArrayAgentExecutionApprovalApiResponseToTransportTransform(input_.approvals),artifacts: jsonArrayAgentExecutionArtifactApiResponseToTransportTransform(input_.artifacts),checkpoints: jsonArrayAgentExecutionCheckpointApiResponseToTransportTransform(input_.checkpoints),toolReceipts: jsonArrayAgentExecutionToolReceiptApiResponseToTransportTransform(input_.toolReceipts),usageTotals: jsonAgentProviderUsageTotalsApiResponseToTransportTransform(input_.usageTotals)
  }!;
}export function jsonAgentExecutionRunDetailApiResponseToApplicationTransform(
  input_?: any,
): AgentExecutionRunDetailApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    run: jsonAgentExecutionRunApiResponseToApplicationTransform(input_.run),chatSession: jsonAgentChatSessionApiResponseToApplicationTransform(input_.chatSession),executionLog: jsonArrayAgentExecutionLogApiResponseToApplicationTransform(input_.executionLog),metrics: jsonArrayAgentRunMetricApiResponseToApplicationTransform(input_.metrics),approvals: jsonArrayAgentExecutionApprovalApiResponseToApplicationTransform(input_.approvals),artifacts: jsonArrayAgentExecutionArtifactApiResponseToApplicationTransform(input_.artifacts),checkpoints: jsonArrayAgentExecutionCheckpointApiResponseToApplicationTransform(input_.checkpoints),toolReceipts: jsonArrayAgentExecutionToolReceiptApiResponseToApplicationTransform(input_.toolReceipts),usageTotals: jsonAgentProviderUsageTotalsApiResponseToApplicationTransform(input_.usageTotals)
  }!;
}export function jsonArrayAgentExecutionLogApiResponseToTransportTransform(
  items_?: Array<AgentExecutionLogApiResponse> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonAgentExecutionLogApiResponseToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayAgentExecutionLogApiResponseToApplicationTransform(
  items_?: any,
): Array<AgentExecutionLogApiResponse> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonAgentExecutionLogApiResponseToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonAgentExecutionLogApiResponseToTransportTransform(
  input_?: AgentExecutionLogApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,createdAtUtc: dateRfc3339Serializer(input_.createdAtUtc),state: input_.state,phase: input_.phase,message: input_.message
  }!;
}export function jsonAgentExecutionLogApiResponseToApplicationTransform(
  input_?: any,
): AgentExecutionLogApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,createdAtUtc: dateDeserializer(input_.createdAtUtc)!,state: input_.state,phase: input_.phase,message: input_.message
  }!;
}export function jsonArrayAgentRunMetricApiResponseToTransportTransform(
  items_?: Array<AgentRunMetricApiResponse> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonAgentRunMetricApiResponseToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayAgentRunMetricApiResponseToApplicationTransform(
  items_?: any,
): Array<AgentRunMetricApiResponse> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonAgentRunMetricApiResponseToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayAgentExecutionApprovalApiResponseToTransportTransform(
  items_?: Array<AgentExecutionApprovalApiResponse> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonAgentExecutionApprovalApiResponseToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayAgentExecutionApprovalApiResponseToApplicationTransform(
  items_?: any,
): Array<AgentExecutionApprovalApiResponse> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonAgentExecutionApprovalApiResponseToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonAgentExecutionApprovalApiResponseToTransportTransform(
  input_?: AgentExecutionApprovalApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    approvalId: input_.approvalId,executionRunId: input_.executionRunId,toolName: input_.toolName,toolKind: input_.toolKind,status: input_.status,requestedAtUtc: dateRfc3339Serializer(input_.requestedAtUtc),decidedAtUtc: dateRfc3339Serializer(input_.decidedAtUtc),decisionSourceKind: input_.decisionSourceKind
  }!;
}export function jsonAgentExecutionApprovalApiResponseToApplicationTransform(
  input_?: any,
): AgentExecutionApprovalApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    approvalId: input_.approvalId,executionRunId: input_.executionRunId,toolName: input_.toolName,toolKind: input_.toolKind,status: input_.status,requestedAtUtc: dateDeserializer(input_.requestedAtUtc)!,decidedAtUtc: dateDeserializer(input_.decidedAtUtc)!,decisionSourceKind: input_.decisionSourceKind
  }!;
}export function jsonArrayAgentExecutionArtifactApiResponseToTransportTransform(
  items_?: Array<AgentExecutionArtifactApiResponse> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonAgentExecutionArtifactApiResponseToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayAgentExecutionArtifactApiResponseToApplicationTransform(
  items_?: any,
): Array<AgentExecutionArtifactApiResponse> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonAgentExecutionArtifactApiResponseToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonAgentExecutionArtifactApiResponseToTransportTransform(
  input_?: AgentExecutionArtifactApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,artifactKind: input_.artifactKind,displayName: input_.displayName,relativePath: input_.relativePath,contentType: input_.contentType,producedBy: input_.producedBy,summary: input_.summary,createdAtUtc: dateRfc3339Serializer(input_.createdAtUtc)
  }!;
}export function jsonAgentExecutionArtifactApiResponseToApplicationTransform(
  input_?: any,
): AgentExecutionArtifactApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,artifactKind: input_.artifactKind,displayName: input_.displayName,relativePath: input_.relativePath,contentType: input_.contentType,producedBy: input_.producedBy,summary: input_.summary,createdAtUtc: dateDeserializer(input_.createdAtUtc)!
  }!;
}export function jsonArrayAgentExecutionCheckpointApiResponseToTransportTransform(
  items_?: Array<AgentExecutionCheckpointApiResponse> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonAgentExecutionCheckpointApiResponseToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayAgentExecutionCheckpointApiResponseToApplicationTransform(
  items_?: any,
): Array<AgentExecutionCheckpointApiResponse> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonAgentExecutionCheckpointApiResponseToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonAgentExecutionCheckpointApiResponseToTransportTransform(
  input_?: AgentExecutionCheckpointApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,checkpointKind: input_.checkpointKind,runState: input_.runState,pendingApprovalCount: input_.pendingApprovalCount,capturedAtUtc: dateRfc3339Serializer(input_.capturedAtUtc),resumedAtUtc: dateRfc3339Serializer(input_.resumedAtUtc)
  }!;
}export function jsonAgentExecutionCheckpointApiResponseToApplicationTransform(
  input_?: any,
): AgentExecutionCheckpointApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,checkpointKind: input_.checkpointKind,runState: input_.runState,pendingApprovalCount: input_.pendingApprovalCount,capturedAtUtc: dateDeserializer(input_.capturedAtUtc)!,resumedAtUtc: dateDeserializer(input_.resumedAtUtc)!
  }!;
}export function jsonArrayAgentExecutionToolReceiptApiResponseToTransportTransform(
  items_?: Array<AgentExecutionToolReceiptApiResponse> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonAgentExecutionToolReceiptApiResponseToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayAgentExecutionToolReceiptApiResponseToApplicationTransform(
  items_?: any,
): Array<AgentExecutionToolReceiptApiResponse> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonAgentExecutionToolReceiptApiResponseToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonAgentExecutionToolReceiptApiResponseToTransportTransform(
  input_?: AgentExecutionToolReceiptApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,executionRunId: input_.executionRunId,toolFamily: input_.toolFamily,toolName: input_.toolName,riskClass: input_.riskClass,approvalMode: input_.approvalMode,isolationGuarantee: input_.isolationGuarantee,startedAtUtc: dateRfc3339Serializer(input_.startedAtUtc),completedAtUtc: dateRfc3339Serializer(input_.completedAtUtc),runtimeToolProviderName: input_.runtimeToolProviderName,declaredSideEffectMode: input_.declaredSideEffectMode
  }!;
}export function jsonAgentExecutionToolReceiptApiResponseToApplicationTransform(
  input_?: any,
): AgentExecutionToolReceiptApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,executionRunId: input_.executionRunId,toolFamily: input_.toolFamily,toolName: input_.toolName,riskClass: input_.riskClass,approvalMode: input_.approvalMode,isolationGuarantee: input_.isolationGuarantee,startedAtUtc: dateDeserializer(input_.startedAtUtc)!,completedAtUtc: dateDeserializer(input_.completedAtUtc)!,runtimeToolProviderName: input_.runtimeToolProviderName,declaredSideEffectMode: input_.declaredSideEffectMode
  }!;
}export function jsonAgentProviderUsageTotalsApiResponseToTransportTransform(
  input_?: AgentProviderUsageTotalsApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    observationCount: input_.observationCount,knownObservationCount: input_.knownObservationCount,unknownObservationCount: input_.unknownObservationCount,inputTokens: input_.inputTokens,cachedInputTokens: input_.cachedInputTokens,cacheWriteTokens: input_.cacheWriteTokens,outputTokens: input_.outputTokens,reasoningTokens: input_.reasoningTokens,totalTokens: input_.totalTokens,toolCallCount: input_.toolCallCount,knownCostObservationCount: input_.knownCostObservationCount,unknownCostObservationCount: input_.unknownCostObservationCount,knownCostUsd: input_.knownCostUsd
  }!;
}export function jsonAgentProviderUsageTotalsApiResponseToApplicationTransform(
  input_?: any,
): AgentProviderUsageTotalsApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    observationCount: input_.observationCount,knownObservationCount: input_.knownObservationCount,unknownObservationCount: input_.unknownObservationCount,inputTokens: input_.inputTokens,cachedInputTokens: input_.cachedInputTokens,cacheWriteTokens: input_.cacheWriteTokens,outputTokens: input_.outputTokens,reasoningTokens: input_.reasoningTokens,totalTokens: input_.totalTokens,toolCallCount: input_.toolCallCount,knownCostObservationCount: input_.knownCostObservationCount,unknownCostObservationCount: input_.unknownCostObservationCount,knownCostUsd: input_.knownCostUsd
  }!;
}export function jsonAgentChatRuntimeApiResponseToTransportTransform(
  input_?: AgentChatRuntimeApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    executionLog: jsonArrayAgentExecutionLogApiResponseToTransportTransform(input_.executionLog),metrics: jsonArrayAgentRunMetricApiResponseToTransportTransform(input_.metrics)
  }!;
}export function jsonAgentChatRuntimeApiResponseToApplicationTransform(
  input_?: any,
): AgentChatRuntimeApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    executionLog: jsonArrayAgentExecutionLogApiResponseToApplicationTransform(input_.executionLog),metrics: jsonArrayAgentRunMetricApiResponseToApplicationTransform(input_.metrics)
  }!;
}export function jsonProviderChatCompletionApiRequestToTransportTransform(
  input_?: ProviderChatCompletionApiRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    model: input_.model,systemPrompt: input_.systemPrompt,messages: jsonArrayProviderTestChatMessageToTransportTransform(input_.messages),prompt: input_.prompt
  }!;
}export function jsonProviderChatCompletionApiRequestToApplicationTransform(
  input_?: any,
): ProviderChatCompletionApiRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    model: input_.model,systemPrompt: input_.systemPrompt,messages: jsonArrayProviderTestChatMessageToApplicationTransform(input_.messages),prompt: input_.prompt
  }!;
}export function jsonAgentImageAttachmentUploadRequestToTransportTransform(
  input_?: AgentImageAttachmentUploadRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    file: jsonIFormFileToTransportTransform(input_.file)
  }!;
}export function jsonAgentImageAttachmentUploadRequestToApplicationTransform(
  input_?: any,
): AgentImageAttachmentUploadRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    file: jsonIFormFileToApplicationTransform(input_.file)
  }!;
}export function jsonAgentChatAttachmentStagingResultToTransportTransform(
  input_?: AgentChatAttachmentStagingResult | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    relativePath: input_.relativePath,contentType: input_.contentType,sizeBytes: input_.sizeBytes
  }!;
}export function jsonAgentChatAttachmentStagingResultToApplicationTransform(
  input_?: any,
): AgentChatAttachmentStagingResult {
  if(!input_) {
    return input_ as any;
  }
    return {
    relativePath: input_.relativePath,contentType: input_.contentType,sizeBytes: input_.sizeBytes
  }!;
}export function jsonCreateAgentRecruitingInterviewCommandToTransportTransform(
  input_?: CreateAgentRecruitingInterviewCommand | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    candidateAgentId: input_.candidateAgentId,candidateConfigurationVersion: input_.candidateConfigurationVersion,purpose: input_.purpose,recruitmentApplicationId: input_.recruitmentApplicationId,projectId: input_.projectId
  }!;
}export function jsonCreateAgentRecruitingInterviewCommandToApplicationTransform(
  input_?: any,
): CreateAgentRecruitingInterviewCommand {
  if(!input_) {
    return input_ as any;
  }
    return {
    candidateAgentId: input_.candidateAgentId,candidateConfigurationVersion: input_.candidateConfigurationVersion,purpose: input_.purpose,recruitmentApplicationId: input_.recruitmentApplicationId,projectId: input_.projectId
  }!;
}export function jsonAgentRecruitingInterviewToTransportTransform(
  input_?: AgentRecruitingInterview | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,candidateAgentId: input_.candidateAgentId,candidateConfigurationVersion: input_.candidateConfigurationVersion,candidateNameSnapshot: input_.candidateNameSnapshot,candidateModelSnapshot: input_.candidateModelSnapshot,purpose: input_.purpose,createdAtUtc: dateRfc3339Serializer(input_.createdAtUtc),attempts: jsonArrayAgentRecruitingAttemptToTransportTransform(input_.attempts),reviews: jsonArrayAgentRecruitingHumanReviewToTransportTransform(input_.reviews),recruitmentApplicationId: input_.recruitmentApplicationId,projectId: input_.projectId
  }!;
}export function jsonAgentRecruitingInterviewToApplicationTransform(
  input_?: any,
): AgentRecruitingInterview {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,candidateAgentId: input_.candidateAgentId,candidateConfigurationVersion: input_.candidateConfigurationVersion,candidateNameSnapshot: input_.candidateNameSnapshot,candidateModelSnapshot: input_.candidateModelSnapshot,purpose: input_.purpose,createdAtUtc: dateDeserializer(input_.createdAtUtc)!,attempts: jsonArrayAgentRecruitingAttemptToApplicationTransform(input_.attempts),reviews: jsonArrayAgentRecruitingHumanReviewToApplicationTransform(input_.reviews),recruitmentApplicationId: input_.recruitmentApplicationId,projectId: input_.projectId
  }!;
}export function jsonArrayAgentRecruitingAttemptToTransportTransform(
  items_?: Array<AgentRecruitingAttempt> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonAgentRecruitingAttemptToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayAgentRecruitingAttemptToApplicationTransform(
  items_?: any,
): Array<AgentRecruitingAttempt> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonAgentRecruitingAttemptToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonAgentRecruitingAttemptToTransportTransform(
  input_?: AgentRecruitingAttempt | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,interviewId: input_.interviewId,sequence: input_.sequence,target: jsonAgentRecruitingExecutionTargetToTransportTransform(input_.target),challengeKey: input_.challengeKey,challengeVersion: input_.challengeVersion,rubricVersion: input_.rubricVersion,inputHash: input_.inputHash,outputHash: input_.outputHash,structuredOutputContractKey: input_.structuredOutputContractKey,structuredOutputSchemaHash: input_.structuredOutputSchemaHash,structuredOutputValidationStatus: input_.structuredOutputValidationStatus,automatedEvaluation: jsonAgentRecruitingAutomatedEvaluationToTransportTransform(input_.automatedEvaluation),completeness: jsonAgentRecruitingEvidenceCompletenessToTransportTransform(input_.completeness),missingEvidence: jsonArrayStringToTransportTransform(input_.missingEvidence),createdAtUtc: dateRfc3339Serializer(input_.createdAtUtc),analysis: jsonAgentRecruitingAssessmentAnalysisToTransportTransform(input_.analysis)
  }!;
}export function jsonAgentRecruitingAttemptToApplicationTransform(
  input_?: any,
): AgentRecruitingAttempt {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,interviewId: input_.interviewId,sequence: input_.sequence,target: jsonAgentRecruitingExecutionTargetToApplicationTransform(input_.target),challengeKey: input_.challengeKey,challengeVersion: input_.challengeVersion,rubricVersion: input_.rubricVersion,inputHash: input_.inputHash,outputHash: input_.outputHash,structuredOutputContractKey: input_.structuredOutputContractKey,structuredOutputSchemaHash: input_.structuredOutputSchemaHash,structuredOutputValidationStatus: input_.structuredOutputValidationStatus,automatedEvaluation: jsonAgentRecruitingAutomatedEvaluationToApplicationTransform(input_.automatedEvaluation),completeness: jsonAgentRecruitingEvidenceCompletenessToApplicationTransform(input_.completeness),missingEvidence: jsonArrayStringToApplicationTransform(input_.missingEvidence),createdAtUtc: dateDeserializer(input_.createdAtUtc)!,analysis: jsonAgentRecruitingAssessmentAnalysisToApplicationTransform(input_.analysis)
  }!;
}export function jsonAgentRecruitingExecutionTargetToTransportTransform(
  input_?: AgentRecruitingExecutionTarget | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: jsonAgentRecruitingTargetKindToTransportTransform(input_.kind),id: input_.id
  }!;
}export function jsonAgentRecruitingExecutionTargetToApplicationTransform(
  input_?: any,
): AgentRecruitingExecutionTarget {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: jsonAgentRecruitingTargetKindToApplicationTransform(input_.kind),id: input_.id
  }!;
}export function jsonAgentRecruitingTargetKindToTransportTransform(
  input_?: AgentRecruitingTargetKind | null,
): any {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonAgentRecruitingTargetKindToApplicationTransform(
  input_?: any,
): AgentRecruitingTargetKind {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonAgentRecruitingAutomatedEvaluationToTransportTransform(
  input_?: AgentRecruitingAutomatedEvaluation | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    decision: jsonAgentRecruitingAutomatedDecisionToTransportTransform(input_.decision),score: input_.score,evaluatorAgentId: input_.evaluatorAgentId,providerProfileId: input_.providerProfileId,model: input_.model,rubricVersion: input_.rubricVersion,findings: jsonArrayStringToTransportTransform(input_.findings),evaluatedAtUtc: dateRfc3339Serializer(input_.evaluatedAtUtc)
  }!;
}export function jsonAgentRecruitingAutomatedEvaluationToApplicationTransform(
  input_?: any,
): AgentRecruitingAutomatedEvaluation {
  if(!input_) {
    return input_ as any;
  }
    return {
    decision: jsonAgentRecruitingAutomatedDecisionToApplicationTransform(input_.decision),score: input_.score,evaluatorAgentId: input_.evaluatorAgentId,providerProfileId: input_.providerProfileId,model: input_.model,rubricVersion: input_.rubricVersion,findings: jsonArrayStringToApplicationTransform(input_.findings),evaluatedAtUtc: dateDeserializer(input_.evaluatedAtUtc)!
  }!;
}export function jsonAgentRecruitingAutomatedDecisionToTransportTransform(
  input_?: AgentRecruitingAutomatedDecision | null,
): any {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonAgentRecruitingAutomatedDecisionToApplicationTransform(
  input_?: any,
): AgentRecruitingAutomatedDecision {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonAgentRecruitingEvidenceCompletenessToTransportTransform(
  input_?: AgentRecruitingEvidenceCompleteness | null,
): any {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonAgentRecruitingEvidenceCompletenessToApplicationTransform(
  input_?: any,
): AgentRecruitingEvidenceCompleteness {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonAgentRecruitingAssessmentAnalysisToTransportTransform(
  input_?: AgentRecruitingAssessmentAnalysis | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    classification: jsonAgentRecruitingAssessmentClassificationToTransportTransform(input_.classification),confidence: input_.confidence,summary: input_.summary,proposedNextStep: jsonAgentRecruitingProposedNextStepToTransportTransform(input_.proposedNextStep),strengths: jsonArrayStringToTransportTransform(input_.strengths),gaps: jsonArrayStringToTransportTransform(input_.gaps)
  }!;
}export function jsonAgentRecruitingAssessmentAnalysisToApplicationTransform(
  input_?: any,
): AgentRecruitingAssessmentAnalysis {
  if(!input_) {
    return input_ as any;
  }
    return {
    classification: jsonAgentRecruitingAssessmentClassificationToApplicationTransform(input_.classification),confidence: input_.confidence,summary: input_.summary,proposedNextStep: jsonAgentRecruitingProposedNextStepToApplicationTransform(input_.proposedNextStep),strengths: jsonArrayStringToApplicationTransform(input_.strengths),gaps: jsonArrayStringToApplicationTransform(input_.gaps)
  }!;
}export function jsonAgentRecruitingAssessmentClassificationToTransportTransform(
  input_?: AgentRecruitingAssessmentClassification | null,
): any {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonAgentRecruitingAssessmentClassificationToApplicationTransform(
  input_?: any,
): AgentRecruitingAssessmentClassification {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonAgentRecruitingProposedNextStepToTransportTransform(
  input_?: AgentRecruitingProposedNextStep | null,
): any {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonAgentRecruitingProposedNextStepToApplicationTransform(
  input_?: any,
): AgentRecruitingProposedNextStep {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonArrayAgentRecruitingHumanReviewToTransportTransform(
  items_?: Array<AgentRecruitingHumanReview> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonAgentRecruitingHumanReviewToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayAgentRecruitingHumanReviewToApplicationTransform(
  items_?: any,
): Array<AgentRecruitingHumanReview> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonAgentRecruitingHumanReviewToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonAgentRecruitingHumanReviewToTransportTransform(
  input_?: AgentRecruitingHumanReview | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,interviewId: input_.interviewId,attemptId: input_.attemptId,decision: jsonAgentRecruitingHumanDecisionToTransportTransform(input_.decision),reviewerActorId: input_.reviewerActorId,reviewerDisplayName: input_.reviewerDisplayName,authorizationReference: input_.authorizationReference,authorizationEvidenceHash: input_.authorizationEvidenceHash,notes: input_.notes,qualifiesForReadiness: input_.qualifiesForReadiness,missingEvidence: jsonArrayStringToTransportTransform(input_.missingEvidence),reviewedAtUtc: dateRfc3339Serializer(input_.reviewedAtUtc)
  }!;
}export function jsonAgentRecruitingHumanReviewToApplicationTransform(
  input_?: any,
): AgentRecruitingHumanReview {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,interviewId: input_.interviewId,attemptId: input_.attemptId,decision: jsonAgentRecruitingHumanDecisionToApplicationTransform(input_.decision),reviewerActorId: input_.reviewerActorId,reviewerDisplayName: input_.reviewerDisplayName,authorizationReference: input_.authorizationReference,authorizationEvidenceHash: input_.authorizationEvidenceHash,notes: input_.notes,qualifiesForReadiness: input_.qualifiesForReadiness,missingEvidence: jsonArrayStringToApplicationTransform(input_.missingEvidence),reviewedAtUtc: dateDeserializer(input_.reviewedAtUtc)!
  }!;
}export function jsonAgentRecruitingHumanDecisionToTransportTransform(
  input_?: AgentRecruitingHumanDecision | null,
): any {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonAgentRecruitingHumanDecisionToApplicationTransform(
  input_?: any,
): AgentRecruitingHumanDecision {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonAppendAgentRecruitingAttemptCommandToTransportTransform(
  input_?: AppendAgentRecruitingAttemptCommand | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    target: jsonAgentRecruitingExecutionTargetToTransportTransform(input_.target),challengeKey: input_.challengeKey,challengeVersion: input_.challengeVersion,rubricVersion: input_.rubricVersion,inputHash: input_.inputHash,outputHash: input_.outputHash,structuredOutputContractKey: input_.structuredOutputContractKey,structuredOutputSchemaHash: input_.structuredOutputSchemaHash,structuredOutputValidationStatus: input_.structuredOutputValidationStatus,automatedEvaluation: jsonAgentRecruitingAutomatedEvaluationToTransportTransform(input_.automatedEvaluation),analysis: jsonAgentRecruitingAssessmentAnalysisToTransportTransform(input_.analysis)
  }!;
}export function jsonAppendAgentRecruitingAttemptCommandToApplicationTransform(
  input_?: any,
): AppendAgentRecruitingAttemptCommand {
  if(!input_) {
    return input_ as any;
  }
    return {
    target: jsonAgentRecruitingExecutionTargetToApplicationTransform(input_.target),challengeKey: input_.challengeKey,challengeVersion: input_.challengeVersion,rubricVersion: input_.rubricVersion,inputHash: input_.inputHash,outputHash: input_.outputHash,structuredOutputContractKey: input_.structuredOutputContractKey,structuredOutputSchemaHash: input_.structuredOutputSchemaHash,structuredOutputValidationStatus: input_.structuredOutputValidationStatus,automatedEvaluation: jsonAgentRecruitingAutomatedEvaluationToApplicationTransform(input_.automatedEvaluation),analysis: jsonAgentRecruitingAssessmentAnalysisToApplicationTransform(input_.analysis)
  }!;
}export function jsonAppendAgentRecruitingReviewCommandToTransportTransform(
  input_?: AppendAgentRecruitingReviewCommand | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    attemptId: input_.attemptId,decision: jsonAgentRecruitingHumanDecisionToTransportTransform(input_.decision),reviewerActorId: input_.reviewerActorId,reviewerDisplayName: input_.reviewerDisplayName,authorizationReference: input_.authorizationReference,authorizationEvidenceHash: input_.authorizationEvidenceHash,notes: input_.notes
  }!;
}export function jsonAppendAgentRecruitingReviewCommandToApplicationTransform(
  input_?: any,
): AppendAgentRecruitingReviewCommand {
  if(!input_) {
    return input_ as any;
  }
    return {
    attemptId: input_.attemptId,decision: jsonAgentRecruitingHumanDecisionToApplicationTransform(input_.decision),reviewerActorId: input_.reviewerActorId,reviewerDisplayName: input_.reviewerDisplayName,authorizationReference: input_.authorizationReference,authorizationEvidenceHash: input_.authorizationEvidenceHash,notes: input_.notes
  }!;
}export function jsonArrayAgentRecruitingInterviewToTransportTransform(
  items_?: Array<AgentRecruitingInterview> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonAgentRecruitingInterviewToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayAgentRecruitingInterviewToApplicationTransform(
  items_?: any,
): Array<AgentRecruitingInterview> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonAgentRecruitingInterviewToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonAgentRecruitingCandidateReadinessToTransportTransform(
  input_?: AgentRecruitingCandidateReadiness | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    candidateAgentId: input_.candidateAgentId,currentConfigurationVersion: input_.currentConfigurationVersion,status: jsonAgentRecruitingReadinessStatusToTransportTransform(input_.status),readyForProduction: input_.readyForProduction,activatesAgent: input_.activatesAgent,requiresSeparateActivationAuthorization: input_.requiresSeparateActivationAuthorization,qualifyingInterviewId: input_.qualifyingInterviewId,qualifyingAttemptId: input_.qualifyingAttemptId,qualifyingReviewId: input_.qualifyingReviewId,humanAuthorizationReference: input_.humanAuthorizationReference,humanAuthorizationEvidenceHash: input_.humanAuthorizationEvidenceHash,reasons: jsonArrayStringToTransportTransform(input_.reasons),attemptHistory: jsonArrayAgentRecruitingAttemptComparisonToTransportTransform(input_.attemptHistory)
  }!;
}export function jsonAgentRecruitingCandidateReadinessToApplicationTransform(
  input_?: any,
): AgentRecruitingCandidateReadiness {
  if(!input_) {
    return input_ as any;
  }
    return {
    candidateAgentId: input_.candidateAgentId,currentConfigurationVersion: input_.currentConfigurationVersion,status: jsonAgentRecruitingReadinessStatusToApplicationTransform(input_.status),readyForProduction: input_.readyForProduction,activatesAgent: input_.activatesAgent,requiresSeparateActivationAuthorization: input_.requiresSeparateActivationAuthorization,qualifyingInterviewId: input_.qualifyingInterviewId,qualifyingAttemptId: input_.qualifyingAttemptId,qualifyingReviewId: input_.qualifyingReviewId,humanAuthorizationReference: input_.humanAuthorizationReference,humanAuthorizationEvidenceHash: input_.humanAuthorizationEvidenceHash,reasons: jsonArrayStringToApplicationTransform(input_.reasons),attemptHistory: jsonArrayAgentRecruitingAttemptComparisonToApplicationTransform(input_.attemptHistory)
  }!;
}export function jsonAgentRecruitingReadinessStatusToTransportTransform(
  input_?: AgentRecruitingReadinessStatus | null,
): any {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonAgentRecruitingReadinessStatusToApplicationTransform(
  input_?: any,
): AgentRecruitingReadinessStatus {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonArrayAgentRecruitingAttemptComparisonToTransportTransform(
  items_?: Array<AgentRecruitingAttemptComparison> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonAgentRecruitingAttemptComparisonToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayAgentRecruitingAttemptComparisonToApplicationTransform(
  items_?: any,
): Array<AgentRecruitingAttemptComparison> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonAgentRecruitingAttemptComparisonToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonAgentRecruitingAttemptComparisonToTransportTransform(
  input_?: AgentRecruitingAttemptComparison | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    attemptId: input_.attemptId,sequence: input_.sequence,createdAtUtc: dateRfc3339Serializer(input_.createdAtUtc),completeness: jsonAgentRecruitingEvidenceCompletenessToTransportTransform(input_.completeness),automatedDecision: jsonAgentRecruitingAutomatedDecisionToTransportTransform(input_.automatedDecision),score: input_.score,humanDecision: jsonAgentRecruitingHumanDecisionToTransportTransform(input_.humanDecision)
  }!;
}export function jsonAgentRecruitingAttemptComparisonToApplicationTransform(
  input_?: any,
): AgentRecruitingAttemptComparison {
  if(!input_) {
    return input_ as any;
  }
    return {
    attemptId: input_.attemptId,sequence: input_.sequence,createdAtUtc: dateDeserializer(input_.createdAtUtc)!,completeness: jsonAgentRecruitingEvidenceCompletenessToApplicationTransform(input_.completeness),automatedDecision: jsonAgentRecruitingAutomatedDecisionToApplicationTransform(input_.automatedDecision),score: input_.score,humanDecision: jsonAgentRecruitingHumanDecisionToApplicationTransform(input_.humanDecision)
  }!;
}export function jsonPromptGalleryPageOfPromptGallerySearchItemToTransportTransform(
  input_?: PromptGalleryPageOfPromptGallerySearchItem | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    items: jsonArrayPromptGallerySearchItemToTransportTransform(input_.items),pageIndex: input_.pageIndex,pageSize: input_.pageSize,totalCount: input_.totalCount,totalPages: input_.totalPages
  }!;
}export function jsonPromptGalleryPageOfPromptGallerySearchItemToApplicationTransform(
  input_?: any,
): PromptGalleryPageOfPromptGallerySearchItem {
  if(!input_) {
    return input_ as any;
  }
    return {
    items: jsonArrayPromptGallerySearchItemToApplicationTransform(input_.items),pageIndex: input_.pageIndex,pageSize: input_.pageSize,totalCount: input_.totalCount,totalPages: input_.totalPages
  }!;
}export function jsonArrayPromptGallerySearchItemToTransportTransform(
  items_?: Array<PromptGallerySearchItem> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonPromptGallerySearchItemToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayPromptGallerySearchItemToApplicationTransform(
  items_?: any,
): Array<PromptGallerySearchItem> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonPromptGallerySearchItemToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonPromptGallerySearchItemToTransportTransform(
  input_?: PromptGallerySearchItem | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,title: input_.title,summary: input_.summary,contentPreview: input_.contentPreview,kind: input_.kind,phase: input_.phase,status: input_.status,isArchived: input_.isArchived,collectionName: input_.collectionName,tags: jsonArrayStringToTransportTransform(input_.tags),supportedModels: jsonArrayPromptProviderModelToTransportTransform(input_.supportedModels),recommendations: jsonPromptModelRecommendationsToTransportTransform(input_.recommendations),currentVersionNumber: input_.currentVersionNumber,updatedAtUtc: dateRfc3339Serializer(input_.updatedAtUtc),isFavorite: input_.isFavorite
  }!;
}export function jsonPromptGallerySearchItemToApplicationTransform(
  input_?: any,
): PromptGallerySearchItem {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,title: input_.title,summary: input_.summary,contentPreview: input_.contentPreview,kind: input_.kind,phase: input_.phase,status: input_.status,isArchived: input_.isArchived,collectionName: input_.collectionName,tags: jsonArrayStringToApplicationTransform(input_.tags),supportedModels: jsonArrayPromptProviderModelToApplicationTransform(input_.supportedModels),recommendations: jsonPromptModelRecommendationsToApplicationTransform(input_.recommendations),currentVersionNumber: input_.currentVersionNumber,updatedAtUtc: dateDeserializer(input_.updatedAtUtc)!,isFavorite: input_.isFavorite
  }!;
}export function jsonArrayPromptProviderModelToTransportTransform(
  items_?: Array<PromptProviderModel> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonPromptProviderModelToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayPromptProviderModelToApplicationTransform(
  items_?: any,
): Array<PromptProviderModel> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonPromptProviderModelToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonPromptProviderModelToTransportTransform(
  input_?: PromptProviderModel | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    provider: input_.provider,model: input_.model,isPreferred: input_.isPreferred
  }!;
}export function jsonPromptProviderModelToApplicationTransform(
  input_?: any,
): PromptProviderModel {
  if(!input_) {
    return input_ as any;
  }
    return {
    provider: input_.provider,model: input_.model,isPreferred: input_.isPreferred
  }!;
}export function jsonPromptModelRecommendationsToTransportTransform(
  input_?: PromptModelRecommendations | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    temperature: input_.temperature,maxOutputTokens: input_.maxOutputTokens,topP: input_.topP
  }!;
}export function jsonPromptModelRecommendationsToApplicationTransform(
  input_?: any,
): PromptModelRecommendations {
  if(!input_) {
    return input_ as any;
  }
    return {
    temperature: input_.temperature,maxOutputTokens: input_.maxOutputTokens,topP: input_.topP
  }!;
}export function jsonPromptGalleryDraftToTransportTransform(
  input_?: PromptGalleryDraft | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,projectId: input_.projectId,collectionId: input_.collectionId,title: input_.title,summary: input_.summary,kind: input_.kind,phase: input_.phase,content: input_.content,tags: jsonArrayStringToTransportTransform(input_.tags),supportedModels: jsonArrayPromptProviderModelToTransportTransform(input_.supportedModels),supportedConsumers: jsonArrayPromptGalleryConsumerToTransportTransform(input_.supportedConsumers),recommendations: jsonPromptModelRecommendationsToTransportTransform(input_.recommendations),expectedUpdatedAtUtc: dateRfc3339Serializer(input_.expectedUpdatedAtUtc)
  }!;
}export function jsonPromptGalleryDraftToApplicationTransform(
  input_?: any,
): PromptGalleryDraft {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,projectId: input_.projectId,collectionId: input_.collectionId,title: input_.title,summary: input_.summary,kind: input_.kind,phase: input_.phase,content: input_.content,tags: jsonArrayStringToApplicationTransform(input_.tags),supportedModels: jsonArrayPromptProviderModelToApplicationTransform(input_.supportedModels),supportedConsumers: jsonArrayPromptGalleryConsumerToApplicationTransform(input_.supportedConsumers),recommendations: jsonPromptModelRecommendationsToApplicationTransform(input_.recommendations),expectedUpdatedAtUtc: dateDeserializer(input_.expectedUpdatedAtUtc)!
  }!;
}export function jsonArrayPromptGalleryConsumerToTransportTransform(
  items_?: Array<number> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = item as any;
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayPromptGalleryConsumerToApplicationTransform(
  items_?: any,
): Array<number> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = item as any;
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonPromptDraftSaveReceiptToTransportTransform(
  input_?: PromptDraftSaveReceipt | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    promptArtifactId: input_.promptArtifactId,updatedAtUtc: dateRfc3339Serializer(input_.updatedAtUtc)
  }!;
}export function jsonPromptDraftSaveReceiptToApplicationTransform(
  input_?: any,
): PromptDraftSaveReceipt {
  if(!input_) {
    return input_ as any;
  }
    return {
    promptArtifactId: input_.promptArtifactId,updatedAtUtc: dateDeserializer(input_.updatedAtUtc)!
  }!;
}export function jsonPromptGalleryItemDetailsToTransportTransform(
  input_?: PromptGalleryItemDetails | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,projectId: input_.projectId,collectionId: input_.collectionId,title: input_.title,summary: input_.summary,kind: input_.kind,phase: input_.phase,status: input_.status,isArchived: input_.isArchived,draftContent: input_.draftContent,currentVersionNumber: input_.currentVersionNumber,tags: jsonArrayStringToTransportTransform(input_.tags),templateTokens: jsonArrayStringToTransportTransform(input_.templateTokens),supportedModels: jsonArrayPromptProviderModelToTransportTransform(input_.supportedModels),supportedConsumers: jsonArrayPromptGalleryConsumerToTransportTransform(input_.supportedConsumers),warningSuppressions: jsonArrayPromptWarningSuppressionToTransportTransform(input_.warningSuppressions),recommendations: jsonPromptModelRecommendationsToTransportTransform(input_.recommendations),source: jsonPromptGallerySourceInfoToTransportTransform(input_.source),versions: jsonArrayPromptGalleryVersionInfoToTransportTransform(input_.versions),createdAtUtc: dateRfc3339Serializer(input_.createdAtUtc),updatedAtUtc: dateRfc3339Serializer(input_.updatedAtUtc),isFavorite: input_.isFavorite
  }!;
}export function jsonPromptGalleryItemDetailsToApplicationTransform(
  input_?: any,
): PromptGalleryItemDetails {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,projectId: input_.projectId,collectionId: input_.collectionId,title: input_.title,summary: input_.summary,kind: input_.kind,phase: input_.phase,status: input_.status,isArchived: input_.isArchived,draftContent: input_.draftContent,currentVersionNumber: input_.currentVersionNumber,tags: jsonArrayStringToApplicationTransform(input_.tags),templateTokens: jsonArrayStringToApplicationTransform(input_.templateTokens),supportedModels: jsonArrayPromptProviderModelToApplicationTransform(input_.supportedModels),supportedConsumers: jsonArrayPromptGalleryConsumerToApplicationTransform(input_.supportedConsumers),warningSuppressions: jsonArrayPromptWarningSuppressionToApplicationTransform(input_.warningSuppressions),recommendations: jsonPromptModelRecommendationsToApplicationTransform(input_.recommendations),source: jsonPromptGallerySourceInfoToApplicationTransform(input_.source),versions: jsonArrayPromptGalleryVersionInfoToApplicationTransform(input_.versions),createdAtUtc: dateDeserializer(input_.createdAtUtc)!,updatedAtUtc: dateDeserializer(input_.updatedAtUtc)!,isFavorite: input_.isFavorite
  }!;
}export function jsonArrayPromptWarningSuppressionToTransportTransform(
  items_?: Array<PromptWarningSuppression> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonPromptWarningSuppressionToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayPromptWarningSuppressionToApplicationTransform(
  items_?: any,
): Array<PromptWarningSuppression> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonPromptWarningSuppressionToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonPromptWarningSuppressionToTransportTransform(
  input_?: PromptWarningSuppression | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    consumer: input_.consumer,issueCode: input_.issueCode
  }!;
}export function jsonPromptWarningSuppressionToApplicationTransform(
  input_?: any,
): PromptWarningSuppression {
  if(!input_) {
    return input_ as any;
  }
    return {
    consumer: input_.consumer,issueCode: input_.issueCode
  }!;
}export function jsonPromptGallerySourceInfoToTransportTransform(
  input_?: PromptGallerySourceInfo | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    provenance: input_.provenance,catalog: input_.catalog,key: input_.key,groupKey: input_.groupKey,groupName: input_.groupName,itemKind: input_.itemKind,orderIndex: input_.orderIndex
  }!;
}export function jsonPromptGallerySourceInfoToApplicationTransform(
  input_?: any,
): PromptGallerySourceInfo {
  if(!input_) {
    return input_ as any;
  }
    return {
    provenance: input_.provenance,catalog: input_.catalog,key: input_.key,groupKey: input_.groupKey,groupName: input_.groupName,itemKind: input_.itemKind,orderIndex: input_.orderIndex
  }!;
}export function jsonArrayPromptGalleryVersionInfoToTransportTransform(
  items_?: Array<PromptGalleryVersionInfo> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonPromptGalleryVersionInfoToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayPromptGalleryVersionInfoToApplicationTransform(
  items_?: any,
): Array<PromptGalleryVersionInfo> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonPromptGalleryVersionInfoToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonPromptGalleryVersionInfoToTransportTransform(
  input_?: PromptGalleryVersionInfo | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,versionNumber: input_.versionNumber,creationReason: input_.creationReason,outputFormat: input_.outputFormat,createdAtUtc: dateRfc3339Serializer(input_.createdAtUtc)
  }!;
}export function jsonPromptGalleryVersionInfoToApplicationTransform(
  input_?: any,
): PromptGalleryVersionInfo {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,versionNumber: input_.versionNumber,creationReason: input_.creationReason,outputFormat: input_.outputFormat,createdAtUtc: dateDeserializer(input_.createdAtUtc)!
  }!;
}export function jsonPromptVersionCreateRequestToTransportTransform(
  input_?: PromptVersionCreateRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    creationReason: input_.creationReason,expectedUpdatedAtUtc: dateRfc3339Serializer(input_.expectedUpdatedAtUtc),outputFormat: input_.outputFormat
  }!;
}export function jsonPromptVersionCreateRequestToApplicationTransform(
  input_?: any,
): PromptVersionCreateRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    creationReason: input_.creationReason,expectedUpdatedAtUtc: dateDeserializer(input_.expectedUpdatedAtUtc)!,outputFormat: input_.outputFormat
  }!;
}export function jsonPromptVersionSnapshotToTransportTransform(
  input_?: PromptVersionSnapshot | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    promptArtifactId: input_.promptArtifactId,promptVersionId: input_.promptVersionId,versionNumber: input_.versionNumber,title: input_.title,summary: input_.summary,kind: input_.kind,content: input_.content,outputFormat: input_.outputFormat,recommendations: jsonPromptModelRecommendationsToTransportTransform(input_.recommendations),createdAtUtc: dateRfc3339Serializer(input_.createdAtUtc)
  }!;
}export function jsonPromptVersionSnapshotToApplicationTransform(
  input_?: any,
): PromptVersionSnapshot {
  if(!input_) {
    return input_ as any;
  }
    return {
    promptArtifactId: input_.promptArtifactId,promptVersionId: input_.promptVersionId,versionNumber: input_.versionNumber,title: input_.title,summary: input_.summary,kind: input_.kind,content: input_.content,outputFormat: input_.outputFormat,recommendations: jsonPromptModelRecommendationsToApplicationTransform(input_.recommendations),createdAtUtc: dateDeserializer(input_.createdAtUtc)!
  }!;
}export function jsonPromptGalleryArchiveRequestToTransportTransform(
  input_?: PromptGalleryArchiveRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    archived: input_.archived
  }!;
}export function jsonPromptGalleryArchiveRequestToApplicationTransform(
  input_?: any,
): PromptGalleryArchiveRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    archived: input_.archived
  }!;
}export function jsonPromptGalleryFavoriteRequestToTransportTransform(
  input_?: PromptGalleryFavoriteRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    favorite: input_.favorite
  }!;
}export function jsonPromptGalleryFavoriteRequestToApplicationTransform(
  input_?: any,
): PromptGalleryFavoriteRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    favorite: input_.favorite
  }!;
}export function jsonPromptGalleryCompatibilityApiRequestToTransportTransform(
  input_?: PromptGalleryCompatibilityApiRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    promptArtifactId: input_.promptArtifactId,context: jsonPromptGalleryConsumerContextToTransportTransform(input_.context)
  }!;
}export function jsonPromptGalleryCompatibilityApiRequestToApplicationTransform(
  input_?: any,
): PromptGalleryCompatibilityApiRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    promptArtifactId: input_.promptArtifactId,context: jsonPromptGalleryConsumerContextToApplicationTransform(input_.context)
  }!;
}export function jsonPromptGalleryConsumerContextToTransportTransform(
  input_?: PromptGalleryConsumerContext | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    consumer: input_.consumer,purpose: input_.purpose,requiredKind: input_.requiredKind,provider: input_.provider,model: input_.model,requiresFinalVersion: input_.requiresFinalVersion
  }!;
}export function jsonPromptGalleryConsumerContextToApplicationTransform(
  input_?: any,
): PromptGalleryConsumerContext {
  if(!input_) {
    return input_ as any;
  }
    return {
    consumer: input_.consumer,purpose: input_.purpose,requiredKind: input_.requiredKind,provider: input_.provider,model: input_.model,requiresFinalVersion: input_.requiresFinalVersion
  }!;
}export function jsonPromptCompatibilityResultToTransportTransform(
  input_?: PromptCompatibilityResult | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    issues: jsonArrayPromptCompatibilityIssueToTransportTransform(input_.issues),canUse: input_.canUse,hasVisibleWarnings: input_.hasVisibleWarnings
  }!;
}export function jsonPromptCompatibilityResultToApplicationTransform(
  input_?: any,
): PromptCompatibilityResult {
  if(!input_) {
    return input_ as any;
  }
    return {
    issues: jsonArrayPromptCompatibilityIssueToApplicationTransform(input_.issues),canUse: input_.canUse,hasVisibleWarnings: input_.hasVisibleWarnings
  }!;
}export function jsonArrayPromptCompatibilityIssueToTransportTransform(
  items_?: Array<PromptCompatibilityIssue> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonPromptCompatibilityIssueToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayPromptCompatibilityIssueToApplicationTransform(
  items_?: any,
): Array<PromptCompatibilityIssue> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonPromptCompatibilityIssueToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonPromptCompatibilityIssueToTransportTransform(
  input_?: PromptCompatibilityIssue | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    code: input_.code,severity: input_.severity,message: input_.message,isSuppressible: input_.isSuppressible,isSuppressed: input_.isSuppressed
  }!;
}export function jsonPromptCompatibilityIssueToApplicationTransform(
  input_?: any,
): PromptCompatibilityIssue {
  if(!input_) {
    return input_ as any;
  }
    return {
    code: input_.code,severity: input_.severity,message: input_.message,isSuppressible: input_.isSuppressible,isSuppressed: input_.isSuppressed
  }!;
}export function jsonPromptGalleryWarningSuppressionApiRequestToTransportTransform(
  input_?: PromptGalleryWarningSuppressionApiRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    promptArtifactId: input_.promptArtifactId,consumer: input_.consumer,issueCode: input_.issueCode,suppressed: input_.suppressed
  }!;
}export function jsonPromptGalleryWarningSuppressionApiRequestToApplicationTransform(
  input_?: any,
): PromptGalleryWarningSuppressionApiRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    promptArtifactId: input_.promptArtifactId,consumer: input_.consumer,issueCode: input_.issueCode,suppressed: input_.suppressed
  }!;
}export function jsonWorkflowRunStartApiRequestToTransportTransform(
  input_?: WorkflowRunStartApiRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    workflowId: input_.workflowId,versionId: input_.versionId,inputJson: input_.inputJson,requestedBackend: input_.requestedBackend
  }!;
}export function jsonWorkflowRunStartApiRequestToApplicationTransform(
  input_?: any,
): WorkflowRunStartApiRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    workflowId: input_.workflowId,versionId: input_.versionId,inputJson: input_.inputJson,requestedBackend: input_.requestedBackend
  }!;
}export function jsonWorkflowRunStartApiResponseToTransportTransform(
  input_?: WorkflowRunStartApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    run: jsonWorkflowRunSnapshotToTransportTransform(input_.run),events: jsonArrayWorkflowEventRecordToTransportTransform(input_.events),artifacts: jsonArrayWorkflowArtifactRecordToTransportTransform(input_.artifacts),pendingExternalRequests: jsonArrayWorkflowExternalRequestRecordToTransportTransform(input_.pendingExternalRequests),checkpoints: jsonArrayWorkflowCheckpointRecordToTransportTransform(input_.checkpoints),idempotencyDisposition: input_.idempotencyDisposition,idempotencyKeyHash: input_.idempotencyKeyHash,created: input_.created,replayed: input_.replayed
  }!;
}export function jsonWorkflowRunStartApiResponseToApplicationTransform(
  input_?: any,
): WorkflowRunStartApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    run: jsonWorkflowRunSnapshotToApplicationTransform(input_.run),events: jsonArrayWorkflowEventRecordToApplicationTransform(input_.events),artifacts: jsonArrayWorkflowArtifactRecordToApplicationTransform(input_.artifacts),pendingExternalRequests: jsonArrayWorkflowExternalRequestRecordToApplicationTransform(input_.pendingExternalRequests),checkpoints: jsonArrayWorkflowCheckpointRecordToApplicationTransform(input_.checkpoints),idempotencyDisposition: input_.idempotencyDisposition,idempotencyKeyHash: input_.idempotencyKeyHash,created: input_.created,replayed: input_.replayed
  }!;
}export function jsonWorkflowRunSnapshotToTransportTransform(
  input_?: WorkflowRunSnapshot | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    runId: input_.runId,workflowId: input_.workflowId,versionId: input_.versionId,state: input_.state,backend: input_.backend,backendRunId: input_.backendRunId,summary: input_.summary,createdAtUtc: dateRfc3339Serializer(input_.createdAtUtc),updatedAtUtc: dateRfc3339Serializer(input_.updatedAtUtc),terminalAtUtc: dateRfc3339Serializer(input_.terminalAtUtc),origin: jsonWorkflowLaunchOriginToTransportTransform(input_.origin)
  }!;
}export function jsonWorkflowRunSnapshotToApplicationTransform(
  input_?: any,
): WorkflowRunSnapshot {
  if(!input_) {
    return input_ as any;
  }
    return {
    runId: input_.runId,workflowId: input_.workflowId,versionId: input_.versionId,state: input_.state,backend: input_.backend,backendRunId: input_.backendRunId,summary: input_.summary,createdAtUtc: dateDeserializer(input_.createdAtUtc)!,updatedAtUtc: dateDeserializer(input_.updatedAtUtc)!,terminalAtUtc: dateDeserializer(input_.terminalAtUtc)!,origin: jsonWorkflowLaunchOriginToApplicationTransform(input_.origin)
  }!;
}export function jsonWorkflowLaunchOriginToTransportDiscriminator(
  input_?: WorkflowLaunchOrigin,
): any {
  if(!input_) {
    return input_ as any;
  }const discriminatorValue = input_.$origin;if( discriminatorValue === "api") {
    return jsonWorkflowLaunchOriginApiToTransportTransform(input_ as any)!
  }

  if( discriminatorValue === "preview") {
    return jsonWorkflowLaunchOriginPreviewToTransportTransform(input_ as any)!
  }

  if( discriminatorValue === "scheduler-plan-run") {
    return jsonWorkflowLaunchOriginSchedulerPlanRunToTransportTransform(input_ as any)!
  }

  if( discriminatorValue === "project-structure-node") {
    return jsonWorkflowLaunchOriginProjectStructureNodeToTransportTransform(input_ as any)!
  }

  if( discriminatorValue === "agent-runtime-invocation") {
    return jsonWorkflowLaunchOriginAgentRuntimeInvocationToTransportTransform(input_ as any)!
  }

  if( discriminatorValue === "process-assignment") {
    return jsonWorkflowLaunchOriginProcessAssignmentToTransportTransform(input_ as any)!
  }console.warn(`Received unknown kind: ` + discriminatorValue); return input_ as any
}export function jsonWorkflowLaunchOriginToTransportTransform(
  input_?: WorkflowLaunchOrigin | null,
): any {
  if(!input_) {
    return input_ as any;
  }return jsonWorkflowLaunchOriginToTransportDiscriminator(input_)
}export function jsonWorkflowLaunchOriginToApplicationDiscriminator(
  input_?: any,
): WorkflowLaunchOrigin {
  if(!input_) {
    return input_ as any;
  }const discriminatorValue = input_.$origin;if( discriminatorValue === "api") {
    return jsonWorkflowLaunchOriginApiToApplicationTransform(input_ as any)!
  }

  if( discriminatorValue === "preview") {
    return jsonWorkflowLaunchOriginPreviewToApplicationTransform(input_ as any)!
  }

  if( discriminatorValue === "scheduler-plan-run") {
    return jsonWorkflowLaunchOriginSchedulerPlanRunToApplicationTransform(input_ as any)!
  }

  if( discriminatorValue === "project-structure-node") {
    return jsonWorkflowLaunchOriginProjectStructureNodeToApplicationTransform(input_ as any)!
  }

  if( discriminatorValue === "agent-runtime-invocation") {
    return jsonWorkflowLaunchOriginAgentRuntimeInvocationToApplicationTransform(input_ as any)!
  }

  if( discriminatorValue === "process-assignment") {
    return jsonWorkflowLaunchOriginProcessAssignmentToApplicationTransform(input_ as any)!
  }console.warn(`Received unknown kind: ` + discriminatorValue); return input_ as any
}export function jsonWorkflowLaunchOriginToApplicationTransform(
  input_?: any,
): WorkflowLaunchOrigin {
  if(!input_) {
    return input_ as any;
  }return jsonWorkflowLaunchOriginToApplicationDiscriminator(input_)
}export function jsonWorkflowLaunchOriginApiToTransportTransform(
  input_?: WorkflowLaunchOriginApi | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    $origin: input_.$origin,actor: jsonWorkflowLaunchActorToTransportTransform(input_.actor),kind: input_.kind,correlationId: jsonWorkflowLaunchCorrelationIdToTransportTransform(input_.correlationId)
  }!;
}export function jsonWorkflowLaunchOriginApiToApplicationTransform(
  input_?: any,
): WorkflowLaunchOriginApi {
  if(!input_) {
    return input_ as any;
  }
    return {
    $origin: input_.$origin,actor: jsonWorkflowLaunchActorToApplicationTransform(input_.actor),kind: input_.kind,correlationId: jsonWorkflowLaunchCorrelationIdToApplicationTransform(input_.correlationId)
  }!;
}export function jsonWorkflowLaunchActorToTransportTransform(
  input_?: WorkflowLaunchActor | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: input_.kind,subjectId: input_.subjectId
  }!;
}export function jsonWorkflowLaunchActorToApplicationTransform(
  input_?: any,
): WorkflowLaunchActor {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: input_.kind,subjectId: input_.subjectId
  }!;
}export function jsonWorkflowLaunchCorrelationIdToTransportTransform(
  input_?: WorkflowLaunchCorrelationId | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value
  }!;
}export function jsonWorkflowLaunchCorrelationIdToApplicationTransform(
  input_?: any,
): WorkflowLaunchCorrelationId {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value
  }!;
}export function jsonWorkflowLaunchOriginPreviewToTransportTransform(
  input_?: WorkflowLaunchOriginPreview | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    $origin: input_.$origin,actor: jsonWorkflowLaunchActorToTransportTransform(input_.actor),kind: input_.kind,correlationId: jsonWorkflowLaunchCorrelationIdToTransportTransform(input_.correlationId)
  }!;
}export function jsonWorkflowLaunchOriginPreviewToApplicationTransform(
  input_?: any,
): WorkflowLaunchOriginPreview {
  if(!input_) {
    return input_ as any;
  }
    return {
    $origin: input_.$origin,actor: jsonWorkflowLaunchActorToApplicationTransform(input_.actor),kind: input_.kind,correlationId: jsonWorkflowLaunchCorrelationIdToApplicationTransform(input_.correlationId)
  }!;
}export function jsonWorkflowLaunchOriginSchedulerPlanRunToTransportTransform(
  input_?: WorkflowLaunchOriginSchedulerPlanRun | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    $origin: input_.$origin,planId: input_.planId,planRunId: input_.planRunId,fireId: jsonWorkflowSchedulerFireIdToTransportTransform(input_.fireId),firedAtUtc: dateRfc3339Serializer(input_.firedAtUtc),kind: input_.kind,correlationId: jsonWorkflowLaunchCorrelationIdToTransportTransform(input_.correlationId)
  }!;
}export function jsonWorkflowLaunchOriginSchedulerPlanRunToApplicationTransform(
  input_?: any,
): WorkflowLaunchOriginSchedulerPlanRun {
  if(!input_) {
    return input_ as any;
  }
    return {
    $origin: input_.$origin,planId: input_.planId,planRunId: input_.planRunId,fireId: jsonWorkflowSchedulerFireIdToApplicationTransform(input_.fireId),firedAtUtc: dateDeserializer(input_.firedAtUtc)!,kind: input_.kind,correlationId: jsonWorkflowLaunchCorrelationIdToApplicationTransform(input_.correlationId)
  }!;
}export function jsonWorkflowSchedulerFireIdToTransportTransform(
  input_?: WorkflowSchedulerFireId | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value
  }!;
}export function jsonWorkflowSchedulerFireIdToApplicationTransform(
  input_?: any,
): WorkflowSchedulerFireId {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value
  }!;
}export function jsonWorkflowLaunchOriginProjectStructureNodeToTransportTransform(
  input_?: WorkflowLaunchOriginProjectStructureNode | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    $origin: input_.$origin,projectId: input_.projectId,nodeId: jsonWorkflowProjectStructureNodeIdToTransportTransform(input_.nodeId),requestingActor: jsonWorkflowLaunchActorToTransportTransform(input_.requestingActor),sessionId: jsonWorkflowLaunchSessionIdToTransportTransform(input_.sessionId),kind: input_.kind,correlationId: jsonWorkflowLaunchCorrelationIdToTransportTransform(input_.correlationId)
  }!;
}export function jsonWorkflowLaunchOriginProjectStructureNodeToApplicationTransform(
  input_?: any,
): WorkflowLaunchOriginProjectStructureNode {
  if(!input_) {
    return input_ as any;
  }
    return {
    $origin: input_.$origin,projectId: input_.projectId,nodeId: jsonWorkflowProjectStructureNodeIdToApplicationTransform(input_.nodeId),requestingActor: jsonWorkflowLaunchActorToApplicationTransform(input_.requestingActor),sessionId: jsonWorkflowLaunchSessionIdToApplicationTransform(input_.sessionId),kind: input_.kind,correlationId: jsonWorkflowLaunchCorrelationIdToApplicationTransform(input_.correlationId)
  }!;
}export function jsonWorkflowProjectStructureNodeIdToTransportTransform(
  input_?: WorkflowProjectStructureNodeId | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value
  }!;
}export function jsonWorkflowProjectStructureNodeIdToApplicationTransform(
  input_?: any,
): WorkflowProjectStructureNodeId {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value
  }!;
}export function jsonWorkflowLaunchSessionIdToTransportTransform(
  input_?: WorkflowLaunchSessionId | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value
  }!;
}export function jsonWorkflowLaunchSessionIdToApplicationTransform(
  input_?: any,
): WorkflowLaunchSessionId {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value
  }!;
}export function jsonWorkflowLaunchOriginAgentRuntimeInvocationToTransportTransform(
  input_?: WorkflowLaunchOriginAgentRuntimeInvocation | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    $origin: input_.$origin,agent: jsonWorkflowLaunchActorToTransportTransform(input_.agent),runtimeSessionId: jsonWorkflowLaunchSessionIdToTransportTransform(input_.runtimeSessionId),purpose: input_.purpose,kind: input_.kind,correlationId: jsonWorkflowLaunchCorrelationIdToTransportTransform(input_.correlationId)
  }!;
}export function jsonWorkflowLaunchOriginAgentRuntimeInvocationToApplicationTransform(
  input_?: any,
): WorkflowLaunchOriginAgentRuntimeInvocation {
  if(!input_) {
    return input_ as any;
  }
    return {
    $origin: input_.$origin,agent: jsonWorkflowLaunchActorToApplicationTransform(input_.agent),runtimeSessionId: jsonWorkflowLaunchSessionIdToApplicationTransform(input_.runtimeSessionId),purpose: input_.purpose,kind: input_.kind,correlationId: jsonWorkflowLaunchCorrelationIdToApplicationTransform(input_.correlationId)
  }!;
}export function jsonWorkflowLaunchOriginProcessAssignmentToTransportTransform(
  input_?: WorkflowLaunchOriginProcessAssignment | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    $origin: input_.$origin,processRunId: input_.processRunId,assignmentId: input_.assignmentId,kind: input_.kind,correlationId: jsonWorkflowLaunchCorrelationIdToTransportTransform(input_.correlationId)
  }!;
}export function jsonWorkflowLaunchOriginProcessAssignmentToApplicationTransform(
  input_?: any,
): WorkflowLaunchOriginProcessAssignment {
  if(!input_) {
    return input_ as any;
  }
    return {
    $origin: input_.$origin,processRunId: input_.processRunId,assignmentId: input_.assignmentId,kind: input_.kind,correlationId: jsonWorkflowLaunchCorrelationIdToApplicationTransform(input_.correlationId)
  }!;
}export function jsonArrayWorkflowEventRecordToTransportTransform(
  items_?: Array<WorkflowEventRecord> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonWorkflowEventRecordToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayWorkflowEventRecordToApplicationTransform(
  items_?: any,
): Array<WorkflowEventRecord> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonWorkflowEventRecordToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonWorkflowEventRecordToTransportTransform(
  input_?: WorkflowEventRecord | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,runId: input_.runId,kind: input_.kind,nodeId: input_.nodeId,message: input_.message,payloadJson: input_.payloadJson,createdAtUtc: dateRfc3339Serializer(input_.createdAtUtc)
  }!;
}export function jsonWorkflowEventRecordToApplicationTransform(
  input_?: any,
): WorkflowEventRecord {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,runId: input_.runId,kind: input_.kind,nodeId: input_.nodeId,message: input_.message,payloadJson: input_.payloadJson,createdAtUtc: dateDeserializer(input_.createdAtUtc)!
  }!;
}export function jsonArrayWorkflowArtifactRecordToTransportTransform(
  items_?: Array<WorkflowArtifactRecord> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonWorkflowArtifactRecordToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayWorkflowArtifactRecordToApplicationTransform(
  items_?: any,
): Array<WorkflowArtifactRecord> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonWorkflowArtifactRecordToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonWorkflowArtifactRecordToTransportTransform(
  input_?: WorkflowArtifactRecord | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,runId: input_.runId,kind: input_.kind,nodeId: input_.nodeId,name: input_.name,contentType: input_.contentType,storagePath: input_.storagePath,summary: input_.summary,createdAtUtc: dateRfc3339Serializer(input_.createdAtUtc)
  }!;
}export function jsonWorkflowArtifactRecordToApplicationTransform(
  input_?: any,
): WorkflowArtifactRecord {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,runId: input_.runId,kind: input_.kind,nodeId: input_.nodeId,name: input_.name,contentType: input_.contentType,storagePath: input_.storagePath,summary: input_.summary,createdAtUtc: dateDeserializer(input_.createdAtUtc)!
  }!;
}export function jsonArrayWorkflowExternalRequestRecordToTransportTransform(
  items_?: Array<WorkflowExternalRequestRecord> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonWorkflowExternalRequestRecordToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayWorkflowExternalRequestRecordToApplicationTransform(
  items_?: any,
): Array<WorkflowExternalRequestRecord> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonWorkflowExternalRequestRecordToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonWorkflowExternalRequestRecordToTransportTransform(
  input_?: WorkflowExternalRequestRecord | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,runId: input_.runId,kind: input_.kind,nodeId: input_.nodeId,eventName: input_.eventName,requestJson: input_.requestJson,responseJson: input_.responseJson,createdAtUtc: dateRfc3339Serializer(input_.createdAtUtc),respondedAtUtc: dateRfc3339Serializer(input_.respondedAtUtc)
  }!;
}export function jsonWorkflowExternalRequestRecordToApplicationTransform(
  input_?: any,
): WorkflowExternalRequestRecord {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,runId: input_.runId,kind: input_.kind,nodeId: input_.nodeId,eventName: input_.eventName,requestJson: input_.requestJson,responseJson: input_.responseJson,createdAtUtc: dateDeserializer(input_.createdAtUtc)!,respondedAtUtc: dateDeserializer(input_.respondedAtUtc)!
  }!;
}export function jsonArrayWorkflowCheckpointRecordToTransportTransform(
  items_?: Array<WorkflowCheckpointRecord> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonWorkflowCheckpointRecordToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayWorkflowCheckpointRecordToApplicationTransform(
  items_?: any,
): Array<WorkflowCheckpointRecord> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonWorkflowCheckpointRecordToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonWorkflowCheckpointRecordToTransportTransform(
  input_?: WorkflowCheckpointRecord | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,runId: input_.runId,workflowId: input_.workflowId,versionId: input_.versionId,backend: input_.backend,kind: input_.kind,trustBoundary: input_.trustBoundary,resumeAvailability: input_.resumeAvailability,nodeId: input_.nodeId,externalRequestId: input_.externalRequestId,backendCheckpointId: input_.backendCheckpointId,payloadReference: input_.payloadReference,payloadHash: input_.payloadHash,summary: input_.summary,resumeUnavailableReason: input_.resumeUnavailableReason,createdAtUtc: dateRfc3339Serializer(input_.createdAtUtc),resumedAtUtc: dateRfc3339Serializer(input_.resumedAtUtc)
  }!;
}export function jsonWorkflowCheckpointRecordToApplicationTransform(
  input_?: any,
): WorkflowCheckpointRecord {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,runId: input_.runId,workflowId: input_.workflowId,versionId: input_.versionId,backend: input_.backend,kind: input_.kind,trustBoundary: input_.trustBoundary,resumeAvailability: input_.resumeAvailability,nodeId: input_.nodeId,externalRequestId: input_.externalRequestId,backendCheckpointId: input_.backendCheckpointId,payloadReference: input_.payloadReference,payloadHash: input_.payloadHash,summary: input_.summary,resumeUnavailableReason: input_.resumeUnavailableReason,createdAtUtc: dateDeserializer(input_.createdAtUtc)!,resumedAtUtc: dateDeserializer(input_.resumedAtUtc)!
  }!;
}export function jsonWorkflowExternalRequestResponseApiRequestToTransportTransform(
  input_?: WorkflowExternalRequestResponseApiRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    responseJson: input_.responseJson
  }!;
}export function jsonWorkflowExternalRequestResponseApiRequestToApplicationTransform(
  input_?: any,
): WorkflowExternalRequestResponseApiRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    responseJson: input_.responseJson
  }!;
}export function jsonWorkflowLaunchIdempotencyEvidenceToTransportTransform(
  input_?: WorkflowLaunchIdempotencyEvidence | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    idempotencyKeyHash: input_.idempotencyKeyHash,requestFingerprint: input_.requestFingerprint,canonicalInputHash: input_.canonicalInputHash,workflowId: input_.workflowId,selectionKind: input_.selectionKind,requestedVersionId: input_.requestedVersionId,resolvedVersionId: input_.resolvedVersionId,resolvedBackend: input_.resolvedBackend,originalRunId: input_.originalRunId,claimState: input_.claimState,runState: input_.runState,isTerminal: input_.isTerminal,createdAtUtc: dateRfc3339Serializer(input_.createdAtUtc),completedAtUtc: dateRfc3339Serializer(input_.completedAtUtc),wasReplayed: input_.wasReplayed,replayCount: input_.replayCount,lastReplayedAtUtc: dateRfc3339Serializer(input_.lastReplayedAtUtc)
  }!;
}export function jsonWorkflowLaunchIdempotencyEvidenceToApplicationTransform(
  input_?: any,
): WorkflowLaunchIdempotencyEvidence {
  if(!input_) {
    return input_ as any;
  }
    return {
    idempotencyKeyHash: input_.idempotencyKeyHash,requestFingerprint: input_.requestFingerprint,canonicalInputHash: input_.canonicalInputHash,workflowId: input_.workflowId,selectionKind: input_.selectionKind,requestedVersionId: input_.requestedVersionId,resolvedVersionId: input_.resolvedVersionId,resolvedBackend: input_.resolvedBackend,originalRunId: input_.originalRunId,claimState: input_.claimState,runState: input_.runState,isTerminal: input_.isTerminal,createdAtUtc: dateDeserializer(input_.createdAtUtc)!,completedAtUtc: dateDeserializer(input_.completedAtUtc)!,wasReplayed: input_.wasReplayed,replayCount: input_.replayCount,lastReplayedAtUtc: dateDeserializer(input_.lastReplayedAtUtc)!
  }!;
}export function jsonArrayWorkflowCatalogItemToTransportTransform(
  items_?: Array<WorkflowCatalogItem> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonWorkflowCatalogItemToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayWorkflowCatalogItemToApplicationTransform(
  items_?: any,
): Array<WorkflowCatalogItem> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonWorkflowCatalogItemToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonWorkflowCatalogItemToTransportTransform(
  input_?: WorkflowCatalogItem | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,versionId: input_.versionId,name: input_.name,description: input_.description,status: input_.status,preferredBackend: input_.preferredBackend,updatedAtUtc: dateRfc3339Serializer(input_.updatedAtUtc),templateKey: input_.templateKey,templatePackKey: input_.templatePackKey,templatePackVersion: input_.templatePackVersion,sourceHash: input_.sourceHash,externalNamespace: input_.externalNamespace,externalKey: input_.externalKey
  }!;
}export function jsonWorkflowCatalogItemToApplicationTransform(
  input_?: any,
): WorkflowCatalogItem {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,versionId: input_.versionId,name: input_.name,description: input_.description,status: input_.status,preferredBackend: input_.preferredBackend,updatedAtUtc: dateDeserializer(input_.updatedAtUtc)!,templateKey: input_.templateKey,templatePackKey: input_.templatePackKey,templatePackVersion: input_.templatePackVersion,sourceHash: input_.sourceHash,externalNamespace: input_.externalNamespace,externalKey: input_.externalKey
  }!;
}export function jsonWorkflowDefinitionSaveRequestToTransportTransform(
  input_?: WorkflowDefinitionSaveRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,expectedVersionId: input_.expectedVersionId,name: input_.name,description: input_.description,status: input_.status,graph: jsonWorkflowGraphToTransportTransform(input_.graph),runtimePolicy: jsonWorkflowRuntimePolicyToTransportTransform(input_.runtimePolicy),inputParameters: jsonArrayWorkflowInputParameterDescriptorToTransportTransform(input_.inputParameters),externalNamespace: input_.externalNamespace,externalKey: input_.externalKey
  }!;
}export function jsonWorkflowDefinitionSaveRequestToApplicationTransform(
  input_?: any,
): WorkflowDefinitionSaveRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,expectedVersionId: input_.expectedVersionId,name: input_.name,description: input_.description,status: input_.status,graph: jsonWorkflowGraphToApplicationTransform(input_.graph),runtimePolicy: jsonWorkflowRuntimePolicyToApplicationTransform(input_.runtimePolicy),inputParameters: jsonArrayWorkflowInputParameterDescriptorToApplicationTransform(input_.inputParameters),externalNamespace: input_.externalNamespace,externalKey: input_.externalKey
  }!;
}export function jsonWorkflowGraphToTransportTransform(
  input_?: WorkflowGraph | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    startNodeId: input_.startNodeId,nodes: jsonArrayWorkflowNodeToTransportTransform(input_.nodes),edges: jsonArrayWorkflowEdgeToTransportTransform(input_.edges)
  }!;
}export function jsonWorkflowGraphToApplicationTransform(
  input_?: any,
): WorkflowGraph {
  if(!input_) {
    return input_ as any;
  }
    return {
    startNodeId: input_.startNodeId,nodes: jsonArrayWorkflowNodeToApplicationTransform(input_.nodes),edges: jsonArrayWorkflowEdgeToApplicationTransform(input_.edges)
  }!;
}export function jsonArrayWorkflowNodeToTransportTransform(
  items_?: Array<WorkflowNode> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonWorkflowNodeToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayWorkflowNodeToApplicationTransform(
  items_?: any,
): Array<WorkflowNode> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonWorkflowNodeToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonWorkflowNodeToTransportTransform(
  input_?: WorkflowNode | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,kind: input_.kind,name: input_.name,ports: jsonArrayWorkflowPortToTransportTransform(input_.ports),settings: jsonWorkflowNodeSettingsToTransportTransform(input_.settings),canvasX: input_.canvasX,canvasY: input_.canvasY
  }!;
}export function jsonWorkflowNodeToApplicationTransform(
  input_?: any,
): WorkflowNode {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,kind: input_.kind,name: input_.name,ports: jsonArrayWorkflowPortToApplicationTransform(input_.ports),settings: jsonWorkflowNodeSettingsToApplicationTransform(input_.settings),canvasX: input_.canvasX,canvasY: input_.canvasY
  }!;
}export function jsonArrayWorkflowPortToTransportTransform(
  items_?: Array<WorkflowPort> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonWorkflowPortToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayWorkflowPortToApplicationTransform(
  items_?: any,
): Array<WorkflowPort> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonWorkflowPortToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonWorkflowPortToTransportTransform(
  input_?: WorkflowPort | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,name: input_.name,direction: input_.direction,shape: jsonWorkflowValueShapeToTransportTransform(input_.shape),required: input_.required
  }!;
}export function jsonWorkflowPortToApplicationTransform(
  input_?: any,
): WorkflowPort {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,name: input_.name,direction: input_.direction,shape: jsonWorkflowValueShapeToApplicationTransform(input_.shape),required: input_.required
  }!;
}export function jsonWorkflowValueShapeToTransportTransform(
  input_?: WorkflowValueShape | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: input_.kind,schemaJson: input_.schemaJson,description: input_.description
  }!;
}export function jsonWorkflowValueShapeToApplicationTransform(
  input_?: any,
): WorkflowValueShape {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: input_.kind,schemaJson: input_.schemaJson,description: input_.description
  }!;
}export function jsonWorkflowNodeSettingsToTransportTransform(
  input_?: WorkflowNodeSettings | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    componentId: input_.componentId,agentId: input_.agentId,subworkflowId: input_.subworkflowId,externalRequestKind: input_.externalRequestKind,instructions: input_.instructions,inputShape: jsonWorkflowValueShapeToTransportTransform(input_.inputShape),resultShape: jsonWorkflowValueShapeToTransportTransform(input_.resultShape),providerProfileId: input_.providerProfileId,model: input_.model,executorId: input_.executorId,executorSettingsJson: input_.executorSettingsJson,executionPolicy: jsonWorkflowExecutorExecutionPolicyToTransportTransform(input_.executionPolicy)
  }!;
}export function jsonWorkflowNodeSettingsToApplicationTransform(
  input_?: any,
): WorkflowNodeSettings {
  if(!input_) {
    return input_ as any;
  }
    return {
    componentId: input_.componentId,agentId: input_.agentId,subworkflowId: input_.subworkflowId,externalRequestKind: input_.externalRequestKind,instructions: input_.instructions,inputShape: jsonWorkflowValueShapeToApplicationTransform(input_.inputShape),resultShape: jsonWorkflowValueShapeToApplicationTransform(input_.resultShape),providerProfileId: input_.providerProfileId,model: input_.model,executorId: input_.executorId,executorSettingsJson: input_.executorSettingsJson,executionPolicy: jsonWorkflowExecutorExecutionPolicyToApplicationTransform(input_.executionPolicy)
  }!;
}export function jsonWorkflowExecutorExecutionPolicyToTransportTransform(
  input_?: WorkflowExecutorExecutionPolicy | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    timeoutSeconds: input_.timeoutSeconds,maxRetryAttempts: input_.maxRetryAttempts,retryDelayMilliseconds: input_.retryDelayMilliseconds,captureOutputArtifact: input_.captureOutputArtifact
  }!;
}export function jsonWorkflowExecutorExecutionPolicyToApplicationTransform(
  input_?: any,
): WorkflowExecutorExecutionPolicy {
  if(!input_) {
    return input_ as any;
  }
    return {
    timeoutSeconds: input_.timeoutSeconds,maxRetryAttempts: input_.maxRetryAttempts,retryDelayMilliseconds: input_.retryDelayMilliseconds,captureOutputArtifact: input_.captureOutputArtifact
  }!;
}export function jsonArrayWorkflowEdgeToTransportTransform(
  items_?: Array<WorkflowEdge> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonWorkflowEdgeToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayWorkflowEdgeToApplicationTransform(
  items_?: any,
): Array<WorkflowEdge> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonWorkflowEdgeToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonWorkflowEdgeToTransportTransform(
  input_?: WorkflowEdge | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,sourceNodeId: input_.sourceNodeId,sourcePortId: input_.sourcePortId,targetNodeId: input_.targetNodeId,targetPortId: input_.targetPortId,kind: input_.kind,conditionExpression: input_.conditionExpression,routing: jsonWorkflowEdgeRoutingToTransportTransform(input_.routing)
  }!;
}export function jsonWorkflowEdgeToApplicationTransform(
  input_?: any,
): WorkflowEdge {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,sourceNodeId: input_.sourceNodeId,sourcePortId: input_.sourcePortId,targetNodeId: input_.targetNodeId,targetPortId: input_.targetPortId,kind: input_.kind,conditionExpression: input_.conditionExpression,routing: jsonWorkflowEdgeRoutingToApplicationTransform(input_.routing)
  }!;
}export function jsonWorkflowEdgeRoutingToTransportTransform(
  input_?: WorkflowEdgeRouting | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: input_.kind,label: input_.label,jsonPath: input_.jsonPath,operator: input_.operator,expectedValueJson: input_.expectedValueJson,expectedValueKind: input_.expectedValueKind,caseSensitive: input_.caseSensitive,fanOutTargetIndex: input_.fanOutTargetIndex,routingLanguage: input_.routingLanguage
  }!;
}export function jsonWorkflowEdgeRoutingToApplicationTransform(
  input_?: any,
): WorkflowEdgeRouting {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: input_.kind,label: input_.label,jsonPath: input_.jsonPath,operator: input_.operator,expectedValueJson: input_.expectedValueJson,expectedValueKind: input_.expectedValueKind,caseSensitive: input_.caseSensitive,fanOutTargetIndex: input_.fanOutTargetIndex,routingLanguage: input_.routingLanguage
  }!;
}export function jsonWorkflowRuntimePolicyToTransportTransform(
  input_?: WorkflowRuntimePolicy | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    preferredBackend: input_.preferredBackend,allowInProcessPreviewRuns: input_.allowInProcessPreviewRuns,requireDurableProductionRuns: input_.requireDurableProductionRuns,exposeAzureFunctionsStatusEndpoint: input_.exposeAzureFunctionsStatusEndpoint,exposeAzureFunctionsMcpTool: input_.exposeAzureFunctionsMcpTool
  }!;
}export function jsonWorkflowRuntimePolicyToApplicationTransform(
  input_?: any,
): WorkflowRuntimePolicy {
  if(!input_) {
    return input_ as any;
  }
    return {
    preferredBackend: input_.preferredBackend,allowInProcessPreviewRuns: input_.allowInProcessPreviewRuns,requireDurableProductionRuns: input_.requireDurableProductionRuns,exposeAzureFunctionsStatusEndpoint: input_.exposeAzureFunctionsStatusEndpoint,exposeAzureFunctionsMcpTool: input_.exposeAzureFunctionsMcpTool
  }!;
}export function jsonArrayWorkflowInputParameterDescriptorToTransportTransform(
  items_?: Array<WorkflowInputParameterDescriptor> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonWorkflowInputParameterDescriptorToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayWorkflowInputParameterDescriptorToApplicationTransform(
  items_?: any,
): Array<WorkflowInputParameterDescriptor> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonWorkflowInputParameterDescriptorToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonWorkflowInputParameterDescriptorToTransportTransform(
  input_?: WorkflowInputParameterDescriptor | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    key: input_.key,label: input_.label,kind: input_.kind,isRequired: input_.isRequired,description: input_.description,jsonPath: input_.jsonPath,defaultValue: input_.defaultValue,optionSource: jsonWorkflowInputParameterOptionSourceToTransportTransform(input_.optionSource),minimumValue: input_.minimumValue,maximumValue: input_.maximumValue,placeholder: input_.placeholder
  }!;
}export function jsonWorkflowInputParameterDescriptorToApplicationTransform(
  input_?: any,
): WorkflowInputParameterDescriptor {
  if(!input_) {
    return input_ as any;
  }
    return {
    key: input_.key,label: input_.label,kind: input_.kind,isRequired: input_.isRequired,description: input_.description,jsonPath: input_.jsonPath,defaultValue: input_.defaultValue,optionSource: jsonWorkflowInputParameterOptionSourceToApplicationTransform(input_.optionSource),minimumValue: input_.minimumValue,maximumValue: input_.maximumValue,placeholder: input_.placeholder
  }!;
}export function jsonWorkflowInputParameterOptionSourceToTransportTransform(
  input_?: WorkflowInputParameterOptionSource | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: input_.kind,dependsOnParameterKey: input_.dependsOnParameterKey,staticOptions: jsonArrayWorkflowInputParameterOptionToTransportTransform(input_.staticOptions)
  }!;
}export function jsonWorkflowInputParameterOptionSourceToApplicationTransform(
  input_?: any,
): WorkflowInputParameterOptionSource {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: input_.kind,dependsOnParameterKey: input_.dependsOnParameterKey,staticOptions: jsonArrayWorkflowInputParameterOptionToApplicationTransform(input_.staticOptions)
  }!;
}export function jsonArrayWorkflowInputParameterOptionToTransportTransform(
  items_?: Array<WorkflowInputParameterOption> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonWorkflowInputParameterOptionToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayWorkflowInputParameterOptionToApplicationTransform(
  items_?: any,
): Array<WorkflowInputParameterOption> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonWorkflowInputParameterOptionToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonWorkflowInputParameterOptionToTransportTransform(
  input_?: WorkflowInputParameterOption | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value,label: input_.label,description: input_.description
  }!;
}export function jsonWorkflowInputParameterOptionToApplicationTransform(
  input_?: any,
): WorkflowInputParameterOption {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value,label: input_.label,description: input_.description
  }!;
}export function jsonWorkflowDefinitionToTransportTransform(
  input_?: WorkflowDefinition | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,versionId: input_.versionId,name: input_.name,description: input_.description,status: input_.status,graph: jsonWorkflowGraphToTransportTransform(input_.graph),runtimePolicy: jsonWorkflowRuntimePolicyToTransportTransform(input_.runtimePolicy),createdAtUtc: dateRfc3339Serializer(input_.createdAtUtc),updatedAtUtc: dateRfc3339Serializer(input_.updatedAtUtc),inputParameters: jsonArrayWorkflowInputParameterDescriptorToTransportTransform(input_.inputParameters),templateKey: input_.templateKey,templatePackKey: input_.templatePackKey,templatePackVersion: input_.templatePackVersion,sourceHash: input_.sourceHash,externalNamespace: input_.externalNamespace,externalKey: input_.externalKey
  }!;
}export function jsonWorkflowDefinitionToApplicationTransform(
  input_?: any,
): WorkflowDefinition {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,versionId: input_.versionId,name: input_.name,description: input_.description,status: input_.status,graph: jsonWorkflowGraphToApplicationTransform(input_.graph),runtimePolicy: jsonWorkflowRuntimePolicyToApplicationTransform(input_.runtimePolicy),createdAtUtc: dateDeserializer(input_.createdAtUtc)!,updatedAtUtc: dateDeserializer(input_.updatedAtUtc)!,inputParameters: jsonArrayWorkflowInputParameterDescriptorToApplicationTransform(input_.inputParameters),templateKey: input_.templateKey,templatePackKey: input_.templatePackKey,templatePackVersion: input_.templatePackVersion,sourceHash: input_.sourceHash,externalNamespace: input_.externalNamespace,externalKey: input_.externalKey
  }!;
}export function jsonWorkflowStableIdentityResolutionToTransportTransform(
  input_?: WorkflowStableIdentityResolution | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    identityKind: jsonWorkflowStableIdentityKindToTransportTransform(input_.identityKind),namespace: input_.namespace,key: input_.key,status: jsonWorkflowStableIdentityResolutionStatusToTransportTransform(input_.status),workflowId: input_.workflowId,runnableVersionId: input_.runnableVersionId,materializations: jsonArrayWorkflowCatalogItemToTransportTransform(input_.materializations),message: input_.message
  }!;
}export function jsonWorkflowStableIdentityResolutionToApplicationTransform(
  input_?: any,
): WorkflowStableIdentityResolution {
  if(!input_) {
    return input_ as any;
  }
    return {
    identityKind: jsonWorkflowStableIdentityKindToApplicationTransform(input_.identityKind),namespace: input_.namespace,key: input_.key,status: jsonWorkflowStableIdentityResolutionStatusToApplicationTransform(input_.status),workflowId: input_.workflowId,runnableVersionId: input_.runnableVersionId,materializations: jsonArrayWorkflowCatalogItemToApplicationTransform(input_.materializations),message: input_.message
  }!;
}export function jsonWorkflowStableIdentityKindToTransportTransform(
  input_?: WorkflowStableIdentityKind | null,
): any {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonWorkflowStableIdentityKindToApplicationTransform(
  input_?: any,
): WorkflowStableIdentityKind {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonWorkflowStableIdentityResolutionStatusToTransportTransform(
  input_?: WorkflowStableIdentityResolutionStatus | null,
): any {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonWorkflowStableIdentityResolutionStatusToApplicationTransform(
  input_?: any,
): WorkflowStableIdentityResolutionStatus {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonWorkflowSettingsToTransportTransform(
  input_?: WorkflowSettings | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    defaultRuntimePolicy: jsonWorkflowRuntimePolicyToTransportTransform(input_.defaultRuntimePolicy),artifactPolicy: jsonWorkflowArtifactPolicyToTransportTransform(input_.artifactPolicy),humanInLoopPolicy: jsonWorkflowHumanInLoopPolicyToTransportTransform(input_.humanInLoopPolicy),voiceSettings: jsonAgentVoiceSettingsToTransportTransform(input_.voiceSettings),normalizedVoiceSettings: jsonAgentVoiceSettingsToTransportTransform(input_.normalizedVoiceSettings)
  }!;
}export function jsonWorkflowSettingsToApplicationTransform(
  input_?: any,
): WorkflowSettings {
  if(!input_) {
    return input_ as any;
  }
    return {
    defaultRuntimePolicy: jsonWorkflowRuntimePolicyToApplicationTransform(input_.defaultRuntimePolicy),artifactPolicy: jsonWorkflowArtifactPolicyToApplicationTransform(input_.artifactPolicy),humanInLoopPolicy: jsonWorkflowHumanInLoopPolicyToApplicationTransform(input_.humanInLoopPolicy),voiceSettings: jsonAgentVoiceSettingsToApplicationTransform(input_.voiceSettings),normalizedVoiceSettings: jsonAgentVoiceSettingsToApplicationTransform(input_.normalizedVoiceSettings)
  }!;
}export function jsonWorkflowArtifactPolicyToTransportTransform(
  input_?: WorkflowArtifactPolicy | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    captureNodeOutputs: input_.captureNodeOutputs,maxInlinePayloadCharacters: input_.maxInlinePayloadCharacters,allowedArtifactKinds: jsonArrayWorkflowArtifactKindToTransportTransform(input_.allowedArtifactKinds)
  }!;
}export function jsonWorkflowArtifactPolicyToApplicationTransform(
  input_?: any,
): WorkflowArtifactPolicy {
  if(!input_) {
    return input_ as any;
  }
    return {
    captureNodeOutputs: input_.captureNodeOutputs,maxInlinePayloadCharacters: input_.maxInlinePayloadCharacters,allowedArtifactKinds: jsonArrayWorkflowArtifactKindToApplicationTransform(input_.allowedArtifactKinds)
  }!;
}export function jsonArrayWorkflowArtifactKindToTransportTransform(
  items_?: Array<number> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = item as any;
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayWorkflowArtifactKindToApplicationTransform(
  items_?: any,
): Array<number> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = item as any;
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonWorkflowHumanInLoopPolicyToTransportTransform(
  input_?: WorkflowHumanInLoopPolicy | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    allowHumanInputNodes: input_.allowHumanInputNodes,requireApprovalForToolUse: input_.requireApprovalForToolUse,defaultRequestTimeoutMinutes: input_.defaultRequestTimeoutMinutes
  }!;
}export function jsonWorkflowHumanInLoopPolicyToApplicationTransform(
  input_?: any,
): WorkflowHumanInLoopPolicy {
  if(!input_) {
    return input_ as any;
  }
    return {
    allowHumanInputNodes: input_.allowHumanInputNodes,requireApprovalForToolUse: input_.requireApprovalForToolUse,defaultRequestTimeoutMinutes: input_.defaultRequestTimeoutMinutes
  }!;
}export function jsonAgentVoiceSettingsToTransportTransform(
  input_?: AgentVoiceSettings | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    speechToText: jsonAgentSpeechToTextSettingsToTransportTransform(input_.speechToText),textToSpeech: jsonAgentTextToSpeechSettingsToTransportTransform(input_.textToSpeech),sampleText: input_.sampleText,disclosureText: input_.disclosureText
  }!;
}export function jsonAgentVoiceSettingsToApplicationTransform(
  input_?: any,
): AgentVoiceSettings {
  if(!input_) {
    return input_ as any;
  }
    return {
    speechToText: jsonAgentSpeechToTextSettingsToApplicationTransform(input_.speechToText),textToSpeech: jsonAgentTextToSpeechSettingsToApplicationTransform(input_.textToSpeech),sampleText: input_.sampleText,disclosureText: input_.disclosureText
  }!;
}export function jsonAgentSpeechToTextSettingsToTransportTransform(
  input_?: AgentSpeechToTextSettings | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    isEnabled: input_.isEnabled,driverKind: input_.driverKind,providerProfileId: input_.providerProfileId,model: input_.model,language: input_.language,prompt: input_.prompt
  }!;
}export function jsonAgentSpeechToTextSettingsToApplicationTransform(
  input_?: any,
): AgentSpeechToTextSettings {
  if(!input_) {
    return input_ as any;
  }
    return {
    isEnabled: input_.isEnabled,driverKind: input_.driverKind,providerProfileId: input_.providerProfileId,model: input_.model,language: input_.language,prompt: input_.prompt
  }!;
}export function jsonAgentTextToSpeechSettingsToTransportTransform(
  input_?: AgentTextToSpeechSettings | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    isEnabled: input_.isEnabled,driverKind: input_.driverKind,providerProfileId: input_.providerProfileId,model: input_.model,voiceId: input_.voiceId,responseFormat: input_.responseFormat,instructions: input_.instructions
  }!;
}export function jsonAgentTextToSpeechSettingsToApplicationTransform(
  input_?: any,
): AgentTextToSpeechSettings {
  if(!input_) {
    return input_ as any;
  }
    return {
    isEnabled: input_.isEnabled,driverKind: input_.driverKind,providerProfileId: input_.providerProfileId,model: input_.model,voiceId: input_.voiceId,responseFormat: input_.responseFormat,instructions: input_.instructions
  }!;
}export function jsonArrayWorkflowExecutorDescriptorToTransportTransform(
  items_?: Array<WorkflowExecutorDescriptor> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonWorkflowExecutorDescriptorToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayWorkflowExecutorDescriptorToApplicationTransform(
  items_?: any,
): Array<WorkflowExecutorDescriptor> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonWorkflowExecutorDescriptorToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonWorkflowExecutorDescriptorToTransportTransform(
  input_?: WorkflowExecutorDescriptor | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,name: input_.name,description: input_.description,category: input_.category,iconName: input_.iconName,setupRendererKey: input_.setupRendererKey,inputShape: jsonWorkflowValueShapeToTransportTransform(input_.inputShape),resultShape: jsonWorkflowValueShapeToTransportTransform(input_.resultShape),settingsSchemaJson: input_.settingsSchemaJson,defaultSettingsJson: input_.defaultSettingsJson,defaultPolicy: jsonWorkflowExecutorExecutionPolicyToTransportTransform(input_.defaultPolicy),isImplemented: input_.isImplemented,source: jsonWorkflowExecutorSourceDescriptorToTransportTransform(input_.source),availability: jsonWorkflowExecutorAvailabilityDescriptorToTransportTransform(input_.availability),settingsSchema: jsonWorkflowExecutorSettingsSchemaDescriptorToTransportTransform(input_.settingsSchema),configurationSchema: jsonConfigurationSchemaToTransportTransform(input_.configurationSchema),settingsPresentationMode: input_.settingsPresentationMode,simulation: jsonWorkflowExecutorSimulationDescriptorToTransportTransform(input_.simulation),permissionPolicy: jsonWorkflowExecutorPermissionPolicyToTransportTransform(input_.permissionPolicy),sideEffects: jsonWorkflowExecutorSideEffectDescriptorToTransportTransform(input_.sideEffects),deterministicTestMode: jsonWorkflowExecutorDeterministicTestModeDescriptorToTransportTransform(input_.deterministicTestMode),canExecute: input_.canExecute
  }!;
}export function jsonWorkflowExecutorDescriptorToApplicationTransform(
  input_?: any,
): WorkflowExecutorDescriptor {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,name: input_.name,description: input_.description,category: input_.category,iconName: input_.iconName,setupRendererKey: input_.setupRendererKey,inputShape: jsonWorkflowValueShapeToApplicationTransform(input_.inputShape),resultShape: jsonWorkflowValueShapeToApplicationTransform(input_.resultShape),settingsSchemaJson: input_.settingsSchemaJson,defaultSettingsJson: input_.defaultSettingsJson,defaultPolicy: jsonWorkflowExecutorExecutionPolicyToApplicationTransform(input_.defaultPolicy),isImplemented: input_.isImplemented,source: jsonWorkflowExecutorSourceDescriptorToApplicationTransform(input_.source),availability: jsonWorkflowExecutorAvailabilityDescriptorToApplicationTransform(input_.availability),settingsSchema: jsonWorkflowExecutorSettingsSchemaDescriptorToApplicationTransform(input_.settingsSchema),configurationSchema: jsonConfigurationSchemaToApplicationTransform(input_.configurationSchema),settingsPresentationMode: input_.settingsPresentationMode,simulation: jsonWorkflowExecutorSimulationDescriptorToApplicationTransform(input_.simulation),permissionPolicy: jsonWorkflowExecutorPermissionPolicyToApplicationTransform(input_.permissionPolicy),sideEffects: jsonWorkflowExecutorSideEffectDescriptorToApplicationTransform(input_.sideEffects),deterministicTestMode: jsonWorkflowExecutorDeterministicTestModeDescriptorToApplicationTransform(input_.deterministicTestMode),canExecute: input_.canExecute
  }!;
}export function jsonWorkflowExecutorSourceDescriptorToTransportTransform(
  input_?: WorkflowExecutorSourceDescriptor | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: input_.kind,sourceId: input_.sourceId,sourceVersion: input_.sourceVersion,pluginId: input_.pluginId,packageId: input_.packageId,trustLevel: input_.trustLevel,displayName: input_.displayName,icon: jsonUiIconDescriptorToTransportTransform(input_.icon)
  }!;
}export function jsonWorkflowExecutorSourceDescriptorToApplicationTransform(
  input_?: any,
): WorkflowExecutorSourceDescriptor {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: input_.kind,sourceId: input_.sourceId,sourceVersion: input_.sourceVersion,pluginId: input_.pluginId,packageId: input_.packageId,trustLevel: input_.trustLevel,displayName: input_.displayName,icon: jsonUiIconDescriptorToApplicationTransform(input_.icon)
  }!;
}export function jsonUiIconDescriptorToTransportTransform(
  input_?: UiIconDescriptor | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: input_.kind,value: input_.value,packageId: input_.packageId,label: input_.label
  }!;
}export function jsonUiIconDescriptorToApplicationTransform(
  input_?: any,
): UiIconDescriptor {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: input_.kind,value: input_.value,packageId: input_.packageId,label: input_.label
  }!;
}export function jsonWorkflowExecutorAvailabilityDescriptorToTransportTransform(
  input_?: WorkflowExecutorAvailabilityDescriptor | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: input_.kind,isRunnable: input_.isRunnable,reasonCode: input_.reasonCode,message: input_.message
  }!;
}export function jsonWorkflowExecutorAvailabilityDescriptorToApplicationTransform(
  input_?: any,
): WorkflowExecutorAvailabilityDescriptor {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: input_.kind,isRunnable: input_.isRunnable,reasonCode: input_.reasonCode,message: input_.message
  }!;
}export function jsonWorkflowExecutorSettingsSchemaDescriptorToTransportTransform(
  input_?: WorkflowExecutorSettingsSchemaDescriptor | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: input_.kind,version: input_.version,schemaJson: input_.schemaJson,hasSchema: input_.hasSchema
  }!;
}export function jsonWorkflowExecutorSettingsSchemaDescriptorToApplicationTransform(
  input_?: any,
): WorkflowExecutorSettingsSchemaDescriptor {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: input_.kind,version: input_.version,schemaJson: input_.schemaJson,hasSchema: input_.hasSchema
  }!;
}export function jsonConfigurationSchemaToTransportTransform(
  input_?: ConfigurationSchema | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    version: input_.version,fields: jsonArrayConfigurationFieldDescriptorToTransportTransform(input_.fields)
  }!;
}export function jsonConfigurationSchemaToApplicationTransform(
  input_?: any,
): ConfigurationSchema {
  if(!input_) {
    return input_ as any;
  }
    return {
    version: input_.version,fields: jsonArrayConfigurationFieldDescriptorToApplicationTransform(input_.fields)
  }!;
}export function jsonArrayConfigurationFieldDescriptorToTransportTransform(
  items_?: Array<ConfigurationFieldDescriptor> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonConfigurationFieldDescriptorToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayConfigurationFieldDescriptorToApplicationTransform(
  items_?: any,
): Array<ConfigurationFieldDescriptor> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonConfigurationFieldDescriptorToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonConfigurationFieldDescriptorToTransportTransform(
  input_?: ConfigurationFieldDescriptor | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    key: input_.key,label: input_.label,fieldType: input_.fieldType,isRequired: input_.isRequired,helpText: input_.helpText,options: jsonArrayConfigurationFieldOptionToTransportTransform(input_.options),numberKind: input_.numberKind
  }!;
}export function jsonConfigurationFieldDescriptorToApplicationTransform(
  input_?: any,
): ConfigurationFieldDescriptor {
  if(!input_) {
    return input_ as any;
  }
    return {
    key: input_.key,label: input_.label,fieldType: input_.fieldType,isRequired: input_.isRequired,helpText: input_.helpText,options: jsonArrayConfigurationFieldOptionToApplicationTransform(input_.options),numberKind: input_.numberKind
  }!;
}export function jsonArrayConfigurationFieldOptionToTransportTransform(
  items_?: Array<ConfigurationFieldOption> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonConfigurationFieldOptionToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayConfigurationFieldOptionToApplicationTransform(
  items_?: any,
): Array<ConfigurationFieldOption> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonConfigurationFieldOptionToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonConfigurationFieldOptionToTransportTransform(
  input_?: ConfigurationFieldOption | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value,label: input_.label,acceptedValues: jsonArrayStringToTransportTransform(input_.acceptedValues)
  }!;
}export function jsonConfigurationFieldOptionToApplicationTransform(
  input_?: any,
): ConfigurationFieldOption {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value,label: input_.label,acceptedValues: jsonArrayStringToApplicationTransform(input_.acceptedValues)
  }!;
}export function jsonWorkflowExecutorSimulationDescriptorToTransportTransform(
  input_?: WorkflowExecutorSimulationDescriptor | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    supportsPreviewSimulation: input_.supportsPreviewSimulation,outputTemplateJson: input_.outputTemplateJson,description: input_.description
  }!;
}export function jsonWorkflowExecutorSimulationDescriptorToApplicationTransform(
  input_?: any,
): WorkflowExecutorSimulationDescriptor {
  if(!input_) {
    return input_ as any;
  }
    return {
    supportsPreviewSimulation: input_.supportsPreviewSimulation,outputTemplateJson: input_.outputTemplateJson,description: input_.description
  }!;
}export function jsonWorkflowExecutorPermissionPolicyToTransportTransform(
  input_?: WorkflowExecutorPermissionPolicy | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    requiredCapabilities: input_.requiredCapabilities,approvalRequirement: input_.approvalRequirement,requiresApproval: input_.requiresApproval
  }!;
}export function jsonWorkflowExecutorPermissionPolicyToApplicationTransform(
  input_?: any,
): WorkflowExecutorPermissionPolicy {
  if(!input_) {
    return input_ as any;
  }
    return {
    requiredCapabilities: input_.requiredCapabilities,approvalRequirement: input_.approvalRequirement,requiresApproval: input_.requiresApproval
  }!;
}export function jsonWorkflowExecutorSideEffectDescriptorToTransportTransform(
  input_?: WorkflowExecutorSideEffectDescriptor | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: input_.kind,externalMutationKind: input_.externalMutationKind,supportsPreview: input_.supportsPreview,supportsDryRun: input_.supportsDryRun,supportsCommit: input_.supportsCommit,requiresCommitIdempotencyKey: input_.requiresCommitIdempotencyKey,allowsIdempotentRetry: input_.allowsIdempotentRetry,idempotencyKeyJsonPath: input_.idempotencyKeyJsonPath,receiptSchema: input_.receiptSchema,writesExternalState: input_.writesExternalState
  }!;
}export function jsonWorkflowExecutorSideEffectDescriptorToApplicationTransform(
  input_?: any,
): WorkflowExecutorSideEffectDescriptor {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: input_.kind,externalMutationKind: input_.externalMutationKind,supportsPreview: input_.supportsPreview,supportsDryRun: input_.supportsDryRun,supportsCommit: input_.supportsCommit,requiresCommitIdempotencyKey: input_.requiresCommitIdempotencyKey,allowsIdempotentRetry: input_.allowsIdempotentRetry,idempotencyKeyJsonPath: input_.idempotencyKeyJsonPath,receiptSchema: input_.receiptSchema,writesExternalState: input_.writesExternalState
  }!;
}export function jsonWorkflowExecutorDeterministicTestModeDescriptorToTransportTransform(
  input_?: WorkflowExecutorDeterministicTestModeDescriptor | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    isSupported: input_.isSupported,description: input_.description
  }!;
}export function jsonWorkflowExecutorDeterministicTestModeDescriptorToApplicationTransform(
  input_?: any,
): WorkflowExecutorDeterministicTestModeDescriptor {
  if(!input_) {
    return input_ as any;
  }
    return {
    isSupported: input_.isSupported,description: input_.description
  }!;
}export function jsonArrayWorkflowTemplateCatalogItemToTransportTransform(
  items_?: Array<WorkflowTemplateCatalogItem> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonWorkflowTemplateCatalogItemToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayWorkflowTemplateCatalogItemToApplicationTransform(
  items_?: any,
): Array<WorkflowTemplateCatalogItem> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonWorkflowTemplateCatalogItemToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonWorkflowTemplateCatalogItemToTransportTransform(
  input_?: WorkflowTemplateCatalogItem | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    key: input_.key,name: input_.name,description: input_.description,nodeCount: input_.nodeCount,edgeCount: input_.edgeCount,inputCount: input_.inputCount,preferredBackend: input_.preferredBackend,flowShape: input_.flowShape
  }!;
}export function jsonWorkflowTemplateCatalogItemToApplicationTransform(
  input_?: any,
): WorkflowTemplateCatalogItem {
  if(!input_) {
    return input_ as any;
  }
    return {
    key: input_.key,name: input_.name,description: input_.description,nodeCount: input_.nodeCount,edgeCount: input_.edgeCount,inputCount: input_.inputCount,preferredBackend: input_.preferredBackend,flowShape: input_.flowShape
  }!;
}export function jsonWorkflowDefinitionDetailToTransportTransform(
  input_?: WorkflowDefinitionDetail | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    definition: jsonWorkflowDefinitionToTransportTransform(input_.definition),validation: jsonWorkflowValidationResultToTransportTransform(input_.validation)
  }!;
}export function jsonWorkflowDefinitionDetailToApplicationTransform(
  input_?: any,
): WorkflowDefinitionDetail {
  if(!input_) {
    return input_ as any;
  }
    return {
    definition: jsonWorkflowDefinitionToApplicationTransform(input_.definition),validation: jsonWorkflowValidationResultToApplicationTransform(input_.validation)
  }!;
}export function jsonWorkflowValidationResultToTransportTransform(
  input_?: WorkflowValidationResult | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    issues: jsonArrayWorkflowValidationIssueToTransportTransform(input_.issues),succeeded: input_.succeeded
  }!;
}export function jsonWorkflowValidationResultToApplicationTransform(
  input_?: any,
): WorkflowValidationResult {
  if(!input_) {
    return input_ as any;
  }
    return {
    issues: jsonArrayWorkflowValidationIssueToApplicationTransform(input_.issues),succeeded: input_.succeeded
  }!;
}export function jsonArrayWorkflowValidationIssueToTransportTransform(
  items_?: Array<WorkflowValidationIssue> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonWorkflowValidationIssueToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayWorkflowValidationIssueToApplicationTransform(
  items_?: any,
): Array<WorkflowValidationIssue> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonWorkflowValidationIssueToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonWorkflowValidationIssueToTransportTransform(
  input_?: WorkflowValidationIssue | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    code: input_.code,message: input_.message,nodeId: input_.nodeId,edgeId: input_.edgeId
  }!;
}export function jsonWorkflowValidationIssueToApplicationTransform(
  input_?: any,
): WorkflowValidationIssue {
  if(!input_) {
    return input_ as any;
  }
    return {
    code: input_.code,message: input_.message,nodeId: input_.nodeId,edgeId: input_.edgeId
  }!;
}export function jsonWorkflowDefinitionImportRequestToTransportTransform(
  input_?: WorkflowDefinitionImportRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    envelope: jsonWorkflowDefinitionExportEnvelopeToTransportTransform(input_.envelope),name: input_.name,status: input_.status,preserveWorkflowId: input_.preserveWorkflowId
  }!;
}export function jsonWorkflowDefinitionImportRequestToApplicationTransform(
  input_?: any,
): WorkflowDefinitionImportRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    envelope: jsonWorkflowDefinitionExportEnvelopeToApplicationTransform(input_.envelope),name: input_.name,status: input_.status,preserveWorkflowId: input_.preserveWorkflowId
  }!;
}export function jsonWorkflowDefinitionExportEnvelopeToTransportTransform(
  input_?: WorkflowDefinitionExportEnvelope | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    sourceFormat: input_.sourceFormat,definition: jsonWorkflowDefinitionToTransportTransform(input_.definition),validation: jsonWorkflowValidationResultToTransportTransform(input_.validation),exportedAtUtc: dateRfc3339Serializer(input_.exportedAtUtc)
  }!;
}export function jsonWorkflowDefinitionExportEnvelopeToApplicationTransform(
  input_?: any,
): WorkflowDefinitionExportEnvelope {
  if(!input_) {
    return input_ as any;
  }
    return {
    sourceFormat: input_.sourceFormat,definition: jsonWorkflowDefinitionToApplicationTransform(input_.definition),validation: jsonWorkflowValidationResultToApplicationTransform(input_.validation),exportedAtUtc: dateDeserializer(input_.exportedAtUtc)!
  }!;
}export function jsonArrayWorkflowProviderOptionToTransportTransform(
  items_?: Array<WorkflowProviderOption> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonWorkflowProviderOptionToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayWorkflowProviderOptionToApplicationTransform(
  items_?: any,
): Array<WorkflowProviderOption> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonWorkflowProviderOptionToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonWorkflowProviderOptionToTransportTransform(
  input_?: WorkflowProviderOption | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    providerProfileId: input_.providerProfileId,name: input_.name,kind: input_.kind,transport: input_.transport,purpose: input_.purpose,defaultModel: input_.defaultModel,modelOptions: jsonArrayStringToTransportTransform(input_.modelOptions),isEnabled: input_.isEnabled,supportsStreaming: input_.supportsStreaming,supportsTools: input_.supportsTools,supportsStructuredOutput: input_.supportsStructuredOutput,supportsVision: input_.supportsVision,supportsBackgroundResponses: input_.supportsBackgroundResponses
  }!;
}export function jsonWorkflowProviderOptionToApplicationTransform(
  input_?: any,
): WorkflowProviderOption {
  if(!input_) {
    return input_ as any;
  }
    return {
    providerProfileId: input_.providerProfileId,name: input_.name,kind: input_.kind,transport: input_.transport,purpose: input_.purpose,defaultModel: input_.defaultModel,modelOptions: jsonArrayStringToApplicationTransform(input_.modelOptions),isEnabled: input_.isEnabled,supportsStreaming: input_.supportsStreaming,supportsTools: input_.supportsTools,supportsStructuredOutput: input_.supportsStructuredOutput,supportsVision: input_.supportsVision,supportsBackgroundResponses: input_.supportsBackgroundResponses
  }!;
}export function jsonArrayLlmCallComponentToTransportTransform(
  items_?: Array<LlmCallComponent> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonLlmCallComponentToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayLlmCallComponentToApplicationTransform(
  items_?: any,
): Array<LlmCallComponent> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonLlmCallComponentToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonLlmCallComponentToTransportTransform(
  input_?: LlmCallComponent | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,name: input_.name,providerProfileId: input_.providerProfileId,model: input_.model,modality: input_.modality,modelSettings: jsonWorkflowModelSettingsToTransportTransform(input_.modelSettings),instructions: input_.instructions,inputShape: jsonWorkflowValueShapeToTransportTransform(input_.inputShape),resultShape: jsonWorkflowValueShapeToTransportTransform(input_.resultShape),permissions: jsonAgentPermissionsPolicyToTransportTransform(input_.permissions),createdAtUtc: dateRfc3339Serializer(input_.createdAtUtc),updatedAtUtc: dateRfc3339Serializer(input_.updatedAtUtc),promptArtifactId: input_.promptArtifactId,promptVersionId: input_.promptVersionId
  }!;
}export function jsonLlmCallComponentToApplicationTransform(
  input_?: any,
): LlmCallComponent {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,name: input_.name,providerProfileId: input_.providerProfileId,model: input_.model,modality: input_.modality,modelSettings: jsonWorkflowModelSettingsToApplicationTransform(input_.modelSettings),instructions: input_.instructions,inputShape: jsonWorkflowValueShapeToApplicationTransform(input_.inputShape),resultShape: jsonWorkflowValueShapeToApplicationTransform(input_.resultShape),permissions: jsonAgentPermissionsPolicyToApplicationTransform(input_.permissions),createdAtUtc: dateDeserializer(input_.createdAtUtc)!,updatedAtUtc: dateDeserializer(input_.updatedAtUtc)!,promptArtifactId: input_.promptArtifactId,promptVersionId: input_.promptVersionId
  }!;
}export function jsonWorkflowModelSettingsToTransportTransform(
  input_?: WorkflowModelSettings | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    temperature: input_.temperature,maxOutputTokens: input_.maxOutputTokens,requireJsonOutput: input_.requireJsonOutput,responseFormatJsonSchema: input_.responseFormatJsonSchema
  }!;
}export function jsonWorkflowModelSettingsToApplicationTransform(
  input_?: any,
): WorkflowModelSettings {
  if(!input_) {
    return input_ as any;
  }
    return {
    temperature: input_.temperature,maxOutputTokens: input_.maxOutputTokens,requireJsonOutput: input_.requireJsonOutput,responseFormatJsonSchema: input_.responseFormatJsonSchema
  }!;
}export function jsonLlmCallComponentSaveRequestToTransportTransform(
  input_?: LlmCallComponentSaveRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,name: input_.name,providerProfileId: input_.providerProfileId,model: input_.model,modality: input_.modality,modelSettings: jsonWorkflowModelSettingsToTransportTransform(input_.modelSettings),instructions: input_.instructions,inputShape: jsonWorkflowValueShapeToTransportTransform(input_.inputShape),resultShape: jsonWorkflowValueShapeToTransportTransform(input_.resultShape),permissions: jsonAgentPermissionsPolicyToTransportTransform(input_.permissions),promptArtifactId: input_.promptArtifactId,promptVersionId: input_.promptVersionId
  }!;
}export function jsonLlmCallComponentSaveRequestToApplicationTransform(
  input_?: any,
): LlmCallComponentSaveRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,name: input_.name,providerProfileId: input_.providerProfileId,model: input_.model,modality: input_.modality,modelSettings: jsonWorkflowModelSettingsToApplicationTransform(input_.modelSettings),instructions: input_.instructions,inputShape: jsonWorkflowValueShapeToApplicationTransform(input_.inputShape),resultShape: jsonWorkflowValueShapeToApplicationTransform(input_.resultShape),permissions: jsonAgentPermissionsPolicyToApplicationTransform(input_.permissions),promptArtifactId: input_.promptArtifactId,promptVersionId: input_.promptVersionId
  }!;
}export function jsonWorkflowTestRunRequestToTransportTransform(
  input_?: WorkflowTestRunRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    workflowId: input_.workflowId,versionId: input_.versionId,draftDefinition: jsonWorkflowDefinitionToTransportTransform(input_.draftDefinition),inputJson: input_.inputJson,requestedBackend: input_.requestedBackend,validateOnly: input_.validateOnly,previewSimulationPlan: jsonWorkflowPreviewSimulationPlanToTransportTransform(input_.previewSimulationPlan)
  }!;
}export function jsonWorkflowTestRunRequestToApplicationTransform(
  input_?: any,
): WorkflowTestRunRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    workflowId: input_.workflowId,versionId: input_.versionId,draftDefinition: jsonWorkflowDefinitionToApplicationTransform(input_.draftDefinition),inputJson: input_.inputJson,requestedBackend: input_.requestedBackend,validateOnly: input_.validateOnly,previewSimulationPlan: jsonWorkflowPreviewSimulationPlanToApplicationTransform(input_.previewSimulationPlan)
  }!;
}export function jsonWorkflowPreviewSimulationPlanToTransportTransform(
  input_?: WorkflowPreviewSimulationPlan | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    steps: jsonArrayWorkflowPreviewSimulationStepToTransportTransform(input_.steps),hasSteps: input_.hasSteps
  }!;
}export function jsonWorkflowPreviewSimulationPlanToApplicationTransform(
  input_?: any,
): WorkflowPreviewSimulationPlan {
  if(!input_) {
    return input_ as any;
  }
    return {
    steps: jsonArrayWorkflowPreviewSimulationStepToApplicationTransform(input_.steps),hasSteps: input_.hasSteps
  }!;
}export function jsonArrayWorkflowPreviewSimulationStepToTransportTransform(
  items_?: Array<WorkflowPreviewSimulationStep> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonWorkflowPreviewSimulationStepToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayWorkflowPreviewSimulationStepToApplicationTransform(
  items_?: any,
): Array<WorkflowPreviewSimulationStep> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonWorkflowPreviewSimulationStepToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonWorkflowPreviewSimulationStepToTransportTransform(
  input_?: WorkflowPreviewSimulationStep | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    nodeId: input_.nodeId,sourceExecutorId: input_.sourceExecutorId,reason: input_.reason,outputTemplateJson: input_.outputTemplateJson
  }!;
}export function jsonWorkflowPreviewSimulationStepToApplicationTransform(
  input_?: any,
): WorkflowPreviewSimulationStep {
  if(!input_) {
    return input_ as any;
  }
    return {
    nodeId: input_.nodeId,sourceExecutorId: input_.sourceExecutorId,reason: input_.reason,outputTemplateJson: input_.outputTemplateJson
  }!;
}export function jsonWorkflowTestRunResultToTransportTransform(
  input_?: WorkflowTestRunResult | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    succeeded: input_.succeeded,validation: jsonWorkflowValidationResultToTransportTransform(input_.validation),run: jsonWorkflowRunSnapshotToTransportTransform(input_.run),events: jsonArrayWorkflowEventRecordToTransportTransform(input_.events),artifacts: jsonArrayWorkflowArtifactRecordToTransportTransform(input_.artifacts),pendingExternalRequests: jsonArrayWorkflowExternalRequestRecordToTransportTransform(input_.pendingExternalRequests),errorMessage: input_.errorMessage,checkpoints: jsonArrayWorkflowCheckpointRecordToTransportTransform(input_.checkpoints)
  }!;
}export function jsonWorkflowTestRunResultToApplicationTransform(
  input_?: any,
): WorkflowTestRunResult {
  if(!input_) {
    return input_ as any;
  }
    return {
    succeeded: input_.succeeded,validation: jsonWorkflowValidationResultToApplicationTransform(input_.validation),run: jsonWorkflowRunSnapshotToApplicationTransform(input_.run),events: jsonArrayWorkflowEventRecordToApplicationTransform(input_.events),artifacts: jsonArrayWorkflowArtifactRecordToApplicationTransform(input_.artifacts),pendingExternalRequests: jsonArrayWorkflowExternalRequestRecordToApplicationTransform(input_.pendingExternalRequests),errorMessage: input_.errorMessage,checkpoints: jsonArrayWorkflowCheckpointRecordToApplicationTransform(input_.checkpoints)
  }!;
}export function jsonWorkflowRunDetailApiResponseToTransportTransform(
  input_?: WorkflowRunDetailApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    run: jsonWorkflowRunSnapshotToTransportTransform(input_.run),events: jsonArrayWorkflowEventRecordToTransportTransform(input_.events),artifacts: jsonArrayWorkflowArtifactRecordToTransportTransform(input_.artifacts),pendingExternalRequests: jsonArrayWorkflowExternalRequestRecordToTransportTransform(input_.pendingExternalRequests),checkpoints: jsonArrayWorkflowCheckpointRecordToTransportTransform(input_.checkpoints)
  }!;
}export function jsonWorkflowRunDetailApiResponseToApplicationTransform(
  input_?: any,
): WorkflowRunDetailApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    run: jsonWorkflowRunSnapshotToApplicationTransform(input_.run),events: jsonArrayWorkflowEventRecordToApplicationTransform(input_.events),artifacts: jsonArrayWorkflowArtifactRecordToApplicationTransform(input_.artifacts),pendingExternalRequests: jsonArrayWorkflowExternalRequestRecordToApplicationTransform(input_.pendingExternalRequests),checkpoints: jsonArrayWorkflowCheckpointRecordToApplicationTransform(input_.checkpoints)
  }!;
}export function jsonProcessApiContractResponseToTransportTransform(
  input_?: ProcessApiContractResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    endpoints: jsonArrayStringToTransportTransform(input_.endpoints),boundarySummary: input_.boundarySummary
  }!;
}export function jsonProcessApiContractResponseToApplicationTransform(
  input_?: any,
): ProcessApiContractResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    endpoints: jsonArrayStringToApplicationTransform(input_.endpoints),boundarySummary: input_.boundarySummary
  }!;
}export function jsonProcessLaunchApiRequestToTransportTransform(
  input_?: ProcessLaunchApiRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    definitionKey: input_.definitionKey,processDefinitionId: input_.processDefinitionId,liveRunProfileKey: input_.liveRunProfileKey,projectId: input_.projectId,projectNodeId: input_.projectNodeId,requestedBy: input_.requestedBy,variables: jsonRecordStringToTransportTransform(input_.variables),runReadiness: input_.runReadiness,execute: input_.execute
  }!;
}export function jsonProcessLaunchApiRequestToApplicationTransform(
  input_?: any,
): ProcessLaunchApiRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    definitionKey: input_.definitionKey,processDefinitionId: input_.processDefinitionId,liveRunProfileKey: input_.liveRunProfileKey,projectId: input_.projectId,projectNodeId: input_.projectNodeId,requestedBy: input_.requestedBy,variables: jsonRecordStringToApplicationTransform(input_.variables),runReadiness: input_.runReadiness,execute: input_.execute
  }!;
}export function jsonRecordStringToTransportTransform(
  items_?: Record<string, any> | null,
): any {
  if(!items_) {
    return items_ as any;
  }

  const _transformedRecord: any = {};

  for (const [key, value] of Object.entries(items_ ?? {})) {
    const transformedItem = value as any;
    _transformedRecord[key] = transformedItem;
  }

  return _transformedRecord;
}export function jsonRecordStringToApplicationTransform(
  items_?: any,
): Record<string, any> {
  if(!items_) {
    return items_ as any;
  }

  const _transformedRecord: any = {};

  for (const [key, value] of Object.entries(items_ ?? {})) {
    const transformedItem = value as any;
    _transformedRecord[key] = transformedItem;
  }

  return _transformedRecord;
}export function jsonProcessDispatchApiRequestToTransportTransform(
  input_?: ProcessDispatchApiRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    requestedBy: input_.requestedBy
  }!;
}export function jsonProcessDispatchApiRequestToApplicationTransform(
  input_?: any,
): ProcessDispatchApiRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    requestedBy: input_.requestedBy
  }!;
}export function jsonProcessRuntimeCancelApiRequestToTransportTransform(
  input_?: ProcessRuntimeCancelApiRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    requestedBy: input_.requestedBy,reason: input_.reason
  }!;
}export function jsonProcessRuntimeCancelApiRequestToApplicationTransform(
  input_?: any,
): ProcessRuntimeCancelApiRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    requestedBy: input_.requestedBy,reason: input_.reason
  }!;
}export function jsonProcessRuntimeReworkApiRequestToTransportTransform(
  input_?: ProcessRuntimeReworkApiRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    requestedBy: input_.requestedBy,reason: input_.reason
  }!;
}export function jsonProcessRuntimeReworkApiRequestToApplicationTransform(
  input_?: any,
): ProcessRuntimeReworkApiRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    requestedBy: input_.requestedBy,reason: input_.reason
  }!;
}export function jsonProcessDefinitionCatalogApiResponseToTransportTransform(
  input_?: ProcessDefinitionCatalogApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    items: jsonArrayProcessDefinitionCatalogItemProjectionToTransportTransform(input_.items)
  }!;
}export function jsonProcessDefinitionCatalogApiResponseToApplicationTransform(
  input_?: any,
): ProcessDefinitionCatalogApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    items: jsonArrayProcessDefinitionCatalogItemProjectionToApplicationTransform(input_.items)
  }!;
}export function jsonArrayProcessDefinitionCatalogItemProjectionToTransportTransform(
  items_?: Array<ProcessDefinitionCatalogItemProjection> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessDefinitionCatalogItemProjectionToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayProcessDefinitionCatalogItemProjectionToApplicationTransform(
  items_?: any,
): Array<ProcessDefinitionCatalogItemProjection> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessDefinitionCatalogItemProjectionToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProcessDefinitionCatalogItemProjectionToTransportTransform(
  input_?: ProcessDefinitionCatalogItemProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    key: jsonProcessDefinitionCatalogItemKeyToTransportTransform(input_.key),scopeKind: input_.scopeKind,name: input_.name,summary: input_.summary,status: input_.status,criticality: input_.criticality,operatingMode: input_.operatingMode,updatedAtUtc: dateRfc3339Serializer(input_.updatedAtUtc),compatibilityIssueCount: input_.compatibilityIssueCount
  }!;
}export function jsonProcessDefinitionCatalogItemProjectionToApplicationTransform(
  input_?: any,
): ProcessDefinitionCatalogItemProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    key: jsonProcessDefinitionCatalogItemKeyToApplicationTransform(input_.key),scopeKind: input_.scopeKind,name: input_.name,summary: input_.summary,status: input_.status,criticality: input_.criticality,operatingMode: input_.operatingMode,updatedAtUtc: dateDeserializer(input_.updatedAtUtc)!,compatibilityIssueCount: input_.compatibilityIssueCount
  }!;
}export function jsonProcessDefinitionCatalogItemKeyToTransportTransform(
  input_?: ProcessDefinitionCatalogItemKey | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value
  }!;
}export function jsonProcessDefinitionCatalogItemKeyToApplicationTransform(
  input_?: any,
): ProcessDefinitionCatalogItemKey {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value
  }!;
}export function jsonProcessDefinitionEditorProjectionToTransportTransform(
  input_?: ProcessDefinitionEditorProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    definitionKey: jsonProcessDefinitionCatalogItemKeyToTransportTransform(input_.definitionKey),versionToken: jsonProcessDefinitionEditorVersionTokenToTransportTransform(input_.versionToken),status: input_.status,identity: jsonProcessDefinitionEditorIdentityProjectionToTransportTransform(input_.identity),governance: jsonProcessDefinitionEditorGovernanceProjectionToTransportTransform(input_.governance),contracts: jsonProcessDefinitionEditorContractProjectionToTransportTransform(input_.contracts),simulation: jsonProcessDefinitionEditorSimulationProjectionToTransportTransform(input_.simulation),lint: jsonProcessDefinitionEditorLintProjectionToTransportTransform(input_.lint),commands: jsonArrayProcessDefinitionEditorCommandProjectionToTransportTransform(input_.commands),lastCommandReceipt: jsonProcessDefinitionEditorCommandReceiptToTransportTransform(input_.lastCommandReceipt),roleEditor: jsonProcessDefinitionRoleEditorProjectionToTransportTransform(input_.roleEditor),canvas: jsonProcessDefinitionCanvasEditorProjectionToTransportTransform(input_.canvas),stepEditor: jsonProcessDefinitionStepEditorProjectionToTransportTransform(input_.stepEditor),templateCatalog: jsonProcessTemplateCatalogProjectionToTransportTransform(input_.templateCatalog)
  }!;
}export function jsonProcessDefinitionEditorProjectionToApplicationTransform(
  input_?: any,
): ProcessDefinitionEditorProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    definitionKey: jsonProcessDefinitionCatalogItemKeyToApplicationTransform(input_.definitionKey),versionToken: jsonProcessDefinitionEditorVersionTokenToApplicationTransform(input_.versionToken),status: input_.status,identity: jsonProcessDefinitionEditorIdentityProjectionToApplicationTransform(input_.identity),governance: jsonProcessDefinitionEditorGovernanceProjectionToApplicationTransform(input_.governance),contracts: jsonProcessDefinitionEditorContractProjectionToApplicationTransform(input_.contracts),simulation: jsonProcessDefinitionEditorSimulationProjectionToApplicationTransform(input_.simulation),lint: jsonProcessDefinitionEditorLintProjectionToApplicationTransform(input_.lint),commands: jsonArrayProcessDefinitionEditorCommandProjectionToApplicationTransform(input_.commands),lastCommandReceipt: jsonProcessDefinitionEditorCommandReceiptToApplicationTransform(input_.lastCommandReceipt),roleEditor: jsonProcessDefinitionRoleEditorProjectionToApplicationTransform(input_.roleEditor),canvas: jsonProcessDefinitionCanvasEditorProjectionToApplicationTransform(input_.canvas),stepEditor: jsonProcessDefinitionStepEditorProjectionToApplicationTransform(input_.stepEditor),templateCatalog: jsonProcessTemplateCatalogProjectionToApplicationTransform(input_.templateCatalog)
  }!;
}export function jsonProcessDefinitionEditorVersionTokenToTransportTransform(
  input_?: ProcessDefinitionEditorVersionToken | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value
  }!;
}export function jsonProcessDefinitionEditorVersionTokenToApplicationTransform(
  input_?: any,
): ProcessDefinitionEditorVersionToken {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value
  }!;
}export function jsonProcessDefinitionEditorIdentityProjectionToTransportTransform(
  input_?: ProcessDefinitionEditorIdentityProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    name: input_.name,scopeLabel: input_.scopeLabel,customerName: input_.customerName,ownerName: input_.ownerName,summary: input_.summary,valueStatement: input_.valueStatement
  }!;
}export function jsonProcessDefinitionEditorIdentityProjectionToApplicationTransform(
  input_?: any,
): ProcessDefinitionEditorIdentityProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    name: input_.name,scopeLabel: input_.scopeLabel,customerName: input_.customerName,ownerName: input_.ownerName,summary: input_.summary,valueStatement: input_.valueStatement
  }!;
}export function jsonProcessDefinitionEditorGovernanceProjectionToTransportTransform(
  input_?: ProcessDefinitionEditorGovernanceProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    criticality: input_.criticality,autonomyLevel: input_.autonomyLevel,operatingMode: input_.operatingMode,workingStatus: input_.workingStatus,managerOverrideSummary: input_.managerOverrideSummary,governanceNotes: input_.governanceNotes,changeSummary: input_.changeSummary,governancePolicySummary: input_.governancePolicySummary
  }!;
}export function jsonProcessDefinitionEditorGovernanceProjectionToApplicationTransform(
  input_?: any,
): ProcessDefinitionEditorGovernanceProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    criticality: input_.criticality,autonomyLevel: input_.autonomyLevel,operatingMode: input_.operatingMode,workingStatus: input_.workingStatus,managerOverrideSummary: input_.managerOverrideSummary,governanceNotes: input_.governanceNotes,changeSummary: input_.changeSummary,governancePolicySummary: input_.governancePolicySummary
  }!;
}export function jsonProcessDefinitionEditorContractProjectionToTransportTransform(
  input_?: ProcessDefinitionEditorContractProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    interfaceContractSummary: input_.interfaceContractSummary,constitutionRuleSummary: input_.constitutionRuleSummary,operatingModeSummary: input_.operatingModeSummary
  }!;
}export function jsonProcessDefinitionEditorContractProjectionToApplicationTransform(
  input_?: any,
): ProcessDefinitionEditorContractProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    interfaceContractSummary: input_.interfaceContractSummary,constitutionRuleSummary: input_.constitutionRuleSummary,operatingModeSummary: input_.operatingModeSummary
  }!;
}export function jsonProcessDefinitionEditorSimulationProjectionToTransportTransform(
  input_?: ProcessDefinitionEditorSimulationProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    simulationReadinessSummary: input_.simulationReadinessSummary,stepCount: input_.stepCount,requiredRoleCount: input_.requiredRoleCount,requiredArtifactExpectationCount: input_.requiredArtifactExpectationCount,isReadyForSimulation: input_.isReadyForSimulation
  }!;
}export function jsonProcessDefinitionEditorSimulationProjectionToApplicationTransform(
  input_?: any,
): ProcessDefinitionEditorSimulationProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    simulationReadinessSummary: input_.simulationReadinessSummary,stepCount: input_.stepCount,requiredRoleCount: input_.requiredRoleCount,requiredArtifactExpectationCount: input_.requiredArtifactExpectationCount,isReadyForSimulation: input_.isReadyForSimulation
  }!;
}export function jsonProcessDefinitionEditorLintProjectionToTransportTransform(
  input_?: ProcessDefinitionEditorLintProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    issues: jsonArrayProcessDefinitionEditorLintIssueProjectionToTransportTransform(input_.issues),hasWarningsOrErrors: input_.hasWarningsOrErrors,hasBlockingIssues: input_.hasBlockingIssues
  }!;
}export function jsonProcessDefinitionEditorLintProjectionToApplicationTransform(
  input_?: any,
): ProcessDefinitionEditorLintProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    issues: jsonArrayProcessDefinitionEditorLintIssueProjectionToApplicationTransform(input_.issues),hasWarningsOrErrors: input_.hasWarningsOrErrors,hasBlockingIssues: input_.hasBlockingIssues
  }!;
}export function jsonArrayProcessDefinitionEditorLintIssueProjectionToTransportTransform(
  items_?: Array<ProcessDefinitionEditorLintIssueProjection> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessDefinitionEditorLintIssueProjectionToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayProcessDefinitionEditorLintIssueProjectionToApplicationTransform(
  items_?: any,
): Array<ProcessDefinitionEditorLintIssueProjection> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessDefinitionEditorLintIssueProjectionToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProcessDefinitionEditorLintIssueProjectionToTransportTransform(
  input_?: ProcessDefinitionEditorLintIssueProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    code: input_.code,severity: input_.severity,section: input_.section,message: input_.message,suggestion: input_.suggestion
  }!;
}export function jsonProcessDefinitionEditorLintIssueProjectionToApplicationTransform(
  input_?: any,
): ProcessDefinitionEditorLintIssueProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    code: input_.code,severity: input_.severity,section: input_.section,message: input_.message,suggestion: input_.suggestion
  }!;
}export function jsonArrayProcessDefinitionEditorCommandProjectionToTransportTransform(
  items_?: Array<ProcessDefinitionEditorCommandProjection> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessDefinitionEditorCommandProjectionToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayProcessDefinitionEditorCommandProjectionToApplicationTransform(
  items_?: any,
): Array<ProcessDefinitionEditorCommandProjection> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessDefinitionEditorCommandProjectionToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProcessDefinitionEditorCommandProjectionToTransportTransform(
  input_?: ProcessDefinitionEditorCommandProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: input_.kind,text: input_.text,icon: input_.icon,isEnabled: input_.isEnabled,disabledReason: input_.disabledReason
  }!;
}export function jsonProcessDefinitionEditorCommandProjectionToApplicationTransform(
  input_?: any,
): ProcessDefinitionEditorCommandProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: input_.kind,text: input_.text,icon: input_.icon,isEnabled: input_.isEnabled,disabledReason: input_.disabledReason
  }!;
}export function jsonProcessDefinitionEditorCommandReceiptToTransportTransform(
  input_?: ProcessDefinitionEditorCommandReceipt | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    receiptId: input_.receiptId,commandKind: input_.commandKind,status: input_.status,versionToken: jsonProcessDefinitionEditorVersionTokenToTransportTransform(input_.versionToken),observedAtUtc: dateRfc3339Serializer(input_.observedAtUtc),summary: input_.summary,lintIssues: jsonArrayProcessDefinitionEditorLintIssueProjectionToTransportTransform(input_.lintIssues)
  }!;
}export function jsonProcessDefinitionEditorCommandReceiptToApplicationTransform(
  input_?: any,
): ProcessDefinitionEditorCommandReceipt {
  if(!input_) {
    return input_ as any;
  }
    return {
    receiptId: input_.receiptId,commandKind: input_.commandKind,status: input_.status,versionToken: jsonProcessDefinitionEditorVersionTokenToApplicationTransform(input_.versionToken),observedAtUtc: dateDeserializer(input_.observedAtUtc)!,summary: input_.summary,lintIssues: jsonArrayProcessDefinitionEditorLintIssueProjectionToApplicationTransform(input_.lintIssues)
  }!;
}export function jsonProcessDefinitionRoleEditorProjectionToTransportTransform(
  input_?: ProcessDefinitionRoleEditorProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    definitionKey: jsonProcessDefinitionCatalogItemKeyToTransportTransform(input_.definitionKey),versionToken: jsonProcessDefinitionRoleEditorVersionTokenToTransportTransform(input_.versionToken),selectedRoleKey: jsonProcessDefinitionRoleKeyToTransportTransform(input_.selectedRoleKey),roles: jsonArrayProcessDefinitionRoleProjectionToTransportTransform(input_.roles),selectedRole: jsonProcessDefinitionRoleProjectionToTransportTransform(input_.selectedRole),templateActions: jsonArrayProcessDefinitionRoleTemplateActionProjectionToTransportTransform(input_.templateActions),stepRoleBindings: jsonArrayProcessDefinitionStepRoleBindingProjectionToTransportTransform(input_.stepRoleBindings),lint: jsonProcessDefinitionRoleLintProjectionToTransportTransform(input_.lint),commands: jsonArrayProcessDefinitionRoleCommandProjectionToTransportTransform(input_.commands),lastCommandReceipt: jsonProcessDefinitionRoleCommandReceiptToTransportTransform(input_.lastCommandReceipt)
  }!;
}export function jsonProcessDefinitionRoleEditorProjectionToApplicationTransform(
  input_?: any,
): ProcessDefinitionRoleEditorProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    definitionKey: jsonProcessDefinitionCatalogItemKeyToApplicationTransform(input_.definitionKey),versionToken: jsonProcessDefinitionRoleEditorVersionTokenToApplicationTransform(input_.versionToken),selectedRoleKey: jsonProcessDefinitionRoleKeyToApplicationTransform(input_.selectedRoleKey),roles: jsonArrayProcessDefinitionRoleProjectionToApplicationTransform(input_.roles),selectedRole: jsonProcessDefinitionRoleProjectionToApplicationTransform(input_.selectedRole),templateActions: jsonArrayProcessDefinitionRoleTemplateActionProjectionToApplicationTransform(input_.templateActions),stepRoleBindings: jsonArrayProcessDefinitionStepRoleBindingProjectionToApplicationTransform(input_.stepRoleBindings),lint: jsonProcessDefinitionRoleLintProjectionToApplicationTransform(input_.lint),commands: jsonArrayProcessDefinitionRoleCommandProjectionToApplicationTransform(input_.commands),lastCommandReceipt: jsonProcessDefinitionRoleCommandReceiptToApplicationTransform(input_.lastCommandReceipt)
  }!;
}export function jsonProcessDefinitionRoleEditorVersionTokenToTransportTransform(
  input_?: ProcessDefinitionRoleEditorVersionToken | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value
  }!;
}export function jsonProcessDefinitionRoleEditorVersionTokenToApplicationTransform(
  input_?: any,
): ProcessDefinitionRoleEditorVersionToken {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value
  }!;
}export function jsonProcessDefinitionRoleKeyToTransportTransform(
  input_?: ProcessDefinitionRoleKey | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value
  }!;
}export function jsonProcessDefinitionRoleKeyToApplicationTransform(
  input_?: any,
): ProcessDefinitionRoleKey {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value
  }!;
}export function jsonArrayProcessDefinitionRoleProjectionToTransportTransform(
  items_?: Array<ProcessDefinitionRoleProjection> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessDefinitionRoleProjectionToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayProcessDefinitionRoleProjectionToApplicationTransform(
  items_?: any,
): Array<ProcessDefinitionRoleProjection> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessDefinitionRoleProjectionToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProcessDefinitionRoleProjectionToTransportTransform(
  input_?: ProcessDefinitionRoleProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    roleKey: jsonProcessDefinitionRoleKeyToTransportTransform(input_.roleKey),displayName: input_.displayName,summary: input_.summary,draft: jsonProcessDefinitionRoleDraftProjectionToTransportTransform(input_.draft),stepBindingCount: input_.stepBindingCount
  }!;
}export function jsonProcessDefinitionRoleProjectionToApplicationTransform(
  input_?: any,
): ProcessDefinitionRoleProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    roleKey: jsonProcessDefinitionRoleKeyToApplicationTransform(input_.roleKey),displayName: input_.displayName,summary: input_.summary,draft: jsonProcessDefinitionRoleDraftProjectionToApplicationTransform(input_.draft),stepBindingCount: input_.stepBindingCount
  }!;
}export function jsonProcessDefinitionRoleDraftProjectionToTransportTransform(
  input_?: ProcessDefinitionRoleDraftProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    roleKey: jsonProcessDefinitionRoleKeyToTransportTransform(input_.roleKey),displayName: input_.displayName,purpose: input_.purpose,staffingIntent: input_.staffingIntent,preferredExecutorKind: input_.preferredExecutorKind,workflowPreference: jsonProcessDefinitionWorkflowPreferenceProjectionToTransportTransform(input_.workflowPreference),preferredProjectAssignmentRole: input_.preferredProjectAssignmentRole,isRequired: input_.isRequired,allowsFallback: input_.allowsFallback,requiresExplicitApproval: input_.requiresExplicitApproval,defaultAllocationPercent: input_.defaultAllocationPercent,roleTemplateSourceKey: input_.roleTemplateSourceKey,roleTemplateSnapshotName: input_.roleTemplateSnapshotName,snapshotSummary: input_.snapshotSummary,overrideStatus: input_.overrideStatus,overrideSummary: input_.overrideSummary
  }!;
}export function jsonProcessDefinitionRoleDraftProjectionToApplicationTransform(
  input_?: any,
): ProcessDefinitionRoleDraftProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    roleKey: jsonProcessDefinitionRoleKeyToApplicationTransform(input_.roleKey),displayName: input_.displayName,purpose: input_.purpose,staffingIntent: input_.staffingIntent,preferredExecutorKind: input_.preferredExecutorKind,workflowPreference: jsonProcessDefinitionWorkflowPreferenceProjectionToApplicationTransform(input_.workflowPreference),preferredProjectAssignmentRole: input_.preferredProjectAssignmentRole,isRequired: input_.isRequired,allowsFallback: input_.allowsFallback,requiresExplicitApproval: input_.requiresExplicitApproval,defaultAllocationPercent: input_.defaultAllocationPercent,roleTemplateSourceKey: input_.roleTemplateSourceKey,roleTemplateSnapshotName: input_.roleTemplateSnapshotName,snapshotSummary: input_.snapshotSummary,overrideStatus: input_.overrideStatus,overrideSummary: input_.overrideSummary
  }!;
}export function jsonProcessDefinitionWorkflowPreferenceProjectionToTransportTransform(
  input_?: ProcessDefinitionWorkflowPreferenceProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: input_.kind,workflowDefinitionId: input_.workflowDefinitionId,workflowVersionId: input_.workflowVersionId,displayName: input_.displayName
  }!;
}export function jsonProcessDefinitionWorkflowPreferenceProjectionToApplicationTransform(
  input_?: any,
): ProcessDefinitionWorkflowPreferenceProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: input_.kind,workflowDefinitionId: input_.workflowDefinitionId,workflowVersionId: input_.workflowVersionId,displayName: input_.displayName
  }!;
}export function jsonArrayProcessDefinitionRoleTemplateActionProjectionToTransportTransform(
  items_?: Array<ProcessDefinitionRoleTemplateActionProjection> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessDefinitionRoleTemplateActionProjectionToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayProcessDefinitionRoleTemplateActionProjectionToApplicationTransform(
  items_?: any,
): Array<ProcessDefinitionRoleTemplateActionProjection> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessDefinitionRoleTemplateActionProjectionToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProcessDefinitionRoleTemplateActionProjectionToTransportTransform(
  input_?: ProcessDefinitionRoleTemplateActionProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    actionKey: jsonProcessDefinitionRoleTemplateActionKeyToTransportTransform(input_.actionKey),label: input_.label,summary: input_.summary,templateRoleKey: jsonProcessDefinitionRoleKeyToTransportTransform(input_.templateRoleKey),keyPrefix: input_.keyPrefix,displayNamePreview: input_.displayNamePreview,preferredExecutorKind: input_.preferredExecutorKind,defaultAllocationPercent: input_.defaultAllocationPercent
  }!;
}export function jsonProcessDefinitionRoleTemplateActionProjectionToApplicationTransform(
  input_?: any,
): ProcessDefinitionRoleTemplateActionProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    actionKey: jsonProcessDefinitionRoleTemplateActionKeyToApplicationTransform(input_.actionKey),label: input_.label,summary: input_.summary,templateRoleKey: jsonProcessDefinitionRoleKeyToApplicationTransform(input_.templateRoleKey),keyPrefix: input_.keyPrefix,displayNamePreview: input_.displayNamePreview,preferredExecutorKind: input_.preferredExecutorKind,defaultAllocationPercent: input_.defaultAllocationPercent
  }!;
}export function jsonProcessDefinitionRoleTemplateActionKeyToTransportTransform(
  input_?: ProcessDefinitionRoleTemplateActionKey | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value
  }!;
}export function jsonProcessDefinitionRoleTemplateActionKeyToApplicationTransform(
  input_?: any,
): ProcessDefinitionRoleTemplateActionKey {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value
  }!;
}export function jsonArrayProcessDefinitionStepRoleBindingProjectionToTransportTransform(
  items_?: Array<ProcessDefinitionStepRoleBindingProjection> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessDefinitionStepRoleBindingProjectionToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayProcessDefinitionStepRoleBindingProjectionToApplicationTransform(
  items_?: any,
): Array<ProcessDefinitionStepRoleBindingProjection> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessDefinitionStepRoleBindingProjectionToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProcessDefinitionStepRoleBindingProjectionToTransportTransform(
  input_?: ProcessDefinitionStepRoleBindingProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    stepKey: jsonProcessDefinitionStepKeyToTransportTransform(input_.stepKey),stepTitle: input_.stepTitle,roleKey: jsonProcessDefinitionRoleKeyToTransportTransform(input_.roleKey),roleDisplayName: input_.roleDisplayName,responsibilityKind: input_.responsibilityKind,isRequired: input_.isRequired,fallbackOrder: input_.fallbackOrder,rebindPolicySummary: input_.rebindPolicySummary
  }!;
}export function jsonProcessDefinitionStepRoleBindingProjectionToApplicationTransform(
  input_?: any,
): ProcessDefinitionStepRoleBindingProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    stepKey: jsonProcessDefinitionStepKeyToApplicationTransform(input_.stepKey),stepTitle: input_.stepTitle,roleKey: jsonProcessDefinitionRoleKeyToApplicationTransform(input_.roleKey),roleDisplayName: input_.roleDisplayName,responsibilityKind: input_.responsibilityKind,isRequired: input_.isRequired,fallbackOrder: input_.fallbackOrder,rebindPolicySummary: input_.rebindPolicySummary
  }!;
}export function jsonProcessDefinitionStepKeyToTransportTransform(
  input_?: ProcessDefinitionStepKey | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value
  }!;
}export function jsonProcessDefinitionStepKeyToApplicationTransform(
  input_?: any,
): ProcessDefinitionStepKey {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value
  }!;
}export function jsonProcessDefinitionRoleLintProjectionToTransportTransform(
  input_?: ProcessDefinitionRoleLintProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    issues: jsonArrayProcessDefinitionRoleLintIssueProjectionToTransportTransform(input_.issues),hasWarningsOrErrors: input_.hasWarningsOrErrors,hasBlockingIssues: input_.hasBlockingIssues
  }!;
}export function jsonProcessDefinitionRoleLintProjectionToApplicationTransform(
  input_?: any,
): ProcessDefinitionRoleLintProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    issues: jsonArrayProcessDefinitionRoleLintIssueProjectionToApplicationTransform(input_.issues),hasWarningsOrErrors: input_.hasWarningsOrErrors,hasBlockingIssues: input_.hasBlockingIssues
  }!;
}export function jsonArrayProcessDefinitionRoleLintIssueProjectionToTransportTransform(
  items_?: Array<ProcessDefinitionRoleLintIssueProjection> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessDefinitionRoleLintIssueProjectionToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayProcessDefinitionRoleLintIssueProjectionToApplicationTransform(
  items_?: any,
): Array<ProcessDefinitionRoleLintIssueProjection> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessDefinitionRoleLintIssueProjectionToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProcessDefinitionRoleLintIssueProjectionToTransportTransform(
  input_?: ProcessDefinitionRoleLintIssueProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    code: input_.code,severity: input_.severity,section: input_.section,message: input_.message,suggestion: input_.suggestion
  }!;
}export function jsonProcessDefinitionRoleLintIssueProjectionToApplicationTransform(
  input_?: any,
): ProcessDefinitionRoleLintIssueProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    code: input_.code,severity: input_.severity,section: input_.section,message: input_.message,suggestion: input_.suggestion
  }!;
}export function jsonArrayProcessDefinitionRoleCommandProjectionToTransportTransform(
  items_?: Array<ProcessDefinitionRoleCommandProjection> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessDefinitionRoleCommandProjectionToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayProcessDefinitionRoleCommandProjectionToApplicationTransform(
  items_?: any,
): Array<ProcessDefinitionRoleCommandProjection> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessDefinitionRoleCommandProjectionToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProcessDefinitionRoleCommandProjectionToTransportTransform(
  input_?: ProcessDefinitionRoleCommandProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: input_.kind,text: input_.text,icon: input_.icon,isEnabled: input_.isEnabled,disabledReason: input_.disabledReason
  }!;
}export function jsonProcessDefinitionRoleCommandProjectionToApplicationTransform(
  input_?: any,
): ProcessDefinitionRoleCommandProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: input_.kind,text: input_.text,icon: input_.icon,isEnabled: input_.isEnabled,disabledReason: input_.disabledReason
  }!;
}export function jsonProcessDefinitionRoleCommandReceiptToTransportTransform(
  input_?: ProcessDefinitionRoleCommandReceipt | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    receiptId: input_.receiptId,commandKind: input_.commandKind,status: input_.status,versionToken: jsonProcessDefinitionRoleEditorVersionTokenToTransportTransform(input_.versionToken),observedAtUtc: dateRfc3339Serializer(input_.observedAtUtc),summary: input_.summary,lintIssues: jsonArrayProcessDefinitionRoleLintIssueProjectionToTransportTransform(input_.lintIssues)
  }!;
}export function jsonProcessDefinitionRoleCommandReceiptToApplicationTransform(
  input_?: any,
): ProcessDefinitionRoleCommandReceipt {
  if(!input_) {
    return input_ as any;
  }
    return {
    receiptId: input_.receiptId,commandKind: input_.commandKind,status: input_.status,versionToken: jsonProcessDefinitionRoleEditorVersionTokenToApplicationTransform(input_.versionToken),observedAtUtc: dateDeserializer(input_.observedAtUtc)!,summary: input_.summary,lintIssues: jsonArrayProcessDefinitionRoleLintIssueProjectionToApplicationTransform(input_.lintIssues)
  }!;
}export function jsonProcessDefinitionCanvasEditorProjectionToTransportTransform(
  input_?: ProcessDefinitionCanvasEditorProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    definitionKey: jsonProcessDefinitionCatalogItemKeyToTransportTransform(input_.definitionKey),versionToken: jsonProcessDefinitionCanvasVersionTokenToTransportTransform(input_.versionToken),viewport: jsonProcessDefinitionCanvasViewportProjectionToTransportTransform(input_.viewport),nodes: jsonArrayProcessDefinitionCanvasEditorNodeProjectionToTransportTransform(input_.nodes),edges: jsonArrayProcessDefinitionCanvasEdgeProjectionToTransportTransform(input_.edges),toolboxActions: jsonArrayProcessDefinitionCanvasToolboxActionProjectionToTransportTransform(input_.toolboxActions),selection: jsonProcessDefinitionCanvasSelectionProjectionToTransportTransform(input_.selection),commands: jsonArrayProcessDefinitionCanvasCommandProjectionToTransportTransform(input_.commands),lastCommandReceipt: jsonProcessDefinitionCanvasCommandReceiptToTransportTransform(input_.lastCommandReceipt)
  }!;
}export function jsonProcessDefinitionCanvasEditorProjectionToApplicationTransform(
  input_?: any,
): ProcessDefinitionCanvasEditorProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    definitionKey: jsonProcessDefinitionCatalogItemKeyToApplicationTransform(input_.definitionKey),versionToken: jsonProcessDefinitionCanvasVersionTokenToApplicationTransform(input_.versionToken),viewport: jsonProcessDefinitionCanvasViewportProjectionToApplicationTransform(input_.viewport),nodes: jsonArrayProcessDefinitionCanvasEditorNodeProjectionToApplicationTransform(input_.nodes),edges: jsonArrayProcessDefinitionCanvasEdgeProjectionToApplicationTransform(input_.edges),toolboxActions: jsonArrayProcessDefinitionCanvasToolboxActionProjectionToApplicationTransform(input_.toolboxActions),selection: jsonProcessDefinitionCanvasSelectionProjectionToApplicationTransform(input_.selection),commands: jsonArrayProcessDefinitionCanvasCommandProjectionToApplicationTransform(input_.commands),lastCommandReceipt: jsonProcessDefinitionCanvasCommandReceiptToApplicationTransform(input_.lastCommandReceipt)
  }!;
}export function jsonProcessDefinitionCanvasVersionTokenToTransportTransform(
  input_?: ProcessDefinitionCanvasVersionToken | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value
  }!;
}export function jsonProcessDefinitionCanvasVersionTokenToApplicationTransform(
  input_?: any,
): ProcessDefinitionCanvasVersionToken {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value
  }!;
}export function jsonProcessDefinitionCanvasViewportProjectionToTransportTransform(
  input_?: ProcessDefinitionCanvasViewportProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    width: input_.width,height: input_.height,layoutSummary: input_.layoutSummary
  }!;
}export function jsonProcessDefinitionCanvasViewportProjectionToApplicationTransform(
  input_?: any,
): ProcessDefinitionCanvasViewportProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    width: input_.width,height: input_.height,layoutSummary: input_.layoutSummary
  }!;
}export function jsonArrayProcessDefinitionCanvasEditorNodeProjectionToTransportTransform(
  items_?: Array<ProcessDefinitionCanvasEditorNodeProjection> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessDefinitionCanvasEditorNodeProjectionToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayProcessDefinitionCanvasEditorNodeProjectionToApplicationTransform(
  items_?: any,
): Array<ProcessDefinitionCanvasEditorNodeProjection> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessDefinitionCanvasEditorNodeProjectionToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProcessDefinitionCanvasEditorNodeProjectionToTransportTransform(
  input_?: ProcessDefinitionCanvasEditorNodeProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    nodeKey: jsonProcessDefinitionCanvasNodeKeyToTransportTransform(input_.nodeKey),kind: input_.kind,title: input_.title,subtitle: input_.subtitle,summary: input_.summary,x: input_.x,y: input_.y,width: input_.width,height: input_.height,tone: input_.tone,stepKey: jsonProcessDefinitionStepKeyToTransportTransform(input_.stepKey),roleKey: jsonProcessDefinitionRoleKeyToTransportTransform(input_.roleKey),artifactKey: input_.artifactKey,badges: jsonArrayStringToTransportTransform(input_.badges),ports: jsonArrayProcessDefinitionCanvasPortProjectionToTransportTransform(input_.ports),stepKind: input_.stepKind
  }!;
}export function jsonProcessDefinitionCanvasEditorNodeProjectionToApplicationTransform(
  input_?: any,
): ProcessDefinitionCanvasEditorNodeProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    nodeKey: jsonProcessDefinitionCanvasNodeKeyToApplicationTransform(input_.nodeKey),kind: input_.kind,title: input_.title,subtitle: input_.subtitle,summary: input_.summary,x: input_.x,y: input_.y,width: input_.width,height: input_.height,tone: input_.tone,stepKey: jsonProcessDefinitionStepKeyToApplicationTransform(input_.stepKey),roleKey: jsonProcessDefinitionRoleKeyToApplicationTransform(input_.roleKey),artifactKey: input_.artifactKey,badges: jsonArrayStringToApplicationTransform(input_.badges),ports: jsonArrayProcessDefinitionCanvasPortProjectionToApplicationTransform(input_.ports),stepKind: input_.stepKind
  }!;
}export function jsonProcessDefinitionCanvasNodeKeyToTransportTransform(
  input_?: ProcessDefinitionCanvasNodeKey | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value
  }!;
}export function jsonProcessDefinitionCanvasNodeKeyToApplicationTransform(
  input_?: any,
): ProcessDefinitionCanvasNodeKey {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value
  }!;
}export function jsonArrayProcessDefinitionCanvasPortProjectionToTransportTransform(
  items_?: Array<ProcessDefinitionCanvasPortProjection> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessDefinitionCanvasPortProjectionToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayProcessDefinitionCanvasPortProjectionToApplicationTransform(
  items_?: any,
): Array<ProcessDefinitionCanvasPortProjection> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessDefinitionCanvasPortProjectionToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProcessDefinitionCanvasPortProjectionToTransportTransform(
  input_?: ProcessDefinitionCanvasPortProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    portKey: input_.portKey,kind: input_.kind,label: input_.label,offsetX: input_.offsetX,offsetY: input_.offsetY
  }!;
}export function jsonProcessDefinitionCanvasPortProjectionToApplicationTransform(
  input_?: any,
): ProcessDefinitionCanvasPortProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    portKey: input_.portKey,kind: input_.kind,label: input_.label,offsetX: input_.offsetX,offsetY: input_.offsetY
  }!;
}export function jsonArrayProcessDefinitionCanvasEdgeProjectionToTransportTransform(
  items_?: Array<ProcessDefinitionCanvasEdgeProjection> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessDefinitionCanvasEdgeProjectionToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayProcessDefinitionCanvasEdgeProjectionToApplicationTransform(
  items_?: any,
): Array<ProcessDefinitionCanvasEdgeProjection> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessDefinitionCanvasEdgeProjectionToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProcessDefinitionCanvasEdgeProjectionToTransportTransform(
  input_?: ProcessDefinitionCanvasEdgeProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    edgeKey: jsonProcessDefinitionCanvasEdgeKeyToTransportTransform(input_.edgeKey),kind: input_.kind,fromNodeKey: jsonProcessDefinitionCanvasNodeKeyToTransportTransform(input_.fromNodeKey),toNodeKey: jsonProcessDefinitionCanvasNodeKeyToTransportTransform(input_.toNodeKey),label: input_.label,summary: input_.summary,tone: input_.tone,isBackwardRoute: input_.isBackwardRoute
  }!;
}export function jsonProcessDefinitionCanvasEdgeProjectionToApplicationTransform(
  input_?: any,
): ProcessDefinitionCanvasEdgeProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    edgeKey: jsonProcessDefinitionCanvasEdgeKeyToApplicationTransform(input_.edgeKey),kind: input_.kind,fromNodeKey: jsonProcessDefinitionCanvasNodeKeyToApplicationTransform(input_.fromNodeKey),toNodeKey: jsonProcessDefinitionCanvasNodeKeyToApplicationTransform(input_.toNodeKey),label: input_.label,summary: input_.summary,tone: input_.tone,isBackwardRoute: input_.isBackwardRoute
  }!;
}export function jsonProcessDefinitionCanvasEdgeKeyToTransportTransform(
  input_?: ProcessDefinitionCanvasEdgeKey | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value
  }!;
}export function jsonProcessDefinitionCanvasEdgeKeyToApplicationTransform(
  input_?: any,
): ProcessDefinitionCanvasEdgeKey {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value
  }!;
}export function jsonArrayProcessDefinitionCanvasToolboxActionProjectionToTransportTransform(
  items_?: Array<ProcessDefinitionCanvasToolboxActionProjection> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessDefinitionCanvasToolboxActionProjectionToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayProcessDefinitionCanvasToolboxActionProjectionToApplicationTransform(
  items_?: any,
): Array<ProcessDefinitionCanvasToolboxActionProjection> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessDefinitionCanvasToolboxActionProjectionToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProcessDefinitionCanvasToolboxActionProjectionToTransportTransform(
  input_?: ProcessDefinitionCanvasToolboxActionProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    actionKey: jsonProcessDefinitionCanvasToolboxActionKeyToTransportTransform(input_.actionKey),kind: input_.kind,label: input_.label,summary: input_.summary,icon: input_.icon,isEnabled: input_.isEnabled,disabledReason: input_.disabledReason,stepKind: input_.stepKind
  }!;
}export function jsonProcessDefinitionCanvasToolboxActionProjectionToApplicationTransform(
  input_?: any,
): ProcessDefinitionCanvasToolboxActionProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    actionKey: jsonProcessDefinitionCanvasToolboxActionKeyToApplicationTransform(input_.actionKey),kind: input_.kind,label: input_.label,summary: input_.summary,icon: input_.icon,isEnabled: input_.isEnabled,disabledReason: input_.disabledReason,stepKind: input_.stepKind
  }!;
}export function jsonProcessDefinitionCanvasToolboxActionKeyToTransportTransform(
  input_?: ProcessDefinitionCanvasToolboxActionKey | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value
  }!;
}export function jsonProcessDefinitionCanvasToolboxActionKeyToApplicationTransform(
  input_?: any,
): ProcessDefinitionCanvasToolboxActionKey {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value
  }!;
}export function jsonProcessDefinitionCanvasSelectionProjectionToTransportTransform(
  input_?: ProcessDefinitionCanvasSelectionProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: input_.kind,nodeKey: jsonProcessDefinitionCanvasNodeKeyToTransportTransform(input_.nodeKey),edgeKey: jsonProcessDefinitionCanvasEdgeKeyToTransportTransform(input_.edgeKey),title: input_.title,summary: input_.summary,keyText: input_.keyText,facts: jsonArrayStringToTransportTransform(input_.facts)
  }!;
}export function jsonProcessDefinitionCanvasSelectionProjectionToApplicationTransform(
  input_?: any,
): ProcessDefinitionCanvasSelectionProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: input_.kind,nodeKey: jsonProcessDefinitionCanvasNodeKeyToApplicationTransform(input_.nodeKey),edgeKey: jsonProcessDefinitionCanvasEdgeKeyToApplicationTransform(input_.edgeKey),title: input_.title,summary: input_.summary,keyText: input_.keyText,facts: jsonArrayStringToApplicationTransform(input_.facts)
  }!;
}export function jsonArrayProcessDefinitionCanvasCommandProjectionToTransportTransform(
  items_?: Array<ProcessDefinitionCanvasCommandProjection> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessDefinitionCanvasCommandProjectionToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayProcessDefinitionCanvasCommandProjectionToApplicationTransform(
  items_?: any,
): Array<ProcessDefinitionCanvasCommandProjection> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessDefinitionCanvasCommandProjectionToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProcessDefinitionCanvasCommandProjectionToTransportTransform(
  input_?: ProcessDefinitionCanvasCommandProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: input_.kind,text: input_.text,icon: input_.icon,isEnabled: input_.isEnabled,disabledReason: input_.disabledReason
  }!;
}export function jsonProcessDefinitionCanvasCommandProjectionToApplicationTransform(
  input_?: any,
): ProcessDefinitionCanvasCommandProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: input_.kind,text: input_.text,icon: input_.icon,isEnabled: input_.isEnabled,disabledReason: input_.disabledReason
  }!;
}export function jsonProcessDefinitionCanvasCommandReceiptToTransportTransform(
  input_?: ProcessDefinitionCanvasCommandReceipt | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    receiptId: input_.receiptId,commandKind: input_.commandKind,status: input_.status,versionToken: jsonProcessDefinitionCanvasVersionTokenToTransportTransform(input_.versionToken),observedAtUtc: dateRfc3339Serializer(input_.observedAtUtc),summary: input_.summary
  }!;
}export function jsonProcessDefinitionCanvasCommandReceiptToApplicationTransform(
  input_?: any,
): ProcessDefinitionCanvasCommandReceipt {
  if(!input_) {
    return input_ as any;
  }
    return {
    receiptId: input_.receiptId,commandKind: input_.commandKind,status: input_.status,versionToken: jsonProcessDefinitionCanvasVersionTokenToApplicationTransform(input_.versionToken),observedAtUtc: dateDeserializer(input_.observedAtUtc)!,summary: input_.summary
  }!;
}export function jsonProcessDefinitionStepEditorProjectionToTransportTransform(
  input_?: ProcessDefinitionStepEditorProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    definitionKey: jsonProcessDefinitionCatalogItemKeyToTransportTransform(input_.definitionKey),versionToken: jsonProcessDefinitionStepEditorVersionTokenToTransportTransform(input_.versionToken),selectedStepKey: jsonProcessDefinitionStepKeyToTransportTransform(input_.selectedStepKey),steps: jsonArrayProcessDefinitionStepListItemProjectionToTransportTransform(input_.steps),stepDrafts: jsonArrayProcessDefinitionStepDraftProjectionToTransportTransform(input_.stepDrafts),selectedStep: jsonProcessDefinitionStepDraftProjectionToTransportTransform(input_.selectedStep),subprocessOptions: jsonArrayProcessDefinitionSubprocessOptionProjectionToTransportTransform(input_.subprocessOptions),commands: jsonArrayProcessDefinitionStepCommandProjectionToTransportTransform(input_.commands),lint: jsonProcessDefinitionStepLintProjectionToTransportTransform(input_.lint),lastCommandReceipt: jsonProcessDefinitionStepCommandReceiptToTransportTransform(input_.lastCommandReceipt)
  }!;
}export function jsonProcessDefinitionStepEditorProjectionToApplicationTransform(
  input_?: any,
): ProcessDefinitionStepEditorProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    definitionKey: jsonProcessDefinitionCatalogItemKeyToApplicationTransform(input_.definitionKey),versionToken: jsonProcessDefinitionStepEditorVersionTokenToApplicationTransform(input_.versionToken),selectedStepKey: jsonProcessDefinitionStepKeyToApplicationTransform(input_.selectedStepKey),steps: jsonArrayProcessDefinitionStepListItemProjectionToApplicationTransform(input_.steps),stepDrafts: jsonArrayProcessDefinitionStepDraftProjectionToApplicationTransform(input_.stepDrafts),selectedStep: jsonProcessDefinitionStepDraftProjectionToApplicationTransform(input_.selectedStep),subprocessOptions: jsonArrayProcessDefinitionSubprocessOptionProjectionToApplicationTransform(input_.subprocessOptions),commands: jsonArrayProcessDefinitionStepCommandProjectionToApplicationTransform(input_.commands),lint: jsonProcessDefinitionStepLintProjectionToApplicationTransform(input_.lint),lastCommandReceipt: jsonProcessDefinitionStepCommandReceiptToApplicationTransform(input_.lastCommandReceipt)
  }!;
}export function jsonProcessDefinitionStepEditorVersionTokenToTransportTransform(
  input_?: ProcessDefinitionStepEditorVersionToken | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value
  }!;
}export function jsonProcessDefinitionStepEditorVersionTokenToApplicationTransform(
  input_?: any,
): ProcessDefinitionStepEditorVersionToken {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value
  }!;
}export function jsonArrayProcessDefinitionStepListItemProjectionToTransportTransform(
  items_?: Array<ProcessDefinitionStepListItemProjection> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessDefinitionStepListItemProjectionToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayProcessDefinitionStepListItemProjectionToApplicationTransform(
  items_?: any,
): Array<ProcessDefinitionStepListItemProjection> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessDefinitionStepListItemProjectionToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProcessDefinitionStepListItemProjectionToTransportTransform(
  input_?: ProcessDefinitionStepListItemProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    stepKey: jsonProcessDefinitionStepKeyToTransportTransform(input_.stepKey),title: input_.title,subtitle: input_.subtitle,stepKind: input_.stepKind,order: input_.order,isSelected: input_.isSelected
  }!;
}export function jsonProcessDefinitionStepListItemProjectionToApplicationTransform(
  input_?: any,
): ProcessDefinitionStepListItemProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    stepKey: jsonProcessDefinitionStepKeyToApplicationTransform(input_.stepKey),title: input_.title,subtitle: input_.subtitle,stepKind: input_.stepKind,order: input_.order,isSelected: input_.isSelected
  }!;
}export function jsonArrayProcessDefinitionStepDraftProjectionToTransportTransform(
  items_?: Array<ProcessDefinitionStepDraftProjection> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessDefinitionStepDraftProjectionToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayProcessDefinitionStepDraftProjectionToApplicationTransform(
  items_?: any,
): Array<ProcessDefinitionStepDraftProjection> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessDefinitionStepDraftProjectionToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProcessDefinitionStepDraftProjectionToTransportTransform(
  input_?: ProcessDefinitionStepDraftProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    basic: jsonProcessDefinitionStepBasicDraftProjectionToTransportTransform(input_.basic),operationContract: jsonProcessDefinitionStepOperationContractProjectionToTransportTransform(input_.operationContract),contracts: jsonProcessDefinitionStepContractsProjectionToTransportTransform(input_.contracts),branchOutcomes: jsonArrayProcessDefinitionBranchOutcomeProjectionToTransportTransform(input_.branchOutcomes),roleBindings: jsonArrayProcessDefinitionStepRoleBindingProjectionToTransportTransform(input_.roleBindings),artifactExpectations: jsonArrayProcessDefinitionArtifactExpectationProjectionToTransportTransform(input_.artifactExpectations),subprocessMapping: jsonProcessDefinitionSubprocessMappingProjectionToTransportTransform(input_.subprocessMapping)
  }!;
}export function jsonProcessDefinitionStepDraftProjectionToApplicationTransform(
  input_?: any,
): ProcessDefinitionStepDraftProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    basic: jsonProcessDefinitionStepBasicDraftProjectionToApplicationTransform(input_.basic),operationContract: jsonProcessDefinitionStepOperationContractProjectionToApplicationTransform(input_.operationContract),contracts: jsonProcessDefinitionStepContractsProjectionToApplicationTransform(input_.contracts),branchOutcomes: jsonArrayProcessDefinitionBranchOutcomeProjectionToApplicationTransform(input_.branchOutcomes),roleBindings: jsonArrayProcessDefinitionStepRoleBindingProjectionToApplicationTransform(input_.roleBindings),artifactExpectations: jsonArrayProcessDefinitionArtifactExpectationProjectionToApplicationTransform(input_.artifactExpectations),subprocessMapping: jsonProcessDefinitionSubprocessMappingProjectionToApplicationTransform(input_.subprocessMapping)
  }!;
}export function jsonProcessDefinitionStepBasicDraftProjectionToTransportTransform(
  input_?: ProcessDefinitionStepBasicDraftProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    stepKey: jsonProcessDefinitionStepKeyToTransportTransform(input_.stepKey),title: input_.title,subtitle: input_.subtitle,notes: input_.notes,stepKind: input_.stepKind,targetLeadHours: input_.targetLeadHours,allowsManualSkip: input_.allowsManualSkip,allowsSafeRefusal: input_.allowsSafeRefusal,requiresApproval: input_.requiresApproval,requiresDecisionRecord: input_.requiresDecisionRecord,decisionRoleKey: jsonProcessDefinitionRoleKeyToTransportTransform(input_.decisionRoleKey)
  }!;
}export function jsonProcessDefinitionStepBasicDraftProjectionToApplicationTransform(
  input_?: any,
): ProcessDefinitionStepBasicDraftProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    stepKey: jsonProcessDefinitionStepKeyToApplicationTransform(input_.stepKey),title: input_.title,subtitle: input_.subtitle,notes: input_.notes,stepKind: input_.stepKind,targetLeadHours: input_.targetLeadHours,allowsManualSkip: input_.allowsManualSkip,allowsSafeRefusal: input_.allowsSafeRefusal,requiresApproval: input_.requiresApproval,requiresDecisionRecord: input_.requiresDecisionRecord,decisionRoleKey: jsonProcessDefinitionRoleKeyToApplicationTransform(input_.decisionRoleKey)
  }!;
}export function jsonProcessDefinitionStepOperationContractProjectionToTransportTransform(
  input_?: ProcessDefinitionStepOperationContractProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    targetScope: input_.targetScope,allowedOperations: jsonArrayProcessDefinitionStepOperationKindToTransportTransform(input_.allowedOperations)
  }!;
}export function jsonProcessDefinitionStepOperationContractProjectionToApplicationTransform(
  input_?: any,
): ProcessDefinitionStepOperationContractProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    targetScope: input_.targetScope,allowedOperations: jsonArrayProcessDefinitionStepOperationKindToApplicationTransform(input_.allowedOperations)
  }!;
}export function jsonArrayProcessDefinitionStepOperationKindToTransportTransform(
  items_?: Array<number> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = item as any;
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayProcessDefinitionStepOperationKindToApplicationTransform(
  items_?: any,
): Array<number> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = item as any;
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProcessDefinitionStepContractsProjectionToTransportTransform(
  input_?: ProcessDefinitionStepContractsProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    inputContractSummary: input_.inputContractSummary,outputContractSummary: input_.outputContractSummary,evidenceContractSummary: input_.evidenceContractSummary,decisionRightsSummary: input_.decisionRightsSummary,exceptionPolicySummary: input_.exceptionPolicySummary
  }!;
}export function jsonProcessDefinitionStepContractsProjectionToApplicationTransform(
  input_?: any,
): ProcessDefinitionStepContractsProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    inputContractSummary: input_.inputContractSummary,outputContractSummary: input_.outputContractSummary,evidenceContractSummary: input_.evidenceContractSummary,decisionRightsSummary: input_.decisionRightsSummary,exceptionPolicySummary: input_.exceptionPolicySummary
  }!;
}export function jsonArrayProcessDefinitionBranchOutcomeProjectionToTransportTransform(
  items_?: Array<ProcessDefinitionBranchOutcomeProjection> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessDefinitionBranchOutcomeProjectionToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayProcessDefinitionBranchOutcomeProjectionToApplicationTransform(
  items_?: any,
): Array<ProcessDefinitionBranchOutcomeProjection> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessDefinitionBranchOutcomeProjectionToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProcessDefinitionBranchOutcomeProjectionToTransportTransform(
  input_?: ProcessDefinitionBranchOutcomeProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    outcomeKey: jsonProcessDefinitionBranchOutcomeKeyToTransportTransform(input_.outcomeKey),title: input_.title,description: input_.description,routeTarget: jsonProcessDefinitionRouteTargetProjectionToTransportTransform(input_.routeTarget),isBackwardRoute: input_.isBackwardRoute,loopBudget: jsonProcessDefinitionLoopBudgetProjectionToTransportTransform(input_.loopBudget)
  }!;
}export function jsonProcessDefinitionBranchOutcomeProjectionToApplicationTransform(
  input_?: any,
): ProcessDefinitionBranchOutcomeProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    outcomeKey: jsonProcessDefinitionBranchOutcomeKeyToApplicationTransform(input_.outcomeKey),title: input_.title,description: input_.description,routeTarget: jsonProcessDefinitionRouteTargetProjectionToApplicationTransform(input_.routeTarget),isBackwardRoute: input_.isBackwardRoute,loopBudget: jsonProcessDefinitionLoopBudgetProjectionToApplicationTransform(input_.loopBudget)
  }!;
}export function jsonProcessDefinitionBranchOutcomeKeyToTransportTransform(
  input_?: ProcessDefinitionBranchOutcomeKey | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value
  }!;
}export function jsonProcessDefinitionBranchOutcomeKeyToApplicationTransform(
  input_?: any,
): ProcessDefinitionBranchOutcomeKey {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value
  }!;
}export function jsonProcessDefinitionRouteTargetProjectionToTransportTransform(
  input_?: ProcessDefinitionRouteTargetProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: input_.kind,stepKey: jsonProcessDefinitionStepKeyToTransportTransform(input_.stepKey),artifactExpectationKey: jsonProcessDefinitionArtifactExpectationKeyToTransportTransform(input_.artifactExpectationKey),summary: input_.summary
  }!;
}export function jsonProcessDefinitionRouteTargetProjectionToApplicationTransform(
  input_?: any,
): ProcessDefinitionRouteTargetProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: input_.kind,stepKey: jsonProcessDefinitionStepKeyToApplicationTransform(input_.stepKey),artifactExpectationKey: jsonProcessDefinitionArtifactExpectationKeyToApplicationTransform(input_.artifactExpectationKey),summary: input_.summary
  }!;
}export function jsonProcessDefinitionArtifactExpectationKeyToTransportTransform(
  input_?: ProcessDefinitionArtifactExpectationKey | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value
  }!;
}export function jsonProcessDefinitionArtifactExpectationKeyToApplicationTransform(
  input_?: any,
): ProcessDefinitionArtifactExpectationKey {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value
  }!;
}export function jsonProcessDefinitionLoopBudgetProjectionToTransportTransform(
  input_?: ProcessDefinitionLoopBudgetProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    isRequired: input_.isRequired,maximumRepeats: input_.maximumRepeats,fingerprintPolicyKey: input_.fingerprintPolicyKey,escalationTargetKind: input_.escalationTargetKind
  }!;
}export function jsonProcessDefinitionLoopBudgetProjectionToApplicationTransform(
  input_?: any,
): ProcessDefinitionLoopBudgetProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    isRequired: input_.isRequired,maximumRepeats: input_.maximumRepeats,fingerprintPolicyKey: input_.fingerprintPolicyKey,escalationTargetKind: input_.escalationTargetKind
  }!;
}export function jsonArrayProcessDefinitionArtifactExpectationProjectionToTransportTransform(
  items_?: Array<ProcessDefinitionArtifactExpectationProjection> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessDefinitionArtifactExpectationProjectionToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayProcessDefinitionArtifactExpectationProjectionToApplicationTransform(
  items_?: any,
): Array<ProcessDefinitionArtifactExpectationProjection> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessDefinitionArtifactExpectationProjectionToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProcessDefinitionArtifactExpectationProjectionToTransportTransform(
  input_?: ProcessDefinitionArtifactExpectationProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    artifactKey: jsonProcessDefinitionArtifactExpectationKeyToTransportTransform(input_.artifactKey),templateKey: input_.templateKey,title: input_.title,artifactKind: input_.artifactKind,isRequired: input_.isRequired,trustRequirement: input_.trustRequirement,sensitivityLevel: input_.sensitivityLevel,retentionDays: input_.retentionDays,workflowOutputId: input_.workflowOutputId,workflowOutputName: input_.workflowOutputName,workflowOutputKind: input_.workflowOutputKind,subprocessChildArtifactExpectationId: input_.subprocessChildArtifactExpectationId,subprocessChildStepKey: input_.subprocessChildStepKey,subprocessChildArtifactTitle: input_.subprocessChildArtifactTitle,allowedFutureUsageSummary: input_.allowedFutureUsageSummary,validationRequirementSummary: input_.validationRequirementSummary
  }!;
}export function jsonProcessDefinitionArtifactExpectationProjectionToApplicationTransform(
  input_?: any,
): ProcessDefinitionArtifactExpectationProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    artifactKey: jsonProcessDefinitionArtifactExpectationKeyToApplicationTransform(input_.artifactKey),templateKey: input_.templateKey,title: input_.title,artifactKind: input_.artifactKind,isRequired: input_.isRequired,trustRequirement: input_.trustRequirement,sensitivityLevel: input_.sensitivityLevel,retentionDays: input_.retentionDays,workflowOutputId: input_.workflowOutputId,workflowOutputName: input_.workflowOutputName,workflowOutputKind: input_.workflowOutputKind,subprocessChildArtifactExpectationId: input_.subprocessChildArtifactExpectationId,subprocessChildStepKey: input_.subprocessChildStepKey,subprocessChildArtifactTitle: input_.subprocessChildArtifactTitle,allowedFutureUsageSummary: input_.allowedFutureUsageSummary,validationRequirementSummary: input_.validationRequirementSummary
  }!;
}export function jsonProcessDefinitionSubprocessMappingProjectionToTransportTransform(
  input_?: ProcessDefinitionSubprocessMappingProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    processKey: input_.processKey,definitionSnapshotName: input_.definitionSnapshotName,childArtifactMappings: jsonArrayProcessDefinitionArtifactExpectationProjectionToTransportTransform(input_.childArtifactMappings)
  }!;
}export function jsonProcessDefinitionSubprocessMappingProjectionToApplicationTransform(
  input_?: any,
): ProcessDefinitionSubprocessMappingProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    processKey: input_.processKey,definitionSnapshotName: input_.definitionSnapshotName,childArtifactMappings: jsonArrayProcessDefinitionArtifactExpectationProjectionToApplicationTransform(input_.childArtifactMappings)
  }!;
}export function jsonArrayProcessDefinitionSubprocessOptionProjectionToTransportTransform(
  items_?: Array<ProcessDefinitionSubprocessOptionProjection> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessDefinitionSubprocessOptionProjectionToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayProcessDefinitionSubprocessOptionProjectionToApplicationTransform(
  items_?: any,
): Array<ProcessDefinitionSubprocessOptionProjection> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessDefinitionSubprocessOptionProjectionToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProcessDefinitionSubprocessOptionProjectionToTransportTransform(
  input_?: ProcessDefinitionSubprocessOptionProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    definitionKey: jsonProcessDefinitionCatalogItemKeyToTransportTransform(input_.definitionKey),displayName: input_.displayName,summary: input_.summary
  }!;
}export function jsonProcessDefinitionSubprocessOptionProjectionToApplicationTransform(
  input_?: any,
): ProcessDefinitionSubprocessOptionProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    definitionKey: jsonProcessDefinitionCatalogItemKeyToApplicationTransform(input_.definitionKey),displayName: input_.displayName,summary: input_.summary
  }!;
}export function jsonArrayProcessDefinitionStepCommandProjectionToTransportTransform(
  items_?: Array<ProcessDefinitionStepCommandProjection> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessDefinitionStepCommandProjectionToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayProcessDefinitionStepCommandProjectionToApplicationTransform(
  items_?: any,
): Array<ProcessDefinitionStepCommandProjection> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessDefinitionStepCommandProjectionToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProcessDefinitionStepCommandProjectionToTransportTransform(
  input_?: ProcessDefinitionStepCommandProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: input_.kind,text: input_.text,icon: input_.icon,isEnabled: input_.isEnabled,disabledReason: input_.disabledReason
  }!;
}export function jsonProcessDefinitionStepCommandProjectionToApplicationTransform(
  input_?: any,
): ProcessDefinitionStepCommandProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: input_.kind,text: input_.text,icon: input_.icon,isEnabled: input_.isEnabled,disabledReason: input_.disabledReason
  }!;
}export function jsonProcessDefinitionStepLintProjectionToTransportTransform(
  input_?: ProcessDefinitionStepLintProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    issues: jsonArrayProcessDefinitionStepLintIssueProjectionToTransportTransform(input_.issues),hasWarningsOrErrors: input_.hasWarningsOrErrors,hasBlockingIssues: input_.hasBlockingIssues
  }!;
}export function jsonProcessDefinitionStepLintProjectionToApplicationTransform(
  input_?: any,
): ProcessDefinitionStepLintProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    issues: jsonArrayProcessDefinitionStepLintIssueProjectionToApplicationTransform(input_.issues),hasWarningsOrErrors: input_.hasWarningsOrErrors,hasBlockingIssues: input_.hasBlockingIssues
  }!;
}export function jsonArrayProcessDefinitionStepLintIssueProjectionToTransportTransform(
  items_?: Array<ProcessDefinitionStepLintIssueProjection> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessDefinitionStepLintIssueProjectionToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayProcessDefinitionStepLintIssueProjectionToApplicationTransform(
  items_?: any,
): Array<ProcessDefinitionStepLintIssueProjection> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessDefinitionStepLintIssueProjectionToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProcessDefinitionStepLintIssueProjectionToTransportTransform(
  input_?: ProcessDefinitionStepLintIssueProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    code: input_.code,severity: input_.severity,section: input_.section,message: input_.message,suggestion: input_.suggestion
  }!;
}export function jsonProcessDefinitionStepLintIssueProjectionToApplicationTransform(
  input_?: any,
): ProcessDefinitionStepLintIssueProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    code: input_.code,severity: input_.severity,section: input_.section,message: input_.message,suggestion: input_.suggestion
  }!;
}export function jsonProcessDefinitionStepCommandReceiptToTransportTransform(
  input_?: ProcessDefinitionStepCommandReceipt | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    receiptId: input_.receiptId,commandKind: input_.commandKind,status: input_.status,versionToken: jsonProcessDefinitionStepEditorVersionTokenToTransportTransform(input_.versionToken),observedAtUtc: dateRfc3339Serializer(input_.observedAtUtc),summary: input_.summary,lintIssues: jsonArrayProcessDefinitionStepLintIssueProjectionToTransportTransform(input_.lintIssues)
  }!;
}export function jsonProcessDefinitionStepCommandReceiptToApplicationTransform(
  input_?: any,
): ProcessDefinitionStepCommandReceipt {
  if(!input_) {
    return input_ as any;
  }
    return {
    receiptId: input_.receiptId,commandKind: input_.commandKind,status: input_.status,versionToken: jsonProcessDefinitionStepEditorVersionTokenToApplicationTransform(input_.versionToken),observedAtUtc: dateDeserializer(input_.observedAtUtc)!,summary: input_.summary,lintIssues: jsonArrayProcessDefinitionStepLintIssueProjectionToApplicationTransform(input_.lintIssues)
  }!;
}export function jsonProcessTemplateCatalogProjectionToTransportTransform(
  input_?: ProcessTemplateCatalogProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    targetDefinitionKey: jsonProcessDefinitionCatalogItemKeyToTransportTransform(input_.targetDefinitionKey),versionToken: jsonProcessTemplateCatalogVersionTokenToTransportTransform(input_.versionToken),query: jsonProcessTemplateCatalogQueryProjectionToTransportTransform(input_.query),summary: input_.summary,packVersion: input_.packVersion,canonicalSourceSummary: input_.canonicalSourceSummary,categories: jsonArrayProcessTemplateCatalogCategoryProjectionToTransportTransform(input_.categories),items: jsonArrayProcessTemplateCatalogItemProjectionToTransportTransform(input_.items),selectedItem: jsonProcessTemplateCatalogItemProjectionToTransportTransform(input_.selectedItem),preview: jsonProcessTemplateCatalogPreviewProjectionToTransportTransform(input_.preview),importTargets: jsonArrayProcessTemplateImportTargetStepProjectionToTransportTransform(input_.importTargets),commands: jsonArrayProcessTemplateImportCommandProjectionToTransportTransform(input_.commands),importedComponents: jsonArrayProcessTemplateImportedComponentProjectionToTransportTransform(input_.importedComponents),lastImportReceipt: jsonProcessTemplateImportCommandReceiptToTransportTransform(input_.lastImportReceipt)
  }!;
}export function jsonProcessTemplateCatalogProjectionToApplicationTransform(
  input_?: any,
): ProcessTemplateCatalogProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    targetDefinitionKey: jsonProcessDefinitionCatalogItemKeyToApplicationTransform(input_.targetDefinitionKey),versionToken: jsonProcessTemplateCatalogVersionTokenToApplicationTransform(input_.versionToken),query: jsonProcessTemplateCatalogQueryProjectionToApplicationTransform(input_.query),summary: input_.summary,packVersion: input_.packVersion,canonicalSourceSummary: input_.canonicalSourceSummary,categories: jsonArrayProcessTemplateCatalogCategoryProjectionToApplicationTransform(input_.categories),items: jsonArrayProcessTemplateCatalogItemProjectionToApplicationTransform(input_.items),selectedItem: jsonProcessTemplateCatalogItemProjectionToApplicationTransform(input_.selectedItem),preview: jsonProcessTemplateCatalogPreviewProjectionToApplicationTransform(input_.preview),importTargets: jsonArrayProcessTemplateImportTargetStepProjectionToApplicationTransform(input_.importTargets),commands: jsonArrayProcessTemplateImportCommandProjectionToApplicationTransform(input_.commands),importedComponents: jsonArrayProcessTemplateImportedComponentProjectionToApplicationTransform(input_.importedComponents),lastImportReceipt: jsonProcessTemplateImportCommandReceiptToApplicationTransform(input_.lastImportReceipt)
  }!;
}export function jsonProcessTemplateCatalogVersionTokenToTransportTransform(
  input_?: ProcessTemplateCatalogVersionToken | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value
  }!;
}export function jsonProcessTemplateCatalogVersionTokenToApplicationTransform(
  input_?: any,
): ProcessTemplateCatalogVersionToken {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value
  }!;
}export function jsonProcessTemplateCatalogQueryProjectionToTransportTransform(
  input_?: ProcessTemplateCatalogQueryProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    searchText: input_.searchText,category: input_.category,selectedItemKey: jsonProcessTemplateCatalogItemKeyToTransportTransform(input_.selectedItemKey),previewTab: input_.previewTab,take: input_.take
  }!;
}export function jsonProcessTemplateCatalogQueryProjectionToApplicationTransform(
  input_?: any,
): ProcessTemplateCatalogQueryProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    searchText: input_.searchText,category: input_.category,selectedItemKey: jsonProcessTemplateCatalogItemKeyToApplicationTransform(input_.selectedItemKey),previewTab: input_.previewTab,take: input_.take
  }!;
}export function jsonProcessTemplateCatalogItemKeyToTransportTransform(
  input_?: ProcessTemplateCatalogItemKey | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value
  }!;
}export function jsonProcessTemplateCatalogItemKeyToApplicationTransform(
  input_?: any,
): ProcessTemplateCatalogItemKey {
  if(!input_) {
    return input_ as any;
  }
    return {
    value: input_.value
  }!;
}export function jsonArrayProcessTemplateCatalogCategoryProjectionToTransportTransform(
  items_?: Array<ProcessTemplateCatalogCategoryProjection> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessTemplateCatalogCategoryProjectionToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayProcessTemplateCatalogCategoryProjectionToApplicationTransform(
  items_?: any,
): Array<ProcessTemplateCatalogCategoryProjection> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessTemplateCatalogCategoryProjectionToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProcessTemplateCatalogCategoryProjectionToTransportTransform(
  input_?: ProcessTemplateCatalogCategoryProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: input_.kind,label: input_.label,description: input_.description,count: input_.count,isSelected: input_.isSelected
  }!;
}export function jsonProcessTemplateCatalogCategoryProjectionToApplicationTransform(
  input_?: any,
): ProcessTemplateCatalogCategoryProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: input_.kind,label: input_.label,description: input_.description,count: input_.count,isSelected: input_.isSelected
  }!;
}export function jsonArrayProcessTemplateCatalogItemProjectionToTransportTransform(
  items_?: Array<ProcessTemplateCatalogItemProjection> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessTemplateCatalogItemProjectionToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayProcessTemplateCatalogItemProjectionToApplicationTransform(
  items_?: any,
): Array<ProcessTemplateCatalogItemProjection> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessTemplateCatalogItemProjectionToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProcessTemplateCatalogItemProjectionToTransportTransform(
  input_?: ProcessTemplateCatalogItemProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    key: jsonProcessTemplateCatalogItemKeyToTransportTransform(input_.key),kind: input_.kind,title: input_.title,summary: input_.summary,sourceDefinitionKey: input_.sourceDefinitionKey,sourceComponentKey: input_.sourceComponentKey,categoryLabel: input_.categoryLabel,facts: jsonArrayProcessTemplateCatalogFactProjectionToTransportTransform(input_.facts),isSelected: input_.isSelected
  }!;
}export function jsonProcessTemplateCatalogItemProjectionToApplicationTransform(
  input_?: any,
): ProcessTemplateCatalogItemProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    key: jsonProcessTemplateCatalogItemKeyToApplicationTransform(input_.key),kind: input_.kind,title: input_.title,summary: input_.summary,sourceDefinitionKey: input_.sourceDefinitionKey,sourceComponentKey: input_.sourceComponentKey,categoryLabel: input_.categoryLabel,facts: jsonArrayProcessTemplateCatalogFactProjectionToApplicationTransform(input_.facts),isSelected: input_.isSelected
  }!;
}export function jsonArrayProcessTemplateCatalogFactProjectionToTransportTransform(
  items_?: Array<ProcessTemplateCatalogFactProjection> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessTemplateCatalogFactProjectionToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayProcessTemplateCatalogFactProjectionToApplicationTransform(
  items_?: any,
): Array<ProcessTemplateCatalogFactProjection> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessTemplateCatalogFactProjectionToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProcessTemplateCatalogFactProjectionToTransportTransform(
  input_?: ProcessTemplateCatalogFactProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    label: input_.label,value: input_.value
  }!;
}export function jsonProcessTemplateCatalogFactProjectionToApplicationTransform(
  input_?: any,
): ProcessTemplateCatalogFactProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    label: input_.label,value: input_.value
  }!;
}export function jsonProcessTemplateCatalogPreviewProjectionToTransportTransform(
  input_?: ProcessTemplateCatalogPreviewProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    itemKey: jsonProcessTemplateCatalogItemKeyToTransportTransform(input_.itemKey),kind: input_.kind,title: input_.title,summary: input_.summary,sourceJsonRelativePath: input_.sourceJsonRelativePath,sourceJsonHash: input_.sourceJsonHash,generatedProjectionNotice: input_.generatedProjectionNotice,generatedMarkdown: input_.generatedMarkdown,generatedMermaid: input_.generatedMermaid,canonicalJson: input_.canonicalJson,structure: jsonArrayProcessTemplateStructureNodeProjectionToTransportTransform(input_.structure),relatedComponents: jsonArrayProcessTemplateRelatedComponentProjectionToTransportTransform(input_.relatedComponents)
  }!;
}export function jsonProcessTemplateCatalogPreviewProjectionToApplicationTransform(
  input_?: any,
): ProcessTemplateCatalogPreviewProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    itemKey: jsonProcessTemplateCatalogItemKeyToApplicationTransform(input_.itemKey),kind: input_.kind,title: input_.title,summary: input_.summary,sourceJsonRelativePath: input_.sourceJsonRelativePath,sourceJsonHash: input_.sourceJsonHash,generatedProjectionNotice: input_.generatedProjectionNotice,generatedMarkdown: input_.generatedMarkdown,generatedMermaid: input_.generatedMermaid,canonicalJson: input_.canonicalJson,structure: jsonArrayProcessTemplateStructureNodeProjectionToApplicationTransform(input_.structure),relatedComponents: jsonArrayProcessTemplateRelatedComponentProjectionToApplicationTransform(input_.relatedComponents)
  }!;
}export function jsonArrayProcessTemplateStructureNodeProjectionToTransportTransform(
  items_?: Array<ProcessTemplateStructureNodeProjection> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessTemplateStructureNodeProjectionToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayProcessTemplateStructureNodeProjectionToApplicationTransform(
  items_?: any,
): Array<ProcessTemplateStructureNodeProjection> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessTemplateStructureNodeProjectionToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProcessTemplateStructureNodeProjectionToTransportTransform(
  input_?: ProcessTemplateStructureNodeProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    nodeKey: input_.nodeKey,parentNodeKey: input_.parentNodeKey,kind: input_.kind,title: input_.title,summary: input_.summary,depth: input_.depth
  }!;
}export function jsonProcessTemplateStructureNodeProjectionToApplicationTransform(
  input_?: any,
): ProcessTemplateStructureNodeProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    nodeKey: input_.nodeKey,parentNodeKey: input_.parentNodeKey,kind: input_.kind,title: input_.title,summary: input_.summary,depth: input_.depth
  }!;
}export function jsonArrayProcessTemplateRelatedComponentProjectionToTransportTransform(
  items_?: Array<ProcessTemplateRelatedComponentProjection> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessTemplateRelatedComponentProjectionToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayProcessTemplateRelatedComponentProjectionToApplicationTransform(
  items_?: any,
): Array<ProcessTemplateRelatedComponentProjection> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessTemplateRelatedComponentProjectionToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProcessTemplateRelatedComponentProjectionToTransportTransform(
  input_?: ProcessTemplateRelatedComponentProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    key: jsonProcessTemplateCatalogItemKeyToTransportTransform(input_.key),kind: input_.kind,title: input_.title,summary: input_.summary,sourceDefinitionKey: input_.sourceDefinitionKey,sourceComponentKey: input_.sourceComponentKey,isImported: input_.isImported
  }!;
}export function jsonProcessTemplateRelatedComponentProjectionToApplicationTransform(
  input_?: any,
): ProcessTemplateRelatedComponentProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    key: jsonProcessTemplateCatalogItemKeyToApplicationTransform(input_.key),kind: input_.kind,title: input_.title,summary: input_.summary,sourceDefinitionKey: input_.sourceDefinitionKey,sourceComponentKey: input_.sourceComponentKey,isImported: input_.isImported
  }!;
}export function jsonArrayProcessTemplateImportTargetStepProjectionToTransportTransform(
  items_?: Array<ProcessTemplateImportTargetStepProjection> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessTemplateImportTargetStepProjectionToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayProcessTemplateImportTargetStepProjectionToApplicationTransform(
  items_?: any,
): Array<ProcessTemplateImportTargetStepProjection> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessTemplateImportTargetStepProjectionToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProcessTemplateImportTargetStepProjectionToTransportTransform(
  input_?: ProcessTemplateImportTargetStepProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    stepKey: jsonProcessDefinitionStepKeyToTransportTransform(input_.stepKey),title: input_.title,summary: input_.summary,isDefaultTarget: input_.isDefaultTarget
  }!;
}export function jsonProcessTemplateImportTargetStepProjectionToApplicationTransform(
  input_?: any,
): ProcessTemplateImportTargetStepProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    stepKey: jsonProcessDefinitionStepKeyToApplicationTransform(input_.stepKey),title: input_.title,summary: input_.summary,isDefaultTarget: input_.isDefaultTarget
  }!;
}export function jsonArrayProcessTemplateImportCommandProjectionToTransportTransform(
  items_?: Array<ProcessTemplateImportCommandProjection> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessTemplateImportCommandProjectionToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayProcessTemplateImportCommandProjectionToApplicationTransform(
  items_?: any,
): Array<ProcessTemplateImportCommandProjection> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessTemplateImportCommandProjectionToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProcessTemplateImportCommandProjectionToTransportTransform(
  input_?: ProcessTemplateImportCommandProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: input_.kind,text: input_.text,icon: input_.icon,isEnabled: input_.isEnabled,disabledReason: input_.disabledReason
  }!;
}export function jsonProcessTemplateImportCommandProjectionToApplicationTransform(
  input_?: any,
): ProcessTemplateImportCommandProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: input_.kind,text: input_.text,icon: input_.icon,isEnabled: input_.isEnabled,disabledReason: input_.disabledReason
  }!;
}export function jsonArrayProcessTemplateImportedComponentProjectionToTransportTransform(
  items_?: Array<ProcessTemplateImportedComponentProjection> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessTemplateImportedComponentProjectionToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayProcessTemplateImportedComponentProjectionToApplicationTransform(
  items_?: any,
): Array<ProcessTemplateImportedComponentProjection> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonProcessTemplateImportedComponentProjectionToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonProcessTemplateImportedComponentProjectionToTransportTransform(
  input_?: ProcessTemplateImportedComponentProjection | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    itemKey: jsonProcessTemplateCatalogItemKeyToTransportTransform(input_.itemKey),kind: input_.kind,title: input_.title,sourceDefinitionKey: input_.sourceDefinitionKey,sourceComponentKey: input_.sourceComponentKey,sourceJsonHash: input_.sourceJsonHash,targetStepKey: jsonProcessDefinitionStepKeyToTransportTransform(input_.targetStepKey),importedAtUtc: dateRfc3339Serializer(input_.importedAtUtc)
  }!;
}export function jsonProcessTemplateImportedComponentProjectionToApplicationTransform(
  input_?: any,
): ProcessTemplateImportedComponentProjection {
  if(!input_) {
    return input_ as any;
  }
    return {
    itemKey: jsonProcessTemplateCatalogItemKeyToApplicationTransform(input_.itemKey),kind: input_.kind,title: input_.title,sourceDefinitionKey: input_.sourceDefinitionKey,sourceComponentKey: input_.sourceComponentKey,sourceJsonHash: input_.sourceJsonHash,targetStepKey: jsonProcessDefinitionStepKeyToApplicationTransform(input_.targetStepKey),importedAtUtc: dateDeserializer(input_.importedAtUtc)!
  }!;
}export function jsonProcessTemplateImportCommandReceiptToTransportTransform(
  input_?: ProcessTemplateImportCommandReceipt | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    receiptId: input_.receiptId,commandKind: input_.commandKind,status: input_.status,versionToken: jsonProcessTemplateCatalogVersionTokenToTransportTransform(input_.versionToken),observedAtUtc: dateRfc3339Serializer(input_.observedAtUtc),summary: input_.summary
  }!;
}export function jsonProcessTemplateImportCommandReceiptToApplicationTransform(
  input_?: any,
): ProcessTemplateImportCommandReceipt {
  if(!input_) {
    return input_ as any;
  }
    return {
    receiptId: input_.receiptId,commandKind: input_.commandKind,status: input_.status,versionToken: jsonProcessTemplateCatalogVersionTokenToApplicationTransform(input_.versionToken),observedAtUtc: dateDeserializer(input_.observedAtUtc)!,summary: input_.summary
  }!;
}export function jsonArrayMemoryProviderProfileApiResponseToTransportTransform(
  items_?: Array<MemoryProviderProfileApiResponse> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonMemoryProviderProfileApiResponseToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayMemoryProviderProfileApiResponseToApplicationTransform(
  items_?: any,
): Array<MemoryProviderProfileApiResponse> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonMemoryProviderProfileApiResponseToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonMemoryProviderProfileApiResponseToTransportTransform(
  input_?: MemoryProviderProfileApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    providerId: input_.providerId,displayName: input_.displayName,driverKind: jsonMemoryProviderDriverKindToTransportTransform(input_.driverKind),isEnabled: input_.isEnabled,healthState: jsonMemoryProviderHealthStateToTransportTransform(input_.healthState),workspaceScope: jsonMemoryProviderWorkspaceScopeToTransportTransform(input_.workspaceScope),fallbackBehavior: jsonMemoryProviderFallbackBehaviorToTransportTransform(input_.fallbackBehavior),providerKind: input_.providerKind,protocolVersion: input_.protocolVersion,selectionTags: jsonArrayStringToTransportTransform(input_.selectionTags),capabilities: jsonMemoryProviderCapabilitiesApiResponseToTransportTransform(input_.capabilities),interactionSupport: jsonMemoryProviderInteractionSupportApiResponseToTransportTransform(input_.interactionSupport),limits: jsonMemoryProviderLimitsApiResponseToTransportTransform(input_.limits),http: jsonMemoryProviderHttpTransportApiModelToTransportTransform(input_.http),mcp: jsonMemoryProviderMcpTransportApiModelToTransportTransform(input_.mcp)
  }!;
}export function jsonMemoryProviderProfileApiResponseToApplicationTransform(
  input_?: any,
): MemoryProviderProfileApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    providerId: input_.providerId,displayName: input_.displayName,driverKind: jsonMemoryProviderDriverKindToApplicationTransform(input_.driverKind),isEnabled: input_.isEnabled,healthState: jsonMemoryProviderHealthStateToApplicationTransform(input_.healthState),workspaceScope: jsonMemoryProviderWorkspaceScopeToApplicationTransform(input_.workspaceScope),fallbackBehavior: jsonMemoryProviderFallbackBehaviorToApplicationTransform(input_.fallbackBehavior),providerKind: input_.providerKind,protocolVersion: input_.protocolVersion,selectionTags: jsonArrayStringToApplicationTransform(input_.selectionTags),capabilities: jsonMemoryProviderCapabilitiesApiResponseToApplicationTransform(input_.capabilities),interactionSupport: jsonMemoryProviderInteractionSupportApiResponseToApplicationTransform(input_.interactionSupport),limits: jsonMemoryProviderLimitsApiResponseToApplicationTransform(input_.limits),http: jsonMemoryProviderHttpTransportApiModelToApplicationTransform(input_.http),mcp: jsonMemoryProviderMcpTransportApiModelToApplicationTransform(input_.mcp)
  }!;
}export function jsonMemoryProviderDriverKindToTransportTransform(
  input_?: MemoryProviderDriverKind | null,
): any {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonMemoryProviderDriverKindToApplicationTransform(
  input_?: any,
): MemoryProviderDriverKind {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonMemoryProviderHealthStateToTransportTransform(
  input_?: MemoryProviderHealthState | null,
): any {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonMemoryProviderHealthStateToApplicationTransform(
  input_?: any,
): MemoryProviderHealthState {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonMemoryProviderWorkspaceScopeToTransportTransform(
  input_?: MemoryProviderWorkspaceScope | null,
): any {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonMemoryProviderWorkspaceScopeToApplicationTransform(
  input_?: any,
): MemoryProviderWorkspaceScope {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonMemoryProviderFallbackBehaviorToTransportTransform(
  input_?: MemoryProviderFallbackBehavior | null,
): any {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonMemoryProviderFallbackBehaviorToApplicationTransform(
  input_?: any,
): MemoryProviderFallbackBehavior {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonMemoryProviderCapabilitiesApiResponseToTransportTransform(
  input_?: MemoryProviderCapabilitiesApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    supportsSynchronousQueries: input_.supportsSynchronousQueries,supportsAsynchronousQueries: input_.supportsAsynchronousQueries,supportsOperationStatus: input_.supportsOperationStatus,supportsRclUi: input_.supportsRclUi,supportsIframeUi: input_.supportsIframeUi
  }!;
}export function jsonMemoryProviderCapabilitiesApiResponseToApplicationTransform(
  input_?: any,
): MemoryProviderCapabilitiesApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    supportsSynchronousQueries: input_.supportsSynchronousQueries,supportsAsynchronousQueries: input_.supportsAsynchronousQueries,supportsOperationStatus: input_.supportsOperationStatus,supportsRclUi: input_.supportsRclUi,supportsIframeUi: input_.supportsIframeUi
  }!;
}export function jsonMemoryProviderInteractionSupportApiResponseToTransportTransform(
  input_?: MemoryProviderInteractionSupportApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    supportsSynchronousQueries: input_.supportsSynchronousQueries,supportsAsynchronousOperations: input_.supportsAsynchronousOperations
  }!;
}export function jsonMemoryProviderInteractionSupportApiResponseToApplicationTransform(
  input_?: any,
): MemoryProviderInteractionSupportApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    supportsSynchronousQueries: input_.supportsSynchronousQueries,supportsAsynchronousOperations: input_.supportsAsynchronousOperations
  }!;
}export function jsonMemoryProviderLimitsApiResponseToTransportTransform(
  input_?: MemoryProviderLimitsApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    maxContextSections: input_.maxContextSections,maxSourceItems: input_.maxSourceItems,maxInFlightOperations: input_.maxInFlightOperations,operationTimeoutSeconds: input_.operationTimeoutSeconds
  }!;
}export function jsonMemoryProviderLimitsApiResponseToApplicationTransform(
  input_?: any,
): MemoryProviderLimitsApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    maxContextSections: input_.maxContextSections,maxSourceItems: input_.maxSourceItems,maxInFlightOperations: input_.maxInFlightOperations,operationTimeoutSeconds: input_.operationTimeoutSeconds
  }!;
}export function jsonMemoryProviderHttpTransportApiModelToTransportTransform(
  input_?: MemoryProviderHttpTransportApiModel | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    baseUrl: input_.baseUrl,queryPath: input_.queryPath,healthPath: input_.healthPath,apiKeyEnvironmentVariable: input_.apiKeyEnvironmentVariable,authHeaderName: input_.authHeaderName,authScheme: input_.authScheme,timeoutMilliseconds: input_.timeoutMilliseconds,maxRetryAttempts: input_.maxRetryAttempts
  }!;
}export function jsonMemoryProviderHttpTransportApiModelToApplicationTransform(
  input_?: any,
): MemoryProviderHttpTransportApiModel {
  if(!input_) {
    return input_ as any;
  }
    return {
    baseUrl: input_.baseUrl,queryPath: input_.queryPath,healthPath: input_.healthPath,apiKeyEnvironmentVariable: input_.apiKeyEnvironmentVariable,authHeaderName: input_.authHeaderName,authScheme: input_.authScheme,timeoutMilliseconds: input_.timeoutMilliseconds,maxRetryAttempts: input_.maxRetryAttempts
  }!;
}export function jsonMemoryProviderMcpTransportApiModelToTransportTransform(
  input_?: MemoryProviderMcpTransportApiModel | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    descriptorKind: input_.descriptorKind,serverKey: input_.serverKey,displayName: input_.displayName,description: input_.description,remoteEndpoint: input_.remoteEndpoint,authHeaderName: input_.authHeaderName,authHeaderEnvironmentVariable: input_.authHeaderEnvironmentVariable,contextQueryTool: input_.contextQueryTool,operationStatusTool: input_.operationStatusTool
  }!;
}export function jsonMemoryProviderMcpTransportApiModelToApplicationTransform(
  input_?: any,
): MemoryProviderMcpTransportApiModel {
  if(!input_) {
    return input_ as any;
  }
    return {
    descriptorKind: input_.descriptorKind,serverKey: input_.serverKey,displayName: input_.displayName,description: input_.description,remoteEndpoint: input_.remoteEndpoint,authHeaderName: input_.authHeaderName,authHeaderEnvironmentVariable: input_.authHeaderEnvironmentVariable,contextQueryTool: input_.contextQueryTool,operationStatusTool: input_.operationStatusTool
  }!;
}export function jsonMemoryProviderProfileApiRequestToTransportTransform(
  input_?: MemoryProviderProfileApiRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    displayName: input_.displayName,driverKind: jsonMemoryProviderDriverKindApiRequestToTransportTransform(input_.driverKind),isEnabled: input_.isEnabled,fallbackBehavior: jsonMemoryProviderFallbackBehaviorApiRequestToTransportTransform(input_.fallbackBehavior),providerKind: input_.providerKind,selectionTags: jsonArrayStringToTransportTransform(input_.selectionTags),capabilities: jsonMemoryProviderCapabilitiesApiRequestToTransportTransform(input_.capabilities),http: jsonMemoryProviderHttpTransportApiModelToTransportTransform(input_.http),mcp: jsonMemoryProviderMcpTransportApiModelToTransportTransform(input_.mcp)
  }!;
}export function jsonMemoryProviderProfileApiRequestToApplicationTransform(
  input_?: any,
): MemoryProviderProfileApiRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    displayName: input_.displayName,driverKind: jsonMemoryProviderDriverKindApiRequestToApplicationTransform(input_.driverKind),isEnabled: input_.isEnabled,fallbackBehavior: jsonMemoryProviderFallbackBehaviorApiRequestToApplicationTransform(input_.fallbackBehavior),providerKind: input_.providerKind,selectionTags: jsonArrayStringToApplicationTransform(input_.selectionTags),capabilities: jsonMemoryProviderCapabilitiesApiRequestToApplicationTransform(input_.capabilities),http: jsonMemoryProviderHttpTransportApiModelToApplicationTransform(input_.http),mcp: jsonMemoryProviderMcpTransportApiModelToApplicationTransform(input_.mcp)
  }!;
}export function jsonMemoryProviderDriverKindApiRequestToTransportTransform(
  input_?: MemoryProviderDriverKindApiRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonMemoryProviderDriverKindApiRequestToApplicationTransform(
  input_?: any,
): MemoryProviderDriverKindApiRequest {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonMemoryProviderFallbackBehaviorApiRequestToTransportTransform(
  input_?: MemoryProviderFallbackBehaviorApiRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonMemoryProviderFallbackBehaviorApiRequestToApplicationTransform(
  input_?: any,
): MemoryProviderFallbackBehaviorApiRequest {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonMemoryProviderCapabilitiesApiRequestToTransportTransform(
  input_?: MemoryProviderCapabilitiesApiRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    supportsSynchronousQueries: input_.supportsSynchronousQueries,supportsAsynchronousQueries: input_.supportsAsynchronousQueries,supportsOperationStatus: input_.supportsOperationStatus
  }!;
}export function jsonMemoryProviderCapabilitiesApiRequestToApplicationTransform(
  input_?: any,
): MemoryProviderCapabilitiesApiRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    supportsSynchronousQueries: input_.supportsSynchronousQueries,supportsAsynchronousQueries: input_.supportsAsynchronousQueries,supportsOperationStatus: input_.supportsOperationStatus
  }!;
}export function jsonMemoryProviderQueryApiRequestToTransportTransform(
  input_?: MemoryProviderQueryApiRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    query: input_.query,mode: jsonMemoryProviderQueryModeToTransportTransform(input_.mode)
  }!;
}export function jsonMemoryProviderQueryApiRequestToApplicationTransform(
  input_?: any,
): MemoryProviderQueryApiRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    query: input_.query,mode: jsonMemoryProviderQueryModeToApplicationTransform(input_.mode)
  }!;
}export function jsonMemoryProviderQueryModeToTransportTransform(
  input_?: MemoryProviderQueryMode | null,
): any {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonMemoryProviderQueryModeToApplicationTransform(
  input_?: any,
): MemoryProviderQueryMode {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonMemoryProviderQueryApiResponseToTransportTransform(
  input_?: MemoryProviderQueryApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    status: jsonMemoryOperationHandlerStatusToTransportTransform(input_.status),diagnostic: input_.diagnostic,selection: jsonMemoryProviderSelectionApiResponseToTransportTransform(input_.selection),operation: jsonMemoryProviderOperationApiResponseToTransportTransform(input_.operation),contextPack: jsonMemoryContextPackApiResponseToTransportTransform(input_.contextPack),acceptedOperation: jsonMemoryAcceptedOperationApiResponseToTransportTransform(input_.acceptedOperation),feedbackHandle: input_.feedbackHandle,driverDispatchAttempted: input_.driverDispatchAttempted
  }!;
}export function jsonMemoryProviderQueryApiResponseToApplicationTransform(
  input_?: any,
): MemoryProviderQueryApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    status: jsonMemoryOperationHandlerStatusToApplicationTransform(input_.status),diagnostic: input_.diagnostic,selection: jsonMemoryProviderSelectionApiResponseToApplicationTransform(input_.selection),operation: jsonMemoryProviderOperationApiResponseToApplicationTransform(input_.operation),contextPack: jsonMemoryContextPackApiResponseToApplicationTransform(input_.contextPack),acceptedOperation: jsonMemoryAcceptedOperationApiResponseToApplicationTransform(input_.acceptedOperation),feedbackHandle: input_.feedbackHandle,driverDispatchAttempted: input_.driverDispatchAttempted
  }!;
}export function jsonMemoryOperationHandlerStatusToTransportTransform(
  input_?: MemoryOperationHandlerStatus | null,
): any {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonMemoryOperationHandlerStatusToApplicationTransform(
  input_?: any,
): MemoryOperationHandlerStatus {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonMemoryProviderSelectionApiResponseToTransportTransform(
  input_?: MemoryProviderSelectionApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    status: jsonMemoryProviderSelectionStatusToTransportTransform(input_.status),reason: jsonMemoryProviderSelectionReasonToTransportTransform(input_.reason),requiredCapability: input_.requiredCapability,dispatchAllowed: input_.dispatchAllowed,diagnostic: input_.diagnostic,selectedProviderId: input_.selectedProviderId,candidateProviderIds: jsonArrayStringToTransportTransform(input_.candidateProviderIds)
  }!;
}export function jsonMemoryProviderSelectionApiResponseToApplicationTransform(
  input_?: any,
): MemoryProviderSelectionApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    status: jsonMemoryProviderSelectionStatusToApplicationTransform(input_.status),reason: jsonMemoryProviderSelectionReasonToApplicationTransform(input_.reason),requiredCapability: input_.requiredCapability,dispatchAllowed: input_.dispatchAllowed,diagnostic: input_.diagnostic,selectedProviderId: input_.selectedProviderId,candidateProviderIds: jsonArrayStringToApplicationTransform(input_.candidateProviderIds)
  }!;
}export function jsonMemoryProviderSelectionStatusToTransportTransform(
  input_?: MemoryProviderSelectionStatus | null,
): any {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonMemoryProviderSelectionStatusToApplicationTransform(
  input_?: any,
): MemoryProviderSelectionStatus {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonMemoryProviderSelectionReasonToTransportTransform(
  input_?: MemoryProviderSelectionReason | null,
): any {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonMemoryProviderSelectionReasonToApplicationTransform(
  input_?: any,
): MemoryProviderSelectionReason {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonMemoryProviderOperationApiResponseToTransportTransform(
  input_?: MemoryProviderOperationApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    operationId: input_.operationId,providerId: input_.providerId,requestedCapability: input_.requestedCapability,operationKind: jsonMemoryOperationKindToTransportTransform(input_.operationKind),status: jsonMemoryLedgerStatusToTransportTransform(input_.status),retryCount: input_.retryCount,transitionCount: input_.transitionCount,createdAtUtc: dateRfc3339Serializer(input_.createdAtUtc),updatedAtUtc: dateRfc3339Serializer(input_.updatedAtUtc),completedAtUtc: dateRfc3339Serializer(input_.completedAtUtc),statusReason: input_.statusReason
  }!;
}export function jsonMemoryProviderOperationApiResponseToApplicationTransform(
  input_?: any,
): MemoryProviderOperationApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    operationId: input_.operationId,providerId: input_.providerId,requestedCapability: input_.requestedCapability,operationKind: jsonMemoryOperationKindToApplicationTransform(input_.operationKind),status: jsonMemoryLedgerStatusToApplicationTransform(input_.status),retryCount: input_.retryCount,transitionCount: input_.transitionCount,createdAtUtc: dateDeserializer(input_.createdAtUtc)!,updatedAtUtc: dateDeserializer(input_.updatedAtUtc)!,completedAtUtc: dateDeserializer(input_.completedAtUtc)!,statusReason: input_.statusReason
  }!;
}export function jsonMemoryOperationKindToTransportTransform(
  input_?: MemoryOperationKind | null,
): any {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonMemoryOperationKindToApplicationTransform(
  input_?: any,
): MemoryOperationKind {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonMemoryLedgerStatusToTransportTransform(
  input_?: MemoryLedgerStatus | null,
): any {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonMemoryLedgerStatusToApplicationTransform(
  input_?: any,
): MemoryLedgerStatus {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonMemoryContextPackApiResponseToTransportTransform(
  input_?: MemoryContextPackApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    contextPackId: input_.contextPackId,summary: input_.summary,sections: jsonArrayMemoryContextSectionApiResponseToTransportTransform(input_.sections),warnings: jsonArrayMemoryWarningApiResponseToTransportTransform(input_.warnings),providerConfidence: input_.providerConfidence,feedbackHandle: input_.feedbackHandle
  }!;
}export function jsonMemoryContextPackApiResponseToApplicationTransform(
  input_?: any,
): MemoryContextPackApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    contextPackId: input_.contextPackId,summary: input_.summary,sections: jsonArrayMemoryContextSectionApiResponseToApplicationTransform(input_.sections),warnings: jsonArrayMemoryWarningApiResponseToApplicationTransform(input_.warnings),providerConfidence: input_.providerConfidence,feedbackHandle: input_.feedbackHandle
  }!;
}export function jsonArrayMemoryContextSectionApiResponseToTransportTransform(
  items_?: Array<MemoryContextSectionApiResponse> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonMemoryContextSectionApiResponseToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayMemoryContextSectionApiResponseToApplicationTransform(
  items_?: any,
): Array<MemoryContextSectionApiResponse> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonMemoryContextSectionApiResponseToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonMemoryContextSectionApiResponseToTransportTransform(
  input_?: MemoryContextSectionApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    title: input_.title,text: input_.text,citations: jsonArrayMemoryCitationApiResponseToTransportTransform(input_.citations),confidence: input_.confidence
  }!;
}export function jsonMemoryContextSectionApiResponseToApplicationTransform(
  input_?: any,
): MemoryContextSectionApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    title: input_.title,text: input_.text,citations: jsonArrayMemoryCitationApiResponseToApplicationTransform(input_.citations),confidence: input_.confidence
  }!;
}export function jsonArrayMemoryCitationApiResponseToTransportTransform(
  items_?: Array<MemoryCitationApiResponse> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonMemoryCitationApiResponseToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayMemoryCitationApiResponseToApplicationTransform(
  items_?: any,
): Array<MemoryCitationApiResponse> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonMemoryCitationApiResponseToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonMemoryCitationApiResponseToTransportTransform(
  input_?: MemoryCitationApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    sourceRef: input_.sourceRef,label: input_.label
  }!;
}export function jsonMemoryCitationApiResponseToApplicationTransform(
  input_?: any,
): MemoryCitationApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    sourceRef: input_.sourceRef,label: input_.label
  }!;
}export function jsonArrayMemoryWarningApiResponseToTransportTransform(
  items_?: Array<MemoryWarningApiResponse> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonMemoryWarningApiResponseToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayMemoryWarningApiResponseToApplicationTransform(
  items_?: any,
): Array<MemoryWarningApiResponse> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonMemoryWarningApiResponseToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonMemoryWarningApiResponseToTransportTransform(
  input_?: MemoryWarningApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: jsonMemoryWarningKindToTransportTransform(input_.kind),message: input_.message
  }!;
}export function jsonMemoryWarningApiResponseToApplicationTransform(
  input_?: any,
): MemoryWarningApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    kind: jsonMemoryWarningKindToApplicationTransform(input_.kind),message: input_.message
  }!;
}export function jsonMemoryWarningKindToTransportTransform(
  input_?: MemoryWarningKind | null,
): any {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonMemoryWarningKindToApplicationTransform(
  input_?: any,
): MemoryWarningKind {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonMemoryAcceptedOperationApiResponseToTransportTransform(
  input_?: MemoryAcceptedOperationApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    operationId: input_.operationId,statusPath: input_.statusPath,expiresAtUtc: dateRfc3339Serializer(input_.expiresAtUtc),pollAfterSeconds: input_.pollAfterSeconds,callbackAvailable: input_.callbackAvailable
  }!;
}export function jsonMemoryAcceptedOperationApiResponseToApplicationTransform(
  input_?: any,
): MemoryAcceptedOperationApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    operationId: input_.operationId,statusPath: input_.statusPath,expiresAtUtc: dateDeserializer(input_.expiresAtUtc)!,pollAfterSeconds: input_.pollAfterSeconds,callbackAvailable: input_.callbackAvailable
  }!;
}export function jsonMemoryProviderOperationStatusApiResponseToTransportTransform(
  input_?: MemoryProviderOperationStatusApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    status: jsonMemoryOperationHandlerStatusToTransportTransform(input_.status),diagnostic: input_.diagnostic,selection: jsonMemoryProviderSelectionApiResponseToTransportTransform(input_.selection),operation: jsonMemoryProviderOperationApiResponseToTransportTransform(input_.operation)
  }!;
}export function jsonMemoryProviderOperationStatusApiResponseToApplicationTransform(
  input_?: any,
): MemoryProviderOperationStatusApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    status: jsonMemoryOperationHandlerStatusToApplicationTransform(input_.status),diagnostic: input_.diagnostic,selection: jsonMemoryProviderSelectionApiResponseToApplicationTransform(input_.selection),operation: jsonMemoryProviderOperationApiResponseToApplicationTransform(input_.operation)
  }!;
}export function jsonPluginPackageInstallRequestToTransportTransform(
  input_?: PluginPackageInstallRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    enable: input_.enable,actor: input_.actor
  }!;
}export function jsonPluginPackageInstallRequestToApplicationTransform(
  input_?: any,
): PluginPackageInstallRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    enable: input_.enable,actor: input_.actor
  }!;
}export function jsonPluginRuntimeRestartRequestToTransportTransform(
  input_?: PluginRuntimeRestartRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    actor: input_.actor
  }!;
}export function jsonPluginRuntimeRestartRequestToApplicationTransform(
  input_?: any,
): PluginRuntimeRestartRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    actor: input_.actor
  }!;
}export function jsonPluginInstallRequestToTransportTransform(
  input_?: PluginInstallRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    enable: input_.enable,actor: input_.actor
  }!;
}export function jsonPluginInstallRequestToApplicationTransform(
  input_?: any,
): PluginInstallRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    enable: input_.enable,actor: input_.actor
  }!;
}export function jsonPluginInstallationUpdateRequestToTransportTransform(
  input_?: PluginInstallationUpdateRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    actor: input_.actor
  }!;
}export function jsonPluginInstallationUpdateRequestToApplicationTransform(
  input_?: any,
): PluginInstallationUpdateRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    actor: input_.actor
  }!;
}export function jsonPluginGrantUpdateRequestToTransportTransform(
  input_?: PluginGrantUpdateRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    capability: input_.capability,state: input_.state,recipeId: input_.recipeId,scopeKind: input_.scopeKind,scopeKey: input_.scopeKey,riskKind: input_.riskKind,reason: input_.reason
  }!;
}export function jsonPluginGrantUpdateRequestToApplicationTransform(
  input_?: any,
): PluginGrantUpdateRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    capability: input_.capability,state: input_.state,recipeId: input_.recipeId,scopeKind: input_.scopeKind,scopeKey: input_.scopeKey,riskKind: input_.riskKind,reason: input_.reason
  }!;
}export function jsonPluginConnectionSaveRequestToTransportTransform(
  input_?: PluginConnectionSaveRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,connectionKey: input_.connectionKey,displayName: input_.displayName,settingsJson: input_.settingsJson,isEnabled: input_.isEnabled
  }!;
}export function jsonPluginConnectionSaveRequestToApplicationTransform(
  input_?: any,
): PluginConnectionSaveRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,connectionKey: input_.connectionKey,displayName: input_.displayName,settingsJson: input_.settingsJson,isEnabled: input_.isEnabled
  }!;
}export function jsonPluginOAuthStartRequestToTransportTransform(
  input_?: PluginOAuthStartRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    connectionKey: input_.connectionKey,connectionId: input_.connectionId,displayName: input_.displayName,returnPath: input_.returnPath,scopes: jsonArrayStringToTransportTransform(input_.scopes),redirectUri: input_.redirectUri
  }!;
}export function jsonPluginOAuthStartRequestToApplicationTransform(
  input_?: any,
): PluginOAuthStartRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    connectionKey: input_.connectionKey,connectionId: input_.connectionId,displayName: input_.displayName,returnPath: input_.returnPath,scopes: jsonArrayStringToApplicationTransform(input_.scopes),redirectUri: input_.redirectUri
  }!;
}export function jsonPartyCreateApiRequestToTransportTransform(
  input_?: PartyCreateApiRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    partyType: input_.partyType,lifecycleStatus: input_.lifecycleStatus,displayName: input_.displayName,legalName: input_.legalName,preferredName: input_.preferredName,externalCode: input_.externalCode,summary: input_.summary,tags: jsonArrayStringToTransportTransform(input_.tags),region: input_.region,countryCode: input_.countryCode,timeZone: input_.timeZone,isSensitive: input_.isSensitive,roles: jsonArrayPartyRoleCreateApiRequestToTransportTransform(input_.roles),publicContacts: jsonArrayPartyPublicContactCreateApiRequestToTransportTransform(input_.publicContacts),addresses: jsonArrayPartyAddressCreateApiRequestToTransportTransform(input_.addresses)
  }!;
}export function jsonPartyCreateApiRequestToApplicationTransform(
  input_?: any,
): PartyCreateApiRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    partyType: input_.partyType,lifecycleStatus: input_.lifecycleStatus,displayName: input_.displayName,legalName: input_.legalName,preferredName: input_.preferredName,externalCode: input_.externalCode,summary: input_.summary,tags: jsonArrayStringToApplicationTransform(input_.tags),region: input_.region,countryCode: input_.countryCode,timeZone: input_.timeZone,isSensitive: input_.isSensitive,roles: jsonArrayPartyRoleCreateApiRequestToApplicationTransform(input_.roles),publicContacts: jsonArrayPartyPublicContactCreateApiRequestToApplicationTransform(input_.publicContacts),addresses: jsonArrayPartyAddressCreateApiRequestToApplicationTransform(input_.addresses)
  }!;
}export function jsonArrayPartyRoleCreateApiRequestToTransportTransform(
  items_?: Array<PartyRoleCreateApiRequest> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonPartyRoleCreateApiRequestToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayPartyRoleCreateApiRequestToApplicationTransform(
  items_?: any,
): Array<PartyRoleCreateApiRequest> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonPartyRoleCreateApiRequestToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonPartyRoleCreateApiRequestToTransportTransform(
  input_?: PartyRoleCreateApiRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    roleKind: input_.roleKind,title: input_.title,isPrimary: input_.isPrimary,validFromUtc: dateRfc3339Serializer(input_.validFromUtc),validToUtc: dateRfc3339Serializer(input_.validToUtc)
  }!;
}export function jsonPartyRoleCreateApiRequestToApplicationTransform(
  input_?: any,
): PartyRoleCreateApiRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    roleKind: input_.roleKind,title: input_.title,isPrimary: input_.isPrimary,validFromUtc: dateDeserializer(input_.validFromUtc)!,validToUtc: dateDeserializer(input_.validToUtc)!
  }!;
}export function jsonArrayPartyPublicContactCreateApiRequestToTransportTransform(
  items_?: Array<PartyPublicContactCreateApiRequest> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonPartyPublicContactCreateApiRequestToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayPartyPublicContactCreateApiRequestToApplicationTransform(
  items_?: any,
): Array<PartyPublicContactCreateApiRequest> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonPartyPublicContactCreateApiRequestToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonPartyPublicContactCreateApiRequestToTransportTransform(
  input_?: PartyPublicContactCreateApiRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    contactType: input_.contactType,label: input_.label,value: input_.value,isPrimary: input_.isPrimary,tags: jsonArrayStringToTransportTransform(input_.tags)
  }!;
}export function jsonPartyPublicContactCreateApiRequestToApplicationTransform(
  input_?: any,
): PartyPublicContactCreateApiRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    contactType: input_.contactType,label: input_.label,value: input_.value,isPrimary: input_.isPrimary,tags: jsonArrayStringToApplicationTransform(input_.tags)
  }!;
}export function jsonArrayPartyAddressCreateApiRequestToTransportTransform(
  items_?: Array<PartyAddressCreateApiRequest> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonPartyAddressCreateApiRequestToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayPartyAddressCreateApiRequestToApplicationTransform(
  items_?: any,
): Array<PartyAddressCreateApiRequest> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonPartyAddressCreateApiRequestToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonPartyAddressCreateApiRequestToTransportTransform(
  input_?: PartyAddressCreateApiRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    addressType: input_.addressType,line1: input_.line1,line2: input_.line2,city: input_.city,region: input_.region,postalCode: input_.postalCode,countryCode: input_.countryCode,isPrimary: input_.isPrimary
  }!;
}export function jsonPartyAddressCreateApiRequestToApplicationTransform(
  input_?: any,
): PartyAddressCreateApiRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    addressType: input_.addressType,line1: input_.line1,line2: input_.line2,city: input_.city,region: input_.region,postalCode: input_.postalCode,countryCode: input_.countryCode,isPrimary: input_.isPrimary
  }!;
}export function jsonPartyRelationshipsReplaceApiRequestToTransportTransform(
  input_?: PartyRelationshipsReplaceApiRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    relationships: jsonArrayPartyRelationshipReplaceItemApiRequestToTransportTransform(input_.relationships)
  }!;
}export function jsonPartyRelationshipsReplaceApiRequestToApplicationTransform(
  input_?: any,
): PartyRelationshipsReplaceApiRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    relationships: jsonArrayPartyRelationshipReplaceItemApiRequestToApplicationTransform(input_.relationships)
  }!;
}export function jsonArrayPartyRelationshipReplaceItemApiRequestToTransportTransform(
  items_?: Array<PartyRelationshipReplaceItemApiRequest> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonPartyRelationshipReplaceItemApiRequestToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayPartyRelationshipReplaceItemApiRequestToApplicationTransform(
  items_?: any,
): Array<PartyRelationshipReplaceItemApiRequest> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonPartyRelationshipReplaceItemApiRequestToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonPartyRelationshipReplaceItemApiRequestToTransportTransform(
  input_?: PartyRelationshipReplaceItemApiRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    relatedPartyId: input_.relatedPartyId,relationshipKind: input_.relationshipKind,isOutgoing: input_.isOutgoing,isPrimary: input_.isPrimary,startDateUtc: dateRfc3339Serializer(input_.startDateUtc),endDateUtc: dateRfc3339Serializer(input_.endDateUtc),notes: input_.notes
  }!;
}export function jsonPartyRelationshipReplaceItemApiRequestToApplicationTransform(
  input_?: any,
): PartyRelationshipReplaceItemApiRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    relatedPartyId: input_.relatedPartyId,relationshipKind: input_.relationshipKind,isOutgoing: input_.isOutgoing,isPrimary: input_.isPrimary,startDateUtc: dateDeserializer(input_.startDateUtc)!,endDateUtc: dateDeserializer(input_.endDateUtc)!,notes: input_.notes
  }!;
}export function jsonWorkforceProfileSaveApiRequestToTransportTransform(
  input_?: WorkforceProfileSaveApiRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    partyId: input_.partyId,workforceKind: input_.workforceKind,employeeCode: input_.employeeCode,jobTitle: input_.jobTitle,discipline: input_.discipline,seniority: input_.seniority,homeUnitPartyId: input_.homeUnitPartyId,managerPartyId: input_.managerPartyId,startDate: input_.startDate,endDate: input_.endDate,location: input_.location,timeZone: input_.timeZone,internalCostRate: input_.internalCostRate,externalBillingRate: input_.externalBillingRate,rateUnit: input_.rateUnit,rateCurrencyCode: input_.rateCurrencyCode,capacityHoursPerWeek: input_.capacityHoursPerWeek,status: input_.status,notes: input_.notes
  }!;
}export function jsonWorkforceProfileSaveApiRequestToApplicationTransform(
  input_?: any,
): WorkforceProfileSaveApiRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    partyId: input_.partyId,workforceKind: input_.workforceKind,employeeCode: input_.employeeCode,jobTitle: input_.jobTitle,discipline: input_.discipline,seniority: input_.seniority,homeUnitPartyId: input_.homeUnitPartyId,managerPartyId: input_.managerPartyId,startDate: input_.startDate,endDate: input_.endDate,location: input_.location,timeZone: input_.timeZone,internalCostRate: input_.internalCostRate,externalBillingRate: input_.externalBillingRate,rateUnit: input_.rateUnit,rateCurrencyCode: input_.rateCurrencyCode,capacityHoursPerWeek: input_.capacityHoursPerWeek,status: input_.status,notes: input_.notes
  }!;
}export function jsonSkillDefinitionSaveApiRequestToTransportTransform(
  input_?: SkillDefinitionSaveApiRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,name: input_.name,category: input_.category,description: input_.description,isActive: input_.isActive
  }!;
}export function jsonSkillDefinitionSaveApiRequestToApplicationTransform(
  input_?: any,
): SkillDefinitionSaveApiRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,name: input_.name,category: input_.category,description: input_.description,isActive: input_.isActive
  }!;
}export function jsonPartySkillSaveApiRequestToTransportTransform(
  input_?: PartySkillSaveApiRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,partyId: input_.partyId,skillId: input_.skillId,proficiency: input_.proficiency,yearsExperience: input_.yearsExperience,certificationStatus: input_.certificationStatus,lastValidatedOn: input_.lastValidatedOn,notes: input_.notes
  }!;
}export function jsonPartySkillSaveApiRequestToApplicationTransform(
  input_?: any,
): PartySkillSaveApiRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,partyId: input_.partyId,skillId: input_.skillId,proficiency: input_.proficiency,yearsExperience: input_.yearsExperience,certificationStatus: input_.certificationStatus,lastValidatedOn: input_.lastValidatedOn,notes: input_.notes
  }!;
}export function jsonCapacityBlockSaveApiRequestToTransportTransform(
  input_?: CapacityBlockSaveApiRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,partyId: input_.partyId,blockKind: input_.blockKind,startDate: input_.startDate,endDate: input_.endDate,percentage: input_.percentage,relatedProjectId: input_.relatedProjectId,notes: input_.notes
  }!;
}export function jsonCapacityBlockSaveApiRequestToApplicationTransform(
  input_?: any,
): CapacityBlockSaveApiRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,partyId: input_.partyId,blockKind: input_.blockKind,startDate: input_.startDate,endDate: input_.endDate,percentage: input_.percentage,relatedProjectId: input_.relatedProjectId,notes: input_.notes
  }!;
}export function jsonRecruitmentApplicationSaveApiRequestToTransportTransform(
  input_?: RecruitmentApplicationSaveApiRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,partyId: input_.partyId,candidateName: input_.candidateName,candidateEmail: input_.candidateEmail,candidatePhone: input_.candidatePhone,candidateSummary: input_.candidateSummary,targetUnitPartyId: input_.targetUnitPartyId,recruiterPartyId: input_.recruiterPartyId,hiringManagerPartyId: input_.hiringManagerPartyId,desiredRole: input_.desiredRole,source: input_.source,stage: input_.stage,availableFrom: input_.availableFrom,decision: input_.decision,stageNotes: input_.stageNotes,notes: input_.notes
  }!;
}export function jsonRecruitmentApplicationSaveApiRequestToApplicationTransform(
  input_?: any,
): RecruitmentApplicationSaveApiRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,partyId: input_.partyId,candidateName: input_.candidateName,candidateEmail: input_.candidateEmail,candidatePhone: input_.candidatePhone,candidateSummary: input_.candidateSummary,targetUnitPartyId: input_.targetUnitPartyId,recruiterPartyId: input_.recruiterPartyId,hiringManagerPartyId: input_.hiringManagerPartyId,desiredRole: input_.desiredRole,source: input_.source,stage: input_.stage,availableFrom: input_.availableFrom,decision: input_.decision,stageNotes: input_.stageNotes,notes: input_.notes
  }!;
}export function jsonRecruitmentInterviewSaveApiRequestToTransportTransform(
  input_?: RecruitmentInterviewSaveApiRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,applicationId: input_.applicationId,scheduledAtUtc: dateRfc3339Serializer(input_.scheduledAtUtc),interviewType: input_.interviewType,interviewerPartyId: input_.interviewerPartyId,outcome: input_.outcome,feedback: input_.feedback,recommendation: input_.recommendation
  }!;
}export function jsonRecruitmentInterviewSaveApiRequestToApplicationTransform(
  input_?: any,
): RecruitmentInterviewSaveApiRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,applicationId: input_.applicationId,scheduledAtUtc: dateDeserializer(input_.scheduledAtUtc)!,interviewType: input_.interviewType,interviewerPartyId: input_.interviewerPartyId,outcome: input_.outcome,feedback: input_.feedback,recommendation: input_.recommendation
  }!;
}export function jsonLifecycleTaskSaveApiRequestToTransportTransform(
  input_?: LifecycleTaskSaveApiRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,partyId: input_.partyId,taskKind: input_.taskKind,title: input_.title,ownerPartyId: input_.ownerPartyId,dueDate: input_.dueDate,status: input_.status,relatedProjectId: input_.relatedProjectId,notes: input_.notes
  }!;
}export function jsonLifecycleTaskSaveApiRequestToApplicationTransform(
  input_?: any,
): LifecycleTaskSaveApiRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,partyId: input_.partyId,taskKind: input_.taskKind,title: input_.title,ownerPartyId: input_.ownerPartyId,dueDate: input_.dueDate,status: input_.status,relatedProjectId: input_.relatedProjectId,notes: input_.notes
  }!;
}export function jsonRecruitmentSupportAssignmentsSaveApiRequestToTransportTransform(
  input_?: RecruitmentSupportAssignmentsSaveApiRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    partyId: input_.partyId,managerPartyId: input_.managerPartyId,buddyPartyId: input_.buddyPartyId,mentorPartyId: input_.mentorPartyId
  }!;
}export function jsonRecruitmentSupportAssignmentsSaveApiRequestToApplicationTransform(
  input_?: any,
): RecruitmentSupportAssignmentsSaveApiRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    partyId: input_.partyId,managerPartyId: input_.managerPartyId,buddyPartyId: input_.buddyPartyId,mentorPartyId: input_.mentorPartyId
  }!;
}export function jsonRecruitmentConversionApiRequestToTransportTransform(
  input_?: RecruitmentConversionApiRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    applicationId: input_.applicationId,workforceKind: input_.workforceKind,jobTitle: input_.jobTitle,discipline: input_.discipline,seniority: input_.seniority,homeUnitPartyId: input_.homeUnitPartyId,managerPartyId: input_.managerPartyId,startDate: input_.startDate,location: input_.location,timeZone: input_.timeZone,capacityHoursPerWeek: input_.capacityHoursPerWeek,status: input_.status,notes: input_.notes
  }!;
}export function jsonRecruitmentConversionApiRequestToApplicationTransform(
  input_?: any,
): RecruitmentConversionApiRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    applicationId: input_.applicationId,workforceKind: input_.workforceKind,jobTitle: input_.jobTitle,discipline: input_.discipline,seniority: input_.seniority,homeUnitPartyId: input_.homeUnitPartyId,managerPartyId: input_.managerPartyId,startDate: input_.startDate,location: input_.location,timeZone: input_.timeZone,capacityHoursPerWeek: input_.capacityHoursPerWeek,status: input_.status,notes: input_.notes
  }!;
}export function jsonArrayLlmChatProviderOptionApiResponseToTransportTransform(
  items_?: Array<LlmChatProviderOptionApiResponse> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonLlmChatProviderOptionApiResponseToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayLlmChatProviderOptionApiResponseToApplicationTransform(
  items_?: any,
): Array<LlmChatProviderOptionApiResponse> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonLlmChatProviderOptionApiResponseToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonLlmChatProviderOptionApiResponseToTransportTransform(
  input_?: LlmChatProviderOptionApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    providerProfileId: input_.providerProfileId,providerName: input_.providerName,providerKind: input_.providerKind,models: jsonArrayLlmChatModelOptionApiResponseToTransportTransform(input_.models)
  }!;
}export function jsonLlmChatProviderOptionApiResponseToApplicationTransform(
  input_?: any,
): LlmChatProviderOptionApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    providerProfileId: input_.providerProfileId,providerName: input_.providerName,providerKind: input_.providerKind,models: jsonArrayLlmChatModelOptionApiResponseToApplicationTransform(input_.models)
  }!;
}export function jsonArrayLlmChatModelOptionApiResponseToTransportTransform(
  items_?: Array<LlmChatModelOptionApiResponse> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonLlmChatModelOptionApiResponseToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayLlmChatModelOptionApiResponseToApplicationTransform(
  items_?: any,
): Array<LlmChatModelOptionApiResponse> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonLlmChatModelOptionApiResponseToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonLlmChatModelOptionApiResponseToTransportTransform(
  input_?: LlmChatModelOptionApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    model: input_.model,thinkingEffort: jsonLlmChatThinkingEffortOptionApiResponseToTransportTransform(input_.thinkingEffort)
  }!;
}export function jsonLlmChatModelOptionApiResponseToApplicationTransform(
  input_?: any,
): LlmChatModelOptionApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    model: input_.model,thinkingEffort: jsonLlmChatThinkingEffortOptionApiResponseToApplicationTransform(input_.thinkingEffort)
  }!;
}export function jsonLlmChatThinkingEffortOptionApiResponseToTransportTransform(
  input_?: LlmChatThinkingEffortOptionApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    status: input_.status,controlMode: input_.controlMode,allowedEfforts: jsonArrayAgentReasoningEffortLevelToTransportTransform(input_.allowedEfforts),providerDefault: input_.providerDefault
  }!;
}export function jsonLlmChatThinkingEffortOptionApiResponseToApplicationTransform(
  input_?: any,
): LlmChatThinkingEffortOptionApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    status: input_.status,controlMode: input_.controlMode,allowedEfforts: jsonArrayAgentReasoningEffortLevelToApplicationTransform(input_.allowedEfforts),providerDefault: input_.providerDefault
  }!;
}export function jsonProblemDetailsToTransportTransform(
  input_?: ProblemDetails | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    type: input_.type,title: input_.title,status: input_.status,detail: input_.detail,instance: input_.instance
  }!;
}export function jsonProblemDetailsToApplicationTransform(
  input_?: any,
): ProblemDetails {
  if(!input_) {
    return input_ as any;
  }
    return {
    type: input_.type,title: input_.title,status: input_.status,detail: input_.detail,instance: input_.instance
  }!;
}export function jsonLlmChatApiPageOfLlmChatDefinitionApiResponseToTransportTransform(
  input_?: LlmChatApiPageOfLlmChatDefinitionApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    items: jsonArrayLlmChatDefinitionApiResponseToTransportTransform(input_.items),nextCursor: input_.nextCursor
  }!;
}export function jsonLlmChatApiPageOfLlmChatDefinitionApiResponseToApplicationTransform(
  input_?: any,
): LlmChatApiPageOfLlmChatDefinitionApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    items: jsonArrayLlmChatDefinitionApiResponseToApplicationTransform(input_.items),nextCursor: input_.nextCursor
  }!;
}export function jsonArrayLlmChatDefinitionApiResponseToTransportTransform(
  items_?: Array<LlmChatDefinitionApiResponse> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonLlmChatDefinitionApiResponseToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayLlmChatDefinitionApiResponseToApplicationTransform(
  items_?: any,
): Array<LlmChatDefinitionApiResponse> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonLlmChatDefinitionApiResponseToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonLlmChatDefinitionApiResponseToTransportTransform(
  input_?: LlmChatDefinitionApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,name: input_.name,summary: input_.summary,avatarImageUrl: input_.avatarImageUrl,status: jsonLlmChatDefinitionStatusToTransportTransform(input_.status),currentRevision: input_.currentRevision,providerProfileId: input_.providerProfileId,providerName: input_.providerName,providerKind: input_.providerKind,model: input_.model,thinkingEffort: input_.thinkingEffort,tags: jsonArrayStringToTransportTransform(input_.tags),concurrencyToken: input_.concurrencyToken,createdAtUtc: dateRfc3339Serializer(input_.createdAtUtc),updatedAtUtc: dateRfc3339Serializer(input_.updatedAtUtc),modelSettings: jsonLlmChatModelSettingsApiResponseToTransportTransform(input_.modelSettings),responseFormat: jsonLlmChatResponseFormatApiResponseToTransportTransform(input_.responseFormat),revisionReason: input_.revisionReason
  }!;
}export function jsonLlmChatDefinitionApiResponseToApplicationTransform(
  input_?: any,
): LlmChatDefinitionApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,name: input_.name,summary: input_.summary,avatarImageUrl: input_.avatarImageUrl,status: jsonLlmChatDefinitionStatusToApplicationTransform(input_.status),currentRevision: input_.currentRevision,providerProfileId: input_.providerProfileId,providerName: input_.providerName,providerKind: input_.providerKind,model: input_.model,thinkingEffort: input_.thinkingEffort,tags: jsonArrayStringToApplicationTransform(input_.tags),concurrencyToken: input_.concurrencyToken,createdAtUtc: dateDeserializer(input_.createdAtUtc)!,updatedAtUtc: dateDeserializer(input_.updatedAtUtc)!,modelSettings: jsonLlmChatModelSettingsApiResponseToApplicationTransform(input_.modelSettings),responseFormat: jsonLlmChatResponseFormatApiResponseToApplicationTransform(input_.responseFormat),revisionReason: input_.revisionReason
  }!;
}export function jsonLlmChatDefinitionStatusToTransportTransform(
  input_?: LlmChatDefinitionStatus | null,
): any {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonLlmChatDefinitionStatusToApplicationTransform(
  input_?: any,
): LlmChatDefinitionStatus {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonLlmChatModelSettingsApiResponseToTransportTransform(
  input_?: LlmChatModelSettingsApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    temperature: input_.temperature,modelParameterConfiguration: input_.modelParameterConfiguration,timeoutSeconds: input_.timeoutSeconds
  }!;
}export function jsonLlmChatModelSettingsApiResponseToApplicationTransform(
  input_?: any,
): LlmChatModelSettingsApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    temperature: input_.temperature,modelParameterConfiguration: input_.modelParameterConfiguration,timeoutSeconds: input_.timeoutSeconds
  }!;
}export function jsonLlmChatResponseFormatApiResponseToTransportTransform(
  input_?: LlmChatResponseFormatApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    requireJson: input_.requireJson,schema: input_.schema,schemaName: input_.schemaName,schemaDescription: input_.schemaDescription
  }!;
}export function jsonLlmChatResponseFormatApiResponseToApplicationTransform(
  input_?: any,
): LlmChatResponseFormatApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    requireJson: input_.requireJson,schema: input_.schema,schemaName: input_.schemaName,schemaDescription: input_.schemaDescription
  }!;
}export function jsonLlmChatDefinitionMutationApiRequestToTransportTransform(
  input_?: LlmChatDefinitionMutationApiRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    name: input_.name,summary: input_.summary,avatarImageUrl: input_.avatarImageUrl,systemPrompt: input_.systemPrompt,providerProfileId: input_.providerProfileId,model: input_.model,thinkingEffort: input_.thinkingEffort,modelSettings: jsonLlmChatModelSettingsApiRequestToTransportTransform(input_.modelSettings),tags: jsonArrayStringToTransportTransform(input_.tags),revisionReason: input_.revisionReason,responseFormat: jsonLlmChatResponseFormatApiRequestToTransportTransform(input_.responseFormat),expectedConcurrencyToken: input_.expectedConcurrencyToken
  }!;
}export function jsonLlmChatDefinitionMutationApiRequestToApplicationTransform(
  input_?: any,
): LlmChatDefinitionMutationApiRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    name: input_.name,summary: input_.summary,avatarImageUrl: input_.avatarImageUrl,systemPrompt: input_.systemPrompt,providerProfileId: input_.providerProfileId,model: input_.model,thinkingEffort: input_.thinkingEffort,modelSettings: jsonLlmChatModelSettingsApiRequestToApplicationTransform(input_.modelSettings),tags: jsonArrayStringToApplicationTransform(input_.tags),revisionReason: input_.revisionReason,responseFormat: jsonLlmChatResponseFormatApiRequestToApplicationTransform(input_.responseFormat),expectedConcurrencyToken: input_.expectedConcurrencyToken
  }!;
}export function jsonLlmChatModelSettingsApiRequestToTransportTransform(
  input_?: LlmChatModelSettingsApiRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    temperature: input_.temperature,modelParameterConfiguration: input_.modelParameterConfiguration,timeoutSeconds: input_.timeoutSeconds
  }!;
}export function jsonLlmChatModelSettingsApiRequestToApplicationTransform(
  input_?: any,
): LlmChatModelSettingsApiRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    temperature: input_.temperature,modelParameterConfiguration: input_.modelParameterConfiguration,timeoutSeconds: input_.timeoutSeconds
  }!;
}export function jsonLlmChatResponseFormatApiRequestToTransportTransform(
  input_?: LlmChatResponseFormatApiRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    requireJson: input_.requireJson,schema: input_.schema,schemaName: input_.schemaName,schemaDescription: input_.schemaDescription
  }!;
}export function jsonLlmChatResponseFormatApiRequestToApplicationTransform(
  input_?: any,
): LlmChatResponseFormatApiRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    requireJson: input_.requireJson,schema: input_.schema,schemaName: input_.schemaName,schemaDescription: input_.schemaDescription
  }!;
}export function jsonLlmChatDefinitionEditorApiResponseToTransportTransform(
  input_?: LlmChatDefinitionEditorApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,name: input_.name,summary: input_.summary,avatarImageUrl: input_.avatarImageUrl,status: jsonLlmChatDefinitionStatusToTransportTransform(input_.status),revision: input_.revision,systemPrompt: input_.systemPrompt,providerProfileId: input_.providerProfileId,providerName: input_.providerName,providerKind: input_.providerKind,model: input_.model,thinkingEffort: input_.thinkingEffort,modelSettings: jsonLlmChatModelSettingsApiResponseToTransportTransform(input_.modelSettings),responseFormat: jsonLlmChatResponseFormatApiResponseToTransportTransform(input_.responseFormat),tags: jsonArrayStringToTransportTransform(input_.tags),revisionReason: input_.revisionReason,concurrencyToken: input_.concurrencyToken,createdAtUtc: dateRfc3339Serializer(input_.createdAtUtc),updatedAtUtc: dateRfc3339Serializer(input_.updatedAtUtc)
  }!;
}export function jsonLlmChatDefinitionEditorApiResponseToApplicationTransform(
  input_?: any,
): LlmChatDefinitionEditorApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,name: input_.name,summary: input_.summary,avatarImageUrl: input_.avatarImageUrl,status: jsonLlmChatDefinitionStatusToApplicationTransform(input_.status),revision: input_.revision,systemPrompt: input_.systemPrompt,providerProfileId: input_.providerProfileId,providerName: input_.providerName,providerKind: input_.providerKind,model: input_.model,thinkingEffort: input_.thinkingEffort,modelSettings: jsonLlmChatModelSettingsApiResponseToApplicationTransform(input_.modelSettings),responseFormat: jsonLlmChatResponseFormatApiResponseToApplicationTransform(input_.responseFormat),tags: jsonArrayStringToApplicationTransform(input_.tags),revisionReason: input_.revisionReason,concurrencyToken: input_.concurrencyToken,createdAtUtc: dateDeserializer(input_.createdAtUtc)!,updatedAtUtc: dateDeserializer(input_.updatedAtUtc)!
  }!;
}export function jsonLlmChatExpectedConcurrencyApiRequestToTransportTransform(
  input_?: LlmChatExpectedConcurrencyApiRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    expectedConcurrencyToken: input_.expectedConcurrencyToken
  }!;
}export function jsonLlmChatExpectedConcurrencyApiRequestToApplicationTransform(
  input_?: any,
): LlmChatExpectedConcurrencyApiRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    expectedConcurrencyToken: input_.expectedConcurrencyToken
  }!;
}export function jsonCreateLlmChatConversationApiRequestToTransportTransform(
  input_?: CreateLlmChatConversationApiRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    title: input_.title
  }!;
}export function jsonCreateLlmChatConversationApiRequestToApplicationTransform(
  input_?: any,
): CreateLlmChatConversationApiRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    title: input_.title
  }!;
}export function jsonLlmChatConversationApiResponseToTransportTransform(
  input_?: LlmChatConversationApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,definitionId: input_.definitionId,definitionRevision: input_.definitionRevision,definitionName: input_.definitionName,title: input_.title,status: jsonLlmChatConversationStatusToTransportTransform(input_.status),origin: jsonLlmChatConversationOriginToTransportTransform(input_.origin),transcriptRevision: input_.transcriptRevision,hasActiveTurn: input_.hasActiveTurn,concurrencyToken: input_.concurrencyToken,createdAtUtc: dateRfc3339Serializer(input_.createdAtUtc),updatedAtUtc: dateRfc3339Serializer(input_.updatedAtUtc),activeOperationId: input_.activeOperationId,messages: jsonArrayLlmChatMessageApiResponseToTransportTransform(input_.messages),nextMessageCursor: input_.nextMessageCursor
  }!;
}export function jsonLlmChatConversationApiResponseToApplicationTransform(
  input_?: any,
): LlmChatConversationApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,definitionId: input_.definitionId,definitionRevision: input_.definitionRevision,definitionName: input_.definitionName,title: input_.title,status: jsonLlmChatConversationStatusToApplicationTransform(input_.status),origin: jsonLlmChatConversationOriginToApplicationTransform(input_.origin),transcriptRevision: input_.transcriptRevision,hasActiveTurn: input_.hasActiveTurn,concurrencyToken: input_.concurrencyToken,createdAtUtc: dateDeserializer(input_.createdAtUtc)!,updatedAtUtc: dateDeserializer(input_.updatedAtUtc)!,activeOperationId: input_.activeOperationId,messages: jsonArrayLlmChatMessageApiResponseToApplicationTransform(input_.messages),nextMessageCursor: input_.nextMessageCursor
  }!;
}export function jsonLlmChatConversationStatusToTransportTransform(
  input_?: LlmChatConversationStatus | null,
): any {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonLlmChatConversationStatusToApplicationTransform(
  input_?: any,
): LlmChatConversationStatus {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonLlmChatConversationOriginToTransportTransform(
  input_?: LlmChatConversationOrigin | null,
): any {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonLlmChatConversationOriginToApplicationTransform(
  input_?: any,
): LlmChatConversationOrigin {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonArrayLlmChatMessageApiResponseToTransportTransform(
  items_?: Array<LlmChatMessageApiResponse> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonLlmChatMessageApiResponseToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayLlmChatMessageApiResponseToApplicationTransform(
  items_?: any,
): Array<LlmChatMessageApiResponse> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonLlmChatMessageApiResponseToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonLlmChatMessageApiResponseToTransportTransform(
  input_?: LlmChatMessageApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    entryId: input_.entryId,turnId: input_.turnId,role: jsonLlmMessageRoleToTransportTransform(input_.role),content: input_.content,createdAtUtc: dateRfc3339Serializer(input_.createdAtUtc),model: input_.model,usage: jsonLlmChatUsageApiResponseToTransportTransform(input_.usage)
  }!;
}export function jsonLlmChatMessageApiResponseToApplicationTransform(
  input_?: any,
): LlmChatMessageApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    entryId: input_.entryId,turnId: input_.turnId,role: jsonLlmMessageRoleToApplicationTransform(input_.role),content: input_.content,createdAtUtc: dateDeserializer(input_.createdAtUtc)!,model: input_.model,usage: jsonLlmChatUsageApiResponseToApplicationTransform(input_.usage)
  }!;
}export function jsonLlmMessageRoleToTransportTransform(
  input_?: LlmMessageRole | null,
): any {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonLlmMessageRoleToApplicationTransform(
  input_?: any,
): LlmMessageRole {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonLlmChatUsageApiResponseToTransportTransform(
  input_?: LlmChatUsageApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    inputTokens: input_.inputTokens,outputTokens: input_.outputTokens,cachedInputTokens: input_.cachedInputTokens
  }!;
}export function jsonLlmChatUsageApiResponseToApplicationTransform(
  input_?: any,
): LlmChatUsageApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    inputTokens: input_.inputTokens,outputTokens: input_.outputTokens,cachedInputTokens: input_.cachedInputTokens
  }!;
}export function jsonLlmChatApiPageOfLlmChatConversationApiResponseToTransportTransform(
  input_?: LlmChatApiPageOfLlmChatConversationApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    items: jsonArrayLlmChatConversationApiResponseToTransportTransform(input_.items),nextCursor: input_.nextCursor
  }!;
}export function jsonLlmChatApiPageOfLlmChatConversationApiResponseToApplicationTransform(
  input_?: any,
): LlmChatApiPageOfLlmChatConversationApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    items: jsonArrayLlmChatConversationApiResponseToApplicationTransform(input_.items),nextCursor: input_.nextCursor
  }!;
}export function jsonArrayLlmChatConversationApiResponseToTransportTransform(
  items_?: Array<LlmChatConversationApiResponse> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonLlmChatConversationApiResponseToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayLlmChatConversationApiResponseToApplicationTransform(
  items_?: any,
): Array<LlmChatConversationApiResponse> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonLlmChatConversationApiResponseToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonRenameLlmChatConversationApiRequestToTransportTransform(
  input_?: RenameLlmChatConversationApiRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    title: input_.title,expectedTranscriptRevision: input_.expectedTranscriptRevision,expectedConcurrencyToken: input_.expectedConcurrencyToken
  }!;
}export function jsonRenameLlmChatConversationApiRequestToApplicationTransform(
  input_?: any,
): RenameLlmChatConversationApiRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    title: input_.title,expectedTranscriptRevision: input_.expectedTranscriptRevision,expectedConcurrencyToken: input_.expectedConcurrencyToken
  }!;
}export function jsonSendLlmChatTurnApiRequestToTransportTransform(
  input_?: SendLlmChatTurnApiRequest | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    operationId: input_.operationId,expectedTranscriptRevision: input_.expectedTranscriptRevision,message: input_.message
  }!;
}export function jsonSendLlmChatTurnApiRequestToApplicationTransform(
  input_?: any,
): SendLlmChatTurnApiRequest {
  if(!input_) {
    return input_ as any;
  }
    return {
    operationId: input_.operationId,expectedTranscriptRevision: input_.expectedTranscriptRevision,message: input_.message
  }!;
}export function jsonLlmChatOperationApiResponseToTransportTransform(
  input_?: LlmChatOperationApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    schema: input_.schema,operationId: input_.operationId,conversationId: input_.conversationId,status: jsonLlmChatOperationStatusToTransportTransform(input_.status),replayed: input_.replayed,expectedTranscriptRevision: input_.expectedTranscriptRevision,resultingTranscriptRevision: input_.resultingTranscriptRevision,lastEventSequence: input_.lastEventSequence,statusUrl: input_.statusUrl,eventsUrl: input_.eventsUrl,cancelUrl: input_.cancelUrl,invocationAttempts: jsonArrayLlmChatInvocationAttemptApiResponseToTransportTransform(input_.invocationAttempts),assistantMessage: jsonLlmChatMessageApiResponseToTransportTransform(input_.assistantMessage),failure: jsonLlmChatOperationFailureApiResponseToTransportTransform(input_.failure),startedAtUtc: dateRfc3339Serializer(input_.startedAtUtc),completedAtUtc: dateRfc3339Serializer(input_.completedAtUtc)
  }!;
}export function jsonLlmChatOperationApiResponseToApplicationTransform(
  input_?: any,
): LlmChatOperationApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    schema: input_.schema,operationId: input_.operationId,conversationId: input_.conversationId,status: jsonLlmChatOperationStatusToApplicationTransform(input_.status),replayed: input_.replayed,expectedTranscriptRevision: input_.expectedTranscriptRevision,resultingTranscriptRevision: input_.resultingTranscriptRevision,lastEventSequence: input_.lastEventSequence,statusUrl: input_.statusUrl,eventsUrl: input_.eventsUrl,cancelUrl: input_.cancelUrl,invocationAttempts: jsonArrayLlmChatInvocationAttemptApiResponseToApplicationTransform(input_.invocationAttempts),assistantMessage: jsonLlmChatMessageApiResponseToApplicationTransform(input_.assistantMessage),failure: jsonLlmChatOperationFailureApiResponseToApplicationTransform(input_.failure),startedAtUtc: dateDeserializer(input_.startedAtUtc)!,completedAtUtc: dateDeserializer(input_.completedAtUtc)!
  }!;
}export function jsonLlmChatOperationStatusToTransportTransform(
  input_?: LlmChatOperationStatus | null,
): any {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonLlmChatOperationStatusToApplicationTransform(
  input_?: any,
): LlmChatOperationStatus {
  if(!input_) {
    return input_ as any;
  }return input_
}export function jsonArrayLlmChatInvocationAttemptApiResponseToTransportTransform(
  items_?: Array<LlmChatInvocationAttemptApiResponse> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonLlmChatInvocationAttemptApiResponseToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayLlmChatInvocationAttemptApiResponseToApplicationTransform(
  items_?: any,
): Array<LlmChatInvocationAttemptApiResponse> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonLlmChatInvocationAttemptApiResponseToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonLlmChatInvocationAttemptApiResponseToTransportTransform(
  input_?: LlmChatInvocationAttemptApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    ordinal: input_.ordinal,providerKind: input_.providerKind,model: input_.model,deliveryMode: input_.deliveryMode,finishReason: input_.finishReason,requestedThinkingEffort: input_.requestedThinkingEffort,effectiveThinkingEffort: input_.effectiveThinkingEffort,outcome: input_.outcome,usage: jsonLlmChatUsageApiResponseToTransportTransform(input_.usage),failure: jsonLlmChatOperationFailureApiResponseToTransportTransform(input_.failure),startedAtUtc: dateRfc3339Serializer(input_.startedAtUtc),completedAtUtc: dateRfc3339Serializer(input_.completedAtUtc)
  }!;
}export function jsonLlmChatInvocationAttemptApiResponseToApplicationTransform(
  input_?: any,
): LlmChatInvocationAttemptApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    ordinal: input_.ordinal,providerKind: input_.providerKind,model: input_.model,deliveryMode: input_.deliveryMode,finishReason: input_.finishReason,requestedThinkingEffort: input_.requestedThinkingEffort,effectiveThinkingEffort: input_.effectiveThinkingEffort,outcome: input_.outcome,usage: jsonLlmChatUsageApiResponseToApplicationTransform(input_.usage),failure: jsonLlmChatOperationFailureApiResponseToApplicationTransform(input_.failure),startedAtUtc: dateDeserializer(input_.startedAtUtc)!,completedAtUtc: dateDeserializer(input_.completedAtUtc)!
  }!;
}export function jsonLlmChatOperationFailureApiResponseToTransportTransform(
  input_?: LlmChatOperationFailureApiResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    code: input_.code,retryable: input_.retryable
  }!;
}export function jsonLlmChatOperationFailureApiResponseToApplicationTransform(
  input_?: any,
): LlmChatOperationFailureApiResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    code: input_.code,retryable: input_.retryable
  }!;
}
