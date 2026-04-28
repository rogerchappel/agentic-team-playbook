# Repository Agent Guide
Version: 2026-04-28

## Purpose

This repository exists to:

> Replace this with a one-sentence repo purpose.

## Repository Type

Choose one:

- personal OSS
- community OSS
- production SaaS
- company/client work
- internal tooling
- data platform
- mobile app

Current type:

> Replace this with the repo type.

## Default Mode

Work on a branch unless explicitly told otherwise.

Use atomic commits.

Keep PRs reviewable.

Verify before completion.

Return a review pack.

Do not merge without explicit human approval.

## Hard Commit Gate

Before creating any commit, inspect:

```bash
git diff --stat
git status --short
```

If the staged or unstaged diff touches more than 8 files, stop and produce a commit split plan before committing.

A single commit touching more than 8 files is only allowed when one of these is true:

- initial repo scaffold
- generated lockfile/vendor output required by one change
- mechanical rename/move
- formatting-only pass
- explicitly approved by the human

Otherwise, split the diff into multiple atomic commits.

Do not finish a task with one large commit if the diff contains multiple reviewable intents.

If a PR touches more than 8 files and has only one commit, assume the commit history is wrong and split it before returning the review pack.

## Repo Layout

Update this section with the actual repo layout:

- `src/` - implementation
- `tests/` - tests
- `docs/` - documentation
- `.github/workflows/` - CI
- `scripts/` - automation scripts

## Commands

Install:

```bash
<install command>
```

Test:

```bash
<test command>
```

Lint:

```bash
<lint command>
```

Typecheck:

```bash
<typecheck command>
```

Build:

```bash
<build command>
```

Smoke test:

```bash
git diff --check
```

## Work Policy

Before editing, report:

1. objective
2. expected blast radius
3. files likely to change
4. commit plan
5. verification plan
6. risk level

Commit plan format:

```md
- Commit 1: `type(scope): title`
  - Intent:
  - Files:
  - Verification:
- Commit 2: `type(scope): title`
  - Intent:
  - Files:
  - Verification:
```

Before the final commit series, update the commit plan based on the actual diff.

## Commit Policy

Use Conventional Commits.

One commit equals one reviewable intent.

File count is not the commit boundary.

Do not default to one commit per file. Split by reviewable intent first, and split by file only when each file can be reviewed, reverted, and verified independently.

Split commits when the work introduces independently reviewable parts, such as:

- public contracts or types
- implementation
- tests
- examples or fixtures
- documentation
- generated artifacts
- CI/config changes

Keep them together only when splitting would create artificial commits that cannot be understood or verified independently.

Do not mix:

- implementation and unrelated docs
- tests for one feature with implementation of another
- dependency bumps and behaviour changes
- formatting-only changes and logic changes
- generated files and unrelated hand-written code
- CI changes and application behaviour changes

Prefer 3 clean commits over 1 mixed commit.

Prefer 1 clean commit over 5 artificial commits.

## Commit As You Go

Do not wait until the end of a task to make one large commit.

After each independently reviewable change unit:

1. run the smallest relevant verification
2. stage only that unit
3. commit it
4. continue to the next unit

If you are about to edit a new subsystem, docs topic, CI workflow, config file, or test group, consider committing the previous unit first.

## PR Policy

Good PRs:

- can be reviewed in under 15 minutes
- have a clear summary
- have focused commits
- include verification
- explain risk
- include follow-up tasks if incomplete

Bad PRs:

- broad rewrites
- unrelated formatting churn
- mixed behaviour/config/dependency changes
- no tests or verification
- vague summary
- risky production changes without approval

Do not merge without explicit human approval.

## Stop Before Touching

Ask before changing:

- auth
- security
- payments
- billing
- production data
- migrations
- secrets
- public API compatibility
- plugin APIs
- config formats
- install/update flow
- telemetry/privacy behaviour
- destructive commands
- production configuration

## Verification

Every task must include verification.

Use the smallest relevant check first:

- targeted unit test
- targeted integration test
- typecheck
- lint
- build
- smoke command
- manual QA checklist

If verification cannot be run, explain why and provide the exact command that should be run.

## Review Pack Required

At the end of every task, return:

```md
## Review Pack
Repo:
Branch:
PR:
Task:
Status:
Summary:
Commits:
Files changed:
Verification:
Risk level:
Rollback plan:
Human decision needed:
Next recommended task:
```
