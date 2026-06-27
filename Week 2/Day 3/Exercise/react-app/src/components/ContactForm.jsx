import React from 'react'
import { useState } from 'react'

const ContactForm = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" })
    function handleChange(e) {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
    }
    return (
        <div>
            <input name='name' type="text" placeholder='Enter your name' onChange={handleChange} />
            <input name='email' type="email" placeholder='Enter your email' onChange={handleChange} />
            <textarea name="message" placeholder='Enter your message' onChange={handleChange}></textarea>
            <h1>Name : {form.name}</h1>
            <h2>Email : {form.email}</h2>
            <h3>Message : {form.message}</h3>
            <h3>Message Length : {form.message.length}</h3>
            {/* Wrong to store because charCount can be derived from message */}
            <button onClick={() => setForm({ name: "", email: "", message: "" })}>Reset</button>
        </div>
    )
}

export default ContactForm
