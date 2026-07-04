import React from 'react'
import CounterContext from '../context/CounterContext'
import { useContext } from 'react'

const Goal3 = () => {
    const { count, setCount } = useContext(CounterContext)
    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
        </div>
    )
}

export default Goal3
