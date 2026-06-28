import React from 'react'
import { useState, useEffect } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    // useEffect(() => {
    //     const id = setInterval(() => {
    //         console.log(count);
    //     }, 5000);
    //     return () => {
    //         clearInterval(id)
    //     }
    // }, [])

    // Bug:
    // Interval captured old count (stale closure)

    // Fix:
    // Add count to deps so effect recreates interval
    // with latest count value

    useEffect(() => {
        const id = setInterval(() => {
            console.log(count);
        }, 5000);
        return () => {
            clearInterval(id)
        }
    }, [count])
    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
        </div>
    )
}

export default Counter
