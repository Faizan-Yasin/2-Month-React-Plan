import React, { useState } from 'react'
import { getUsers, createUser, updateUser, getUserById, deleteUser } from '../api/userService'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

const Users = () => {

    const [userId, setUserId] = useState(null)

    const queryClient = useQueryClient()

    const { data, refetch, isLoading, error } = useQuery({
        queryKey: ["users"],
        queryFn: getUsers,
    })

    const { data: user, error: userError } = useQuery({
        queryKey: ["user", userId],
        queryFn: () => getUserById(userId),
        enabled: !!userId,
    })

    const { mutate: createMutate, isPending: isCreating } = useMutation({
        mutationFn: createUser,
        onSuccess: (data) => {
            queryClient.setQueryData(["users"], (oldData) => {
                return [...oldData,
                    data
                ]
            })
        }
    })

    const { mutate: updateMutate, isPending: isUpdating } = useMutation({
        mutationFn: ({ id, userData }) => updateUser(id, userData),
        onSuccess: () => {
            queryClient.setQueryData(["users"], (oldData) => {
                return oldData.map(user => user.id === 11 ? {
                    ...user,
                    name: "Ahmed",
                    email: "ahmed@gmail.com",
                } : user)
            })
        }
    })

    const { mutate: deleteMutate, isPending: isDeleting } = useMutation({
        mutationFn: (id) => deleteUser(id),
        onSuccess: () => {
            queryClient.setQueryData(["users"], (oldData) => {
                return oldData.filter(user => user.id !== 11)
            })
        }
    })

    function handleCreate() {
        createMutate({
            id: crypto.randomUUID(),
            name: "Ali",
            email: "ali@gmail.com",
        })
    }

    function handleUpdate() {
        updateMutate({
            id: 11,
            userData: {
                name: "Ahmed",
                email: "ahmed@gmail.com",
            }
        })
    }

    function handleDelete() {
        deleteMutate(11)
    }

    return (
        <div>
            {isLoading ? (
                <h2>Loading...</h2>
            ) : error ? (
                <h2>{error.message}</h2>
            ) : (
                data.map(user => (
                    <div key={user.id} className='card'>
                        <h3>Name : {user.name}</h3>
                        <h4>Email : {user.email}</h4>
                        <button onClick={() => setUserId(user.id)}>Select User</button>
                        <Link to={`/userDetail/${user.id}`}>View</Link>
                    </div>
                ))
            )}
            <h3>User With ID {userId} : {user?.name}</h3>
            <button onClick={handleCreate} disabled={isCreating}>Create User</button>
            <button onClick={handleUpdate} disabled={isUpdating}>Update User</button>
            <button onClick={handleDelete} disabled={isDeleting}>Delete User</button>
            <button onClick={refetch}>Refetch Users</button>
        </div>
    )
}

export default Users
