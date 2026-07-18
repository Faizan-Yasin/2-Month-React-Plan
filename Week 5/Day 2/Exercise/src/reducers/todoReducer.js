import { ADD_TODO, DELETE_TODO, UPDATE_TODO, TOGGLE_TODO, SET_FILTER, CHANGE_INPUT, START_EDIT, LOAD_TODOS } from "./todoActions"

export const initialState = {
    todos: [],
    filter: "all",
    form: {
        title: "",
        description: ""
    },
    editId: null,
    lastAction: null
}

export function todoReducer(state, action) {
    switch (action.type) {

        case CHANGE_INPUT:
            return {
                ...state,
                form: {
                    ...state.form,
                    [action.payload.name]: action.payload.value
                },
                lastAction: action.type,
            }

        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
                form: {
                    title: "",
                    description: ""
                },
                lastAction: action.type,
            }

        case START_EDIT:
            return {
                ...state,
                editId: action.payload.id,
                form: {
                    title: action.payload.title,
                    description: action.payload.description
                },
                lastAction: action.type,
            }

        case UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === state.editId ?
                    { ...todo, title: state.form.title, description: state.form.description } : todo
                ),
                editId: null,
                form: {
                    title: "",
                    description: ""
                },
                lastAction: action.type,
            }

        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload),
                lastAction: action.type,
            }

        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.payload ?
                    {
                        ...todo,
                        completed: !todo.completed
                    } : todo
                ),
                lastAction: action.type,
            }

        case SET_FILTER:
            return {
                ...state,
                filter: action.payload,
                lastAction: action.type,
            }

        case LOAD_TODOS:
            return {
                ...state,
                todos: action.payload,
                lastAction: action.type,
            }

        default:
            throw new Error("Unknown: " + action.type);
    }
}