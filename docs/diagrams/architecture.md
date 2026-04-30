# Architecture & Execution Diagrams

## 11. Guided Execution Framework (Detailed)
*How the engine handles step transitions and state persistence.*

```mermaid
graph TD
    Trigger[Incident Trigger] --> Search[Find Runbook Template]
    Search --> Init[Initialize Execution Instance]
    Init --> Step1[Phase 1: Identification]
    Step1 --> Check{Manual or Auto?}
    Check -->|Auto| Exec[Execute Automation Script]
    Check -->|Manual| Prompt[Prompt Responder]
    Exec & Prompt --> Evidence[Capture Evidence Artifact]
    Evidence --> Step2[Phase 2: Containment]
```

## 13. Decision Branching Logic
```mermaid
graph LR
    Step[Step: Assess Breach] --> Condition{Impact > 100 Users?}
    Condition -- Yes --> Major[Run SEV1 Playbook]
    Condition -- No --> Minor[Run SEV2 Playbook]
```

## 20. Evidence Integrity Chain
```mermaid
stateDiagram-v2
    Capture --> Hashing: Generate Checksum
    Hashing --> Encrypt: AES-256-KMS
    Encrypt --> Store: S3 Immutable Vault
    Store --> Audit: Linked to Execution Report
```
