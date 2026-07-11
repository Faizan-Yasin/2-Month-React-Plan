import React from 'react'
import { useLocation } from 'react-router-dom'

const ThankYou = () => {

    const location = useLocation()

    const name = location.state?.name

    return (
        <div>
            <h1>
                Thank You{name ? `, ${name}!` : "!"}
            </h1>

            <p>Your message has been submitted successfully.</p>
        </div>
    )
}

export default ThankYou
