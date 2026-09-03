/**
 * String Helper Utility
 * 
 * A collection of pure, zero-dependency helper functions for string 
 * manipulation, transformation, and validation in TypeScript.
 */

/**
 * Internal helper to tokenize a string into individual words,
 * handling transitions between camelCase, PascalCase, kebab-case, snake_case, and whitespace.
 *
 * @param value - The raw input string.
 * @returns An array of word strings.
 */
function extractWords(value?: string | null): string[] {
  if (value == null || typeof value !== 'string') {
    return [];
  }

  return value
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}

/**
 * Capitalizes the first character of a string and lowers the remaining characters.
 * Safe for null, undefined, and empty string inputs.
 *
 * @param value - The string to capitalize.
 * @returns Capitalized string, or empty string if input is null/undefined.
 *
 * @example
 * capitalize('hello world'); // 'Hello world'
 * capitalize('fOO');         // 'Foo'
 * capitalize('');            // ''
 */
export function capitalize(value?: string | null): string {
  if (value == null || typeof value !== 'string') {
    return '';
  }
  if (value.length === 0) {
    return '';
  }

  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}

/**
 * Capitalizes the first letter of each word in a string.
 *
 * @param value - The string whose words should be capitalized.
 * @returns String with each word capitalized.
 *
 * @example
 * capitalizeWords('hello world'); // 'Hello World'
 * capitalizeWords('foo-bar baz'); // 'Foo-Bar Baz'
 */
export function capitalizeWords(value?: string | null): string {
  if (value == null || typeof value !== 'string') {
    return '';
  }

  return value.replace(/\b[a-z]/gi, (char) => char.toUpperCase());
}

/**
 * Converts a string to camelCase format (e.g. `fooBarBaz`).
 *
 * @param value - The input string to convert.
 * @returns The camelCased string.
 *
 * @example
 * toCamelCase('hello world');  // 'helloWorld'
 * toCamelCase('FooBar-baz');   // 'fooBarBaz'
 * toCamelCase('snake_case');   // 'snakeCase'
 */
export function toCamelCase(value?: string | null): string {
  const words = extractWords(value);
  if (words.length === 0) {
    return '';
  }

  return words
    .map((word, index) => {
      const lower = word.toLowerCase();
      if (index === 0) {
        return lower;
      }
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join('');
}

/**
 * Converts a string to PascalCase format (e.g. `FooBarBaz`).
 *
 * @param value - The input string to convert.
 * @returns The PascalCased string.
 *
 * @example
 * toPascalCase('hello world'); // 'HelloWorld'
 * toPascalCase('foo-bar_baz'); // 'FooBarBaz'
 */
export function toPascalCase(value?: string | null): string {
  const words = extractWords(value);
  if (words.length === 0) {
    return '';
  }

  return words
    .map((word) => {
      const lower = word.toLowerCase();
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join('');
}

/**
 * Converts a string to kebab-case format (e.g. `foo-bar-baz`).
 *
 * @param value - The input string to convert.
 * @returns The kebab-cased string.
 *
 * @example
 * toKebabCase('hello world'); // 'hello-world'
 * toKebabCase('FooBarBaz');   // 'foo-bar-baz'
 */
export function toKebabCase(value?: string | null): string {
  const words = extractWords(value);
  if (words.length === 0) {
    return '';
  }

  return words.map((word) => word.toLowerCase()).join('-');
}

/**
 * Converts a string to snake_case format (e.g. `foo_bar_baz`).
 *
 * @param value - The input string to convert.
 * @returns The snake_cased string.
 *
 * @example
 * toSnakeCase('hello world'); // 'hello_world'
 * toSnakeCase('FooBarBaz');   // 'foo_bar_baz'
 */
export function toSnakeCase(value?: string | null): string {
  const words = extractWords(value);
  if (words.length === 0) {
    return '';
  }

  return words.map((word) => word.toLowerCase()).join('_');
}

/**
 * Checks if a string is null, undefined, or empty (`""`).
 *
 * @param value - The string to evaluate.
 * @returns `true` if empty/null/undefined, `false` otherwise.
 *
 * @example
 * isEmpty('');     // true
 * isEmpty(' ');    // false
 * isEmpty(null);   // true
 */
export function isEmpty(value?: string | null): boolean {
  return value == null || value.length === 0;
}

/**
 * Checks if a string is null, undefined, empty, or contains only whitespace characters.
 *
 * @param value - The string to evaluate.
 * @returns `true` if blank/null/undefined, `false` otherwise.
 *
 * @example
 * isBlank('  ');   // true
 * isBlank('a');    // false
 * isBlank(null);   // true
 */
export function isBlank(value?: string | null): boolean {
  return value == null || value.trim().length === 0;
}

/**
 * Truncates a string to a specified length, appending a suffix if truncated.
 *
 * @param value - The string to truncate.
 * @param maxLength - Maximum allowed length of the resulting string.
 * @param suffix - Optional suffix to append when truncated (defaults to `'...'`).
 * @returns The truncated string.
 *
 * @example
 * truncate('Hello World', 8);        // 'Hello...'
 * truncate('Hello World', 8, '---'); // 'Hello---'
 * truncate('Hello', 10);             // 'Hello'
 */
export function truncate(value?: string | null, maxLength: number = 30, suffix: string = '...'): string {
  if (value == null || typeof value !== 'string') {
    return '';
  }
  if (maxLength <= 0) {
    return '';
  }
  if (value.length <= maxLength) {
    return value;
  }

  const effectiveLength = Math.max(0, maxLength - suffix.length);
  return value.slice(0, effectiveLength) + suffix;
}

/**
 * Converts a string into a URL-friendly slug.
 *
 * @param value - The string to slugify.
 * @returns Clean, lowercase slug.
 *
 * @example
 * slugify('Hello World! 123'); // 'hello-world-123'
 */
export function slugify(value?: string | null): string {
  if (value == null || typeof value !== 'string') {
    return '';
  }

  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-');
}

/**
 * Reverses characters in a string safely.
 *
 * @param value - The input string to reverse.
 * @returns Reversed string.
 *
 * @example
 * reverse('hello'); // 'olleh'
 */
export function reverse(value?: string | null): string {
  if (value == null || typeof value !== 'string') {
    return '';
  }

  return Array.from(value).reverse().join('');
}

/**
 * Validates whether a string is a basic formatted email address.
 *
 * @param value - The string to test.
 * @returns `true` if valid email format, `false` otherwise.
 */
export function isEmail(value?: string | null): boolean {
  if (value == null || typeof value !== 'string') {
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value.trim());
}

/**
 * Validates whether a string contains only numeric digits.
 *
 * @param value - The string to test.
 * @returns `true` if numeric digits only, `false` otherwise.
 */
export function isNumeric(value?: string | null): boolean {
  if (value == null || typeof value !== 'string') {
    return false;
  }

  return /^\d+$/.test(value.trim());
}