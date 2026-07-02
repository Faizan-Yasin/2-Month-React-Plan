import React from 'react'
import { useMemo, useCallback } from 'react'

const Goal4 = () => {
    // const total = useMemo((a, b) => {
    //     return a + b;
    // }, [a, b]);

    // const handleClick = useCallback(() => {
    //     console.log('Button clicked');
    // }, []);

    // useMemo and useCallback can make performance worse when they are used for simple calculations or functions. 
    // They add extra dependency checking, which can be slower than simply creating the value or function again. 
    // They should only be used when they solve a real performance problem.

        return(
            <div>
                <h1>Total: {total}</h1>
                <button onClick={handleClick}>Click me</button>
            </div>
        )
}

export default Goal4
