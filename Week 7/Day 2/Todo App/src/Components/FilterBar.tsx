import type {FilterBarProps} from '../types/todo'
import styles from './FilterBar.module.css'

const FilterBar = ({filter, setFilter }: FilterBarProps) => {
    return (
        <div className={styles.filtercontainer}>
            <button className={`${styles.filterbuttons} ${styles.graybutton} ${filter === "all" ? styles.selected : ""}`} onClick={() => setFilter("all")} disabled={filter === "all"}>All</button>
            <button className={`${styles.filterbuttons} ${styles.graybutton} ${filter === "active" ? styles.selected : ""}`} onClick={() => setFilter("active")} disabled={filter === "active"}>Active</button>
            <button className={`${styles.filterbuttons} ${styles.graybutton} ${filter === "completed" ? styles.selected : ""}`} onClick={() => setFilter("completed")} disabled={filter === "completed"}>Completed</button>
        </div>
    )
}

export default FilterBar