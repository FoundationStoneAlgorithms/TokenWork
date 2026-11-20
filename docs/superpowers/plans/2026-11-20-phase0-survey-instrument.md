# Phase 0 Survey Instrument Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish one shared survey on Tally and Google Forms, and record the links and question map needed to gather Phase 0 evidence for issue #2.

**Architecture:** A single canonical question map lives in `docs/phase0/survey-instrument.md`. Tally blocks and Google Form items are generated from that map via Composio tools. Raw answers stay on the form platforms; only links, counts and redacted synthesis enter the repo.

**Tech Stack:** Composio MCP tools (`tally`, `googleforms`, `googledrive`), GitHub CLI, Markdown.

**Spec:** `docs/superpowers/specs/2026-11-20-phase0-survey-instrument-design.md`

## Global Constraints

- Owner: @NzeNdiWamanyi; reviewer: @YodHeVauHe. Verify `gh api user --jq .login` returns `NzeNdiWamanyi` before any `gh` command.
- Commits MUST be authored and committed as Nze Ndi Wamanyi via explicit `GIT_AUTHOR_NAME`, `GIT_AUTHOR_EMAIL`, `GIT_COMMITTER_NAME`, `GIT_COMMITTER_EMAIL` environment values.
- `main` is protected: all changes land by PR with one CODEOWNERS approval. Never push directly to `main`.
- No names, emails, phone numbers, employer identifiers or raw response text in the repository.
- Composio meta calls use session id `song`. Never execute a toolkit tool without an ACTIVE connection.
- Issue #2 stays OPEN until real responses are received and synthesized. Creating forms never ticks a Done-when box.
- Use the repository PR template body structure: Summary, Related issue, Verification, Notes.

## Review Focus

- **Inactive connection:** a toolkit tool call without an ACTIVE connection fails. Task 1 checks all three connections with `COMPOSIO_MANAGE_CONNECTIONS(action="list")` before any creation.
- **Google Form not accepting answers:** API-created forms can be unpublished. Task 4 verifies publish state with `GOOGLEFORMS_GET_FORM` and sets link access with `GOOGLEDRIVE_CREATE_PERMISSION(type="anyone", role="reader")`.
- **Tally form stuck in BLANK:** `TALLY_CREATE_FORM` requires `status`. Task 3 creates with `status: "PUBLISHED"` and verifies with `TALLY_GET_FORM_DETAILS`.
- **Question mismatch across platforms:** Task 5 compares `TALLY_LIST_FORM_QUESTIONS` and `GOOGLEFORMS_GET_FORM` item counts against the 33 questions in Task 2.
- **PII in repo:** Task 5 runs a PII pattern scan over the diff and stops on any match.

---

### Task 1: Connections and repository scaffold

**Files:**
- Create: `docs/phase0/survey-instrument.md`

**Interfaces:**
- Consumes: merged PR #28 on `main`.
- Produces: branch `issue-2-phase0-survey`, Active states for `tally`, `googleforms`, `googledrive`, and the initial survey document.

- [ ] **Step 1: Prepare branch and identity**

Run:
```bash
git switch main && git pull --ff-only && git switch -c issue-2-phase0-survey
gh api user --jq .login
git status --short --branch
```
Expected: `NzeNdiWamanyi`; branch `issue-2-phase0-survey`; clean tree.

- [ ] **Step 2: Check all three Composio connections**

Call `tools.composio.COMPOSIO_MANAGE_CONNECTIONS` with:
```json
{"toolkits":[{"name":"tally","action":"list"},{"name":"googleforms","action":"list"},{"name":"googledrive","action":"list"}],"session_id":"song"}
```
Expected: each entry reports an Active account.

- [ ] **Step 3: If any toolkit is not connected, stop**

For each missing toolkit, call `COMPOSIO_MANAGE_CONNECTIONS` with `action: "add"`, the exact toolkit name, and `session_id: "song"`. Show each returned `redirect_url` as a Markdown link and ask @NzeNdiWamanyi to finish authentication. Do not proceed until Step 2 reports Active for all three.

- [ ] **Step 4: Write the initial survey document**

Write `docs/phase0/survey-instrument.md` with exactly:
```markdown
# Phase 0 survey instrument (issue #2)

Status: in review
Owner: @NzeNdiWamanyi
Evidence basis: online survey replacing live interviews; no responses collected yet.

## Share links

- Tally: pending
- Google Forms: pending

## Response status

No responses collected. Issue #2 stays OPEN until responses are received and synthesized.
```

- [ ] **Step 5: Verify and commit**

