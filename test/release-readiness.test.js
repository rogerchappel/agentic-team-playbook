import { describe, it } from 'node:test';
import assert from 'node:assert';
import { existsSync, readFileSync } from 'node:fs';
import packageJson from '../package.json' with { type: 'json' };

const read = (path) => readFileSync(path, 'utf8');

describe('release readiness documentation', () => {
  it('keeps README quickstart downloads pointed at shipped files', () => {
    const readme = read('README.md');
    const rawFilePattern = /raw\.githubusercontent\.com\/rogerchappel\/agentic-team-playbook\/main\/([^\s)]+)/g;
    const rawFiles = [...readme.matchAll(rawFilePattern)].map((match) => match[1]);

    assert.ok(rawFiles.includes('templates/AGENTS.md'));
    assert.ok(rawFiles.includes('.github/pull_request_template.md'));
    assert.ok(rawFiles.includes('docs/global-agent-operating-policy.md'));

    for (const path of rawFiles) {
      assert.ok(existsSync(path), `${path} should exist for README install commands`);
    }
  });

  it('ships every README-linked template and checklist file in the npm package allowlist', () => {
    const readme = read('README.md');
    const localLinkPattern = /\((docs\/[^)#]+|templates\/[^)#]+)\)/g;
    const localLinks = [...readme.matchAll(localLinkPattern)].map((match) => match[1]);

    assert.ok(localLinks.length > 0, 'README should link to local docs and templates');

    for (const path of localLinks) {
      assert.ok(existsSync(path), `${path} should exist`);
      assert.ok(
        packageJson.files.some((entry) => path === entry || path.startsWith(`${entry}/`)),
        `${path} should be covered by package.json files`,
      );
    }
  });

  it('keeps docs quickstart in sync with the README install commands', () => {
    const readme = read('README.md');
    const quickstart = read('src/content/docs/quickstart.md');

    for (const requiredCommand of [
      'curl -fsSL https://raw.githubusercontent.com/rogerchappel/agentic-team-playbook/main/templates/AGENTS.md -o AGENTS.md',
      'curl -fsSL https://raw.githubusercontent.com/rogerchappel/agentic-team-playbook/main/.github/pull_request_template.md -o .github/pull_request_template.md',
      'curl -fsSL https://raw.githubusercontent.com/rogerchappel/agentic-team-playbook/main/docs/global-agent-operating-policy.md -o ~/.codex/AGENTS.md',
    ]) {
      assert.ok(readme.includes(requiredCommand), `README should include ${requiredCommand}`);
      assert.ok(quickstart.includes(requiredCommand), `docs quickstart should include ${requiredCommand}`);
    }
  });
});
