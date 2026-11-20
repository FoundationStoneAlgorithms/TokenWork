# Phase 0 survey instrument (issue #2)

Status: in review
Owner: @NzeNdiWamanyi
Evidence basis: online survey replacing live interviews; no responses collected yet. No external database — raw answers stay in Tally.

## Share links

- Tally: https://tally.so/r/9NZLWY
- Tally form ID: `9NZLWY`

## Response status

No responses collected. Issue #2 stays OPEN until responses are received and synthesized.

## Canonical questions

Tally uses these question IDs and texts. Q15 and Q19 use Tally's default linear scale — the API does not accept custom range labels. Multiselect questions include `N/A`.

| ID | Text | Type | Block |
|---|---|---|---|
| Q01 | I consent to my answers being used for Phase 0 product research. | required checkbox | common |
| Q02 | Respondent category | dropdown: SME/issuer, Investor, Financial institution/professional partner, Qualified counsel, Design-partner candidate | common |
| Q03 | Self-chosen anonymized code (do not use your name) | short text | common |
| Q04 | Sector | short text | common |
| Q05 | Geography (district/city) | short text | common |
| Q06 | Response date | date | common |
| Q07 | May we quote your answers anonymously? | yes/no | common |
| Q08 | Private follow-up contact (stored in Tally only, never in the repo) | optional short text | common |
| Q09 | Describe your last capital raise attempt: amount, timeline, outcome. | paragraph | sme_issuer |
| Q10 | What was the main blocker? | paragraph | sme_issuer |
| Q11 | Which financing options did you consider, and why were they rejected or accepted? | paragraph | sme_issuer |
| Q12 | What documents, verification and reporting were requested by investors or institutions? | paragraph | sme_issuer |
| Q13 | What would make a digital issuance workflow trustworthy enough to use? | paragraph | sme_issuer |
| Q14 | Which records do you already have? | checkboxes: registration, ownership evidence, 12-month bank statement, 6-month mobile-money statement, GPS/LC1 location, N/A | sme_issuer |
| Q15 | Willingness to test a simulated issuance workflow | linear scale | sme_issuer |
| Q16 | When could you give feedback? | short text | sme_issuer |
| Q17 | What evidence, rights and exit expectations would you require as an investor? | paragraph | investor |
| Q18 | How do you view simulated investor eligibility? | paragraph | investor |
| Q19 | Willingness to review and subscribe in a simulation | linear scale | investor |
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
