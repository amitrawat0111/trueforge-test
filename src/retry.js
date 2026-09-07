/**
 * Executes an async or sync function, retrying it if it throws, up to a
 * maximum number of attempts, waiting a fixed delay between attempts.
 *
 * @param {Function} fn - The function to execute. May be sync or return a
 *   Promise. It is called with no arguments.
 * @param {number} attempts - The maximum number of times to attempt calling
 *   `fn` (must be >= 1).
 * @param {number} delayMs - The delay, in milliseconds, to wait between
 *   attempts (must be >= 0).
 * @returns {Promise<*>} A promise that resolves with the result of `fn`
 *   once it succeeds.
 * @throws {RangeError} If `attempts` is less than 1.
 * @throws {RangeError} If `delayMs` is less than 0.
 * @throws {*} The error thrown by the final failed attempt of `fn`, if all
 *   attempts are exhausted.
 */
async function retry(fn, attempts, delayMs) {
  if (attempts < 1) {
    throw new RangeError('attempts must be at least 1');
  }
  if (delayMs < 0) {
    throw new RangeError('delayMs must not be negative');
  }

  let lastError;

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;

      if (attempt < attempts && delayMs > 0) {
        await new Promise((resolve) => setTimeout(resolve, delayMs));
      }
    }
  }

  throw lastError;
}

module.exports = { retry };
