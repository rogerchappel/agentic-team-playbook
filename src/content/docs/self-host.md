---
title: Self-Host
description: Deploy the playbook as a static docs site on your own subdomain.
---

The playbook is a static Astro site. No backend. No auth. No database.

That keeps it easy to fork, brand, and host under your own domain.

## Recommended Hosts

Use any static host:

- Cloudflare Pages
- Vercel
- Netlify
- GitHub Pages
- static files behind your own CDN

## Build Command

```bash
npm install
npm run build
```

Output directory:

```text
dist
```

## Cloudflare Pages

Recommended settings:

```text
Framework preset: Astro
Build command: npm run build
Build output directory: dist
Node version: 22
```

Then add a custom domain such as:

```text
playbook.example.com
agents.example.com
```

## Vercel

Recommended settings:

```text
Framework preset: Astro
Build command: npm run build
Output directory: dist
Install command: npm install
```

## Positioning

For a public site, keep the headline concrete:

```text
Run AI coding agents like an engineering team, not a slot machine.
```

For an internal company fork, make the first page operational:

```text
How our agents branch, commit, verify, and hand off work.
```

## Forking Guidance

If you fork this for a company:

1. keep upstream templates intact where possible
2. add company-specific risk gates
3. list real repo commands
4. add examples from your own PRs
5. keep the review pack format stable
