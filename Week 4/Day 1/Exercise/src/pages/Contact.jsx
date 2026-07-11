import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()

        navigate("/ThankYou", { state: { name } })
    }

    return (
        <div>
            <h1>Contact</h1>
            <form onSubmit={handleSubmit}>
                <label>Name : </label>
                <input type="text" placeholder='Enter Your Name...' value={name} onChange={(e) => setName(e.target.value)} />
                <label>Email : </label>
                <input type="email" placeholder='Enter Your Email...' value={email} onChange={(e) => setEmail(e.target.value)} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Contact
