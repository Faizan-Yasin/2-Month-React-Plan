import React from 'react'
import Card from './Card'

const Notification = ({type,message}) => {

    const icons = {
        info: "ℹ️",
        warning: "⚠️",
        error: "❌"
    }
  return (
    <div>
      <Card title={type.toUpperCase()} footer={<button>Dismiss</button>} >
      <p>
        {icons[type]}
        {" "}
        {message}
      </p>
      </Card>
    </div>
  )
}

export default Notification
