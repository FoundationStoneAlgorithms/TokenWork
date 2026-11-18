# TokenWork --- Master Product Requirements Document (PRD)

**Document status:** Strategic product baseline --- draft for
validation\
**Product name:** TokenWork\
**Positioning:** Global business capital markets infrastructure, built
in Uganda with African roots\
**Initial market:** Uganda\
**Initial commercial product:** Equity capital formation for SMEs\
**Initial blockchain execution environment:** Solana Devnet for MVP;
Solana-first production strategy, designed for multi-chain expansion\
**Primary backend language:** Rust

------------------------------------------------------------------------

## 1. Executive summary

TokenWork is a business capital markets infrastructure platform that
enables businesses to digitize their capital structures, raise
investment and manage investors throughout the lifecycle of financial
instruments.

The platform is designed to address a structural financing gap affecting
small and medium-sized businesses, particularly in markets where access
to bank financing can be constrained by collateral requirements, limited
financial histories, lengthy processes, opaque decision-making and
informal gatekeeping. TokenWork aims to widen access to capital through
transparent, legally structured investment opportunities and technology
that connects businesses with a broader network of investors and
institutional partners.

TokenWork is not merely a token-minting service or a listing
marketplace. It is an integrated infrastructure layer combining:

-   Business identity, onboarding and verification.
-   Digital capital structures and instrument issuance.
-   Legal rights, disclosures and compliance workflows.
-   Investor identity, eligibility and portfolio management.
-   Capital formation and offering distribution.
-   Financial rails, settlement and reconciliation.
-   Ownership records, servicing and corporate actions.
-   Controlled transfers and future secondary-market infrastructure.
-   APIs, SDKs, partner integrations and white-label deployments.
-   An AI agent infrastructure layer that assists businesses, investors and authorized partners across onboarding, financial analysis, due diligence, offering preparation and ongoing servicing.

Equity is the first commercial instrument. The platform must be
architected from the beginning to support four instrument families:

1.  Business equity.
2.  Business debt.
3.  Revenue-sharing.
4.  Asset-backed investments.

Each instrument must have its own legal terms, economic rights, risk
model, eligibility rules, disclosure requirements, lifecycle events and
transfer restrictions. A token is a technical representation; token
issuance alone does not create enforceable ownership, debt, revenue or
property rights. Legal structuring and authoritative records must be
established and maintained in the relevant jurisdiction.

The initial market is Uganda, with a phased expansion path through East
Africa, pan-African markets and eventually global markets. The platform
will be designed for multiple jurisdictions from day one, while
activating countries only after legal, regulatory, operational and
partner readiness.

AI agents are a first-class product capability, not a standalone chatbot. They will coordinate approved workflows and assist users across the capital lifecycle while remaining constrained by permissions, deterministic policy checks, human approvals and auditable actions.

Rust is the primary backend language and a central architectural choice.
The backend will use Rust, Tokio and Axum for secure, efficient services
and transaction workflows. Solana and Anchor will support the initial
blockchain implementation. The web application will use TypeScript and
Next.js. PostgreSQL will be the authoritative application database for
business, investor, offering and operational records.

------------------------------------------------------------------------

## 2. Product vision and mission

### 2.1 Vision

Make business capital markets more accessible, transparent, programmable
and globally connected.

### 2.2 Mission

Build trusted financial infrastructure that allows businesses to access
a wider range of capital providers and enables investors and
institutions to participate in legally structured business financing
opportunities.

### 2.3 Long-term ambition

TokenWork will progressively become:

1.  A leading business capital formation platform in Africa.
2.  A marketplace connecting businesses and investors across eligible
    jurisdictions.
3.  Global financial infrastructure that banks, fintechs, investment
    firms and independent platforms can use directly or integrate into
    their own products.

### 2.4 Core product principles

-   **Rights before tokens:** Establish the legal instrument and
    enforceable rights before representing it on-chain.
-   **Compliance by design:** Eligibility, disclosures, jurisdiction
    restrictions and regulated-role boundaries are part of the product
    architecture.
-   **Trust through evidence:** Distinguish self-reported,
    professionally reviewed, independently audited and platform-verified
    information.
-   **Privacy by design:** Keep personal, confidential and sensitive
    commercial information off public blockchains.
-   **Business usefulness:** Solve capital formation and investor
    management problems, not merely token issuance.
-   **Investor clarity:** Explain rights, risks, fees, restrictions and
    liquidity limitations in understandable language.
-   **Open but governed:** Provide APIs and interoperability while
    ensuring regulated activities are performed only by authorized
    parties.
-   **Progressive delivery:** Build an extensible foundation, launch a
    focused commercial product and activate additional capabilities in
    phases.
-   **AI with accountable authority:** Agents may explain, extract, analyse, draft and coordinate; they may not independently exercise regulated authority, approve investments, certify valuations or move client funds.
-   **Human-governed automation:** High-impact decisions require deterministic controls, authorized human approval and a complete audit trail.
-   **Multi-jurisdiction readiness:** Separate common platform
    capabilities from jurisdiction-specific legal and operational rules.
-   **No artificial liquidity:** Never imply that tokenization
    guarantees a buyer, a market price, redemption or an exit.

------------------------------------------------------------------------

## 3. Problem statement and opportunity

### 3.1 Business financing problem

Many viable SMEs face difficulty accessing suitable financing. Common
barriers can include:

-   Collateral and guarantee requirements.
-   Limited formal financial records or credit histories.
-   High costs and delays associated with loan applications.
-   Financing products that do not match a business's cash-flow profile.
-   Limited access to investors beyond personal and local networks.
-   Opaque decision-making and reliance on relationships.
-   Informal payments or improper influence in some financing processes.
-   Limited infrastructure for investor reporting, ownership management
    and repeat capital formation.

These issues vary by institution and market. TokenWork must not assume
that all lenders or officers behave improperly. The product opportunity
is to make business information, investment terms, processes and records
more transparent and auditable, while offering additional financing
pathways.

### 3.2 Investor problem

Potential investors may face:

-   Difficulty discovering credible SMEs and investment opportunities.
-   Inconsistent business information and financial disclosures.
-   High due-diligence costs.
-   Limited visibility into ownership, liabilities and use of proceeds.
-   Difficulties tracking investments, distributions and corporate
    actions.
-   Unclear transfer restrictions and exit expectations.

### 3.3 Institutional and ecosystem problem

Banks, investment firms, professional service providers and fintechs may
lack modular infrastructure to originate, structure, distribute and
administer digital business investments. TokenWork can provide common
technology and workflows while leaving regulated decisions and
activities with appropriately authorized parties.

### 3.4 Opportunity

TokenWork will connect verified business information, structured
instruments, investor participation, financial rails and lifecycle
servicing in a single platform. The goal is not to eliminate banks or
financial institutions, but to create more pathways for capital
formation and enable institutions to participate through integrations
and partnerships.

------------------------------------------------------------------------

## 4. Target users and stakeholders

### 4.1 Business issuers

-   Established SMEs seeking growth capital.
-   Startups seeking eligible equity investment.
-   Asset-owning businesses seeking financing secured by eligible
    assets.
-   Larger businesses and institutional asset owners in later phases.

Initial priority: established SMEs with operating histories, credible
management, identifiable financing needs and sufficiently verifiable
records.

### 4.2 Investors

