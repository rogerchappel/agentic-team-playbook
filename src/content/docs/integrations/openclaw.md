---
title: OpenClaw
description: Add the playbook to OpenClaw local workspaces.
---

OpenClaw workspaces benefit from the same root `AGENTS.md` pattern.

From the workspace or repo root:

```bash
curl -fsSL https://raw.githubusercontent.com/rogerchappel/agentic-team-playbook/main/templates/AGENTS.md -o AGENTS.md
```

Then customise:

- local commands
- agent launch rules
- branch and PR expectations
- risk escalation areas
- verification gates

## Local-Only CLIs

If your OpenClaw setup is local-only, keep the policy local and do not open upstream PRs just to update private operating instructions.

Use the playbook as an importable baseline, not as a reason to publish local config.

## Recommended Pattern

Use `AGENTS.md` for shared instructions and scoped `AGENTS.md` files for subdirectories with special rules.
