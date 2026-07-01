# Week 2 — Todo App

A React Todo application built using component-based architecture and localStorage persistence.

## Features

* Add Todo
* Edit Todo
* Delete Todo
* Toggle Complete / Incomplete
* Filter (All / Active / Completed)
* Persist data using localStorage
* Empty states
* Theme (Dark Theme / Light Theme)

---

## Component Tree

App

└── TodoApp
    ├── TodoInput
    ├── FilterBar
    ├── TodoStats
    └── TodoList
        └── TodoItem

---

## useLocalStorage API

Custom hook that works like useState but automatically syncs state with localStorage.

### Usage

```js
const [todos, setTodos] =
useLocalStorage("todos", [])
```

### Parameters

* key → localStorage key
* initialValue → default value

### Returns

* value
* setValue

Example:

```js
setTodos(prev => [...prev, newTodo])
```

---

## Install

```bash
npm install
```

---

## Run

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

---

## Build

```bash
npm run build
```
