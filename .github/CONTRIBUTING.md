# Contributing to vinext-landing

Thank you for your interest in contributing! This document covers the development workflow and CI pipeline.

## Branch naming

Use the following prefixes for your branches:

- `feat/` — New features
- `fix/` — Bug fixes
- `docs/` — Documentation changes
- `chore/` — Maintenance, config, tooling

Examples: `feat/add-dark-mode`, `fix/header-mobile`, `docs/update-readme`.

## Development setup

1. **Node 22+** — Required (see `.nvmrc`). Run `nvm use` or `nvm install 22 && nvm use 22`.
2. **Install dependencies** — `pnpm install`
3. **Start dev server** — `pnpm dev`

## CI pipeline

Every pull request to `main` runs the following jobs:

| Job                     | Description                                           |
| ----------------------- | ----------------------------------------------------- |
| **setup**               | Installs dependencies with pnpm                       |
| **type-check**          | Validates TypeScript with `pnpm exec tsc --noEmit`    |
| **lint**                | Runs ESLint on `.ts` and `.tsx` files                 |
| **format-check**        | Runs Prettier to verify code formatting               |
| **build**               | Production build with `pnpm build`                    |
| **unit-tests**          | Runs Vitest tests                                     |
| **accessibility-check** | Runs htmlhint on built HTML (if present)              |
| **security-audit**      | Runs `pnpm audit --audit-level=high`                  |
| **pr-size-check**       | Warns (non-blocking) if the PR diff exceeds 500 lines |

**Before opening a PR**, run locally:

```bash
pnpm format-check
pnpm lint
pnpm test
pnpm build
```

## Dependency review

The `dependency-review` workflow blocks PRs that introduce HIGH/CRITICAL CVEs.

**Repository maintainers:** Enable it via **Settings → Security → Code security and analysis** → turn on **Dependency graph**. Until enabled, the job runs with `continue-on-error` so it won't block PRs.

## Manual approval requirement

PRs to `main` require approval from a member of the **Pandito-Solutions** organization before merge. This is enforced via the `production-approval` GitHub environment.

**Repository maintainers:** To configure this:

1. Go to **Settings → Environments**
2. Create environment: `production-approval`
3. Add **Required reviewers** → Team: `Pandito-Solutions/maintainers`
4. Ensure the `maintainers` team exists in the Pandito-Solutions organization

## PR labels

The `label-pr` workflow auto-labels PRs based on changed files:

- `ui` — App components or styles
- `config` — Config files
- `docs` — Markdown files
- `ci` — GitHub workflows
- `dependencies` — package.json or pnpm-lock.yaml

These labels must exist in the repository. Create them in **Settings → Labels** if missing.

## Stale issues and PRs

The `stale` workflow runs daily:

- **Issues** — Marked stale after 30 days of inactivity, closed 7 days later
- **Pull requests** — Marked stale after 14 days of inactivity, closed 7 days later

Items with `pinned` or `wip` labels are exempt.
