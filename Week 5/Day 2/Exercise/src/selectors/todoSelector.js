import { createSelector } from '@reduxjs/toolkit'

const todos = (state) => state.todo.todos
const filter = (state) => state.todo.filter

export const filterTodos = createSelector(
    [todos, filter],
    (todos, filter) => todos.filter(todo => {

        if (filter === "active") {
            return !todo.completed;
        }

        if (filter === "completed") {
            return todo.completed;
        }

        return true;

    })
)