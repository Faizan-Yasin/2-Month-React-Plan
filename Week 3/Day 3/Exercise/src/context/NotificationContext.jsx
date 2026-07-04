import React from 'react'
import { createContext, useContext, useState } from 'react'

const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([])

    function addNotification(message) {
        const newNotification = {
            id: crypto.randomUUID(),
            message
        }
        setNotifications(prev => [...prev, newNotification])
    }

    function dismissNotification(id) {
        setNotifications(prev => prev.filter(notification => notification.id !== id))
    }
    return (
        <NotificationContext.Provider value={{ notifications, addNotification, dismissNotification }}>
            {children}
        </NotificationContext.Provider>
    )
}

export function useNotification() {
    const context = useContext(NotificationContext)

    if (!context) {
        throw new Error("useNotification must be used within NotificationProvider")
    }

    return context
}
