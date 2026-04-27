# Agentic Team Playbook

Reusable operating instructions, templates, and checklists for teams using AI coding agents in real software projects.

The goal is simple: move quickly while keeping work reviewable, reversible, verifiable, and safe.

## What This Provides

- A global agent operating policy
- A repo-level `AGENTS.md` template
- Review pack and blocker templates
- Risk escalation checklist
- Verification checklist
- Pull request template
- Example `AGENTS.md` files for production, open-source, and internal tooling repos

## Who This Is For

Use this if you run agents across:

- production SaaS
- company/client repos
- community OSS
- internal tools
- data pipelines
- mobile/web apps
- AI and automation systems

## Quick Start

Copy the repo template into your project:

```bash
cp templates/AGENTS.md /path/to/your/repo/AGENTS.md
```

Then edit:

- repo purpose
- repo type
- layout
- commands
- stop-before-touching list
- verification requirements

For global Codex or agent instructions, start with:

```bash
cp docs/global-agent-operating-policy.md ~/.codex/AGENTS.md
```

Adjust the path for your agent runtime.

## Core Workflow

Before editing, agents should report:

1. objective
2. expected blast radius
3. files likely to change
4. commit plan
5. verification plan
6. risk level

Then:

1. branch from latest `main`
2. make the smallest coherent change
3. review `git status`
4. review `git diff`
5. stage only intended files
6. run the smallest relevant verification
7. commit atomically
8. rebase before PR
9. open a well-described PR
10. return a review pack

## Principles

- One commit equals one reviewable intent.
- Verification is required before claiming success.
- Risky production areas require human approval.
- PRs should be small enough to review.
- Agents should stop guessing when blocked.
- Do not merge production or community work without human approval.

## Templates

- [Global policy](docs/global-agent-operating-policy.md)
- [Repo AGENTS.md template](templates/AGENTS.md)
- [Review pack template](templates/review-pack.md)
- [Blocker template](templates/blocker.md)
- [PR template](templates/pull_request_template.md)

## Checklists

- [Risk escalation](docs/risk-escalation.md)
- [Verification](docs/verification.md)
- [Atomic commits](docs/atomic-commits.md)
- [Operating a high-throughput agentic team](docs/high-throughput-agentic-team.md)

## License

MIT
