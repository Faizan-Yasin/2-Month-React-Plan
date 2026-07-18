import React from 'react'
import TodoItem from './TodoItem'
import styles from './TodoList.module.css'

const TodoList = ({ todos }) => {

    return (
        <div className={styles.listcontainer}>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
    )
}

export default TodoList
