import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState({ count: 0, history: [] })
    function Increment() {
        setCount(prev => {
            const newcount = prev.count + 1
            return { ...prev, count: newcount, history: [...prev.history, newcount] }
        })
    }
    function Decrement() {
        setCount(prev => {
            if (prev.count == 0) {
                return prev
            }
            const newcount = prev.count - 1
            return { ...prev, count: newcount, history: [...prev.history, newcount] }
        })
    }
    function DelayedIncrement() {
        setTimeout(() => {
            // setCount({...count,count:count.count+1,history:[...count.history,count.count+1]})
            // setTimeout captures the old state value. When multiple updates happen before render, React uses outdated data (stale state), causing incorrect results. Functional update (prev => ...) always uses the latest state and avoids this bug.
            setCount(prev => {
                const newcount = prev.count + 1
                return { ...prev, count: newcount, history: [...prev.history, newcount] }
            })
        }, 2000)
    }
    return (
        <div>
            <h1>Count : {count.count}</h1>
            <h2>History : {count.history.join("->")}</h2>
            <button onClick={Increment}>Increment</button>
            <button onClick={() => setCount({ count: 0, history: [] })}>Reset</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={DelayedIncrement}>Delayed Increment</button>
        </div>
    )
}

export default Counter
