export enum RunbookType {
  SECURITY = "SECURITY",
  OPERATIONS = "OPERATIONS",
  CLOUD = "CLOUD",
  COMPLIANCE = "COMPLIANCE"
}

export enum StepStatus {
  PENDING = "PENDING",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
  SKIPPED = "SKIPPED",
  FAILED = "FAILED"
}

export interface RunbookStep {
  id: string;
  title: string;
  description: string;
  instructions: string;
  isAutomated: boolean;
  automationScript?: string;
  status: StepStatus;
  completedAt?: string;
  evidenceId?: string;
}

export interface Runbook {
  id: string;
  name: string;
  type: RunbookType;
  description: string;
  steps: RunbookStep[];
  version: string;
  createdAt: string;
}

export interface ExecutionRecord {
  id: string;
  runbookId: string;
  incidentId: string;
  executor: string;
  status: "ACTIVE" | "COMPLETED" | "CANCELLED";
  startTime: string;
  endTime?: string;
  evidenceIds: string[];
}
