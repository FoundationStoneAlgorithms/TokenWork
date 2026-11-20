# Phase 0 Survey Instrument Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish four short Tally surveys — one per respondent group — and record the links and evidence map needed to gather Phase 0 evidence for issue #2.

**Architecture:** A single internal evidence map lives in `docs/phase0/survey-instrument.md`. Four Tally forms are generated from that map, each with plain-language questions. Raw answers stay in Tally — no external database — and only links, counts and redacted synthesis enter the repo.

**Tech Stack:** Composio MCP tool (`tally`), GitHub CLI, Markdown.

**Spec:** `docs/superpowers/specs/2026-11-20-phase0-survey-instrument-design.md`

## Global Constraints

- Owner: @NzeNdiWamanyi; reviewer: @YodHeVauHe. Verify `gh api user --jq .login` returns `NzeNdiWamanyi` before any `gh` command.
- Commits MUST be authored and committed as Nze Ndi Wamanyi via explicit `GIT_AUTHOR_NAME`, `GIT_AUTHOR_EMAIL`, `GIT_COMMITTER_NAME`, `GIT_COMMITTER_EMAIL` environment values.
- `main` is protected: all changes land by PR with one CODEOWNERS approval. Never push directly to `main`.
- No names, emails, phone numbers, employer identifiers or raw response text in the repository. No external database.
- Composio meta calls use session id `song`. Never execute a toolkit tool without an ACTIVE connection.
- Issue #2 stays OPEN until real responses are received and synthesized. Creating forms never ticks a Done-when box.
- Use the repository PR body structure: Summary, Related issue, Verification, Notes.

## Review Focus

- **Inactive connection:** Task 1 checks the Tally connection before any creation.
- **Tally form stuck in BLANK:** `TALLY_CREATE_FORM` requires `status: "PUBLISHED"`; verify with `TALLY_GET_FORM_DETAILS`.
- **Invalid block structure:** Tally rejects group types (`CHECKBOXES`, `QUESTION`) as `type`; use `TITLE` with `groupType: "QUESTION"` for labels and concrete input/option blocks. `LINEAR_SCALE` requires `start`, `end` and `step`, with `hasLeftLabel`/`leftLabel` and `hasRightLabel`/`rightLabel` for labelled endpoints. A payload containing only `isRequired` renders no answer control.
- **Question counts:** Task 3 verifies 12 / 8 / 7 / 12 questions for founders, investors, institutions and counsel.
- **PII in repo:** Task 3 runs a PII pattern scan over the diff and stops on any match.

---

### Task 1: Connection and repository scaffold

**Files:** Create `docs/phase0/survey-instrument.md`.

**Interfaces:** Consumes merged PR #28 on `main`. Produces a branch, Active `tally` connection and the initial survey document.

- [ ] **Step 1: Prepare branch and identity**

```bash
git switch main && git pull --ff-only && git switch -c issue-2-phase0-survey
gh api user --jq .login
git status --short --branch
```

- [ ] **Step 2: Check the Tally connection**

Call `COMPOSIO_MANAGE_CONNECTIONS` with `{"toolkits":[{"name":"tally","action":"list"}],"session_id":"song"}`. If not Active, use `action: "add"` and show the returned link to @NzeNdiWamanyi. Do not proceed until Active.

- [ ] **Step 3: Write the initial survey document**

Write `docs/phase0/survey-instrument.md` with `Status: in review`, `@NzeNdiWamanyi` as owner, no external database, four pending links and the response gate. Verify with `grep -n '^Status:'` and `git diff --check`, then commit.

---

### Task 2: Create the four forms

**Files:** Modify `docs/phase0/survey-instrument.md`.

**Interfaces:** Consumes the internal evidence map. Produces four published form IDs and share links.

- [ ] **Step 1: Build each form**

Call `TALLY_CREATE_FORM` four times with `status: "PUBLISHED"`. Each form has a `FORM_TITLE` block with title and description, an introductory `TEXT` block, an `About you` `HEADING_1`, the common block, role-specific `HEADING_1` sections and questions, and a closing `TEXT` block.

| Form | Title | Questions |
|---|---|---|
| Founders | TokenWork Stakeholder Survey — Founders & Issuers | 12 |
| Investors | TokenWork Stakeholder Survey — Investors | 8 |
| Institutions | TokenWork Stakeholder Survey — Institutions & Partners | 7 |
| Counsel | TokenWork Stakeholder Survey — Legal Counsel | 12 |

