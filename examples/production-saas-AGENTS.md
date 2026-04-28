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

## Hard Commit Gate

Before committing, inspect `git diff --stat` and `git status --short`.

If the staged or unstaged diff touches more than 8 files, stop and produce a commit split plan before committing.

A single commit touching more than 8 files is only allowed for an initial scaffold, generated lockfile/vendor output, mechanical rename/move, formatting-only pass, or explicit human approval.

Otherwise, split the diff into multiple atomic commits by reviewable intent.

If a PR touches more than 8 files and has only one commit, assume the commit history is wrong and split it before returning the review pack.

Do not default to one commit per file. Split by reviewable intent first, and split by file only when each file can be reviewed, reverted, and verified independently.

## Commit As You Go

After each independently reviewable change unit, run the smallest relevant verification, stage only that unit, commit it, and continue.

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
