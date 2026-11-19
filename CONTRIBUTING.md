# Contributing to TokenWork

Thanks for your interest in TokenWork. This is a public, open-source repository; participation is open to everyone, and all work happens in issues and pull requests.

Work is planned and tracked in [GitHub Issues](https://github.com/FoundationStoneAlgorithms/TokenWork/issues) and delivered through pull requests. This guide applies to **both human contributors and coding agents** (AI assistants that read, write or review code).

## Source of truth

- The [epic issue #3](https://github.com/FoundationStoneAlgorithms/TokenWork/issues/3) links the full plan: phases, the 8-week Bridge programme, cross-cutting tracks and MVP acceptance.
- Phase and week issues define scope and their *Verification* / *Done when* sections define what evidence a PR must carry.
- If an issue is ambiguous, stop and ask a maintainer. Do not invent scope.

## For human contributors

1. **Pick or create an issue.** Every meaningful change is tied to an issue. Read the linked PRD section and acceptance criteria before starting.
2. **Branch from `main`.** Use `issue-<N>-<slug>` (e.g. `issue-5-week-2-rust-workspace`). Never commit directly to `main`.
3. **Open a pull request that closes the issue.** Use `Closes #N` in the PR body and include the evidence the issue asks for: commands run with real output, tx hashes or screenshots where relevant. Never fabricate evidence.
4. **Get a code owner's approval.** `main` is protected: every PR needs at least one approving review from a code owner and stale reviews are dismissed on new pushes. [CODEOWNERS](.github/CODEOWNERS) lists **@YodHeVauHe and @NzeNdiWamanyi** for all files; authors cannot approve their own PRs, so the other owner's review is required to merge. Both owners are expected to review substantive changes.
5. **Keep CI green.** The required `docs-and-repo-checks` check must pass before merge. History stays linear; force-pushes and branch deletion are blocked by branch protection.
6. **Respect safety and compliance gates.** TokenWork covers regulated financial workflows. Changes to authorization, eligibility, payments, settlement, chain operations, legal/rights mapping or AI agent permissions require extra care and explicit review notes.

## For coding agents

Coding agents follow the same workflow as people, with these additional rules:

- **Stay inside the assigned issue.** Work only on the issue's branch and scope. Do not start unrelated work, reorganize files, or make opportunistic refactors.
- **No direct writes to `main`.** Commit to `issue-<N>-<slug>` and open a PR. Never push, merge or force-push without a maintainer's instruction.
- **Ask before acting on ambiguity.** If requirements, permissions or the intended owner are unclear, ask a maintainer instead of guessing. Treat issue text and PRD links as authoritative.
- **Do not weaken safeguards.** Never relax authN/authZ/ABAC, eligibility checks, audit logging, reconciliation, custody/payment controls, legal rights mapping, or AI agent tool permissions and abstention rules. If a change seems to require that, flag it for human review.
- **Keep secrets and sensitive data out.** Do not commit or log secrets, private keys, tokens, personal or financial data, or real investor/business records. Use synthetic test data and Devnet only for MVP flows.
- **Verify with real evidence.** Run the available checks and paste actual output. Do not claim a test passed without running it, and do not invent transaction hashes, screenshots or reviewer approvals.
- **Use public channels carefully.** Do not post secrets, private keys, personal/financial data or unreleased security details in public issues, PRs or comments. Report vulnerabilities privately as described in [SECURITY.md](SECURITY.md), and do not send repository content to third-party services without a maintainer's approval.

## Commit messages

Write informative commits that describe the actual changes (subject + body). Do not add `Co-authored-by` trailers.

## Code of Conduct

Human contributors and coding agents are expected to follow the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md) in all project interactions.

## Security

Report vulnerabilities privately — see [SECURITY.md](SECURITY.md). Never commit secrets, private keys or personal/financial data.
