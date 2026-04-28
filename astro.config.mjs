import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://agentic-team-playbook.pages.dev',
  integrations: [
    starlight({
      title: 'Agentic Team Playbook',
      description:
        'A field manual for making AI coding agents durable workers.',
      logo: {
        src: './src/assets/mark.svg',
        alt: 'Agentic Team Playbook',
      },
      customCss: ['./src/styles/custom.css'],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/rogerchappel/agentic-team-playbook',
        },
      ],
      sidebar: [
        {
          label: 'Start Here',
          items: [
            { label: 'Overview', slug: 'overview' },
            { label: 'Quickstart', slug: 'quickstart' },
            { label: 'Operating Model', slug: 'operating-model' },
            { label: 'Self-Host', slug: 'self-host' },
          ],
        },
        {
          label: 'Integrations',
          items: [
            { label: 'Codex', slug: 'integrations/codex' },
            { label: 'Claude Code', slug: 'integrations/claude-code' },
            { label: 'OpenClaw', slug: 'integrations/openclaw' },
          ],
        },
        {
          label: 'Playbooks',
          items: [
            { label: 'Review Packs', slug: 'playbooks/review-packs' },
            { label: 'Atomic Commits', slug: 'playbooks/atomic-commits' },
            { label: 'Risk Escalation', slug: 'playbooks/risk-escalation' },
            { label: 'Verification', slug: 'playbooks/verification' },
          ],
        },
        {
          label: 'Templates',
          items: [
            { label: 'Repository Guide', slug: 'templates/repository-guide' },
            { label: 'Production SaaS', slug: 'templates/production-saas' },
            { label: 'Community OSS', slug: 'templates/community-oss' },
            { label: 'Internal Tooling', slug: 'templates/internal-tooling' },
          ],
        },
      ],
    }),
  ],
});
