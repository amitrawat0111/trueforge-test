const { test } = require('node:test');
const assert = require('node:assert');
const { memoize } = require('../src/memoize');

test('memoize is exported as a function', () => {
  assert.strictEqual(typeof memoize, 'function');
});

test('memoize returns a function', () => {
  const fn = memoize(function () { return 1; });
  assert.strictEqual(typeof fn, 'function');
});

test('repeated calls with same arguments return cached result and do not re-execute fn', () => {
  let calls = 0;
  const fn = memoize(function (a, b) {
    calls += 1;
    return a + b;
  });

  assert.strictEqual(fn(1, 2), 3);
  assert.strictEqual(calls, 1);

  assert.strictEqual(fn(1, 2), 3);
  assert.strictEqual(calls, 1); // not re-executed
});

test('different arguments produce and cache separate results', () => {
  let calls = 0;
  const fn = memoize(function (a, b) {
    calls += 1;
    return a + b;
  });

  assert.strictEqual(fn(1, 2), 3);
  assert.strictEqual(fn(3, 4), 7);
  assert.strictEqual(calls, 2);

  // cached: no further execution
  assert.strictEqual(fn(1, 2), 3);
  assert.strictEqual(fn(3, 4), 7);
  assert.strictEqual(calls, 2);
});

test('returned function preserves this context when calling fn', () => {
  const fn = memoize(function (x) {
    return x * this.multiplier;
  });

  const obj = { multiplier: 10, compute: fn };

  // this.multiplier is accessible — fn was called with correct this
  assert.strictEqual(obj.compute(5), 50);
  // cached result still correct
  assert.strictEqual(obj.compute(5), 50);
  // different arg, still uses this correctly
  assert.strictEqual(obj.compute(3), 30);
});

test('this context is correctly bound on first execution', () => {
  let capturedThis = null;
  const fn = memoize(function (x) {
    capturedThis = this;
    return x;
  });

  const obj = { multiplier: 10, compute: fn };
  obj.compute(1);

  assert.strictEqual(capturedThis, obj);
});

test('works with no arguments', () => {
  let calls = 0;
  const fn = memoize(function () {
    calls += 1;
    return 42;
  });

  assert.strictEqual(fn(), 42);
  assert.strictEqual(fn(), 42);
  assert.strictEqual(calls, 1);
});

test('non-function fn throws TypeError', () => {
  assert.throws(() => memoize(42), TypeError);
  assert.throws(() => memoize('abc'), TypeError);
  assert.throws(() => memoize(null), TypeError);
  assert.throws(() => memoize(undefined), TypeError);
  assert.throws(() => memoize({}), TypeError);
});
