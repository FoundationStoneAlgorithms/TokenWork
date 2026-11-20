# Phase 0 survey instrument design (issue #2)

- Status: approved in chat 2026-11-20; awaiting written-spec review
- Owner: @NzeNdiWamanyi
- Reviewer: @YodHeVauHe
- Related: `docs/phase0/README.md`, `docs/superpowers/specs/2026-11-19-phase0-discovery-design.md`, PR #28 (merged as `654b8c4`)

## Purpose

Replace live interviews with an online survey so Phase 0 evidence can be gathered and issue #2 can be completed. One shared questionnaire is published on two platforms — Tally and Google Forms — and responses feed the three evidence instruments: interview synthesis, legal analysis summary and design-partner shortlist.

## Owner decisions recorded

- All four respondent groups are in scope: SME/issuer, investor, financial institution/professional partner and qualified counsel.
- A response from qualified Ugandan counsel in the survey is sufficient to support the legal-analysis instrument; a separate counsel memo is not required for this batch. This is an exception to the plan's counsel-memo stop condition for this survey batch only; later evidence still follows the original stop condition.
- @NzeNdiWamanyi circulates the links. Raw answers stay in Tally/Google Forms; the repo receives only links, the question map, response counts and redacted synthesis.
- Forms alone do not complete issue #2. Done-when boxes are ticked only after responses arrive and are synthesized.

## Architecture and data flow

1. Branch from merged `main` as `issue-2-phase0-survey-design` for this spec; implementation uses a fresh branch from updated `main`.
2. Connect Composio toolkits `tally`, `googleforms` and `googledrive`. No external form is created before the connection is Active.
3. Create one `PUBLISHED` Tally form and one Google Form with the same question set. Publish the Google Form and grant link-based access.
4. Add `docs/phase0/survey-instrument.md` with both share links, form IDs, respondent routing and the question-to-evidence map. No names, emails, phone numbers or employer identifiers in the repo.
5. @NzeNdiWamanyi circulates the links. When responses exist, read them from Tally and Google Forms, redact them, and update the three evidence instruments in a follow-up PR.
6. Issue #2 stays OPEN until the synthesized evidence supports its Done-when items.

## Shared questionnaire

Common block (all respondents): consent, respondent category, self-chosen anonymized code, sector, geography, date, permission for anonymous quotes, optional private contact for follow-up (form platform only).

Category blocks:

- **SME / issuer:** last capital raise attempt (amount, timeline, outcome, blocker); financing options considered and why rejected; documents, verification and reporting requested; what would make a digital issuance workflow trustworthy; records readiness (registration, ownership evidence, 12-month bank or 6-month mobile-money statements, GPS/LC1 location); willingness to test a simulated workflow; feedback window.
- **Investor:** evidence, rights and exit expectations; simulated-eligibility view; willingness to review and subscribe in a simulation.
- **Financial institution / professional partner:** roles willing and licensed to perform (issuer, platform, placement, custody, payment) and binding constraints.
- **Qualified counsel:** instrument classification; permitted operating roles; authoritative register and company-law process; SPV need; marketing restrictions; payment, FX and stablecoin permissions; tax and reporting; mandatory consents, disclosures and investor protections; viability of the proposed first issuance structure.
- **Design-partner readiness:** sector, financing need, record readiness, test willingness, feedback window — feeds the shortlist rubric.

Questions use "N/A" options rather than brittle platform-specific branching, so the same map works on both platforms.

## Completion gates

- Forms created and linked: `survey-instrument.md` is `in review`; all three evidence instruments keep their current status.
- Responses received and redacted: update each evidence instrument with sourced, anonymized findings; record the counsel-survey decision explicitly in the legal instrument and spec register.
- Only then may Done-when boxes be considered, and only where the responses actually support them. If a category has no responses, report the gap instead of marking evidence complete.

## Verification

- Tally: `TALLY_GET_FORM_DETAILS` and `TALLY_LIST_FORM_QUESTIONS` confirm title, published status and question list.
- Google: `GOOGLEFORMS_GET_FORM` confirms title, items and publishing state; link access is checked separately.
- Repo: `git diff --check`, PII pattern scan over the diff, and CI green before merge.
- No completion claim is made from an empty form.

## Scope boundary

No production issuance, real-money flow, KYC/AML or regulatory approval. The survey is evidence gathering for Phase 0 only; raw personal data never enters the repository.
