import React from 'react'
import {memo} from 'react'

const Child = memo(({ handleMessage }) => {
    console.log("Child component rendered");
    return (
        <div>
            <button onClick={handleMessage}>Send Message</button>
        </div>
    )
})

export default Child
