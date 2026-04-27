# Repository Agent Guide
Version: 2026-04-28

## Purpose

This repository runs production SaaS software.

## Repository Type

Current type: production SaaS.

## Default Mode

Work on a branch from latest `main`.

Use atomic commits.

Open a PR.

Do not merge without explicit human approval.

## Stop Before Touching

Ask before changing:

- auth
- security
- payments
- billing
- production data
- migrations
- secrets
- launch config
- user-facing destructive actions

## Production Data

For data sync work:

- dry-run mode is required
- idempotent upsert is preferred
- validation before write is required
- manual run command is required
- failure report is required
- no deletes unless explicitly approved

## Review Pack

Return the standard review pack at handoff.
