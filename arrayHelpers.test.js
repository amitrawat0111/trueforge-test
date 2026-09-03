const { unique, chunk, flatten } = require('./arrayHelpers');

describe('arrayHelpers', () => {
  describe('unique', () => {
    test('removes primitive duplicates', () => {
      expect(unique([1, 2, 2, 3, 1])).toEqual([1, 2, 3]);
      expect(unique(['a', 'b', 'a', 'c'])).toEqual(['a', 'b', 'c']);
      expect(unique([true, false, true])).toEqual([true, false]);
    });

    test('handles empty arrays', () => {
      expect(unique([])).toEqual([]);
    });

    test('preserves element insertion order', () => {
      expect(unique([3, 1, 2, 1, 3])).toEqual([3, 1, 2]);
    });

    test('throws TypeError when input is not an array', () => {
      expect(() => unique(null)).toThrow(TypeError);
      expect(() => unique(undefined)).toThrow(TypeError);
      expect(() => unique('string')).toThrow(TypeError);
      expect(() => unique(123)).toThrow(TypeError);
      expect(() => unique({})).toThrow(TypeError);
    });
  });

  describe('chunk', () => {
    test('splits array into even chunks', () => {
      expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
    });

    test('handles remaining elements in last chunk', () => {
      expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    });

    test('defaults size to 1', () => {
      expect(chunk(['a', 'b', 'c'])).toEqual([['a'], ['b'], ['c']]);
    });

    test('returns full array in single chunk when size exceeds length', () => {
      expect(chunk([1, 2], 5)).toEqual([[1, 2]]);
    });

    test('handles empty array', () => {
      expect(chunk([], 3)).toEqual([]);
    });

    test('throws error for non-array input', () => {
      expect(() => chunk('not an array', 2)).toThrow(TypeError);
    });

    test('throws RangeError for invalid size values', () => {
      expect(() => chunk([1, 2, 3], 0)).toThrow(RangeError);
      expect(() => chunk([1, 2, 3], -1)).toThrow(RangeError);
      expect(() => chunk([1, 2, 3], 1.5)).toThrow(RangeError);
    });

    test('throws TypeError for non-numeric size values', () => {
      expect(() => chunk([1, 2, 3], '2')).toThrow(TypeError);
      expect(() => chunk([1, 2, 3], NaN)).toThrow(TypeError);
    });
  });

  describe('flatten', () => {
    test('flattens deeply nested arrays by default', () => {
      expect(flatten([1, [2, [3, [4]], 5]])).toEqual([1, 2, 3, 4, 5]);
    });

    test('flattens to specified depth', () => {
      expect(flatten([1, [2, [3, [4]]]], 1)).toEqual([1, 2, [3, [4]]]);
      expect(flatten([1, [2, [3, [4]]]], 2)).toEqual([1, 2, 3, [4]]);
    });

    test('returns same structure if depth is 0', () => {
      expect(flatten([1, [2, 3]], 0)).toEqual([1, [2, 3]]);
    });

    test('handles empty arrays and flat arrays', () => {
      expect(flatten([])).toEqual([]);
      expect(flatten([1, 2, 3])).toEqual([1, 2, 3]);
    });

    test('throws TypeError for invalid array input', () => {
      expect(() => flatten(null)).toThrow(TypeError);
      expect(() => flatten({ key: 'value' })).toThrow(TypeError);
    });

    test('throws TypeError for invalid depth input', () => {
      expect(() => flatten([1, 2], -1)).toThrow(TypeError);
      expect(() => flatten([1, 2], '1')).toThrow(TypeError);
      expect(() => flatten([1, 2], NaN)).toThrow(TypeError);
    });
  });
});