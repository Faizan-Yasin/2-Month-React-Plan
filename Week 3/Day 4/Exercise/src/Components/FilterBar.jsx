import React from 'react'
import styles from './FilterBar.module.css'
import { useTodo } from '../hooks/useTodo'
import { SET_FILTER } from '../reducers/todoActions'

const FilterBar = () => {
    const { state, dispatch } = useTodo()
    return (
        <div className={styles.filtercontainer}>
            <button className={`${styles.filterbuttons} ${styles.graybutton} ${state.filter === "all" ? styles.selected : ""}`} onClick={() => dispatch({ type: SET_FILTER, payload: "all" })} disabled={state.filter === "all"}>All</button>
            <button className={`${styles.filterbuttons} ${styles.graybutton} ${state.filter === "active" ? styles.selected : ""}`} onClick={() => dispatch({ type: SET_FILTER, payload: "active" })} disabled={state.filter === "active"}>Active</button>
            <button className={`${styles.filterbuttons} ${styles.graybutton} ${state.filter === "completed" ? styles.selected : ""}`} onClick={() => dispatch({ type: SET_FILTER, payload: "completed" })} disabled={state.filter === "completed"}>Completed</button>
        </div>
    )
}

export default FilterBar