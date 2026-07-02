import React from 'react'
import { useMemo, useState } from 'react'

const Goal2 = () => {

    const [todos, setTodos] = useState([])
    const [filter, setFilter] = useState('all')
    const [theme, setTheme] = useState('light')

    // console.log("Filtering Todos...");
    // const filteredTodos = todos.filter(todo => {
    //     if (filter === "active") {
    //         return !todo.completed
    //     }
    //     else if (filter === "completed") {
    //         return todo.completed
    //     }
    //     return true
    // })

    const filteredTodos = useMemo(() => {
        console.log("Filtering Todos...");
        return todos.filter(todo => {
            if (filter === "active") {
                return !todo.completed
            }
            else if (filter === "completed") {
                return todo.completed
            }
            return true
        })
    }, [todos, filter])

    function addTodo() {
        setTodos([
            {
                id: crypto.randomUUID(),
                title: "Learn React",
                completed: true
            },
            {
                id: crypto.randomUUID(),
                title: "Learn Next.js",
                completed: false
            },
            {
                id: crypto.randomUUID(),
                title: "Learn TypeScript",
                completed: true
            }
        ])
    }
    return (
        <div>
            <button onClick={addTodo}>Add Todo</button>
            <button onClick={() => setFilter('all')}>All Todo</button>
            <button onClick={() => setFilter('active')}>Active Todo</button>
            <button onClick={() => setFilter('completed')}>Completed Todo</button>
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle Theme</button>
            <p>Current Theme: {theme}</p>
            <ul>
                {filteredTodos.map(todo => (
                    <li key={todo.id}>
                        {todo.title} - {todo.completed ? "Completed" : "Active"}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Goal2
