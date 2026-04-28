# Repository Agent Guide
Version: 2026-04-28

## Purpose

This repository provides reusable operating instructions and templates for high-throughput agentic engineering teams.

## Repository Type

Current type: community OSS.

## Default Mode

Work on a branch unless explicitly told otherwise. Use atomic commits, keep PRs reviewable, verify before completion, and return a review pack.

## Hard Commit Gate

Before creating any commit, inspect:

```bash
git diff --stat
git status --short
```

If the staged or unstaged diff touches more than 3 files, stop and produce a commit split plan before committing.

A single commit touching more than 3 files is only allowed when one of these is true:

- initial repo scaffold
- generated lockfile/vendor output required by one change
- mechanical rename/move
- formatting-only pass
- explicitly approved by the human

Otherwise, split the diff into multiple atomic commits.

Do not finish a task with one large commit if the diff contains multiple reviewable intents.

If a PR touches more than 3 files and has only one commit, assume the commit history is wrong and split it before returning the review pack.

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
