# 🛠️ Utility Library

A lightweight JavaScript utility library containing helpers for:
- Arrays
- Strings
- Objects
- Async operations

All functions are **pure**, **safe**, and handle edge cases.

---

# 📦 Installation

```js
import * as utils from "./index.js"
```
OR

```js
import { sum, unique } from "./index.js"
```
---

# 📚 Array Utilities

## `sum(arr)`

Returns sum of numbers in array.

```js
sum([1, 2, 3]);
// 6
```
---

## `unique(arr)`

Removes duplicate values.

```js
unique([1, 1, 2, 3]) 
// [1, 2, 3]
```
---

## `chunk(arr, size)`

Splits array into chunks.

```js
chunk([1, 2, 3, 4, 5], 2)
// [[1,2],[3,4],[5]]
```
---

## `flatten(arr)`

Flattens nested arrays.

```js
flatten([1, [2, [3]]])
// [1, 2, 3]
```
---

# ⚡ Async Utilities

## `delay(ms)`

Creates a delay using Promise.

```js
await delay(1000)
// waits 1 second
```
---

## `retry(fn, times)`

Retries async function if it fails.

```js
await retry(async () => {
  return await fetchData()
}, 3)
```
---

# 🧠 Object Utilities

## `pick(obj, keys)`

Selects specific keys from object.

```js
pick({ name: "Ali", age: 20 }, ["name"])
// { name: "Ali" }
```
---

## `omit(obj, keys)`

Removes keys from object.

```js
omit({ name: "Ali", age: 20 }, ["age"])
// { name: "Ali" }
```
---

# 🔤 String Utilities

## `capitalize(str)`

Capitalizes first letter.

```js
capitalize("hello")
// "Hello"
```
---

## `reverse(str)`

Reverses a string.

```js
reverse("hello")
// "olleh"
```
---

## `slugify(str)`

Converts string into URL slug.

```js
slugify("Hello World")
// "hello-world"
```
# 🚀 Example Usage

```js
import {
  sum,
  unique,
  chunk,
  flatten,
  delay,
  retry,
  pick,
  omit,
  capitalize,
  reverse,
  slugify
} from "./index.js"

console.log(sum([1,2,3]))
console.log(slugify("Hello World"))
```


