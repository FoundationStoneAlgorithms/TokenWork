# Contributing to TokenWork

Thanks for your interest in TokenWork. Work is planned and tracked in [GitHub Issues](https://github.com/FoundationStoneAlgorithms/TokenWork/issues) and delivered through pull requests.

## Workflow

1. **Pick or create an issue.** Every meaningful change should be tied to an issue. The [epic](https://github.com/FoundationStoneAlgorithms/TokenWork/issues/1) tracks the full plan; phase/week issues define scope.
2. **Branch from `main`.** Use the convention `issue-<N>-<slug>` (e.g. `issue-5-week-2-rust-workspace`), mirroring the project's planning style.
3. **Open a pull request that closes the issue.** Reference the issue in the PR (`Closes #N`) and include the evidence the issue's *Verification* section asks for (commands run, outputs, tx hashes, screenshots where relevant).
4. **Keep CI green.** Required checks must pass before merge. The default branch is protected: no direct pushes, no force-push, linear history.
5. **Do not bypass safety or compliance gates.** TokenWork deals with regulated financial workflows — changes to authorization, eligibility, payments, chain operations, legal/rights mapping or AI agent permissions require extra care and explicit review notes.

## Commit messages

Write informative commits that describe the actual changes (subject + body). Do not add `Co-authored-by` trailers.

## Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md).

## Security

Report vulnerabilities privately — see [SECURITY.md](SECURITY.md). Never commit secrets, private keys or personal/financial data.
