import React from 'react'
import { useNotification } from '../../context/NotificationContext'

const NotificationList = () => {

  const { notifications, addNotification, dismissNotification } = useNotification()

  return (
    <div className='fixed top-4 right-4 space-y-3 z-50'>
      {notifications.map(item => (
        <div key={item.id}
          className='bg-green-600 text-white px-5 py-3 rounded shadow-lg flex items-center justify-center gap-4 animate-pulse'>
          <span>{item.message}</span>
          <button className='font-bold' onClick={() => dismissNotification(item.id)}>X</button>
        </div>
      ))}
    </div>
  )
}

export default NotificationList
