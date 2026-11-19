# Phase 0 Discovery and Legal/Market Validation — Design

- Date: 2026-11-19
- Status: approved
- Owner: NzeNdiWamanyi (accountable for issue #2 end to end)
- Related issue: #2 — Phase 0: Discovery and legal/market validation
- Related planning: PRD `#13`, `#14`, `#18`, `#19`; issues #3–#12

## Intent and success criteria

Issue #2 exists to validate the real financing problem, the first legally viable issuance
structure in Uganda, and a focused MVP scope before production design is committed. Success
means all five Done-when items in issue #2 are satisfied with real evidence: interview
synthesis and problem statement, written legal analysis summary, a prioritized design-partner
shortlist, MVP scope and acceptance criteria reflected in issues #3–#12, and every PRD `#18`
assumption tracked with an owner, evidence requirement and deadline.

This design covers how that work is executed and reviewed. It does not supply the evidence
itself. Interviews, qualified Ugandan counsel analysis and partner signals must come from
Nze and other humans; no interview notes, legal conclusions or partner commitments are
invented by an agent.

## Context and constraints

- The repository is public and governed by `CONTRIBUTING.md`: work happens on an
  `issue-<N>-<slug>` branch via PR, `main` requires one CODEOWNERS approval, authors cannot
  self-approve, and evidence must be real.
- `SECURITY.md` requires secrets, private keys, credentials and personal or financial data
  to stay out of issues, commits and logs. Issue #2 additionally requires anonymized or
  redacted material in the repo.
- All raw Phase 0 evidence is held in a private location chosen by Nze. The repo contains
  only redacted conclusions and references to those private sources.
- PRD `#18` lists ten assumptions that must become tracked decisions; PRD `#19` defines 21
  MVP acceptance criteria that feed issues #3–#12.
- No calendar dates were supplied, so deadlines are expressed as repository milestones
  (issue numbers) rather than invented dates.

## Approach decision

Three approaches were considered:

1. **Two-track staged delivery (selected).** Repo-side register and scope mapping land
   first; each evidence artifact lands in its own PR as real evidence arrives.
2. One Phase 0 evidence package. A single PR with all five artifacts and status labels.
   Rejected: placeholder-heavy and easy to mistake for completed work.
3. Repo index only. No synthesis documents in the repo. Rejected: conclusions would not be
   durable or reviewable in-repo, making later verification of Done-when items difficult.

The selected approach keeps conclusions reviewable in-repo while respecting the
private-evidence rule, and gives one clean review per evidence stream.

## Artifact structure

All artifacts live under `docs/phase0/`:

| File | Purpose |
|---|---|
| `README.md` | Index mapping each Done-when item to its artifact, status and private evidence reference |
| `decisions-register.md` | The ten PRD `#18` assumptions, each with ID, assumption, owner, evidence requirement, deadline, status and resolution |
| `mvp-scope-mapping.md` | Each of the 21 PRD `#19` criteria mapped to issues #3–#12, with gaps requiring owner agreement called out |
| `interview-synthesis.md` | Redacted synthesis and validated problem statement; instrument: interview guide and note template |
| `legal-analysis-summary.md` | Counsel findings summary; instrument: question list for counsel, mapped to PRD `#10` and `#18` |
| `design-partner-shortlist.md` | Prioritized shortlist and readiness notes; instrument: scoring rubric, sectors from PRD `#12.2` |

Status values are `planned`, `awaiting evidence`, `in review`, `validated`. For evidence
artifacts, `planned` is not used: they begin at `awaiting evidence`.

## Workflow and gating

**Track 1 — repo-side (first PR).** Add the index, decisions register and scope mapping.
Seed the three evidence docs with their empty instruments and status `awaiting evidence`.
Nze opens the PR; Yod reviews and merges it. `docs-and-repo-checks` must pass.

**Track 2 — evidence-side (one PR per artifact).** For each evidence doc, Nze gathers the
source privately, writes only redacted conclusions plus a reference to the private source,
opens a PR that moves the doc to `in review`, and Yod approves. On merge the status becomes
`validated` and the matching Done-when box in issue #2 is ticked.

**Closure rule.** Issue #2 closes only when all five artifacts are `validated` in the README
index and every Done-when box is checked. A PR must not contain raw notes, personal
identifiers, full counsel text or partner contact details; that check is part of review,
not just CI.

## Ownership and deadlines

Nze is owner of all five Done-when items and all ten tracked decisions. Counsel,
interviewees and partner contacts are evidence sources, not owners. Yod reviews and
approves the repo-side PRs as the other CODEOWNER; scope disputes are resolved in issue #2
before merging.

Deadlines use repository milestones:

| PRD `#18` item | Deadline |
|---|---|
| Legal/regulatory classification of instruments in Uganda | Before issue #2 closes |
| Issuer, platform, placement, broker, custodian and payment roles | Before issue #2 closes |
| Legal register and company-law process for tokenized equity | Before issue #2 closes |
| SPV requirement for asset-backed structures | Before issue #15 (Phase 3) starts; deferred for MVP |
| Marketing and distribution scope per investor class | Before issue #2 closes |
| Payment, FX and stablecoin permissions and provider availability | Before issue #8 (Week 5) starts |
| Tax treatment and reporting obligations | Before issue #2 closes |
| Registry, identity, accounting and banking integration availability | Before issue #5 (Week 2) starts |
| Commercial willingness of SMEs, investors and institutions | Before issue #2 closes |
| Production hosting, custody and security architecture | Before issue #11 (Week 7) security review |

## Failure modes and sensitive-data handling

- **Evidence contradicts a PRD assumption:** record the contradiction in the decisions
  register with status `blocked`, name affected issues in the PR notes, and obtain an
  explicit Nze + Yod decision. The PRD is not silently rewritten.
- **Counsel rejects the proposed first issuance structure:** stop before changing MVP
  scope; raise a follow-up issue under the epic if a different structure is required.
- **Evidence does not arrive:** the artifact remains `awaiting evidence`, its Done-when box
  stays unchecked, and issue #2 stays open. No placeholder is promoted to `validated`.
- **Sensitive data reaches a commit:** treat as exposure — remove it in a follow-up commit,
  purge history where feasible, and handle disclosure privately per `SECURITY.md` rather
  than in a public issue.
- **Owner disagreement on scope:** resolve in issue #2 before merging; CODEOWNERS review is
  not a rubber stamp.

Every Phase 0 PR uses the existing PR template: real verification output, evidence for each
Done-when item, and an explicit no-secrets/no-PII check after scanning the diff.

## Verification

Before each PR, check locally:

1. All ten PRD `#18` items appear exactly once in the decisions register.
2. All 21 PRD `#19` criteria are mapped to issues #3–#12 or explicitly deferred with a reason.
3. README statuses match the Done-when checkboxes in issue #2.
4. No personal identifiers, partner contacts or counsel text appear in the diff.
5. Evidence references point to private sources, not public repository files.
6. Markdown links resolve and no section-sign characters remain.

`docs-and-repo-checks` must be green, and both CODEOWNERS review: Nze authors, Yod
approves. Final acceptance consists of reading the README index and issue #2 together —
all five artifacts `validated`, all Done-when boxes checked — then closing #2. No new
automation is added for Phase 0; the checklist stays manual to keep scope tight.

## Non-goals

- Conducting interviews, obtaining counsel or contacting design partners as part of this
  design work.
- Producing code for the MVP, changing PRD criteria, or closing issues #3–#12.
- Introducing a private evidence store or new tooling; Nze selects the store and the repo
  references it.
