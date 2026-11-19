# TokenWork Roadmap

This roadmap distills the [Master PRD](PRD.md) into an issue-driven build plan. It is the companion to the GitHub issue tracker: every phase and milestone is delivered through pull requests on `issue-<N>-<slug>` branches that close the corresponding issue.

> **Kickoff:** dates are relative (Week 1–8) until a start date is agreed. Phase order is the build order. The 8-week Bridge programme is the first delivery milestone inside Phase 1 and does **not** imply production or regulatory readiness.

## How we work

- **Tracking:** Epic issue #3 links every phase, week and track. Phase/week issues are the unit of delivery.
- **Branches:** `issue-<N>-<slug>` → PR → closes issue. No direct pushes to `main`.
- **Evidence:** every PR lists commands run and real output, tx hashes or screenshots for each "Done when" item in the linked issue.
- **Boundaries:** simulated flows and Solana Devnet for MVP; rights before tokens; AI agents assist but do not exercise regulated/financial authority.

## Master phases (PRD `#13`)

| Phase | Name | Summary | PRD |
|---|---|---|---|
| 0 | Discovery and legal/market validation | SME/investor/partner interviews, Uganda legal analysis, viable first issuance structure, design partners, finalized MVP scope & acceptance criteria | `#13` |
| 1 | Foundation and equity MVP | Core equity workflow + 3 bounded AI assistants (onboarding, financial analysis, due-diligence prep). 8-week Bridge milestone inside this phase. | `#13`, `#14`, `#19` |
| 2 | Controlled pilot readiness | Legal docs & ops, licensed partners, production KYC/AML, payments/settlement/reconciliation, custody/wallet model, security reviews, pilot only after approvals | `#13` |
| 3 | Instrument expansion | Debt, revenue-sharing, asset-backed modules; instrument-specific servicing/risk; unified capital structure & conflict detection | `#13`, `#5` |
| 4 | Institutional and ecosystem expansion | Partner dashboard & APIs, SDKs/webhooks, white-label, dedicated environments, additional rails/jurisdictions, open standards | `#13`, `#6.14` |
| 5 | Capital markets expansion | Controlled secondary transfers, authorized venues/brokers, cross-market interoperability, additional chain adapters | `#13`, `#6.11`, `#8.5` |

## 8-week Bridge programme (PRD `#14`, inside Phase 1)

Target: a working MVP demonstrating an end-to-end **simulated** SME equity capital formation workflow (test data, Solana Devnet). Explicit boundaries: no production readiness/regulatory approval, no real-money settlement, no live custody, no legally effective issuance unless structure+approvals established, no secondary market/liquidity, no full debt/revenue-sharing/asset-backed production issuance.

| Week | Focus | Demonstrable output |
|---|---|---|
| 1 | Product definition, user journeys, architecture, legal assumptions, repo & CI | Approved MVP scope and architecture |
| 2 | Rust workspace, API, PostgreSQL, authentication and core domain | Running backend and business onboarding |
| 3 | Business profile, financial disclosure and offering preparation | Business can create a draft equity offering |
| 4 | Investor profile, simulated eligibility and subscription flow | Investor can review and subscribe in simulation |
| 5 | Solana/Anchor integration | Devnet token representation and transaction record |
| 6 | Ownership, portfolio, basic reporting and corporate action | Connected business and investor experiences |
| 7 | Integration, tests, security review and reconciliation | End-to-end tested MVP |
| 8 | Demo, documentation, user feedback and roadmap | Demonstrable product and next-phase plan |

**AI agent delivery within the programme (PRD `#6.15`, `#14`):** Week 1 define use cases/prohibited actions/evidence/evals; Weeks 2–3 agent gateway, tool permissions, Business Onboarding Agent; Weeks 3–4 document ingestion & Financial Analysis Agent (controlled formats); Weeks 5–6 Due Diligence Assistant, reviewer queue, evidence-linked output; Week 7 prompt-injection/tenant-isolation/hallucination-abstention/authorization/audit tests; Week 8 demonstrate the three agents and document known limitations.

**MVP agents (bounded, demonstrable):** (1) Business Onboarding Agent, (2) Financial Analysis Agent, (3) Due Diligence Assistant — drafts/review aids only, AI-generated labels, source references, human correction route. Remaining agents are architecture/roadmap, not MVP promises.

## MVP acceptance (PRD `#19`, 21 criteria)

The MVP is demonstrable when criteria 1–21 in PRD `#19` are met, including: end-to-end simulated equity workflow (register → verify → offer → approve → eligibility → subscribe → allocate → Devnet token → reconcile → dashboards → report/corporate action), material actions auditable, tests for core state transitions and authorization, and agent safety/permission/audit criteria (16–21). Tracked in the dedicated acceptance issue.

## Cross-cutting tracks

- **AI agent infrastructure** (PRD `#6.15`, `#8.7`, `#9.4`): full 10-agent catalogue, orchestration/gateway, typed tool registry with server-side authZ, model gateway, document intelligence, permission-filtered retrieval, evaluation & observability; deterministic code for calculations/rules/permissions/state transitions.
- **Security, privacy & operations** (PRD `#9`, `#16`): authN/authZ/ABAC, key & secret management, off-chain sensitive data, audit events, observability, reconciliation, backup/restore, incident response.
- **Legal, regulatory & governance** (PRD `#10`, `#18`): Uganda-first operating model, instrument/role classification, authoritative registers & rights mapping, tracked decisions with owners/evidence/deadlines, investor protection.

## Key references

- [docs/PRD.md](PRD.md) — master product requirements (strategic baseline)
- PRD `#18` — assumptions and open validation items (tracked decisions, not settled facts)
- PRD `#17` — risks and mitigations

## Notes

- Solana is the initial chain; additional adapters only when justified (PRD `#8.5`).
- Never report token mint volume as capital raised or economic impact (PRD `#15`).
- Technology choices are proposed defaults to be validated (PRD `#8.2`).