-   Retail investors, where legally permitted.
-   Sophisticated or professional investors.
-   High-net-worth investors.
-   Institutional investors.
-   Existing business shareholders and investor communities.

Investor categories, investment limits and eligibility must use the
definitions and tests required by the applicable law. Users cannot
simply self-select a regulated investor classification.

### 4.3 Institutional and professional partners

-   Banks and payment service providers.
-   Licensed investment firms, brokers and placement agents.
-   Custodians and eligible wallet/custody providers.
-   Law firms and company secretarial professionals.
-   Accounting firms, auditors and tax advisers.
-   Valuation firms and technical assessors.
-   Identity, KYC and AML service providers.
-   Insurance and asset-protection providers.
-   Developers, marketplaces and fintech platforms.

Partner access must be role-based. A referral partner does not
automatically receive authority to approve an offering, hold client
assets, provide investment advice or perform another regulated activity.

### 4.4 Internal platform roles

-   Platform administrator.
-   Business onboarding reviewer.
-   Compliance reviewer.
-   Offering reviewer.
-   Partner manager.
-   Customer support agent.
-   Finance and reconciliation operator.
-   Security and audit administrator.

High-risk actions must use separation of duties and dual approval where
appropriate.

------------------------------------------------------------------------

## 5. Product scope and instrument strategy

### 5.1 Four supported instrument families

  -----------------------------------------------------------------------
  Instrument              Economic purpose        Key rights and controls
  ----------------------- ----------------------- -----------------------
  Equity                  Represent eligible      Share class, voting,
                          ownership interests in  dividends, dilution,
                          a business or issuing   pre-emption, transfer
                          vehicle                 rules, corporate
                                                  actions

  Business debt           Finance a business      Principal, interest or
                          through a contractual   other permitted return,
                          repayment obligation    maturity, covenants,
                                                  security, default and
                                                  recovery

  Revenue-sharing         Provide capital in      Revenue definition,
                          exchange for a defined  calculation basis,
                          share of revenue or     reporting, cap or term,
                          receipts                payment frequency,
                                                  audit rights

  Asset-backed investment Finance or invest in    Asset identity, title,
                          eligible assets or      valuation, lien
                          asset pools             priority, custody,
                                                  insurance, collateral
                                                  monitoring and recovery
  -----------------------------------------------------------------------

The instrument engine must use explicit instrument types and versioned
terms. These instruments are not interchangeable. Each offering requires
its own legal review, risk disclosures, investor eligibility and
servicing rules.

### 5.2 Equity first, architecture for all

The first commercial release focuses on equity capital formation. The
data model, authorization system, lifecycle engine and instrument
interfaces must not assume equity is the only instrument.

### 5.3 Unified digital capital structure

Each business should have a unified digital capital structure that
records or references:

-   Share capital and ownership classes.
-   Existing and proposed equity issuances.
-   Debt obligations.
-   Revenue-sharing commitments.
-   Asset-backed interests and encumbrances.
-   Security interests and collateral links.
-   Investor rights and restrictions.
-   Corporate actions and material changes.

The platform must detect or flag potential conflicts such as duplicate
collateralization, conflicting ownership records, undisclosed
liabilities, covenant breaches and incompatible issuance terms. Legal
registers and authoritative off-chain records must be reconciled with
on-chain representations.

### 5.4 Whole-business and asset-level interests

TokenWork must support: - Digitized representations of eligible
ownership interests in an entire business. - Specific instruments issued
by a business. - Eligible asset-level interests, including assets held
directly or through an appropriately structured vehicle where required.

Asset tokenization must not imply that a token holder owns legal title
to an underlying asset unless the legal structure expressly creates that
right.

------------------------------------------------------------------------

## 6. Product experiences and functional requirements

Priority definitions:

-   **P0:** Required for the first commercial equity product or
    essential platform foundation.
-   **P1:** Important subsequent capability.
-   **P2:** Longer-term ecosystem or advanced capability.

### 6.1 Business identity and onboarding

**Purpose:** Establish a verified business identity and create a
controlled path toward offering eligibility.

Requirements:

-   P0: Create a business account and profile.
-   P0: Capture legal name, registration details, jurisdiction, legal
    form, business address, directors, beneficial owners and authorized
    representatives.
-   P0: Support document uploads and verification status.
-   P0: Capture business sector, operating history, products, customers,
    locations and financing purpose.
-   P0: Record beneficial ownership and control persons.
-   P0: Record verification source, reviewer, timestamp, outcome and
    expiry/review date.
-   P0: Separate basic profile creation from permission to issue or
    fundraise.
-   P0: Support risk-based and instrument-specific due diligence.
-   P1: Integrate company registries and authorized identity providers
    where available.
-   P1: Support professional partner verification workflows.
-   P1: Monitor material changes in directors, ownership, legal status
    and business information.

A business profile must never be interpreted as approval to make an
offering.

### 6.2 Business financial information and reporting

Requirements:

-   P0: Upload financial statements, management accounts and supporting
    documents.
-   P0: Record reporting period, currency, accounting basis and
    preparer.
-   P0: Mark each report as business-reported, accountant-reviewed or
    independently audited.
-   P0: Preserve original documents and version history.
-   P0: Allow corrections with a visible audit trail rather than
    silently overwriting prior disclosures.
-   P1: Integrate accounting systems and authorized banking/payment
    data.
-   P1: Generate standardized business reporting packs.
-   P1: Support investor-specific reporting permissions.
-   P2: Provide benchmarking and advanced analytics where lawful and
    sufficiently evidenced.

### 6.3 Valuation and business readiness

Requirements:

-   P0: Allow businesses to submit a proposed valuation and methodology.
-   P0: Record assumptions, date, source data, methodology and
    independence status.
-   P0: Clearly distinguish issuer-proposed valuation from independent
    valuation.
-   P0: Require additional independent assessment where law, transaction
    size, risk or platform policy requires it.
-   P0: Use instrument-aware assessment: equity valuation is different
    from creditworthiness, revenue projections or asset valuation.
-   P1: Connect qualified valuation professionals.
-   P1: Track valuation history and material changes.

TokenWork must not present an automated estimate as a certified
valuation or investment recommendation.

### 6.4 Offering creation and issuance workflow

Requirements:

-   P0: Create an offering linked to a verified business and a defined
    instrument.
-   P0: Capture amount sought, currency, use of proceeds,
    minimum/maximum raise, price or pricing method, dates, investor
    eligibility and material terms.
-   P0: Attach legal documents, disclosures, financial information and
    risk factors.
-   P0: Apply jurisdiction and instrument-specific checklists.
-   P0: Support self-service preparation for straightforward offerings
    and managed/professional workflows for complex offerings.
-   P0: Maintain statuses such as draft, submitted, under review,
    changes requested, approved for publication, open, paused, closed,
    completed, cancelled and rejected.
-   P0: Record every approval, rejection, condition and material change.
-   P0: Prevent publication or investment acceptance until required
    approvals and controls are complete.
-   P1: Support repeat offerings and multiple instruments under one
    business.
-   P1: Support restructuring, refinancing and amendments with
    appropriate investor consent and legal controls.

### 6.5 Investor identity, onboarding and eligibility

Requirements:

-   P0: Create an investor profile with identity, residence,
    jurisdiction and contact information.
-   P0: Integrate or support KYC/AML verification through authorized
    providers.
