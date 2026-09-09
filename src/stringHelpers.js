/**
 * Converts a string to a URL-friendly slug.
 *
 * Lowercases the input, trims whitespace, replaces any run of
 * non-alphanumeric characters with a single hyphen, and strips
 * leading and trailing hyphens.
 *
 * @param {string} text - The input string to slugify.
 * @returns {string} The slugified string.
 * @throws {TypeError} If `text` is not a string.
 *
 * @example
 * slugify('  Hello, World!  '); // 'hello-world'
 * slugify('a--b__c');           // 'a-b-c'
 */
function slugify(text) {
  if (typeof text !== 'string') {
    throw new TypeError('slugify: input must be a string');
  }
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

module.exports = { slugify };
