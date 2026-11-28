# CMA Third-Party Validation for Pitch Deck — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Strengthen the pitch deck's problem/gap claims with verifiable third-party evidence (CMA Uganda's own 2026 publications and public-exposure drafts) and add one dedicated "independently documented" validation slide.

**Architecture:** Content-only change inside `PitchDeck/` (Next.js 16 app): renumber slides 04–16 to 05–17, weave source lines into slides 02/03/(new)10/(new)14, insert one new slide component at position 04, rewire `components/slides/index.tsx`. No backend, no new dependencies.

**Tech Stack:** Next.js 16, React 19, Tailwind 4, existing slide primitives (`Slide`, `SectionLabel`, `Reveal`, `editorial-card`).

**Spec:** `docs/superpowers/specs/2026-11-28-cma-third-party-validation-design.md`

## Global Constraints

- PitchDeck has **no test framework** (`package.json` scripts: `dev`, `build`, `lint`, `typecheck` only). Verification = `npm run lint`, `npm run typecheck`, `npm run build` in `PitchDeck/`, plus grep checks and a dev-server visual pass. Do **not** add a test framework.
- No new npm dependencies.
- Every added claim carries a linked, resolvable public source; no figure or quote may appear on a slide without one (deck rule: "shown once real, never invented").
- The Oteh paper is attributed as **SEC Nigeria**, hosted in CMA's research library — never as CMA's own research.
- No citations to X/Twitter posts (unverifiable from this environment); the draft-laws page is the citable source for exposure drafts.
- Phase 0 docs and the decision register (D1–D10) are untouched.
- Repo workflow: all work on branch `issue-<N>-cma-validation` created off `origin/main`; final PR closes issue #N. Repo does not use conventional-commit prefixes (history: "Add TokenWork branding and default typography").
- `gh` currently fails (`api.github.com` unreachable; `GH_TOKEN` invalid): issue/PR creation steps include a fallback — ask the user to create it in the browser and report the number.

## Pinned Evidence (verified 2026-11-28 during planning)

**E1 — CMA, "Beyond Coffee and Gold: How Capital Markets Can Power Uganda's Export Revolution"** (B. Asaasira, ed. L. Tukei, 6 Jul 2026) — https://cmauganda.co.ug/2026/07/06/beyond-coffee-and-gold-how-capital-markets-can-power-ugandas-export-revolution/
- E1a: "However, bank loans are often short-term, expensive, and require substantial collateral."
- E1b: "For many exporters, particularly Small and Medium Enterprises (SMEs), obtaining sufficient financing can be difficult."
- E1c: "Yet there is another source of finance that remains largely untapped in Uganda: the capital markets."
- E1d: "Without adequate finance, many exporters cannot fulfill large orders, even when market opportunities exist."

**E2 — CMA, "Capital Markets: Unlocking Uganda's Long-Term Financing Potential for Sustainable Economic Transformation"** (L. Tukei, 15 Jul 2026) — https://cmauganda.co.ug/2026/07/15/capital-markets-unlocking-ugandas-long-term-financing-potential-for-sustainable-economic-transformation/
- E2a: domestic market capitalisation UGX 4.33tn → UGX 21.77tn (Jun 2021–Mar 2026), CAGR over 40 percent
- E2b: CIS AUM UGX 731bn → UGX 6.02tn
- E2c: funded investor accounts ~29,000 → more than 220,000
- E2d: "successful public offerings of MTN Uganda and Airtel Uganda"

