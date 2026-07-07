import React from 'react'

const Card = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

Card.Title = function ({ children }) {
    return <h1>{children}</h1>
}

Card.Description = function ({ children }) {
    return <h2>{children}</h2>
}

Card.ReadMore = ({ children }) => {
    return <p>{children}</p>
}

export default Card
