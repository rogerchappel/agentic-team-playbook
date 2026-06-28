import { describe, it } from 'node:test';
import assert from 'node:assert';
import { existsSync, readFileSync } from 'node:fs';
import { execSync } from 'node:child_process';

describe('agentic-team-playbook site structure', () => {
  it('should have required documentation files', () => {
    const required = ['README.md', 'AGENTS.md', 'package.json'];
    for (const f of required) {
      assert.ok(existsSync(f), f + ' should exist');
    }
  });

  it('should have astro config', () => {
    assert.ok(existsSync('astro.config.mjs') || existsSync('astro.config.ts'),
      'astro.config.mjs should exist');
  });

  it('ships a repo instruction template with review and verification guidance', () => {
    const template = readFileSync('templates/AGENTS.md', 'utf8');
    assert.match(template, /Verification/i);
    assert.match(template, /Review Pack/i);
    assert.match(template, /Stop Before Touching/i);
  });

  it('package.json should build', () => {
    const out = execSync('npm run build', { encoding: 'utf8', timeout: 60000 });
    assert.ok(out.includes('Build') || out.includes('complete') || out.includes('✓'),
      'build should succeed');
  });
});
