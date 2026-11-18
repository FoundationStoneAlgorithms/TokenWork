# Security Policy

TokenWork is business capital markets infrastructure in a planning/prototype stage. Security and privacy are core product principles.

## Reporting a vulnerability

**Do not open a public issue for security vulnerabilities.**

Please report suspected vulnerabilities privately using [GitHub's private vulnerability reporting](https://github.com/FoundationStoneAlgorithms/TokenWork/security/advisories/new) for this repository. If that is unavailable, open a minimal issue asking for a private contact channel without disclosing exploit details.

Include, where possible: a description of the issue, affected components, steps to reproduce, potential impact, and any suggested mitigation.

## Scope (as the project evolves)

- Backend services, APIs and domain logic (Rust/Axum)
- Authentication, authorization and identity flows
- Smart contracts / on-chain programs (Solana/Anchor)
- Web and mobile clients
- Data handling for business, investor and financial records
- AI agent tools, prompts, permissions and audit trails

## Expectations

- We will acknowledge reports, assess impact, and work on a fix or mitigation before public disclosure when feasible.
- Keep secrets, private keys, credentials and personal/financial data out of issues, commits and logs.
- Never read server-side files or run OS commands via untrusted inputs; treat uploaded documents and retrieved content as untrusted data.

Thank you for helping keep TokenWork and its future users safe.
