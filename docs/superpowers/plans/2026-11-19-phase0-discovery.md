# Phase 0 Discovery and Legal/Market Validation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Execute issue #2 through the two-track design: land the repo-side Phase 0 artifacts first, then ingest real evidence one artifact at a time, and close #2 only when all five Done-when items are validated.

**Architecture:** Six focused Markdown files under `docs/phase0/` — one README index, a decisions register, an MVP scope mapping, and three evidence documents. The README is the single status view; each evidence document owns one Done-when item and is written at its final `validated` (or `blocked`) status before a PR is opened, so the diff Yod approves is the diff that merges.

**Tech Stack:** Markdown, Git, GitHub CLI (`gh`), existing `docs-and-repo-checks` CI. No new automation or dependencies.

**Spec:** `docs/superpowers/specs/2026-11-19-phase0-discovery-design.md`

## Global Constraints

- This is Nze's task. Every commit MUST be authored AND committed by `Nze Ndi Wamanyi <nzendiwamanyi@gmail.com>`. Use the explicit identity frontmatter shown in every commit step below; do not rely on global or local git config.
- Before any `gh` command, confirm the active account is `NzeNdiWamanyi` with `gh api user --jq .login`; if not, run `gh auth switch -u NzeNdiWamanyi`.
- Work on branch `issue-2-phase0-discovery-design` for Track 1 only; each evidence artifact uses its own fresh branch from merged `main` (see below). `main` is protected: changes land by PR, one CODEOWNERS approval required, authors cannot self-approve. Nze authors, Yod approves.
- Status values are exactly `planned`, `awaiting evidence`, `in review`, `blocked`, `validated`. Evidence documents start at `awaiting evidence` and never use `planned`.
- Each evidence artifact uses a fresh branch cut from merged `main` (`issue-2-phase0-<artifact>`); never continue on an earlier artifact's branch. Set final `validated` text before opening the PR and push no commits after approval, because `dismiss_stale_reviews` would dismiss it and the merged diff would differ from the reviewed one.
- Raw interview notes, counsel memos, personal identifiers and partner contact details NEVER enter the repo. Repo documents contain redacted conclusions and a reference to Nze's private store only.
- PRD references are written as PRD `#13` (the PRD section number in a code span, not a GitHub issue number). The section-sign character is not used anywhere.
- Every PR uses `.github/PULL_REQUEST_TEMPLATE.md` with real verification output, evidence for each Done-when item, and the no-secrets/no-PII box checked after scanning the diff.
- `docs-and-repo-checks` must pass before merge. No new automation is added.
- If real evidence is unavailable, the owning document stays at `awaiting evidence`, its Done-when box stays unchecked, and issue #2 stays open. No conclusion is invented.

## Review Focus

- **Evidence contradicts a PRD assumption** → register records `blocked` and names affected issues; pinned by Task 2's blocked-status row check.
- **Counsel rejects the proposed first issuance structure** → legal summary records escalation and no scope change before owner decision; pinned by Task 5's escalation-section check.
- **Evidence never arrives** → document remains `awaiting evidence` and issue #2 stays open; pinned by Task 4's stop-condition check.
- **Sensitive data in a commit** → redacted conclusions only; pinned by Task 6's diff scan.
- **Owner disagreement on scope** → resolved in issue #2 before merge; pinned by Task 7's approval check.

---

### Task 1: Phase 0 index and evidence-document instruments

**Files:**
- Create: `docs/phase0/README.md`
- Create: `docs/phase0/interview-synthesis.md`
- Create: `docs/phase0/legal-analysis-summary.md`
- Create: `docs/phase0/design-partner-shortlist.md`

**Interfaces:**
- Consumes: nothing; this is the first task.
- Produces: `docs/phase0/README.md` with the five-row status index; three evidence documents with stable filenames and `Status: awaiting evidence` headers used by Tasks 4, 5 and 6.

- [ ] **Step 1: Write the failing check**

Run:
```bash
for f in docs/phase0/README.md docs/phase0/interview-synthesis.md docs/phase0/legal-analysis-summary.md docs/phase0/design-partner-shortlist.md; do test -f "$f" || echo "missing $f"; done
```
Expected: four `missing` lines.

- [ ] **Step 2: Confirm account and branch**

Run:
```bash
gh api user --jq .login
git branch --show-current
```
Expected: `NzeNdiWamanyi` and `issue-2-phase0-discovery-design`. If the account differs, run `gh auth switch -u NzeNdiWamanyi`.

- [ ] **Step 3: Create the index**

Create `docs/phase0/README.md` with exactly this content:

