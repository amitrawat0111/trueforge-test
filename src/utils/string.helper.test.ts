import {
  capitalize,
  capitalizeWords,
  toCamelCase,
  toPascalCase,
  toKebabCase,
  toSnakeCase,
  isEmpty,
  isBlank,
  truncate,
  slugify,
  reverse,
  isEmail,
  isNumeric,
} from './string.helper';

describe('string.helper utilities', () => {
  describe('capitalize', () => {
    it('should capitalize the first character and lowercase the rest', () => {
      expect(capitalize('hello')).toBe('Hello');
      expect(capitalize('WORLD')).toBe('World');
      expect(capitalize('fOo BaR')).toBe('Foo bar');
    });

    it('should handle null, undefined, and empty string safely', () => {
      expect(capitalize('')).toBe('');
      expect(capitalize(null)).toBe('');
      expect(capitalize(undefined)).toBe('');
    });
  });

  describe('capitalizeWords', () => {
    it('should capitalize the first letter of each word', () => {
      expect(capitalizeWords('hello world')).toBe('Hello World');
      expect(capitalizeWords('foo-bar baz')).toBe('Foo-Bar Baz');
    });

    it('should handle empty or invalid inputs', () => {
      expect(capitalizeWords('')).toBe('');
      expect(capitalizeWords(null)).toBe('');
      expect(capitalizeWords(undefined)).toBe('');
    });
  });

  describe('case conversions', () => {
    const testCases = [
      'hello world',
      'hello-world',
      'hello_world',
      'HelloWorld',
      'helloWorld',
    ];

    it('should convert strings to camelCase', () => {
      testCases.forEach((input) => {
        expect(toCamelCase(input)).toBe('helloWorld');
      });
      expect(toCamelCase(null)).toBe('');
    });

    it('should convert strings to PascalCase', () => {
      testCases.forEach((input) => {
        expect(toPascalCase(input)).toBe('HelloWorld');
      });
      expect(toPascalCase(undefined)).toBe('');
    });

    it('should convert strings to kebab-case', () => {
      testCases.forEach((input) => {
        expect(toKebabCase(input)).toBe('hello-world');
      });
      expect(toKebabCase('')).toBe('');
    });

    it('should convert strings to snake_case', () => {
      testCases.forEach((input) => {
        expect(toSnakeCase(input)).toBe('hello_world');
      });
      expect(toSnakeCase(null)).toBe('');
    });
  });

  describe('validation & helper utilities', () => {
    it('isEmpty should check for empty/null values', () => {
      expect(isEmpty('')).toBe(true);
      expect(isEmpty(null)).toBe(true);
      expect(isEmpty(' ')).toBe(false);
      expect(isEmpty('a')).toBe(false);
    });

    it('isBlank should check for whitespace-only/null values', () => {
      expect(isBlank('   ')).toBe(true);
      expect(isBlank('')).toBe(true);
      expect(isBlank(null)).toBe(true);
      expect(isBlank(' a ')).toBe(false);
    });

    it('truncate should correctly limit string length', () => {
      expect(truncate('Hello World', 8)).toBe('Hello...');
      expect(truncate('Hello', 10)).toBe('Hello');
      expect(truncate(null, 5)).toBe('');
    });

    it('slugify should create clean URL slugs', () => {
      expect(slugify('Hello World!')).toBe('hello-world');
      expect(slugify('  Café & Teá  ')).toBe('cafe-tea');
    });

    it('reverse should reverse string characters', () => {
      expect(reverse('hello')).toBe('olleh');
      expect(reverse('')).toBe('');
    });

    it('isEmail should validate email formats', () => {
      expect(isEmail('user@example.com')).toBe(true);
      expect(isEmail('invalid-email')).toBe(false);
      expect(isEmail(null)).toBe(false);
    });

    it('isNumeric should validate numeric strings', () => {
      expect(isNumeric('12345')).toBe(true);
      expect(isNumeric('12a45')).toBe(false);
      expect(isNumeric(null)).toBe(false);
    });
  });
});