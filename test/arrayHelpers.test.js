'use strict';

var assert = require('assert');
var helpers = require('../src/arrayHelpers');
var unique = helpers.unique;
var chunk = helpers.chunk;

var passed = 0;
var failed = 0;

function test(name, fn) {
  try {
    fn();
    passed++;
  } catch (err) {
    failed++;
    console.error('FAIL: ' + name + ' — ' + err.message);
  }
}

// --- unique ---

test('unique removes duplicates and preserves first-seen order', function () {
  assert.deepStrictEqual(unique([1, 2, 2, 3, 1]), [1, 2, 3]);
});

test('unique handles strings', function () {
  assert.deepStrictEqual(unique(['a', 'b', 'a', 'c']), ['a', 'b', 'c']);
});

test('unique returns a new array', function () {
  var input = [1, 2, 3];
  var result = unique(input);
  assert.notStrictEqual(result, input);
  assert.deepStrictEqual(result, [1, 2, 3]);
});

test('unique on empty array returns empty array', function () {
  assert.deepStrictEqual(unique([]), []);
});

test('unique treats NaN as equal', function () {
  assert.deepStrictEqual(unique([NaN, NaN, 1]), [NaN, 1]);
});

test('unique throws TypeError on non-array', function () {
  assert.throws(function () { unique(null); }, TypeError);
  assert.throws(function () { unique('abc'); }, TypeError);
  assert.throws(function () { unique({ 0: 1, length: 1 }); }, TypeError);
});

// --- chunk ---

test('chunk splits into consecutive groups', function () {
  assert.deepStrictEqual(chunk([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);
});

test('chunk with size 1 wraps each element', function () {
  assert.deepStrictEqual(chunk([1, 2, 3], 1), [[1], [2], [3]]);
});

test('chunk with exact multiple returns equal groups', function () {
  assert.deepStrictEqual(chunk([1, 2, 3, 4], 2), [[1, 2], [3, 4]]);
});

test('chunk on empty array returns empty array', function () {
  assert.deepStrictEqual(chunk([], 3), []);
});

test('chunk throws RangeError for size < 1', function () {
  assert.throws(function () { chunk([1, 2], 0); }, RangeError);
  assert.throws(function () { chunk([1, 2], -1); }, RangeError);
});

test('chunk throws RangeError for non-integer size', function () {
  assert.throws(function () { chunk([1, 2], 2.5); }, RangeError);
});

test('chunk throws TypeError on non-array', function () {
  assert.throws(function () { chunk(null, 2); }, TypeError);
  assert.throws(function () { chunk('abc', 2); }, TypeError);
});

// --- results ---

console.log('Passed: ' + passed + ', Failed: ' + failed);
if (failed > 0) {
  process.exit(1);
}
