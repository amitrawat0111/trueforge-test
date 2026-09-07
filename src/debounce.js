/**
 * Creates a debounced version of the given function that delays invoking
 * it until after `waitMs` milliseconds have elapsed since the last time
 * the debounced function was called.
 *
 * @param {Function} fn - The function to debounce.
 * @param {number} waitMs - The number of milliseconds to delay.
 * @returns {Function} A new debounced function.
 * @throws {TypeError} If fn is not a function.
 * @throws {RangeError} If waitMs is less than 0.
 */
function debounce(fn, waitMs) {
  if (typeof fn !== 'function') {
    throw new TypeError('fn must be a function');
  }
  if (typeof waitMs !== 'number' || Number.isNaN(waitMs) || waitMs < 0) {
    throw new RangeError('waitMs must be a number greater than or equal to 0');
  }

  let timeoutId;

  return function debounced(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, waitMs);
  };
}

module.exports = {
  debounce,
};
