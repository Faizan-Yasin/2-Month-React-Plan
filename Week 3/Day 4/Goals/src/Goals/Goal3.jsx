import React from 'react'
import { useUser } from '../hooks/useUser'

const Goal3 = () => {
    const { state } = useUser()
    return (
        <div>
            {state.users.map((user) => {
                return (
                    <div key={user.id}>
                        <h2>User Name : {user.name}</h2>
                        <h2>User Email : {user.email}</h2>
                        <h2>User Phone : {user.phone}</h2>
                        <h2>User Gender : {user.gender}</h2>
                    </div>
                )
            })}
        </div>
    )
}

export default Goal3
