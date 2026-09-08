/**
 * Returns a new array with duplicates removed, preserving first-seen order.
 *
 * @param {Array} array - The input array.
 * @returns {Array} A new array containing only the first occurrence of each element.
 * @throws {TypeError} If the argument is not an array.
 *
 * @example
 * unique([1, 2, 1, 3, 2]); // [1, 2, 3]
 */
function unique(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('unique: argument must be an array');
  }
  return [...new Set(array)];
}

/**
 * Splits an array into consecutive groups of the given size.
 * The last group may be shorter if the array length is not evenly divisible.
 *
 * @param {Array} array - The input array.
 * @param {number} size - The size of each chunk (must be >= 1).
 * @returns {Array<Array>} An array of chunk arrays.
 * @throws {TypeError} If `array` is not an array or `size` is not a number.
 * @throws {RangeError} If `size` is less than 1.
 *
 * @example
 * chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]
 */
function chunk(array, size) {
  if (!Array.isArray(array)) {
    throw new TypeError('chunk: first argument must be an array');
  }
  if (typeof size !== 'number') {
    throw new TypeError('chunk: size must be a number');
  }
  if (size < 1) {
    throw new RangeError('chunk: size must be >= 1');
  }
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

module.exports = { unique, chunk };
