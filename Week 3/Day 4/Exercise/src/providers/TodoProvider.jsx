import { TodoContext } from "../contexts/TodoContext"
import { todoReducer, initialState } from "../reducers/todoReducer"
import { useReducer } from "react"
import { useEffect } from 'react'
import { LOAD_TODOS } from "../reducers/todoActions"

export const TodoProvider = ({ children }) => {

    const [state, dispatch] = useReducer(
        todoReducer,
        initialState,
        (initial) => {
            const stored = localStorage.getItem("todos");

            return {
                ...initial,
                todos: stored ? JSON.parse(stored) : [],
            };
        }
    );


    useEffect(() => {

        localStorage.setItem(
            "todos",
            JSON.stringify(state.todos)
        );

    }, [state.todos]);

    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            {children}
        </TodoContext.Provider>
    )
}




