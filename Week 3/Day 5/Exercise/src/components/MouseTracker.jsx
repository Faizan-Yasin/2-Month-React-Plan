import React, { useState } from 'react'

const MouseTracker = ({ render }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    function handleMove(e) {
        setPosition({
            x: e.clientX,
            y: e.clientY
        })
    }
    return (
        <div style={{ height: "100vh" }} onMouseMove={handleMove}>
            {render(position)}
        </div>
    )
}

export default MouseTracker
