import React from 'react'
import { useState, useCallback } from 'react'
import Child from './Child'

const Goal3 = () => {
    const [count, setCount] = useState(0)

    function handleIncrement() {
        setCount(prevCount => prevCount + 1)
    }

    // function handleMessage() {
    //     console.log("Count has been incremented!");
    // }

    const handleMessage = useCallback(() => {
        console.log("Count has been incremented!");
    }, [])

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <Child handleMessage={handleMessage} />
        </div>
    )
}

export default Goal3
