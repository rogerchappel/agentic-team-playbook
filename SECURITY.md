# Security Policy

## Reporting A Vulnerability

If you find a security issue in this repository, please open a private security advisory on GitHub if available, or contact the maintainer directly.

Do not publish exploit details in a public issue.

## Scope

This repository contains documentation and templates. Security concerns may include:

- templates that encourage unsafe production changes
- examples that expose secrets or credentials
- automation guidance that could cause data loss
- instructions that weaken review, verification, or approval gates

## Template Safety

Security-sensitive guidance should require human approval before touching:

- auth
- security
- payments
- production data
- migrations
- secrets
- destructive commands
- production configuration

## Response Expectations

The maintainer will review reports as time allows and prioritise issues that could cause unsafe real-world use of the templates.
