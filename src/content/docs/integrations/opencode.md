---
title: OpenCode
description: Add the playbook to OpenCode projects.
---

OpenCode can read `AGENTS.md`, so the cleanest setup is to install the repository guide directly at the repo root.

```bash
curl -fsSL https://raw.githubusercontent.com/rogerchappel/agentic-team-playbook/main/templates/AGENTS.md -o AGENTS.md
```

Then edit `AGENTS.md` for:

- repo purpose
- repo type
- real install/test/lint/typecheck/build commands
- branch and PR expectations
- risk escalation areas
- verification gates

## Recommended Pattern

Keep `AGENTS.md` as the shared source of truth across agent systems.

If you use OpenCode-specific configuration, keep it focused on model, permissions, tools, and agent roles. Put durable engineering workflow rules in `AGENTS.md` so other agents can share the same policy.

## Good First Test

Ask OpenCode:

```text
Read AGENTS.md and report objective, expected blast radius, likely files, commit plan, verification plan, and risk level before editing.
```

It should describe the plan before making changes.

## Reference

- [OpenCode rules docs](https://open-code.ai/en/docs/rules)