```markdown
# Phase 0 evidence index (issue #2)

Owner: NzeNdiWamanyi

| Done-when item | Artifact | Status | Private evidence reference |
|---|---|---|---|
| Interview synthesis and validated problem statement | [interview-synthesis.md](interview-synthesis.md) | awaiting evidence | Recorded by Nze in the private store |
| Written legal analysis summary | [legal-analysis-summary.md](legal-analysis-summary.md) | awaiting evidence | Recorded by Nze in the private store |
| Prioritized design-partner shortlist | [design-partner-shortlist.md](design-partner-shortlist.md) | awaiting evidence | Recorded by Nze in the private store |
| MVP scope and acceptance criteria in #3–#12 | [mvp-scope-mapping.md](mvp-scope-mapping.md) | validated | Not evidence-dependent |
| PRD `#18` items tracked | [decisions-register.md](decisions-register.md) | validated | Not evidence-dependent |

Raw interview notes, counsel memos and partner contact details stay in Nze's private store. This repository holds redacted conclusions and references only.

Issue #2 closes only when all five rows read `validated` and all Done-when boxes are checked.
```

- [ ] **Step 4: Create the interview instrument**

Create `docs/phase0/interview-synthesis.md` with exactly this content:

```markdown
# Interview synthesis (issue #2)

Status: awaiting evidence
Owner: NzeNdiWamanyi
Private evidence reference: recorded by Nze in the private store

## Interview guide

1. Describe the last capital raise attempt: amount, timeline, outcome and what blocked it.
2. Which financing options were considered, and why were they rejected or accepted?
3. What documentation, verification and reporting was requested by investors or institutions?
4. What would make a digital issuance workflow trustworthy enough to use?
5. For investors: what evidence, rights and exit expectations would you require?
6. For institutions and professional partners: which roles would you be willing and licensed to perform?

## Note template

- Participant category: SME / investor / financial institution / professional partner
- Sector and geography:
- Interview date and duration:
- Anonymized identifier (no names, emails or phone numbers in this repo):
- Pain points with evidence quotes (redacted):
- Willingness to use the product, with the reason given:
- Follow-up required:

## Synthesis

Populated only from real interview notes supplied by Nze. No conclusion is written while status is `awaiting evidence`.
```

- [ ] **Step 5: Create the legal instrument**

Create `docs/phase0/legal-analysis-summary.md` with exactly this content:

```markdown
# Legal analysis summary (issue #2)

Status: awaiting evidence
Owner: NzeNdiWamanyi
Private evidence reference: counsel memo held privately by Nze

## Question list for qualified Ugandan counsel

1. How is each proposed instrument classified under current Uganda law (PRD `#10.2`)?
2. Which entity may act as issuer, platform operator, placement agent, broker, custodian and payment provider (PRD `#18`)?
3. Which legal register and company-law process govern tokenized equity?
4. Is an SPV required for any asset-backed structure, and when?
5. What marketing and distribution restrictions apply to each investor class?
6. What payment, FX and stablecoin permissions and providers are available?
7. What tax treatment and reporting obligations apply?
8. What consents, disclosures and investor protections are mandatory?

## Findings summary

Populated only from qualified counsel analysis supplied by Nze. No legal conclusion is written while status is `awaiting evidence`.

## Escalation

Record here if counsel rejects the proposed first issuance structure. Do not change MVP scope before a Nze + Yod decision.
```

- [ ] **Step 6: Create the partner instrument**

Create `docs/phase0/design-partner-shortlist.md` with exactly this content:

```markdown
# Design-partner and pilot-issuer shortlist (issue #2)

Status: awaiting evidence
Owner: NzeNdiWamanyi
Private evidence reference: partner contact details held privately by Nze

## Scoring rubric

Score each candidate 1–5 on:

- Financing need in the target sector (agri/agro-processing, trade/wholesale/distribution, manufacturing per PRD `#12.2`)
- Willingness to test a simulated workflow
- Readiness of records and disclosures
- Fit with the first legally viable issuance structure
- Ability to give feedback within the Phase 0 window

## Shortlist

| Anonymized candidate | Sector | Scores | Readiness notes | Private reference |
|---|---|---|---|---|
| Awaiting real candidate assessments from Nze | — | — | — | Private store reference recorded by Nze |

Populated only from real candidate information supplied by Nze. Contact details and identifiers stay in the private store.

## Shortlist decision

