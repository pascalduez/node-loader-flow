import assert from 'node:assert/strict';
import { test } from 'node:test';

import { dummy } from './source.js';

test('node-loader-flow', () => {
  assert.equal(dummy(), 'It works!');
});
