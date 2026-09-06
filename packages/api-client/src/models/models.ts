/**
 * A sequence of textual characters.
 */
export type String = string;
export interface PostgreSqlDevDatabaseProfileRequest {
  displayName: null | string;
  host: null | string;
  port: unknown;
  databaseName: null | string;
  username: null | string;
  password: null | string;
  adminDatabaseName: null | string;
  trustServerCertificate: null | boolean;
  workspaceRoot: null | string;
  activate: null | boolean;
}
/**
 * Boolean with `true` and `false` values.
 */
export type Boolean = boolean;
export interface WorkspaceSettingsModel {
  defaultProviderProfileId?: null | string;
  workspaceName?: string;
  defaultPromptOutputFormat?: string;
  currencyCode?: string;
  currencyCultureName?: string;
  notes?: string;
}
export interface HostCapabilitySnapshot {
  profile: RuntimeHostProfileKind;
  operatingSystem: RuntimeHostOperatingSystem;
  isInteractive: boolean;
  isReady: boolean;
  observedAtUtc: Date;
  purposeRoots: Array<ApplicationPurposeRootReadiness>;
  capabilities: Array<HostCapabilityDescriptor>;
}
export type RuntimeHostProfileKind = "Auto" | "WindowsInteractive" | "WindowsHeadless" | "LinuxInteractive" | "LinuxHeadless" | "MacOsInteractive" | "MacOsHeadless" | "Test";
export type RuntimeHostOperatingSystem = "Windows" | "Linux" | "MacOs";
/**
 * An instant in coordinated universal time (UTC)"
 */
export type UtcDateTime = Date;
export interface ApplicationPurposeRootReadiness {
  purpose: ApplicationPurposeRootKind;
  configurationSource: ApplicationPurposeRootConfigurationSource;
  state: PathFoundationReadinessState;
  reason: PathFoundationReadinessReason;
}
export type ApplicationPurposeRootKind = "Workspace" | "ControlPlane" | "DatabaseProfiles" | "DataProtectionKeys" | "State" | "Logs" | "RuntimeTemporary";
export type ApplicationPurposeRootConfigurationSource = "PlatformDefault" | "ExplicitConfiguration" | "ActiveDatabaseProfile" | "DerivedFromControlPlaneRoot" | "OwnerResolved";
export type PathFoundationReadinessState = "Ready" | "Unavailable";
export type PathFoundationReadinessReason = "Ready" | "InvalidConfiguration" | "AccessDenied" | "UnsafePath" | "IoFailure";
export interface HostCapabilityDescriptor {
  id: HostCapabilityId;
  criticality: HostCapabilityCriticality;
  availability: HostCapabilityAvailability;
  reasonCode: HostCapabilityReasonCode;
  remediation: string;
  supportLevel: HostCapabilitySupportLevel;
  implementationRegistration: HostCapabilityImplementationRegistration;
  implementationId: null | string;
  implementationVersion: null | string;
  executionBoundary: HostCapabilityExecutionBoundary;
  supportProfile: RuntimeHostProfileKind;
  observedAtUtc: Date;
}
export type HostCapabilityId = "ControlPlanePaths" | "PhysicalFileSystem" | "SecretVault" | "FileToolsDesktop" | "DesktopFileOpen" | "InteractiveTerminal" | "NativeProcessDiscovery";
export type HostCapabilityCriticality = "Mandatory" | "Optional";
export type HostCapabilityAvailability = "Available" | "Unavailable" | "Unsupported" | "Misconfigured" | "Unverified";
export type HostCapabilityReasonCode = "Ready" | "ProbePending" | "DisabledByProfile" | "DependencyUnavailable" | "UnsupportedByProfile" | "InvalidConfiguration" | "PermissionDenied" | "UnsafePath" | "IoFailure" | "ActualHostValidationDeferred";
export type HostCapabilitySupportLevel = "Stable" | "BasicLocal" | "DevelopmentOnly" | "ActualHostUnverified" | "Unsupported";
export type HostCapabilityImplementationRegistration = "Registered" | "NotRegistered";
export type HostCapabilityExecutionBoundary = "ManagedProcess" | "OperatingSystem" | "ExternalProcess" | "ExternalService";
/**
 * A whole number. This represent any `integer` value possible.
 * It is commonly represented as `BigInteger` in some languages.
 */
export type Integer = number;
/**
 * A numeric type
 */
