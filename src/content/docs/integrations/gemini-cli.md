---
title: Gemini CLI
description: Add the playbook to Gemini CLI projects.
---

Gemini CLI uses `GEMINI.md` for project guidance. Keep `AGENTS.md` as the portable team policy and make `GEMINI.md` point to it.

```bash
curl -fsSL https://raw.githubusercontent.com/rogerchappel/agentic-team-playbook/main/templates/AGENTS.md -o AGENTS.md
cat > GEMINI.md <<'EOF'
# Gemini CLI Instructions

Follow AGENTS.md first. It defines the branch-first workflow, atomic commit policy, risk escalation rules, verification requirement, and review pack format for this repository.
EOF
```

## Why Use Both Files

`AGENTS.md` keeps the workflow portable across Codex, OpenCode, and other tools.

`GEMINI.md` gives Gemini CLI the runtime-specific entry point it expects.

## Add Repo Context

After installing, edit `AGENTS.md` with:

- repo purpose
- repo type
- real commands
- risk areas
- verification requirements
- PR expectations

Keep `GEMINI.md` short unless Gemini needs tool-specific notes that do not apply to other agents.

## Good First Test

Ask Gemini CLI:

```text
Read GEMINI.md and AGENTS.md. Report objective, expected blast radius, likely files, commit plan, verification plan, and risk level before editing.
```

It should plan first and preserve the branch-first, atomic-commit workflow.

## Reference

- [Gemini CLI GEMINI.md docs](https://github.com/google-gemini/gemini-cli/blob/main/docs/cli/gemini-md.md)
