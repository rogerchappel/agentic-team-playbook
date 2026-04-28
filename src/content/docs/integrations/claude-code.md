---
title: Claude Code
description: Add the playbook to Claude Code projects.
---

Claude Code commonly uses `CLAUDE.md` for project instructions.

The simplest pattern is to keep `AGENTS.md` as the source of truth and make `CLAUDE.md` point to it.

```bash
curl -fsSL https://raw.githubusercontent.com/rogerchappel/agentic-team-playbook/main/templates/AGENTS.md -o AGENTS.md
cat > CLAUDE.md <<'EOF'
# Claude Project Instructions

Follow `AGENTS.md` first. It defines the branch-first workflow, atomic commit policy, risk escalation rules, verification requirement, and review pack format for this repository.
EOF
```

## Why This Works

`AGENTS.md` becomes portable across agent systems.

`CLAUDE.md` stays small and tool-specific.

## Add Repo Context

If the repo already has useful Claude context, preserve it. Add the pointer near the top and leave the domain notes below it.

## Good First Test

Ask Claude Code:

```text
Read CLAUDE.md and AGENTS.md. Report objective, expected blast radius, likely files, commit plan, verification plan, and risk level before editing.
```

It should plan first and preserve the branch-first, atomic-commit workflow.

## Reference

- [Claude Code docs](https://code.claude.com/docs)
