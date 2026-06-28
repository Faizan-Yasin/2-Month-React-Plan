// LifeCycle Phases

import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Main = () => {
    const [count, setCount] = useState(0)
    // 1 Mount LifeCycle
    // useEffect(()=>{
    //     console.log("Mounted");
    // },[])

    // 2 Update LifeCycle
    // useEffect(() => {
    //     console.log("Updated");
    // }, [count])

    // 3 UnMount LifeCycle
    useEffect(()=>{
        console.log("Mounted");
        return ()=>{
            console.log("UnMounted");
        }
    },[])

    // 4 Every Render LifeCycle
    // useEffect(()=>{
    //     console.log("Every Render");
    // })
    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>Click Me</button>
        </div>
    )
}

export default Main
