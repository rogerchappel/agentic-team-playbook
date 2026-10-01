import { it } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { existsSync, statSync } from 'node:fs';
import { readFileSync } from 'node:fs';
import packageJson from '../package.json' with { type: 'json' };

it('includes every declared package path in the npm archive', () => {
  const output = execFileSync('npm', ['pack', '--dry-run', '--json'], { encoding: 'utf8' });
  const [{ files }] = JSON.parse(output);
  const archivedPaths = new Set(files.map(({ path }) => path));

  for (const declaredPath of packageJson.files) {
    const normalizedPath = declaredPath.replace(/\/$/, '');
    const isGlob = /[*?{}[\]]/.test(normalizedPath);

    if (isGlob) {
      assert.ok(
        [...archivedPaths].some((path) => path.startsWith(normalizedPath.split(/[*?{}[\]]/, 1)[0])),
        `package.json files pattern ${declaredPath} should match packed content`,
      );
      continue;
    }

    const hasExactPath = archivedPaths.has(normalizedPath);
    const hasDirectoryContents = [...archivedPaths].some((path) => path.startsWith(`${normalizedPath}/`));
    const isDirectory = existsSync(normalizedPath) && statSync(normalizedPath).isDirectory();

    assert.ok(
      hasExactPath || (isDirectory && hasDirectoryContents),
      `package.json files entry ${declaredPath} should exist in the npm archive`,
    );
  }
});
