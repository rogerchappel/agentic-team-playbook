---
title: Overview
description: What this playbook is for and how to use it.
---

AI agents are fast. Engineering systems are slow for a reason.

This playbook helps teams get agent speed without losing reviewability, rollback, production safety, or maintainer trust.

## What You Get

- global agent operating policy
- repo-level `AGENTS.md` template
- PR template
- review pack template
- blocker template
- risk escalation checklist
- verification checklist
- examples for common repo types

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

The standard is clean engineering throughput: small branches, reviewable commits, clear verification, explicit risk, and no production surprises.
