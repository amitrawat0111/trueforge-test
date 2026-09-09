# trueforge-test

## String Utility Helpers

`src/stringHelpers.js` exports a dependency-free string utility.

### `slugify(text)`

Converts a string into a URL-friendly slug by lowercasing, trimming
whitespace, replacing any run of non-alphanumeric characters with a single
hyphen, and stripping leading and trailing hyphens.

```js
const { slugify } = require('./src/stringHelpers');

slugify('  Hello, World!  '); // 'hello-world'
slugify('a--b__c');           // 'a-b-c'
slugify('');                  // ''
```

**Throws** `TypeError` if the argument is not a string.
