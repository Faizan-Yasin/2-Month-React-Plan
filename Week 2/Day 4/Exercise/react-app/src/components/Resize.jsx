import React from 'react'
import { useEffect, useState } from 'react'

const Resize = () => {
    const [listener, setListener] = useState(window.innerWidth)
    useEffect(() => {
        function handleResize() {
            setListener(window.innerWidth)
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])
    return (
        <div>
            <h1>Window width : {listener} px</h1>
        </div>
    )
}

export default Resize
