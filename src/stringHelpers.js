/**
 * Converts a string into a URL-friendly slug.
 * Lowercases the input, trims whitespace, replaces any run of
 * non-alphanumeric characters with a single hyphen, and strips
 * leading/trailing hyphens.
 *
 * @param {string} text - The input string to slugify.
 * @returns {string} The slugified string.
 * @throws {TypeError} If the input is not a string.
 */
function slugify(text) {
  if (typeof text !== 'string') {
    throw new TypeError('Input must be a string');
  }
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

module.exports = {
  slugify,
};
