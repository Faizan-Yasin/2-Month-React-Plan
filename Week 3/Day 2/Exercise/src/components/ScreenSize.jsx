import React from 'react'
import useWindowSize from '../hooks/useWindowSize'

const ScreenSize = () => {
    const { width, height } = useWindowSize()
    return (
        <div>
            <h1>Width : {width}</h1>
            <h1>Height : {height}</h1>
            <h1>{width < 768 ? "Mobile" : "Desktop"}</h1>
        </div>
    )
}

export default ScreenSize
