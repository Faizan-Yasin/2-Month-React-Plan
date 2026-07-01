import React from 'react'
import styles from './TodoStats.module.css'

const TodoStats = ({ theme, todos }) => {
    const total = todos.length
    const completed = todos.filter(todo => todo.completed).length
    const left = todos.filter(todo => !todo.completed).length
    return (
        <div className={styles.statscontainer}>
            <h2 className={`${styles.stat} ${theme ? styles.light : styles.dark}`}>Total : {total}</h2>
            <h2 className={`${styles.stat} ${theme ? styles.light : styles.dark}`}>Completed : {completed}</h2>
            <h2 className={`${styles.stat} ${theme ? styles.light : styles.dark}`}>Remaining : {left}</h2>
        </div>
    )
}

export default TodoStats
