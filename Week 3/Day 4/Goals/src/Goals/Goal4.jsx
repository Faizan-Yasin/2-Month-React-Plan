import React from 'react'
// import { useState } from 'react'
import { useReducer } from 'react'

const Goal1 = () => {
    // function reducer(state, action) {
    //     switch (action.type) {
    //         case "increment":
    //             return state++

    //         case "decrement":
    //             if (state > 0) {
    //                 return state--
    //             }
    //             return state

    //         case "reset":
    //             return 0

    //         default:
    //             return state
    //     }
    // }

    function reducer(state, action) {
        switch (action.type) {
            case "increment":
                return state + 1

            case "decrement":
                if (state > 0) {
                    return state - 1
                }
                return state

            case "reset":
                return 0

            default:
                return state
        }
    }

    const [count, dispatch] = useReducer(reducer, 0)

    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
            <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>
    )
}

export default Goal1
