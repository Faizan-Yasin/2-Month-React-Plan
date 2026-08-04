# 🛠️ My Utils Lib

A lightweight JavaScript/TypeScript utility library containing reusable helper functions for:

- 📦 Arrays
- 🔤 Strings
- 🧠 Objects
- ⚡ Async operations

All functions are:

- ✅ Pure
- ✅ Safe
- ✅ Lightweight
- ✅ Handle common edge cases

---

# 📦 Installation

```bash
npm install my-utils-lib
```

Or import directly:

```js
import {
  chunk,
  unique,
  groupBy,
  debounce,
  retry,
  omit,
  deepClone,
  slugify,
  capitalize,
  truncate,
} from "my-utils-lib";
```

---

# 📚 Array Utilities

## `unique(arr)`

Removes duplicate values from an array.

```js
unique([1, 1, 2, 3]);
// [1, 2, 3]
```

---

## `chunk(arr, size)`

Splits an array into smaller chunks.

```js
chunk([1, 2, 3, 4, 5], 2);

// [[1,2],[3,4],[5]]
```

---

## `groupBy(arr, fn)`

Groups array items using a callback.

```js
groupBy([1, 2, 3, 4], (n) => n % 2);

// {
//   "0": [2,4],
//   "1": [1,3]
// }
```

---

# ⚡ Async Utilities

## `debounce(fn, delay)`

Delays execution until the user stops calling the function.

```js
const log = debounce(() => console.log("Hello"), 1000);

log();
log();
log();

// Runs only once after 1 second
```

---

## `retry(fn, attempts, delayMs)`

Retries an async function until it succeeds or all attempts fail.

```js
await retry(async () => {
  throw new Error("Failed");
}, 3, 1000);
```

---

# 🧠 Object Utilities

## `omit(obj, keys)`

Returns a new object without the specified keys.

```js
omit(
  {
    name: "Ali",
    age: 20,
  },
  ["age"]
);

// { name: "Ali" }
```

---

## `deepClone(obj)`

Creates a deep copy of objects and arrays.

```js
deepClone({
  a: 1,
  b: {
    c: 2,
  },
});
```

---

# 🔤 String Utilities

## `slugify(str)`

Converts text into a URL-friendly slug.

```js
slugify("Hello World");

// hello-world
```

---

## `capitalize(str)`

Capitalizes the first letter of every word.

```js
capitalize("hello world");

// Hello World
```

---

## `truncate(str, maxLen)`

Shortens a string and appends `...` when needed.

```js
truncate("JavaScript is awesome", 10);

// JavaScript...
```

---

# 🚀 Example

```js
import {
  chunk,
  unique,
  groupBy,
  debounce,
  retry,
  omit,
  deepClone,
  slugify,
  capitalize,
  truncate,
} from "my-utils-lib";

console.log(chunk([1, 2, 3, 4, 5], 2));

console.log(unique([1, 1, 2, 3]));

console.log(slugify("Hello World"));

console.log(capitalize("hello world"));

console.log(truncate("JavaScript is awesome", 10));
```

---

# 📄 License

MIT