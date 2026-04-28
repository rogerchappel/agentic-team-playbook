---
title: Production SaaS
description: Agent instructions for production and launch-critical software.
---

Use this for production SaaS, client, and company repos.

## Install

```bash
curl -fsSL https://raw.githubusercontent.com/rogerchappel/agentic-team-playbook/main/examples/production-saas-AGENTS.md -o AGENTS.md
```

## Key Rules

- production safety beats speed
- branch from latest `main`
- use atomic commits
- split broad diffs before committing
- open a PR
- do not merge without explicit human approval
- stop before auth, security, billing, data, migrations, or secrets

## Source

The example lives in [`examples/production-saas-AGENTS.md`](https://github.com/rogerchappel/agentic-team-playbook/blob/main/examples/production-saas-AGENTS.md).