export type Numeric = number;
export interface ProjectStructureProjectSaveRequest {
  name: string;
  description: string;
  objective: string;
  currentPhase: string;
  status?: number;
  targetDateUtc?: null | Date;
  leaseToken?: null | string;
}
export type ProjectStatus = number;
export interface ProjectStructureSubprojectChangeRequest {
  childProjectId: string;
  currentParentProjectId?: null | string;
  leaseToken?: null | string;
}
export interface ProjectStructureReadRequest {
  nodeIds?: null | Array<string>;
  subtreeRootIds?: null | Array<string>;
  /**
   * Optional ProjectObjectType filters. A null collection means no object-type filter; null array items are not supported.
   */
  objectTypes?: Array<"ProjectRoot" | "Phase" | "Milestone" | "ProjectBlock" | "Meeting" | "Recording" | "Transcript" | "Participant" | "WorkItem" | "Repository" | "File" | "ImageAsset" | "VideoAsset" | "Link" | "Connector" | "Script" | "Environment" | "Infrastructure" | "PromptFlow" | "PromptSession" | "PromptStep" | "ProcessDefinition" | "ProcessRun" | "WorkflowDefinition" | "WorkflowRun" | "ValidationRun" | "TestPlan" | "TestEvidence" | "Note" | "Decision" | "SecretReference" | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30> | null;
  projectRoles?: null | Array<number>;
  statuses?: null | Array<string>;
  onlyUnfinished?: boolean;
  maxPriority?: unknown;
  includeLinks?: boolean;
  includeLayout?: boolean;
  includeMetadata?: boolean;
  includeNotes?: boolean;
  includeAssets?: boolean;
  take?: unknown;
  source?: number;
}
export type ProjectStructureProjectRole = number;
export type ProjectStructureReadSource = number;
export interface ProjectPlanSummaryQuery {
  asOfUtc?: null | Date;
  taskPreviewLimit?: unknown;
  hoursPerManDay?: unknown;
}
export interface ProjectStructureTaskCreateRequest {
  title: string;
  startUtc: Date;
  endUtc: Date;
  afterTaskNodeId?: null | string;
  resource?: null | ProjectStructureTaskResourceSelection;
  estimate?: null | ProjectTaskEstimate;
  duration?: string;
}
export interface ProjectStructureTaskResourceSelection {
  kind: number;
  resourceId: string;
  versionId?: null | string;
}
export type ProjectStructureTaskResourceKind = number;
export interface ProjectTaskEstimate {
  expectedEffortHours: unknown;
  expectedEffortUnit: number;
  expectedCostAmount: unknown;
  expectedCostCurrencyCode: string;
}
export type ProjectWorkItemEffortUnit = number;
export interface ProjectStructureTaskDetailsUpdateRequest {
  taskId: GanttTaskId;
  currentTitle: string;
  proposedTitle: string;
  currentProgressPercent: unknown;
  proposedProgressPercent: unknown;
  currentEstimate: ProjectTaskEstimate;
  proposedEstimate: ProjectTaskEstimate;
  scheduleChange: null | GanttTaskScheduleChangeRequest;
  assigneeChanged: boolean;
  proposedAssignee: null | ProjectStructureTaskResourceSelection;
  currentExecution: ProjectTaskExecutionSnapshot;
  proposedExecution: ProjectTaskExecutionSnapshot;
  currentCostBasis: null | ProjectTaskExpectedCostBasis;
  currentDirectAssignmentRevision: unknown;
}
export interface GanttTaskId {
  value?: null | string;
}
export interface GanttTaskScheduleChangeRequest {
  taskId: GanttTaskId;
  gesture: number;
  affectedTasks?: null | Array<GanttTaskDateChange>;
  criticalTaskIds?: null | Array<GanttTaskId>;
}
export type GanttScheduleGesture = number;
export interface GanttTaskDateChange {
  taskId: GanttTaskId;
  previousStart: Date;
  previousEnd: Date;
  proposedStart: Date;
  proposedEnd: Date;
  isCritical: boolean;
}
export interface ProjectTaskExecutionSnapshot {
  state: number;
  actualStartedAtUtc: null | Date;
  actualEndedAtUtc: null | Date;
}
export type ProjectTaskExecutionState = number;
export interface ProjectTaskExpectedCostBasis {
  resourceKind?: number;
  resourceId?: string;
  resourceVersionId?: null | string;
  source?: number;
  calculatedAtUtc?: null | Date;
}
export type ProjectStructureTaskResourceCostSource = number;
export interface ProjectStructureTaskResourceAttachRequest {
  resource: ProjectStructureTaskResourceSelection;
  currentExecution: ProjectTaskExecutionSnapshot;
}
export interface ProjectStructureNodeCreateOpenApiRequest {
  /**
   * Case-insensitive canonical ProjectObjectType symbol, existing node-kind alias, or defined numeric value.
   */
  objectType: string | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30;
  title: string;
  subtitle: string;
  notes: string;
  parentNodeKey: null | string;
  x?: unknown;
  y?: unknown;
  startUtc?: null | Date;
  endUtc?: null | Date;
  objectSubtype?: null | string;
  media?: null | ProjectObjectMediaPayload;
  metadataJson?: null | string;
  metadata?: unknown;
  leaseToken?: null | string;
  durationSeconds?: unknown;
}
export interface ProjectObjectMediaPayload {
  fileName: string;
  contentType: string;
  base64Data: string;
}
export interface ProjectStructureNodeEditOpenApiRequest {
  title: string;
  subtitle: string;
  notes: string;
  /**
   * Case-insensitive canonical ProjectObjectType symbol, existing node-kind alias, defined numeric value, or null to preserve the current type.
   */
  objectType?: string | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | null;
  objectSubtype?: null | string;
  startUtc?: null | Date;
  endUtc?: null | Date;
  metadataJson?: null | string;
  metadata?: unknown;
  leaseToken?: null | string;
  durationSeconds?: unknown;
}
export interface ProjectStructureNodeTypeInput {
  /**
   * Case-insensitive canonical ProjectObjectType symbol or defined numeric value.
   */
  objectType: "ProjectRoot" | "Phase" | "Milestone" | "ProjectBlock" | "Meeting" | "Recording" | "Transcript" | "Participant" | "WorkItem" | "Repository" | "File" | "ImageAsset" | "VideoAsset" | "Link" | "Connector" | "Script" | "Environment" | "Infrastructure" | "PromptFlow" | "PromptSession" | "PromptStep" | "ProcessDefinition" | "ProcessRun" | "WorkflowDefinition" | "WorkflowRun" | "ValidationRun" | "TestPlan" | "TestEvidence" | "Note" | "Decision" | "SecretReference" | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30;
  objectSubtype?: null | string;
  leaseToken?: null | string;
}
export interface ProjectStructureNodeMetadataInput {
  metadataJson: string;
  notes?: null | string;
  status?: null | string;
  leaseToken?: null | string;
}
export interface ProjectStructureStatusBatchInput {
  nodeIds: Array<string>;
  status: string;
  leaseToken?: null | string;
}
export interface ProjectStructureStatusInput {
  status: string;
  leaseToken?: null | string;
}
export interface ProjectStructureProgressBatchInput {
  nodeIds: Array<string>;
  progressMode: string;
  progressPercent: unknown;
  leaseToken?: null | string;
}
export interface ProjectStructureProgressInput {
  progressMode: string;
  progressPercent: unknown;
  leaseToken?: null | string;
}
export interface ProjectStructureMarkerBatchInput {
  nodeIds: Array<string>;
  markerIcon: string;
  markerTone: string;
  markerLabel: string;
  leaseToken?: null | string;
}
export interface ProjectStructureMarkerInput {
  mode?: number;
  markerIcon?: string;
  markerTone?: string;
  markerLabel?: string;
  leaseToken?: null | string;
}
export type ProjectStructureMarkerMutationMode = number;
export interface ProjectStructurePriorityBatchInput {
  nodeIds: Array<string>;
  priority: unknown;
  leaseToken?: null | string;
}
export interface ProjectStructurePriorityInput {
  priority: unknown;
  leaseToken?: null | string;
}
export interface ProjectStructureNodeMoveInput {
  nodeId: string;
  x: unknown;
  y: unknown;
  leaseToken?: null | string;
}
export interface ProjectStructureNodeRecomposeInput {
  rootNodeId: string;
  leaseToken?: null | string;
}
export interface ProjectStructureNodeParentInput {
  parentNodeKey: null | string;
  leaseToken?: null | string;
}
export interface ProjectStructureNodeReparentInput {
  nodeId: string;
  parentNodeKey: null | string;
  leaseToken?: null | string;
}
export interface ProjectStructureNodesCopyInput {
  sourceNodeIds: Array<string>;
  destinationParentNodeId: string;
  leaseToken?: null | string;
}
export interface ProjectStructureNodesToSubprojectInput {
  name: string;
  nodeIds: Array<string>;
  description?: null | string;
  objective?: null | string;
  currentPhase?: null | string;
  status?: number;
  includeDescendants?: boolean;
  leaseToken?: null | string;
}
export interface ProjectStructureSubtreeTransferInput {
  targetProjectId: string;
  leaseToken?: null | string;
  targetLeaseToken?: null | string;
}
export interface ProjectStructureNodeCommandInput {
  commandKind: number;
  leaseToken?: null | string;
}
export type ProjectStructureCommandKind = number;
export interface ProjectStructureProcessDefinitionLinkInput {
  processDefinitionId: string;
  leaseToken?: null | string;
}
export interface ProjectStructureProcessNodeStartInput {
  processDefinitionId?: null | string;
  runHrMatch?: boolean;
  execute?: boolean;
  includeLaunchPlan?: boolean;
  requestedBy?: string;
  leaseToken?: null | string;
}
export interface ProjectStructureWorkflowAddOptionsInput {
  workflowId?: unknown;
  versionId?: unknown;
  inputSettings?: null | ProjectStructureWorkflowInputSettings;
  selectedNodeIds?: null | Array<string>;
}
export interface ProjectStructureWorkflowInputSettings {
  includeProject?: boolean;
  includeParentNode?: boolean;
  includeParentNodeDetails?: boolean;
  includeParentSubtree?: boolean;
  includeAssets?: boolean;
  selectedNodeIds?: Array<string>;
  additionalSources?: Array<ProjectStructureWorkflowInputSource>;
  manualInputJson?: string;
}
export interface ProjectStructureWorkflowInputSource {
  kind: number;
  key: string;
  label: string;
  value: string;
  isEnabled?: boolean;
}
export type ProjectStructureWorkflowInputSourceKind = number;
export interface ProjectStructureWorkflowNodeCreateInput {
  workflowId: string;
  versionId?: unknown;
  title?: null | string;
  subtitle?: null | string;
  notes?: null | string;
  inputSettings?: null | ProjectStructureWorkflowInputSettings;
  x?: unknown;
  y?: unknown;
  leaseToken?: null | string;
}
export type WorkflowId = string;
export interface ProjectStructureWorkflowNodeStartInput {
  requestedBackend?: null | number;
  requestedBy?: string;
  leaseToken?: null | string;
  simulatedNodeIds?: null | Array<string>;
}
export type WorkflowRuntimeBackendKind = number;
export interface ProjectStructureNodeDeleteInput {
  managedStorageDisposition: ProjectStructureManagedStorageDisposition;
  leaseToken?: null | string;
  durableMutationId?: null | string;
}
export type ProjectStructureManagedStorageDisposition = "Unspecified" | "RetainManagedFiles" | "DeleteOwnedManagedFiles";
export interface ProjectStructureNodeDeleteBatchInput {
  nodeIds: Array<string>;
  managedStorageDisposition: ProjectStructureManagedStorageDisposition;
  leaseToken?: null | string;
}
export interface ProjectStructureApprovalRequestCreateInput {
  title: string;
  subtitle: string;
  notes: string;
  requestedOperation: string;
  parentNodeKey?: null | string;
  estimatedMinutes?: unknown;
  metadataJson?: null | string;
  leaseToken?: null | string;
}
export interface ProjectStructureChecklistRequest {
  maxPriority?: unknown;
  /**
   * Optional ProjectObjectType filters. A null collection means no object-type filter; null array items are not supported.
   */
  objectTypes?: Array<"ProjectRoot" | "Phase" | "Milestone" | "ProjectBlock" | "Meeting" | "Recording" | "Transcript" | "Participant" | "WorkItem" | "Repository" | "File" | "ImageAsset" | "VideoAsset" | "Link" | "Connector" | "Script" | "Environment" | "Infrastructure" | "PromptFlow" | "PromptSession" | "PromptStep" | "ProcessDefinition" | "ProcessRun" | "WorkflowDefinition" | "WorkflowRun" | "ValidationRun" | "TestPlan" | "TestEvidence" | "Note" | "Decision" | "SecretReference" | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30> | null;
  includePaused?: boolean;
  take?: unknown;
}
export interface ProjectStructureDependencyQueryRequest {
  nodeIds?: null | Array<string>;
  includeFinished?: boolean;
  defaultDurationSeconds?: unknown;
  take?: unknown;
}
export interface ProjectStructureLinkInput {
  sourceNodeId: string;
  targetNodeId: string;
  kind?: number;
  leaseToken?: null | string;
}
export type ProjectObjectLinkKind = number;
export interface ProjectStructureAssetCreateInput {
  /**
   * Case-insensitive canonical ProjectObjectType symbol or defined numeric value.
   */
  objectType: "ProjectRoot" | "Phase" | "Milestone" | "ProjectBlock" | "Meeting" | "Recording" | "Transcript" | "Participant" | "WorkItem" | "Repository" | "File" | "ImageAsset" | "VideoAsset" | "Link" | "Connector" | "Script" | "Environment" | "Infrastructure" | "PromptFlow" | "PromptSession" | "PromptStep" | "ProcessDefinition" | "ProcessRun" | "WorkflowDefinition" | "WorkflowRun" | "ValidationRun" | "TestPlan" | "TestEvidence" | "Note" | "Decision" | "SecretReference" | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30;
  title: string;
  subtitle: string;
  notes: string;
  media: null | ProjectObjectMediaPayload;
  parentNodeKey?: null | string;
  objectSubtype?: null | string;
  metadataJson?: null | string;
  leaseToken?: null | string;
  sourceWorkspacePath?: null | string;
  sourceFileName?: null | string;
  sourceContentType?: null | string;
  sourceUrl?: null | string;
}
export interface ProjectStructureAssetRevisionRequest {
  title: string;
  subtitle: string;
  notes: string;
  media: ProjectObjectMediaPayload;
  objectSubtype?: null | string;
  metadataJson?: null | string;
  leaseToken?: null | string;
}
export interface ProjectStructureImportRequest {
  projectId: string;
  parentNodeKey: null | string;
  sourceKind: number;
  title: string;
  sourceText?: null | string;
  sourceAsset?: null | ProjectObjectMediaPayload;
  containerBlockSubtype?: string;
  leafWorkItemSubtype?: string;
  leaseToken?: null | string;
}
export type ProjectStructureImportSourceKind = number;
export interface ProjectManagementGuidanceQueryRequest {
  categories?: null | Array<number>;
  query?: null | string;
  take?: unknown;
}
export type ProjectManagementGuidanceCategory = number;
export interface ProjectStructureLeaseAcquireRequest {
  scopeKind: string;
  scopeKey: string;
  reason: string;
  durationMinutes?: unknown;
}
export type ProjectStructureLeaseScopeKind = string;
export interface ProjectStructureLeaseRenewRequest {
  scopeKind: string;
  scopeKey: string;
  leaseToken: string;
  durationMinutes?: unknown;
}
export interface ProjectStructureLeaseReleaseRequest {
  scopeKind: string;
  scopeKey: string;
  leaseToken: string;
}
export interface ProjectStructureAnalyticsQueryRequest {
  projectId?: null | string;
  operationName?: null | string;
  agentId?: null | string;
  succeeded?: null | boolean;
  take?: unknown;
}
export interface ApiAccessStatus {
  apiEnabled: boolean;
  openApiEnabled: boolean;
  swaggerUiEnabled: boolean;
  authorizationEnabled: boolean;
  signingKeyConfigured: boolean;
  issuer: string;
  audience: string;
  defaultTokenLifetimeMinutes: unknown;
  maxTokenLifetimeMinutes: unknown;
}
export interface ApiTokenIssueRequest {
  subject?: string;
  displayName?: string;
  lifetimeMinutes?: unknown;
  scopes?: Array<string>;
}
export interface ApiTokenIssueResult {
  token: string;
  tokenType: string;
  expiresAtUtc: Date;
  subject: string;
  displayName: string;
  scopes: Array<string>;
}
export interface ProjectSummary {
  id: string;
  name: string;
  status: number;
  currentPhase: string;
  phaseCount: unknown;
  parentCount: unknown;
  childCount: unknown;
  updatedAtUtc: Date;
  primaryCustomerName?: string;
  primaryDeliveryUnitName?: string;
  primaryOwnerName?: string;
  relatedParties?: null | Array<ProjectPortfolioPartyItem>;
  relatedPartySearchText?: string;
}
export interface ProjectPortfolioPartyItem {
  category: number;
  label: string;
  displayName: string;
  isPrimary: boolean;
}
export type ProjectPartyPortfolioCategory = number;
export interface ProjectEditorModel {
  id?: null | string;
  name?: string;
  description?: string;
  objective?: string;
  status?: number;
  currentPhase?: string;
  targetDateUtc?: null | Date;
  phases?: Array<ProjectPhaseEditorModel>;
  options?: Array<ProjectOptionEditorModel>;
}
export interface ProjectPhaseEditorModel {
  id?: null | string;
  name?: string;
  goal?: string;
  status?: number;
  startDateUtc?: null | Date;
  endDateUtc?: null | Date;
}
export type ProjectPhaseStatus = number;
export interface ProjectOptionEditorModel {
  id?: null | string;
  category?: number;
  optionName?: string;
  notes?: string;
}
export type ProjectOptionCategory = number;
export interface ApiErrorResponse {
  errors: Array<ApiErrorItem>;
  correlationId?: null | string;
  agentId?: null | string;
  executionRunId?: null | string;
  chatSessionId?: null | string;
  providerFailureCategory?: null | AgentProviderFailureCategory;
}
export interface ApiErrorItem {
  code: string;
  message: string;
  severity: number;
}
export type ErrorSeverity = number;
export type AgentProviderFailureCategory = "providerError" | "quotaOrBilling" | "rateLimit" | "requestCompatibility" | "providerConfiguration" | null;
export interface ProjectAccessListItem {
  id: string;
  name: string;
}
export interface ProjectHierarchyLinkSummary {
  parentProjectId: string;
  childProjectId: string;
  createdAtUtc: Date;
}
export interface ProjectDeletionResult {
  projectId: string;
  warnings: Array<ProjectDeletionWarning>;
}
export interface ProjectDeletionWarning {
  kind: number;
  participantId: ProjectDeletionParticipantId;
  recoveryId: string;
  retainedObject: ProjectDeletionRetainedObjectDescriptor;
  message: string;
  remediation: string;
}
export type ProjectDeletionWarningKind = number;
export interface ProjectDeletionParticipantId {
  value?: null | string;
}
export interface ProjectDeletionRetainedObjectDescriptor {
  provider: number;
  storageId: null | string;
  locatorKind: number;
  locator: string;
  reason: string;
}
export type StorageProviderKind = number;
export type StorageLocatorKind = number;
export interface ProjectDeletionCleanupPendingApiResponse {
  code: string;
  message: string;
  recovery: ProjectDeletionRecovery;
}
export interface ProjectDeletionRecovery {
  projectId: string;
  failures: Array<ProjectDeletionRecoveryFailure>;
  retryGuidance: string;
}
export interface ProjectDeletionRecoveryFailure {
  operation: number;
  participantId: ProjectDeletionParticipantId;
  recoveryId: null | string;
}
export type ProjectDeletionRecoveryOperation = number;
export interface ProjectDeletionPendingCleanup {
  projectId: string;
  participantId: ProjectDeletionParticipantId;
  recoveryId: string;
  status: number;
  canRetryNow: boolean;
  retryAvailableAtUtc: null | Date;
  retryGuidance: string;
}
export type ProjectDeletionRecoveryStatus = number;
export interface ProjectDeletionCompletionNotice {
  projectId: string;
  participantId: ProjectDeletionParticipantId;
  recoveryId: string;
  operation: number;
  warnings: Array<ProjectDeletionWarning>;
}
export type ProjectDeletionCompletionOperation = number;
export interface ProjectHierarchySnapshot {
  projectId: string;
  parentProjects: Array<ProjectSummary>;
  childProjects: Array<ProjectSummary>;
}
export interface ApiAck {
  ok: boolean;
}
export interface ProjectReconnectSubprojectApiRequest {
  currentParentProjectId: string;
  newParentProjectId: string;
}
export interface AgentDefinition {
  id: string;
  name: string;
  roleTitle: string;
  summary: string;
  instructions: string;
  status: number;
  providerProfileId: null | string;
  model: string;
  workload: number;
  chatHistoryMode: number;
  temperature: unknown;
  requirePerServiceCallChatHistoryPersistence: boolean;
  enableBackgroundResponses: boolean;
  configurationJson: string;
  isTemplate: boolean;
  templateKey: string;
  permissions: AgentPermissionsPolicy;
  capabilities: Array<AgentCapabilityAssignment>;
  tags: Array<string>;
  createdAtUtc: Date;
  updatedAtUtc: Date;
  avatarImageUrl?: null | string;
}
export type AgentLifecycleStatus = number;
export type AgentWorkloadKind = number;
export type AgentChatHistoryMode = number;
export interface AgentPermissionsPolicy {
  canUseTools: boolean;
  canAskOtherAgents: boolean;
  canEscalateToHuman: boolean;
  canObserveOtherAgents: boolean;
  canScheduleWork: boolean;
  requiresApprovalForExternalCalls: boolean;
  autoApproveExternalCallsByDefault?: boolean;
  allowedSecrets?: null | Array<AgentAllowedSecretReference>;
}
export interface AgentAllowedSecretReference {
  secretId: string;
  nameSnapshot: string;
  purpose: string;
}
export interface AgentCapabilityAssignment {
  capabilityId: string;
  capabilityKey: string;
  kind: number;
  proofStatus: number;
  lastVerifiedAtUtc: null | Date;
  proofNotes: string;
}
export type CapabilityKind = number;
export type CapabilityProofStatus = number;
export interface AgentEditorModel {
  id?: null | string;
  expectedUpdatedAtUtc?: null | Date;
  name?: string;
  roleTitle?: string;
  summary?: string;
  instructions?: string;
  avatarImageUrl?: string;
  status?: number;
  providerProfileId?: null | string;
  model?: string;
  thinkingEffortOverride?: null | number;
  isThinkingEffortOverrideEdited?: boolean;
  workload?: number;
  chatHistoryMode?: number;
  temperature?: unknown;
  requirePerServiceCallChatHistoryPersistence?: boolean;
  enableBackgroundResponses?: boolean;
  configurationJson?: string;
  isTemplate?: boolean;
  templateKey?: string;
  permissions?: AgentPermissionsPolicy;
  allowedSecretReferences?: Array<AgentAllowedSecretReference>;
  projectStructureAccess?: AgentProjectStructureAccessSettings;
  processAccess?: AgentProcessAccessSettings;
  workspaceToolAccess?: AgentWorkspaceToolAccessSettings;
  imageGenerationAccess?: AgentImageGenerationAccessSettings;
  voiceAccess?: AgentVoiceAccessSettings;
  memoryAccess?: AgentMemoryAccessSettings;
  selectedCapabilityIds?: Array<string>;
  tags?: Array<string>;
}
export type AgentReasoningEffortLevel = number;
export interface AgentProjectStructureAccessSettings {
  canRead?: boolean;
  canWrite?: boolean;
  canWriteNonTaskStructure?: boolean;
  canWriteTasks?: boolean;
  canCreateProjects?: boolean;
  canCreateSubprojects?: boolean;
  allowAllProjects?: boolean;
  allowedProjectIds?: Array<string>;
}
export interface AgentProcessAccessSettings {
  canRead?: boolean;
  canWrite?: boolean;
  allowAllDefinitions?: boolean;
  allowedDefinitionIds?: Array<string>;
}
export interface AgentWorkspaceToolAccessSettings {
  profile?: number;
  canReadFiles?: boolean;
  canWriteFiles?: boolean;
  canRunValidationCommands?: boolean;
  canRunLocalScripts?: boolean;
  canScaffoldProjects?: boolean;
  canManageWorkspacePaths?: boolean;
  canTransformArtifacts?: boolean;
  allowedExternalTargetAliases?: Array<string>;
  externalTargetRootBindings?: Array<ExternalTargetRootBinding>;
  canReadStorage?: boolean;
  canWriteStorage?: boolean;
  allowAllStorageCatalogs?: boolean;
  allowedStorageCatalogIds?: Array<string>;
}
export type AgentWorkspaceToolProfileKind = number;
export interface ExternalTargetRootBinding {
  rootId: string;
  hostPlatform: string;
  protectedRootToken: string;
}
export interface AgentImageGenerationAccessSettings {
  canGenerateImages?: boolean;
  preferredProviderProfileId?: null | string;
  defaultModel?: string;
  canStoreImagesAsProjectAssets?: boolean;
}
export interface AgentVoiceAccessSettings {
  canUseVoiceMode?: boolean;
  preferredVoiceId?: string;
}
export interface AgentMemoryAccessSettings {
  invocationMode?: number;
  canUseMemoryTools?: boolean;
  canUseContextContributions?: boolean;
  requireContextContributions?: boolean;
  allowAsyncContextContributions?: boolean;
  canIngestSources?: boolean;
  preferredProviderInstanceId?: null | MemoryProviderInstanceId;
  defaultProviderInstanceId?: null | MemoryProviderInstanceId;
  allowedProviderInstanceIds?: Array<MemoryProviderInstanceId>;
  providerBindings?: Array<AgentMemoryProviderBindingSetting>;
  allowedCapabilityIds?: Array<MemoryCapabilityId>;
  deniedCapabilityIds?: Array<MemoryCapabilityId>;
  allowedSourceScopes?: Array<number>;
  providerAssignments?: Array<AgentMemoryProviderAssignmentSetting>;
}
export type AgentMemoryInvocationMode = number;
export interface MemoryProviderInstanceId {
  value: string;
}
export interface AgentMemoryProviderBindingSetting {
  alias: AgentMemoryProviderAlias;
  providerInstanceId: MemoryProviderInstanceId;
  includeInAutomaticContext?: boolean;
  requirement?: number;
}
export interface AgentMemoryProviderAlias {
  value?: null | string;
}
export type AgentMemoryProviderRequirement = number;
export interface MemoryCapabilityId {
  value: string;
}
export type MemorySourceScope = number;
export interface AgentMemoryProviderAssignmentSetting {
  scope: number;
  key: string;
  providerInstanceId: MemoryProviderInstanceId;
}
export type MemoryProviderAssignmentScope = number;
export interface AgentChatPageBootstrapApiResponse {
  agents: Array<AgentCatalogItemApiResponse>;
  initialAgentId: null | string;
  selectedAgentWorkspace: null | AgentChatWorkspaceApiResponse;
}
export interface AgentCatalogItemApiResponse {
  id: string;
  name: string;
  roleTitle: string;
  summary: string;
  status: number;
  model: string;
  isTemplate: boolean;
  avatarImageUrl: null | string;
}
export interface AgentChatWorkspaceApiResponse {
  agentId: string;
  sessions: Array<AgentChatSessionSummaryApiResponse>;
  selectedSession: null | AgentChatSessionApiResponse;
  selectedSessionId: null | string;
  latestRun: null | AgentChatRunSummaryApiResponse;
  selectedRun: null | AgentExecutionRunApiResponse;
}
export interface AgentChatSessionSummaryApiResponse {
  id: string;
  agentId: string;
  title: string;
  createdAtUtc: Date;
  updatedAtUtc: Date;
  messageCount: unknown;
  lastMessagePreview: string;
  pendingApprovalCount: unknown;
  autoApprovePendingToolCalls: boolean;
}
export interface AgentChatSessionApiResponse {
  id: string;
  agentId: string;
  title: string;
  createdAtUtc: Date;
  updatedAtUtc: Date;
  messages: Array<AgentChatMessageApiResponse>;
  latestExecutionRunId: null | string;
  pendingApprovals: Array<AgentPendingApprovalApiResponse>;
  autoApprovePendingToolCalls: boolean;
}
export interface AgentChatMessageApiResponse {
  id: string;
  role: number;
  content: string;
  createdAtUtc: Date;
}
export type ChatMessageRole = number;
export interface AgentPendingApprovalApiResponse {
  approvalId: string;
  toolName: string;
  toolKind: string;
}
export interface AgentChatRunSummaryApiResponse {
  executionRunId: string;
  agentId: string;
  chatSessionId: null | string;
  title: string;
  state: number;
  phase: string;
  message: string;
  outcome: null | number;
  createdAtUtc: Date;
  updatedAtUtc: Date;
  startedAtUtc: null | Date;
  completedAtUtc: null | Date;
  duration: null | string;
  knownCostUsd: unknown;
  hasUnknownCost: boolean;
}
export type ExecutionState = number;
export type RunOutcome = number;
export interface AgentExecutionRunApiResponse {
  id: string;
  agentId: string;
  chatSessionId: null | string;
  title: string;
  providerName: string;
  model: string;
  state: number;
  outcome: null | number;
  createdAtUtc: Date;
  updatedAtUtc: Date;
  startedAtUtc: null | Date;
  completedAtUtc: null | Date;
  pendingApprovals: Array<AgentPendingApprovalApiResponse>;
  pendingApprovalCount: unknown;
  autoApprovePendingToolCalls: boolean;
  revision: unknown;
}
export interface AgentCloneApiRequest {
  cloneName: string;
}
export interface AgentTemplateConversionApiRequest {
  templateKey: string;
}
export interface AgentImportApiRequest {
  packagePath: string;
}
export interface AgentPackageImportApiForm {
  package_?: null | IFormFile;
  mode?: null | string;
  externalKey?: null | string;
  externalNamespace?: null | string;
  expectedPackageSha256?: null | string;
  expectedAgentVersion?: null | Date;
}
export type IFormFile = null | Uint8Array;
/**
 * Represent a byte array
 */
