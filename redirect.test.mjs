import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const destination = 'https://williamzujkowski.github.io/progress-quest-ii/';

test('the former project page immediately and accessibly redirects', async () => {
  const html = await readFile(new URL('./docs/index.html', import.meta.url), 'utf8');

  assert.match(html, new RegExp(`<link rel="canonical" href="${destination}"`));
  assert.match(html, new RegExp(`<meta http-equiv="refresh" content="0; url=${destination}"`));
  assert.match(html, new RegExp(`<a href="${destination}"`));
  assert.doesNotMatch(html, /<script|serviceWorker|analytics/i);
});