-   P0: Determine eligibility by investor type, jurisdiction, instrument
    and offering.
-   P0: Record source, result, reviewer, date, expiry and restrictions.
-   P0: Support sanctions/PEP and other required screening through
    appropriate providers.
-   P0: Keep sensitive KYC data off public blockchains.
-   P0: Prevent ineligible investors from subscribing or receiving
    restricted instruments.
-   P1: Support institutional investor accounts, mandates and authorized
    representatives.
-   P1: Support investor suitability or appropriateness processes where
    required.
-   P1: Support periodic refresh and ongoing monitoring.

### 6.6 Investment participation and allocation

Requirements:

-   P0: Show approved offering details, terms, risks, fees, restrictions
    and documents.
-   P0: Capture investor acknowledgement of disclosures and risk
    statements.
-   P0: Allow a simulated investment flow for MVP.
-   P0: For production, route subscription and payment through
    authorized providers and approved settlement arrangements.
-   P0: Record subscription request, amount, currency, timestamps and
    status.
-   P0: Apply offering limits, minimums, maximums, allocation rules and
    eligibility checks.
-   P0: Handle oversubscription, failed payments, refunds and
    cancellations according to the offering terms and law.
-   P1: Support allocation approvals and partial fills where applicable.
-   P1: Support partner-originated subscriptions with attribution and
    permission controls.

### 6.7 Tokenization and ownership records

Requirements:

-   P0: Map the legal instrument and rights to a versioned digital
    representation.
-   P0: Create token issuance only after required legal and operational
    approvals.
-   P0: Maintain a mapping between token mint/account, offering,
    instrument, investor and authoritative ownership record.
-   P0: Apply transfer restrictions and allowlists where required.
-   P0: Record mint, allocation, transfer, burn, freeze or other
    lifecycle events where supported.
-   P0: Reconcile on-chain events with the application database and
    legal register.
-   P0: Support exception handling for chain outages, failed
    transactions and reconciliation mismatches.
-   P0: Never treat a successful mint as proof that all legal issuance
    conditions have been satisfied.
-   P1: Add chain adapters and additional supported networks.
-   P1: Support institutional custody and approved external wallet
    workflows.

### 6.8 Investor portfolio and business dashboards

Business dashboard: - P0: Business profile and verification status. -
P0: Capital structure overview. - P0: Offering preparation and status. -
P0: Investor register and allocations. - P0: Financial disclosure and
reporting. - P0: Corporate action and announcement workflows. - P1:
Debt, revenue-sharing and asset-backed obligation dashboards. - P1:
Cash-flow, covenant and performance monitoring.

Investor dashboard: - P0: Identity and eligibility status. - P0:
Holdings and offering history. - P0: Investment documents and
disclosures. - P0: Portfolio value only where a defensible valuation
methodology exists. - P0: Distributions and payment history. - P0:
Voting and corporate action notices. - P0: Transfer restrictions and
instrument terms. - P1: Consolidated portfolio across supported
businesses and instrument families.

### 6.9 Investment lifecycle and servicing

Requirements:

-   P0: Maintain instrument-specific lifecycle events and contractual
    schedules.
-   P0: Provide investor notices, statements and reporting.
-   P0: Support equity dividends and corporate actions when declared and
    legally approved.
-   P1: Support debt interest, repayment, maturity, covenant monitoring
    and default workflows.
-   P1: Support revenue calculations, reporting, caps/terms and
    scheduled revenue-share payments.
-   P1: Support asset valuation refresh, insurance, collateral status
    and recovery workflows.
-   P1: Automate calculations, reminders and payment instructions only
    with validation, authorization, reconciliation and exception
    handling.
-   P1: Record voting, resolutions, proxy/delegation and quorum
    workflows subject to applicable law and governing documents.

The platform may coordinate and automate processes, but must not
independently make legally reserved decisions or move client funds
without appropriate authorization.

### 6.10 Marketplace and discovery

Requirements:

-   P0: Publish approved public business profiles and approved
    offerings.
-   P0: Separate public information from registered-user and
    eligible-investor information.
-   P0: Provide search and filtering by sector, instrument, geography,
    offering status and other approved attributes.
-   P1: Personalized discovery based on user-selected preferences and
    permitted data.
-   P1: Curated opportunities and professional introductions.
-   P1: Partner distribution tools and referral attribution.
-   P2: Interoperable marketplace listings and third-party discovery
    applications.

Discovery must not be represented as regulated investment advice unless
provided by an appropriately authorized party.

### 6.11 Transfers, liquidity and secondary markets

Requirements:

-   P0: Clearly disclose whether an instrument is transferable and under
    what conditions.
-   P0: Enforce legal, contractual, jurisdictional and investor
    eligibility restrictions.
-   P1: Support controlled negotiated transfers and issuer-approved
    transfers.
-   P1: Support contractual redemptions or buybacks where permitted and
    funded.
-   P2: Integrate authorized secondary venues, brokers or liquidity
    providers.
-   P2: Support broader interoperable marketplaces where legally
    permitted.

No instrument is guaranteed to be liquid. Token transferability does not
create a market, buyer or guaranteed exit. Buybacks and redemptions must
only be represented as available where legally binding terms and funding
arrangements support them.

### 6.12 Payments, financial rails and settlement

Requirements:

-   P0: Define a payment abstraction independent of the tokenization
    engine.
-   P0: Support sandbox/test payment flows in MVP.
-   P1: Integrate approved bank transfer and mobile money providers in
    Uganda.
-   P1: Support permitted local and cross-border payment partners.
-   P1: Support UGX and USD initially, with additional currencies as
    markets require.
-   P1: Support reconciliation, payment status, refunds, fees and
    settlement records.
-   P1: Support stablecoin rails only where legally permitted and
    operationally appropriate.
-   P1: Separate payment initiation, custody, settlement and blockchain
    transaction responsibilities.
-   P1: Provide clear records for FX rates, fees, timestamps and
    counterparties.

### 6.13 Custody and wallet experience

Requirements:

-   P0: Abstract wallet and chain complexity from ordinary users.
-   P0: Support a development/test wallet experience.
-   P1: Evaluate embedded wallets, external wallets and institutional
    custody.
-   P1: Clearly disclose whether a wallet is self-custodial,
    platform-controlled or provided by a third party.
-   P1: Use appropriate key management, recovery and transaction
    authorization controls.
-   P1: Do not take custody or control of client assets unless the
    operating entity and arrangements are properly authorized.

### 6.14 Partner and institutional infrastructure

Requirements:

-   P1: Partner onboarding, organization identity and role-based access.
-   P1: Partner dashboard for assigned business and investor workflows.
-   P1: API credentials, scopes, rate limits and audit logs.
-   P1: Webhooks for verification, offering status, subscriptions,
    allocations and lifecycle events.
-   P1: Sandbox and developer documentation.
-   P1: White-label configuration for branding, user journeys and
    permitted product features.
-   P1: Shared multi-tenant deployment for most partners.
-   P2: Dedicated/isolated environments for institutions requiring
    stronger isolation or customization.
-   P2: Open SDKs, data standards and interoperability interfaces.

Partners must only access data and perform actions within their mandate
and authorization.

### 6.15 AI agent infrastructure and assisted workflows

AI agents are a first-class capability embedded across TokenWork's business, investor and institutional experiences. They are workflow assistants operating through permissioned platform tools and APIs; they are not autonomous financial authorities.

