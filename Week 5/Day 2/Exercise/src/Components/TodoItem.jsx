import React from 'react'
import styles from './TodoItem.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo, startEdit, toggleTodo } from '../redux/features/todosSlice'

const TodoItem = ({ todo }) => {

    const dispatch = useDispatch()
    const theme = useSelector((state) => state.theme.value)

    return (
        <div className={`${styles.itemcontainer} ${theme ? styles.light : styles.dark}`}>
            <h2 className={styles.itemtitle}>Task Title : {todo.title}</h2>
            <h2 className={styles.itemdescription}>Task Description : {todo.description}</h2>
            <h3 className={styles.itemcreatedat}>Created At : {todo.createdAt}</h3>
            <div className={styles.itembuttonscontainer}>
                <button className={`${styles.itembutton} ${styles.itemeditcontainer} ${styles.button1}`} onClick={() => {
                    dispatch(startEdit({
                        id: todo.id,
                        title: todo.title,
                        description: todo.description,
                    }))
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    })
                }}>
                    <svg className={`${theme ? styles.svglight : styles.svgdark}`} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.1739 6.812C21.7026 6.28342 21.9997 5.56647 21.9998 4.81885C21.9999 4.07124 21.703 3.35421 21.1744 2.8255C20.6459 2.29679 19.9289 1.99971 19.1813 1.99962C18.4337 1.99952 17.7166 2.29642 17.1879 2.825L3.84193 16.174C3.60975 16.4055 3.43805 16.6905 3.34193 17.004L2.02093 21.356C1.99509 21.4425 1.99314 21.5343 2.01529 21.6219C2.03743 21.7094 2.08285 21.7892 2.14673 21.853C2.21061 21.9168 2.29055 21.9621 2.37809 21.9841C2.46563 22.0061 2.55749 22.004 2.64393 21.978L6.99693 20.658C7.3101 20.5628 7.59511 20.3921 7.82693 20.161L21.1739 6.812Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15 5L19 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className={styles.edittext}>Edit</span>
                </button>
                <button className={`${styles.itembutton} ${styles.itemeditcontainer} ${styles.button2}`} onClick={() => dispatch(deleteTodo(todo.id))}>
                    <svg className={`${theme ? styles.svglight : styles.svgdark}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3 6H21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className={styles.edittext}>Delete</span>
                </button>
                <button className={`${styles.itembutton} ${styles.itemeditcontainer} ${styles.button3}`} onClick={() => dispatch(toggleTodo(todo.id))}>
                    <span className="material-symbols-outlined">
                        {todo.completed ? "check_box" : "check_box_outline_blank"}
                    </span>
                    <span className={styles.edittext}>{todo.completed ? "Completed" : "Complete"}</span>
                </button>
            </div>
        </div >
    )
}

export default TodoItem