Run:
```bash
grep -n '^Status:' docs/phase0/survey-instrument.md
git diff --check
git status --short
```
Expected: `Status: in review`, clean diff check.

```bash
git add docs/phase0/survey-instrument.md
GIT_AUTHOR_NAME='Nze Ndi Wamanyi' GIT_AUTHOR_EMAIL='nzendiwamanyi@gmail.com' GIT_COMMITTER_NAME='Nze Ndi Wamanyi' GIT_COMMITTER_EMAIL='nzendiwamanyi@gmail.com' git commit -m "docs: scaffold Phase 0 survey instrument record

Changes:
- Add survey-instrument.md with in-review status, pending links and response gate
- Record @NzeNdiWamanyi as owner

Verification:
- Status line: in review
- git diff --check: clean"
```

---

### Task 2: Canonical question map

**Files:**
- Modify: `docs/phase0/survey-instrument.md`

**Interfaces:**
- Consumes: scaffold from Task 1.
- Produces: 33 canonical questions with IDs `Q01`–`Q33`, used verbatim by Tasks 3 and 4 and by the response map in Task 6.

- [ ] **Step 1: Append the canonical question table**

Append this exact section to `docs/phase0/survey-instrument.md`:

```markdown
## Canonical questions

Both platforms use these question IDs and texts. Scale questions use 1–5 with labels `Not willing` and `Very willing`. Multiselect questions include `N/A`.

| ID | Text | Type | Block |
|---|---|---|---|
| Q01 | I consent to my answers being used for Phase 0 product research. | required checkbox | common |
| Q02 | Respondent category | dropdown: SME/issuer, Investor, Financial institution/professional partner, Qualified counsel, Design-partner candidate | common |
| Q03 | Self-chosen anonymized code (do not use your name) | short text | common |
| Q04 | Sector | short text | common |
| Q05 | Geography (district/city) | short text | common |
| Q06 | Response date | date | common |
| Q07 | May we quote your answers anonymously? | yes/no | common |
| Q08 | Private follow-up contact (stored in the form platform only, never in the repo) | optional short text | common |
| Q09 | Describe your last capital raise attempt: amount, timeline, outcome. | paragraph | sme_issuer |
| Q10 | What was the main blocker? | paragraph | sme_issuer |
| Q11 | Which financing options did you consider, and why were they rejected or accepted? | paragraph | sme_issuer |
| Q12 | What documents, verification and reporting were requested by investors or institutions? | paragraph | sme_issuer |
| Q13 | What would make a digital issuance workflow trustworthy enough to use? | paragraph | sme_issuer |
| Q14 | Which records do you already have? | checkboxes: registration, ownership evidence, 12-month bank statement, 6-month mobile-money statement, GPS/LC1 location, N/A | sme_issuer |
| Q15 | Willingness to test a simulated issuance workflow | scale 1–5 | sme_issuer |
| Q16 | When could you give feedback? | short text | sme_issuer |
| Q17 | What evidence, rights and exit expectations would you require as an investor? | paragraph | investor |
| Q18 | How do you view simulated investor eligibility? | paragraph | investor |
| Q19 | Willingness to review and subscribe in a simulation | scale 1–5 | investor |
| Q20 | Which roles could your institution perform? | multiselect: issuer, platform operator, placement agent, custodian, payment provider, N/A | institution |
| Q21 | What licensing or other constraints apply? | paragraph | institution |
| Q22 | How is each proposed instrument classified under current Uganda law? | paragraph | counsel |
| Q23 | Which entity may act as issuer, platform operator, placement agent, broker, custodian and payment provider? | paragraph | counsel |
| Q24 | Which legal register and company-law process govern tokenized equity? | paragraph | counsel |
| Q25 | Is an SPV required for any asset-backed structure, and when? | paragraph | counsel |
| Q26 | What marketing and distribution restrictions apply to each investor class? | paragraph | counsel |
| Q27 | What payment, FX and stablecoin permissions and providers are available? | paragraph | counsel |
| Q28 | What tax treatment and reporting obligations apply? | paragraph | counsel |
| Q29 | What consents, disclosures and investor protections are mandatory? | paragraph | counsel |
| Q30 | Is the proposed first issuance structure viable as described? | paragraph | counsel |
| Q31 | Describe your sector and financing need. | paragraph | design_partner |
| Q32 | Describe your records and disclosure readiness. | paragraph | design_partner |
| Q33 | Are you willing to test the simulated workflow, and when can you give feedback? | paragraph | design_partner |
```

- [ ] **Step 2: Verify the map**

