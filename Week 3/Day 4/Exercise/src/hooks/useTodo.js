import { TodoContext } from "../contexts/TodoContext";
import { useContext } from "react";

export function useTodo() {
    const context = useContext(TodoContext)

    if (!context) {
        throw new Error("useTodo must be used with in the TodoProvider");
    }

    return context
}