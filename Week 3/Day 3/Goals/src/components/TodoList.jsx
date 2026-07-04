import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ handleDelete }) => {
    return (
        <div>
            <TodoItem handleDelete={handleDelete} />
        </div>
    )
}

export default TodoList
