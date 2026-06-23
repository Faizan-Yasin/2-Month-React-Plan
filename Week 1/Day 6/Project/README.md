# 🛠️ Utility Library

A lightweight JavaScript utility library containing helpers for:
- Arrays
- Strings
- Objects
- Async operations

All functions are **pure**, **safe**, and handle edge cases.

---

# 📦 Installation

```bash
npm install my-utils-lib
```
OR

```js
import { sum, unique } from "./index.js"
```
---

# 📚 Array Utilities

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

## `groupBy(arr, fn)`

Groups items by callback function.

```js
groupBy([1,2,3,4], n => n % 2)
// Output: { "0": [2,4], "1": [1,3] }
```
---

# ⚡ Async Utilities

## `debounce(fn, delay)`

Delays execution until user stops calling.

```js
const log = debounce(() => console.log("Hi"), 1000)

log()
log()
log()
// Output: (runs only once after 1s)
```
---

## `retry(fn, attempts, delayMs)`

Retries async function until success or attempts finish.

```js
await retry(async () => {
  throw new Error("Fail")
}, 3, 1000)

// Output: retries 3 times then throws last error
```
---

# 🧠 Object Utilities

## `omit(obj, keys)`

Removes selected keys from object.

```js
omit({ name: "Ali", age: 20 }, ["age"])
// { name: "Ali" }
```
---

## `deepClone(obj)`

Deep copies objects and arrays.

```js
deepClone({ a: 1, b: { c: 2 } })
// Output: { a: 1, b: { c: 2 } }
```
---

# 🔤 String Utilities

## `slugify(str)`

Converts string into URL-friendly slug.

```js
slugify("Hello World")
// Output: "hello-world"
```
---

## `truncate(str, maxLen)`

Truncates string and adds "...".

```js
truncate("JavaScript is awesome", 10)
// Output: "JavaScript..."
```
---

## `capitalize(str)`

Capitalizes first letter of each word.

```js
capitalize("hello world")
// Output: "Hello World"
```
# 🚀 Example Usage

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
  truncate
} from "./index.js"

console.log(chunk([1,2,3,4,5], 2))
console.log(slugify("Hello World"))
console.log(capitalize("hello world"))
```


