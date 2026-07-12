import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetchData } from '../hooks/useFetchData'

const Todos = () => {

    const { id } = useParams()

    const { data: todos, loading, error } = useFetchData(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)

    if (loading) {
        return <h2>Loading...</h2>
    }
    if (error) {
        return <h2>{error.message}</h2>
    }

    return (
        <div>
            {todos.map(todo => (
                <div key={todo.id}>
                    <input type="checkbox" checked={todo.completed} readOnly />
                    <h3>Todo Title : {todo.title}</h3>
                </div>
            ))}
        </div>
    )
}

export default Todos
