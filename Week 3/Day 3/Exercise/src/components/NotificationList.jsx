import React from 'react'
import { useNotification } from '../context/NotificationContext'
import styles from '../components/NotificationList.module.css'

const NotificationList = () => {
    const { notifications, addNotification, dismissNotification } = useNotification()
    return (
        <div className={styles.container}>
            {notifications.map((notification) => (
                <div key={notification.id} className={styles.notifications}>
                    <h3>{notification.message}</h3>
                    <button onClick={() => dismissNotification(notification.id)}>x</button>
                </div>
            ))}
        </div>
    )
}

export default NotificationList
