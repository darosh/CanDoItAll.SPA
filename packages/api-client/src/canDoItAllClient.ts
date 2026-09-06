import {
  type CanDoItAllClientContext,
  type CanDoItAllClientOptions,
  createCanDoItAllClientContext,
} from "./api/canDoItAllClientContext.js";
import {
  abandonLlmChatActiveTurn,
  type AbandonLlmChatActiveTurnOptions,
  activateLlmChatDefinition,
  type ActivateLlmChatDefinitionOptions,
  addWorkflowTemplateToDrafts,
  type AddWorkflowTemplateToDraftsOptions,
  appendAgentRecruitingAttempt,
  type AppendAgentRecruitingAttemptOptions,
  appendAgentRecruitingHumanReview,
  type AppendAgentRecruitingHumanReviewOptions,
  archiveAgentByExternalKey,
  type ArchiveAgentByExternalKeyOptions,
  archiveLlmChatConversation,
  type ArchiveLlmChatConversationOptions,
  archiveLlmChatDefinition,
  type ArchiveLlmChatDefinitionOptions,
  archivePromptGalleryItem,
  type ArchivePromptGalleryItemOptions,
  archiveWorkflowDefinition,
  type ArchiveWorkflowDefinitionOptions,
  attachProjectSubproject,
  type AttachProjectSubprojectOptions,
  cancelLlmChatOperation,
  type CancelLlmChatOperationOptions,
  cancelProcessRun,
  type CancelProcessRunOptions,
  cancelWorkflowRun,
  type CancelWorkflowRunOptions,
  checkProcessLaunch,
  type CheckProcessLaunchOptions,
  cloneAgent,
  type CloneAgentOptions,
  completePluginOAuthCallback,
  type CompletePluginOAuthCallbackOptions,
  convertAgentToTemplate,
  type ConvertAgentToTemplateOptions,
  convertCrmHrRecruitmentCandidate,
  type ConvertCrmHrRecruitmentCandidateOptions,
  createAgentChatSession,
  type CreateAgentChatSessionOptions,
  createAgentProviderModelMaintenance,
  type CreateAgentProviderModelMaintenanceOptions,
  createAgentRecruitingInterview,
  type CreateAgentRecruitingInterviewOptions,
  createCrmHrParty,
  type CreateCrmHrPartyOptions,
  createLlmChatConversation,
  type CreateLlmChatConversationOptions,
  createLlmChatDefinition,
  type CreateLlmChatDefinitionOptions,
  createPromptGalleryVersion,
  type CreatePromptGalleryVersionOptions,
  deleteAgent,
  deleteAgentCapability,
  type DeleteAgentCapabilityOptions,
  deleteAgentMemory,
  type DeleteAgentMemoryOptions,
  type DeleteAgentOptions,
  deleteAgentProvider,
  type DeleteAgentProviderOptions,
  deleteAgentTeam,
  type DeleteAgentTeamOptions,
  deleteProject,
  type DeleteProjectOptions,
  deleteWorkflowComponent,
  type DeleteWorkflowComponentOptions,
  deleteWorkflowDefinition,
  type DeleteWorkflowDefinitionOptions,
  detachProjectSubproject,
  type DetachProjectSubprojectOptions,
  disablePlugin,
  type DisablePluginOptions,
  disconnectPluginOAuth,
  type DisconnectPluginOAuthOptions,
  dispatchProcessRun,
  type DispatchProcessRunOptions,
  enablePlugin,
  type EnablePluginOptions,
  evaluatePromptGalleryCompatibility,
  type EvaluatePromptGalleryCompatibilityOptions,
  exportAgent,
  type ExportAgentOptions,
  exportWorkflowDefinition,
  type ExportWorkflowDefinitionOptions,
  getAgentBootstrap,
  type GetAgentBootstrapOptions,
  getAgentByExternalKey,
  type GetAgentByExternalKeyOptions,
  getAgentCapabilityEditor,
  type GetAgentCapabilityEditorOptions,
  getAgentChatWorkspace,
  type GetAgentChatWorkspaceOptions,
  getAgentEditor,
  type GetAgentEditorOptions,
  getAgentExecutionRunDetail,
  type GetAgentExecutionRunDetailOptions,
  getAgentProviderEditor,
  type GetAgentProviderEditorOptions,
  getAgentRecruitingCandidateReadiness,
  type GetAgentRecruitingCandidateReadinessOptions,
  getAgentRecruitingInterview,
  type GetAgentRecruitingInterviewOptions,
  getAgentRuntimeSnapshot,
  type GetAgentRuntimeSnapshotOptions,
  getAgentScopedExecutionRunDetail,
  type GetAgentScopedExecutionRunDetailOptions,
  getAgentTeam,
  getAgentTeamEditor,
  type GetAgentTeamEditorOptions,
  type GetAgentTeamOptions,
  getApiAccessStatus,
  type GetApiAccessStatusOptions,
  getApiProjectStructureLeasesCurrent,
  type GetApiProjectStructureLeasesCurrentOptions,
  getApiProjectStructureNodeCatalog,
  type GetApiProjectStructureNodeCatalogOptions,
  getApiProjectStructureProjects,
  type GetApiProjectStructureProjectsOptions,
  getApiProjectStructureProjectsProjectIdAssetsNodeId,
  getApiProjectStructureProjectsProjectIdAssetsNodeIdContent,
  type GetApiProjectStructureProjectsProjectIdAssetsNodeIdContentOptions,
  type GetApiProjectStructureProjectsProjectIdAssetsNodeIdOptions,
  getApiProjectStructureProjectsProjectIdDeletionCleanups,
  type GetApiProjectStructureProjectsProjectIdDeletionCleanupsOptions,
  getApiProjectStructureProjectsProjectIdDeletionCompletionNotices,
  type GetApiProjectStructureProjectsProjectIdDeletionCompletionNoticesOptions,
  getApiProjectStructureProjectsProjectIdHierarchy,
  type GetApiProjectStructureProjectsProjectIdHierarchyOptions,
  getApiProjectStructureProjectsProjectIdNodesNodeIdWorkflowStatus,
  type GetApiProjectStructureProjectsProjectIdNodesNodeIdWorkflowStatusOptions,
  getApiRuntimeCapabilities,
  type GetApiRuntimeCapabilitiesOptions,
  getApiRuntimeOperations,
  type GetApiRuntimeOperationsOptions,
  getApiSettingsWorkspace,
  type GetApiSettingsWorkspaceOptions,
  getAuthorizedFilesContent,
  type GetAuthorizedFilesContentOptions,
  getAuthorizedFilesDownload,
  type GetAuthorizedFilesDownloadOptions,
  getCrmHrParty,
  type GetCrmHrPartyOptions,
  getCrmHrRecruitmentApplication,
  type GetCrmHrRecruitmentApplicationOptions,
  getCrmHrWorkforceWorkspace,
  type GetCrmHrWorkforceWorkspaceOptions,
  getDevAgentframeworkCredential,
  type GetDevAgentframeworkCredentialOptions,
  getDevDatabaseSelection,
  type GetDevDatabaseSelectionOptions,
  getDevRuntime,
  type GetDevRuntimeOptions,
  getLlmChatConversation,
  type GetLlmChatConversationOptions,
  getLlmChatDefinition,
  getLlmChatDefinitionEditor,
  type GetLlmChatDefinitionEditorOptions,
  type GetLlmChatDefinitionOptions,
  getLlmChatOperation,
  type GetLlmChatOperationOptions,
  getManagedFilesPath,
  type GetManagedFilesPathOptions,
  getMemoryProvider,
  getMemoryProviderOperation,
  type GetMemoryProviderOperationOptions,
  type GetMemoryProviderOptions,
  getPluginPackageIcon,
  type GetPluginPackageIconOptions,
  getPluginRuntimeRestartStatus,
  type GetPluginRuntimeRestartStatusOptions,
  getPluginSettings,
  type GetPluginSettingsOptions,
  getProcessDefinition,
  type GetProcessDefinitionOptions,
  getProcessDefinitionRoles,
  type GetProcessDefinitionRolesOptions,
  getProcessDefinitionSteps,
  type GetProcessDefinitionStepsOptions,
  getProcessesApiContract,
  type GetProcessesApiContractOptions,
  getProcessRun,
  getProcessRunHistory,
  type GetProcessRunHistoryOptions,
  type GetProcessRunOptions,
  getProcessRunRecordAnalytics,
  type GetProcessRunRecordAnalyticsOptions,
  getProcessRunRecordGraph,
  type GetProcessRunRecordGraphOptions,
  getProcessRunRecordSummary,
  type GetProcessRunRecordSummaryOptions,
  getProjectEditor,
  type GetProjectEditorOptions,
  getProjectHierarchy,
  type GetProjectHierarchyOptions,
  getPromptGalleryItem,
  type GetPromptGalleryItemOptions,
  getPromptGalleryProjectionStatus,
  type GetPromptGalleryProjectionStatusOptions,
  getPromptGalleryVersion,
  type GetPromptGalleryVersionOptions,
  getStorageObjectsDownload,
  type GetStorageObjectsDownloadOptions,
  getStorageObjectsPreview,
  type GetStorageObjectsPreviewOptions,
  getWorkflowAnalytics,
  type GetWorkflowAnalyticsOptions,
  getWorkflowComponent,
  type GetWorkflowComponentOptions,
  getWorkflowDefinition,
  getWorkflowDefinitionByExternalKey,
  type GetWorkflowDefinitionByExternalKeyOptions,
  getWorkflowDefinitionByTemplateKey,
  type GetWorkflowDefinitionByTemplateKeyOptions,
  type GetWorkflowDefinitionOptions,
  getWorkflowDefinitionVersion,
  type GetWorkflowDefinitionVersionOptions,
  getWorkflowRun,
  getWorkflowRunArtifactContent,
  type GetWorkflowRunArtifactContentOptions,
  getWorkflowRunByIdempotencyKey,
  type GetWorkflowRunByIdempotencyKeyOptions,
  getWorkflowRunDetail,
  type GetWorkflowRunDetailOptions,
  type GetWorkflowRunOptions,
  getWorkflowsApiContract,
  type GetWorkflowsApiContractOptions,
  getWorkflowSettings,
  type GetWorkflowSettingsOptions,
  importAgent,
  type ImportAgentOptions,
  importAgentPackage,
  type ImportAgentPackageOptions,
  importWorkflowDefinition,
  type ImportWorkflowDefinitionOptions,
  installPlugin,
  type InstallPluginOptions,
  installPluginPackageFromCatalog,
  type InstallPluginPackageFromCatalogOptions,
  issueApiToken,
  type IssueApiTokenOptions,
  launchProcess,
  type LaunchProcessOptions,
  listAgentCapabilities,
  type ListAgentCapabilitiesOptions,
  listAgentChatSessions,
  type ListAgentChatSessionsOptions,
  listAgentExecutionApprovals,
  type ListAgentExecutionApprovalsOptions,
  listAgentExecutionArtifacts,
  type ListAgentExecutionArtifactsOptions,
  listAgentExecutionCheckpoints,
  type ListAgentExecutionCheckpointsOptions,
  listAgentExecutionLog,
  type ListAgentExecutionLogOptions,
  listAgentExecutionRuns,
  type ListAgentExecutionRunsOptions,
  listAgentExecutionToolReceipts,
  type ListAgentExecutionToolReceiptsOptions,
  listAgentMemory,
  type ListAgentMemoryOptions,
  listAgentMetrics,
  type ListAgentMetricsOptions,
  listAgentProviders,
  type ListAgentProvidersOptions,
  listAgentRecruitingCandidateInterviews,
  type ListAgentRecruitingCandidateInterviewsOptions,
  listAgents,
  listAgentScopedExecutionApprovals,
  type ListAgentScopedExecutionApprovalsOptions,
  listAgentScopedExecutionArtifacts,
  type ListAgentScopedExecutionArtifactsOptions,
  listAgentScopedExecutionCheckpoints,
  type ListAgentScopedExecutionCheckpointsOptions,
  listAgentScopedExecutionLog,
  type ListAgentScopedExecutionLogOptions,
  listAgentScopedExecutionMetrics,
  type ListAgentScopedExecutionMetricsOptions,
  listAgentScopedExecutionRuns,
  type ListAgentScopedExecutionRunsOptions,
  listAgentScopedExecutionToolReceipts,
  type ListAgentScopedExecutionToolReceiptsOptions,
  type ListAgentsOptions,
  listAgentTeamAgents,
  type ListAgentTeamAgentsOptions,
  listAgentTeams,
  type ListAgentTeamsOptions,
  listCrmHrParties,
  type ListCrmHrPartiesOptions,
  listCrmHrPartyRelationships,
  type ListCrmHrPartyRelationshipsOptions,
  listCrmHrRecruitmentApplications,
  type ListCrmHrRecruitmentApplicationsOptions,
  listCrmHrSkillDefinitions,
  type ListCrmHrSkillDefinitionsOptions,
  listCrmHrWorkforce,
  type ListCrmHrWorkforceOptions,
  listLiveProcesses,
  type ListLiveProcessesOptions,
  listLlmChatConversations,
  type ListLlmChatConversationsOptions,
  listLlmChatDefinitions,
  type ListLlmChatDefinitionsOptions,
  listLlmChatProviderOptions,
  type ListLlmChatProviderOptionsOptions,
  listMemoryProviders,
  type ListMemoryProvidersOptions,
  listPendingProjectDeletionCleanups,
  type ListPendingProjectDeletionCleanupsOptions,
  listPluginCatalog,
  type ListPluginCatalogOptions,
  listPluginConnections,
  type ListPluginConnectionsOptions,
  listPluginGrants,
  type ListPluginGrantsOptions,
  listPluginLogs,
  type ListPluginLogsOptions,
  listPluginOAuthStatuses,
  type ListPluginOAuthStatusesOptions,
  listPluginPackageCatalog,
  type ListPluginPackageCatalogOptions,
  listProcessDefinitions,
  type ListProcessDefinitionsOptions,
  listProcessRunRecords,
  type ListProcessRunRecordsOptions,
  listProjectAccessItems,
  type ListProjectAccessItemsOptions,
  listProjectDeletionCompletionNotices,
  type ListProjectDeletionCompletionNoticesOptions,
  listProjectHierarchyLinks,
  type ListProjectHierarchyLinksOptions,
  listProjects,
  type ListProjectsOptions,
  listWorkflowComponents,
  type ListWorkflowComponentsOptions,
  listWorkflowDefinitions,
  type ListWorkflowDefinitionsOptions,
  listWorkflowExecutorCatalog,
  type ListWorkflowExecutorCatalogOptions,
  listWorkflowProviderOptions,
  type ListWorkflowProviderOptionsOptions,
  listWorkflowRunArtifacts,
  type ListWorkflowRunArtifactsOptions,
  listWorkflowRunCheckpoints,
  type ListWorkflowRunCheckpointsOptions,
  listWorkflowRunEventPage,
  type ListWorkflowRunEventPageOptions,
  listWorkflowRunEvents,
  type ListWorkflowRunEventsOptions,
  listWorkflowRunPage,
  type ListWorkflowRunPageOptions,
  listWorkflowRunPendingRequests,
  type ListWorkflowRunPendingRequestsOptions,
  listWorkflowRuns,
  type ListWorkflowRunsOptions,
  listWorkflowRuntimeBackends,
  type ListWorkflowRuntimeBackendsOptions,
  listWorkflowTemplates,
  type ListWorkflowTemplatesOptions,
  postApiProjectStructureAnalyticsQuery,
  type PostApiProjectStructureAnalyticsQueryOptions,
  postApiProjectStructureImports,
  type PostApiProjectStructureImportsOptions,
  postApiProjectStructureKnowledgeQuery,
  type PostApiProjectStructureKnowledgeQueryOptions,
  postApiProjectStructureLeasesAcquire,
  type PostApiProjectStructureLeasesAcquireOptions,
  postApiProjectStructureLeasesRelease,
  type PostApiProjectStructureLeasesReleaseOptions,
  postApiProjectStructureLeasesRenew,
  type PostApiProjectStructureLeasesRenewOptions,
  postApiProjectStructureProjects,
  type PostApiProjectStructureProjectsOptions,
  postApiProjectStructureProjectsParentProjectIdSubprojects,
  type PostApiProjectStructureProjectsParentProjectIdSubprojectsOptions,
  postApiProjectStructureProjectsProjectIdApprovalsRequest,
  type PostApiProjectStructureProjectsProjectIdApprovalsRequestOptions,
  postApiProjectStructureProjectsProjectIdAssets,
  postApiProjectStructureProjectsProjectIdAssetsNodeIdRevisions,
  type PostApiProjectStructureProjectsProjectIdAssetsNodeIdRevisionsOptions,
  type PostApiProjectStructureProjectsProjectIdAssetsOptions,
  postApiProjectStructureProjectsProjectIdChecklistsQuery,
  type PostApiProjectStructureProjectsProjectIdChecklistsQueryOptions,
  postApiProjectStructureProjectsProjectIdDependenciesLink,
  type PostApiProjectStructureProjectsProjectIdDependenciesLinkOptions,
  postApiProjectStructureProjectsProjectIdDependenciesQuery,
  type PostApiProjectStructureProjectsProjectIdDependenciesQueryOptions,
  postApiProjectStructureProjectsProjectIdDependenciesUnlink,
  type PostApiProjectStructureProjectsProjectIdDependenciesUnlinkOptions,
  postApiProjectStructureProjectsProjectIdLinks,
  type PostApiProjectStructureProjectsProjectIdLinksOptions,
  postApiProjectStructureProjectsProjectIdLinksUnlink,
  type PostApiProjectStructureProjectsProjectIdLinksUnlinkOptions,
  postApiProjectStructureProjectsProjectIdNodes,
  postApiProjectStructureProjectsProjectIdNodesCopy,
  type PostApiProjectStructureProjectsProjectIdNodesCopyOptions,
  postApiProjectStructureProjectsProjectIdNodesDelete,
  type PostApiProjectStructureProjectsProjectIdNodesDeleteOptions,
  postApiProjectStructureProjectsProjectIdNodesMarkers,
  type PostApiProjectStructureProjectsProjectIdNodesMarkersOptions,
  postApiProjectStructureProjectsProjectIdNodesMove,
  type PostApiProjectStructureProjectsProjectIdNodesMoveOptions,
  postApiProjectStructureProjectsProjectIdNodesMoveToNewSubproject,
  type PostApiProjectStructureProjectsProjectIdNodesMoveToNewSubprojectOptions,
  postApiProjectStructureProjectsProjectIdNodesNodeIdCommand,
  type PostApiProjectStructureProjectsProjectIdNodesNodeIdCommandOptions,
  postApiProjectStructureProjectsProjectIdNodesNodeIdDelete,
  type PostApiProjectStructureProjectsProjectIdNodesNodeIdDeleteOptions,
  postApiProjectStructureProjectsProjectIdNodesNodeIdMarkers,
  type PostApiProjectStructureProjectsProjectIdNodesNodeIdMarkersOptions,
  postApiProjectStructureProjectsProjectIdNodesNodeIdMetadata,
  type PostApiProjectStructureProjectsProjectIdNodesNodeIdMetadataOptions,
  postApiProjectStructureProjectsProjectIdNodesNodeIdMoveDescendantsToProject,
  type PostApiProjectStructureProjectsProjectIdNodesNodeIdMoveDescendantsToProjectOptions,
  postApiProjectStructureProjectsProjectIdNodesNodeIdPriority,
  type PostApiProjectStructureProjectsProjectIdNodesNodeIdPriorityOptions,
  postApiProjectStructureProjectsProjectIdNodesNodeIdProcessDefinition,
  type PostApiProjectStructureProjectsProjectIdNodesNodeIdProcessDefinitionOptions,
  postApiProjectStructureProjectsProjectIdNodesNodeIdProcessStart,
  type PostApiProjectStructureProjectsProjectIdNodesNodeIdProcessStartOptions,
  postApiProjectStructureProjectsProjectIdNodesNodeIdProgress,
  type PostApiProjectStructureProjectsProjectIdNodesNodeIdProgressOptions,
  postApiProjectStructureProjectsProjectIdNodesNodeIdReparent,
  type PostApiProjectStructureProjectsProjectIdNodesNodeIdReparentOptions,
  postApiProjectStructureProjectsProjectIdNodesNodeIdStatus,
  type PostApiProjectStructureProjectsProjectIdNodesNodeIdStatusOptions,
  postApiProjectStructureProjectsProjectIdNodesNodeIdType,
  type PostApiProjectStructureProjectsProjectIdNodesNodeIdTypeOptions,
  postApiProjectStructureProjectsProjectIdNodesNodeIdWorkflowAddOptions,
  type PostApiProjectStructureProjectsProjectIdNodesNodeIdWorkflowAddOptionsOptions,
  postApiProjectStructureProjectsProjectIdNodesNodeIdWorkflowDefinition,
  type PostApiProjectStructureProjectsProjectIdNodesNodeIdWorkflowDefinitionOptions,
  postApiProjectStructureProjectsProjectIdNodesNodeIdWorkflowStart,
  type PostApiProjectStructureProjectsProjectIdNodesNodeIdWorkflowStartOptions,
  type PostApiProjectStructureProjectsProjectIdNodesOptions,
  postApiProjectStructureProjectsProjectIdNodesPriorities,
  type PostApiProjectStructureProjectsProjectIdNodesPrioritiesOptions,
  postApiProjectStructureProjectsProjectIdNodesProgress,
  type PostApiProjectStructureProjectsProjectIdNodesProgressOptions,
  postApiProjectStructureProjectsProjectIdNodesRecompose,
  type PostApiProjectStructureProjectsProjectIdNodesRecomposeOptions,
  postApiProjectStructureProjectsProjectIdNodesReparent,
  type PostApiProjectStructureProjectsProjectIdNodesReparentOptions,
  postApiProjectStructureProjectsProjectIdNodesStatuses,
  type PostApiProjectStructureProjectsProjectIdNodesStatusesOptions,
  postApiProjectStructureProjectsProjectIdPlanSummary,
  type PostApiProjectStructureProjectsProjectIdPlanSummaryOptions,
  postApiProjectStructureProjectsProjectIdStructureRead,
  type PostApiProjectStructureProjectsProjectIdStructureReadOptions,
  postApiProjectStructureProjectsProjectIdTasks,
  type PostApiProjectStructureProjectsProjectIdTasksOptions,
  postApiProjectStructureProjectsProjectIdTasksTaskIdResource,
  type PostApiProjectStructureProjectsProjectIdTasksTaskIdResourceOptions,
  postDevAgentframeworkDiagnostics,
  type PostDevAgentframeworkDiagnosticsOptions,
  postDevAgentframeworkDiagnosticsStepStep,
  type PostDevAgentframeworkDiagnosticsStepStepOptions,
  postDevAgentframeworkProbeAgentAgentId,
  type PostDevAgentframeworkProbeAgentAgentIdOptions,
  postDevDatabaseProfilesPostgresql,
  type PostDevDatabaseProfilesPostgresqlOptions,
  postDevDatabaseSeedProfile,
  type PostDevDatabaseSeedProfileOptions,
  postDevDatabaseSwitchProfileId,
  type PostDevDatabaseSwitchProfileIdOptions,
  postDevProjects,
  type PostDevProjectsOptions,
  previewAgentCapabilityAccess,
  type PreviewAgentCapabilityAccessOptions,
  provisionAgentByExternalKey,
  type ProvisionAgentByExternalKeyOptions,
  publishWorkflowDefinition,
  type PublishWorkflowDefinitionOptions,
  putApiProjectStructureProjectsProjectId,
  putApiProjectStructureProjectsProjectIdNodesNodeId,
  type PutApiProjectStructureProjectsProjectIdNodesNodeIdOptions,
  type PutApiProjectStructureProjectsProjectIdOptions,
  putApiProjectStructureProjectsProjectIdTasksTaskId,
  type PutApiProjectStructureProjectsProjectIdTasksTaskIdOptions,
  putApiSettingsWorkspace,
  type PutApiSettingsWorkspaceOptions,
  queryMemoryProvider,
  type QueryMemoryProviderOptions,
  rebuildPromptGalleryProjection,
  type RebuildPromptGalleryProjectionOptions,
  reconcileLlmChatOperation,
  type ReconcileLlmChatOperationOptions,
  reconnectProjectSubproject,
  type ReconnectProjectSubprojectOptions,
  renameAgentChatSession,
  type RenameAgentChatSessionOptions,
  renameLlmChatConversation,
  type RenameLlmChatConversationOptions,
  replaceAgentTeamMembers,
  type ReplaceAgentTeamMembersOptions,
  replaceCrmHrPartyRelationships,
  type ReplaceCrmHrPartyRelationshipsOptions,
  requestProcessStepRework,
  type RequestProcessStepReworkOptions,
  respondToAgentExecutionApprovals,
  type RespondToAgentExecutionApprovalsOptions,
  respondToWorkflowExternalRequest,
  type RespondToWorkflowExternalRequestOptions,
  restartPluginRuntime,
  type RestartPluginRuntimeOptions,
  retryPendingProjectDeletionCleanup,
  type RetryPendingProjectDeletionCleanupOptions,
  runAgentProviderTestChat,
  type RunAgentProviderTestChatOptions,
  runWorkflowTest,
  type RunWorkflowTestOptions,
  saveAgent,
  saveAgentCapability,
  type SaveAgentCapabilityOptions,
  saveAgentMemory,
  type SaveAgentMemoryOptions,
  type SaveAgentOptions,
  saveAgentProvider,
  type SaveAgentProviderOptions,
  saveAgentTeam,
  type SaveAgentTeamOptions,
  saveCrmHrCapacityBlock,
  type SaveCrmHrCapacityBlockOptions,
  saveCrmHrLifecycleTask,
  type SaveCrmHrLifecycleTaskOptions,
  saveCrmHrPartySkill,
  type SaveCrmHrPartySkillOptions,
  saveCrmHrRecruitmentApplication,
  type SaveCrmHrRecruitmentApplicationOptions,
  saveCrmHrRecruitmentInterview,
  type SaveCrmHrRecruitmentInterviewOptions,
  saveCrmHrRecruitmentSupportAssignments,
  type SaveCrmHrRecruitmentSupportAssignmentsOptions,
  saveCrmHrSkillDefinition,
  type SaveCrmHrSkillDefinitionOptions,
  saveCrmHrWorkforceProfile,
  type SaveCrmHrWorkforceProfileOptions,
  savePluginConnection,
  type SavePluginConnectionOptions,
  saveProject,
  type SaveProjectOptions,
  savePromptGalleryDraft,
  type SavePromptGalleryDraftOptions,
  saveWorkflowComponent,
  type SaveWorkflowComponentOptions,
  saveWorkflowDefinition,
  type SaveWorkflowDefinitionOptions,
  saveWorkflowSettings,
  type SaveWorkflowSettingsOptions,
  searchPromptGalleryItems,
  type SearchPromptGalleryItemsOptions,
  sendAgentChatMessage,
  type SendAgentChatMessageOptions,
  sendLlmChatTurn,
  type SendLlmChatTurnOptions,
  setPromptGalleryFavorite,
  type SetPromptGalleryFavoriteOptions,
  setPromptGalleryWarningSuppression,
  type SetPromptGalleryWarningSuppressionOptions,
  stageAgentImageAttachment,
  type StageAgentImageAttachmentOptions,
  startAgentExecutionRun,
  type StartAgentExecutionRunOptions,
  startAgentScopedExecutionRun,
  type StartAgentScopedExecutionRunOptions,
  startPluginOAuth,
  type StartPluginOAuthOptions,
  startWorkflowDefinitionRun,
  type StartWorkflowDefinitionRunOptions,
  startWorkflowRun,
  type StartWorkflowRunOptions,
  streamAgentChatMessage,
  type StreamAgentChatMessageOptions,
  streamAgentExecutionApprovalResponse,
  type StreamAgentExecutionApprovalResponseOptions,
  streamAgentExecutionOperationEvents,
  type StreamAgentExecutionOperationEventsOptions,
  streamAgentExecutionRun,
  type StreamAgentExecutionRunOptions,
  streamAgentProviderChatCompletion,
  type StreamAgentProviderChatCompletionOptions,
  streamAgentScopedExecutionRun,
  type StreamAgentScopedExecutionRunOptions,
  streamLlmChatOperationEvents,
  type StreamLlmChatOperationEventsOptions,
  streamProcessRunEvents,
  streamProcessRunEventsByRun,
  type StreamProcessRunEventsByRunOptions,
  type StreamProcessRunEventsOptions,
  streamWorkflowRunEvents,
  streamWorkflowRunEventsByRun,
  type StreamWorkflowRunEventsByRunOptions,
  type StreamWorkflowRunEventsOptions,
  suspendLlmChatDefinition,
  type SuspendLlmChatDefinitionOptions,
  suspendWorkflowDefinition,
  type SuspendWorkflowDefinitionOptions,
  testAgentMcpCapabilitySetup,
  type TestAgentMcpCapabilitySetupOptions,
  testAgentProvider,
  type TestAgentProviderOptions,
  testAgentToolCapabilitySetup,
  type TestAgentToolCapabilitySetupOptions,
  updateAgentTeam,
  updateAgentTeamMembers,
  type UpdateAgentTeamMembersOptions,
  type UpdateAgentTeamOptions,
  updateLlmChatDefinition,
  type UpdateLlmChatDefinitionOptions,
  updatePluginGrant,
  type UpdatePluginGrantOptions,
  uploadPluginPackage,
  type UploadPluginPackageOptions,
  upsertMemoryProvider,
  type UpsertMemoryProviderOptions,
  validateDraftWorkflowDefinition,
  type ValidateDraftWorkflowDefinitionOptions,
  validateSavedWorkflowDefinition,
  type ValidateSavedWorkflowDefinitionOptions,
  verifyAgentCapability,
  type VerifyAgentCapabilityOptions,
} from "./api/canDoItAllClientOperations.js";
import type {
  AgentChatApiRequest,
  AgentCloneApiRequest,
  AgentEditorModel,
  AgentExecutionRunApiRequest,
  AgentExecutionRunStartApiRequest,
  AgentImageAttachmentUploadRequest,
  AgentImportApiRequest,
  AgentPackageImportApiForm,
  AgentTeamEditorModel,
  AgentTeamMembersApiRequest,
  AgentTemplateConversionApiRequest,
  ApiTokenIssueRequest,
  AppendAgentRecruitingAttemptCommand,
  AppendAgentRecruitingReviewCommand,
  CapabilityAccessPreviewRequest,
  CapabilityEditorModel,
  CapabilityMcpSetupTestRequest,
  CapabilityToolSetupTestRequest,
  CapacityBlockSaveApiRequest,
  ChatSessionRenameApiRequest,
  CreateAgentRecruitingInterviewCommand,
  CreateLlmChatConversationApiRequest,
  IFormFile,
  LifecycleTaskSaveApiRequest,
  LlmCallComponentSaveRequest,
  LlmChatDefinitionMutationApiRequest,
  LlmChatExpectedConcurrencyApiRequest,
  MemoryEditorModel,
  MemoryProviderProfileApiRequest,
  MemoryProviderQueryApiRequest,
  PartyCreateApiRequest,
  PartyRelationshipsReplaceApiRequest,
  PartySkillSaveApiRequest,
  PendingApprovalApiRequest,
  PluginConnectionSaveRequest,
  PluginGrantUpdateRequest,
  PluginInstallationUpdateRequest,
  PluginInstallRequest,
  PluginOAuthStartRequest,
  PluginPackageInstallRequest,
  PluginRuntimeRestartRequest,
  PostgreSqlDevDatabaseProfileRequest,
  ProcessDispatchApiRequest,
  ProcessLaunchApiRequest,
  ProcessRuntimeCancelApiRequest,
  ProcessRuntimeReworkApiRequest,
  ProjectEditorModel,
  ProjectManagementGuidanceQueryRequest,
  ProjectPlanSummaryQuery,
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
  ProjectStructureWorkflowAddOptionsInput,
  ProjectStructureWorkflowNodeCreateInput,
  ProjectStructureWorkflowNodeStartInput,
  PromptGalleryArchiveRequest,
  PromptGalleryCompatibilityApiRequest,
  PromptGalleryDraft,
  PromptGalleryFavoriteRequest,
  PromptGalleryWarningSuppressionApiRequest,
  PromptVersionCreateRequest,
  ProviderChatCompletionApiRequest,
  ProviderModelMaintenanceEditorRequest,
  ProviderProfileEditorModel,
  ProviderTestChatRequest,
  RecruitmentApplicationSaveApiRequest,
  RecruitmentConversionApiRequest,
  RecruitmentInterviewSaveApiRequest,
  RecruitmentSupportAssignmentsSaveApiRequest,
  RenameLlmChatConversationApiRequest,
  SendLlmChatTurnApiRequest,
  SkillDefinitionSaveApiRequest,
  WorkflowDefinition,
  WorkflowDefinitionImportRequest,
  WorkflowDefinitionSaveRequest,
  WorkflowExternalRequestResponseApiRequest,
  WorkflowRunStartApiRequest,
  WorkflowSettings,
  WorkflowTestRunRequest,
  WorkforceProfileSaveApiRequest,
  WorkspaceSettingsModel,
} from "./models/models.js";

