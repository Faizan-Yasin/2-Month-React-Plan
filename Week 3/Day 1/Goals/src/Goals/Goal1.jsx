import React from 'react'
// import { useState } from 'react'
import { useRef } from 'react'

const Goal1 = () => {
    // const [count, setCount] = useState(0)

    const count = useRef(0)

    console.log("Re-Rendering Goal1 Component")

    function handleClick() {
        // setCount(count + 1)
        // console.log(count)

        count.current = count.current + 1
        console.log(count.current)
    }
    return (
        <div>
            <h1>Count: {count.current}</h1>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}

export default Goal1
