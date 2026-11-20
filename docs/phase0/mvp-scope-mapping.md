# MVP scope and acceptance mapping (issue #2)

Owner: NzeNdiWamanyi

Each PRD `#19` criterion is mapped to the issue that owns its delivery.

| Criterion | Acceptance criterion (abridged) | Owning issue |
|---|---|---|
| 1 | Business registers and creates a profile | #5 and #6 |
| 2 | Reviewer records verification status and evidence | #6 |
| 3 | Business creates equity offering with versioned terms | #6 |
| 4 | Authorized reviewer approves or rejects demo offering | #6 |
| 5 | Investor registers and completes simulated eligibility | #7 |
| 6 | Investor reviews offering and acknowledges disclosures | #7 |
| 7 | Investor submits simulated subscription | #7 |
| 8 | Allocation recorded and linked to investor and offering | #7 |
| 9 | Test token representation issued on Solana Devnet | #8 |
| 10 | Chain transaction reconciled with allocation record | #11 |
| 11 | Dashboards show consistent holdings and offering data | #10 |
| 12 | Investor report or corporate action created and recorded | #10 |
| 13 | Material actions auditable | #10 and #11 |
| 14 | Automated tests cover state transitions and authorization | #11 |
| 15 | Demonstration distinguishes simulated from production activity | #4 and #12 |
| 16 | Business Onboarding Agent guides profile completion | #9 |
| 17 | Financial Analysis Agent extracts figures with sources | #9 |
| 18 | Due Diligence Assistant runs checklist and flags inconsistencies | #9 |
| 19 | Agent tools enforce role and tenant permissions server-side | #9 and #11 |
| 20 | Agent prompts, calls, outputs and human corrections auditable | #9 and #11 |
| 21 | No MVP agent approves offerings, certifies valuations or executes transactions | #9 and #11 |

Ownership follows each issue's stated PRD `#19` coverage: issue #11 claims criteria 10, 13, 14, 19, 20 and 21; issue #10's Done-when covers auditability (13); issue #5's Done-when covers basic account/profile creation (1). Issue #9 is the Phase 1 epic that tracks all 21 criteria.

## Gaps requiring owner agreement

- Criterion 15 needs issue #4 to define the simulated-flow labelling before issue #12 demonstrates it.
- Criterion 21 needs issue #9 to define agent permission boundaries before implementation starts.
- Criteria 9 and 10 need issue #8 and issue #11 to agree the Devnet evidence format before either is closed.

When a gap is agreed, Nze records the outcome as a comment on each owning issue (see Task 6 of the implementation plan) and replaces the gap line above with the agreed outcome before issue #2 is closed.

No scope change is made here. This mapping records where PRD `#14` and `#19` criteria are already owned and where Nze and Yod must agree before scope is finalized.
