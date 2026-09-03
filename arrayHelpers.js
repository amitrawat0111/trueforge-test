/**
 * Array Utility Helpers
 * 
 * Production-ready utility functions for common array operations:
 * - unique: Removes duplicate values from an array
 * - chunk: Splits an array into sub-arrays of specified size
 * - flatten: Flattens nested arrays to a specified depth or completely
 */

/**
 * Returns a new array containing only unique values from the input array,
 * preserving the order of initial occurrence.
 *
 * @param {Array} array - The array from which to filter duplicates.
 * @returns {Array} A new array containing unique values.
 * @throws {TypeError} If the input is not an array.
 * 
 * @example
 * unique([1, 2, 2, 3, 1, 'a', 'a']); // [1, 2, 3, 'a']
 */
function unique(array) {
  if (!Array.isArray(array)) {
    throw new TypeError(`Expected an array for unique(), received: ${typeof array}`);
  }

  return Array.from(new Set(array));
}

/**
 * Splits an array into smaller sub-arrays (chunks) of a specified size.
 *
 * @param {Array} array - The array to split into chunks.
 * @param {number} [size=1] - The maximum size of each chunk.
 * @returns {Array<Array>} A new array containing the chunked sub-arrays.
 * @throws {TypeError} If array is not an array or size is not a number.
 * @throws {RangeError} If size is not an integer or is less than 1.
 * 
 * @example
 * chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]
 */
function chunk(array, size = 1) {
  if (!Array.isArray(array)) {
    throw new TypeError(`Expected an array for chunk(), received: ${typeof array}`);
  }

  if (typeof size !== 'number' || Number.isNaN(size)) {
    throw new TypeError(`Chunk size must be a valid number, received: ${typeof size}`);
  }

  if (!Number.isInteger(size) || size < 1) {
    throw new RangeError(`Chunk size must be a positive integer greater than 0, received: ${size}`);
  }

  const result = [];
  const length = array.length;

  for (let i = 0; i < length; i += size) {
    result.push(array.slice(i, i + size));
  }

  return result;
}

/**
 * Flattens a nested array up to the specified depth (defaults to Infinity for complete flattening).
 *
 * @param {Array} array - The nested array to flatten.
 * @param {number} [depth=Infinity] - The maximum recursion depth.
 * @returns {Array} A new flattened array.
 * @throws {TypeError} If array is not an array or depth is not a non-negative number.
 * 
 * @example
 * flatten([1, [2, [3, [4]], 5]]); // [1, 2, 3, 4, 5]
 * flatten([1, [2, [3]]], 1);      // [1, 2, [3]]
 */
function flatten(array, depth = Infinity) {
  if (!Array.isArray(array)) {
    throw new TypeError(`Expected an array for flatten(), received: ${typeof array}`);
  }

  if (typeof depth !== 'number' || Number.isNaN(depth) || depth < 0) {
    throw new TypeError(`Depth must be a non-negative number, received: ${depth}`);
  }

  const result = [];

  function recurse(items, currentDepth) {
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (Array.isArray(item) && currentDepth < depth) {
        recurse(item, currentDepth + 1);
      } else {
        result.push(item);
      }
    }
  }

  recurse(array, 0);
  return result;
}

// Support both CommonJS and ES Module formats
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    unique,
    chunk,
    flatten
  };
}

export { unique, chunk, flatten };