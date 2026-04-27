# Repository Agent Guide
Version: 2026-04-28

## Purpose

This repository contains internal tooling and automation.

## Repository Type

Current type: internal tooling.

## Default Mode

Work on a branch from latest `main`.

Use atomic commits.

Verify before completion.

Return a review pack.

## Stop Before Touching

Ask before changing:

- production data
- secrets
- environment variables
- destructive commands
- scheduled jobs
- scraper behaviour
- external API usage
- data deletion

## Automation Safety

For scripts and jobs:

- include dry-run mode where feasible
- log every run
- validate inputs before write
- make writes idempotent
- include rollback or recovery notes

## Review Pack

Return the standard review pack at handoff.
