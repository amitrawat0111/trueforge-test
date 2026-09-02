/**
 * Create array utility helper
 *
 * Add a JavaScript utility file called arrayHelpers.js with:
- unique(array): Returns array with unique values only
- chunk(array, size): Splits array into chunks
- flatten(array): Flattens nested arrays
 *
 * Fallback implementation — TrueForge model API timed out.
 */

export function unique(array) {
  return [...new Set(array)];
}

export function chunk(array, size) {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

export function flatten(array) {
  return array.flat(Infinity);
}