#### Agent catalogue

- **Business Onboarding Agent:** guides a business through profile creation, explains required information, organizes submitted documents and identifies missing items.
- **Financial Analysis Agent:** extracts figures from uploaded statements, normalizes periods and currencies where possible, calculates transparent ratios and drafts a structured analysis with source references and uncertainty flags.
- **Valuation Assistant:** assembles relevant inputs, documents assumptions and supports valuation workflows. It does not certify or independently publish a valuation.
- **Due Diligence Agent:** checks document completeness, cross-checks supplied facts, identifies inconsistencies and prepares an evidence-linked review pack for an authorized reviewer.
- **Offering Creation Agent:** helps prepare draft equity, debt, revenue-sharing and asset-backed offering terms using approved templates and instrument-specific checklists.
- **Compliance Agent:** maps a workflow to configured jurisdiction and instrument requirements, flags missing controls and routes exceptions to qualified personnel. It does not provide a legal determination.
- **Investor Agent:** explains offering information, risks, rights and process steps in plain language and supports discovery within the investor's permitted access level.
- **Portfolio Agent:** summarizes holdings, key dates, notices, distributions and reported performance using authoritative platform records.
- **Capital Management Agent:** helps businesses monitor funding obligations, repayment schedules, covenant information and investor communications.
- **Institutional Partner Agent:** assists authorized partners with assigned case queues, evidence packs, reporting and integration support within their access scopes.

#### MVP agent scope

The eight-week programme will implement three narrow, demonstrable agents:

1. Business Onboarding Agent.
2. Financial Analysis Agent.
3. Due Diligence Assistant.

The MVP agents will use test data and uploaded sample documents. Their outputs are drafts or review aids, clearly labelled as AI-generated, with source references, confidence/uncertainty indicators where feasible, and a route for human correction. The other agents remain in the product architecture and phased roadmap; they are not promised as complete MVP features.

#### Functional requirements

- P1: Provide an agent orchestration service that selects approved agent workflows and tools based on the authenticated user's role, tenant and permissions.
- P1: Expose only allow-listed, schema-validated tools; agents must not receive unrestricted database, shell, wallet or chain access.
- P1: Maintain a model-provider abstraction so model vendors and self-hosted open models can be changed without rewriting domain workflows.
- P1: Store agent task state, inputs, outputs, tool calls, model/provider metadata and approvals as auditable records, subject to privacy and retention rules.
- P1: Link extracted financial facts and due-diligence findings to source documents and page/section references whenever technically possible.
- P1: Require explicit user confirmation before submitting generated content as an official business disclosure or investor communication.
- P1: Provide human review queues for exceptions, uncertain extraction, conflicts and high-impact recommendations.
- P1: Separate tenant data and enforce authorization at the tool/API layer, not only through model instructions.
- P2: Support configurable model routing, cost limits, rate limits, evaluation datasets and fallback providers.
- P2: Support multilingual explanations and document processing as quality and legal review permit.
- P2: Allow institution-specific agent policies and private deployments without weakening platform-wide safety controls.

#### Agent output and evidence standards

Every material agent output should include: task purpose; timestamp; agent/workflow version; model/provider identifier where appropriate; sources used; extracted facts versus inferred analysis; assumptions; unresolved questions; confidence or uncertainty notes where supportable; and reviewer/approval status. Agents must not invent missing financial values, legal requirements, verification outcomes or source citations. When source quality is poor, the agent must state that limitation and request review rather than silently filling gaps.

------------------------------------------------------------------------

## 7. User journeys

### 7.1 Business-to-equity-raise journey

1.  Business creates an account.
2.  Business creates its legal and operational profile.
3.  Business submits identity, ownership and company documents.
4.  Platform or authorized provider performs verification.
5.  Business completes financial and governance disclosures.
6.  Business submits proposed valuation and financing purpose.
7.  Business creates an equity offering with terms and draft documents.
8.  Professional/legal and compliance reviews occur as required.
9.  Offering is approved for publication by the authorized party.
10. Eligible investors review disclosures and subscribe.
11. Payment and allocation are processed through authorized
    arrangements.
12. Equity representation is issued and reconciled with the
    authoritative register.
13. Business manages reporting, investor communications and corporate
    actions.

### 7.2 Investor journey

1.  Investor creates an account.
2.  Investor completes identity and jurisdiction information.
3.  Required KYC/AML and eligibility checks are completed.
4.  Investor discovers an approved offering.
5.  Investor reviews terms, risks and disclosures.
6.  Investor acknowledges required disclosures.
7.  Investor submits a subscription.
8.  Payment and allocation are completed through approved processes.
9.  Investor sees the holding and documents in their portfolio.
10. Investor receives reports, notices, distributions and corporate
    action requests.

### 7.3 Institutional partner journey

1.  Institution applies and is reviewed.
2.  Platform verifies legal identity, permissions and authorized users.
3.  Partner receives scoped access and API credentials.
4.  Partner integrates sandbox APIs and webhooks.
5.  Partner onboards or refers businesses/investors within its permitted
    role.
6.  Partner monitors assigned workflows and reports.
7.  Platform records partner activity and access for audit.

------------------------------------------------------------------------

## 8. Technical architecture

### 8.1 Architecture principles

-   Rust is the primary backend language for core services.
-   Use a modular monolith initially where it reduces operational
    complexity; split services when scale, security boundaries or team
    ownership justify it.
-   Keep legal/business domain logic independent from chain-specific
    implementation.
-   Treat PostgreSQL as the authoritative operational data store, with
    blockchain as a verifiable execution and record layer for selected
    events.
-   Use explicit state machines for offerings, subscriptions,
    allocations and instrument lifecycles.
-   Use idempotency keys and transactional outbox patterns for financial
    and chain workflows.
-   Keep PII, KYC records, private financial information and
    confidential legal documents off public chains.
-   Build observability, auditability, security and reconciliation into
    the foundation.
-   Separate platform roles from regulated legal roles.

### 8.2 Proposed technology stack

  -----------------------------------------------------------------------
  Layer                   Preferred technology    Purpose
  ----------------------- ----------------------- -----------------------
  Primary backend         Rust                    Core domain services
                                                  and transaction
                                                  workflows

  HTTP/API framework      Axum                    REST and service
                                                  endpoints

  Async runtime           Tokio                   Asynchronous execution

  Serialization/schema    Serde, JSON             Typed request/response
                          Schema/OpenAPI tooling  contracts

  Database access         SQLx                    Async PostgreSQL access
                                                  and compile-time query
                                                  checking

  Database                PostgreSQL              Authoritative business
                                                  and operational records

  Cache/rate limiting     Redis                   Caching, ephemeral
                                                  state and rate limiting
                                                  where needed

  Messaging               NATS or a managed       Events and asynchronous
                          equivalent              workflows when
                                                  justified

  Blockchain              Solana                  Initial chain execution

  Smart contracts         Anchor / Rust           Solana programs and
                                                  token-related controls

  Token standard          Appropriate Solana      Token representation,
                          token                   subject to legal and
                          program/extensions      technical review

  Web frontend            TypeScript, Next.js,    Business, investor and
                          React                   partner applications

  Mobile                  React Native, later     Android and iOS
                          phase                   applications

  API style               REST first; WebSockets  External and internal
                          for live status;        interfaces
                          GraphQL only if         
                          justified               

  Identity                OIDC/OAuth              Authentication and
                          2.0-compatible provider federation

  Secrets and keys        Cloud KMS/HSM or        Secret and key
                          qualified custody       protection
                          provider                

  Containers              Docker                  Reproducible builds and
                                                  deployment

  Orchestration           Managed Kubernetes or   Production deployment
                          simpler managed         when warranted
                          container platform      
                          initially               

  Cloud                   AWS or equivalent       Compute, storage,
                                                  networking and managed
                                                  services

  Observability           OpenTelemetry,          Metrics, traces, logs
                          Prometheus, Grafana,    and alerting
                          centralized logs        

  CI/CD                   GitHub Actions          Build, test, scan and
                                                  deploy pipelines

  Infrastructure as code  Terraform or equivalent Repeatable environments
  -----------------------------------------------------------------------

