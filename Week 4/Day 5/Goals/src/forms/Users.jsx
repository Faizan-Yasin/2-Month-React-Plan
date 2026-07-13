import React from 'react'
import { apiSchema } from '../schemas/apiSchema'
import { safeParse } from 'zod'

const Users = () => {

    async function getUsers() {
        let response = await fetch("https://jsonplaceholder.typicode.com/users/1")
        let data = await response.json()

        const result = apiSchema.safeParse(data)

        if (!result.success) {
            console.log(result.error);
            return
        }

        console.log(result.data);

    }

    getUsers()

    return (
        <div>

        </div>
    )
}

export default Users
