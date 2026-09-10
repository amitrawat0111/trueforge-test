/**
 * Creates a memoized version of the given function that caches results
 * based on the arguments of each call. Repeated calls with the same
 * arguments return the cached result without re-executing `fn`.
 *
 * @param {Function} fn - The function to memoize.
 * @returns {Function} A wrapper function that caches results of `fn`.
 * @throws {TypeError} If `fn` is not a function.
 *
 * @example
 * const memoized = memoize(function (a, b) { return a + b; });
 * memoized(1, 2); // 3 — fn executes
 * memoized(1, 2); // 3 — cached, fn does not execute
 * memoized(3, 4); // 7 — different args, fn executes
 */
function memoize(fn) {
  if (typeof fn !== 'function') {
    throw new TypeError('memoize(fn): expected a function, got ' + typeof fn);
  }

  var cache = new Map();

  return function () {
    var key = JSON.stringify(arguments);

    if (cache.has(key)) {
      return cache.get(key);
    }

    var result = fn.apply(this, arguments);
    cache.set(key, result);
    return result;
  };
}

module.exports = { memoize: memoize };
