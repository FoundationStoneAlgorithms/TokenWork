# Phase 0 survey instrument design (issue #2)

- Status: approved in chat 2026-11-20; revised to four role-specific forms 2026-11-20
- Owner: @NzeNdiWamanyi
- Reviewer: @YodHeVauHe
- Related: `docs/phase0/README.md`, `docs/superpowers/specs/2026-11-19-phase0-discovery-design.md`

## Purpose

Replace live interviews with four short online surveys so Phase 0 evidence can be gathered and issue #2 can be completed. Each survey is published on Tally and targets one respondent group. Together they feed the three evidence instruments: interview synthesis, legal analysis summary and design-partner shortlist.

## Owner decisions recorded

- Four respondent groups are in scope: SME/issuer, investor, financial institution/professional partner and qualified counsel.
- A response from qualified Ugandan counsel is sufficient to support the legal-analysis instrument; a separate counsel memo is not required for this batch. This is an exception to the plan's counsel-memo stop condition for this survey batch only.
- Four short, role-specific forms replace the original single 33-question form. Each asks only questions its audience can answer and uses plain language, with no internal IDs shown to respondents.
- No external database is used: raw answers stay in Tally. @NzeNdiWamanyi circulates each link to its intended audience; the repo receives only links, form IDs, the evidence map, response counts and redacted synthesis.
- Forms alone do not complete issue #2. Done-when boxes are ticked only after responses arrive and are synthesized.

## Architecture and data flow

1. Spec and implementation land by PR; `main` stays protected and requires one CODEOWNERS approval.
2. Connect Composio toolkit `tally`. No form is created before the connection is Active.
3. Create four `PUBLISHED` Tally forms, one per respondent group, each with an introduction, a time estimate, a privacy note and two or three headed sections.
4. Add `docs/phase0/survey-instrument.md` with all four share links, form IDs and the internal `Q01`–`Q33` evidence map.
5. @NzeNdiWamanyi circulates each link. When responses exist, read them from Tally, redact them, and update the three evidence instruments in a follow-up PR. Raw responses are never exported to a database or committed to the repo.
6. Issue #2 stays OPEN until the synthesized evidence supports its Done-when items.

## Questionnaire structure

Every form opens with a common block: consent, anonymized response code, sector or practice area with geography or jurisdiction, permission for anonymous quotes, and optional follow-up contact. Tally supplies the submission timestamp, so no separate date question is needed.

- **Founders & Issuers:** capital raise attempt and blocker, financing options considered, documents requested, trust requirements, records readiness, simulated-workflow willingness, feedback window. This form also carries the design-partner readiness evidence.
- **Investors:** evidence, rights and exit expectations; simulated eligibility; willingness to review and subscribe.
- **Institutions & Partners:** roles the organisation could perform and licensing constraints.
- **Legal Counsel:** instrument classification, permitted roles, register and company-law process, SPV requirement, marketing restrictions, payment/FX/stablecoin permissions, tax and reporting, consents and investor protections, viability of the proposed first structure.

`Q01`–`Q33` remain the internal evidence keys for synthesis. Two internal IDs may map to one plain-language question; the answer is then tagged with both IDs. Respondents never see internal IDs.

## Completion gates

- Forms created and linked: `survey-instrument.md` is `in review`; all three evidence instruments keep their current status.
- Responses received and redacted: update each evidence instrument with sourced, anonymized findings; record the counsel-survey decision explicitly in the legal instrument.
- Only then may Done-when boxes be considered, and only where the responses actually support them. If a group has no responses, report the gap instead of marking evidence complete.

## Verification

- Tally: `TALLY_GET_FORM_DETAILS`, `TALLY_LIST_FORM_QUESTIONS` and `TALLY_GET_FORM_RESPONSES` confirm all four forms are published, have the expected question counts and accept responses; public links render correctly.
- Repo: `git diff --check`, PII pattern scan over the diff, and CI green before merge.
- No completion claim is made from empty forms.

## Scope boundary

No production issuance, real-money flow, KYC/AML or regulatory approval. The surveys are evidence gathering for Phase 0 only; raw personal data never enters the repository, and no external database is introduced.
