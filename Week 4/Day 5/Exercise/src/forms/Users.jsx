import React from 'react'
import { usersSchema } from '../schemas/usersSchema'

const Users = () => {

    async function getUsers() {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/")
        const data = await response.json()

        const result = usersSchema.safeParse(data)

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
