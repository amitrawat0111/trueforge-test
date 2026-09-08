# trueforge-test

## Array Utility Helpers

`src/arrayHelpers.js` exports two dependency-free array utilities.

### `unique(array)`

Returns a new array with duplicates removed, preserving first-seen order.

```js
const { unique } = require('./src/arrayHelpers');

unique([1, 2, 1, 3, 2]);   // [1, 2, 3]
unique(['a', 'b', 'a']);    // ['a', 'b']
unique([]);                  // []
```

**Throws** `TypeError` if the argument is not an array.

### `chunk(array, size)`

Splits an array into consecutive groups of `size`. The last group may be shorter if the array length is not evenly divisible by `size`.

```js
const { chunk } = require('./src/arrayHelpers');

chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]
chunk([1, 2, 3, 4], 2);    // [[1, 2], [3, 4]]
chunk([1, 2, 3], 10);      // [[1, 2, 3]]
```

**Throws** `TypeError` if the first argument is not an array or `size` is not a number.  
**Throws** `RangeError` if `size` is less than 1.
