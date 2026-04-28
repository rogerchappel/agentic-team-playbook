---
title: Overview
description: What this playbook is for and how to use it.
---

AI coding agents are fast. Durable engineering systems are deliberate for a reason.

This playbook helps teams treat agentic programmers like durable workers: isolated by branch, checkpointed by atomic commit, verified before handoff, and stopped by risk gates before they can damage production trust.

The aim is not to make agents busier. The aim is to make their work survive review, rollback, incident pressure, and maintainer scrutiny.

## What You Get

- global agent operating policy
- repo-level `AGENTS.md` template
- PR template
- review pack template
- blocker template
- risk escalation checklist
- verification checklist
- examples for common repo types

## Durable Agent Concepts

- branch = isolated execution context
- atomic commit = checkpoint
- review pack = execution log
- verification = health check
- rollback plan = recovery path
- risk escalation = circuit breaker
- dry-run and idempotency = safe retry semantics
- pull request = human review boundary

## The Default Loop

1. state the objective
2. state the expected blast radius
3. create a branch from latest `main`
4. make the smallest coherent change
5. review `git status` and `git diff`
6. stage only intended files
7. run relevant verification
8. commit one reviewable intent
9. rebase before PR
10. open a focused PR
11. return a review pack

## The Standard

The standard is not "agents make lots of commits."

The standard is durable engineering throughput: small branches, reviewable checkpoints, clear verification, explicit risk, and no production surprises.
