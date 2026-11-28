# CMA third-party validation for the pitch deck — short design

Date: 2026-11-28
Status: awaiting approval
Branch plan: own `issue-<N>-cma-validation` branch (not the current `issue-31-branding-fonts`), closing its own issue.

## Intent and why

The pitch deck (tokenwork.vercel.app) states the problem and the gap, but the gap claim — "no accessible, legally structured pathway for SMEs to raise equity" — is asserted without third-party attribution. External audiences (prospective investors for the seed ask; visitors to the site) should see that regulators and public institutions independently document the same problem and the same gap. Phase 0's internal evidence gates (D9, interview synthesis status) are explicitly **not** touched by this work.

## Goals

- Attribute the deck's existing claims to verifiable third-party sources (links, not invented figures).
- Surface CMA Uganda's 2026 publications and 2026 public-exposure drafts as regulator-grade validation of the problem and of regulatory momentum.
- Add one dedicated validation slide ("don't take our word for it") between Opportunity (03) and Insight (04).

## Non-goals

- No change to phase 0 docs, decision register D1–D10 statuses, or the interview/validation process.
- No new problem narrative — the deck's claims stay; only their evidence improves.

## Anti-goals (what would make this a failure)

- Any figure or quote on a slide that cannot be verified against a linked source. The deck's own rule: "shown once real, never invented."
- Misattribution — e.g., presenting the SEC Nigeria paper as CMA's own research.
- Citing the 2010–2014 player/investor surveys as primary evidence (too dated for a 2026 investor audience).

## Approaches considered

- **A. Weave citations into existing slides (02, 03, 09, 13).** Least work, no new slides; evidence distributed where claims live. Rejected as the whole answer because the deck never gives the third-party signal one visible moment.
- **B. Dedicated validation slide only.** Strongest single signal but leaves existing claims under-sourced. Rejected as the whole answer for the same reason.
- **C. Both — extract evidence from the sources first, then weave + add the slide.** Chosen. The extracted, linked evidence is what makes the slide credible; work stays bounded by the fallback below.

## Evidence hierarchy (verified 2026-11-28)

1. **Primary — CMA Uganda's own 2026 articles** (regulator, current): [*Beyond Coffee and Gold* (6 Jul 2026)](https://cmauganda.co.ug/2026/07/06/beyond-coffee-and-gold-how-capital-markets-can-power-ugandas-export-revolution/) and [*Unlocking Long-Term Financing Potential* (15 Jul 2026)](https://cmauganda.co.ug/2026/07/15/capital-markets-unlocking-ugandas-long-term-financing-potential-for-sustainable-economic-transformation/). Both already verified with content summaries in `docs/phase0/interview-synthesis.md`.
2. **Regulatory momentum — 2026 public-exposure drafts** ([draft-laws page](https://cmauganda.co.ug/draft-laws/)): GSS Bond Guidelines, ESG Disclosure & Sustainability Reporting Guidelines, Civil Penalties Regulations — all in public comment. Signal: the framework is still actively expanding; matches the @CmaUganda X post context.
3. **Secondary — Survey of CIS Managers 2023** ([surveys page](https://cmauganda.co.ug/surveys/)): one pass to look for usable current investor/market data; dropped if nothing beats existing slide stats.
4. **Supporting voice only — "Making Capital Markets Work for SMEs in Africa"**: by Arunma Oteh, Director-General, SEC Nigeria (~2010), hosted by CMA (verified: 26-page PDF, `download.php` link on the research-papers page). Usable only as durable framing (bank-dominated finance; SMEs ~90% of African business operations) with correct attribution — never as "CMA's own research," never as primary evidence.
5. **Skipped:** Players Surveys 2010–2014, Investors Survey 2011, Unit Trust Managers 2019 (dated), 2021/2022 draft laws (finalized into the 2025 regulations the deck already cites).

**Fallback:** if PDF extraction under-delivers, the slide and weave build entirely on tier 1–2, which is sufficient for both.

## Slide targets (decided)

- **02 Problem:** source lines under the six barrier cards — collateral/cost/slowness claims to CMA 2026 article language; stats keep existing GROW/MGLSD citation.
- **03 Opportunity:** the gap sentence gains its CMA 2026 attribution (exact quote verified from the articles at build time).
- **New 04 — "Independently documented":** three blocks — what the regulator says (2026 articles), what the regulator is doing (2025 regs live + 2026 exposure drafts open for comment), what other regulators/public institutions say (SEC Nigeria paper, GROW/World Bank). Insert after 03; renumber downstream `SectionLabel` indices (04→05 … 16→17) — mechanical, all in `components/slides/`.
- **09 Legal:** add one line noting CMA's 2026 public-exposure drafts (framework actively expanding).
- **13 Why Now:** "SME financing urgency" card gains the regulator's own 2026 publications as the signal, replacing the weaker GROW framing.

## Constraints

- Pitch deck design system only: existing `Slide`, `SectionLabel`, `Reveal`, `editorial-card` components; no new dependencies.
- Work on its own issue/branch per repo convention; no conflict with `issue-31-branding-fonts`.
- Every added source line carries a working URL; PDFs stored outside the repo (evidence lives in the linked sources, not the repo).

## Left to the builder

- Download remaining PDFs (CIS Managers 2023; exposure drafts), extract exact quotes/figures with page references; verify each against slide copy before use.
- Confirm the two 2026 article URLs still resolve and the quotes match at build time.
- Slide insertion and index renumbering; final copy in the deck's existing tone.
