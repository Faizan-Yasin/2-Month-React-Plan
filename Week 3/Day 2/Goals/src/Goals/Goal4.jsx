import React from 'react'
import useCounter from '../hooks/useCounter'

const Goal4 = () => {
    // Custom Hook
    const { count, increment, decrement, reset } = useCounter()
    // Utility Function

    function getMessage(type) {
        if (type === 'increment') {
            return ("Increment Clicked")
        }
        if (type === 'decrement') {
            return ("Decrement Clicked")
        }
        return ("Reset Clicked")
    }

    function handleClick(e) {
        alert(getMessage(e.target.name))
    }
    return (
        <div>
            <h1>Count : {count}</h1>
            <button name='increment' onClick={(e) => { increment(), handleClick(e) }}>Increment</button>
            <button name='decrement' onClick={(e) => { decrement(), handleClick(e) }}>Decrement</button>
            <button name='reset' onClick={(e) => { reset(), handleClick(e) }}>Reset</button>
        </div>
    )
}

export default Goal4
