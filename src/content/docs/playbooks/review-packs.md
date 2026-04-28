---
title: Review Packs
description: The handoff format that keeps agent work reviewable.
---

Review packs make agent output auditable.

They answer the questions reviewers always need answered:

- what changed
- where it changed
- how it was verified
- what risk remains
- how to roll it back
- what a human must decide

## Template

```md
## Review Pack
Repo:
Branch:
PR:
Task:
Status: done / blocked / needs review
Summary:
Commits:
Files changed:
Verification:
Risk level:
Rollback plan:
Human decision needed:
Next recommended task:
```

## Good Summary

```md
Summary:
Added a repository-level AGENTS.md with branch policy, atomic commit rules, risk escalation, and review pack format. Linked CLAUDE.md to the new source of truth.
```

## Weak Summary

```md
Summary:
Cleaned up docs and improved workflow.
```

The weak version hides the actual work.