export class CanDoItAllClient {
  #context: CanDoItAllClientContext
  constructor(options?: CanDoItAllClientOptions) {
    this.#context = createCanDoItAllClientContext(options);

  }
  async getAuthorizedFilesContent(options?: GetAuthorizedFilesContentOptions) {
    return getAuthorizedFilesContent(this.#context, options);
  };
  async getAuthorizedFilesDownload(
    options?: GetAuthorizedFilesDownloadOptions,
  ) {
    return getAuthorizedFilesDownload(this.#context, options);
  };
  async getStorageObjectsPreview(options?: GetStorageObjectsPreviewOptions) {
    return getStorageObjectsPreview(this.#context, options);
  };
  async getStorageObjectsDownload(options?: GetStorageObjectsDownloadOptions) {
    return getStorageObjectsDownload(this.#context, options);
  };
  async getManagedFilesPath(
    path: string,
    options?: GetManagedFilesPathOptions,
  ) {
    return getManagedFilesPath(this.#context, path, options);
  };
  async getDevRuntime(options?: GetDevRuntimeOptions) {
    return getDevRuntime(this.#context, options);
  };
  async getDevDatabaseSelection(options?: GetDevDatabaseSelectionOptions) {
    return getDevDatabaseSelection(this.#context, options);
  };
  async postDevDatabaseProfilesPostgresql(
    body: PostgreSqlDevDatabaseProfileRequest,
    options?: PostDevDatabaseProfilesPostgresqlOptions,
  ) {
    return postDevDatabaseProfilesPostgresql(this.#context, body, options);
  };
  async postDevDatabaseSwitchProfileId(
    profileId: string,
    options?: PostDevDatabaseSwitchProfileIdOptions,
  ) {
    return postDevDatabaseSwitchProfileId(this.#context, profileId, options);
  };
  async postDevDatabaseSeedProfile(
    options?: PostDevDatabaseSeedProfileOptions,
  ) {
    return postDevDatabaseSeedProfile(this.#context, options);
  };
  async postDevProjects(options?: PostDevProjectsOptions) {
    return postDevProjects(this.#context, options);
  };
  async postDevAgentframeworkDiagnostics(
    options?: PostDevAgentframeworkDiagnosticsOptions,
  ) {
    return postDevAgentframeworkDiagnostics(this.#context, options);
  };
  async getDevAgentframeworkCredential(
    options?: GetDevAgentframeworkCredentialOptions,
  ) {
    return getDevAgentframeworkCredential(this.#context, options);
  };
  async postDevAgentframeworkProbeAgentAgentId(
    agentId: string,
    persistTranscript: boolean,
    options?: PostDevAgentframeworkProbeAgentAgentIdOptions,
  ) {
    return postDevAgentframeworkProbeAgentAgentId(
      this.#context,
      agentId,
      persistTranscript,
      options
    );
  };
  async postDevAgentframeworkDiagnosticsStepStep(
    step: string,
    options?: PostDevAgentframeworkDiagnosticsStepStepOptions,
  ) {
    return postDevAgentframeworkDiagnosticsStepStep(
      this.#context,
      step,
      options
    );
  };
  async getApiSettingsWorkspace(options?: GetApiSettingsWorkspaceOptions) {
    return getApiSettingsWorkspace(this.#context, options);
  };
  async putApiSettingsWorkspace(
    body: WorkspaceSettingsModel,
    options?: PutApiSettingsWorkspaceOptions,
  ) {
    return putApiSettingsWorkspace(this.#context, body, options);
  };
  async getApiRuntimeCapabilities(options?: GetApiRuntimeCapabilitiesOptions) {
    return getApiRuntimeCapabilities(this.#context, options);
  };
  async getApiRuntimeOperations(options?: GetApiRuntimeOperationsOptions) {
    return getApiRuntimeOperations(this.#context, options);
  };
  async getApiProjectStructureNodeCatalog(
    options?: GetApiProjectStructureNodeCatalogOptions,
  ) {
    return getApiProjectStructureNodeCatalog(this.#context, options);
  };
  async getApiProjectStructureProjects(
    options?: GetApiProjectStructureProjectsOptions,
  ) {
    return getApiProjectStructureProjects(this.#context, options);
  };
  async postApiProjectStructureProjects(
    body: ProjectStructureProjectSaveRequest,
    options?: PostApiProjectStructureProjectsOptions,
  ) {
    return postApiProjectStructureProjects(this.#context, body, options);
  };
  async putApiProjectStructureProjectsProjectId(
    projectId: string,
    body: ProjectStructureProjectSaveRequest,
    options?: PutApiProjectStructureProjectsProjectIdOptions,
  ) {
    return putApiProjectStructureProjectsProjectId(
      this.#context,
      projectId,
      body,
      options
    );
  };
  async getApiProjectStructureProjectsProjectIdHierarchy(
    projectId: string,
    options?: GetApiProjectStructureProjectsProjectIdHierarchyOptions,
  ) {
    return getApiProjectStructureProjectsProjectIdHierarchy(
      this.#context,
      projectId,
      options
    );
  };
  async postApiProjectStructureProjectsParentProjectIdSubprojects(
    parentProjectId: string,
    body: ProjectStructureSubprojectChangeRequest,
    options?: PostApiProjectStructureProjectsParentProjectIdSubprojectsOptions,
  ) {
    return postApiProjectStructureProjectsParentProjectIdSubprojects(
      this.#context,
      parentProjectId,
      body,
      options
    );
  };
  async postApiProjectStructureProjectsProjectIdStructureRead(
    projectId: string,
    contentType: "application/json" | "application/*+json",
    body: ProjectStructureReadRequest,
    options?: PostApiProjectStructureProjectsProjectIdStructureReadOptions,
  ) {
    return postApiProjectStructureProjectsProjectIdStructureRead(
      this.#context,
      projectId,
      contentType,
      body,
      options
    );
  };
  async postApiProjectStructureProjectsProjectIdPlanSummary(
    projectId: string,
    body: ProjectPlanSummaryQuery,
    options?: PostApiProjectStructureProjectsProjectIdPlanSummaryOptions,
  ) {
    return postApiProjectStructureProjectsProjectIdPlanSummary(
      this.#context,
      projectId,
      body,
      options
    );
  };
  async postApiProjectStructureProjectsProjectIdTasks(
    projectId: string,
    body: ProjectStructureTaskCreateRequest,
    options?: PostApiProjectStructureProjectsProjectIdTasksOptions,
  ) {
    return postApiProjectStructureProjectsProjectIdTasks(
      this.#context,
      projectId,
      body,
      options
    );
  };
  async putApiProjectStructureProjectsProjectIdTasksTaskId(
    projectId: string,
    taskId: string,
    body: ProjectStructureTaskDetailsUpdateRequest,
    options?: PutApiProjectStructureProjectsProjectIdTasksTaskIdOptions,
  ) {
    return putApiProjectStructureProjectsProjectIdTasksTaskId(
      this.#context,
      projectId,
      taskId,
      body,
      options
    );
  };
  async postApiProjectStructureProjectsProjectIdTasksTaskIdResource(
    projectId: string,
    taskId: string,
    body: ProjectStructureTaskResourceAttachRequest,
    options?: PostApiProjectStructureProjectsProjectIdTasksTaskIdResourceOptions,
  ) {
    return postApiProjectStructureProjectsProjectIdTasksTaskIdResource(
      this.#context,
      projectId,
      taskId,
      body,
      options
    );
  };
  async postApiProjectStructureProjectsProjectIdNodes(
    projectId: string,
    contentType: "application/json" | "application/*+json",
    body: ProjectStructureNodeCreateOpenApiRequest,
    options?: PostApiProjectStructureProjectsProjectIdNodesOptions,
  ) {
    return postApiProjectStructureProjectsProjectIdNodes(
      this.#context,
      projectId,
      contentType,
      body,
      options
    );
  };
  async putApiProjectStructureProjectsProjectIdNodesNodeId(
    projectId: string,
    nodeId: string,
    contentType: "application/json" | "application/*+json",
    body: ProjectStructureNodeEditOpenApiRequest,
    options?: PutApiProjectStructureProjectsProjectIdNodesNodeIdOptions,
  ) {
    return putApiProjectStructureProjectsProjectIdNodesNodeId(
      this.#context,
      projectId,
      nodeId,
      contentType,
      body,
      options
    );
  };
  async postApiProjectStructureProjectsProjectIdNodesNodeIdType(
    projectId: string,
    nodeId: string,
    contentType: "application/json" | "application/*+json",
    body: ProjectStructureNodeTypeInput,
    options?: PostApiProjectStructureProjectsProjectIdNodesNodeIdTypeOptions,
  ) {
    return postApiProjectStructureProjectsProjectIdNodesNodeIdType(
      this.#context,
      projectId,
      nodeId,
      contentType,
      body,
      options
    );
  };
  async postApiProjectStructureProjectsProjectIdNodesNodeIdMetadata(
    projectId: string,
    nodeId: string,
    body: ProjectStructureNodeMetadataInput,
    options?: PostApiProjectStructureProjectsProjectIdNodesNodeIdMetadataOptions,
  ) {
    return postApiProjectStructureProjectsProjectIdNodesNodeIdMetadata(
      this.#context,
      projectId,
      nodeId,
      body,
      options
    );
  };
  async postApiProjectStructureProjectsProjectIdNodesStatuses(
    projectId: string,
    body: ProjectStructureStatusBatchInput,
    options?: PostApiProjectStructureProjectsProjectIdNodesStatusesOptions,
  ) {
    return postApiProjectStructureProjectsProjectIdNodesStatuses(
      this.#context,
      projectId,
      body,
      options
    );
  };
  async postApiProjectStructureProjectsProjectIdNodesNodeIdStatus(
    projectId: string,
    nodeId: string,
    body: ProjectStructureStatusInput,
    options?: PostApiProjectStructureProjectsProjectIdNodesNodeIdStatusOptions,
  ) {
    return postApiProjectStructureProjectsProjectIdNodesNodeIdStatus(
      this.#context,
      projectId,
      nodeId,
      body,
      options
    );
  };
  async postApiProjectStructureProjectsProjectIdNodesProgress(
    projectId: string,
    body: ProjectStructureProgressBatchInput,
    options?: PostApiProjectStructureProjectsProjectIdNodesProgressOptions,
  ) {
    return postApiProjectStructureProjectsProjectIdNodesProgress(
      this.#context,
      projectId,
      body,
      options
    );
  };
  async postApiProjectStructureProjectsProjectIdNodesNodeIdProgress(
    projectId: string,
    nodeId: string,
    body: ProjectStructureProgressInput,
    options?: PostApiProjectStructureProjectsProjectIdNodesNodeIdProgressOptions,
  ) {
    return postApiProjectStructureProjectsProjectIdNodesNodeIdProgress(
      this.#context,
      projectId,
      nodeId,
      body,
      options
    );
  };
  async postApiProjectStructureProjectsProjectIdNodesMarkers(
    projectId: string,
    body: ProjectStructureMarkerBatchInput,
    options?: PostApiProjectStructureProjectsProjectIdNodesMarkersOptions,
  ) {
    return postApiProjectStructureProjectsProjectIdNodesMarkers(
      this.#context,
      projectId,
      body,
      options
    );
  };
  async postApiProjectStructureProjectsProjectIdNodesNodeIdMarkers(
    projectId: string,
    nodeId: string,
    body: ProjectStructureMarkerInput,
    options?: PostApiProjectStructureProjectsProjectIdNodesNodeIdMarkersOptions,
  ) {
    return postApiProjectStructureProjectsProjectIdNodesNodeIdMarkers(
      this.#context,
      projectId,
      nodeId,
      body,
      options
    );
  };
  async postApiProjectStructureProjectsProjectIdNodesPriorities(
    projectId: string,
    body: ProjectStructurePriorityBatchInput,
    options?: PostApiProjectStructureProjectsProjectIdNodesPrioritiesOptions,
  ) {
    return postApiProjectStructureProjectsProjectIdNodesPriorities(
      this.#context,
      projectId,
      body,
      options
    );
  };
  async postApiProjectStructureProjectsProjectIdNodesNodeIdPriority(
    projectId: string,
    nodeId: string,
    body: ProjectStructurePriorityInput,
    options?: PostApiProjectStructureProjectsProjectIdNodesNodeIdPriorityOptions,
  ) {
    return postApiProjectStructureProjectsProjectIdNodesNodeIdPriority(
      this.#context,
      projectId,
      nodeId,
      body,
      options
    );
  };
  async postApiProjectStructureProjectsProjectIdNodesMove(
    projectId: string,
    body: ProjectStructureNodeMoveInput,
    options?: PostApiProjectStructureProjectsProjectIdNodesMoveOptions,
  ) {
    return postApiProjectStructureProjectsProjectIdNodesMove(
      this.#context,
      projectId,
      body,
      options
    );
  };
  async postApiProjectStructureProjectsProjectIdNodesRecompose(
    projectId: string,
    body: ProjectStructureNodeRecomposeInput,
    options?: PostApiProjectStructureProjectsProjectIdNodesRecomposeOptions,
  ) {
    return postApiProjectStructureProjectsProjectIdNodesRecompose(
      this.#context,
      projectId,
      body,
      options
    );
  };
  async postApiProjectStructureProjectsProjectIdNodesNodeIdReparent(
    projectId: string,
    nodeId: string,
    body: ProjectStructureNodeParentInput,
    options?: PostApiProjectStructureProjectsProjectIdNodesNodeIdReparentOptions,
  ) {
    return postApiProjectStructureProjectsProjectIdNodesNodeIdReparent(
      this.#context,
      projectId,
      nodeId,
      body,
      options
    );
  };
  async postApiProjectStructureProjectsProjectIdNodesReparent(
    projectId: string,
    body: ProjectStructureNodeReparentInput,
    options?: PostApiProjectStructureProjectsProjectIdNodesReparentOptions,
  ) {
    return postApiProjectStructureProjectsProjectIdNodesReparent(
      this.#context,
      projectId,
      body,
      options
    );
  };
  async postApiProjectStructureProjectsProjectIdNodesCopy(
    projectId: string,
    body: ProjectStructureNodesCopyInput,
    options?: PostApiProjectStructureProjectsProjectIdNodesCopyOptions,
  ) {
    return postApiProjectStructureProjectsProjectIdNodesCopy(
      this.#context,
      projectId,
      body,
      options
    );
  };
  async postApiProjectStructureProjectsProjectIdNodesMoveToNewSubproject(
    projectId: string,
    body: ProjectStructureNodesToSubprojectInput,
    options?: PostApiProjectStructureProjectsProjectIdNodesMoveToNewSubprojectOptions,
  ) {
    return postApiProjectStructureProjectsProjectIdNodesMoveToNewSubproject(
      this.#context,
      projectId,
      body,
      options
    );
  };
  async postApiProjectStructureProjectsProjectIdNodesNodeIdMoveDescendantsToProject(
    projectId: string,
    nodeId: string,
    body: ProjectStructureSubtreeTransferInput,
    options?: PostApiProjectStructureProjectsProjectIdNodesNodeIdMoveDescendantsToProjectOptions,
  ) {
    return postApiProjectStructureProjectsProjectIdNodesNodeIdMoveDescendantsToProject(
      this.#context,
      projectId,
      nodeId,
      body,
      options
    );
  };
  async postApiProjectStructureProjectsProjectIdNodesNodeIdCommand(
    projectId: string,
    nodeId: string,
    body: ProjectStructureNodeCommandInput,
    options?: PostApiProjectStructureProjectsProjectIdNodesNodeIdCommandOptions,
  ) {
    return postApiProjectStructureProjectsProjectIdNodesNodeIdCommand(
      this.#context,
      projectId,
      nodeId,
      body,
      options
    );
  };
  async postApiProjectStructureProjectsProjectIdNodesNodeIdProcessDefinition(
    projectId: string,
    nodeId: string,
    body: ProjectStructureProcessDefinitionLinkInput,
    options?: PostApiProjectStructureProjectsProjectIdNodesNodeIdProcessDefinitionOptions,
  ) {
    return postApiProjectStructureProjectsProjectIdNodesNodeIdProcessDefinition(
      this.#context,
      projectId,
      nodeId,
      body,
      options
    );
  };
  async postApiProjectStructureProjectsProjectIdNodesNodeIdProcessStart(
    projectId: string,
    nodeId: string,
    body: ProjectStructureProcessNodeStartInput,
    options?: PostApiProjectStructureProjectsProjectIdNodesNodeIdProcessStartOptions,
  ) {
    return postApiProjectStructureProjectsProjectIdNodesNodeIdProcessStart(
      this.#context,
      projectId,
      nodeId,
      body,
      options
    );
  };
  async postApiProjectStructureProjectsProjectIdNodesNodeIdWorkflowAddOptions(
    projectId: string,
    nodeId: string,
    body: ProjectStructureWorkflowAddOptionsInput,
    options?: PostApiProjectStructureProjectsProjectIdNodesNodeIdWorkflowAddOptionsOptions,
  ) {
    return postApiProjectStructureProjectsProjectIdNodesNodeIdWorkflowAddOptions(
      this.#context,
      projectId,
      nodeId,
      body,
      options
    );
  };
  async postApiProjectStructureProjectsProjectIdNodesNodeIdWorkflowDefinition(
    projectId: string,
    nodeId: string,
    body: ProjectStructureWorkflowNodeCreateInput,
    options?: PostApiProjectStructureProjectsProjectIdNodesNodeIdWorkflowDefinitionOptions,
  ) {
    return postApiProjectStructureProjectsProjectIdNodesNodeIdWorkflowDefinition(
      this.#context,
      projectId,
      nodeId,
      body,
      options
    );
  };
  async postApiProjectStructureProjectsProjectIdNodesNodeIdWorkflowStart(
    projectId: string,
    nodeId: string,
    body: ProjectStructureWorkflowNodeStartInput,
    options?: PostApiProjectStructureProjectsProjectIdNodesNodeIdWorkflowStartOptions,
  ) {
    return postApiProjectStructureProjectsProjectIdNodesNodeIdWorkflowStart(
      this.#context,
      projectId,
      nodeId,
      body,
      options
    );
  };
  async getApiProjectStructureProjectsProjectIdNodesNodeIdWorkflowStatus(
    projectId: string,
    nodeId: string,
    options?: GetApiProjectStructureProjectsProjectIdNodesNodeIdWorkflowStatusOptions,
  ) {
    return getApiProjectStructureProjectsProjectIdNodesNodeIdWorkflowStatus(
      this.#context,
      projectId,
      nodeId,
      options
    );
  };
  async postApiProjectStructureProjectsProjectIdNodesNodeIdDelete(
    projectId: string,
    nodeId: string,
    body: ProjectStructureNodeDeleteInput,
    options?: PostApiProjectStructureProjectsProjectIdNodesNodeIdDeleteOptions,
  ) {
    return postApiProjectStructureProjectsProjectIdNodesNodeIdDelete(
      this.#context,
      projectId,
      nodeId,
      body,
      options
    );
  };
  async getApiProjectStructureProjectsProjectIdDeletionCompletionNotices(
    projectId: string,
    options?: GetApiProjectStructureProjectsProjectIdDeletionCompletionNoticesOptions,
  ) {
    return getApiProjectStructureProjectsProjectIdDeletionCompletionNotices(
      this.#context,
      projectId,
      options
    );
  };
  async getApiProjectStructureProjectsProjectIdDeletionCleanups(
    projectId: string,
    options?: GetApiProjectStructureProjectsProjectIdDeletionCleanupsOptions,
  ) {
    return getApiProjectStructureProjectsProjectIdDeletionCleanups(
      this.#context,
      projectId,
      options
    );
  };
  async postApiProjectStructureProjectsProjectIdNodesDelete(
    projectId: string,
    body: ProjectStructureNodeDeleteBatchInput,
    options?: PostApiProjectStructureProjectsProjectIdNodesDeleteOptions,
  ) {
    return postApiProjectStructureProjectsProjectIdNodesDelete(
      this.#context,
      projectId,
      body,
      options
    );
  };
  async postApiProjectStructureProjectsProjectIdApprovalsRequest(
    projectId: string,
    body: ProjectStructureApprovalRequestCreateInput,
    options?: PostApiProjectStructureProjectsProjectIdApprovalsRequestOptions,
  ) {
    return postApiProjectStructureProjectsProjectIdApprovalsRequest(
      this.#context,
      projectId,
      body,
      options
    );
  };
  async postApiProjectStructureProjectsProjectIdChecklistsQuery(
    projectId: string,
    contentType: "application/json" | "application/*+json",
    body: ProjectStructureChecklistRequest,
    options?: PostApiProjectStructureProjectsProjectIdChecklistsQueryOptions,
  ) {
    return postApiProjectStructureProjectsProjectIdChecklistsQuery(
      this.#context,
      projectId,
      contentType,
      body,
      options
    );
  };
  async postApiProjectStructureProjectsProjectIdDependenciesQuery(
    projectId: string,
    body: ProjectStructureDependencyQueryRequest,
    options?: PostApiProjectStructureProjectsProjectIdDependenciesQueryOptions,
  ) {
    return postApiProjectStructureProjectsProjectIdDependenciesQuery(
      this.#context,
      projectId,
      body,
      options
    );
  };
  async postApiProjectStructureProjectsProjectIdLinks(
    projectId: string,
    body: ProjectStructureLinkInput,
    options?: PostApiProjectStructureProjectsProjectIdLinksOptions,
  ) {
    return postApiProjectStructureProjectsProjectIdLinks(
      this.#context,
      projectId,
      body,
      options
    );
  };
  async postApiProjectStructureProjectsProjectIdLinksUnlink(
    projectId: string,
    body: ProjectStructureLinkInput,
    options?: PostApiProjectStructureProjectsProjectIdLinksUnlinkOptions,
  ) {
    return postApiProjectStructureProjectsProjectIdLinksUnlink(
      this.#context,
      projectId,
      body,
      options
    );
  };
  async postApiProjectStructureProjectsProjectIdDependenciesLink(
    projectId: string,
    body: ProjectStructureLinkInput,
    options?: PostApiProjectStructureProjectsProjectIdDependenciesLinkOptions,
  ) {
    return postApiProjectStructureProjectsProjectIdDependenciesLink(
      this.#context,
      projectId,
      body,
      options
    );
  };
  async postApiProjectStructureProjectsProjectIdDependenciesUnlink(
    projectId: string,
    body: ProjectStructureLinkInput,
    options?: PostApiProjectStructureProjectsProjectIdDependenciesUnlinkOptions,
  ) {
    return postApiProjectStructureProjectsProjectIdDependenciesUnlink(
      this.#context,
      projectId,
      body,
      options
    );
  };
  async getApiProjectStructureProjectsProjectIdAssetsNodeId(
    projectId: string,
    nodeId: string,
    options?: GetApiProjectStructureProjectsProjectIdAssetsNodeIdOptions,
  ) {
    return getApiProjectStructureProjectsProjectIdAssetsNodeId(
      this.#context,
      projectId,
      nodeId,
      options
    );
  };
  async getApiProjectStructureProjectsProjectIdAssetsNodeIdContent(
    projectId: string,
    nodeId: string,
    options?: GetApiProjectStructureProjectsProjectIdAssetsNodeIdContentOptions,
  ) {
    return getApiProjectStructureProjectsProjectIdAssetsNodeIdContent(
      this.#context,
      projectId,
      nodeId,
      options
    );
  };
  async postApiProjectStructureProjectsProjectIdAssets(
    projectId: string,
    contentType: "application/json" | "application/*+json",
    body: ProjectStructureAssetCreateInput,
    options?: PostApiProjectStructureProjectsProjectIdAssetsOptions,
  ) {
    return postApiProjectStructureProjectsProjectIdAssets(
      this.#context,
      projectId,
      contentType,
      body,
      options
    );
  };
  async postApiProjectStructureProjectsProjectIdAssetsNodeIdRevisions(
    projectId: string,
    nodeId: string,
    body: ProjectStructureAssetRevisionRequest,
    options?: PostApiProjectStructureProjectsProjectIdAssetsNodeIdRevisionsOptions,
  ) {
    return postApiProjectStructureProjectsProjectIdAssetsNodeIdRevisions(
      this.#context,
      projectId,
      nodeId,
      body,
      options
    );
  };
  async postApiProjectStructureImports(
    body: ProjectStructureImportRequest,
    options?: PostApiProjectStructureImportsOptions,
  ) {
    return postApiProjectStructureImports(this.#context, body, options);
  };
  async postApiProjectStructureKnowledgeQuery(
    body: ProjectManagementGuidanceQueryRequest,
    options?: PostApiProjectStructureKnowledgeQueryOptions,
  ) {
    return postApiProjectStructureKnowledgeQuery(this.#context, body, options);
  };
  async postApiProjectStructureLeasesAcquire(
    body: ProjectStructureLeaseAcquireRequest,
    options?: PostApiProjectStructureLeasesAcquireOptions,
  ) {
    return postApiProjectStructureLeasesAcquire(this.#context, body, options);
  };
  async postApiProjectStructureLeasesRenew(
    body: ProjectStructureLeaseRenewRequest,
    options?: PostApiProjectStructureLeasesRenewOptions,
  ) {
    return postApiProjectStructureLeasesRenew(this.#context, body, options);
  };
  async postApiProjectStructureLeasesRelease(
    body: ProjectStructureLeaseReleaseRequest,
    options?: PostApiProjectStructureLeasesReleaseOptions,
  ) {
    return postApiProjectStructureLeasesRelease(this.#context, body, options);
  };
  async getApiProjectStructureLeasesCurrent(
    scopeKind: string,
    scopeKey: string,
    options?: GetApiProjectStructureLeasesCurrentOptions,
  ) {
    return getApiProjectStructureLeasesCurrent(
      this.#context,
      scopeKind,
      scopeKey,
      options
    );
  };
  async postApiProjectStructureAnalyticsQuery(
    body: ProjectStructureAnalyticsQueryRequest,
    options?: PostApiProjectStructureAnalyticsQueryOptions,
  ) {
    return postApiProjectStructureAnalyticsQuery(this.#context, body, options);
  };
  async getApiAccessStatus(options?: GetApiAccessStatusOptions) {
    return getApiAccessStatus(this.#context, options);
  };
  async issueApiToken(
    body: ApiTokenIssueRequest,
    options?: IssueApiTokenOptions,
  ) {
    return issueApiToken(this.#context, body, options);
  };
  async listProjects(options?: ListProjectsOptions) {
    return listProjects(this.#context, options);
  };
  async saveProject(body: ProjectEditorModel, options?: SaveProjectOptions) {
    return saveProject(this.#context, body, options);
  };
  async listProjectAccessItems(options?: ListProjectAccessItemsOptions) {
    return listProjectAccessItems(this.#context, options);
  };
  async listProjectHierarchyLinks(options?: ListProjectHierarchyLinksOptions) {
    return listProjectHierarchyLinks(this.#context, options);
  };
  async deleteProject(projectId: string, options?: DeleteProjectOptions) {
    return deleteProject(this.#context, projectId, options);
  };
  async getProjectEditor(projectId: string, options?: GetProjectEditorOptions) {
    return getProjectEditor(this.#context, projectId, options);
  };
  async listPendingProjectDeletionCleanups(
    options?: ListPendingProjectDeletionCleanupsOptions,
  ) {
    return listPendingProjectDeletionCleanups(this.#context, options);
  };
  async listProjectDeletionCompletionNotices(
    options?: ListProjectDeletionCompletionNoticesOptions,
  ) {
    return listProjectDeletionCompletionNotices(this.#context, options);
  };
  async retryPendingProjectDeletionCleanup(
    projectId: string,
    participantId: string,
    recoveryId: string,
    options?: RetryPendingProjectDeletionCleanupOptions,
  ) {
    return retryPendingProjectDeletionCleanup(
      this.#context,
      projectId,
      participantId,
      recoveryId,
      options
    );
  };
  async getProjectHierarchy(
    projectId: string,
    options?: GetProjectHierarchyOptions,
  ) {
    return getProjectHierarchy(this.#context, projectId, options);
  };
  async detachProjectSubproject(
    parentProjectId: string,
    childProjectId: string,
    options?: DetachProjectSubprojectOptions,
  ) {
    return detachProjectSubproject(
      this.#context,
      parentProjectId,
      childProjectId,
      options
    );
  };
  async attachProjectSubproject(
    parentProjectId: string,
    childProjectId: string,
    options?: AttachProjectSubprojectOptions,
  ) {
    return attachProjectSubproject(
      this.#context,
      parentProjectId,
      childProjectId,
      options
    );
  };
  async reconnectProjectSubproject(
    childProjectId: string,
    body: ProjectReconnectSubprojectApiRequest,
    options?: ReconnectProjectSubprojectOptions,
  ) {
    return reconnectProjectSubproject(
      this.#context,
      childProjectId,
      body,
      options
    );
  };
  async listAgents(options?: ListAgentsOptions) {
    return listAgents(this.#context, options);
  };
  async saveAgent(body: AgentEditorModel, options?: SaveAgentOptions) {
    return saveAgent(this.#context, body, options);
  };
  async getAgentBootstrap(options?: GetAgentBootstrapOptions) {
    return getAgentBootstrap(this.#context, options);
  };
  async deleteAgent(agentId: string, options?: DeleteAgentOptions) {
    return deleteAgent(this.#context, agentId, options);
  };
  async getAgentEditor(agentId: string, options?: GetAgentEditorOptions) {
    return getAgentEditor(this.#context, agentId, options);
  };
  async cloneAgent(
    agentId: string,
    body: AgentCloneApiRequest,
    options?: CloneAgentOptions,
  ) {
    return cloneAgent(this.#context, agentId, body, options);
  };
  async convertAgentToTemplate(
    agentId: string,
    body: AgentTemplateConversionApiRequest,
    options?: ConvertAgentToTemplateOptions,
  ) {
    return convertAgentToTemplate(this.#context, agentId, body, options);
  };
  async exportAgent(agentId: string, options?: ExportAgentOptions) {
    return exportAgent(this.#context, agentId, options);
  };
  async importAgent(body: AgentImportApiRequest, options?: ImportAgentOptions) {
    return importAgent(this.#context, body, options);
  };
  async importAgentPackage(
    body: AgentPackageImportApiForm,
    options?: ImportAgentPackageOptions,
  ) {
    return importAgentPackage(this.#context, body, options);
  };
  async archiveAgentByExternalKey(
    externalNamespace: string,
    key: string,
    options?: ArchiveAgentByExternalKeyOptions,
  ) {
    return archiveAgentByExternalKey(
      this.#context,
      externalNamespace,
      key,
      options
    );
  };
  async getAgentByExternalKey(
    externalNamespace: string,
    key: string,
    options?: GetAgentByExternalKeyOptions,
  ) {
    return getAgentByExternalKey(
      this.#context,
      externalNamespace,
      key,
      options
    );
  };
  async provisionAgentByExternalKey(
    externalNamespace: string,
    key: string,
    body: AgentEditorModel,
    options?: ProvisionAgentByExternalKeyOptions,
  ) {
    return provisionAgentByExternalKey(
      this.#context,
      externalNamespace,
      key,
      body,
      options
    );
  };
  async listAgentTeams(options?: ListAgentTeamsOptions) {
    return listAgentTeams(this.#context, options);
  };
  async saveAgentTeam(
    body: AgentTeamEditorModel,
    options?: SaveAgentTeamOptions,
  ) {
    return saveAgentTeam(this.#context, body, options);
  };
  async deleteAgentTeam(teamId: string, options?: DeleteAgentTeamOptions) {
    return deleteAgentTeam(this.#context, teamId, options);
  };
  async getAgentTeam(teamId: string, options?: GetAgentTeamOptions) {
    return getAgentTeam(this.#context, teamId, options);
  };
  async updateAgentTeam(
    teamId: string,
    body: AgentTeamEditorModel,
    options?: UpdateAgentTeamOptions,
  ) {
    return updateAgentTeam(this.#context, teamId, body, options);
  };
  async getAgentTeamEditor(
    teamId: string,
    options?: GetAgentTeamEditorOptions,
  ) {
    return getAgentTeamEditor(this.#context, teamId, options);
  };
  async listAgentTeamAgents(
    teamId: string,
    options?: ListAgentTeamAgentsOptions,
  ) {
    return listAgentTeamAgents(this.#context, teamId, options);
  };
  async updateAgentTeamMembers(
    teamId: string,
    body: AgentTeamMembersApiRequest,
    options?: UpdateAgentTeamMembersOptions,
  ) {
    return updateAgentTeamMembers(this.#context, teamId, body, options);
  };
  async replaceAgentTeamMembers(
    teamId: string,
    body: AgentTeamMembersApiRequest,
    options?: ReplaceAgentTeamMembersOptions,
  ) {
    return replaceAgentTeamMembers(this.#context, teamId, body, options);
  };
  async listAgentProviders(options?: ListAgentProvidersOptions) {
    return listAgentProviders(this.#context, options);
  };
  async saveAgentProvider(
    body: ProviderProfileEditorModel,
    options?: SaveAgentProviderOptions,
  ) {
    return saveAgentProvider(this.#context, body, options);
  };
  async getAgentProviderEditor(
    providerId: string,
    options?: GetAgentProviderEditorOptions,
  ) {
    return getAgentProviderEditor(this.#context, providerId, options);
  };
  async deleteAgentProvider(
    providerId: string,
    options?: DeleteAgentProviderOptions,
  ) {
    return deleteAgentProvider(this.#context, providerId, options);
  };
  async testAgentProvider(
    providerId: string,
    options?: TestAgentProviderOptions,
  ) {
    return testAgentProvider(this.#context, providerId, options);
  };
  async runAgentProviderTestChat(
    providerId: string,
    body: ProviderTestChatRequest,
    options?: RunAgentProviderTestChatOptions,
  ) {
    return runAgentProviderTestChat(this.#context, providerId, body, options);
  };
  async createAgentProviderModelMaintenance(
    providerId: string,
    body: ProviderModelMaintenanceEditorRequest,
    options?: CreateAgentProviderModelMaintenanceOptions,
  ) {
    return createAgentProviderModelMaintenance(
      this.#context,
      providerId,
      body,
      options
    );
  };
  async listAgentCapabilities(options?: ListAgentCapabilitiesOptions) {
    return listAgentCapabilities(this.#context, options);
  };
  async saveAgentCapability(
    body: CapabilityEditorModel,
    options?: SaveAgentCapabilityOptions,
  ) {
    return saveAgentCapability(this.#context, body, options);
  };
  async getAgentCapabilityEditor(
    capabilityId: string,
    options?: GetAgentCapabilityEditorOptions,
  ) {
    return getAgentCapabilityEditor(this.#context, capabilityId, options);
  };
  async deleteAgentCapability(
    capabilityId: string,
    options?: DeleteAgentCapabilityOptions,
  ) {
    return deleteAgentCapability(this.#context, capabilityId, options);
  };
  async verifyAgentCapability(
    agentId: string,
    capabilityId: string,
    options?: VerifyAgentCapabilityOptions,
  ) {
    return verifyAgentCapability(this.#context, agentId, capabilityId, options);
  };
  async testAgentToolCapabilitySetup(
    body: CapabilityToolSetupTestRequest,
    options?: TestAgentToolCapabilitySetupOptions,
  ) {
    return testAgentToolCapabilitySetup(this.#context, body, options);
  };
  async testAgentMcpCapabilitySetup(
    body: CapabilityMcpSetupTestRequest,
    options?: TestAgentMcpCapabilitySetupOptions,
  ) {
    return testAgentMcpCapabilitySetup(this.#context, body, options);
  };
  async previewAgentCapabilityAccess(
    body: CapabilityAccessPreviewRequest,
    options?: PreviewAgentCapabilityAccessOptions,
  ) {
    return previewAgentCapabilityAccess(this.#context, body, options);
  };
  async listAgentMemory(agentId: string, options?: ListAgentMemoryOptions) {
    return listAgentMemory(this.#context, agentId, options);
  };
  async saveAgentMemory(
    body: MemoryEditorModel,
    options?: SaveAgentMemoryOptions,
  ) {
    return saveAgentMemory(this.#context, body, options);
  };
  async deleteAgentMemory(
    memoryId: string,
    options?: DeleteAgentMemoryOptions,
  ) {
    return deleteAgentMemory(this.#context, memoryId, options);
  };
  async listAgentChatSessions(
    agentId: string,
    options?: ListAgentChatSessionsOptions,
  ) {
    return listAgentChatSessions(this.#context, agentId, options);
  };
  async createAgentChatSession(
    agentId: string,
    options?: CreateAgentChatSessionOptions,
  ) {
    return createAgentChatSession(this.#context, agentId, options);
  };
  async renameAgentChatSession(
    agentId: string,
    chatSessionId: string,
    body: ChatSessionRenameApiRequest,
    options?: RenameAgentChatSessionOptions,
  ) {
    return renameAgentChatSession(
      this.#context,
      agentId,
      chatSessionId,
      body,
      options
    );
  };
  async getAgentChatWorkspace(
    agentId: string,
    options?: GetAgentChatWorkspaceOptions,
  ) {
    return getAgentChatWorkspace(this.#context, agentId, options);
  };
  async sendAgentChatMessage(
    agentId: string,
    body: AgentChatApiRequest,
    options?: SendAgentChatMessageOptions,
  ) {
    return sendAgentChatMessage(this.#context, agentId, body, options);
  };
  async respondToAgentExecutionApprovals(
    executionRunId: string,
    body: PendingApprovalApiRequest,
    options?: RespondToAgentExecutionApprovalsOptions,
  ) {
    return respondToAgentExecutionApprovals(
      this.#context,
      executionRunId,
      body,
      options
    );
  };
  async listAgentExecutionRuns(options?: ListAgentExecutionRunsOptions) {
    return listAgentExecutionRuns(this.#context, options);
  };
  async startAgentExecutionRun(
    body: AgentExecutionRunApiRequest,
    options?: StartAgentExecutionRunOptions,
  ) {
    return startAgentExecutionRun(this.#context, body, options);
  };
  async listAgentScopedExecutionRuns(
    agentId: string,
    options?: ListAgentScopedExecutionRunsOptions,
  ) {
    return listAgentScopedExecutionRuns(this.#context, agentId, options);
  };
  async startAgentScopedExecutionRun(
    agentId: string,
    body: AgentExecutionRunStartApiRequest,
    options?: StartAgentScopedExecutionRunOptions,
  ) {
    return startAgentScopedExecutionRun(this.#context, agentId, body, options);
  };
  async getAgentExecutionRunDetail(
    executionRunId: string,
    options?: GetAgentExecutionRunDetailOptions,
  ) {
    return getAgentExecutionRunDetail(this.#context, executionRunId, options);
  };
  async getAgentScopedExecutionRunDetail(
    agentId: string,
    executionRunId: string,
    options?: GetAgentScopedExecutionRunDetailOptions,
  ) {
    return getAgentScopedExecutionRunDetail(
      this.#context,
      agentId,
      executionRunId,
      options
    );
  };
  async listAgentExecutionArtifacts(
    executionRunId: string,
    options?: ListAgentExecutionArtifactsOptions,
  ) {
    return listAgentExecutionArtifacts(this.#context, executionRunId, options);
  };
  async listAgentScopedExecutionArtifacts(
    agentId: string,
    executionRunId: string,
    options?: ListAgentScopedExecutionArtifactsOptions,
  ) {
    return listAgentScopedExecutionArtifacts(
      this.#context,
      agentId,
      executionRunId,
      options
    );
  };
  async listAgentExecutionCheckpoints(
    executionRunId: string,
    options?: ListAgentExecutionCheckpointsOptions,
  ) {
    return listAgentExecutionCheckpoints(
      this.#context,
      executionRunId,
      options
    );
  };
  async listAgentScopedExecutionCheckpoints(
    agentId: string,
    executionRunId: string,
    options?: ListAgentScopedExecutionCheckpointsOptions,
  ) {
    return listAgentScopedExecutionCheckpoints(
      this.#context,
      agentId,
      executionRunId,
      options
    );
  };
  async listAgentExecutionToolReceipts(
    executionRunId: string,
    options?: ListAgentExecutionToolReceiptsOptions,
  ) {
    return listAgentExecutionToolReceipts(
      this.#context,
      executionRunId,
      options
    );
  };
  async listAgentScopedExecutionToolReceipts(
    agentId: string,
    executionRunId: string,
    options?: ListAgentScopedExecutionToolReceiptsOptions,
  ) {
    return listAgentScopedExecutionToolReceipts(
      this.#context,
      agentId,
      executionRunId,
      options
    );
  };
  async listAgentScopedExecutionLog(
    agentId: string,
    executionRunId: string,
    options?: ListAgentScopedExecutionLogOptions,
  ) {
    return listAgentScopedExecutionLog(
      this.#context,
      agentId,
      executionRunId,
      options
    );
  };
  async listAgentScopedExecutionMetrics(
    agentId: string,
    executionRunId: string,
    options?: ListAgentScopedExecutionMetricsOptions,
  ) {
    return listAgentScopedExecutionMetrics(
      this.#context,
      agentId,
      executionRunId,
      options
    );
  };
  async listAgentScopedExecutionApprovals(
    agentId: string,
    executionRunId: string,
    options?: ListAgentScopedExecutionApprovalsOptions,
  ) {
    return listAgentScopedExecutionApprovals(
      this.#context,
      agentId,
      executionRunId,
      options
    );
  };
  async listAgentExecutionApprovals(
    executionRunId: string,
    options?: ListAgentExecutionApprovalsOptions,
  ) {
    return listAgentExecutionApprovals(this.#context, executionRunId, options);
  };
  async listAgentExecutionLog(
    agentId: string,
    options?: ListAgentExecutionLogOptions,
  ) {
    return listAgentExecutionLog(this.#context, agentId, options);
  };
  async getAgentRuntimeSnapshot(
    agentId: string,
    options?: GetAgentRuntimeSnapshotOptions,
  ) {
    return getAgentRuntimeSnapshot(this.#context, agentId, options);
  };
  async listAgentMetrics(agentId: string, options?: ListAgentMetricsOptions) {
    return listAgentMetrics(this.#context, agentId, options);
  };
  async streamAgentExecutionOperationEvents(
    operationId: string,
    options?: StreamAgentExecutionOperationEventsOptions,
  ) {
    return streamAgentExecutionOperationEvents(
      this.#context,
      operationId,
      options
    );
  };
  async streamAgentChatMessage(
    agentId: string,
    body: AgentChatApiRequest,
    options?: StreamAgentChatMessageOptions,
  ) {
    return streamAgentChatMessage(this.#context, agentId, body, options);
  };
  async streamAgentExecutionRun(
    body: AgentExecutionRunApiRequest,
    options?: StreamAgentExecutionRunOptions,
  ) {
    return streamAgentExecutionRun(this.#context, body, options);
  };
  async streamAgentScopedExecutionRun(
    agentId: string,
    body: AgentExecutionRunStartApiRequest,
    options?: StreamAgentScopedExecutionRunOptions,
  ) {
    return streamAgentScopedExecutionRun(this.#context, agentId, body, options);
  };
  async streamAgentExecutionApprovalResponse(
    executionRunId: string,
    body: PendingApprovalApiRequest,
    options?: StreamAgentExecutionApprovalResponseOptions,
  ) {
    return streamAgentExecutionApprovalResponse(
      this.#context,
      executionRunId,
      body,
      options
    );
  };
  async streamAgentProviderChatCompletion(
    providerId: string,
    body: ProviderChatCompletionApiRequest,
    options?: StreamAgentProviderChatCompletionOptions,
  ) {
    return streamAgentProviderChatCompletion(
      this.#context,
      providerId,
      body,
      options
    );
  };
  async stageAgentImageAttachment(
    body: AgentImageAttachmentUploadRequest,
    options?: StageAgentImageAttachmentOptions,
  ) {
    return stageAgentImageAttachment(this.#context, body, options);
  };
  async createAgentRecruitingInterview(
    body: CreateAgentRecruitingInterviewCommand,
    options?: CreateAgentRecruitingInterviewOptions,
  ) {
    return createAgentRecruitingInterview(this.#context, body, options);
  };
  async appendAgentRecruitingAttempt(
    interviewId: string,
    body: AppendAgentRecruitingAttemptCommand,
    options?: AppendAgentRecruitingAttemptOptions,
  ) {
    return appendAgentRecruitingAttempt(
      this.#context,
      interviewId,
      body,
      options
    );
  };
  async appendAgentRecruitingHumanReview(
    interviewId: string,
    body: AppendAgentRecruitingReviewCommand,
    options?: AppendAgentRecruitingHumanReviewOptions,
  ) {
    return appendAgentRecruitingHumanReview(
      this.#context,
      interviewId,
      body,
      options
    );
  };
  async getAgentRecruitingInterview(
    interviewId: string,
    options?: GetAgentRecruitingInterviewOptions,
  ) {
    return getAgentRecruitingInterview(this.#context, interviewId, options);
  };
  async listAgentRecruitingCandidateInterviews(
    candidateAgentId: string,
    options?: ListAgentRecruitingCandidateInterviewsOptions,
  ) {
    return listAgentRecruitingCandidateInterviews(
      this.#context,
      candidateAgentId,
      options
    );
  };
  async getAgentRecruitingCandidateReadiness(
    agentId: string,
    options?: GetAgentRecruitingCandidateReadinessOptions,
  ) {
    return getAgentRecruitingCandidateReadiness(
      this.#context,
      agentId,
      options
    );
  };
  async searchPromptGalleryItems(options?: SearchPromptGalleryItemsOptions) {
    return searchPromptGalleryItems(this.#context, options);
  };
  async savePromptGalleryDraft(
    body: null | PromptGalleryDraft,
    options?: SavePromptGalleryDraftOptions,
  ) {
    return savePromptGalleryDraft(this.#context, body, options);
  };
  async getPromptGalleryItem(
    promptId: string,
    options?: GetPromptGalleryItemOptions,
  ) {
    return getPromptGalleryItem(this.#context, promptId, options);
  };
  async createPromptGalleryVersion(
    promptId: string,
    body: null | PromptVersionCreateRequest,
    options?: CreatePromptGalleryVersionOptions,
  ) {
    return createPromptGalleryVersion(this.#context, promptId, body, options);
  };
  async getPromptGalleryVersion(
    promptId: string,
    versionId: string,
    options?: GetPromptGalleryVersionOptions,
  ) {
    return getPromptGalleryVersion(this.#context, promptId, versionId, options);
  };
  async archivePromptGalleryItem(
    promptId: string,
    body: null | PromptGalleryArchiveRequest,
    options?: ArchivePromptGalleryItemOptions,
  ) {
    return archivePromptGalleryItem(this.#context, promptId, body, options);
  };
  async setPromptGalleryFavorite(
    promptId: string,
    body: null | PromptGalleryFavoriteRequest,
    options?: SetPromptGalleryFavoriteOptions,
  ) {
    return setPromptGalleryFavorite(this.#context, promptId, body, options);
  };
  async evaluatePromptGalleryCompatibility(
    body: null | PromptGalleryCompatibilityApiRequest,
    options?: EvaluatePromptGalleryCompatibilityOptions,
  ) {
    return evaluatePromptGalleryCompatibility(this.#context, body, options);
  };
  async setPromptGalleryWarningSuppression(
    body: null | PromptGalleryWarningSuppressionApiRequest,
    options?: SetPromptGalleryWarningSuppressionOptions,
  ) {
    return setPromptGalleryWarningSuppression(this.#context, body, options);
  };
  async getPromptGalleryProjectionStatus(
    options?: GetPromptGalleryProjectionStatusOptions,
  ) {
    return getPromptGalleryProjectionStatus(this.#context, options);
  };
  async rebuildPromptGalleryProjection(
    options?: RebuildPromptGalleryProjectionOptions,
  ) {
    return rebuildPromptGalleryProjection(this.#context, options);
  };
  async startWorkflowDefinitionRun(
    workflowId: string,
    body: WorkflowRunStartApiRequest,
    options?: StartWorkflowDefinitionRunOptions,
  ) {
    return startWorkflowDefinitionRun(this.#context, workflowId, body, options);
  };
  async startWorkflowRun(
    body: WorkflowRunStartApiRequest,
    options?: StartWorkflowRunOptions,
  ) {
    return startWorkflowRun(this.#context, body, options);
  };
  async cancelWorkflowRun(runId: string, options?: CancelWorkflowRunOptions) {
    return cancelWorkflowRun(this.#context, runId, options);
  };
  async respondToWorkflowExternalRequest(
    requestId: string,
    body: WorkflowExternalRequestResponseApiRequest,
    options?: RespondToWorkflowExternalRequestOptions,
  ) {
    return respondToWorkflowExternalRequest(
      this.#context,
      requestId,
      body,
      options
    );
  };
  async getWorkflowRunByIdempotencyKey(
    key: string,
    options?: GetWorkflowRunByIdempotencyKeyOptions,
  ) {
    return getWorkflowRunByIdempotencyKey(this.#context, key, options);
  };
  async listWorkflowDefinitions(options?: ListWorkflowDefinitionsOptions) {
    return listWorkflowDefinitions(this.#context, options);
  };
  async saveWorkflowDefinition(
    body: WorkflowDefinitionSaveRequest,
    options?: SaveWorkflowDefinitionOptions,
  ) {
    return saveWorkflowDefinition(this.#context, body, options);
  };
  async getWorkflowDefinitionByTemplateKey(
    templateKey: string,
    options?: GetWorkflowDefinitionByTemplateKeyOptions,
  ) {
    return getWorkflowDefinitionByTemplateKey(
      this.#context,
      templateKey,
      options
    );
  };
  async getWorkflowDefinitionByExternalKey(
    externalNamespace: string,
    externalKey: string,
    options?: GetWorkflowDefinitionByExternalKeyOptions,
  ) {
    return getWorkflowDefinitionByExternalKey(
      this.#context,
      externalNamespace,
      externalKey,
      options
    );
  };
  async getWorkflowsApiContract(options?: GetWorkflowsApiContractOptions) {
    return getWorkflowsApiContract(this.#context, options);
  };
  async getWorkflowSettings(options?: GetWorkflowSettingsOptions) {
    return getWorkflowSettings(this.#context, options);
  };
  async saveWorkflowSettings(
    body: WorkflowSettings,
    options?: SaveWorkflowSettingsOptions,
  ) {
    return saveWorkflowSettings(this.#context, body, options);
  };
  async listWorkflowRuntimeBackends(
    options?: ListWorkflowRuntimeBackendsOptions,
  ) {
    return listWorkflowRuntimeBackends(this.#context, options);
  };
  async listWorkflowExecutorCatalog(
    options?: ListWorkflowExecutorCatalogOptions,
  ) {
    return listWorkflowExecutorCatalog(this.#context, options);
  };
  async listWorkflowTemplates(options?: ListWorkflowTemplatesOptions) {
    return listWorkflowTemplates(this.#context, options);
  };
  async addWorkflowTemplateToDrafts(
    templateKey: string,
    options?: AddWorkflowTemplateToDraftsOptions,
  ) {
    return addWorkflowTemplateToDrafts(this.#context, templateKey, options);
  };
  async deleteWorkflowDefinition(
    workflowId: string,
    options?: DeleteWorkflowDefinitionOptions,
  ) {
    return deleteWorkflowDefinition(this.#context, workflowId, options);
  };
  async getWorkflowDefinition(
    workflowId: string,
    options?: GetWorkflowDefinitionOptions,
  ) {
    return getWorkflowDefinition(this.#context, workflowId, options);
  };
  async getWorkflowDefinitionVersion(
    workflowId: string,
    versionId: string,
    options?: GetWorkflowDefinitionVersionOptions,
  ) {
    return getWorkflowDefinitionVersion(
      this.#context,
      workflowId,
      versionId,
      options
    );
  };
  async exportWorkflowDefinition(
    workflowId: string,
    options?: ExportWorkflowDefinitionOptions,
  ) {
    return exportWorkflowDefinition(this.#context, workflowId, options);
  };
  async importWorkflowDefinition(
    body: WorkflowDefinitionImportRequest,
    options?: ImportWorkflowDefinitionOptions,
  ) {
    return importWorkflowDefinition(this.#context, body, options);
  };
  async publishWorkflowDefinition(
    workflowId: string,
    options?: PublishWorkflowDefinitionOptions,
  ) {
    return publishWorkflowDefinition(this.#context, workflowId, options);
  };
  async suspendWorkflowDefinition(
    workflowId: string,
    options?: SuspendWorkflowDefinitionOptions,
  ) {
    return suspendWorkflowDefinition(this.#context, workflowId, options);
  };
  async archiveWorkflowDefinition(
    workflowId: string,
    options?: ArchiveWorkflowDefinitionOptions,
  ) {
    return archiveWorkflowDefinition(this.#context, workflowId, options);
  };
  async validateSavedWorkflowDefinition(
    workflowId: string,
    options?: ValidateSavedWorkflowDefinitionOptions,
  ) {
    return validateSavedWorkflowDefinition(this.#context, workflowId, options);
  };
  async validateDraftWorkflowDefinition(
    body: WorkflowDefinition,
    options?: ValidateDraftWorkflowDefinitionOptions,
  ) {
    return validateDraftWorkflowDefinition(this.#context, body, options);
  };
  async listWorkflowProviderOptions(
    options?: ListWorkflowProviderOptionsOptions,
  ) {
    return listWorkflowProviderOptions(this.#context, options);
  };
  async listWorkflowComponents(options?: ListWorkflowComponentsOptions) {
    return listWorkflowComponents(this.#context, options);
  };
  async saveWorkflowComponent(
    body: LlmCallComponentSaveRequest,
    options?: SaveWorkflowComponentOptions,
  ) {
    return saveWorkflowComponent(this.#context, body, options);
  };
  async deleteWorkflowComponent(
    componentId: string,
    options?: DeleteWorkflowComponentOptions,
  ) {
    return deleteWorkflowComponent(this.#context, componentId, options);
  };
  async getWorkflowComponent(
    componentId: string,
    options?: GetWorkflowComponentOptions,
  ) {
    return getWorkflowComponent(this.#context, componentId, options);
  };
  async runWorkflowTest(
    body: WorkflowTestRunRequest,
    options?: RunWorkflowTestOptions,
  ) {
    return runWorkflowTest(this.#context, body, options);
  };
  async listWorkflowRuns(options?: ListWorkflowRunsOptions) {
    return listWorkflowRuns(this.#context, options);
  };
  async listWorkflowRunPage(options?: ListWorkflowRunPageOptions) {
    return listWorkflowRunPage(this.#context, options);
  };
  async getWorkflowRun(runId: string, options?: GetWorkflowRunOptions) {
    return getWorkflowRun(this.#context, runId, options);
  };
  async getWorkflowRunDetail(
    runId: string,
    options?: GetWorkflowRunDetailOptions,
  ) {
    return getWorkflowRunDetail(this.#context, runId, options);
  };
  async listWorkflowRunEvents(
    runId: string,
    options?: ListWorkflowRunEventsOptions,
  ) {
    return listWorkflowRunEvents(this.#context, runId, options);
  };
  async listWorkflowRunEventPage(
    runId: string,
    options?: ListWorkflowRunEventPageOptions,
  ) {
    return listWorkflowRunEventPage(this.#context, runId, options);
  };
  async listWorkflowRunArtifacts(
    runId: string,
    options?: ListWorkflowRunArtifactsOptions,
  ) {
    return listWorkflowRunArtifacts(this.#context, runId, options);
  };
  async getWorkflowRunArtifactContent(
    runId: string,
    artifactId: string,
    options?: GetWorkflowRunArtifactContentOptions,
  ) {
    return getWorkflowRunArtifactContent(
      this.#context,
      runId,
      artifactId,
      options
    );
  };
  async listWorkflowRunCheckpoints(
    runId: string,
    options?: ListWorkflowRunCheckpointsOptions,
  ) {
    return listWorkflowRunCheckpoints(this.#context, runId, options);
  };
  async listWorkflowRunPendingRequests(
    runId: string,
    options?: ListWorkflowRunPendingRequestsOptions,
  ) {
    return listWorkflowRunPendingRequests(this.#context, runId, options);
  };
  async getWorkflowAnalytics(options?: GetWorkflowAnalyticsOptions) {
    return getWorkflowAnalytics(this.#context, options);
  };
  async streamWorkflowRunEvents(options?: StreamWorkflowRunEventsOptions) {
    return streamWorkflowRunEvents(this.#context, options);
  };
  async streamWorkflowRunEventsByRun(
    runId: string,
    options?: StreamWorkflowRunEventsByRunOptions,
  ) {
    return streamWorkflowRunEventsByRun(this.#context, runId, options);
  };
  async listProcessRunRecords(options?: ListProcessRunRecordsOptions) {
    return listProcessRunRecords(this.#context, options);
  };
  async getProcessRunRecordAnalytics(
    options?: GetProcessRunRecordAnalyticsOptions,
  ) {
    return getProcessRunRecordAnalytics(this.#context, options);
  };
  async getProcessRunRecordSummary(
    runId: string,
    options?: GetProcessRunRecordSummaryOptions,
  ) {
    return getProcessRunRecordSummary(this.#context, runId, options);
  };
  async getProcessRunRecordGraph(
    runId: string,
    options?: GetProcessRunRecordGraphOptions,
  ) {
    return getProcessRunRecordGraph(this.#context, runId, options);
  };
  async getProcessesApiContract(options?: GetProcessesApiContractOptions) {
    return getProcessesApiContract(this.#context, options);
  };
  async checkProcessLaunch(
    body: ProcessLaunchApiRequest,
    options?: CheckProcessLaunchOptions,
  ) {
    return checkProcessLaunch(this.#context, body, options);
  };
  async launchProcess(
    body: ProcessLaunchApiRequest,
    options?: LaunchProcessOptions,
  ) {
    return launchProcess(this.#context, body, options);
  };
  async dispatchProcessRun(
    runId: string,
    body: ProcessDispatchApiRequest,
    options?: DispatchProcessRunOptions,
  ) {
    return dispatchProcessRun(this.#context, runId, body, options);
  };
  async cancelProcessRun(
    runId: string,
    body: ProcessRuntimeCancelApiRequest,
    options?: CancelProcessRunOptions,
  ) {
    return cancelProcessRun(this.#context, runId, body, options);
  };
  async requestProcessStepRework(
    runId: string,
    stepInstanceId: string,
    body: ProcessRuntimeReworkApiRequest,
    options?: RequestProcessStepReworkOptions,
  ) {
    return requestProcessStepRework(
      this.#context,
      runId,
      stepInstanceId,
      body,
      options
    );
  };
  async listLiveProcesses(options?: ListLiveProcessesOptions) {
    return listLiveProcesses(this.#context, options);
  };
  async getProcessRun(runId: string, options?: GetProcessRunOptions) {
    return getProcessRun(this.#context, runId, options);
  };
  async getProcessRunHistory(
    runId: string,
    options?: GetProcessRunHistoryOptions,
  ) {
    return getProcessRunHistory(this.#context, runId, options);
  };
  async listProcessDefinitions(options?: ListProcessDefinitionsOptions) {
    return listProcessDefinitions(this.#context, options);
  };
  async getProcessDefinition(
    definitionKey: string,
    options?: GetProcessDefinitionOptions,
  ) {
    return getProcessDefinition(this.#context, definitionKey, options);
  };
  async getProcessDefinitionRoles(
    definitionKey: string,
    options?: GetProcessDefinitionRolesOptions,
  ) {
    return getProcessDefinitionRoles(this.#context, definitionKey, options);
  };
  async getProcessDefinitionSteps(
    definitionKey: string,
    options?: GetProcessDefinitionStepsOptions,
  ) {
    return getProcessDefinitionSteps(this.#context, definitionKey, options);
  };
  async streamProcessRunEvents(options?: StreamProcessRunEventsOptions) {
    return streamProcessRunEvents(this.#context, options);
  };
  async streamProcessRunEventsByRun(
    runId: string,
    options?: StreamProcessRunEventsByRunOptions,
  ) {
    return streamProcessRunEventsByRun(this.#context, runId, options);
  };
  async listMemoryProviders(options?: ListMemoryProvidersOptions) {
    return listMemoryProviders(this.#context, options);
  };
  async getMemoryProvider(
    providerId: string,
    options?: GetMemoryProviderOptions,
  ) {
    return getMemoryProvider(this.#context, providerId, options);
  };
  async upsertMemoryProvider(
    providerId: string,
    body: MemoryProviderProfileApiRequest,
    options?: UpsertMemoryProviderOptions,
  ) {
    return upsertMemoryProvider(this.#context, providerId, body, options);
  };
  async queryMemoryProvider(
    providerId: string,
    body: MemoryProviderQueryApiRequest,
    options?: QueryMemoryProviderOptions,
  ) {
    return queryMemoryProvider(this.#context, providerId, body, options);
  };
  async getMemoryProviderOperation(
    operationId: string,
    options?: GetMemoryProviderOperationOptions,
  ) {
    return getMemoryProviderOperation(this.#context, operationId, options);
  };
  async listPluginCatalog(options?: ListPluginCatalogOptions) {
    return listPluginCatalog(this.#context, options);
  };
  async listPluginPackageCatalog(options?: ListPluginPackageCatalogOptions) {
    return listPluginPackageCatalog(this.#context, options);
  };
  async getPluginPackageIcon(
    packageId: string,
    options?: GetPluginPackageIconOptions,
  ) {
    return getPluginPackageIcon(this.#context, packageId, options);
  };
  async listPluginLogs(options?: ListPluginLogsOptions) {
    return listPluginLogs(this.#context, options);
  };
  async installPluginPackageFromCatalog(
    packageId: string,
    body: PluginPackageInstallRequest,
    options?: InstallPluginPackageFromCatalogOptions,
  ) {
    return installPluginPackageFromCatalog(
      this.#context,
      packageId,
      body,
      options
    );
  };
  async uploadPluginPackage(
    body: {
        file: IFormFile;
      },
    options?: UploadPluginPackageOptions,
  ) {
    return uploadPluginPackage(this.#context, body, options);
  };
  async getPluginRuntimeRestartStatus(
    options?: GetPluginRuntimeRestartStatusOptions,
  ) {
    return getPluginRuntimeRestartStatus(this.#context, options);
  };
  async restartPluginRuntime(
    body: PluginRuntimeRestartRequest,
    options?: RestartPluginRuntimeOptions,
  ) {
    return restartPluginRuntime(this.#context, body, options);
  };
  async installPlugin(
    pluginId: string,
    body: PluginInstallRequest,
    options?: InstallPluginOptions,
  ) {
    return installPlugin(this.#context, pluginId, body, options);
  };
  async enablePlugin(
    pluginId: string,
    body: PluginInstallationUpdateRequest,
    options?: EnablePluginOptions,
  ) {
    return enablePlugin(this.#context, pluginId, body, options);
  };
  async disablePlugin(
    pluginId: string,
    body: PluginInstallationUpdateRequest,
    options?: DisablePluginOptions,
  ) {
    return disablePlugin(this.#context, pluginId, body, options);
  };
  async getPluginSettings(
    pluginId: string,
    options?: GetPluginSettingsOptions,
  ) {
    return getPluginSettings(this.#context, pluginId, options);
  };
  async listPluginGrants(pluginId: string, options?: ListPluginGrantsOptions) {
    return listPluginGrants(this.#context, pluginId, options);
  };
  async updatePluginGrant(
    pluginId: string,
    body: PluginGrantUpdateRequest,
    options?: UpdatePluginGrantOptions,
  ) {
    return updatePluginGrant(this.#context, pluginId, body, options);
  };
  async listPluginConnections(
    pluginId: string,
    options?: ListPluginConnectionsOptions,
  ) {
    return listPluginConnections(this.#context, pluginId, options);
  };
  async savePluginConnection(
    pluginId: string,
    body: PluginConnectionSaveRequest,
    options?: SavePluginConnectionOptions,
  ) {
    return savePluginConnection(this.#context, pluginId, body, options);
  };
  async listPluginOAuthStatuses(
    pluginId: string,
    options?: ListPluginOAuthStatusesOptions,
  ) {
    return listPluginOAuthStatuses(this.#context, pluginId, options);
  };
  async startPluginOAuth(
    pluginId: string,
    body: PluginOAuthStartRequest,
    options?: StartPluginOAuthOptions,
  ) {
    return startPluginOAuth(this.#context, pluginId, body, options);
  };
  async disconnectPluginOAuth(
    pluginId: string,
    connectionId: string,
    options?: DisconnectPluginOAuthOptions,
  ) {
    return disconnectPluginOAuth(
      this.#context,
      pluginId,
      connectionId,
      options
    );
  };
  async completePluginOAuthCallback(
    options?: CompletePluginOAuthCallbackOptions,
  ) {
    return completePluginOAuthCallback(this.#context, options);
  };
  async listCrmHrParties(options?: ListCrmHrPartiesOptions) {
    return listCrmHrParties(this.#context, options);
  };
  async createCrmHrParty(
    body: PartyCreateApiRequest,
    options?: CreateCrmHrPartyOptions,
  ) {
    return createCrmHrParty(this.#context, body, options);
  };
  async getCrmHrParty(partyId: string, options?: GetCrmHrPartyOptions) {
    return getCrmHrParty(this.#context, partyId, options);
  };
  async listCrmHrPartyRelationships(
    partyId: string,
    options?: ListCrmHrPartyRelationshipsOptions,
  ) {
    return listCrmHrPartyRelationships(this.#context, partyId, options);
  };
  async replaceCrmHrPartyRelationships(
    partyId: string,
    body: PartyRelationshipsReplaceApiRequest,
    options?: ReplaceCrmHrPartyRelationshipsOptions,
  ) {
    return replaceCrmHrPartyRelationships(
      this.#context,
      partyId,
      body,
      options
    );
  };
  async listCrmHrWorkforce(options?: ListCrmHrWorkforceOptions) {
    return listCrmHrWorkforce(this.#context, options);
  };
  async getCrmHrWorkforceWorkspace(
    partyId: string,
    options?: GetCrmHrWorkforceWorkspaceOptions,
  ) {
    return getCrmHrWorkforceWorkspace(this.#context, partyId, options);
  };
  async saveCrmHrWorkforceProfile(
    body: WorkforceProfileSaveApiRequest,
    options?: SaveCrmHrWorkforceProfileOptions,
  ) {
    return saveCrmHrWorkforceProfile(this.#context, body, options);
  };
  async listCrmHrSkillDefinitions(options?: ListCrmHrSkillDefinitionsOptions) {
    return listCrmHrSkillDefinitions(this.#context, options);
  };
  async saveCrmHrSkillDefinition(
    body: SkillDefinitionSaveApiRequest,
    options?: SaveCrmHrSkillDefinitionOptions,
  ) {
    return saveCrmHrSkillDefinition(this.#context, body, options);
  };
  async saveCrmHrPartySkill(
    body: PartySkillSaveApiRequest,
    options?: SaveCrmHrPartySkillOptions,
  ) {
    return saveCrmHrPartySkill(this.#context, body, options);
  };
  async saveCrmHrCapacityBlock(
    body: CapacityBlockSaveApiRequest,
    options?: SaveCrmHrCapacityBlockOptions,
  ) {
    return saveCrmHrCapacityBlock(this.#context, body, options);
  };
  async listCrmHrRecruitmentApplications(
    options?: ListCrmHrRecruitmentApplicationsOptions,
  ) {
    return listCrmHrRecruitmentApplications(this.#context, options);
  };
  async saveCrmHrRecruitmentApplication(
    body: RecruitmentApplicationSaveApiRequest,
    options?: SaveCrmHrRecruitmentApplicationOptions,
  ) {
    return saveCrmHrRecruitmentApplication(this.#context, body, options);
  };
  async getCrmHrRecruitmentApplication(
    applicationId: string,
    options?: GetCrmHrRecruitmentApplicationOptions,
  ) {
    return getCrmHrRecruitmentApplication(
      this.#context,
      applicationId,
      options
    );
  };
  async saveCrmHrRecruitmentInterview(
    body: RecruitmentInterviewSaveApiRequest,
    options?: SaveCrmHrRecruitmentInterviewOptions,
  ) {
    return saveCrmHrRecruitmentInterview(this.#context, body, options);
  };
  async saveCrmHrLifecycleTask(
    body: LifecycleTaskSaveApiRequest,
    options?: SaveCrmHrLifecycleTaskOptions,
  ) {
    return saveCrmHrLifecycleTask(this.#context, body, options);
  };
  async saveCrmHrRecruitmentSupportAssignments(
    body: RecruitmentSupportAssignmentsSaveApiRequest,
    options?: SaveCrmHrRecruitmentSupportAssignmentsOptions,
  ) {
    return saveCrmHrRecruitmentSupportAssignments(this.#context, body, options);
  };
  async convertCrmHrRecruitmentCandidate(
    body: RecruitmentConversionApiRequest,
    options?: ConvertCrmHrRecruitmentCandidateOptions,
  ) {
    return convertCrmHrRecruitmentCandidate(this.#context, body, options);
  };
  async listLlmChatProviderOptions(
    options?: ListLlmChatProviderOptionsOptions,
  ) {
    return listLlmChatProviderOptions(this.#context, options);
  };
  async listLlmChatDefinitions(options?: ListLlmChatDefinitionsOptions) {
    return listLlmChatDefinitions(this.#context, options);
  };
  async createLlmChatDefinition(
    body: LlmChatDefinitionMutationApiRequest,
    options?: CreateLlmChatDefinitionOptions,
  ) {
    return createLlmChatDefinition(this.#context, body, options);
  };
  async getLlmChatDefinition(
    definitionId: string,
    options?: GetLlmChatDefinitionOptions,
  ) {
    return getLlmChatDefinition(this.#context, definitionId, options);
  };
  async updateLlmChatDefinition(
    definitionId: string,
    body: LlmChatDefinitionMutationApiRequest,
    options?: UpdateLlmChatDefinitionOptions,
  ) {
    return updateLlmChatDefinition(this.#context, definitionId, body, options);
  };
  async getLlmChatDefinitionEditor(
    definitionId: string,
    options?: GetLlmChatDefinitionEditorOptions,
  ) {
    return getLlmChatDefinitionEditor(this.#context, definitionId, options);
  };
  async activateLlmChatDefinition(
    definitionId: string,
    body: LlmChatExpectedConcurrencyApiRequest,
    options?: ActivateLlmChatDefinitionOptions,
  ) {
    return activateLlmChatDefinition(
      this.#context,
      definitionId,
      body,
      options
    );
  };
  async suspendLlmChatDefinition(
    definitionId: string,
    body: LlmChatExpectedConcurrencyApiRequest,
    options?: SuspendLlmChatDefinitionOptions,
  ) {
    return suspendLlmChatDefinition(this.#context, definitionId, body, options);
  };
  async archiveLlmChatDefinition(
    definitionId: string,
    body: LlmChatExpectedConcurrencyApiRequest,
    options?: ArchiveLlmChatDefinitionOptions,
  ) {
    return archiveLlmChatDefinition(this.#context, definitionId, body, options);
  };
  async createLlmChatConversation(
    definitionId: string,
    body: CreateLlmChatConversationApiRequest,
    options?: CreateLlmChatConversationOptions,
  ) {
    return createLlmChatConversation(
      this.#context,
      definitionId,
      body,
      options
    );
  };
  async listLlmChatConversations(options?: ListLlmChatConversationsOptions) {
    return listLlmChatConversations(this.#context, options);
  };
  async getLlmChatConversation(
    conversationId: string,
    options?: GetLlmChatConversationOptions,
  ) {
    return getLlmChatConversation(this.#context, conversationId, options);
  };
  async renameLlmChatConversation(
    conversationId: string,
    body: RenameLlmChatConversationApiRequest,
    options?: RenameLlmChatConversationOptions,
  ) {
    return renameLlmChatConversation(
      this.#context,
      conversationId,
      body,
      options
    );
  };
  async archiveLlmChatConversation(
    conversationId: string,
    body: LlmChatExpectedConcurrencyApiRequest,
    options?: ArchiveLlmChatConversationOptions,
  ) {
    return archiveLlmChatConversation(
      this.#context,
      conversationId,
      body,
      options
    );
  };
  async sendLlmChatTurn(
    conversationId: string,
    body: SendLlmChatTurnApiRequest,
    options?: SendLlmChatTurnOptions,
  ) {
    return sendLlmChatTurn(this.#context, conversationId, body, options);
  };
  async abandonLlmChatActiveTurn(
    conversationId: string,
    turnId: string,
    options?: AbandonLlmChatActiveTurnOptions,
  ) {
    return abandonLlmChatActiveTurn(
      this.#context,
      conversationId,
      turnId,
      options
    );
  };
  async getLlmChatOperation(
    operationId: string,
    options?: GetLlmChatOperationOptions,
  ) {
    return getLlmChatOperation(this.#context, operationId, options);
  };
  async streamLlmChatOperationEvents(
    operationId: string,
    options?: StreamLlmChatOperationEventsOptions,
  ) {
    return streamLlmChatOperationEvents(this.#context, operationId, options);
  };
  async cancelLlmChatOperation(
    operationId: string,
    options?: CancelLlmChatOperationOptions,
  ) {
    return cancelLlmChatOperation(this.#context, operationId, options);
  };
  async reconcileLlmChatOperation(
    operationId: string,
    options?: ReconcileLlmChatOperationOptions,
  ) {
    return reconcileLlmChatOperation(this.#context, operationId, options);
  }
}
