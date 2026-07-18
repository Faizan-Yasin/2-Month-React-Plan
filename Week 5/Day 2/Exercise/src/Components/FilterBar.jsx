import React from 'react'
import styles from './FilterBar.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { setFilter } from '../redux/features/todosSlice'

const FilterBar = () => {

    const dispatch = useDispatch()
    const filter = useSelector((state) => state.todo.filter)

    return (
        <div className={styles.filtercontainer}>
            <button className={`${styles.filterbuttons} ${styles.graybutton} ${filter === "all" ? styles.selected : ""}`} onClick={() => dispatch(setFilter("all"))} disabled={filter === "all"}>All</button>
            <button className={`${styles.filterbuttons} ${styles.graybutton} ${filter === "active" ? styles.selected : ""}`} onClick={() => dispatch(setFilter("active"))} disabled={filter === "active"}>Active</button>
            <button className={`${styles.filterbuttons} ${styles.graybutton} ${filter === "completed" ? styles.selected : ""}`} onClick={() => dispatch(setFilter("completed"))} disabled={filter === "completed"}>Completed</button>
        </div>
    )
}

export default FilterBar