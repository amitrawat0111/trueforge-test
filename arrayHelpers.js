/**
 * Utility functions for common array operations: unique, chunk, and flatten.
 * @module arrayHelpers
 */

/**
 * Returns a new array containing only the unique values from the input array.
 * Preserves the order of first occurrence.
 *
 * @param {Array} array - The array to filter for unique values.
 * @returns {Array} A new array with unique values.
 * @throws {TypeError} If the input is not an array.
 *
 * @example
 * unique([1, 2, 2, 3, 1]); // [1, 2, 3]
 * unique(['a', 'b', 'a', 'c']); // ['a', 'b', 'c']
 */
export function unique(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('Invalid argument: Expected an array.');
  }

  return Array.from(new Set(array));
}

/**
 * Splits an array into chunks of a specified size.
 * If the array cannot be split evenly, the final chunk contains the remaining elements.
 *
 * @param {Array} array - The array to chunk.
 * @param {number} [size=1] - The size of each chunk (must be a positive integer).
 * @returns {Array<Array>} A new array of array chunks.
 * @throws {TypeError} If the first argument is not an array or size is not a number.
 * @throws {RangeError} If size is less than 1.
 *
 * @example
 * chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]
 * chunk(['a', 'b', 'c'], 1); // [['a'], ['b'], ['c']]
 */
export function chunk(array, size = 1) {
  if (!Array.isArray(array)) {
    throw new TypeError('Invalid argument: First parameter must be an array.');
  }

  if (typeof size !== 'number' || Number.isNaN(size)) {
    throw new TypeError('Invalid argument: Size must be a valid number.');
  }

  const chunkSize = Math.floor(size);
  if (chunkSize < 1) {
    throw new RangeError('Invalid argument: Size must be an integer greater than 0.');
  }

  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }

  return result;
}

/**
 * Recursively flattens nested arrays into a single non-nested array.
 *
 * @param {Array} array - The nested array to flatten.
 * @returns {Array} A new flattened array.
 * @throws {TypeError} If the input is not an array.
 *
 * @example
 * flatten([1, [2, [3, [4]], 5]]); // [1, 2, 3, 4, 5]
 * flatten([['a'], ['b', ['c']]]); // ['a', 'b', 'c']
 */
export function flatten(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('Invalid argument: Expected an array.');
  }

  const result = [];

  function recurse(items) {
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (Array.isArray(item)) {
        recurse(item);
      } else {
        result.push(item);
      }
    }
  }

  recurse(array);
  return result;
}

// Node.js / CommonJS export compatibility
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    unique,
    chunk,
    flatten
  };
}