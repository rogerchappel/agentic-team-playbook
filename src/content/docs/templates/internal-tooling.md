---
title: Internal Tooling
description: Agent instructions for scripts, jobs, and operational tools.
---

Use this for internal automation, scripts, schedulers, and data tools.

## Install

```bash
curl -fsSL https://raw.githubusercontent.com/rogerchappel/agentic-team-playbook/main/examples/internal-tooling-AGENTS.md -o AGENTS.md
```

## Key Rules

- include dry-run mode where feasible
- log every run
- validate before write
- make writes idempotent
- split broad diffs before committing
- stop before production data, secrets, destructive commands, or scheduled jobs

## Source

The example lives in [`examples/internal-tooling-AGENTS.md`](https://github.com/rogerchappel/agentic-team-playbook/blob/main/examples/internal-tooling-AGENTS.md).
