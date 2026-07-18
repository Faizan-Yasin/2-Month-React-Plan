import { createSlice } from '@reduxjs/toolkit'

const savedTodos = localStorage.getItem("todos");

const initialState = {
    todos: savedTodos ? JSON.parse(savedTodos) : [],
    filter: "all",
    form: {
        title: "",
        description: ""
    },
    editId: null,
    lastAction: null
}

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        changeInput: (state, action) => {
            state.form[action.payload.name] = action.payload.value
            state.lastAction = "Input Change"
        },
        addTodo: (state, action) => {
            state.todos.push(action.payload)
            state.form.title = ""
            state.form.description = ""
            state.lastAction = "Todo Added"
        },
        startEdit: (state, action) => {
            state.editId = action.payload.id
            state.form.title = action.payload.title
            state.form.description = action.payload.description
            state.lastAction = "Start Edit"
        },
        updateTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload.id)
            if (todo) {
                todo.title = action.payload.title
                todo.description = action.payload.description
                state.lastAction = "Update Todo"
            }
            state.editId = null;
            state.form.title = "";
            state.form.description = "";
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
            if (state.editId === action.payload) {
                state.editId = null;
                state.form.title = "";
                state.form.description = "";
            }
            state.lastAction = "Delete Todo"
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload)
            if (todo) {
                todo.completed = !todo.completed
                state.lastAction = "Toggle Todo"
            }
        },
        setFilter: (state, action) => {
            state.filter = action.payload
            state.lastAction = "Filter Changed";
        },
    }
})

export const { changeInput, addTodo, startEdit, updateTodo, deleteTodo, toggleTodo, setFilter } = todosSlice.actions

export default todosSlice.reducer