Technology choices are proposed defaults and should be validated against
team capability, cost, security requirements and programme constraints.
Do not add Kubernetes, NATS or GraphQL to the MVP unless they solve a
demonstrated need.

### 8.3 Rust application design

Rust should be the principal backend language, not only the
smart-contract language.

Suggested workspace:

-   `tokenwork-api`: Axum HTTP API, authentication middleware and
    request validation.
-   `tokenwork-domain`: Core domain types, invariants, policies and
    state machines.
-   `tokenwork-business`: Business identity, ownership, onboarding and
    verification workflows.
-   `tokenwork-instruments`: Common instrument interfaces and
    instrument-specific terms.
-   `tokenwork-offerings`: Offering preparation, review, publication and
    closure.
-   `tokenwork-investors`: Investor profiles, eligibility and portfolio
    records.
-   `tokenwork-compliance`: Rules orchestration, screening integrations,
    approvals and audit events.
-   `tokenwork-ledger`: Internal double-entry or event-based financial
    records as appropriate; never rely solely on token balances for
    accounting.
-   `tokenwork-payments`: Payment provider abstractions, settlement and
    reconciliation.
-   `tokenwork-chain`: Chain-independent interfaces and transaction
    orchestration.
-   `tokenwork-solana`: Solana RPC integration, Anchor clients,
    transaction construction and confirmation.
-   `tokenwork-notifications`: Email, SMS and in-app notification
    adapters.
-   `tokenwork-partners`: Partner access, API keys, scopes, webhooks and
    tenant controls.
-   `tokenwork-audit`: Immutable-style append-only audit events and
    evidence references.
-   `tokenwork-jobs`: Background tasks, retries and scheduled lifecycle
    processing.

The initial implementation may keep these as modules in one deployable
Rust application. Boundaries should be explicit so high-risk or
high-load components can later be extracted.

### 8.4 Domain model (initial)

Core entities:

-   `Organization`
-   `BusinessProfile`
-   `LegalEntity`
-   `Person`
-   `BeneficialOwner`
-   `BusinessVerification`
-   `FinancialReport`
-   `Valuation`
-   `Instrument`
-   `InstrumentTermsVersion`
-   `CapitalStructure`
-   `OwnershipClass`
-   `Offering`
-   `OfferingDocument`
-   `OfferingApproval`
-   `InvestorProfile`
-   `InvestorVerification`
-   `EligibilityDecision`
-   `Subscription`
-   `Allocation`
-   `PaymentInstruction`
-   `Payment`
-   `Settlement`
-   `Holding`
-   `TokenizationRecord`
-   `ChainTransaction`
-   `CorporateAction`
-   `Distribution`
-   `TransferRequest`
-   `Partner`
-   `PartnerPermission`
-   `AuditEvent`
-   `JurisdictionPolicy`

Important modelling rules:

-   Every offering references a legal issuer and an instrument terms
    version.
-   Every investment is linked to a specific offering and investor.
-   Every holding is linked to an allocation and the authoritative
    ownership record.
-   Chain identifiers are references, not substitutes for legal and
    operational identifiers.
-   Financial amounts use fixed-precision decimal types and explicit
    currency codes; never use binary floating point for money.
-   All material records carry creation time, actor, source, status and
    version.
-   State transitions are validated in domain logic, not only in
    frontend code.
-   Jurisdiction, investor eligibility and transfer policy are evaluated
    at the relevant event time and retained for audit.

### 8.5 Chain abstraction

Create a chain adapter interface that supports operations such as:

-   Create or initialize a supported asset/token representation.
-   Mint or allocate approved units.
-   Freeze, pause or restrict transfers where supported and legally
    authorized.
-   Transfer under policy controls.
-   Burn or redeem where legally and technically appropriate.
-   Read balances and transaction status.
-   Subscribe to or poll for confirmed chain events.
-   Reconcile chain state with internal records.

Solana is the first adapter. Additional chains must not be implemented
until there is a validated business, partner or regulatory reason.

### 8.6 Data and event architecture

-   PostgreSQL is the source of truth for user identity, business
    profiles, offering state, approvals, subscriptions, payment state
    and internal ownership records.
-   On-chain records provide verifiable evidence for selected issuance,
    allocation and transfer events.
-   Store document files in encrypted object storage with controlled
    access; store references and integrity metadata in PostgreSQL.
-   Use append-only audit events for sensitive actions.
-   Use an outbox pattern to reliably publish events after database
    transactions.
-   Use idempotency keys for payment, subscription, allocation and chain
    submission endpoints.
-   Reconcile asynchronous events and provide operational exception
    queues.

### 8.7 AI agent technical architecture

The AI layer sits above TokenWork's domain services and invokes them only through typed, permission-checked tools. Domain services remain the source of truth; an agent response never becomes an authoritative financial or legal record merely because a model generated it.

Core components:

- **Agent gateway/orchestrator:** authenticates the caller, resolves tenant and role context, selects an approved workflow, enforces budgets and records execution state.
- **Agent definitions:** versioned workflows with explicit purpose, allowed tools, input/output schemas, limits and approval gates.
- **Tool registry:** narrow interfaces to business profiles, document ingestion, financial calculations, checklist/rules engines, case management and reporting. Every tool independently enforces authorization.
- **Model gateway:** provider-neutral interface for hosted models and, where practical, self-hosted open-weight models. Provider selection considers quality, latency, privacy, cost and deployment constraints.
- **Document intelligence pipeline:** malware scanning, file validation, OCR/parsing, structured extraction, source-location retention and human correction.
- **Knowledge and retrieval layer:** permission-filtered retrieval over approved TokenWork content, policies and a user's authorized documents. Retrieval must preserve tenant boundaries and document permissions.
- **Evaluation and observability:** test datasets, task-level quality metrics, traceable tool calls, cost/latency monitoring, red-team tests and regression evaluation before agent changes are released.

Implementation guidance:

- Keep orchestration behind Rust services and typed internal APIs; use a dedicated agent runtime only if it provides a clear operational advantage.
- Use PostgreSQL for authoritative workflow state and audit metadata. Add vector search only when retrieval use cases justify it; never use vector similarity as an authorization mechanism.
- Use deterministic Rust code for financial calculations, eligibility rules, instrument state transitions, permissions and settlement logic. A language model may explain results but must not be the calculator or policy engine of record.
- Start with a small number of well-defined agent workflows. Avoid a general-purpose autonomous agent with unrestricted tools.
- Keep prompts, tool schemas, evaluation cases and agent workflow versions in source control with review and release controls.
- Do not send sensitive data to an external model provider unless the provider, contract, data processing terms, jurisdiction and configuration have been approved.

