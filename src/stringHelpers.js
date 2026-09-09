/**
 * Converts a string to a URL-friendly slug.
 *
 * @param {string} text - The input string to slugify.
 * @returns {string} The slugified string: lowercased, trimmed, with runs of
 *   non-alphanumeric characters replaced by a single hyphen, and no leading
 *   or trailing hyphens.
 * @throws {TypeError} If `text` is not a string.
 */
function slugify(text) {
  if (typeof text !== 'string') {
    throw new TypeError('slugify: input must be a string');
  }
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

module.exports = { slugify };