**E3 — CMA draft-laws page** (https://cmauganda.co.ug/draft-laws/), 2026 public-exposure drafts open for comment: "Draft CMA GSS Bond Guidelines 2026-Public Exposure"; "CMA ESG Disclosure and Sustainability Reporting guidelines - Public Exposure Draft- April 2026"; "Draft Capital Markets Authority Civil Penalties Regulations - 2026".

**E4 — "Making Capital Markets Work for SMEs in Africa"**, Arunma Oteh, Director-General, Securities Exchange Commission, Nigeria (~2010; 26-page PDF downloaded and verified during planning). Durable verbatim framing, p.1: "Our financial systems are currently dominated by the banking system which means there is an urgent need to develop our financial markets." Citable page: https://cmauganda.co.ug/research-papers/

**E5 — CIS Managers Survey 2023:** pass performed during planning (32-page PDF). Figures superseded by E2 (AUM UGX 1,779.2bn Mar 2023 vs UGX 6.02tn 2026; 56,787 CIS accounts vs 220k+). **Dropped** per the spec's rule; must not appear on slides.

**E6 — GROW / MGLSD 2025** (already cited on slide 02, unchanged): 2.57M enterprises, 25% formal credit access, USD 277.6M unlock — https://grow.go.ug/uganda-moves-to-expand-financing-for-women-entrepreneurs/

## Review Focus

1. **Misattribution** — the Oteh paper presented as CMA's own research. Expected: slide 04 says "SEC Nigeria", not CMA. Pinned by Task 4 grep step.
2. **Unverifiable figures** — a stat/quote with no working link. Expected: every URL on changed slides resolves and contains the quoted phrase. Pinned by Task 6 curl step.
3. **Renumber gap** — duplicate or missing slide numbers after insertion. Expected: `SectionLabel index=` values and registry `num` fields are sequential 01–17. Pinned by Task 2 and Task 4 grep steps.
4. **Registry/visual mismatch** — `slideIds` length ≠ `slides` length or wrong order (progress indicator, keyboard nav drift). Expected: 17 entries, validation after opportunity; build passes; visual pass shows slide 4 of 17 is the new slide. Pinned by Task 4 verify steps.
5. **Tone drift** — validation slide reading as marketing fluff against the deck's austere editorial voice. Expected: headline + quote cards + mono source lines matching existing slides. Pinned by Task 6 visual pass.

---

### Task 1: GitHub issue, branch, and docs commit

**Files:**
- Create (already on disk, untracked): `docs/superpowers/specs/2026-11-28-cma-third-party-validation-design.md`
- Create (already on disk, untracked): `docs/superpowers/plans/2026-11-28-cma-third-party-validation.md`

**Interfaces:**
- Produces: issue number `N`; branch `issue-<N>-cma-validation` off `origin/main`. All later tasks run on this branch and reference `#N` in commits.

- [ ] **Step 1: Create the GitHub issue**

Run: `gh issue create -R FoundationStoneAlgorithms/TokenWork --title "Add CMA third-party validation to pitch deck" --body "Weave CMA Uganda 2026 publication citations into slides 02/03/09/13 and add an Independently Documented validation slide. Spec: docs/superpowers/specs/2026-11-28-cma-third-party-validation-design.md"`

On failure (known: `api.github.com` unreachable / invalid `GH_TOKEN`): ask the user to create the issue in the browser with that title/body and report the number. Do not guess N.

- [ ] **Step 2: Branch off origin/main**

```bash
git -C /home/zasourcecode/Projects/TokenWork checkout -b issue-<N>-cma-validation origin/main
```

Expected: the two untracked docs files carry over onto the new branch.

- [ ] **Step 3: Commit the design doc and plan**

```bash
git add docs/superpowers/specs/2026-11-28-cma-third-party-validation-design.md docs/superpowers/plans/2026-11-28-cma-third-party-validation.md
git commit -m "Add CMA validation design doc and plan (#<N>)"
```

- [ ] **Step 4: Push branch**

Run: `git push -u origin issue-<N>-cma-validation`
Expected: branch exists on origin.

### Task 2: Renumber slides 04–16 to 05–17

Mechanical foundation so the new slide can take position 04. No content changes.

**Files:**
- Rename (descending order to avoid collisions): `PitchDeck/components/slides/16-closing.tsx` → `17-closing.tsx`, `15-the-ask.tsx` → `16-the-ask.tsx`, `14-roadmap.tsx` → `15-roadmap.tsx`, `13-why-now.tsx` → `14-why-now.tsx`, `12-business-model.tsx` → `13-business-model.tsx`, `11-mvp.tsx` → `12-mvp.tsx`, `10-technology.tsx` → `11-technology.tsx`, `09-legal.tsx` → `10-legal.tsx`, `08-target-market.tsx` → `09-target-market.tsx`, `07-ai-agents.tsx` → `08-ai-agents.tsx`, `06-how-it-works.tsx` → `07-how-it-works.tsx`, `05-solution.tsx` → `06-solution.tsx`, `04-insight.tsx` → `05-insight.tsx`
- Modify: each renamed file's `SectionLabel index="NN"` prop (04→05, 05→06, 06→07, 07→08, 08→09, 09→10, 10→11, 11→12, 12→13, 13→14, 14→15, 15→16, 16→17); `17-closing.tsx` also has `ariaLabel` mentioning position — update if it names a number
- Modify: `PitchDeck/components/slides/index.tsx` — import paths, and `num:` fields in the `slides` array only (insight "05" … closing "17"); `slideIds` order and `id` values unchanged in this task

**Interfaces:**
- Produces: slide files numbered 05–17 with matching `SectionLabel index` values; registry `num` fields matching. Task 4 depends on these exact filenames.

- [ ] **Step 1: Rename files** with `git mv` in descending order as listed above.

- [ ] **Step 2: Update `SectionLabel index` props** in all 13 renamed files, one number up.

- [ ] **Step 3: Update `index.tsx`** import paths and `slides` `num` fields as listed.

- [ ] **Step 4: Verify sequence**

Run: `grep -rn 'SectionLabel index=' PitchDeck/components/slides/ | grep -o 'index="[0-9]*"' | sort`
Expected: `index="02"` through `index="17"`, each exactly once (no "01" — the cover has no SectionLabel).
Run: `grep -n 'num:' PitchDeck/components/slides/index.tsx`
Expected: sequential "01"–"17".

- [ ] **Step 5: Build check**

Run: `npm run lint && npm run typecheck && npm run build` (in `PitchDeck/`)
Expected: all pass.

- [ ] **Step 6: Commit**

```bash
git add -A PitchDeck/components/slides
git commit -m "Renumber pitch deck slides 04-16 to 05-17 ahead of validation slide (#<N>)"
```

### Task 3: Weave citations into slide 02 (Problem) and slide 03 (Opportunity)

**Files:**
- Modify: `PitchDeck/components/slides/02-problem.tsx` (barriers grid source line, after the existing GROW line at ~line 62)
- Modify: `PitchDeck/components/slides/03-opportunity.tsx` (gap attribution, near the paragraph at ~line 61)

**Interfaces:**
- Consumes: E1a, E1c from the Pinned Evidence section (exact strings, verbatim).
- Produces: no interface; visual content only.

- [ ] **Step 1: Add source line to 02-problem.tsx**

Under the existing GROW source line (`<p className="mt-3 font-mono text-[10px] tracking-wider text-smoke">`), add a sibling line in the same style:

`CMA Uganda (Jul 2026): "bank loans are often short-term, expensive, and require substantial collateral" — cmauganda.co.ug`

One aggregate line, not per-card lines: E1a supports the Collateral / High cost / Slow-cycles cards; the other cards stay unattributed rather than over-claimed.

- [ ] **Step 2: Add attribution to 03-opportunity.tsx**

Append to the paragraph introducing the stats, or as a matching mono source line under it:

`CMA Uganda (Jul 2026): capital markets are "another source of finance that remains largely untapped in Uganda"`

- [ ] **Step 3: Verify links resolve and quotes match**

Run: `curl -sL <E1 URL> | grep -io "short-term, expensive, and require substantial collateral"` and same for "largely untapped"
Expected: both phrases found.

- [ ] **Step 4: Build check + visual**

Run: `npm run lint && npm run typecheck && npm run build`
Run dev server; check slides 02 and 03 render without overflow at deck viewport; source lines match the deck's mono caption style.
Expected: passes; no layout break.

- [ ] **Step 5: Commit**

```bash
git add PitchDeck/components/slides/02-problem.tsx PitchDeck/components/slides/03-opportunity.tsx
git commit -m "Attribute problem and gap claims to CMA Uganda 2026 publications (#<N>)"
```

### Task 4: New slide 04 "Independently Documented" + registry insert

**Files:**
- Create: `PitchDeck/components/slides/04-validation.tsx`
- Modify: `PitchDeck/components/slides/index.tsx` (import, `slideIds`, `slides` array)

**Interfaces:**
- Consumes: E1a, E1b, E1c, E4, E3, E6 from Pinned Evidence; existing `Slide`, `SectionLabel`, `Reveal` primitives; `SlideMeta` type.
- Produces: default export `ValidationSlide`; registry entry `{ id: "validation", num: "04", title: "Independently Documented" }` in both arrays, immediately after `opportunity`.

- [ ] **Step 1: Create `04-validation.tsx`**

Default export `ValidationSlide`. Structure mirrors `05-insight.tsx` (SectionLabel + headline + three-column `editorial-card` grid + bottom mono line):

- `SectionLabel index="04" title="Independently Documented"`
- Headline (display style, accent span): "The gap is **on public record.**" with supporting paragraph: "Uganda's own regulator describes the problem this platform is built to solve — in its own publications, this year."
- Three cards:
  1. **"What the regulator says"** — quotes E1a and E1c verbatim; caption `CMA Uganda, Beyond Coffee and Gold — Jul 2026`.
  2. **"What the regulator is doing"** — copy: "The CMA (Offer of Securities) and (Licensing and Approval) Regulations 2025 are live, and 2026 public-exposure drafts — GSS Bond Guidelines, ESG Disclosure Guidelines, Civil Penalties Regulations — are open for public comment."; caption `CMA draft laws — public exposure 2026`.
  3. **"What others document"** — copy: "GROW (2025): 2.57M Ugandan enterprises, 25% with formal credit access. The same diagnosis crosses borders: a decade ago, the DG of Nigeria's SEC described African finance as bank-dominated and called for developed capital markets."; caption `GROW / MGLSD 2025 · A. Oteh, SEC Nigeria (2010), CMA research library`.
- Bottom mono line: `every claim on this deck traces to a linked public source`

Tone check: statements and quotes only, no adjectives like "revolutionary/amazing".

- [ ] **Step 2: Rewire `index.tsx`**

Add `import ValidationSlide from "./04-validation";`, insert `"validation"` into `slideIds` after `"opportunity"`, insert the `SlideMeta` entry (num `"04"`) after the opportunity row. Existing entries keep their Task 2 numbers.

- [ ] **Step 3: Verify sequence and registry**

Run: `grep -o 'index="[0-9]*"' <(grep -rn 'SectionLabel index=' PitchDeck/components/slides/) | sort` — expected 02–17, each once, plus the new `"04"` belonging to `04-validation.tsx` (total: 04 appears twice — validation and insight — insight is "05")
Run: `grep -c 'id:' PitchDeck/components/slides/index.tsx` — expected 17 entries; `slideIds` length 17.

- [ ] **Step 4: Build check + visual**

Run: `npm run lint && npm run typecheck && npm run build`
Dev server: navigate to slide 4 of 17; confirm it is the new slide, progress indicator reads 4/17, keyboard nav works, no overflow at deck viewport.
Expected: all pass.

- [ ] **Step 5: Grep attribution (Review Focus 1)**

Run: `grep -n "SEC Nigeria" PitchDeck/components/slides/04-validation.tsx`
Expected: match present (attribution says SEC Nigeria, not CMA).

- [ ] **Step 6: Commit**

```bash
git add PitchDeck/components/slides/04-validation.tsx PitchDeck/components/slides/index.tsx
git commit -m "Add Independently Documented validation slide (#<N>)"
```

### Task 5: Upgrades to (renamed) 10-legal.tsx and 14-why-now.tsx

**Files:**
- Modify: `PitchDeck/components/slides/10-legal.tsx` — append one item to the "Regulatory framework" list: `· 2026 public-exposure drafts open for comment (GSS bonds, ESG disclosure)`
- Modify: `PitchDeck/components/slides/14-why-now.tsx` — replace card 4 body ("GROW's 2026 grant call and CMA's export-revolution framing…") with: "CMA's own 2026 publications make SME capital access a national capital-markets priority, and its 2026 public-exposure drafts show the framework still expanding. First-mover infrastructure advantage is available to those who build it right."

**Interfaces:**
- Consumes: E3 from Pinned Evidence. Produces: no interface; visual content only.

- [ ] **Step 1: Apply both edits** as specified above.

- [ ] **Step 2: Verify link resolves**

Run: `curl -sL https://cmauganda.co.ug/draft-laws/ | grep -io "GSS Bond Guidelines"`
Expected: match.

- [ ] **Step 3: Build check + visual**

Run: `npm run lint && npm run typecheck && npm run build`
Dev server: check slides 10 and 14 render without overflow.
Expected: passes.

- [ ] **Step 4: Commit**

```bash
git add PitchDeck/components/slides/10-legal.tsx PitchDeck/components/slides/14-why-now.tsx
git commit -m "Cite CMA 2026 exposure drafts on legal and why-now slides (#<N>)"
```

### Task 6: Full QA and pull request

**Files:** none created; verification + PR only.

**Interfaces:**
- Consumes: all prior tasks on branch `issue-<N>-cma-validation`.

- [ ] **Step 1: Full build verification**

Run (in `PitchDeck/`): `npm run lint && npm run typecheck && npm run build`
Expected: all pass.

- [ ] **Step 2: Every added source URL resolves and contains its quote (Review Focus 2)**

Run `curl -sL` against each URL added on slides (E1, E2, E3 pages, E4 research-papers page, E6 GROW page) and grep for each quoted phrase from the Pinned Evidence section.
Expected: every URL returns HTTP 200 content containing its phrase.

- [ ] **Step 3: Visual pass over changed slides (Review Focus 5)**

Dev server; read slides 02, 03, 04, 10, 14 end to end: tone consistent with deck, no marketing language, source lines legible, slide 4 sits between Opportunity and Insight.
Expected: pass; fix anything that fails before the PR (fix = amend the owning task's commit style).

- [ ] **Step 4: Push and open PR**

Run: `git push` then `gh pr create -R FoundationStoneAlgorithms/TokenWork --title "Add CMA third-party validation to pitch deck" --body "Closes #<N>. Implements docs/superpowers/plans/2026-11-28-cma-third-party-validation.md: renumbered slides, CMA 2026 citations on slides 02/03/10/14, new Independently Documented slide (04)."`

On `gh` failure (known environment issue): give the user the push command and PR title/body to create in the browser.
