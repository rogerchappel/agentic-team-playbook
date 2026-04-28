---
title: Codex
description: Add the playbook to Codex global and repo instructions.
---

Codex should read a global baseline plus the nearest repo `AGENTS.md`.

## Global Install

```bash
mkdir -p ~/.codex
curl -fsSL https://raw.githubusercontent.com/rogerchappel/agentic-team-playbook/main/docs/global-agent-operating-policy.md -o ~/.codex/AGENTS.md
```

## Repo Install

From your repo root:

```bash
curl -fsSL https://raw.githubusercontent.com/rogerchappel/agentic-team-playbook/main/templates/AGENTS.md -o AGENTS.md
```

Edit the file for the repo purpose, commands, layout, and risk areas.

## Recommended UX Instructions

If your Codex app has a separate custom-instructions field, use the global policy as the baseline and keep repo-specific details in `AGENTS.md`.

Avoid duplicating long repo command lists in global instructions. They belong in the repository.

## Good First Test

Ask Codex:

```text
Read the repo instructions and report objective, blast radius, likely files, commit plan, verification plan, and risk level before editing.
```

If it starts editing immediately on a production repo, tighten the global policy.
