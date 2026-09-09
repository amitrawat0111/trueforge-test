/**
 * Creates a debounced version of the given function that delays invoking it
 * until after `waitMs` milliseconds have elapsed since the last call.
 *
 * @param {Function} fn - The function to debounce.
 * @param {number} waitMs - The number of milliseconds to delay. Must be >= 0.
 * @returns {Function} The debounced function.
 * @throws {RangeError} If waitMs is less than 0.
 */
function debounce(fn, waitMs) {
  if (waitMs < 0) {
    throw new RangeError(`waitMs must be >= 0, got ${waitMs}`);
  }

  let timer = null;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, waitMs);
  };
}

module.exports = { debounce };
