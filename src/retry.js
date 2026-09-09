'use strict';

/**
 * Resolve after the given number of milliseconds.
 *
 * @param {number} ms - Milliseconds to wait.
 * @returns {Promise<void>} A promise that resolves after the delay.
 */
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Execute an async function and retry it on failure.
 *
 * `fn` is called up to `attempts` times. When `fn` throws (or rejects),
 * the helper waits `delayMs` milliseconds and tries again. If every
 * attempt fails, the error from the final attempt is thrown.
 *
 * @template T
 * @param {() => Promise<T>} fn - The function to execute and retry.
 * @param {number} attempts - Maximum number of attempts (minimum 1).
 * @param {number} delayMs - Delay in milliseconds between retries (minimum 0).
 * @returns {Promise<T>} The result of `fn` on the first successful attempt.
 * @throws {RangeError} If `attempts` is less than 1.
 * @throws {RangeError} If `delayMs` is less than 0.
 * @throws {*} The final error thrown by `fn` if all attempts fail.
 */
async function retry(fn, attempts, delayMs) {
  if (attempts < 1) {
    throw new RangeError('attempts must be >= 1');
  }
  if (delayMs < 0) {
    throw new RangeError('delayMs must be >= 0');
  }

  let lastError;
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;
      if (i < attempts - 1) {
        await sleep(delayMs);
      }
    }
  }
  throw lastError;
}

module.exports = { retry };