------------------------------------------------------------------------

## 9. Security, privacy and reliability

### 9.1 Security requirements

-   Strong authentication and secure session management.
-   Role-based and attribute-based access control for sensitive
    workflows.
-   Multi-factor authentication for privileged and high-risk actions.
-   Separation of duties for offering approvals, payment operations and
    privileged administration.
-   Encryption in transit and at rest.
-   Managed secrets; no private keys or credentials in source code or
    logs.
-   Secure key management and transaction authorization.
-   Input validation, output encoding and protection against common
    web/API vulnerabilities.
-   Dependency, container and smart-contract security scanning.
-   Rate limiting, abuse detection and account protection.
-   Regular backups and tested restoration.
-   Security incident response and access revocation.
-   Independent smart-contract and application security review before
    production use.

### 9.2 Privacy requirements

-   Keep personal identity, KYC/AML information, private financial data
    and confidential commercial documents off public blockchains.
-   Apply data minimization, purpose limitation, retention schedules and
    access logging.
-   Use selective disclosure and verifiable attestations where
    appropriate.
-   Do not assume that hashing or encrypting personal data makes
    permanent public-chain storage safe or compliant.
-   Support data access, correction and deletion obligations where
    applicable, while preserving records that must legally be retained.
-   Conduct privacy impact assessments for sensitive integrations and
    cross-border data flows.

### 9.3 Reliability and operational controls

-   Define service-level objectives after baseline usage and hosting
    requirements are understood.
-   Monitor API availability, latency, failed jobs, chain confirmation,
    payment status and reconciliation mismatches.
-   Use bounded retries, dead-letter handling and manual review queues.
-   Make workflows recoverable after provider or chain outages.
-   Ensure users can see pending, failed and completed states
    accurately.
-   Do not mark an investment settled or an ownership change complete
    until all required conditions are confirmed.

### 9.4 AI safety, permissions and audit controls

- Enforce authorization in backend tools and domain services on every call; prompts and model instructions are not security boundaries.
- Apply least privilege, tenant isolation, scoped credentials, rate limits and per-task resource budgets.
- Treat uploaded documents, retrieved content and external tool results as untrusted data. Defend against prompt injection, malicious files, data exfiltration and attempts to override system policy.
- Do not expose secrets, private keys, unrestricted SQL, arbitrary code execution, shell access or direct wallet signing to agents.
- Agents must not independently approve or reject an offering, certify a valuation, determine legal compliance, make a binding credit/investment decision, execute a transfer, release funds, mint or burn an instrument, or change authoritative ownership records.
- Any future agent-assisted high-impact action must use a deterministic workflow, explicit permission checks, transaction preview, user/authorized reviewer confirmation and an auditable approval record.
- Distinguish AI-generated drafts, extracted facts, deterministic calculations and human-approved decisions in the interface and data model.
- Provide correction, feedback, escalation and human-review mechanisms. Preserve original source material and correction history.
- Define data retention, deletion, model-provider data handling and training-use restrictions before production use.
- Evaluate for hallucination, bias, prompt injection, unauthorized disclosure, inconsistent calculations and failure to abstain. Block release when critical tests fail.

------------------------------------------------------------------------

## 10. Legal, regulatory and governance model

### 10.1 Operating strategy

TokenWork will begin with a hybrid regulatory model:

1.  Build compliance capabilities into the product from day one.
2.  Operate as a technology/infrastructure provider where the actual
    activities and law permit.
3.  Use licensed or authorized partners for activities requiring
    authorization.
4.  Engage regulators and appropriate innovation programmes.
5.  Obtain its own licenses when commercially and strategically
    justified.

The exact operating model must be confirmed by qualified Ugandan legal
counsel and relevant regulators before live offerings or regulated
activities begin.

### 10.2 Legal structuring

For each instrument and offering, determine:

-   Who is the legal issuer.
-   What rights the investor receives.
-   Whether the instrument is a security or another regulated product.
-   Whether an SPV or other legal vehicle is required.
-   Which legal register is authoritative.
-   How token records map to enforceable rights.
-   What investor consents and corporate approvals are required.
-   What restrictions apply to marketing, offers, transfers and resale.
-   Who is responsible for custody, client money, settlement and
    investor servicing.

### 10.3 Uganda-first regulatory workstream

Before production fundraising, obtain current advice on applicable
company, securities/capital markets, collective investment,
crowdfunding, payments, AML/CFT, virtual asset, data protection, tax,
consumer protection and cross-border rules. Confirm the roles and
approvals required from the relevant authorities and licensed service
providers.

Do not assume that using blockchain changes the legal classification of
an instrument or removes licensing obligations.

### 10.4 Investor protection

-   Clear risk disclosures and instrument terms.
-   Suitability/appropriateness or eligibility checks where required.
-   Fair marketing and no misleading return claims.
-   Transparent fees and conflicts of interest.
-   Complaints and dispute handling.
-   Business and instrument-specific risk disclosures.
-   No guarantee of investment performance or liquidity.
-   Clear distinction between platform verification and an endorsement
    of an investment.

### 10.5 Governance and accountability

Start with accountable company-led governance, documented policies and
independent professional review where appropriate. Progressively
introduce partner councils, developer participation, transparent
standards proposals and independent oversight. Ecosystem governance does
not remove the legal responsibilities of the operating company or
licensed providers.

------------------------------------------------------------------------

## 11. Risk intelligence and trust framework

### 11.1 Business risk

Potential factors include: - Revenue and cash-flow stability. -
Profitability and operating history. - Management and governance. -
Ownership and related-party relationships. - Existing debt and
liabilities. - Regulatory and legal standing. - Financial reporting
quality. - Business model and sector exposure.

### 11.2 Instrument risk

-   Equity: valuation, dilution, governance rights and exit uncertainty.
-   Debt: repayment capacity, maturity, covenants, security and
    recovery.
-   Revenue-sharing: revenue definition, reporting reliability,
    volatility and payment cap/term.
-   Asset-backed: title, valuation, lien priority, custody, insurance,
    deterioration and recovery.

### 11.3 Assurance labels

Every piece of information should have an explicit evidence status, for
example: - Business-reported. - Document-supported. - Professionally
reviewed. - Independently audited. - Platform-verified. -
Regulator/registry/provider verified.

These labels must identify what was checked, by whom, when and within
what scope. No single badge should imply that the investment is safe.

### 11.4 Default and dispute handling

Provide workflows for missed payments, covenant breaches, inaccurate
disclosures, complaints and suspected fraud. The platform may preserve
evidence, notify parties, coordinate authorized professionals and track
resolution. Recovery, enforcement, mediation, arbitration and court
processes must be handled by the legally appropriate parties.

------------------------------------------------------------------------

## 12. Commercial model and go-to-market

### 12.1 Revenue model

Hybrid revenue streams may include:

-   Free or low-cost business registration and public profiles.
-   Business subscriptions for advanced tools.
-   Issuance and fundraising fees where permitted.
-   Instrument administration and servicing fees.
-   Professional structuring and managed-service fees where lawfully
    provided.
-   API subscriptions and partner revenue.
-   Enterprise licensing and white-label fees.
-   Permitted marketplace, transaction and settlement fees.

