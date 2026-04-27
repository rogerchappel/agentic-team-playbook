# Atomic Commits

Atomic commits are review units, not tiny arbitrary checkpoints.

One commit equals one reviewable intent.

## Good

```text
feat(cli): add workspace status command
fix(sync): handle missing sale identifier
test(video): cover failed analysis response
docs(agents): document review pack workflow
ci(release): add smoke test job
refactor(config): isolate provider resolution
```

## Avoid Mixing

- behaviour changes and unrelated tests
- implementation and broad docs rewrites
- formatting-only changes and logic changes
- dependency updates and feature work
- generated files and unrelated hand-written files
- CI config and app behaviour

## Rule Of Thumb

Prefer 3 clean commits over 1 mixed commit.

Prefer 1 clean commit over 5 artificial commits.

## Before Committing

Run:

```bash
git status
git diff
git diff --cached
```

Stage only files related to the current intent.
