import React, { useState } from 'react'
import Counter from './Counter'

const CounterContainer = () => {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(prev => prev + 1)
    }
    function decrement() {
        if (count > 0) {
            setCount(prev => prev - 1)
        }
    }
    function reset() {
        setCount(0)
    }
    return (
        <div>
            <Counter count={count} increment={increment} decrement={decrement} reset={reset} />
        </div>
    )
}

export default CounterContainer
