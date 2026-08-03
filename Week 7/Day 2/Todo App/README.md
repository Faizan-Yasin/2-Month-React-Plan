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

# Component Tree

## TodoApp

State Owner

State:

* todos
* filter
* title
* description
* editId

Children:

* TodoInput
* FilterBar
* TodoStats
* TodoList

---

## TodoInput

Props:

* title
* description

Callbacks:

* setTitle
* setDescription
* handleAdd

Purpose:
Handles creating and updating todos.

---

## FilterBar

Props:

* filter

Callbacks:

* setFilter

Purpose:
Switch between All / Active / Completed todos.

---

## TodoStats

Props:

* todos

Purpose:
Shows total, completed, and remaining todos.

---

## TodoList

Props:

* filteredTodos

Callbacks:

* toggleTodo
* handleDelete
* handleUpdate

Purpose:
Renders filtered todo items.

---

## TodoItem

Props:

* id
* title
* description
* completed
* createdAt

Callbacks:

* toggleTodo
* handleDelete
* handleUpdate

Purpose:
Displays a single todo and handles actions.

---

## Data Flow

Parent → Child → Props

TodoApp → TodoList → TodoItem

Child → Parent → Callbacks

TodoItem → TodoApp


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
