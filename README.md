# trueforge-test

## Array Utility Helpers

`src/arrayHelpers.js` provides utility functions for working with arrays:

### `unique(array)`
Returns a new array with duplicates removed, preserving first-seen order.
- Throws `TypeError` if input is not an array.

```js
const { unique } = require('./src/arrayHelpers');
unique([1, 2, 2, 3, 1]); // [1, 2, 3]
```

### `chunk(array, size)`
Splits an array into consecutive groups of `size`.
- Throws `TypeError` if input is not an array.
- Throws `RangeError` if `size` is less than 1.

```js
const { chunk } = require('./src/arrayHelpers');
chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]
```

### `sort(array)`
Returns a new array with the elements sorted in ascending order (does not mutate the original).
- Throws `TypeError` if input is not an array.

```js
const { sort } = require('./src/arrayHelpers');
sort([3, 1, 2]); // [1, 2, 3]
```

### `binarySearch(array, target)`
Searches a sorted (ascending) array for `target` using binary search.
- Throws `TypeError` if input is not an array.
- Returns the index of `target` if found, otherwise `-1`.

```js
const { binarySearch } = require('./src/arrayHelpers');
binarySearch([1, 2, 3, 4, 5], 4); // 3
```
