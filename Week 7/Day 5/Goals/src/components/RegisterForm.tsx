import { useState, type SubmitEvent } from "react";

const RegisterForm = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
        e.preventDefault()
        const data = {
            name,
            email,
            password,
        }
        const response = await fetch("/forms", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        const result = await response.json()
        console.log(result);
        if (result.status === 201) {
            console.log("User Created");
        }

    }

    return (
        <div>
            <br />
            <br />
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="name">Name : </label>
                <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Your Name" id="name" />
                <br />
                <br />
                <label htmlFor="email">Email : </label>
                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Your Email" id="email" />
                <br />
                <br />
                <label htmlFor="password">Password : </label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Your Password" id="password" />
                <br />
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default RegisterForm
