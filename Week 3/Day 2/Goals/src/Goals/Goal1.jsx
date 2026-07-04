import React from 'react'
import useCounter from '../hooks/useCounter'

const Goal1 = () => {
    const { count, increment, decrement, reset } = useCounter()
    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Goal1
