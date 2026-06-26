import React from 'react'

const CardHeader = ({ icon, title, action }) => {
    return (
        <>
            <div>
                {icon}
                {" "}
                {title}
            </div>
            <div>
                {action}
            </div>
        </>
    )
}

export default CardHeader
