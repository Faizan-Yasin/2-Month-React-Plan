import React from 'react'
import styles from './TodoStats.module.css'
import { useTheme } from '../hooks/useTheme'
import { useTodo } from '../hooks/useTodo'

const TodoStats = () => {

    const { theme } = useTheme()
    const { state } = useTodo()

    const total = state.todos.length
    const completed = state.todos.filter(todo => todo.completed).length
    const left = state.todos.filter(todo => !todo.completed).length

    return (
        <div className={styles.statscontainer}>
            <h2 className={`${styles.stat} ${theme ? styles.light : styles.dark}`}>Total : {total}</h2>
            <h2 className={`${styles.stat} ${theme ? styles.light : styles.dark}`}>Completed : {completed}</h2>
            <h2 className={`${styles.stat} ${theme ? styles.light : styles.dark}`}>Remaining : {left}</h2>
        </div>
    )
}

export default TodoStats
