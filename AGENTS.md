# Repository Agent Guide
Version: 2026-04-28

## Purpose

This repository provides reusable operating instructions and templates for high-throughput agentic engineering teams.

## Repository Type

Current type: community OSS.

## Default Mode

Work on a branch unless explicitly told otherwise. Use atomic commits, keep PRs reviewable, verify before completion, and return a review pack.

Before opening a PR, fetch and rebase on the latest default branch.

Every delegated agent or workstream owns exactly one branch and submits exactly one PR. This is a hard line. Do not put several agents' work on one shared branch unless the human explicitly requests it.

Open one PR per reviewable intent.

The final integration PR may contain only integration glue, conflict resolution, connecting docs, and end-to-end verification updates.

For stacked PRs:

- base each PR on the previous PR head
- keep the head branch limited to that workstream's commits
- do not merge lower stack branches into higher stack branches
- prefer rebase or cherry-pick for stack maintenance
- never force-push shared or maintainer branches without approval

## Hard Commit Gate

Before creating any commit, inspect:

```bash
git diff --stat
git status --short
```

If the staged or unstaged diff touches more than 3 files, stop and produce a commit split plan before committing.

No commit may change more than 3 files unless the maintainer explicitly approves that commit before it is created.

If a task touches more than 3 files, split the work before committing.

Scaffold, generated output, lockfile output, formatting-only passes, and mechanical renames still require explicit maintainer approval before commit when they touch more than 3 files.

Otherwise, split the diff into multiple atomic commits.

Do not spread many file changes across a few broad commits.

Do not finish a task with one large commit if the diff contains multiple reviewable intents.

If a PR touches more than 3 files and has only one commit, assume the commit history is wrong and split it before returning the review pack.

Tests follow the same commit boundary. Use one test intent per commit, and separate unrelated unit, regression, fixture, and smoke tests into separate commits.

## Repo Layout

- `docs/` - operating policies and checklists
- `templates/` - copyable templates for projects and PRs
- `examples/` - example repo-specific `AGENTS.md` files
- `.github/` - GitHub community files

## Commands

Install: none

Test: none

Lint: none

Typecheck: none

Build: none

Smoke test: `git diff --check`

## Work Policy

Before editing, report objective, expected blast radius, files likely to change, commit plan, verification plan, and risk level.

Before the final commit series, update the commit plan based on the actual diff.

Use Conventional Commits. One commit equals one reviewable intent.

Commit as you go. After each independently reviewable change unit, run the smallest relevant verification, stage only that unit, commit it, and continue.

## Stop Before Touching

Ask before changing licensing, public templates in incompatible ways, repo history, or destructive commands.

## PR Body Formatting Gate

When opening or updating a pull request, the PR body must follow `.github/pull_request_template.md` unless the human explicitly asks for a different format.

Do not pass PR bodies or review comments as shell strings containing escaped newlines like `\n`. GitHub will render those literally and the comment is not reviewable.

Use a body file or heredoc instead:

```bash
cat > /tmp/pr-body.md <<'EOF'
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
EOF

gh pr create --body-file /tmp/pr-body.md
```

Before creating or updating a PR, inspect the final rendered source:

```bash
cat /tmp/pr-body.md
```

If the preview contains literal `\n`, missing headings, or does not match the repository template, fix it before posting.

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
