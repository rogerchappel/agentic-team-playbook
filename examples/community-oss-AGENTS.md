# Repository Agent Guide
Version: 2026-04-28

## Purpose

This repository is community open-source software.

## Repository Type

Current type: community OSS.

## Default Mode

Work on a branch from latest `main`.

Use atomic commits.

Open a focused PR.

Do not merge without maintainer approval.

## Hard Commit Gate

Before committing, inspect `git diff --stat` and `git status --short`.

If the staged or unstaged diff touches more than 8 files, stop and produce a commit split plan before committing.

A single commit touching more than 8 files is only allowed for an initial scaffold, generated lockfile/vendor output, mechanical rename/move, formatting-only pass, or explicit human approval.

Otherwise, split the diff into multiple atomic commits by reviewable intent.

If a PR touches more than 8 files and has only one commit, assume the commit history is wrong and split it before returning the review pack.

Do not default to one commit per file. Split by reviewable intent first, and split by file only when each file can be reviewed, reverted, and verified independently.

## Commit As You Go

After each independently reviewable change unit, run the smallest relevant verification, stage only that unit, commit it, and continue.

## Maintainer Trust

Prefer:

- small PRs
- clear public behaviour notes
- compatibility-preserving changes
- docs when behaviour changes
- tests for regressions

Avoid:

- broad rewrites
- unrelated formatting churn
- hidden behaviour changes
- dependency upgrades mixed with feature work
- unsolicited issue/PR comments

## Review Pack

Return the standard review pack at handoff.
