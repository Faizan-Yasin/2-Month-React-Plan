import React from 'react'

const Tab = ({ children, active }) => {
    return (
        <div>
            <button>{active ? "👉" : ""}
                {children}
            </button>
        </div>
    )
}

export default Tab
