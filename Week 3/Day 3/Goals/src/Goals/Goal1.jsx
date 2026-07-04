import React from 'react'
import TodoList from '../components/TodoList'

const Goal1 = ({ handleDelete }) => {
    return (
        <div>
            <TodoList handleDelete={handleDelete} />
        </div>
    )
}

export default Goal1
