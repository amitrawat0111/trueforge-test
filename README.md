# trueforge-test

## Memoize Utility

`src/memoize.js` exports a dependency-free memoization helper.

### `memoize(fn)`

Returns a memoized version of `fn` that caches results based on the arguments (and `this` context) of each call. Repeated calls with the same arguments return the cached result without re-executing `fn`.

| Parameter | Type       | Description                        |
| --------- | ---------- | ---------------------------------- |
| `fn`      | `Function` | The function to memoize.           |

**Returns:** `Function` — a wrapper function that caches results of `fn`.

**Throws:** `TypeError` if `fn` is not a function.

```js
const { memoize } = require('./src/memoize');

const add = memoize(function (a, b) { return a + b; });
add(1, 2); // 3 — fn executes
add(1, 2); // 3 — cached, fn does not execute
add(3, 4); // 7 — different args, fn executes
```

### Running tests

```sh
npm test
```