The platform must disclose fees and avoid relying on speculative
platform-token appreciation or secondary-market volume.

### 12.2 Initial sectors

Initial Uganda launch focus:

1.  Agribusiness and agro-processing.
2.  Trade, wholesale and distribution.
3.  Manufacturing and industry.

The first cohort target is 5--10 flagship businesses, with quality and
readiness taking precedence over quotas. Indicative cohort mix can be
adjusted based on real pipeline quality.

### 12.3 Market development

Develop all three sides of the market in parallel:

-   Businesses with genuine capital needs and credible records.
-   Investors with appropriate eligibility and risk understanding.
-   Institutional partners that provide regulated services,
    distribution, verification, payments, custody and professional
    support.

Use hybrid distribution: - Direct acquisition. - Institutional
partnerships. - Community and referral channels. - API and white-label
distribution.

### 12.4 Geographic sequence

-   Uganda: first operating market.
-   East Africa: localized expansion.
-   Pan-Africa: additional eligible markets.
-   Global: cross-border infrastructure and distribution.

Country activation requires jurisdiction-specific legal analysis,
partners, payment and custody readiness, data protection assessment and
operational support.

------------------------------------------------------------------------

## 13. Product roadmap

### Phase 0 --- Discovery and legal/market validation

-   Interview SMEs, investors, financial institutions and professional
    partners.
-   Validate actual financing pain points and willingness to use the
    product.
-   Obtain legal analysis of equity issuance and operating roles in
    Uganda.
-   Validate a viable first issuance structure.
-   Identify design partners and potential pilot issuers.
-   Finalize MVP scope and acceptance criteria.

### Phase 1 --- Foundation and equity MVP

Deliver the core equity workflow and the first three bounded AI assistants: business onboarding, financial analysis and due-diligence preparation. AI outputs remain drafts subject to human review.

-   Business identity and onboarding.
-   Investor identity and simulated eligibility.
-   Business financial disclosures.
-   Equity offering preparation and approval workflow.
-   Solana Devnet tokenization.
-   Subscription and simulated payment workflow.
-   Ownership and portfolio records.
-   Basic reporting and audit trail.
-   End-to-end demo with test data and a clearly labelled simulated
    investment journey.

### Phase 2 --- Controlled pilot readiness

Harden agent evaluation, privacy controls, model-provider governance and reviewer workflows. Introduce valuation and offering-preparation assistance only after the evidence and approval model is validated.

-   Legal documentation and operational procedures.
-   Licensed partner integrations.
-   Production-grade KYC/AML and investor eligibility.
-   Payment, settlement and reconciliation integrations.
-   Custody and wallet operating model.
-   Security testing and independent reviews.
-   Pilot with selected businesses only after legal and regulatory
    approvals.

### Phase 3 --- Instrument expansion

Extend agent checklists and analysis workflows to business debt, revenue-sharing and asset-backed instruments using instrument-specific rules and templates.

-   Business debt module.
-   Revenue-sharing module.
-   Asset-backed investment module.
-   Instrument-specific servicing, monitoring and risk workflows.
-   Unified capital structure and conflict detection.

### Phase 4 --- Institutional and ecosystem expansion

-   Partner dashboard and APIs.
-   SDKs and webhooks.
-   White-label deployments.
-   Dedicated institutional environments where justified.
-   Additional financial rails and jurisdictions.
-   Open standards and ecosystem governance.

### Phase 5 --- Capital markets expansion

-   Controlled secondary transfers.
-   Authorized venue and broker integrations.
-   Broader cross-market interoperability.
-   Additional chain adapters where justified.
-   Institutional portfolio and servicing infrastructure.

------------------------------------------------------------------------

## 14. Eight-week programme milestone

The eight-week Bridge programme is an initial delivery milestone inside
the master PRD. It is not the full platform.

### Target outcome

Deliver a working MVP demonstrating an end-to-end simulated SME equity
capital formation workflow:

1.  A business creates a profile.
2.  The business submits basic verification and financial disclosure
    information.
3.  The business prepares an equity offering.
4.  A reviewer workflow records checks and approval status.
5.  An investor creates a profile and completes a simulated eligibility
    process.
6.  The investor reviews offering terms and disclosures.
7.  The investor submits a simulated subscription.
8.  The application records an allocation.
9.  An equity token representation is issued on Solana Devnet.
10. The business and investor dashboards show corresponding records.
11. A basic corporate action or investor report is demonstrated.
12. The system records auditable events and reconciles application
    records with chain events.
13. The Business Onboarding Agent guides profile completion and identifies missing information.
14. The Financial Analysis Agent extracts selected figures from sample financial documents and produces a sourced draft analysis.
15. The Due Diligence Assistant checks completeness and inconsistencies and creates a human-review report.

### AI agent delivery within the weekly plan

- Week 1: define agent use cases, prohibited actions, evidence requirements and evaluation examples.
- Weeks 2–3: implement the agent gateway, tool permissions and Business Onboarding Agent.
- Weeks 3–4: implement document ingestion and Financial Analysis Agent for a controlled set of sample formats.
- Weeks 5–6: implement Due Diligence Assistant, reviewer queue and evidence-linked output.
- Week 7: test prompt injection, tenant isolation, hallucination/abstention, authorization and audit trails.
- Week 8: demonstrate the three agents inside the business workflow and document known limitations.

### Suggested weekly plan

  -----------------------------------------------------------------------
  Week                    Focus                   Demonstrable output
  ----------------------- ----------------------- -----------------------
  1                       Product definition,     Approved MVP scope and
                          user journeys,          architecture
                          architecture, legal     
                          assumptions             

  2                       Rust workspace, API,    Running backend and
                          PostgreSQL,             business onboarding
                          authentication and core 
                          domain                  

  3                       Business profile,       Business can create a
                          financial disclosure    draft equity offering
                          and offering            
                          preparation             

  4                       Investor profile,       Investor can review and
                          simulated eligibility   subscribe in simulation
                          and subscription flow   

  5                       Solana/Anchor           Devnet token
                          integration             representation and
                                                  transaction record

  6                       Ownership, portfolio,   Connected business and
                          basic reporting and     investor experiences
                          corporate action        

  7                       Integration, tests,     End-to-end tested MVP
                          security review and     
                          reconciliation          

  8                       Demo, documentation,    Demonstrable product
                          user feedback and       and next-phase plan
                          roadmap                 
  -----------------------------------------------------------------------

### Explicit MVP boundaries

AI-specific MVP boundaries: use a controlled set of sample documents and supported formats; no autonomous agent decisions; no unrestricted tool access; no external-model processing of sensitive production data without approval; no claim that AI analysis is an audit, professional valuation, legal opinion or credit decision.

The eight-week MVP should not claim: - Production investment readiness
or regulatory approval. - Real-money investment settlement. - Live
custody of investor funds or assets. - Legally effective share issuance
unless the legal structure and approvals have been established. - A
functioning secondary market or guaranteed liquidity. - Full debt,
revenue-sharing or asset-backed production issuance.

Use test data, simulated investment amounts and Solana Devnet. Label the
demonstration clearly as a prototype.

------------------------------------------------------------------------

## 15. Success metrics

Measure real capital-market impact rather than vanity metrics.

### Business metrics

