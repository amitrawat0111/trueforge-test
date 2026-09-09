const { test } = require('node:test');
const assert = require('node:assert');
const { slugify } = require('../src/stringHelpers');

test('slugify is exported', () => {
  assert.strictEqual(typeof slugify, 'function');
});

test('slugify("  Hello, World!  ") returns "hello-world"', () => {
  assert.strictEqual(slugify('  Hello, World!  '), 'hello-world');
});

test('slugify("a--b__c") returns "a-b-c"', () => {
  assert.strictEqual(slugify('a--b__c'), 'a-b-c');
});

test('collapses consecutive hyphens into a single hyphen', () => {
  assert.strictEqual(slugify('a---b___c'), 'a-b-c');
  assert.strictEqual(slugify('a-b--c--d'), 'a-b-c-d');
  assert.strictEqual(slugify('   ---   '), '');
});

test('non-string input throws TypeError', () => {
  assert.throws(() => slugify(42), TypeError);
  assert.throws(() => slugify(null), TypeError);
  assert.throws(() => slugify(undefined), TypeError);
  assert.throws(() => slugify({}), TypeError);
});
