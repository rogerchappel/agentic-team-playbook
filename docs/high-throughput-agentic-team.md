# Operating A High-Throughput Agentic Team

High throughput comes from small, durable loops.

The goal is not more agents. The goal is more reviewable work safely merged.

Durable workers checkpoint state, retry safely, emit useful logs, and stop before operations that need human judgment. Agentic engineering uses the same pattern: branch, change, verify, commit, hand off, and escalate risky work.

## Durable Work Mapping

| Durable worker concept | Agentic engineering equivalent |
| --- | --- |
| execution context | branch from latest `main` |
| checkpoint | atomic commit |
| health check | targeted verification |
| execution log | review pack |
| retry safety | dry-run, idempotency, and rollback notes |
| circuit breaker | stop-before-touching policy |
| handoff queue | pull request |

## Operating Loop

1. write a clear task brief
2. assign a narrow surface
3. branch from latest `main`
4. make one reviewable change
5. verify the touched surface
6. commit atomically
7. open a focused PR
8. return a review pack
9. merge only after human approval

## Good Task Brief

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

Healthy queues have:

- small PRs
- explicit verification
- rollback notes
- clear human decisions
- no mystery generated files
- no broad formatting churn

Unhealthy queues have:

- long-running branches
- mixed unrelated changes
- risky data changes without dry-run
- no tests or manual QA notes
- vague summaries
- PRs opened from stale `main`
