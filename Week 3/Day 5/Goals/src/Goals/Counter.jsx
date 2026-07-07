import React from 'react'

const Counter = ({ count, increment, decrement, reset }) => {
    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter
