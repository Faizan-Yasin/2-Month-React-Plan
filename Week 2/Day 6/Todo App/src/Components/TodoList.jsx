import React from 'react'
import TodoItem from './TodoItem'
import styles from './TodoList.module.css'

const TodoList = ({theme, todos, toggleTodo, handleUpdate, handleDelete }) => {
    return (
        <div className={styles.listcontainer}>
            {todos.map(todo => (
                <TodoItem key={todo.id} theme={theme} todo={todo} toggleTodo={toggleTodo} handleDelete={handleDelete} handleUpdate={handleUpdate} />
            ))}
        </div>
    )
}

export default TodoList
