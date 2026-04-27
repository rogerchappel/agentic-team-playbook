# Contributing

Thanks for improving Agentic Team Playbook.

This repo is intentionally practical. Contributions should help teams run AI agents with more reviewable, verifiable, and production-safe workflows.

## Good Contributions

- clearer `AGENTS.md` templates
- examples for specific repo types
- risk checklists
- verification checklists
- PR/review-pack patterns
- short case studies from real workflows

## Avoid

- tool-specific hype
- broad rewrites without a clear improvement
- templates that hide risky behaviour
- advice that encourages direct production changes without approval
- artificial process for its own sake

## Workflow

1. Open an issue or draft a small PR.
2. Keep each PR focused on one reviewable intent.
3. Use Conventional Commits.
4. Run `git diff --check`.
5. Include a short review pack in the PR body.

## Commit Style

Use Conventional Commits:

```text
docs(templates): add data platform agent guide
docs(risk): clarify migration approval rule
chore(repo): add issue template
```

## Review Pack

Every PR should include:

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
