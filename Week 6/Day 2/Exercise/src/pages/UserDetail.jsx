import React from 'react'
import { useParams } from 'react-router-dom'
import { getUserById } from '../api/userService'
import { useQuery } from '@tanstack/react-query'

const UserDetail = () => {

    const { id } = useParams()

    const { data, isLoading, error } = useQuery({
        queryKey: ["user", id],
        queryFn: () => getUserById(id),
    })

    return (
        <div>
            {
                isLoading ? (<h2>Loading...</h2>) :
                    error ? (<h2>{error.message}</h2>) :
                        (
                            <div>
                                <h3>Name : {data.name}</h3>
                                <h4>Email : {data.email}</h4>
                            </div>
                        )
            }
        </div>
    )
}

export default UserDetail