Run:
```bash
grep -c '^| Q[0-9][0-9] |' docs/phase0/survey-instrument.md
grep -n 'Q01\|Q33' docs/phase0/survey-instrument.md
git diff --check
```
Expected: `33`; both IDs present; clean diff check.

- [ ] **Step 3: Commit**

```bash
git add docs/phase0/survey-instrument.md
GIT_AUTHOR_NAME='Nze Ndi Wamanyi' GIT_AUTHOR_EMAIL='nzendiwamanyi@gmail.com' GIT_COMMITTER_NAME='Nze Ndi Wamanyi' GIT_COMMITTER_EMAIL='nzendiwamanyi@gmail.com' git commit -m "docs: define canonical Phase 0 survey questions

Changes:
- Add 33 question IDs, texts, types and blocks shared by Tally and Google Forms
- Cover SME/issuer, investor, institution, counsel and design-partner evidence

Verification:
- Question count: 33
- git diff --check: clean"
```

---

### Task 3: Create the Tally form

**Files:**
- Modify: `docs/phase0/survey-instrument.md`

**Interfaces:**
- Consumes: question IDs `Q01`–`Q33` from Task 2.
- Produces: Tally `formId`, published status, share link, and verified question list.

- [ ] **Step 1: Find the workspace**

Call `TALLY_LIST_WORKSPACES` with `{"page":1}` and `session_id: "song"` via `COMPOSIO_MULTI_EXECUTE_TOOL`. Record the first workspace ID as `workspaceId`.

- [ ] **Step 2: Build the blocks payload**

For each of `Q01`–`Q33`, emit one input block plus its option blocks. Use `type` and `groupType` from this table:

| Question type | Tally `type` | Tally `groupType` | Payload |
|---|---|---|---|
| short text | `INPUT_TEXT` | `INPUT_TEXT` | `{"text":"<ID> <question text>"}` |
| paragraph | `TEXTAREA` | `TEXTAREA` | `{"text":"<ID> <question text>"}` |
| date | `INPUT_DATE` | `INPUT_DATE` | `{"text":"<ID> <question text>"}` |
| dropdown | `DROPDOWN` | `DROPDOWN` | `{"text":"<ID> <question text>"}` then one `DROPDOWN_OPTION` per choice with `{"text":"<choice>","index":<0-based>}` and `groupType:"DROPDOWN"` |
| checkboxes | `CHECKBOXES` | `CHECKBOXES` | `{"text":"<ID> <question text>"}` then one `CHECKBOX` per choice with `{"text":"<choice>","index":<0-based>}` and `groupType:"CHECKBOXES"` |
| multiselect | `MULTI_SELECT` | `MULTI_SELECT` | `{"text":"<ID> <question text>"}` then one `MULTI_SELECT_OPTION` per choice with `{"text":"<choice>","index":<0-based>}` and `groupType:"MULTI_SELECT"` |
| scale 1–5 | `LINEAR_SCALE` | `LINEAR_SCALE` | `{"text":"<ID> <question text>","rangeStart":1,"rangeEnd":5}` |
| yes/no | `MULTIPLE_CHOICE` | `MULTIPLE_CHOICE` | `{"text":"<ID> <question text>"}` then `MULTIPLE_CHOICE_OPTION` for Yes index 0 and No index 1 |
| required checkbox | `CHECKBOXES` | `CHECKBOXES` | `{"text":"Q01 I consent...","required":true}` then one `CHECKBOX` with `{"text":"I consent","index":0}` |

Every block needs a valid UUID v4 `uuid` and `groupUuid`; option blocks share the parent block's `groupUuid`. The first block MUST be a `FORM_TITLE` block with `payload: {}` and `groupType: "FORM_TITLE"`. Generate UUIDs fresh with `crypto.randomUUID()` or equivalent; never reuse them between platforms.

- [ ] **Step 3: Create the form**

Call `TALLY_CREATE_FORM` via `COMPOSIO_MULTI_EXECUTE_TOOL` with:
```json
{"title":"TokenWork Phase 0 Evidence Survey","status":"PUBLISHED","workspaceId":"<workspaceId from Step 1>","blocks":<blocks payload from Step 2>}
```
Expected: a response containing a `formId`.

- [ ] **Step 4: Verify the form**

Call `TALLY_GET_FORM_DETAILS` with `{"formId":"<formId>"}` and `TALLY_LIST_FORM_QUESTIONS` with the same `formId`, both with `session_id: "song"`.

Expected: form status `PUBLISHED`; 33 question entries matching `Q01`–`Q33`. If validation fails, isolate the offending block and retry with a smaller blocks payload, as the plan's search guidance specifies.

- [ ] **Step 5: Record the link and commit**

