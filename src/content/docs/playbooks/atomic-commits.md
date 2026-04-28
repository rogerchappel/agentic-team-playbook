---
title: Atomic Commits
description: Commit by reviewable intent, not arbitrary checkpoints.
---

Atomic commits are review units.

One commit equals one reviewable intent.

File count is not the commit boundary.

A one-commit PR touching many files is usually a smell, even when the individual file edits look small.

Do not default to one commit per file. That often creates commits that cannot be reviewed, reverted, or verified independently. Split by reviewable intent first, and split by file only when each file is its own reviewable intent.

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

A task is not complete if multiple unrelated intents are collapsed into one commit.

If a PR touches more than 8 files and has only one commit, assume the commit history is wrong and split it before returning the review pack.

## Good Commits

```text
feat(cli): add workspace status command
fix(sync): handle missing sale identifier
test(video): cover failed analysis response
docs(agents): document review pack workflow
ci(release): add smoke test job
refactor(config): isolate provider resolution
```

## Do Not Mix

- behaviour changes and unrelated tests
- implementation and broad docs rewrites
- formatting-only changes and logic changes
- dependency updates and feature work
- generated files and unrelated hand-written files
- CI config and app behaviour

## Split When Independently Reviewable

Prefer separate commits for:

- public contracts or types
- implementation
- tests
- examples or fixtures
- documentation
- generated artifacts
- CI/config changes

Keep them together only when splitting would create artificial commits that cannot be understood or verified independently.

## Commit Plan Required

Before editing, propose a commit plan.

Before the final commit series, update the commit plan based on the actual diff.

Format:

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

If the final diff differs from the original plan, revise the plan before committing.

## Commit As You Go

Do not wait until the end of a task to make one large commit.

After each independently reviewable change unit:

1. run the smallest relevant verification
2. stage only that unit
3. commit it
4. continue to the next unit

If you are about to edit a new subsystem, docs topic, CI workflow, config file, or test group, consider committing the previous unit first.

## Rule Of Thumb

Prefer 3 clean commits over 1 mixed commit.

Prefer 1 clean commit over 5 artificial commits.

## Before Committing

```bash
git status
git diff
git diff --cached
```

Stage only files related to the current intent.