export type Bytes = Uint8Array;
export interface AgentPackageImportReceipt {
  agentId: string;
  mode: number;
  externalKey: string;
  packageSha256: string;
  packageSchemaVersion: string;
  importedVersion: string;
  configurationSha256: string;
  unresolvedPrerequisites: Array<string>;
  warnings: Array<string>;
  replayed: boolean;
  externalNamespace?: string;
}
export type AgentPackageImportMode = number;
export interface AgentExternalProvisioningReceipt {
  namespace: string;
  key: string;
  agentId: string;
  configurationVersion: string;
  created: boolean;
  replayed: boolean;
  archived: boolean;
  warnings: Array<string>;
}
export interface AgentExternalProvisioningResource {
  namespace: string;
  key: string;
  agentId: string;
  configurationVersion: string;
  isArchived: boolean;
  updatedAtUtc: Date;
}
export interface AgentTeamEditorModel {
  id?: null | string;
  name?: string;
  description?: string;
  icon?: string;
  agentIds?: Array<string>;
}
export interface AgentTeamMembersApiRequest {
  agentIds: Array<string>;
}
export interface ProviderProfile {
  id: string;
  name: string;
  kind: number;
  baseUrl: string;
  apiKeyEnvironmentVariable: string;
  defaultModel: string;
  transport: number;
  isEnabled: boolean;
  supportsStreaming: boolean;
  supportsTools: boolean;
  preferFrameworkManagedChatHistory: boolean;
  supportsBackgroundResponses: boolean;
  configurationJson: string;
  notes: string;
  healthStatus: string;
  lastCheckedAtUtc: null | Date;
  suggestedModels: Array<string>;
  purpose?: number;
  isPrivateProvider?: boolean;
  modelPrices?: Array<ProviderModelTokenPrice>;
  tags?: Array<string>;
  modelThinkingEffortCapabilities?: Array<ProviderModelThinkingEffortCapability>;
}
export type ProviderKind = number;
export type ProviderTransportKind = number;
export type ProviderProfilePurpose = number;
export interface ProviderModelTokenPrice {
  model: string;
  inputPerMillionTokensUsd: unknown;
  cachedInputPerMillionTokensUsd: unknown;
  outputPerMillionTokensUsd: unknown;
  cacheWritePerMillionTokensUsd?: unknown;
  longContextThresholdTokens?: unknown;
  longContextInputPerMillionTokensUsd?: unknown;
  longContextCachedInputPerMillionTokensUsd?: unknown;
  longContextCacheWritePerMillionTokensUsd?: unknown;
  longContextOutputPerMillionTokensUsd?: unknown;
  hasConfiguredStandardPrice?: boolean;
}
export interface ProviderModelThinkingEffortCapability {
  model: string;
  status: number;
  source: number;
  allowedEfforts: Array<number>;
  modelFamily?: string;
  summary?: string;
  controlMode?: number;
}
export type AgentThinkingEffortSupportStatus = number;
export type AgentThinkingEffortCapabilitySource = number;
export type AgentThinkingEffortControlMode = number;
export interface ProviderProfileEditorModel {
  id?: null | string;
  name?: string;
  kind?: number;
  baseUrl?: string;
  apiKeyEnvironmentVariable?: string;
  defaultModel?: string;
  transport?: number;
  purpose?: number;
  isEnabled?: boolean;
  supportsStreaming?: boolean;
  supportsTools?: boolean;
  preferFrameworkManagedChatHistory?: boolean;
  supportsBackgroundResponses?: boolean;
  configurationJson?: string;
  notes?: string;
  isPrivateProvider?: boolean;
  suggestedModels?: Array<string>;
  modelPrices?: Array<ProviderModelTokenPriceEditorModel>;
  tags?: Array<string>;
  modelThinkingEffortCapabilities?: null | Array<ProviderModelThinkingEffortCapability>;
}
export interface ProviderModelTokenPriceEditorModel {
  model?: string;
  inputPerMillionTokensUsd?: unknown;
  cachedInputPerMillionTokensUsd?: unknown;
  outputPerMillionTokensUsd?: unknown;
  cacheWritePerMillionTokensUsd?: unknown;
  longContextThresholdTokens?: unknown;
  longContextInputPerMillionTokensUsd?: unknown;
  longContextCachedInputPerMillionTokensUsd?: unknown;
  longContextCacheWritePerMillionTokensUsd?: unknown;
  longContextOutputPerMillionTokensUsd?: unknown;
}
export interface ProviderTestChatRequest {
  model: string;
  systemPrompt: string;
  messages: Array<ProviderTestChatMessage>;
  prompt: string;
}
export interface ProviderTestChatMessage {
  role: number;
  content: string;
  createdAtUtc: Date;
}
export interface ProviderModelMaintenanceEditorRequest {
  baseModel: string;
  targetModel: string;
  systemPrompt: string;
  contextLength: unknown;
}
export interface CapabilityEditorModel {
  id?: null | string;
  expectedFingerprint?: null | string;
  kind?: number;
  key?: string;
  name?: string;
  description?: string;
  endpointOrPath?: string;
  configurationJson?: string;
  isBuiltIn?: boolean;
  tags?: Array<string>;
}
export interface CapabilityToolSetupTestRequest {
  capability?: CapabilityEditorModel;
  jsonInput?: string;
  correlationId?: string;
}
export interface CapabilityMcpSetupTestRequest {
  capability?: CapabilityEditorModel;
  correlationId?: string;
}
export interface CapabilityAccessPreviewRequest {
  capabilityIds?: Array<string>;
  draftCapabilities?: Array<CapabilityEditorModel>;
  policy?: CapabilityAccessPolicyTemplateDto;
  requiredCapabilities?: Array<CapabilityIdentityEditorModel>;
  correlationId?: string;
}
export interface CapabilityAccessPolicyTemplateDto {
  defaultEffect?: null | string;
  rules?: Array<CapabilityAccessRuleTemplateDto>;
}
export interface CapabilityAccessRuleTemplateDto {
  id?: null | string;
  effect?: null | string;
  scope?: null | string;
  selector?: null | CapabilitySelectorTemplateDto;
  reason?: null | string;
}
export interface CapabilitySelectorTemplateDto {
  kind?: null | string;
  value?: null | string;
  serverKey?: null | string;
}
export interface CapabilityIdentityEditorModel {
  kind?: number;
  key?: string;
}
export interface MemoryEditorModel {
  id?: null | string;
  agentId?: string;
  kind?: number;
  title?: string;
  content?: string;
  source?: string;
  importance?: unknown;
  metadataJson?: string;
}
export type MemoryKind = number;
export interface ChatSessionRenameApiRequest {
  title: string;
}
export interface AgentChatApiRequest {
  chatSessionId: null | string;
  prompt: string;
  attachmentPaths?: null | Array<string>;
  activityOperationId?: unknown;
}
export interface AgentChatRunApiResponse {
  chatSessionId: string;
  assistantMessage: AgentChatMessageApiResponse;
  metric: AgentRunMetricApiResponse;
  executionRunId: string;
  state: number;
}
export interface AgentRunMetricApiResponse {
  id: string;
  createdAtUtc: Date;
  outcome: number;
  providerName: string;
  model: string;
  durationMs: unknown;
  inputTokens: unknown;
  cachedInputTokens: unknown;
  cacheWriteTokens: unknown;
  outputTokens: unknown;
  toolCalls: unknown;
  costUsd: unknown;
}
export interface PendingApprovalApiRequest {
  approved: boolean;
  autoApprovePendingToolCalls: boolean;
  activityOperationId?: unknown;
  decisions?: null | Array<PendingApprovalDecisionApiRequest>;
}
export interface PendingApprovalDecisionApiRequest {
  approvalId: string;
  approved: boolean;
}
export interface AgentExecutionRunResultApiResponse {
  executionRunId: string;
  chatSessionId: null | string;
  responseText: string;
  assistantMessage: null | AgentChatMessageApiResponse;
  metric: AgentRunMetricApiResponse;
  state: number;
  structuredOutput: null | AgentStructuredOutputApiResponse;
}
export interface AgentStructuredOutputApiResponse {
  data: null | string;
  validationStatus: AgentJsonSchemaOutputValidationStatus;
  validationErrors: Array<AgentStructuredOutputValidationErrorApiResponse>;
}
export type JsonElement = string;
export type AgentJsonSchemaOutputValidationStatus = "Valid" | "ProviderRefusal" | "MalformedJson" | "SchemaValidationFailed";
export interface AgentStructuredOutputValidationErrorApiResponse {
  code: string;
  message: string;
  path: string;
}
export type ExecutionApprovalStatus = number;
export interface AgentExecutionRunApiRequest {
  agentId: string;
  prompt: string;
  chatSessionId?: null | string;
  context?: null | ExecutionInvocationContext;
  autoApprovePendingToolCalls?: boolean;
  structuredOutput?: null | AgentJsonSchemaOutputContract;
  inputAttachmentPaths?: null | Array<string>;
  activityOperationId?: unknown;
}
export interface ExecutionInvocationContext {
  sourceKind: string;
  sourceId: string;
  correlationId: string;
  causationId: string;
  requestedBy: string;
  requestedByKind: string;
  metadataJson: string;
  processRunId?: string;
  processStepId?: string;
  schedulerRunId?: string;
  messageId?: string;
  policy?: null | ExecutionInvocationPolicy;
}
export interface ExecutionInvocationPolicy {
  finalizerMode?: null | AgentFinalizerMode;
  maxStructuredOutputRepairAttempts?: unknown;
  requireStructuredOutputValidation?: boolean;
  allowRequiredFinalizerStructuredOutputRecovery?: boolean;
}
export type AgentFinalizerMode = "Disabled" | "Shadow" | "Required" | null;
export interface AgentJsonSchemaOutputContract {
  kind: string;
  version: string;
  name: string;
  schema: string;
  strict?: boolean;
}
export interface AgentExecutionRunStartApiRequest {
  prompt: string;
  chatSessionId?: null | string;
  context?: null | ExecutionInvocationContext;
  autoApprovePendingToolCalls?: boolean;
  structuredOutput?: null | AgentJsonSchemaOutputContract;
  inputAttachmentPaths?: null | Array<string>;
  activityOperationId?: unknown;
}
export interface AgentExecutionRunDetailApiResponse {
  run: AgentExecutionRunApiResponse;
  chatSession: null | AgentChatSessionApiResponse;
  executionLog: Array<AgentExecutionLogApiResponse>;
  metrics: Array<AgentRunMetricApiResponse>;
  approvals: Array<AgentExecutionApprovalApiResponse>;
  artifacts: Array<AgentExecutionArtifactApiResponse>;
  checkpoints: Array<AgentExecutionCheckpointApiResponse>;
  toolReceipts: Array<AgentExecutionToolReceiptApiResponse>;
  usageTotals: AgentProviderUsageTotalsApiResponse;
}
export interface AgentExecutionLogApiResponse {
  id: string;
  createdAtUtc: Date;
  state: number;
  phase: string;
  message: string;
}
export interface AgentExecutionApprovalApiResponse {
  approvalId: string;
  executionRunId: string;
  toolName: string;
  toolKind: string;
  status: number;
  requestedAtUtc: Date;
  decidedAtUtc: null | Date;
  decisionSourceKind: string;
}
export interface AgentExecutionArtifactApiResponse {
  id: string;
  artifactKind: string;
  displayName: string;
  relativePath: string;
  contentType: string;
  producedBy: string;
  summary: string;
  createdAtUtc: Date;
}
export interface AgentExecutionCheckpointApiResponse {
  id: string;
  checkpointKind: string;
  runState: number;
  pendingApprovalCount: unknown;
  capturedAtUtc: Date;
  resumedAtUtc: null | Date;
}
export interface AgentExecutionToolReceiptApiResponse {
  id: string;
  executionRunId: string;
  toolFamily: string;
  toolName: string;
  riskClass: string;
  approvalMode: string;
  isolationGuarantee: string;
  startedAtUtc: Date;
  completedAtUtc: Date;
  runtimeToolProviderName: string;
  declaredSideEffectMode: number;
}
export type ToolExecutionSideEffectMode = number;
export interface AgentProviderUsageTotalsApiResponse {
  observationCount: unknown;
  knownObservationCount: unknown;
  unknownObservationCount: unknown;
  inputTokens: unknown;
  cachedInputTokens: unknown;
  cacheWriteTokens: unknown;
  outputTokens: unknown;
  reasoningTokens: unknown;
  totalTokens: unknown;
  toolCallCount: unknown;
  knownCostObservationCount: unknown;
  unknownCostObservationCount: unknown;
  knownCostUsd: unknown;
}
export interface AgentChatRuntimeApiResponse {
  executionLog: Array<AgentExecutionLogApiResponse>;
  metrics: Array<AgentRunMetricApiResponse>;
}
export interface ProviderChatCompletionApiRequest {
  model: string;
  systemPrompt: string;
  messages: Array<ProviderTestChatMessage>;
  prompt: string;
}
export interface AgentImageAttachmentUploadRequest {
  file?: null | IFormFile;
}
export interface AgentChatAttachmentStagingResult {
  relativePath: string;
  contentType: string;
  sizeBytes: unknown;
}
export interface CreateAgentRecruitingInterviewCommand {
  candidateAgentId: string;
  candidateConfigurationVersion: string;
  purpose: string;
  recruitmentApplicationId?: null | string;
  projectId?: null | string;
}
export interface AgentRecruitingInterview {
  id: string;
  candidateAgentId: string;
  candidateConfigurationVersion: string;
  candidateNameSnapshot: string;
  candidateModelSnapshot: string;
  purpose: string;
  createdAtUtc: Date;
  attempts: Array<AgentRecruitingAttempt>;
  reviews: Array<AgentRecruitingHumanReview>;
  recruitmentApplicationId?: null | string;
  projectId?: null | string;
}
export interface AgentRecruitingAttempt {
  id: string;
  interviewId: string;
  sequence: unknown;
  target: AgentRecruitingExecutionTarget;
  challengeKey: string;
  challengeVersion: string;
  rubricVersion: string;
  inputHash: string;
  outputHash: string;
  structuredOutputContractKey: string;
  structuredOutputSchemaHash: string;
  structuredOutputValidationStatus: string;
  automatedEvaluation: null | AgentRecruitingAutomatedEvaluation;
  completeness: AgentRecruitingEvidenceCompleteness;
  missingEvidence: Array<string>;
  createdAtUtc: Date;
  analysis?: null | AgentRecruitingAssessmentAnalysis;
}
export interface AgentRecruitingExecutionTarget {
  kind: AgentRecruitingTargetKind;
  id: string;
}
export type AgentRecruitingTargetKind = "agent-execution-run" | "workflow-run" | "process-run";
export interface AgentRecruitingAutomatedEvaluation {
  decision: AgentRecruitingAutomatedDecision;
  score: unknown;
  evaluatorAgentId: null | string;
  providerProfileId: null | string;
  model: string;
  rubricVersion: string;
  findings: Array<string>;
  evaluatedAtUtc: Date;
}
export type AgentRecruitingAutomatedDecision = "Passed" | "Failed" | "NeedsHumanReview";
export type AgentRecruitingEvidenceCompleteness = "Complete" | "Incomplete";
export interface AgentRecruitingAssessmentAnalysis {
  classification: AgentRecruitingAssessmentClassification;
  confidence: unknown;
  summary: string;
  proposedNextStep: AgentRecruitingProposedNextStep;
  strengths: Array<string>;
  gaps: Array<string>;
}
export type AgentRecruitingAssessmentClassification = "StrongFit" | "Suitable" | "NeedsTraining" | "NotSuitable" | "Inconclusive";
export type AgentRecruitingProposedNextStep = "Advance" | "RequestHumanReview" | "AssignTraining" | "Reassess" | "Hold" | "Reject";
export interface AgentRecruitingHumanReview {
  id: string;
  interviewId: string;
  attemptId: string;
  decision: AgentRecruitingHumanDecision;
  reviewerActorId: string;
  reviewerDisplayName: string;
  authorizationReference: string;
  authorizationEvidenceHash: string;
  notes: string;
  qualifiesForReadiness: boolean;
  missingEvidence: Array<string>;
  reviewedAtUtc: Date;
}
export type AgentRecruitingHumanDecision = "Approved" | "Rejected";
export interface AppendAgentRecruitingAttemptCommand {
  target: AgentRecruitingExecutionTarget;
  challengeKey: string;
  challengeVersion: string;
  rubricVersion: string;
  inputHash: string;
  outputHash: string;
  structuredOutputContractKey: string;
  structuredOutputSchemaHash: string;
  structuredOutputValidationStatus: string;
  automatedEvaluation: null | AgentRecruitingAutomatedEvaluation;
  analysis?: null | AgentRecruitingAssessmentAnalysis;
}
export interface AppendAgentRecruitingReviewCommand {
  attemptId: string;
  decision: AgentRecruitingHumanDecision;
  reviewerActorId: string;
  reviewerDisplayName: string;
  authorizationReference: string;
  authorizationEvidenceHash: string;
  notes: string;
}
export interface AgentRecruitingCandidateReadiness {
  candidateAgentId: string;
  currentConfigurationVersion: string;
  status: AgentRecruitingReadinessStatus;
  readyForProduction: boolean;
  activatesAgent: boolean;
  requiresSeparateActivationAuthorization: boolean;
  qualifyingInterviewId: null | string;
  qualifyingAttemptId: null | string;
  qualifyingReviewId: null | string;
  humanAuthorizationReference: string;
  humanAuthorizationEvidenceHash: string;
  reasons: Array<string>;
  attemptHistory: Array<AgentRecruitingAttemptComparison>;
}
export type AgentRecruitingReadinessStatus = "Ready" | "NoInterviews" | "IncompleteEvidence" | "AwaitingHumanApproval" | "Rejected";
export interface AgentRecruitingAttemptComparison {
  attemptId: string;
  sequence: unknown;
  createdAtUtc: Date;
  completeness: AgentRecruitingEvidenceCompleteness;
  automatedDecision: null | AgentRecruitingAutomatedDecision;
  score: unknown;
  humanDecision: null | AgentRecruitingHumanDecision;
}
export type PromptGalleryItemKind = number;
export type PromptArtifactStatus = number;
export type PromptGalleryConsumer = number;
export interface PromptGalleryPageOfPromptGallerySearchItem {
  items: Array<PromptGallerySearchItem>;
  pageIndex: unknown;
  pageSize: unknown;
  totalCount: unknown;
  totalPages?: unknown;
}
export interface PromptGallerySearchItem {
  id: string;
  title: string;
  summary: string;
  contentPreview: string;
  kind: number;
  phase: string;
  status: number;
  isArchived: boolean;
  collectionName: null | string;
  tags: Array<string>;
  supportedModels: Array<PromptProviderModel>;
  recommendations: PromptModelRecommendations;
  currentVersionNumber: unknown;
  updatedAtUtc: Date;
  isFavorite?: boolean;
}
export interface PromptProviderModel {
  provider: string;
  model: string;
  isPreferred?: boolean;
}
export interface PromptModelRecommendations {
  temperature?: unknown;
  maxOutputTokens?: unknown;
  topP?: unknown;
}
export interface PromptGalleryDraft {
  id: null | string;
  projectId: null | string;
  collectionId: null | string;
  title: string;
  summary: string;
  kind: number;
  phase: string;
  content: string;
  tags?: null | Array<string>;
  supportedModels?: null | Array<PromptProviderModel>;
  supportedConsumers?: null | Array<number>;
  recommendations?: null | PromptModelRecommendations;
  expectedUpdatedAtUtc?: null | Date;
}
export interface PromptDraftSaveReceipt {
  promptArtifactId?: string;
  updatedAtUtc?: Date;
}
export interface PromptGalleryItemDetails {
  id: string;
  projectId: null | string;
  collectionId: null | string;
  title: string;
  summary: string;
  kind: number;
  phase: string;
  status: number;
  isArchived: boolean;
  draftContent: string;
  currentVersionNumber: unknown;
  tags: Array<string>;
  templateTokens: Array<string>;
  supportedModels: Array<PromptProviderModel>;
  supportedConsumers: Array<number>;
  warningSuppressions: Array<PromptWarningSuppression>;
  recommendations: PromptModelRecommendations;
  source: PromptGallerySourceInfo;
  versions: Array<PromptGalleryVersionInfo>;
  createdAtUtc: Date;
  updatedAtUtc: Date;
  isFavorite?: boolean;
}
export interface PromptWarningSuppression {
  consumer: number;
  issueCode: number;
}
export type PromptCompatibilityIssueCode = number;
export interface PromptGallerySourceInfo {
  provenance: number;
  catalog: null | string;
  key: null | string;
  groupKey: null | string;
  groupName: null | string;
  itemKind: null | string;
  orderIndex: unknown;
}
export type PromptArtifactProvenance = number;
export interface PromptGalleryVersionInfo {
  id: string;
  versionNumber: unknown;
  creationReason: string;
  outputFormat: string;
  createdAtUtc: Date;
}
export interface PromptVersionCreateRequest {
  creationReason: string;
  expectedUpdatedAtUtc: Date;
  outputFormat?: string;
}
export interface PromptVersionSnapshot {
  promptArtifactId: string;
  promptVersionId: string;
  versionNumber: unknown;
  title: string;
  summary: string;
  kind: number;
  content: string;
  outputFormat: string;
  recommendations: PromptModelRecommendations;
  createdAtUtc: Date;
}
export interface PromptGalleryArchiveRequest {
  archived?: boolean;
}
export interface PromptGalleryFavoriteRequest {
  favorite?: boolean;
}
export interface PromptGalleryCompatibilityApiRequest {
  promptArtifactId: string;
  context: null | PromptGalleryConsumerContext;
}
export interface PromptGalleryConsumerContext {
  consumer: number;
  purpose?: number;
  requiredKind?: null | number;
  provider?: null | string;
  model?: null | string;
  requiresFinalVersion?: boolean;
}
export type PromptGalleryCompatibilityPurpose = number;
export interface PromptCompatibilityResult {
  issues: Array<PromptCompatibilityIssue>;
  canUse?: boolean;
  hasVisibleWarnings?: boolean;
}
export interface PromptCompatibilityIssue {
  code: number;
  severity: number;
  message: string;
  isSuppressible: boolean;
  isSuppressed: boolean;
}
export type PromptCompatibilitySeverity = number;
export interface PromptGalleryWarningSuppressionApiRequest {
  promptArtifactId: string;
  consumer: number;
  issueCode: number;
  suppressed?: boolean;
}
export interface WorkflowRunStartApiRequest {
  workflowId?: null | string;
  versionId?: null | string;
  inputJson?: null | string;
  requestedBackend?: null | number;
}
export interface WorkflowRunStartApiResponse {
  run: WorkflowRunSnapshot;
  events: Array<WorkflowEventRecord>;
  artifacts: Array<WorkflowArtifactRecord>;
  pendingExternalRequests: Array<WorkflowExternalRequestRecord>;
  checkpoints: Array<WorkflowCheckpointRecord>;
  idempotencyDisposition: number;
  idempotencyKeyHash: null | string;
  created: boolean;
  replayed: boolean;
}
export interface WorkflowRunSnapshot {
  runId: string;
  workflowId: string;
  versionId: string;
  state: number;
  backend: number;
  backendRunId: string;
  summary: string;
  createdAtUtc: Date;
  updatedAtUtc: Date;
  terminalAtUtc?: null | Date;
  origin?: null | WorkflowLaunchOrigin;
}
export type WorkflowRunId = string;
export type WorkflowVersionId = string;
export type WorkflowRunState = number;
export type WorkflowLaunchOrigin = {
  $origin: "api"
} & WorkflowLaunchOriginApi | {
  $origin: "preview"
} & WorkflowLaunchOriginPreview | {
  $origin: "scheduler-plan-run"
} & WorkflowLaunchOriginSchedulerPlanRun | {
  $origin: "project-structure-node"
} & WorkflowLaunchOriginProjectStructureNode | {
  $origin: "agent-runtime-invocation"
} & WorkflowLaunchOriginAgentRuntimeInvocation | {
  $origin: "process-assignment"
} & WorkflowLaunchOriginProcessAssignment;
export interface WorkflowLaunchOriginApi {
  $origin?: "api";
  actor: WorkflowLaunchActor;
  kind?: number;
  correlationId: WorkflowLaunchCorrelationId;
}
export interface WorkflowLaunchActor {
  kind: number;
  subjectId: string;
}
export type WorkflowLaunchActorKind = number;
export type WorkflowLaunchOriginKind = number;
export interface WorkflowLaunchCorrelationId {
  value: string;
}
export interface WorkflowLaunchOriginPreview {
  $origin?: "preview";
  actor: WorkflowLaunchActor;
  kind?: number;
  correlationId: WorkflowLaunchCorrelationId;
}
export interface WorkflowLaunchOriginSchedulerPlanRun {
  $origin?: "scheduler-plan-run";
  planId: string;
  planRunId: string;
  fireId: WorkflowSchedulerFireId;
  firedAtUtc: Date;
  kind?: number;
  correlationId: WorkflowLaunchCorrelationId;
}
export interface WorkflowSchedulerFireId {
  value: string;
}
export interface WorkflowLaunchOriginProjectStructureNode {
  $origin?: "project-structure-node";
  projectId: string;
  nodeId: WorkflowProjectStructureNodeId;
  requestingActor: WorkflowLaunchActor;
  sessionId: WorkflowLaunchSessionId;
  kind?: number;
  correlationId: WorkflowLaunchCorrelationId;
}
export interface WorkflowProjectStructureNodeId {
  value: string;
}
export interface WorkflowLaunchSessionId {
  value: string;
}
export interface WorkflowLaunchOriginAgentRuntimeInvocation {
  $origin?: "agent-runtime-invocation";
  agent: WorkflowLaunchActor;
  runtimeSessionId: WorkflowLaunchSessionId;
  purpose: string;
  kind?: number;
  correlationId: WorkflowLaunchCorrelationId;
}
export interface WorkflowLaunchOriginProcessAssignment {
  $origin?: "process-assignment";
  processRunId: string;
  assignmentId: string;
  kind?: number;
  correlationId: WorkflowLaunchCorrelationId;
}
export interface WorkflowEventRecord {
  id: string;
  runId: string;
  kind: number;
  nodeId: null | string;
  message: string;
  payloadJson: string;
  createdAtUtc: Date;
}
export type WorkflowEventKind = number;
export type WorkflowNodeId = string;
export interface WorkflowArtifactRecord {
  id: string;
  runId: string;
  kind: number;
  nodeId: null | string;
  name: string;
  contentType: string;
  storagePath: string;
  summary: string;
  createdAtUtc: Date;
}
export type WorkflowArtifactId = string;
export type WorkflowArtifactKind = number;
export interface WorkflowExternalRequestRecord {
  id: string;
  runId: string;
  kind: number;
  nodeId: string;
  eventName: string;
  requestJson: string;
  responseJson: string;
  createdAtUtc: Date;
  respondedAtUtc: null | Date;
}
export type WorkflowExternalRequestId = string;
export type WorkflowExternalRequestKind = number;
export interface WorkflowCheckpointRecord {
  id: string;
  runId: string;
  workflowId: string;
  versionId: string;
  backend: number;
  kind: number;
  trustBoundary: number;
  resumeAvailability: number;
  nodeId: null | string;
  externalRequestId: null | string;
  backendCheckpointId: string;
  payloadReference: string;
  payloadHash: string;
  summary: string;
  resumeUnavailableReason: string;
  createdAtUtc: Date;
  resumedAtUtc: null | Date;
}
export type WorkflowCheckpointId = string;
export type WorkflowCheckpointKind = number;
export type WorkflowCheckpointTrustBoundary = number;
export type WorkflowResumeAvailability = number;
export type WorkflowLaunchIdempotencyDisposition = number;
export interface WorkflowExternalRequestResponseApiRequest {
  responseJson: string;
}
export interface WorkflowLaunchIdempotencyEvidence {
  idempotencyKeyHash: string;
  requestFingerprint: string;
  canonicalInputHash: string;
  workflowId: string;
  selectionKind: number;
  requestedVersionId: null | string;
  resolvedVersionId: null | string;
  resolvedBackend: null | number;
  originalRunId: string;
  claimState: number;
  runState: null | number;
  isTerminal: boolean;
  createdAtUtc: Date;
  completedAtUtc: null | Date;
  wasReplayed: boolean;
  replayCount: unknown;
  lastReplayedAtUtc: null | Date;
}
export type WorkflowDefinitionSelectionKind = number;
export type WorkflowLaunchIdempotencyRecordState = number;
export interface WorkflowCatalogItem {
  id: string;
  versionId: string;
  name: string;
  description: string;
  status: number;
  preferredBackend: number;
  updatedAtUtc: Date;
  templateKey?: string;
  templatePackKey?: string;
  templatePackVersion?: string;
  sourceHash?: string;
  externalNamespace?: string;
  externalKey?: string;
}
export type WorkflowLifecycleStatus = number;
export interface WorkflowDefinitionSaveRequest {
  id: null | string;
  expectedVersionId: null | string;
  name: string;
  description: string;
  status: number;
  graph: WorkflowGraph;
  runtimePolicy: WorkflowRuntimePolicy;
  inputParameters?: Array<WorkflowInputParameterDescriptor>;
  externalNamespace?: string;
  externalKey?: string;
}
export interface WorkflowGraph {
  startNodeId: string;
  nodes: Array<WorkflowNode>;
  edges: Array<WorkflowEdge>;
}
export interface WorkflowNode {
  id: string;
  kind: number;
  name: string;
  ports: Array<WorkflowPort>;
  settings: WorkflowNodeSettings;
  canvasX?: unknown;
  canvasY?: unknown;
}
export type WorkflowNodeKind = number;
export interface WorkflowPort {
  id: string;
  name: string;
  direction: number;
  shape: WorkflowValueShape;
  required: boolean;
}
export type WorkflowPortId = string;
export type WorkflowPortDirection = number;
export interface WorkflowValueShape {
  kind: number;
  schemaJson: string;
  description: string;
}
export type WorkflowValueShapeKind = number;
export interface WorkflowNodeSettings {
  componentId: null | string;
  agentId: null | string;
  subworkflowId: null | string;
  externalRequestKind: null | number;
  instructions: string;
  inputShape: null | WorkflowValueShape;
  resultShape: null | WorkflowValueShape;
  providerProfileId?: null | string;
  model?: string;
  executorId?: null | string;
  executorSettingsJson?: string;
  executionPolicy?: null | WorkflowExecutorExecutionPolicy;
}
export type WorkflowComponentId = string;
export type WorkflowExecutorId = string;
export interface WorkflowExecutorExecutionPolicy {
  timeoutSeconds: unknown;
  maxRetryAttempts: unknown;
  retryDelayMilliseconds: unknown;
  captureOutputArtifact: boolean;
}
export interface WorkflowEdge {
  id: string;
  sourceNodeId: string;
  sourcePortId: null | string;
  targetNodeId: string;
  targetPortId: null | string;
  kind: number;
  conditionExpression: string;
  routing?: WorkflowEdgeRouting;
}
export type WorkflowEdgeId = string;
export type WorkflowEdgeKind = number;
export interface WorkflowEdgeRouting {
  kind: number;
  label: string;
  jsonPath: string;
  operator: number;
  expectedValueJson: string;
  expectedValueKind: number;
  caseSensitive: boolean;
  fanOutTargetIndex: unknown;
  routingLanguage: string;
}
export type WorkflowRouteKind = number;
export type WorkflowRouteOperator = number;
export type WorkflowRouteValueKind = number;
export interface WorkflowRuntimePolicy {
  preferredBackend: number;
  allowInProcessPreviewRuns: boolean;
  requireDurableProductionRuns: boolean;
  exposeAzureFunctionsStatusEndpoint: boolean;
  exposeAzureFunctionsMcpTool: boolean;
}
export interface WorkflowInputParameterDescriptor {
  key: string;
  label: string;
  kind: number;
  isRequired: boolean;
  description: string;
  jsonPath: string;
  defaultValue: string;
  optionSource: WorkflowInputParameterOptionSource;
  minimumValue: unknown;
  maximumValue: unknown;
  placeholder: string;
}
export type WorkflowInputParameterKind = number;
export interface WorkflowInputParameterOptionSource {
  kind: number;
  dependsOnParameterKey: string;
  staticOptions: Array<WorkflowInputParameterOption>;
}
export type WorkflowInputParameterOptionSourceKind = number;
export interface WorkflowInputParameterOption {
  value: string;
  label: string;
  description: string;
}
export interface WorkflowDefinition {
  id: string;
  versionId: string;
  name: string;
  description: string;
  status: number;
  graph: WorkflowGraph;
  runtimePolicy: WorkflowRuntimePolicy;
  createdAtUtc: Date;
  updatedAtUtc: Date;
  inputParameters?: Array<WorkflowInputParameterDescriptor>;
  templateKey?: string;
  templatePackKey?: string;
  templatePackVersion?: string;
  sourceHash?: string;
  externalNamespace?: string;
  externalKey?: string;
}
export interface WorkflowStableIdentityResolution {
  identityKind: WorkflowStableIdentityKind;
  namespace: string;
  key: string;
  status: WorkflowStableIdentityResolutionStatus;
  workflowId: null | string;
  runnableVersionId: null | string;
  materializations: Array<WorkflowCatalogItem>;
  message: string;
}
export type WorkflowStableIdentityKind = "Template" | "External";
export type WorkflowStableIdentityResolutionStatus = "Resolved" | "NotFound" | "Ambiguous" | "Stale";
export interface WorkflowSettings {
  defaultRuntimePolicy: WorkflowRuntimePolicy;
  artifactPolicy: WorkflowArtifactPolicy;
  humanInLoopPolicy: WorkflowHumanInLoopPolicy;
  voiceSettings?: null | AgentVoiceSettings;
  normalizedVoiceSettings?: AgentVoiceSettings;
}
export interface WorkflowArtifactPolicy {
  captureNodeOutputs: boolean;
  maxInlinePayloadCharacters: unknown;
  allowedArtifactKinds: Array<number>;
}
export interface WorkflowHumanInLoopPolicy {
  allowHumanInputNodes: boolean;
  requireApprovalForToolUse: boolean;
  defaultRequestTimeoutMinutes: unknown;
}
export interface AgentVoiceSettings {
  speechToText?: AgentSpeechToTextSettings;
  textToSpeech?: AgentTextToSpeechSettings;
  sampleText?: string;
  disclosureText?: string;
}
export interface AgentSpeechToTextSettings {
  isEnabled?: boolean;
  driverKind?: number;
  providerProfileId?: null | string;
  model?: string;
  language?: string;
  prompt?: string;
}
export type AgentVoiceDriverKind = number;
export interface AgentTextToSpeechSettings {
  isEnabled?: boolean;
  driverKind?: number;
  providerProfileId?: null | string;
  model?: string;
  voiceId?: string;
  responseFormat?: string;
  instructions?: string;
}
export interface WorkflowExecutorDescriptor {
  id: string;
  name: string;
  description: string;
  category: number;
  iconName: string;
  setupRendererKey: string;
  inputShape: WorkflowValueShape;
  resultShape: WorkflowValueShape;
  settingsSchemaJson: string;
  defaultSettingsJson: string;
  defaultPolicy: WorkflowExecutorExecutionPolicy;
  isImplemented: boolean;
  source?: WorkflowExecutorSourceDescriptor;
  availability?: WorkflowExecutorAvailabilityDescriptor;
  settingsSchema?: WorkflowExecutorSettingsSchemaDescriptor;
  configurationSchema?: ConfigurationSchema;
  settingsPresentationMode?: number;
  simulation?: WorkflowExecutorSimulationDescriptor;
  permissionPolicy?: WorkflowExecutorPermissionPolicy;
  sideEffects?: WorkflowExecutorSideEffectDescriptor;
  deterministicTestMode?: WorkflowExecutorDeterministicTestModeDescriptor;
  canExecute?: boolean;
}
export type WorkflowExecutorCategoryKind = number;
export interface WorkflowExecutorSourceDescriptor {
  kind: number;
  sourceId: string;
  sourceVersion: string;
  pluginId: string;
  packageId: string;
  trustLevel: number;
  displayName?: string;
  icon?: UiIconDescriptor;
}
export type WorkflowExecutorSourceKind = number;
export type WorkflowExecutorTrustLevel = number;
export interface UiIconDescriptor {
  kind: number;
  value: string;
  packageId?: string;
  label?: string;
}
export type UiIconKind = number;
export interface WorkflowExecutorAvailabilityDescriptor {
  kind: number;
  isRunnable: boolean;
  reasonCode: string;
  message: string;
}
export type WorkflowExecutorAvailabilityKind = number;
export interface WorkflowExecutorSettingsSchemaDescriptor {
  kind: number;
  version: string;
  schemaJson: string;
  hasSchema?: boolean;
}
export type WorkflowExecutorSettingsSchemaKind = number;
export interface ConfigurationSchema {
  version: string;
  fields: Array<ConfigurationFieldDescriptor>;
}
export interface ConfigurationFieldDescriptor {
  key: string;
  label: string;
  fieldType: number;
  isRequired: boolean;
  helpText: string;
  options?: Array<ConfigurationFieldOption>;
  numberKind?: number;
}
export type ConfigurationFieldType = number;
export interface ConfigurationFieldOption {
  value: string;
  label: string;
  acceptedValues?: Array<string>;
}
export type ConfigurationNumberKind = number;
export type WorkflowExecutorSettingsPresentationMode = number;
export interface WorkflowExecutorSimulationDescriptor {
  supportsPreviewSimulation: boolean;
  outputTemplateJson: string;
  description: string;
}
export interface WorkflowExecutorPermissionPolicy {
  requiredCapabilities: number;
  approvalRequirement: number;
  requiresApproval?: boolean;
}
export type WorkflowExecutorCapabilityFlags = number;
export type WorkflowExecutorApprovalRequirement = number;
export interface WorkflowExecutorSideEffectDescriptor {
  kind: number;
  externalMutationKind: number;
  supportsPreview: boolean;
  supportsDryRun: boolean;
  supportsCommit: boolean;
  requiresCommitIdempotencyKey: boolean;
  allowsIdempotentRetry: boolean;
  idempotencyKeyJsonPath: string;
  receiptSchema: string;
  writesExternalState?: boolean;
}
export type WorkflowExecutorSideEffectKind = number;
export type WorkflowExecutorExternalMutationKind = number;
export interface WorkflowExecutorDeterministicTestModeDescriptor {
  isSupported: boolean;
  description: string;
}
export interface WorkflowTemplateCatalogItem {
  key: string;
  name: string;
  description: string;
  nodeCount: unknown;
  edgeCount: unknown;
  inputCount: unknown;
  preferredBackend: number;
  flowShape: string;
}
export interface WorkflowDefinitionDetail {
  definition: WorkflowDefinition;
  validation: WorkflowValidationResult;
}
export interface WorkflowValidationResult {
  issues: Array<WorkflowValidationIssue>;
  succeeded?: boolean;
}
export interface WorkflowValidationIssue {
  code: number;
  message: string;
  nodeId?: unknown;
  edgeId?: unknown;
}
export type WorkflowValidationIssueCode = number;
export interface WorkflowDefinitionImportRequest {
  envelope: WorkflowDefinitionExportEnvelope;
  name: null | string;
  status: null | number;
  preserveWorkflowId: boolean;
}
export interface WorkflowDefinitionExportEnvelope {
  sourceFormat: string;
  definition: WorkflowDefinition;
  validation: WorkflowValidationResult;
  exportedAtUtc: Date;
}
export interface WorkflowProviderOption {
  providerProfileId: string;
  name: string;
  kind: number;
  transport: number;
  purpose: number;
  defaultModel: string;
  modelOptions: Array<string>;
  isEnabled: boolean;
  supportsStreaming: boolean;
  supportsTools: boolean;
  supportsStructuredOutput: boolean;
  supportsVision: boolean;
  supportsBackgroundResponses: boolean;
}
export interface LlmCallComponent {
  id: string;
  name: string;
  providerProfileId: null | string;
  model: string;
  modality: number;
  modelSettings: WorkflowModelSettings;
  instructions: string;
  inputShape: WorkflowValueShape;
  resultShape: WorkflowValueShape;
  permissions: AgentPermissionsPolicy;
  createdAtUtc: Date;
  updatedAtUtc: Date;
  promptArtifactId?: null | string;
  promptVersionId?: null | string;
}
export type WorkflowModality = number;
export interface WorkflowModelSettings {
  temperature: unknown;
  maxOutputTokens: unknown;
  requireJsonOutput: boolean;
  responseFormatJsonSchema: string;
}
export interface LlmCallComponentSaveRequest {
  id: null | string;
  name: string;
  providerProfileId: null | string;
  model: string;
  modality: number;
  modelSettings: WorkflowModelSettings;
  instructions: string;
  inputShape: WorkflowValueShape;
  resultShape: WorkflowValueShape;
  permissions: AgentPermissionsPolicy;
  promptArtifactId?: null | string;
  promptVersionId?: null | string;
}
export interface WorkflowTestRunRequest {
  workflowId: null | string;
  versionId: null | string;
  draftDefinition: null | WorkflowDefinition;
  inputJson: string;
  requestedBackend: null | number;
  validateOnly: boolean;
  previewSimulationPlan?: WorkflowPreviewSimulationPlan;
}
export interface WorkflowPreviewSimulationPlan {
  steps: Array<WorkflowPreviewSimulationStep>;
  hasSteps?: boolean;
}
export interface WorkflowPreviewSimulationStep {
  nodeId: string;
  sourceExecutorId: null | string;
  reason: string;
  outputTemplateJson: string;
}
export interface WorkflowTestRunResult {
  succeeded: boolean;
  validation: WorkflowValidationResult;
  run: null | WorkflowRunSnapshot;
  events: Array<WorkflowEventRecord>;
  artifacts: Array<WorkflowArtifactRecord>;
  pendingExternalRequests: Array<WorkflowExternalRequestRecord>;
  errorMessage: string;
  checkpoints?: Array<WorkflowCheckpointRecord>;
}
export interface WorkflowRunDetailApiResponse {
  run: WorkflowRunSnapshot;
  events: Array<WorkflowEventRecord>;
  artifacts: Array<WorkflowArtifactRecord>;
  pendingExternalRequests: Array<WorkflowExternalRequestRecord>;
  checkpoints: Array<WorkflowCheckpointRecord>;
}
export interface ProcessApiContractResponse {
  endpoints: Array<string>;
  boundarySummary: string;
}
export interface ProcessLaunchApiRequest {
  definitionKey?: null | string;
  processDefinitionId?: null | string;
  liveRunProfileKey?: null | string;
  projectId?: null | string;
  projectNodeId?: null | string;
  requestedBy?: string;
  variables?: null | Record<string, string>;
  runReadiness?: boolean;
  execute?: boolean;
}
export interface ProcessDispatchApiRequest {
  requestedBy?: string;
}
export interface ProcessRuntimeCancelApiRequest {
  requestedBy?: string;
  reason?: string;
}
export interface ProcessRuntimeReworkApiRequest {
  requestedBy?: string;
  reason?: string;
}
export type ProcessDefinitionCatalogScopeKind = number;
export interface ProcessDefinitionCatalogApiResponse {
  items: Array<ProcessDefinitionCatalogItemProjection>;
}
export interface ProcessDefinitionCatalogItemProjection {
  key: ProcessDefinitionCatalogItemKey;
  scopeKind: number;
  name: string;
  summary: string;
  status: number;
  criticality: string;
  operatingMode: string;
  updatedAtUtc: Date;
  compatibilityIssueCount: unknown;
}
export interface ProcessDefinitionCatalogItemKey {
  value?: null | string;
}
export type ProcessDefinitionCatalogItemStatus = number;
export interface ProcessDefinitionEditorProjection {
  definitionKey: ProcessDefinitionCatalogItemKey;
  versionToken: ProcessDefinitionEditorVersionToken;
  status: number;
  identity: ProcessDefinitionEditorIdentityProjection;
  governance: ProcessDefinitionEditorGovernanceProjection;
  contracts: ProcessDefinitionEditorContractProjection;
  simulation: ProcessDefinitionEditorSimulationProjection;
  lint: ProcessDefinitionEditorLintProjection;
  commands: Array<ProcessDefinitionEditorCommandProjection>;
  lastCommandReceipt: null | ProcessDefinitionEditorCommandReceipt;
  roleEditor?: null | ProcessDefinitionRoleEditorProjection;
  canvas?: null | ProcessDefinitionCanvasEditorProjection;
  stepEditor?: null | ProcessDefinitionStepEditorProjection;
  templateCatalog?: null | ProcessTemplateCatalogProjection;
}
export interface ProcessDefinitionEditorVersionToken {
  value?: null | string;
}
export type ProcessDefinitionAuthoringStatus = number;
export interface ProcessDefinitionEditorIdentityProjection {
  name: string;
  scopeLabel: string;
  customerName: string;
  ownerName: string;
  summary: string;
  valueStatement: string;
}
export interface ProcessDefinitionEditorGovernanceProjection {
  criticality: number;
  autonomyLevel: number;
  operatingMode: number;
  workingStatus: number;
  managerOverrideSummary: string;
  governanceNotes: string;
  changeSummary: string;
  governancePolicySummary: string;
}
export type ProcessDefinitionCriticalityLevel = number;
export type ProcessDefinitionAutonomyLevel = number;
export type ProcessDefinitionOperatingModeKind = number;
export interface ProcessDefinitionEditorContractProjection {
  interfaceContractSummary: string;
  constitutionRuleSummary: string;
  operatingModeSummary: string;
}
export interface ProcessDefinitionEditorSimulationProjection {
  simulationReadinessSummary: string;
  stepCount: unknown;
  requiredRoleCount: unknown;
  requiredArtifactExpectationCount: unknown;
  isReadyForSimulation: boolean;
}
export interface ProcessDefinitionEditorLintProjection {
  issues: Array<ProcessDefinitionEditorLintIssueProjection>;
  hasWarningsOrErrors?: boolean;
  hasBlockingIssues?: boolean;
}
export interface ProcessDefinitionEditorLintIssueProjection {
  code: string;
  severity: number;
  section: number;
  message: string;
  suggestion: string;
}
export type ProcessDefinitionEditorLintSeverity = number;
export type ProcessDefinitionEditorLintSection = number;
export interface ProcessDefinitionEditorCommandProjection {
  kind: number;
  text: string;
  icon: string;
  isEnabled: boolean;
  disabledReason: null | string;
}
export type ProcessDefinitionEditorCommandKind = number;
export interface ProcessDefinitionEditorCommandReceipt {
  receiptId: string;
  commandKind: number;
  status: number;
  versionToken: ProcessDefinitionEditorVersionToken;
  observedAtUtc: Date;
  summary: string;
  lintIssues: Array<ProcessDefinitionEditorLintIssueProjection>;
}
export type ProcessDefinitionEditorCommandStatus = number;
export interface ProcessDefinitionRoleEditorProjection {
  definitionKey: ProcessDefinitionCatalogItemKey;
  versionToken: ProcessDefinitionRoleEditorVersionToken;
  selectedRoleKey: null | ProcessDefinitionRoleKey;
  roles: Array<ProcessDefinitionRoleProjection>;
  selectedRole: null | ProcessDefinitionRoleProjection;
  templateActions: Array<ProcessDefinitionRoleTemplateActionProjection>;
  stepRoleBindings: Array<ProcessDefinitionStepRoleBindingProjection>;
  lint: ProcessDefinitionRoleLintProjection;
  commands: Array<ProcessDefinitionRoleCommandProjection>;
  lastCommandReceipt: null | ProcessDefinitionRoleCommandReceipt;
}
export interface ProcessDefinitionRoleEditorVersionToken {
  value?: null | string;
}
export interface ProcessDefinitionRoleKey {
  value?: null | string;
}
export interface ProcessDefinitionRoleProjection {
  roleKey: ProcessDefinitionRoleKey;
  displayName: string;
  summary: string;
  draft: ProcessDefinitionRoleDraftProjection;
  stepBindingCount: unknown;
}
export interface ProcessDefinitionRoleDraftProjection {
  roleKey: ProcessDefinitionRoleKey;
  displayName: string;
  purpose: string;
  staffingIntent: string;
  preferredExecutorKind: number;
  workflowPreference: ProcessDefinitionWorkflowPreferenceProjection;
  preferredProjectAssignmentRole: number;
  isRequired: boolean;
  allowsFallback: boolean;
  requiresExplicitApproval: boolean;
  defaultAllocationPercent: unknown;
  roleTemplateSourceKey: string;
  roleTemplateSnapshotName: string;
  snapshotSummary: string;
  overrideStatus: number;
  overrideSummary: string;
}
export type ProcessDefinitionRoleExecutorKind = number;
export interface ProcessDefinitionWorkflowPreferenceProjection {
  kind: number;
  workflowDefinitionId: null | string;
  workflowVersionId: null | string;
  displayName: string;
}
export type ProcessDefinitionRoleWorkflowPreferenceKind = number;
export type ProcessDefinitionRoleProjectAssignmentKind = number;
export type ProcessDefinitionRoleTemplateOverrideStatus = number;
export interface ProcessDefinitionRoleTemplateActionProjection {
  actionKey: ProcessDefinitionRoleTemplateActionKey;
  label: string;
  summary: string;
  templateRoleKey: null | ProcessDefinitionRoleKey;
  keyPrefix: string;
  displayNamePreview: string;
  preferredExecutorKind: number;
  defaultAllocationPercent: unknown;
}
export interface ProcessDefinitionRoleTemplateActionKey {
  value?: null | string;
}
export interface ProcessDefinitionStepRoleBindingProjection {
  stepKey: ProcessDefinitionStepKey;
  stepTitle: string;
  roleKey: ProcessDefinitionRoleKey;
  roleDisplayName: string;
  responsibilityKind: number;
  isRequired: boolean;
  fallbackOrder: unknown;
  rebindPolicySummary: string;
}
export interface ProcessDefinitionStepKey {
  value?: null | string;
}
export type ProcessStepRoleResponsibilityKind = number;
export interface ProcessDefinitionRoleLintProjection {
  issues: Array<ProcessDefinitionRoleLintIssueProjection>;
  hasWarningsOrErrors?: boolean;
  hasBlockingIssues?: boolean;
}
export interface ProcessDefinitionRoleLintIssueProjection {
  code: string;
  severity: number;
  section: number;
  message: string;
  suggestion: string;
}
export type ProcessDefinitionRoleLintSeverity = number;
export type ProcessDefinitionRoleLintSection = number;
export interface ProcessDefinitionRoleCommandProjection {
  kind: number;
  text: string;
  icon: string;
  isEnabled: boolean;
  disabledReason: null | string;
}
export type ProcessDefinitionRoleCommandKind = number;
export interface ProcessDefinitionRoleCommandReceipt {
  receiptId: string;
  commandKind: number;
  status: number;
  versionToken: ProcessDefinitionRoleEditorVersionToken;
  observedAtUtc: Date;
  summary: string;
  lintIssues: Array<ProcessDefinitionRoleLintIssueProjection>;
}
export type ProcessDefinitionRoleCommandStatus = number;
export interface ProcessDefinitionCanvasEditorProjection {
  definitionKey: ProcessDefinitionCatalogItemKey;
  versionToken: ProcessDefinitionCanvasVersionToken;
  viewport: ProcessDefinitionCanvasViewportProjection;
  nodes: Array<ProcessDefinitionCanvasEditorNodeProjection>;
  edges: Array<ProcessDefinitionCanvasEdgeProjection>;
  toolboxActions: Array<ProcessDefinitionCanvasToolboxActionProjection>;
  selection: ProcessDefinitionCanvasSelectionProjection;
  commands: Array<ProcessDefinitionCanvasCommandProjection>;
  lastCommandReceipt: null | ProcessDefinitionCanvasCommandReceipt;
}
export interface ProcessDefinitionCanvasVersionToken {
  value?: null | string;
}
export interface ProcessDefinitionCanvasViewportProjection {
  width: unknown;
  height: unknown;
  layoutSummary: string;
}
export interface ProcessDefinitionCanvasEditorNodeProjection {
  nodeKey: ProcessDefinitionCanvasNodeKey;
  kind: number;
  title: string;
  subtitle: string;
  summary: string;
  x: unknown;
  y: unknown;
  width: unknown;
  height: unknown;
  tone: string;
  stepKey: null | ProcessDefinitionStepKey;
  roleKey: null | ProcessDefinitionRoleKey;
  artifactKey: null | string;
  badges: Array<string>;
  ports: Array<ProcessDefinitionCanvasPortProjection>;
  stepKind?: null | number;
}
export interface ProcessDefinitionCanvasNodeKey {
  value?: null | string;
}
export type ProcessDefinitionCanvasNodeKind = number;
export interface ProcessDefinitionCanvasPortProjection {
  portKey: string;
  kind: number;
  label: string;
  offsetX: unknown;
  offsetY: unknown;
}
export type ProcessDefinitionCanvasPortKind = number;
export type ProcessDefinitionStepKind = number;
export interface ProcessDefinitionCanvasEdgeProjection {
  edgeKey: ProcessDefinitionCanvasEdgeKey;
  kind: number;
  fromNodeKey: ProcessDefinitionCanvasNodeKey;
  toNodeKey: ProcessDefinitionCanvasNodeKey;
  label: string;
  summary: string;
  tone: string;
  isBackwardRoute: boolean;
}
export interface ProcessDefinitionCanvasEdgeKey {
  value?: null | string;
}
export type ProcessDefinitionCanvasEdgeKind = number;
export interface ProcessDefinitionCanvasToolboxActionProjection {
  actionKey: ProcessDefinitionCanvasToolboxActionKey;
  kind: number;
  label: string;
  summary: string;
  icon: string;
  isEnabled: boolean;
  disabledReason: null | string;
  stepKind?: number;
}
export interface ProcessDefinitionCanvasToolboxActionKey {
  value?: null | string;
}
export type ProcessDefinitionCanvasToolboxActionKind = number;
export interface ProcessDefinitionCanvasSelectionProjection {
  kind: number;
  nodeKey: null | ProcessDefinitionCanvasNodeKey;
  edgeKey: null | ProcessDefinitionCanvasEdgeKey;
  title: string;
  summary: string;
  keyText: string;
  facts: Array<string>;
}
export type ProcessDefinitionCanvasSelectionKind = number;
export interface ProcessDefinitionCanvasCommandProjection {
  kind: number;
  text: string;
  icon: string;
  isEnabled: boolean;
  disabledReason: null | string;
}
export type ProcessDefinitionCanvasCommandKind = number;
export interface ProcessDefinitionCanvasCommandReceipt {
  receiptId: string;
  commandKind: number;
  status: number;
  versionToken: ProcessDefinitionCanvasVersionToken;
  observedAtUtc: Date;
  summary: string;
}
export type ProcessDefinitionCanvasCommandStatus = number;
export interface ProcessDefinitionStepEditorProjection {
  definitionKey: ProcessDefinitionCatalogItemKey;
  versionToken: ProcessDefinitionStepEditorVersionToken;
  selectedStepKey: null | ProcessDefinitionStepKey;
  steps: Array<ProcessDefinitionStepListItemProjection>;
  stepDrafts: Array<ProcessDefinitionStepDraftProjection>;
  selectedStep: null | ProcessDefinitionStepDraftProjection;
  subprocessOptions: Array<ProcessDefinitionSubprocessOptionProjection>;
  commands: Array<ProcessDefinitionStepCommandProjection>;
  lint: ProcessDefinitionStepLintProjection;
  lastCommandReceipt: null | ProcessDefinitionStepCommandReceipt;
}
export interface ProcessDefinitionStepEditorVersionToken {
  value?: null | string;
}
export interface ProcessDefinitionStepListItemProjection {
  stepKey: ProcessDefinitionStepKey;
  title: string;
  subtitle: string;
  stepKind: number;
  order: unknown;
  isSelected: boolean;
}
export interface ProcessDefinitionStepDraftProjection {
  basic: ProcessDefinitionStepBasicDraftProjection;
  operationContract: ProcessDefinitionStepOperationContractProjection;
  contracts: ProcessDefinitionStepContractsProjection;
  branchOutcomes: Array<ProcessDefinitionBranchOutcomeProjection>;
  roleBindings: Array<ProcessDefinitionStepRoleBindingProjection>;
  artifactExpectations: Array<ProcessDefinitionArtifactExpectationProjection>;
  subprocessMapping: ProcessDefinitionSubprocessMappingProjection;
}
export interface ProcessDefinitionStepBasicDraftProjection {
  stepKey: ProcessDefinitionStepKey;
  title: string;
  subtitle: string;
  notes: string;
  stepKind: number;
  targetLeadHours: unknown;
  allowsManualSkip: boolean;
  allowsSafeRefusal: boolean;
  requiresApproval: boolean;
  requiresDecisionRecord: boolean;
  decisionRoleKey: null | ProcessDefinitionRoleKey;
}
export interface ProcessDefinitionStepOperationContractProjection {
  targetScope: number;
  allowedOperations: Array<number>;
}
export type ProcessDefinitionStepTargetScopeKind = number;
export type ProcessDefinitionStepOperationKind = number;
export interface ProcessDefinitionStepContractsProjection {
  inputContractSummary: string;
  outputContractSummary: string;
  evidenceContractSummary: string;
  decisionRightsSummary: string;
  exceptionPolicySummary: string;
}
export interface ProcessDefinitionBranchOutcomeProjection {
  outcomeKey: ProcessDefinitionBranchOutcomeKey;
  title: string;
  description: string;
  routeTarget: ProcessDefinitionRouteTargetProjection;
  isBackwardRoute: boolean;
  loopBudget: ProcessDefinitionLoopBudgetProjection;
}
export interface ProcessDefinitionBranchOutcomeKey {
  value?: null | string;
}
export interface ProcessDefinitionRouteTargetProjection {
  kind: number;
  stepKey: null | ProcessDefinitionStepKey;
  artifactExpectationKey: null | ProcessDefinitionArtifactExpectationKey;
  summary: string;
}
export type ProcessDefinitionRouteTargetKind = number;
export interface ProcessDefinitionArtifactExpectationKey {
  value?: null | string;
}
export interface ProcessDefinitionLoopBudgetProjection {
  isRequired: boolean;
  maximumRepeats: unknown;
  fingerprintPolicyKey: string;
  escalationTargetKind: number;
}
export interface ProcessDefinitionArtifactExpectationProjection {
  artifactKey: ProcessDefinitionArtifactExpectationKey;
  templateKey: string;
  title: string;
  artifactKind: number;
  isRequired: boolean;
  trustRequirement: number;
  sensitivityLevel: number;
  retentionDays: unknown;
  workflowOutputId: string;
  workflowOutputName: string;
  workflowOutputKind: number;
  subprocessChildArtifactExpectationId: null | string;
  subprocessChildStepKey: string;
  subprocessChildArtifactTitle: string;
  allowedFutureUsageSummary: string;
  validationRequirementSummary: string;
}
export type ProcessDefinitionArtifactKind = number;
export type ProcessDefinitionArtifactTrustRequirement = number;
export type ProcessDefinitionArtifactSensitivityLevel = number;
export type ProcessDefinitionWorkflowOutputKind = number;
export interface ProcessDefinitionSubprocessMappingProjection {
  processKey: string;
  definitionSnapshotName: string;
  childArtifactMappings: Array<ProcessDefinitionArtifactExpectationProjection>;
}
export interface ProcessDefinitionSubprocessOptionProjection {
  definitionKey: ProcessDefinitionCatalogItemKey;
  displayName: string;
  summary: string;
}
export interface ProcessDefinitionStepCommandProjection {
  kind: number;
  text: string;
  icon: string;
  isEnabled: boolean;
  disabledReason: null | string;
}
export type ProcessDefinitionStepCommandKind = number;
export interface ProcessDefinitionStepLintProjection {
  issues: Array<ProcessDefinitionStepLintIssueProjection>;
  hasWarningsOrErrors?: boolean;
  hasBlockingIssues?: boolean;
}
export interface ProcessDefinitionStepLintIssueProjection {
  code: string;
  severity: number;
  section: number;
  message: string;
  suggestion: string;
}
export type ProcessDefinitionStepLintSeverity = number;
export type ProcessDefinitionStepLintSection = number;
export interface ProcessDefinitionStepCommandReceipt {
  receiptId: string;
  commandKind: number;
  status: number;
  versionToken: ProcessDefinitionStepEditorVersionToken;
  observedAtUtc: Date;
  summary: string;
  lintIssues: Array<ProcessDefinitionStepLintIssueProjection>;
}
export type ProcessDefinitionStepCommandStatus = number;
export interface ProcessTemplateCatalogProjection {
  targetDefinitionKey: ProcessDefinitionCatalogItemKey;
  versionToken: ProcessTemplateCatalogVersionToken;
  query: ProcessTemplateCatalogQueryProjection;
  summary: string;
  packVersion: string;
  canonicalSourceSummary: string;
  categories: Array<ProcessTemplateCatalogCategoryProjection>;
  items: Array<ProcessTemplateCatalogItemProjection>;
  selectedItem: null | ProcessTemplateCatalogItemProjection;
  preview: null | ProcessTemplateCatalogPreviewProjection;
  importTargets: Array<ProcessTemplateImportTargetStepProjection>;
  commands: Array<ProcessTemplateImportCommandProjection>;
  importedComponents: Array<ProcessTemplateImportedComponentProjection>;
  lastImportReceipt: null | ProcessTemplateImportCommandReceipt;
}
export interface ProcessTemplateCatalogVersionToken {
  value?: null | string;
}
export interface ProcessTemplateCatalogQueryProjection {
  searchText: null | string;
  category: number;
  selectedItemKey: null | ProcessTemplateCatalogItemKey;
  previewTab: number;
  take: unknown;
}
export type ProcessTemplateCatalogCategoryKind = number;
export interface ProcessTemplateCatalogItemKey {
  value?: null | string;
}
export type ProcessTemplateCatalogPreviewTabKind = number;
export interface ProcessTemplateCatalogCategoryProjection {
  kind: number;
  label: string;
  description: string;
  count: unknown;
  isSelected: boolean;
}
export interface ProcessTemplateCatalogItemProjection {
  key: ProcessTemplateCatalogItemKey;
  kind: number;
  title: string;
  summary: string;
  sourceDefinitionKey: string;
  sourceComponentKey: string;
  categoryLabel: string;
  facts: Array<ProcessTemplateCatalogFactProjection>;
  isSelected: boolean;
}
export type ProcessTemplateCatalogItemKind = number;
export interface ProcessTemplateCatalogFactProjection {
  label: string;
  value: string;
}
export interface ProcessTemplateCatalogPreviewProjection {
  itemKey: ProcessTemplateCatalogItemKey;
  kind: number;
  title: string;
  summary: string;
  sourceJsonRelativePath: string;
  sourceJsonHash: string;
  generatedProjectionNotice: string;
  generatedMarkdown: string;
  generatedMermaid: string;
  canonicalJson: string;
  structure: Array<ProcessTemplateStructureNodeProjection>;
  relatedComponents: Array<ProcessTemplateRelatedComponentProjection>;
}
export interface ProcessTemplateStructureNodeProjection {
  nodeKey: string;
  parentNodeKey: null | string;
  kind: number;
  title: string;
  summary: string;
  depth: unknown;
}
export type ProcessTemplateStructureNodeKind = number;
export interface ProcessTemplateRelatedComponentProjection {
  key: ProcessTemplateCatalogItemKey;
  kind: number;
  title: string;
  summary: string;
  sourceDefinitionKey: string;
  sourceComponentKey: string;
  isImported: boolean;
}
export interface ProcessTemplateImportTargetStepProjection {
  stepKey: ProcessDefinitionStepKey;
  title: string;
  summary: string;
  isDefaultTarget: boolean;
}
export interface ProcessTemplateImportCommandProjection {
  kind: number;
  text: string;
  icon: string;
  isEnabled: boolean;
  disabledReason: null | string;
}
export type ProcessTemplateImportCommandKind = number;
export interface ProcessTemplateImportedComponentProjection {
  itemKey: ProcessTemplateCatalogItemKey;
  kind: number;
  title: string;
  sourceDefinitionKey: string;
  sourceComponentKey: string;
  sourceJsonHash: string;
  targetStepKey: null | ProcessDefinitionStepKey;
  importedAtUtc: Date;
}
export interface ProcessTemplateImportCommandReceipt {
  receiptId: string;
  commandKind: number;
  status: number;
  versionToken: ProcessTemplateCatalogVersionToken;
  observedAtUtc: Date;
  summary: string;
}
export type ProcessTemplateImportCommandStatus = number;
export interface MemoryProviderProfileApiResponse {
  providerId: string;
  displayName: string;
  driverKind: MemoryProviderDriverKind;
  isEnabled: boolean;
  healthState: MemoryProviderHealthState;
  workspaceScope: MemoryProviderWorkspaceScope;
  fallbackBehavior: MemoryProviderFallbackBehavior;
  providerKind: string;
  protocolVersion: string;
  selectionTags: Array<string>;
  capabilities: MemoryProviderCapabilitiesApiResponse;
  interactionSupport: MemoryProviderInteractionSupportApiResponse;
  limits: MemoryProviderLimitsApiResponse;
  http: null | MemoryProviderHttpTransportApiModel;
  mcp: null | MemoryProviderMcpTransportApiModel;
}
export type MemoryProviderDriverKind = "Http" | "Mcp" | "NativeRemote" | "Mock" | "InProcessMigration";
export type MemoryProviderHealthState = "Unknown" | "Healthy" | "Degraded" | "Unreachable";
export type MemoryProviderWorkspaceScope = "AllWorkspaces" | "SingleWorkspace";
export type MemoryProviderFallbackBehavior = "DenyImplicitFallback" | "AllowDefaultProviderWhenNoAssignment";
export interface MemoryProviderCapabilitiesApiResponse {
  supportsSynchronousQueries: boolean;
  supportsAsynchronousQueries: boolean;
  supportsOperationStatus: boolean;
  supportsRclUi: boolean;
  supportsIframeUi: boolean;
}
export interface MemoryProviderInteractionSupportApiResponse {
  supportsSynchronousQueries: boolean;
  supportsAsynchronousOperations: boolean;
}
export interface MemoryProviderLimitsApiResponse {
  maxContextSections: unknown;
  maxSourceItems: unknown;
  maxInFlightOperations: unknown;
  operationTimeoutSeconds: unknown;
}
export interface MemoryProviderHttpTransportApiModel {
  baseUrl: string;
  queryPath: string;
  healthPath: string;
  apiKeyEnvironmentVariable: string;
  authHeaderName: string;
  authScheme: string;
  timeoutMilliseconds: unknown;
  maxRetryAttempts: unknown;
}
export interface MemoryProviderMcpTransportApiModel {
  descriptorKind: string;
  serverKey: string;
  displayName: string;
  description: string;
  remoteEndpoint: string;
  authHeaderName: string;
  authHeaderEnvironmentVariable: string;
  contextQueryTool: string;
  operationStatusTool: string;
}
export interface MemoryProviderProfileApiRequest {
  displayName: string;
  driverKind: MemoryProviderDriverKindApiRequest;
  isEnabled: boolean;
  fallbackBehavior: MemoryProviderFallbackBehaviorApiRequest;
  providerKind: string;
  selectionTags: null | Array<string>;
  capabilities: MemoryProviderCapabilitiesApiRequest;
  http: null | MemoryProviderHttpTransportApiModel;
  mcp: null | MemoryProviderMcpTransportApiModel;
}
export type MemoryProviderDriverKindApiRequest = "Http" | "Mcp" | "NativeRemote" | "Mock";
export type MemoryProviderFallbackBehaviorApiRequest = "DenyImplicitFallback" | "AllowDefaultProviderWhenNoAssignment";
export interface MemoryProviderCapabilitiesApiRequest {
  supportsSynchronousQueries: boolean;
  supportsAsynchronousQueries: boolean;
  supportsOperationStatus: boolean;
}
export interface MemoryProviderQueryApiRequest {
  query: string;
  mode: MemoryProviderQueryMode;
}
export type MemoryProviderQueryMode = "Synchronous" | "Asynchronous";
export interface MemoryProviderQueryApiResponse {
  status: MemoryOperationHandlerStatus;
  diagnostic: string;
  selection: MemoryProviderSelectionApiResponse;
  operation: null | MemoryProviderOperationApiResponse;
  contextPack: null | MemoryContextPackApiResponse;
  acceptedOperation: null | MemoryAcceptedOperationApiResponse;
  feedbackHandle: null | string;
  driverDispatchAttempted: boolean;
}
export type MemoryOperationHandlerStatus = "Completed" | "Accepted" | "NoProviderConfigured" | "NoEnabledProvider" | "ProviderNotFound" | "ProviderDisabled" | "CapabilityUnavailable" | "CapabilityDenied" | "CapabilityMismatch" | "DriverUnavailable" | "SourceCaptureFailed" | "NotFound" | "Cancelled" | "Failed" | "TimedOut" | "UnsupportedOperation" | "ProviderDenied" | "ProviderSelectionRequired" | "AccessDenied" | "ProviderConfigurationFailed" | "DriverFailed";
export interface MemoryProviderSelectionApiResponse {
  status: MemoryProviderSelectionStatus;
  reason: MemoryProviderSelectionReason;
  requiredCapability: string;
  dispatchAllowed: boolean;
  diagnostic: string;
  selectedProviderId: null | string;
  candidateProviderIds: Array<string>;
}
export type MemoryProviderSelectionStatus = "Selected" | "NoProviderConfigured" | "NoEnabledProvider" | "ProviderNotFound" | "ProviderDisabled" | "CapabilityUnavailable" | "CapabilityDenied" | "ProviderDenied" | "ProviderSelectionRequired" | "ProviderConfigurationFailed";
export type MemoryProviderSelectionReason = "None" | "ExplicitProvider" | "AssignmentOverride" | "DefaultProvider";
export interface MemoryProviderOperationApiResponse {
  operationId: string;
  providerId: string;
  requestedCapability: string;
  operationKind: MemoryOperationKind;
  status: MemoryLedgerStatus;
  retryCount: unknown;
  transitionCount: unknown;
  createdAtUtc: Date;
  updatedAtUtc: Date;
  completedAtUtc: null | Date;
  statusReason: string;
}
export type MemoryOperationKind = "ContextQuery" | "Ingestion" | "Feedback" | "SourceRequest" | "EventAcknowledge" | "OperationStatus" | "CapabilityExchange" | "Health";
export type MemoryLedgerStatus = "Pending" | "Accepted" | "Running" | "Completed" | "Failed" | "TimedOut" | "Cancelled" | "Expired" | "Forgotten";
export interface MemoryContextPackApiResponse {
  contextPackId: string;
  summary: string;
  sections: Array<MemoryContextSectionApiResponse>;
  warnings: Array<MemoryWarningApiResponse>;
  providerConfidence: unknown;
  feedbackHandle: null | string;
}
export interface MemoryContextSectionApiResponse {
  title: string;
  text: string;
  citations: Array<MemoryCitationApiResponse>;
  confidence: unknown;
}
export interface MemoryCitationApiResponse {
  sourceRef: string;
  label: string;
}
export interface MemoryWarningApiResponse {
  kind: MemoryWarningKind;
  message: string;
}
export type MemoryWarningKind = "PolicyLimited" | "ProviderPartial" | "CapabilityUnavailable" | "SourceUnavailable";
export interface MemoryAcceptedOperationApiResponse {
  operationId: string;
  statusPath: string;
  expiresAtUtc: Date;
  pollAfterSeconds: unknown;
  callbackAvailable: boolean;
}
export interface MemoryProviderOperationStatusApiResponse {
  status: MemoryOperationHandlerStatus;
  diagnostic: string;
  selection: MemoryProviderSelectionApiResponse;
  operation: null | MemoryProviderOperationApiResponse;
}
export type PluginLogStreamKind = number;
export interface PluginPackageInstallRequest {
  enable?: boolean;
  actor?: string;
}
export interface PluginRuntimeRestartRequest {
  actor?: string;
}
export interface PluginInstallRequest {
  enable?: boolean;
  actor?: string;
}
export interface PluginInstallationUpdateRequest {
  actor?: string;
}
export interface PluginGrantUpdateRequest {
  capability: number;
  state: number;
  recipeId?: null | string;
  scopeKind?: number;
  scopeKey?: string;
  riskKind?: number;
  reason?: string;
}
export type PluginCapabilityKind = number;
export type PluginGrantState = number;
export type PluginGrantScopeKind = number;
export type PluginGrantRiskKind = number;
export interface PluginConnectionSaveRequest {
  id: null | string;
  connectionKey: string;
  displayName: string;
  settingsJson: string;
  isEnabled?: boolean;
}
export type PluginConnectionId = string;
export type PluginConnectionKey = string;
export interface PluginOAuthStartRequest {
  connectionKey: string;
  connectionId?: unknown;
  displayName?: string;
  returnPath?: string;
  scopes?: null | Array<string>;
  redirectUri?: null | string;
}
export type PartyRecordScope = number;
export interface PartyCreateApiRequest {
  partyType?: number;
  lifecycleStatus?: number;
  displayName?: string;
  legalName?: string;
  preferredName?: string;
  externalCode?: string;
  summary?: string;
  tags?: Array<string>;
  region?: string;
  countryCode?: string;
  timeZone?: string;
  isSensitive?: boolean;
  roles?: Array<PartyRoleCreateApiRequest>;
  publicContacts?: Array<PartyPublicContactCreateApiRequest>;
  addresses?: Array<PartyAddressCreateApiRequest>;
}
export type PartyType = number;
export type PartyLifecycleStatus = number;
export interface PartyRoleCreateApiRequest {
  roleKind?: number;
  title?: string;
  isPrimary?: boolean;
  validFromUtc?: null | Date;
  validToUtc?: null | Date;
}
export type PartyRoleKind = number;
export interface PartyPublicContactCreateApiRequest {
  contactType?: number;
  label?: string;
  value?: string;
  isPrimary?: boolean;
  tags?: Array<string>;
}
export type PartyContactType = number;
export interface PartyAddressCreateApiRequest {
  addressType?: string;
  line1?: string;
  line2?: string;
  city?: string;
  region?: string;
  postalCode?: string;
  countryCode?: string;
  isPrimary?: boolean;
}
export interface PartyRelationshipsReplaceApiRequest {
  relationships?: Array<PartyRelationshipReplaceItemApiRequest>;
}
export interface PartyRelationshipReplaceItemApiRequest {
  relatedPartyId?: string;
  relationshipKind?: number;
  isOutgoing?: boolean;
  isPrimary?: boolean;
  startDateUtc?: null | Date;
  endDateUtc?: null | Date;
  notes?: string;
}
export type PartyRelationshipKind = number;
export interface WorkforceProfileSaveApiRequest {
  partyId?: string;
  workforceKind?: number;
  employeeCode?: string;
  jobTitle?: string;
  discipline?: string;
  seniority?: string;
  homeUnitPartyId?: null | string;
  managerPartyId?: null | string;
  startDate?: null | string;
  endDate?: null | string;
  location?: string;
  timeZone?: string;
  internalCostRate?: unknown;
  externalBillingRate?: unknown;
  rateUnit?: number;
  rateCurrencyCode?: string;
  capacityHoursPerWeek?: unknown;
  status?: string;
  notes?: string;
}
export type WorkforceKind = number;
/**
 * A date on a calendar without a time zone, e.g. "April 10th"
 */
