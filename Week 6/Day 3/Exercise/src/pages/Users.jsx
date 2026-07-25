import React, { useMemo, useState } from 'react'
import { deleteUser, getUsers } from '../api/userService'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import Form from '../components/Form'
import { toast } from 'react-toastify'

const Users = () => {

    const [editUser, setEditUser] = useState(null)
    const queryClient = useQueryClient()

    const { data: users, isLoading: usersLoading, error: usersError } = useQuery({
        queryKey: ["users"],
        queryFn: getUsers,
    })

    const { mutate: deleteMutate, isPending: isDeleting, error: deleteError } = useMutation({
        mutationFn: (id) => deleteUser(id),
        onMutate: async (id) => {
            await queryClient.cancelQueries({ queryKey: ["users"] })

            const previousData = queryClient.getQueryData(["users"])

            queryClient.setQueryData(["users"], (oldData) => (
                (oldData ?? []).filter(user => user.id !== id)
            ))

            return { previousData }
        },
        onSuccess: () => {
            toast.error("User Deleted")
        },
        onError: (error, id, context) => {
            queryClient.setQueryData(["users"], context.previousData)
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ["users"] })
        },
    })

    function handleDelete(id) {
        deleteMutate(id)
    }

    function handleUpdate(user) {
        setEditUser(user)
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
        })
    }

    if (usersLoading) {
        return <h2 className='container'>Loading Users...</h2>
    }

    if (usersError) {
        return <h2 className='container'>{usersError.message}</h2>
    }

    return (
        <div className='container'>
            {users.map(user => (
                <div key={user.id} className='card'>
                    <h3>User Name : {user.name}</h3>
                    <h3>User Email : {user.email}</h3>
                    <button onClick={() => handleUpdate(user)}>Update</button>
                    <button onClick={() => handleDelete(user.id)}>Delete</button>
                </div>
            ))}

            <Form editUser={editUser} setEditUser={setEditUser} />
        </div>
    )
}

export default Users
