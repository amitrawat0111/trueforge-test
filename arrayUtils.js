/**
 * arrayUtils.js
 * Utility functions for array operations
 */

/**
 * Searches for an element in an array and returns its index
 * @param {Array} array - The array to search in
 * @param {*} searchElement - The element to search for
 * @param {number} [fromIndex=0] - The index to start searching from
 * @returns {number} The index of the element if found, -1 otherwise
 * @throws {TypeError} If array is not an array or is null/undefined
 */
function arraySearch(array, searchElement, fromIndex = 0) {
  if (!Array.isArray(array)) {
    throw new TypeError('First argument must be an array');
  }

  if (fromIndex < 0) {
    fromIndex = Math.max(0, array.length + fromIndex);
  }

  for (let i = fromIndex; i < array.length; i++) {
    if (array[i] === searchElement) {
      return i;
    }
  }

  return -1;
}

/**
 * Searches for an element in an array using a predicate function
 * @param {Array} array - The array to search in
 * @param {Function} predicate - Function to test each element (returns boolean)
 * @param {*} [thisArg] - Value to use as 'this' when executing predicate
 * @returns {number} The index of the first element that satisfies the predicate, -1 otherwise
 * @throws {TypeError} If array is not an array or predicate is not a function
 */
function arraySearchByPredicate(array, predicate, thisArg) {
  if (!Array.isArray(array)) {
    throw new TypeError('First argument must be an array');
  }

  if (typeof predicate !== 'function') {
    throw new TypeError('Second argument must be a function');
  }

  for (let i = 0; i < array.length; i++) {
    if (predicate.call(thisArg, array[i], i, array)) {
      return i;
    }
  }

  return -1;
}

/**
 * Searches for an element in an array and returns the element itself
 * @param {Array} array - The array to search in
 * @param {*} searchElement - The element to search for
 * @returns {*} The element if found, undefined otherwise
 * @throws {TypeError} If array is not an array or is null/undefined
 */
function arraySearchElement(array, searchElement) {
  const index = arraySearch(array, searchElement);
  return index !== -1 ? array[index] : undefined;
}

/**
 * Performs a binary search on a sorted array
 * @param {Array} array - The sorted array to search in
 * @param {*} searchElement - The element to search for
 * @returns {number} The index of the element if found, negative value indicating insertion point if not found
 * @throws {TypeError} If array is not an array
 */
function binarySearch(array, searchElement) {
  if (!Array.isArray(array)) {
    throw new TypeError('First argument must be an array');
  }

  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midValue = array[mid];

    if (midValue === searchElement) {
      return mid;
    }

    if (midValue < searchElement) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -(left + 1);
}

// Export functions for use in Node.js and ES6 modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    arraySearch,
    arraySearchByPredicate,
    arraySearchElement,
    binarySearch,
  };
}

// Also support ES6 export
export { arraySearch, arraySearchByPredicate, arraySearchElement, binarySearch };