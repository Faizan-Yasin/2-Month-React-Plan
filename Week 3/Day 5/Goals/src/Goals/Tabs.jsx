import React from 'react'

const Tabs = ({ children }) => {
    return (
        React.Children.map(children, (child, index) => {
            return React.cloneElement(child, {
                active: index === 0
            })
        })
    )
}

export default Tabs