-   Businesses onboarded and verified.
-   Businesses that complete investment readiness.
-   Businesses that publish eligible offerings.
-   Businesses funded and returning for additional capital.
-   Time and cost to prepare an offering.

### Capital formation metrics

-   Capital subscribed and settled, reported separately.
-   Capital raised by instrument and sector.
-   Funding completion rate.
-   Repeat issuance rate.

### Investor metrics

-   Verified and eligible investors.
-   Active and repeat investors.
-   Investment concentration and diversification indicators.
-   Investor retention and engagement.

### Outcome metrics

-   Distributions and repayments made on time.
-   Defaults, restructurings and recoveries.
-   Complaints and dispute resolution times.
-   Investor reporting timeliness.
-   Realized exits, where any occur.

### Institutional metrics

-   Active partners.
-   API integrations and white-label deployments.
-   Partner-originated businesses and investors.
-   Time and cost to onboard a partner.

### Trust and operational metrics

-   Verification completion and exception rates.
-   Disclosure completeness and correction history.
-   Compliance review turnaround.
-   Reconciliation mismatch rate.
-   Security incidents and unresolved high-risk vulnerabilities.
-   Agent task completion rate and human correction rate.
-   Financial extraction accuracy on a labelled evaluation set.
-   Due-diligence finding precision/recall on reviewed test cases.
-   Unsupported-claim rate, abstention quality and prompt-injection test pass rate.
-   Agent cost and latency per completed workflow.
-   Availability and workflow failure rates.

Never report token mint volume as equivalent to capital raised or
economic impact.

------------------------------------------------------------------------

## 16. Non-functional requirements

-   **Security:** Secure development lifecycle, threat modelling, least
    privilege, encryption, independent testing and incident response.
-   **Privacy:** Data minimization, access controls, retention policies
    and jurisdiction-aware processing.
-   **Auditability:** Traceable material actions, approvals, terms
    versions and financial events.
-   **Performance:** Establish baselines and targets during MVP testing;
    optimize based on measured workloads.
-   **Scalability:** Modular domain boundaries, asynchronous jobs and
    horizontally scalable stateless services where needed.
-   **Availability:** Graceful handling of external provider and
    blockchain outages.
-   **Accessibility:** Responsive, mobile-friendly interfaces and clear
    language for non-technical users.
-   **Localization:** Support currencies, formats, languages and
    jurisdiction-specific workflows as markets expand.
-   **Interoperability:** Versioned APIs, documented schemas, webhooks
    and stable identifiers.
-   **Maintainability:** Automated tests, code review, typed domain
    boundaries, documentation and reproducible deployments.

------------------------------------------------------------------------

## 17. Key risks and mitigations

  -----------------------------------------------------------------------
  Risk                                Mitigation
  ----------------------------------- -----------------------------------
  Regulatory classification or        Obtain jurisdiction-specific legal
  licensing uncertainty               advice; use authorized partners;
                                      gate live activities

  Token does not confer enforceable   Legal structuring first; map token
  rights                              records to authoritative legal
                                      registers

  Fraudulent or misleading issuer     Verification layers, professional
  information                         review, monitoring and clear
                                      evidence labels

  Poor liquidity expectations         Explicit risk disclosure; no
                                      guaranteed exit claims; controlled
                                      transfer rules

  Duplicate collateralization or      Unified capital structure, asset
  conflicting claims                  registry references, lien checks
                                      and legal verification

  Custody or key compromise           Qualified custody/key-management
                                      design, access controls and
                                      independent security review

  Incorrect payments or allocations   Idempotency, authorization,
                                      reconciliation, dual control and
                                      exception handling

  Chain outage or transaction failure Chain abstraction, retries,
                                      transaction monitoring and
                                      reconciliation queues

  Privacy or data protection breach   Off-chain sensitive data,
                                      encryption, minimization and access
                                      monitoring

  Low adoption on one side of         Develop business, investor and
  marketplace                         institutional pipelines together

  Overbuilding before validation      Phased scope, design partners, MVP
                                      acceptance criteria and user
                                      testing

  Partner dependency                  Multiple providers where feasible,
                                      clear contracts and portable
                                      interfaces
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## 18. Assumptions and open validation items

The following require validation and must not be treated as settled
facts:

-   The exact legal and regulatory classification of each proposed
    instrument in Uganda.
-   Which entity will act as issuer, platform operator, placement agent,
    broker, custodian or payment provider.
-   The appropriate legal register and company-law process for tokenized
    equity.
-   Whether an SPV is required for specific asset-backed structures.
-   The permitted scope of marketing and distribution to different
    investor classes.
-   Payment, FX and stablecoin permissions and provider availability.
-   Applicable tax treatment and reporting obligations.
-   Availability and reliability of business registry, identity,
    accounting and banking integrations.
-   Commercial willingness of SMEs, investors and institutions to adopt
    the model.
-   Final production hosting, custody and security architecture.

These items should become tracked decisions with owners, evidence and
deadlines.

------------------------------------------------------------------------

## 19. MVP acceptance criteria

The MVP is considered demonstrable when:

1.  A business can register and create a profile.
2.  A reviewer can record business verification status and evidence.
3.  A business can create an equity offering with versioned terms and
    disclosures.
4.  An authorized reviewer can approve or reject the demo offering
    workflow.
5.  An investor can register and complete simulated eligibility.
6.  An investor can review the offering and acknowledge disclosures.
7.  An investor can submit a simulated subscription.
8.  The system can record an allocation linked to the investor and
    offering.
9.  The system can issue a test token representation on Solana Devnet.
10. The application can reconcile the chain transaction with the
    internal allocation record.
11. Business and investor dashboards display consistent holdings and
    offering data.
12. A basic investor report or corporate action can be created and
    recorded.
13. Material actions are auditable.
14. Automated tests cover core state transitions and authorization
    checks.
15. The demonstration clearly distinguishes simulated flows from
    production financial or legal activity.
16. The Business Onboarding Agent can guide a test business through required profile fields and flag missing information.
17. The Financial Analysis Agent can extract an agreed set of figures from sample documents, preserve source references and label uncertain results.
18. The Due Diligence Assistant can run a defined checklist, flag test inconsistencies and produce a reviewable report.
19. Agent tools enforce user role and tenant permissions server-side.
20. Agent prompts, tool calls, outputs, workflow versions and human corrections/approvals are auditable.
21. No MVP agent can approve offerings, certify valuations, make binding compliance decisions or execute financial/chain transactions.

------------------------------------------------------------------------

## 20. Final product definition

TokenWork is global business capital markets infrastructure, built in
Uganda with African roots. It enables businesses to structure and raise
capital through legally defined digital financial instruments and gives
investors, institutions and ecosystem partners a connected environment
for discovery, participation, ownership records, servicing and
reporting.

The initial product focuses on equity capital formation for Ugandan
SMEs. The platform architecture supports business debt, revenue-sharing
and asset-backed investments from the outset, with each instrument
activated through its own legal, operational and risk controls.

Rust is the primary backend language. Solana is the initial blockchain
environment. The system is designed for multi-chain interoperability,
jurisdiction-aware compliance, privacy, institutional integration and
progressive expansion.

**The product is not simply a way to tokenize businesses. It is
infrastructure for making business capital markets more accessible,
transparent and connected. AI agents reduce operational friction across
that infrastructure, while deterministic systems and authorized people
retain control over legal, financial and investor-protection decisions.**
