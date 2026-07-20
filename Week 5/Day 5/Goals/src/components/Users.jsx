import React from 'react'
import { nameAtom, usersAtom } from '../jotai/usersAtom'
import { userFamily } from '../jotai/usersAtom'
import { useAtom } from 'jotai'

const Users = () => {

    const [users,] = useAtom(usersAtom)
    const [user,] = useAtom(userFamily(3))
    const [name,] = useAtom(nameAtom)

    return (
        <div>
            {
                users.map(user => (
                    <p key={user.id}>
                        {user.name}
                    </p>
                ))
            }
            <div>
                <p>User Name : {user.name} </p>
            </div>
            <div>
                <p>User Name : {name} </p>
            </div>
        </div>
    )
}

export default Users