Replace the Tally pending line in `docs/phase0/survey-instrument.md` with the public share URL returned by Tally (or the form ID if no URL is returned), and add `Tally form ID: <formId>`.

```bash
grep -n 'Tally' docs/phase0/survey-instrument.md
git add docs/phase0/survey-instrument.md
GIT_AUTHOR_NAME='Nze Ndi Wamanyi' GIT_AUTHOR_EMAIL='nzendiwamanyi@gmail.com' GIT_COMMITTER_NAME='Nze Ndi Wamanyi' GIT_COMMITTER_EMAIL='nzendiwamanyi@gmail.com' git commit -m "feat: publish Tally Phase 0 evidence survey

Changes:
- Create published Tally form with 33 canonical questions
- Record form ID and share link in survey-instrument.md

Verification:
- TALLY_GET_FORM_DETAILS: status PUBLISHED
- TALLY_LIST_FORM_QUESTIONS: 33 questions"
```

---

### Task 4: Create and publish the Google Form

**Files:**
- Modify: `docs/phase0/survey-instrument.md`

**Interfaces:**
- Consumes: question IDs `Q01`–`Q33` from Task 2.
- Produces: Google `formId`, `responderUri`, published state, and 33 verified items.

- [ ] **Step 1: Load the publish-settings schema**

Call `COMPOSIO_GET_TOOL_SCHEMAS` with `{"tool_slugs":["GOOGLEFORMS_SET_PUBLISH_SETTINGS"],"session_id":"song"}`. Use the returned schema for Step 5.

- [ ] **Step 2: Create the form**

Call `GOOGLEFORMS_CREATE_FORM` with:
```json
{"info":{"title":"TokenWork Phase 0 Evidence Survey","description":"Online survey replacing live interviews for issue #2. Do not include names or private documents."},"unpublished":true}
```
Expected: `formId` captured.

- [ ] **Step 3: Fetch baseline structure**

Call `GOOGLEFORMS_GET_FORM` with `{"formId":"<formId>"}` and record `revisionId`.

- [ ] **Step 4: Add all questions**

Call `GOOGLEFORMS_BATCH_UPDATE_FORM` with `formId`, `writeControl: {"targetRevisionId":"<revisionId>"}`, and one `createItem` request per question:

| Question type | Google `questionItem.question.requiredQuestion` fields |
|---|---|
| short text | `{"questionText":{"text":"<ID> <text>"},"textAnswers":{"answers":[]},"required":true}` |
| paragraph | `{"questionText":{"text":"<ID> <text>"},"textAnswers":{"answers":[],"paragraph":true},"required":true}` |
| date | `{"questionText":{"text":"<ID> <text>"},"dateAnswers":{},"required":true}` |
| dropdown | `{"questionText":{"text":"<ID> <text>"},"choiceAnswers":{"choices":[{"value":"<choice>"},...]},"required":true}` |
| checkboxes | `{"questionText":{"text":"<ID> <text>"},"checkboxAnswers":{"choices":[{"value":"<choice>"},...]},"required":true}` |
| multiselect | `{"questionText":{"text":"<ID> <text>"},"choiceAnswers":{"choices":[{"value":"<choice>"},...],"type":"MULTIPLE_SELECT"},"required":true}` |
| scale 1–5 | `{"questionText":{"text":"<ID> <text>"},"scaleAnswers":{"low":1,"high":5,"labelLeft":"Not willing","labelRight":"Very willing"},"required":true}` |
| yes/no | `{"questionText":{"text":"<ID> <text>"},"choiceAnswers":{"choices":[{"value":"Yes"},{"value":"No"}]},"required":true}` |

Each `createItem` request is `{"createItem":{"item":{"title":"<ID>","questionItem":{"question":<fields above>}},"location":{"index":<0-based position>}}}`. Q08 uses `required:false`. If the batch returns 400, split into smaller batches and isolate the invalid request.

- [ ] **Step 5: Publish and share**

Call `GOOGLEFORMS_SET_PUBLISH_SETTINGS` using the schema from Step 1 so the form accepts responses. Then call `GOOGLEDRIVE_CREATE_PERMISSION` with:
```json
{"file_id":"<formId>","type":"anyone","role":"reader","allow_file_discovery":false}
```
Expected: publish state allows responses; link access granted.

- [ ] **Step 6: Verify and record**

Call `GOOGLEFORMS_GET_FORM` with `{"formId":"<formId>"}`.

Expected: 33 items, title correct, `responderUri` present, publish state allows responses. Replace the Google pending line in `docs/phase0/survey-instrument.md` with `responderUri` and add `Google Form ID: <formId>`.