export type PlainDate = string;
export type ProjectResourceRateUnit = number;
export interface SkillDefinitionSaveApiRequest {
  id?: null | string;
  name?: string;
  category?: string;
  description?: string;
  isActive?: boolean;
}
export interface PartySkillSaveApiRequest {
  id?: null | string;
  partyId?: string;
  skillId?: string;
  proficiency?: number;
  yearsExperience?: unknown;
  certificationStatus?: string;
  lastValidatedOn?: null | string;
  notes?: string;
}
export type SkillProficiencyLevel = number;
export interface CapacityBlockSaveApiRequest {
  id?: null | string;
  partyId?: string;
  blockKind?: number;
  startDate?: null | string;
  endDate?: null | string;
  percentage?: unknown;
  relatedProjectId?: null | string;
  notes?: string;
}
export type CapacityBlockKind = number;
export type RecruitmentApplicationScope = number;
export interface RecruitmentApplicationSaveApiRequest {
  id?: null | string;
  partyId?: null | string;
  candidateName?: string;
  candidateEmail?: string;
  candidatePhone?: string;
  candidateSummary?: string;
  targetUnitPartyId?: null | string;
  recruiterPartyId?: null | string;
  hiringManagerPartyId?: null | string;
  desiredRole?: string;
  source?: string;
  stage?: number;
  availableFrom?: null | string;
  decision?: number;
  stageNotes?: string;
  notes?: string;
}
export type RecruitmentStage = number;
export type RecruitmentDecision = number;
export interface RecruitmentInterviewSaveApiRequest {
  id?: null | string;
  applicationId?: string;
  scheduledAtUtc?: null | Date;
  interviewType?: number;
  interviewerPartyId?: null | string;
  outcome?: number;
  feedback?: string;
  recommendation?: string;
}
export type RecruitmentInterviewType = number;
export type RecruitmentInterviewOutcome = number;
export interface LifecycleTaskSaveApiRequest {
  id?: null | string;
  partyId?: string;
  taskKind?: number;
  title?: string;
  ownerPartyId?: null | string;
  dueDate?: null | string;
  status?: number;
  relatedProjectId?: null | string;
  notes?: string;
}
export type LifecycleTaskKind = number;
export type LifecycleTaskStatus = number;
export interface RecruitmentSupportAssignmentsSaveApiRequest {
  partyId?: string;
  managerPartyId?: null | string;
  buddyPartyId?: null | string;
  mentorPartyId?: null | string;
}
export interface RecruitmentConversionApiRequest {
  applicationId?: string;
  workforceKind?: number;
  jobTitle?: string;
  discipline?: string;
  seniority?: string;
  homeUnitPartyId?: null | string;
  managerPartyId?: null | string;
  startDate?: null | string;
  location?: string;
  timeZone?: string;
  capacityHoursPerWeek?: unknown;
  status?: string;
  notes?: string;
}
export interface LlmChatProviderOptionApiResponse {
  providerProfileId: string;
  providerName: string;
  providerKind: number;
  models: Array<LlmChatModelOptionApiResponse>;
}
export interface LlmChatModelOptionApiResponse {
  model: string;
  thinkingEffort: LlmChatThinkingEffortOptionApiResponse;
}
export interface LlmChatThinkingEffortOptionApiResponse {
  status: number;
  controlMode: number;
  allowedEfforts: Array<number>;
  providerDefault: null | number;
}
export interface ProblemDetails {
  type?: null | string;
  title?: null | string;
  status?: unknown;
  detail?: null | string;
  instance?: null | string;
}
export interface LlmChatApiPageOfLlmChatDefinitionApiResponse {
  items: Array<LlmChatDefinitionApiResponse>;
  nextCursor: null | string;
}
export interface LlmChatDefinitionApiResponse {
  id: string;
  name: string;
  summary: string;
  avatarImageUrl: string;
  status: LlmChatDefinitionStatus;
  currentRevision: unknown;
  providerProfileId: string;
  providerName: string;
  providerKind: number;
  model: string;
  thinkingEffort: null | number;
  tags: Array<string>;
  concurrencyToken: unknown;
  createdAtUtc: Date;
  updatedAtUtc: Date;
  modelSettings?: null | LlmChatModelSettingsApiResponse;
  responseFormat?: null | LlmChatResponseFormatApiResponse;
  revisionReason?: null | string;
}
export type LlmChatDefinitionStatus = "draft" | "active" | "suspended" | "archived";
export interface LlmChatModelSettingsApiResponse {
  temperature: unknown;
  modelParameterConfiguration: string;
  timeoutSeconds: unknown;
}
export interface LlmChatResponseFormatApiResponse {
  requireJson: boolean;
  schema: string;
  schemaName: string;
  schemaDescription: string;
}
export interface LlmChatDefinitionMutationApiRequest {
  name: string;
  summary: string;
  avatarImageUrl: string;
  systemPrompt: string;
  providerProfileId: string;
  model: string;
  thinkingEffort: null | number;
  modelSettings: null | LlmChatModelSettingsApiRequest;
  tags: null | Array<string>;
  revisionReason: string;
  responseFormat?: null | LlmChatResponseFormatApiRequest;
  expectedConcurrencyToken?: unknown;
}
export interface LlmChatModelSettingsApiRequest {
  temperature: unknown;
  modelParameterConfiguration: string;
  timeoutSeconds: unknown;
}
export interface LlmChatResponseFormatApiRequest {
  requireJson: boolean;
  schema: string;
  schemaName: string;
  schemaDescription: string;
}
export interface LlmChatDefinitionEditorApiResponse {
  id: string;
  name: string;
  summary: string;
  avatarImageUrl: string;
  status: LlmChatDefinitionStatus;
  revision: unknown;
  systemPrompt: string;
  providerProfileId: string;
  providerName: string;
  providerKind: number;
  model: string;
  thinkingEffort: null | number;
  modelSettings: LlmChatModelSettingsApiResponse;
  responseFormat: null | LlmChatResponseFormatApiResponse;
  tags: Array<string>;
  revisionReason: string;
  concurrencyToken: unknown;
  createdAtUtc: Date;
  updatedAtUtc: Date;
}
export interface LlmChatExpectedConcurrencyApiRequest {
  expectedConcurrencyToken: unknown;
}
export interface CreateLlmChatConversationApiRequest {
  title: string;
}
export interface LlmChatConversationApiResponse {
  id: string;
  definitionId: string;
  definitionRevision: unknown;
  definitionName: string;
  title: string;
  status: LlmChatConversationStatus;
  origin: LlmChatConversationOrigin;
  transcriptRevision: unknown;
  hasActiveTurn: boolean;
  concurrencyToken: unknown;
  createdAtUtc: Date;
  updatedAtUtc: Date;
  activeOperationId?: null | string;
  messages?: null | Array<LlmChatMessageApiResponse>;
  nextMessageCursor?: null | string;
}
export type LlmChatConversationStatus = "active" | "archived";
export type LlmChatConversationOrigin = "application" | "api";
export interface LlmChatMessageApiResponse {
  entryId: string;
  turnId: string;
  role: LlmMessageRole;
  content: string;
  createdAtUtc: Date;
  model: string;
  usage: null | LlmChatUsageApiResponse;
}
export type LlmMessageRole = "system" | "user" | "assistant";
export interface LlmChatUsageApiResponse {
  inputTokens: unknown;
  outputTokens: unknown;
  cachedInputTokens: unknown;
}
export interface LlmChatApiPageOfLlmChatConversationApiResponse {
  items: Array<LlmChatConversationApiResponse>;
  nextCursor: null | string;
}
export interface RenameLlmChatConversationApiRequest {
  title: string;
  expectedTranscriptRevision: unknown;
  expectedConcurrencyToken?: unknown;
}
export interface SendLlmChatTurnApiRequest {
  operationId: string;
  expectedTranscriptRevision: unknown;
  message: string;
}
export interface LlmChatOperationApiResponse {
  schema: string;
  operationId: string;
  conversationId: string;
  status: LlmChatOperationStatus;
  replayed: boolean;
  expectedTranscriptRevision: unknown;
  resultingTranscriptRevision: unknown;
  lastEventSequence: unknown;
  statusUrl: string;
  eventsUrl: string;
  cancelUrl: string;
  invocationAttempts: Array<LlmChatInvocationAttemptApiResponse>;
  assistantMessage: null | LlmChatMessageApiResponse;
  failure: null | LlmChatOperationFailureApiResponse;
  startedAtUtc: Date;
  completedAtUtc: null | Date;
}
export type LlmChatOperationStatus = "pending" | "running" | "succeeded" | "failed" | "cancellationRequested" | "cancelled" | "recoveryRequired";
export interface LlmChatInvocationAttemptApiResponse {
  ordinal: unknown;
  providerKind: number;
  model: string;
  deliveryMode: number;
  finishReason: null | string;
  requestedThinkingEffort: null | number;
  effectiveThinkingEffort: null | number;
  outcome: number;
  usage: LlmChatUsageApiResponse;
  failure: null | LlmChatOperationFailureApiResponse;
  startedAtUtc: Date;
  completedAtUtc: Date;
}
export type LlmStreamingDeliveryMode = number;
export type LlmChatInvocationOutcome = number;
export interface LlmChatOperationFailureApiResponse {
  code: string;
  retryable: boolean;
}
