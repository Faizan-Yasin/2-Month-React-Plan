import React from 'react'

const TodoItem = ({ handleDelete }) => {
    return (
        <div>
            <button onClick={() => handleDelete(1)}>Delete</button>
            <button onClick={() => handleDelete(2)}>Delete</button>
        </div>
    )
}

export default TodoItem