```bash
grep -n 'Google' docs/phase0/survey-instrument.md
git add docs/phase0/survey-instrument.md
GIT_AUTHOR_NAME='Nze Ndi Wamanyi' GIT_AUTHOR_EMAIL='nzendiwamanyi@gmail.com' GIT_COMMITTER_NAME='Nze Ndi Wamanyi' GIT_COMMITTER_EMAIL='nzendiwamanyi@gmail.com' git commit -m "feat: publish Google Forms Phase 0 evidence survey

Changes:
- Create Google Form with 33 canonical questions
- Enable responses and grant anyone-with-link reader access
- Record form ID and responder URI in survey-instrument.md

Verification:
- GOOGLEFORMS_GET_FORM: 33 items, responder URI present
- GOOGLEDRIVE_CREATE_PERMISSION: anyone reader"
```

---

### Task 5: Verify, scan and open the PR

**Files:**
- Modify: `docs/phase0/survey-instrument.md` if verification finds a mismatch.

**Interfaces:**
- Consumes: both form IDs from Tasks 3 and 4.
- Produces: PR with CI green and @YodHeVauHe requested.

- [ ] **Step 1: Re-verify both forms**

Call `TALLY_LIST_FORM_QUESTIONS`, `TALLY_GET_FORM_DETAILS`, `GOOGLEFORMS_GET_FORM` and `GOOGLEFORMS_LIST_RESPONSES` (with `form_id`, `page_size: 1`) for both form IDs.

Expected: 33 Tally questions, Tally status `PUBLISHED`, 33 Google items, response reads succeed (empty arrays are acceptable now).

- [ ] **Step 2: Repo verification**

Run:
```bash
git diff main...HEAD --stat
git diff main...HEAD --check
git diff main...HEAD | grep -inE 'gmail|@[a-z0-9.-]+\.(com|org|co|ug)|[0-9]{3}[ -]?[0-9]{3}[ -]?[0-9]{4}' || echo "PII scan: clean"
grep -n '^Status:' docs/phase0/survey-instrument.md
gh issue view 2 --json state --jq .state
```
Expected: clean diff check, PII scan clean, `Status: in review`, issue `OPEN`.

- [ ] **Step 3: Open the PR**

Use the repository PR template with `Refs #2`, list the verification output above, leave the "Evidence included for every Done when item" box unchecked, and request @YodHeVauHe as reviewer. Do not claim issue #2 is complete.

- [ ] **Step 4: Wait for CI**

Run `gh pr checks <number> --watch --interval 5`. Expected: `docs-and-repo-checks` pass. Only then update the checks checkbox in the PR body via `gh api`.

---

### Task 6: Synthesize responses (gated on real submissions)

**Files:**
- Modify: `docs/phase0/interview-synthesis.md`, `docs/phase0/legal-analysis-summary.md`, `docs/phase0/design-partner-shortlist.md`, `docs/superpowers/specs/2026-11-20-phase0-survey-instrument-design.md`.

**Interfaces:**
- Consumes: form IDs from Tasks 3 and 4; question IDs `Q01`–`Q33` from Task 2.
- Produces: redacted evidence in the three instruments and a recorded owner decision for counsel-survey evidence.

- [ ] **Step 1: Check whether responses exist**

Call `TALLY_GET_FORM_RESPONSES` with `{"formId":"<tally formId>","page":1,"limit":100}` and `GOOGLEFORMS_LIST_RESPONSES` with `{"form_id":"<google formId>","page_size":100}`. Paginate until no `nextPageToken` or further page remains.

Expected: if both are empty, STOP. Report that links must be circulated; do not tick any Done-when box.

- [ ] **Step 2: Redact and map responses**

For each submission, keep the self-chosen anonymized code, respondent category and answer text. Drop Q08 contact details and any names, emails, phone numbers or employer identifiers. Map answers by question ID to the owning instrument: Q09–Q16 and Q17–Q19 to `interview-synthesis.md`; Q22–Q30 to `legal-analysis-summary.md`; Q31–Q33 and Q20–Q21 to `design-partner-shortlist.md`.

- [ ] **Step 3: Update the instruments and spec**

Write redacted findings with response counts and dates. In the legal instrument, record the owner decision that a qualified counsel survey response is sufficient for this batch. Keep statuses honest: promote to `validated` only for categories with real evidence; leave gaps explicit.

- [ ] **Step 4: Verify and PR**

Run `git diff --check`, a PII pattern scan over the diff, and confirm each changed status line. Open a PR with `Refs #2`, CI green and @YodHeVauHe requested. Tick a Done-when box on issue #2 only where the synthesized responses actually support it.
