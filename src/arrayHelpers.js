/**
 * Returns a new array with duplicates removed, preserving first-seen order.
 *
 * @param {Array} array - The input array to process.
 * @returns {Array} A new array containing unique elements.
 * @throws {TypeError} If the input is not an array.
 */
function unique(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('Input must be an array');
  }
  return Array.from(new Set(array));
}

/**
 * Splits an array into consecutive groups of the specified size.
 *
 * @param {Array} array - The input array to chunk.
 * @param {number} size - The size of each chunk (must be at least 1).
 * @returns {Array<Array>} An array of chunks.
 * @throws {TypeError} If array is not an array.
 * @throws {RangeError} If size is less than 1.
 */
function chunk(array, size) {
  if (!Array.isArray(array)) {
    throw new TypeError('Input must be an array');
  }
  if (typeof size !== 'number' || Number.isNaN(size) || size < 1) {
    throw new RangeError('Size must be a number greater than or equal to 1');
  }

  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

/**
 * Returns a new array with the elements sorted in ascending order.
 * Does not mutate the original array.
 *
 * @param {Array} array - The input array to sort.
 * @returns {Array} A new array sorted in ascending order.
 * @throws {TypeError} If the input is not an array.
 */
function sort(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('Input must be an array');
  }
  return [...array].sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
}

module.exports = {
  unique,
  chunk,
  sort,
};
