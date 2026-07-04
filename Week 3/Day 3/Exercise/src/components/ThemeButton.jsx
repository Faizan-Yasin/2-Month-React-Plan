import React from 'react'
import { useTheme } from '../context/ThemeContext'
import { useEffect } from 'react'
import styles from '../components/ThemeButton.module.css'
import { useApp } from '../context/AppContext'
import { useNotification } from '../context/NotificationContext'

const ThemeButton = () => {
    console.log("ThemeButton Render")
    const { theme, toggleTheme } = useTheme()
    const { addNotification } = useNotification()
    // const { theme, toggleTheme } = useApp()

    useEffect(() => {
        document.body.className = theme ? styles.light : styles.dark
    }, [theme])

    return (
        <div>
            <h1>Theme : {theme ? "Light" : "Dark"}</h1>
            <button onClick={() => {
                toggleTheme();
                addNotification(`Theme Changed To ${theme ? "Dark" : "Light"}`);
            }}>Toggle Theme</button>
        </div>
    )
}

export default ThemeButton
