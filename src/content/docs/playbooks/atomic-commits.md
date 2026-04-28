---
title: Atomic Commits
description: Commit by reviewable intent, not arbitrary checkpoints.
---

Atomic commits are review units.

One commit equals one reviewable intent.

File count is not the commit boundary.

Eleven files can be one clean commit if they all serve one reviewable intent. Three files can require three commits if they introduce separate contracts, implementation, and tests that can be reviewed independently.

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

- public contracts and unrelated implementation
- implementation and examples that belong to another feature
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
