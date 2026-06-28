import React from 'react'
import { useEffect, useState } from 'react'

const Main = () => {
    const [count, setCount] = useState(0)
    // useEffect(() => {
    //     const id = setInterval(() => {
    //         console.log(count);
    //     }, 1000)
    //     return () =>{
    //         clearInterval(id)
    //         console.log("Set Interval Clear");
    //     }
    // }, [])

    useEffect(() => {
        const id = setInterval(() => {
            console.log(count);
        }, 1000)
        return () =>{
            clearInterval(id)
            console.log("Set Interval Clear");
        }
    }, [count])
    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
        </div>
    )
}

export default Main
