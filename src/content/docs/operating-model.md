---
title: Operating Model
description: The core loop for high-throughput agentic engineering.
---

High throughput comes from short, reliable loops.

The goal is not more agents. The goal is more reviewable work safely merged.

## The Loop

1. write a clear task brief
2. assign a narrow surface
3. branch from latest `main`
4. make one reviewable change
5. verify the touched surface
6. commit atomically
7. open a focused PR
8. return a review pack
9. merge only after human approval

## Agent Task Brief

```md
Goal:
Fix failed checkout retry state.

Scope:
- checkout UI
- checkout API retry handling
- focused tests only

Do not touch:
- billing provider config
- migrations
- pricing
- auth

Verification:
- targeted checkout tests
- typecheck
- manual failed-payment smoke checklist
```

## Parallel Work Rules

- split by ownership boundary
- avoid multiple agents editing the same files
- prefer one PR per intent
- keep shared config changes separate
- rebase before PR
- stop when main moves across your touched surface

## Review Queue Hygiene

Healthy queues have small PRs, explicit verification, rollback notes, clear human decisions, and no mystery generated files.

Unhealthy queues have long-running branches, mixed unrelated changes, risky data changes without dry-run, vague summaries, and PRs opened from stale `main`.
