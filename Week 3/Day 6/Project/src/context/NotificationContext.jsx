import React from 'react'
import { createContext, useContext, useState } from 'react'

const NotificationContext = createContext()

const NotificationProvider = ({ children }) => {

  const [notifications, setNotifications] = useState([])

  function addNotification(message) {

    const id = crypto.randomUUID()

    const notification = {
      id,
      message
    }

    setNotifications(prev => [...prev, notification])

    setTimeout(() => {
      dismissNotification(id)
    }, 4000)

  }

  function dismissNotification(id) {
    setNotifications(prev => prev.filter(item => item.id !== id))
  }

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, dismissNotification }}>
      {children}
    </NotificationContext.Provider>
  )
}

function useNotification() {

  const context = useContext(NotificationContext)

  if (!context) {
    throw new Error("useNotification must be used within NotificationProvider")
  }

  return context

}

export { useNotification, NotificationProvider }
