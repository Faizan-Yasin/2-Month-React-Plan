import React, { useState } from 'react'

const MouseTracker = ({ render }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    function handelMove(e) {
        setPosition({
            x: e.clientX,
            y: e.clientY,
        })
    }
    return (
        <div style={{ height: "100vh" }} onMouseMove={handelMove}>
            {render(position)}
        </div>
    )
}

export default MouseTracker
