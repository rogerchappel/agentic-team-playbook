---
title: Verification
description: The smallest relevant proof before claiming success.
---

Every completed task needs verification.

Start with the smallest relevant check. Do not run broad expensive suites by default when a targeted check proves the touched surface.

## Verification Ladder

1. targeted unit test
2. targeted integration test
3. typecheck
4. lint
5. build
6. smoke command
7. manual QA checklist

## Examples

Docs-only:

```bash
git diff --check
```

TypeScript utility:

```bash
pnpm test path/to/file.test.ts
pnpm typecheck
```

Next.js UI change:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

Python API endpoint:

```bash
pytest tests/test_endpoint.py
ruff check .
mypy .
```

## If Verification Cannot Run

Say why, and provide the exact command:

```md
Verification not run: local dependencies are not installed.

Run:
pnpm install
pnpm test
```
