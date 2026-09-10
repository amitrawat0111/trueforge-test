/**
 * Array utility helpers.
 *
 * @module arrayHelpers
 */

'use strict';

/**
 * Return a new array with duplicate values removed, preserving first-seen order.
 *
 * Equality follows SameValueZero semantics (the JavaScript `Set` default): `NaN`
 * is treated as equal to `NaN`, and objects are only considered equal when they
 * are the same reference.
 *
 * @param {Array} array - The array to deduplicate.
 * @returns {Array} A new array containing only the first occurrence of each value.
 * @throws {TypeError} If `array` is not an array.
 * @example
 * unique([1, 2, 2, 3, 1]); // [1, 2, 3]
 * unique(['a', 'b', 'a']); // ['a', 'b']
 */
function unique(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('unique(array): expected an array, got ' + typeof array);
  }
  return Array.from(new Set(array));
}

/**
 * Split an array into consecutive groups of `size`. The last group may be
 * shorter than `size` when the array length is not evenly divisible.
 *
 * @param {Array} array - The array to chunk.
 * @param {number} size - The chunk size. Must be an integer >= 1.
 * @returns {Array<Array>} A new array of sub-arrays.
 * @throws {TypeError} If `array` is not an array.
 * @throws {RangeError} If `size` is not an integer >= 1.
 * @example
 * chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]
 * chunk([1, 2, 3], 1);        // [[1], [2], [3]]
 */
function chunk(array, size) {
  if (!Array.isArray(array)) {
    throw new TypeError('chunk(array, size): expected an array, got ' + typeof array);
  }
  if (!Number.isInteger(size) || size < 1) {
    throw new RangeError('chunk(array, size): size must be an integer >= 1, got ' + size);
  }

  var result = [];
  for (var i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

module.exports = { unique: unique, chunk: chunk };