Use `TITLE` blocks with `groupType: "QUESTION"` for question text. Use concrete input blocks (`INPUT_TEXT`, `TEXTAREA`, `INPUT_DATE`, `LINEAR_SCALE`) and option blocks (`CHECKBOX`, `DROPDOWN_OPTION`, `MULTIPLE_CHOICE_OPTION`, `MULTI_SELECT_OPTION`) with sequential `index` and `isFirst`/`isLast` flags. Configure scale blocks with `{isRequired, start: 1, end: 5, step: 1, hasLeftLabel: true, leftLabel: "Not willing", hasRightLabel: true, rightLabel: "Very willing"}`. `rangeStart`/`rangeEnd` are rejected by the API.

- [ ] **Step 2: Verify and record**

Call `TALLY_GET_FORM_DETAILS` and `TALLY_LIST_FORM_QUESTIONS` for all four IDs, and load each public `https://tally.so/r/<id>` link to confirm it renders. Replace the pending links in `docs/phase0/survey-instrument.md` with the four real links and IDs, and add the `Q01`–`Q33` evidence map. Commit.

- [ ] **Step 3: Retire any superseded form**

If an earlier single-form survey exists, call `TALLY_DELETE_FORM` for that ID so only the four role-specific forms remain.

---

### Task 3: Verify, scan and open the PR

**Files:** Modify `docs/phase0/survey-instrument.md` if verification finds a mismatch.

**Interfaces:** Consumes the four form IDs. Produces a PR with CI green and @YodHeVauHe requested.

- [ ] **Step 1: Re-verify forms**

Call `TALLY_LIST_FORM_QUESTIONS`, `TALLY_GET_FORM_DETAILS` and `TALLY_GET_FORM_RESPONSES` for all four IDs. Expected: published, 12/8/7/12 questions, response reads succeed (empty arrays acceptable).

- [ ] **Step 2: Repo verification**

```bash
git diff main...HEAD --stat
git diff main...HEAD --check
git diff main...HEAD | grep -inE 'gmail|@[a-z0-9.-]+\.(com|org|co|ug)|[0-9]{3}[ -]?[0-9]{3}[ -]?[0-9]{4}' || echo "PII scan: clean"
grep -n '^Status:' docs/phase0/survey-instrument.md
gh issue view 2 --json state --jq .state
```

- [ ] **Step 3: Open the PR**

Use the repository PR body structure with `Refs #2`, list the verification output, leave the "Evidence included for every Done when item" box unchecked, and request @YodHeVauHe. Do not claim issue #2 is complete.

- [ ] **Step 4: Wait for CI**

Run `gh pr checks <number> --watch --interval 5`. Expected: `docs-and-repo-checks` pass; then update the checks checkbox via `gh api`.

---

### Task 4: Synthesize responses (gated on real submissions)

**Files:** Modify `docs/phase0/interview-synthesis.md`, `docs/phase0/legal-analysis-summary.md`, `docs/phase0/design-partner-shortlist.md`, `docs/superpowers/specs/2026-11-20-phase0-survey-instrument-design.md`.

**Interfaces:** Consumes the four form IDs and the `Q01`–`Q33` evidence map.

- [ ] **Step 1: Check whether responses exist**

Call `TALLY_GET_FORM_RESPONSES` for each form with `page: 1`, `limit: 100`, paginating until no further page. If all are empty, STOP, report that the links must be circulated, and do not tick any Done-when box.

- [ ] **Step 2: Redact and map responses**

For each submission, keep the anonymized code, audience and answer text. Drop contact details and any names, emails, phone numbers or employer identifiers. Map by internal ID: founders Q09–Q16 and design-partner Q31–Q33 to `interview-synthesis.md`; investors Q17–Q19 to the same instrument; institutions Q20–Q21 to `design-partner-shortlist.md`; counsel Q22–Q30 to `legal-analysis-summary.md`.

- [ ] **Step 3: Update the instruments and spec**

Write redacted findings with response counts and dates. Record that a qualified counsel response is sufficient for this batch. Promote statuses only for groups with real evidence; leave gaps explicit.

- [ ] **Step 4: Verify and PR**

Run `git diff --check`, a PII pattern scan over the diff, and confirm each status line. Open a PR with `Refs #2` and CI green. Tick a Done-when box on issue #2 only where synthesized responses support it.