The highest-scoring candidates are proposed as design partners only after Nze records the underlying evidence privately. No candidate is claimed as committed without their confirmation.
```

- [ ] **Step 7: Run the check again**

Run the Step 1 command. Expected: no `missing` lines.

- [ ] **Step 7b: Scan for sensitive data**

Run:
```bash
grep -inE 'gmail|phone|tel:|confidential|privileged|@[a-z0-9.-]+\.(com|org|co)' docs/phase0/*.md | grep -v 'Anonymized identifier' || echo "no sensitive patterns"
```
Expected: `no sensitive patterns`. Capture the output for the PR body.

- [ ] **Step 8: Commit**

```bash
git add docs/phase0/README.md docs/phase0/interview-synthesis.md docs/phase0/legal-analysis-summary.md docs/phase0/design-partner-shortlist.md
GIT_AUTHOR_NAME='Nze Ndi Wamanyi' GIT_AUTHOR_EMAIL='nzendiwamanyi@gmail.com' GIT_COMMITTER_NAME='Nze Ndi Wamanyi' GIT_COMMITTER_EMAIL='nzendiwamanyi@gmail.com' git commit -m "docs: add Phase 0 index and evidence instruments for issue #2

Changes:
- Add README status index mapping five Done-when items to artifacts
- Add interview guide, counsel question list and partner scoring rubric
- Set all three evidence documents to awaiting evidence

Verification:
- File-existence check: four missing before, none after"
```

### Task 2: PRD #18 decisions register

**Files:**
- Create: `docs/phase0/decisions-register.md`
- No README row edit in this task beyond the template in Task 1: the decisions-register row is written at `validated` in Track 1 and confirmed in Task 7, Step 1b.

**Interfaces:**
- Consumes: the README index from Task 1.
- Produces: ten stable decision IDs `D1`–`D10` used by Tasks 4, 5 and 6 when evidence resolves an assumption.

- [ ] **Step 1: Write the failing check**

Run:
```bash
test -f docs/phase0/decisions-register.md && grep -c '^| D[0-9]' docs/phase0/decisions-register.md || echo "register missing"
```
Expected: `register missing`.

- [ ] **Step 2: Create the register**

Create `docs/phase0/decisions-register.md` with exactly this content:

```markdown
# PRD `#18` tracked decisions (issue #2)

Owner: NzeNdiWamanyi

| ID | Assumption | Owner | Evidence requirement | Deadline | Status | Resolution |
|---|---|---|---|---|---|---|
| D1 | Legal and regulatory classification of each proposed instrument in Uganda | NzeNdiWamanyi | Qualified counsel analysis summary, private reference | Before issue #2 closes | planned | — |
| D2 | Entity acting as issuer, platform operator, placement agent, broker, custodian or payment provider | NzeNdiWamanyi | Qualified counsel analysis summary, private reference | Before issue #2 closes | planned | — |
| D3 | Legal register and company-law process for tokenized equity | NzeNdiWamanyi | Qualified counsel analysis summary, private reference | Before issue #2 closes | planned | — |
| D4 | Whether an SPV is required for asset-backed structures | NzeNdiWamanyi | Counsel note on asset-backed structures, private reference | Before issue #15 (Phase 3) starts; deferred for MVP | planned | — |
| D5 | Permitted scope of marketing and distribution per investor class | NzeNdiWamanyi | Counsel analysis summary, private reference | Before issue #2 closes | planned | — |
| D6 | Payment, FX and stablecoin permissions and provider availability | NzeNdiWamanyi | Provider or counsel evidence, private reference | Before issue #8 starts | planned | — |
| D7 | Applicable tax treatment and reporting obligations | NzeNdiWamanyi | Counsel or adviser analysis, private reference | Before issue #2 closes | planned | — |
| D8 | Availability and reliability of business registry, identity, accounting and banking integrations | NzeNdiWamanyi | Vendor or integration evidence, private reference | Before issue #5 starts | planned | — |
| D9 | Commercial willingness of SMEs, investors and institutions to adopt the model | NzeNdiWamanyi | Interview synthesis and partner shortlist, private references | Before issue #2 closes | planned | — |
| D10 | Final production hosting, custody and security architecture | NzeNdiWamanyi | Architecture decision evidence, private reference | Before issue #11 (Week 7) security review | planned | — |

Status `blocked` is used when evidence contradicts a PRD assumption; the affected issues are named in the resolution cell and in the PR notes. No PRD text is changed without an explicit Nze + Yod decision.
```

- [ ] **Step 3: Run the check again**

Run:
```bash
grep -c '^| D[0-9]' docs/phase0/decisions-register.md
grep -c $'\u00a7' docs/phase0/decisions-register.md || true
grep -n 'blocked' docs/phase0/decisions-register.md
```
Expected: `10`, no section-sign lines, and exactly one line defining the blocked-status rule.

- [ ] **Step 3b: Scan for sensitive data**

Run:
```bash
grep -inE 'gmail|phone|tel:|confidential|privileged|@[a-z0-9.-]+\.(com|org|co)' docs/phase0/*.md | grep -v 'Anonymized identifier' || echo "no sensitive patterns"
```
Expected: `no sensitive patterns`. Capture the output for the PR body.

- [ ] **Step 4: Commit**

```bash
git add docs/phase0/decisions-register.md
GIT_AUTHOR_NAME='Nze Ndi Wamanyi' GIT_AUTHOR_EMAIL='nzendiwamanyi@gmail.com' GIT_COMMITTER_NAME='Nze Ndi Wamanyi' GIT_COMMITTER_EMAIL='nzendiwamanyi@gmail.com' git commit -m "docs: add PRD #18 decisions register for issue #2

Changes:
- Record all ten PRD #18 assumptions with Nze as owner
- Add evidence requirements, milestone deadlines and statuses
- Define blocked status for evidence that contradicts the PRD

Verification:
- Row count check: 10 decision rows
- Section-sign scan: no matches"
```

- [ ] **Step 5: Tick the tracked-decisions Done-when box after the Track 1 PR merges**

After Yod approves and merges the Track 1 PR, tick the matching box in issue #2:

```bash
gh issue view 2 --repo FoundationStoneAlgorithms/TokenWork --json body --jq .body > /tmp/issue-2-body.md
sed -i 's/^- \[ \] PRD `#18` items are tracked/- [x] PRD `#18` items are tracked/' /tmp/issue-2-body.md
gh issue edit 2 --repo FoundationStoneAlgorithms/TokenWork --body-file /tmp/issue-2-body.md
```
Expected: the "PRD `#18` items are tracked with owners, evidence requirements and deadlines" Done-when box is checked in issue #2.

### Task 3: MVP scope and acceptance mapping

**Files:**
- Create: `docs/phase0/mvp-scope-mapping.md`

**Interfaces:**
- Consumes: PRD `#19` criteria 1–21 and issues #3–#12.
- Produces: the owner-agreement gap list used by Task 7 when closing issue #2.

- [ ] **Step 1: Write the failing check**

Run:
```bash
test -f docs/phase0/mvp-scope-mapping.md && grep -c '^| [0-9]' docs/phase0/mvp-scope-mapping.md || echo "mapping missing"
```
Expected: `mapping missing`.

- [ ] **Step 2: Create the mapping**

Create `docs/phase0/mvp-scope-mapping.md` with exactly this content:

```markdown
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
```

- [ ] **Step 3: Run the check again**

Run:
```bash
grep -c '^| [0-9]' docs/phase0/mvp-scope-mapping.md
grep -c $'\u00a7' docs/phase0/mvp-scope-mapping.md || true
```
Expected: `21`, then no section-sign lines.

- [ ] **Step 3b: Scan for sensitive data**

Run:
```bash
grep -inE 'gmail|phone|tel:|confidential|privileged|@[a-z0-9.-]+\.(com|org|co)' docs/phase0/*.md | grep -v 'Anonymized identifier' || echo "no sensitive patterns"
```
Expected: `no sensitive patterns`. Capture the output for the PR body.

- [ ] **Step 4: Commit**

```bash
git add docs/phase0/mvp-scope-mapping.md
GIT_AUTHOR_NAME='Nze Ndi Wamanyi' GIT_AUTHOR_EMAIL='nzendiwamanyi@gmail.com' GIT_COMMITTER_NAME='Nze Ndi Wamanyi' GIT_COMMITTER_EMAIL='nzendiwamanyi@gmail.com' git commit -m "docs: map PRD #19 criteria to issues for issue #2

Changes:
- Map all 21 MVP acceptance criteria to owning issues #3-#12
- List three owner-agreement gaps affecting criteria 9, 10, 15 and 21
- Keep scope unchanged pending Nze + Yod agreement

Verification:
- Row count check: 21 criterion rows
- Section-sign scan: no matches"
```

- [ ] **Step 5: Tick the MVP scope Done-when box after the Track 1 PR merges**

After Yod approves and merges the Track 1 PR, tick the matching box in issue #2:

```bash
gh issue view 2 --repo FoundationStoneAlgorithms/TokenWork --json body --jq .body > /tmp/issue-2-body.md
sed -i 's/^- \[ \] MVP scope and acceptance criteria/- [x] MVP scope and acceptance criteria/' /tmp/issue-2-body.md
gh issue edit 2 --repo FoundationStoneAlgorithms/TokenWork --body-file /tmp/issue-2-body.md
```
Expected: the "MVP scope and acceptance criteria are agreed and reflected in #3–#12" Done-when box is checked in issue #2.

### Task 4: Ingest interview synthesis evidence

**Files:**
- Modify: `docs/phase0/interview-synthesis.md`
- Modify: `docs/phase0/README.md`

**Interfaces:**
- Consumes: the interview guide from Task 1; real interview notes supplied privately by Nze.
- Produces: a validated problem statement. Decision D9 is resolved in Task 6, after the partner shortlist is available.

- [ ] **Step 1: Write the failing check**

Run:
```bash
grep -n '^Status: validated$' docs/phase0/interview-synthesis.md || echo "not validated"
```
Expected: `not validated`.

- [ ] **Step 2: Check the stop condition**

Run:
```bash
gh issue view 2 --repo FoundationStoneAlgorithms/TokenWork --json body --jq .body | grep -n 'Interview notes'
```
Expected: the Done-when line for interview notes is unchecked (`- [ ]`). Ask Nze for the real, anonymized interview set. If it is not available, stop this task, leave the document at `awaiting evidence` and report the blocker in issue #2. Do not write a synthesis from assumption.

- [ ] **Step 3: Write the redacted synthesis**

Replace the `## Synthesis` section of `docs/phase0/interview-synthesis.md` with the real synthesis supplied by Nze, containing: the validated problem statement, the three most repeated financing pain points with anonymized evidence quotes, willingness-to-use findings by participant category, and the private evidence reference. Do not include names, emails, phone numbers or employer identifiers. D9 depends on both interview synthesis and the partner shortlist, so its register status is set in Task 6, not here.

- [ ] **Step 4: Advance status**

Set the final status before review — no commit is pushed after Yod approves, because
`dismiss_stale_reviews` would dismiss the approval. Run:
```bash
sed -i 's/^Status: awaiting evidence$/Status: validated/' docs/phase0/interview-synthesis.md
sed -i 's#| \[interview-synthesis.md\](interview-synthesis.md) | awaiting evidence |#| [interview-synthesis.md](interview-synthesis.md) | validated |#' docs/phase0/README.md
```
Expected: both files now show `validated` for the interview artifact.

- [ ] **Step 5: Run the check again**

Run the Step 1 command. Expected: a matching `Status: validated` line.

- [ ] **Step 6: Commit and open the PR**

Cut a fresh branch from the merged `main` for this artifact, commit, push, and open a PR
with Yod requested as reviewer. No further commits are pushed to this branch.

```bash
git switch main && git pull --ff-only
git switch -c issue-2-phase0-interview-synthesis
git add docs/phase0/interview-synthesis.md docs/phase0/README.md
GIT_AUTHOR_NAME='Nze Ndi Wamanyi' GIT_AUTHOR_EMAIL='nzendiwamanyi@gmail.com' GIT_COMMITTER_NAME='Nze Ndi Wamanyi' GIT_COMMITTER_EMAIL='nzendiwamanyi@gmail.com' git commit -m "docs: add validated interview synthesis for issue #2

Changes:
- Record redacted synthesis and validated problem statement from real interviews
- Set interview artifact and README index to validated before review
- Leave raw notes in Nze's private store

Verification:
- Status check: validated present after change
- Diff scan: no personal identifiers"
git push -u origin issue-2-phase0-interview-synthesis
gh pr create --base main --head issue-2-phase0-interview-synthesis --title "Phase 0: Interview synthesis (issue #2)" --body "Refs #2. Redacted synthesis from real interview notes supplied by Nze; raw notes stay in the private store. Final status is set before review so the approved diff is the merged diff." --reviewer YodHeVauHe
```

- [ ] **Step 7: Tick the Done-when box after merge**

After Yod approves and CI is green, Yod merges. Then, with no further commits to the branch:

```bash
gh issue view 2 --repo FoundationStoneAlgorithms/TokenWork --json body --jq .body > /tmp/issue-2-body.md
sed -i 's/^- \[ \] Interview notes/- [x] Interview notes/' /tmp/issue-2-body.md
gh issue edit 2 --repo FoundationStoneAlgorithms/TokenWork --body-file /tmp/issue-2-body.md
```
Expected: the interview-notes Done-when box is checked in issue #2.

### Task 5: Ingest legal analysis evidence

**Files:**
- Modify: `docs/phase0/legal-analysis-summary.md`
- Modify: `docs/phase0/README.md`
- Modify: `docs/phase0/decisions-register.md` (rows D1, D2, D3, D5, D7)

**Interfaces:**
- Consumes: the counsel question list from Task 1; the memo supplied privately by Nze.
- Produces: the legally viable first issuance structure summary; resolutions for D1, D2, D3, D5 and D7.

- [ ] **Step 1: Write the failing check**

Run:
```bash
grep -n '^Status: validated$' docs/phase0/legal-analysis-summary.md || echo "not validated"
```
Expected: `not validated`.

- [ ] **Step 2: Check the stop condition**

Ask Nze for the qualified counsel memo. If it is not available, stop this task and leave the document at `awaiting evidence`. Do not summarize law from general knowledge or from the PRD.

- [ ] **Step 3: Write the redacted findings**

Replace the `## Findings summary` section with the actual counsel findings covering: instrument classification, permitted operating roles, authoritative register and company-law process, the proposed first issuance structure, marketing restrictions, payment permissions and tax/reporting obligations. Include the private memo reference. Do not paste memo text or identify counsel without permission. In `docs/phase0/decisions-register.md`, set the Status cells of D1, D2, D3, D5 and D7 to `validated`, or `blocked` with affected issues named in Resolution where counsel contradicts the PRD.

- [ ] **Step 4: Record escalation if needed**

If counsel rejected the proposed structure, append one sentence under `## Escalation` naming the rejected structure and the affected issues, and set the corresponding register rows to `blocked`. Do not change MVP scope before a Nze + Yod decision.

- [ ] **Step 5: Advance status**

Set the final status before review; no commit is pushed after approval. Run:
```bash
sed -i 's/^Status: awaiting evidence$/Status: validated/' docs/phase0/legal-analysis-summary.md
sed -i 's#| \[legal-analysis-summary.md\](legal-analysis-summary.md) | awaiting evidence |#| [legal-analysis-summary.md](legal-analysis-summary.md) | validated |#' docs/phase0/README.md
```
Expected: both files now show `validated` for the legal artifact.

- [ ] **Step 6: Run the check again**

Run the Step 1 command, then:
```bash
grep -n '^## Escalation$' docs/phase0/legal-analysis-summary.md
```
Expected: a matching `Status: validated` line and the escalation section. If counsel rejected the structure, that section names the rejected structure and affected issues, and the corresponding register rows read `blocked` with no MVP scope change.

- [ ] **Step 7: Commit and open the PR**

Cut a fresh branch from the merged `main`, commit, push, and open a PR with Yod requested
as reviewer. No further commits are pushed to this branch.

```bash
git switch main && git pull --ff-only
git switch -c issue-2-phase0-legal-analysis
git add docs/phase0/legal-analysis-summary.md docs/phase0/README.md docs/phase0/decisions-register.md
GIT_AUTHOR_NAME='Nze Ndi Wamanyi' GIT_AUTHOR_EMAIL='nzendiwamanyi@gmail.com' GIT_COMMITTER_NAME='Nze Ndi Wamanyi' GIT_COMMITTER_EMAIL='nzendiwamanyi@gmail.com' git commit -m "docs: add validated Uganda legal analysis summary for issue #2

Changes:
- Record redacted counsel findings and first viable issuance structure
- Mark decisions D1, D2, D3, D5 and D7 with evidence-based outcomes
- Set legal artifact and README index to validated before review

Verification:
- Status check: validated present after change
- Diff scan: no full counsel text or identifiers"
git push -u origin issue-2-phase0-legal-analysis
gh pr create --base main --head issue-2-phase0-legal-analysis --title "Phase 0: Uganda legal analysis (issue #2)" --body "Refs #2. Redacted counsel findings supplied privately by Nze; no memo text or identifiers in the repo. Final status is set before review so the approved diff is the merged diff." --reviewer YodHeVauHe
```

- [ ] **Step 8: Tick the Done-when box after merge**

After Yod approves and CI is green, Yod merges. Then, with no further commits to the branch:

```bash
gh issue view 2 --repo FoundationStoneAlgorithms/TokenWork --json body --jq .body > /tmp/issue-2-body.md
sed -i 's/^- \[ \] Written legal analysis/- [x] Written legal analysis/' /tmp/issue-2-body.md
gh issue edit 2 --repo FoundationStoneAlgorithms/TokenWork --body-file /tmp/issue-2-body.md
```
Expected: the legal-analysis Done-when box is checked in issue #2.

### Task 6: Ingest design-partner shortlist and finalize scope

**Files:**
- Modify: `docs/phase0/design-partner-shortlist.md`
- Modify: `docs/phase0/README.md`
- Modify: `docs/phase0/decisions-register.md` (rows D4, D6, D8, D9, D10)
- Modify: `docs/phase0/mvp-scope-mapping.md`

**Interfaces:**
- Consumes: the scoring rubric from Task 1; real candidate information supplied privately by Nze; decisions from Tasks 4 and 5.
- Produces: the prioritized shortlist; the final MVP scope agreement; the ready-to-close state of issue #2.

- [ ] **Step 1: Write the failing check**

Run:
```bash
grep -n '^Status: validated$' docs/phase0/design-partner-shortlist.md || echo "not validated"
```
Expected: `not validated`.

- [ ] **Step 2: Check the stop condition**

Ask Nze for real candidate information. If no candidates have been assessed, stop this task and leave the document at `awaiting evidence`. Do not invent pilot issuers or readiness notes.

- [ ] **Step 3: Fill the shortlist**

Replace the `## Shortlist` table with anonymized candidates, scores, readiness notes and private references supplied by Nze. Replace `## Shortlist decision` with the actual prioritization outcome. No contact details, names or employer identifiers enter the repo. In `docs/phase0/decisions-register.md`, set the Status cells of D4, D6, D8, D9 and D10 to `validated`, or `blocked` with affected issues named in Resolution where the evidence contradicts the PRD.

- [ ] **Step 4: Finalize scope gaps**

In `docs/phase0/mvp-scope-mapping.md`, replace each gap sentence under `## Gaps requiring owner agreement` with the agreed outcome from Nze and Yod. If an outcome is still disputed, keep the gap and stop before claiming the scope is agreed. Capture the actual agreed text for criterion 15, criterion 21 and criteria 9/10 from the finalized mapping; it is posted to the owning issues after this PR merges (Step 9), not before review.

Expected: all three gap lines replaced with real outcomes and no placeholder text left in the mapping.

- [ ] **Step 5: Scan the diff for sensitive data**

Run:
```bash
git diff -- docs/phase0/ | grep -inE 'gmail|phone|tel:|confidential|privileged|@[a-z0-9.-]+\.(com|org|co)' || echo "no sensitive patterns"
```
Expected: `no sensitive patterns`. If anything matches, remove it from the document before committing; if it was already pushed, follow `SECURITY.md` privately.

- [ ] **Step 6: Advance status**

Set the final status before review; no commit is pushed after approval. Run:
```bash
sed -i 's/^Status: awaiting evidence$/Status: validated/' docs/phase0/design-partner-shortlist.md
sed -i 's#| \[design-partner-shortlist.md\](design-partner-shortlist.md) | awaiting evidence |#| [design-partner-shortlist.md](design-partner-shortlist.md) | validated |#' docs/phase0/README.md
```
Expected: both files show `validated` for the partner artifact.

- [ ] **Step 7: Commit and open the PR**

Cut a fresh branch from the merged `main`, commit, push, and open a PR with Yod requested
as reviewer. No further commits are pushed to this branch.

```bash
git switch main && git pull --ff-only
git switch -c issue-2-phase0-design-partners
git add docs/phase0/design-partner-shortlist.md docs/phase0/README.md docs/phase0/decisions-register.md docs/phase0/mvp-scope-mapping.md
GIT_AUTHOR_NAME='Nze Ndi Wamanyi' GIT_AUTHOR_EMAIL='nzendiwamanyi@gmail.com' GIT_COMMITTER_NAME='Nze Ndi Wamanyi' GIT_COMMITTER_EMAIL='nzendiwamanyi@gmail.com' git commit -m "docs: add validated design-partner shortlist and finalize scope for issue #2

Changes:
- Record anonymized shortlist and readiness notes from real candidate assessments
- Resolve scope gaps in the PRD #19 mapping after Nze + Yod agreement
- Set partner artifact and README index to validated before review

Verification:
- Status check: validated present after change
- Sensitive-data scan: no matches"
git push -u origin issue-2-phase0-design-partners
gh pr create --base main --head issue-2-phase0-design-partners --title "Phase 0: Design partners and scope (issue #2)" --body "Refs #2. Anonymized shortlist from real candidate assessments supplied privately by Nze; no contact details in the repo. Final status is set before review so the approved diff is the merged diff." --reviewer YodHeVauHe
```

- [ ] **Step 8: Tick the Done-when box after merge**

After Yod approves and CI is green, Yod merges. Then, with no further commits to the branch:

```bash
gh issue view 2 --repo FoundationStoneAlgorithms/TokenWork --json body --jq .body > /tmp/issue-2-body.md
sed -i 's/^- \[ \] A prioritized design-partner/- [x] A prioritized design-partner/' /tmp/issue-2-body.md
gh issue edit 2 --repo FoundationStoneAlgorithms/TokenWork --body-file /tmp/issue-2-body.md
```
Expected: the design-partner Done-when box is checked in issue #2.

- [ ] **Step 9: Record the finalized criteria on the owning issues after merge**

After Yod merges this PR, post the real agreed text captured in Step 4 to each owning issue. Replace the three variables with the actual outcome text from `docs/phase0/mvp-scope-mapping.md` — do not post placeholder text:

```bash
C15="<real agreed outcome for criterion 15 from the mapping>"
C21="<real agreed outcome for criterion 21 from the mapping>"
C910="<real agreed outcome for criteria 9 and 10 from the mapping>"
gh issue comment 4 --repo FoundationStoneAlgorithms/TokenWork --body "Phase 0 outcome (issue #2), PRD #19 criterion 15: $C15"
gh issue comment 9 --repo FoundationStoneAlgorithms/TokenWork --body "Phase 0 outcome (issue #2), PRD #19 criterion 21: $C21"
gh issue comment 8 --repo FoundationStoneAlgorithms/TokenWork --body "Phase 0 outcome (issue #2), PRD #19 criteria 9 and 10: $C910"
gh issue comment 11 --repo FoundationStoneAlgorithms/TokenWork --body "Phase 0 outcome (issue #2), PRD #19 criteria 9 and 10: $C910"
gh issue comment 12 --repo FoundationStoneAlgorithms/TokenWork --body "Phase 0 outcome (issue #2), PRD #19 criterion 15 demo: $C15"
```
Expected: comments posted on #4, #8, #9, #11 and #12 containing the real agreed outcomes, not a shared placeholder.

### Task 7: Close issue #2

**Files:**
- Modify: `docs/phase0/README.md` (final status consistency)
- No new files.

**Interfaces:**
- Consumes: validated statuses from Tasks 4, 5 and 6, the two repository-side artifacts from Tasks 2 and 3 (already validated in the Track 1 PR), the two repo-side Done-when boxes ticked after the Track 1 PR merges, and the owner-agreement outcomes recorded on #4, #8, #9, #11 and #12 by Task 6, Step 9.
- Produces: closed issue #2 with all five Done-when items checked.

- [ ] **Step 1: Write the failing check**

Run:
```bash
grep -c '| validated |' docs/phase0/README.md
```
Expected: fewer than `5` while any artifact remains unvalidated.

- [ ] **Step 1b: Confirm the repository-side rows are already validated**

The Track 1 PR ships the register and scope mapping with `validated` README rows, so no
promotion commit is needed here. A later commit would dismiss Yod's approval. Run:

```bash
grep -n 'mvp-scope-mapping.md.*validated\|decisions-register.md.*validated' docs/phase0/README.md
```
Expected: both rows shown as validated. If either is still `planned`, stop — the Track 1 PR was not completed as specified.

- [ ] **Step 2: Verify all five rows are validated**

Run:
```bash
grep -n '| planned |\|awaiting evidence\|| in review |' docs/phase0/README.md || echo "all validated"
grep -c '| validated |' docs/phase0/README.md
```
Expected: `all validated` and `5`. If anything else appears, stop and report which artifact is blocking closure.

- [ ] **Step 3: Verify the Done-when boxes**

Each box is ticked by its owning artifact task after that PR merges. Run:
```bash
gh issue view 2 --repo FoundationStoneAlgorithms/TokenWork --json body --jq .body | grep -c '^- \[x\]'
```
Expected: `5`. If fewer, identify the stale task from the unchecked line and re-run its
"Tick the Done-when box after merge" step. Do not tick a box whose artifact is not
`validated`, and do not rewrite the issue body with a bare `git commit` that only claims the
box was updated — use `gh issue edit` with the real body as that step specifies.

- [ ] **Step 4: Verify PR and approval state**

Run:
```bash
gh pr view --repo FoundationStoneAlgorithms/TokenWork --json reviewDecision,state --jq '{state,reviewDecision}'
```
Expected: `APPROVED` and `MERGED` for the final Phase 0 PR. If the PR is not merged, do not close the issue.

- [ ] **Step 5: Close the issue**

Run:
```bash
gh issue close 2 --repo FoundationStoneAlgorithms/TokenWork --comment "All Phase 0 Done-when items are satisfied in docs/phase0/. Interview synthesis, legal analysis summary and design-partner shortlist link to private evidence held by Nze; the PRD #18 register and PRD #19 scope mapping are validated."
```
Expected: issue #2 state becomes `CLOSED`.

- [ ] **Step 6: Final verification**

Run:
```bash
gh issue view 2 --repo FoundationStoneAlgorithms/TokenWork --json state --jq .state
grep -c '| validated |' docs/phase0/README.md
```
Expected: `CLOSED` and `5`.
