---
title: Quickstart
description: Install the playbook into a repo in two minutes.
---

Start with the repo-level guide and PR template.

```bash
curl -fsSL https://raw.githubusercontent.com/rogerchappel/agentic-team-playbook/main/templates/AGENTS.md -o AGENTS.md
mkdir -p .github
curl -fsSL https://raw.githubusercontent.com/rogerchappel/agentic-team-playbook/main/.github/pull_request_template.md -o .github/pull_request_template.md
```

Then edit `AGENTS.md`:

- replace the repo purpose
- choose the repo type
- list real commands
- list risk areas
- add repo-specific verification

## Global Agent Policy

For Codex-style global instructions:

```bash
mkdir -p ~/.codex
curl -fsSL https://raw.githubusercontent.com/rogerchappel/agentic-team-playbook/main/docs/global-agent-operating-policy.md -o ~/.codex/AGENTS.md
```

## Runtime Adapters

Keep `AGENTS.md` as the shared source of truth, then add a small adapter file when a runtime expects one.

Claude Code:

```bash
cat > CLAUDE.md <<'EOF'
# Claude Code Instructions

Follow AGENTS.md first. It defines the branch-first workflow, atomic commit policy, risk escalation rules, verification requirement, and review pack format for this repository.
EOF
```

Gemini CLI:

```bash
cat > GEMINI.md <<'EOF'
# Gemini CLI Instructions

Follow AGENTS.md first. It defines the branch-first workflow, atomic commit policy, risk escalation rules, verification requirement, and review pack format for this repository.
EOF
```

OpenCode can use the root `AGENTS.md` directly.

## What Good Looks Like

Agents should start tasks by stating:

1. objective
2. expected blast radius
3. files likely to change
4. commit plan
5. verification plan
6. risk level

They should end with a review pack.

## Minimal Review Pack

```md
## Review Pack
Repo:
Branch:
PR:
Task:
Status:
Summary:
Commits:
Files changed:
Verification:
Risk level:
Rollback plan:
Human decision needed:
Next recommended task:
```
