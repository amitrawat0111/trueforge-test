# trueforge-test

## Array Helpers

Two small, dependency-free array utilities exported from `src/arrayHelpers.js`.

### `unique(array)`

Returns a new array with duplicate values removed, preserving first-seen order. Equality follows SameValueZero semantics (`NaN` equals `NaN`; objects are equal only by reference).

| Parameter | Type     | Description                          |
| --------- | -------- | ------------------------------------ |
| `array`   | `Array`  | The array to deduplicate.            |

**Returns:** `Array` — a new array containing only the first occurrence of each value.

**Throws:** `TypeError` if `array` is not an array.

```js
const { unique } = require('./src/arrayHelpers');

unique([1, 2, 2, 3, 1]); // [1, 2, 3]
unique(['a', 'b', 'a']); // ['a', 'b']
```

### `chunk(array, size)`

Splits the array into consecutive groups of `size`. The last group may be shorter when the array length is not evenly divisible by `size`.

| Parameter | Type     | Description                              |
| --------- | -------- | ---------------------------------------- |
| `array`   | `Array`  | The array to chunk.                      |
| `size`    | `number` | Chunk size. Must be an integer >= 1.     |

**Returns:** `Array<Array>` — a new array of sub-arrays.

**Throws:** `TypeError` if `array` is not an array; `RangeError` if `size` is not an integer >= 1.

```js
const { chunk } = require('./src/arrayHelpers');

chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]
chunk([1, 2, 3], 1);       // [[1], [2], [3]]
```

### Running tests

```sh
npm test
```
