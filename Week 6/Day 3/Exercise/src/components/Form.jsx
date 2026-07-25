import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { formSchema } from '../schemas/formSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { createUser, updateUser } from '../api/userService'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'

const Form = ({ editUser, setEditUser }) => {

    const queryClient = useQueryClient()

    const { mutate: createMutate, error: createError, isPending: isCreating } = useMutation({
        mutationFn: (userData) => createUser(userData),
        onMutate: async (userData) => {

            await queryClient.cancelQueries({ queryKey: ["users"] })

            const previousData = queryClient.getQueryData(["users"])

            queryClient.setQueryData(["users"], (oldData) => [
                ...(oldData ?? []),
                userData,
            ])

            return { previousData }
        },
        onSuccess: () => {
            toast.success("User Added")
            reset()
        },
        onError: (error, userData, context) => {
            queryClient.setQueryData(["users"], context.previousData)
        },
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: ["users"]
            })
        }
    })

    const { mutate: updateMutate, error: updateError, isPending: isUpdating } = useMutation({
        mutationFn: ({ id, userData }) => updateUser(id, userData),
        onMutate: async ({ id, userData }) => {

            await queryClient.cancelQueries({ queryKey: ["users"] })

            const previousData = queryClient.getQueryData(["users"])

            queryClient.setQueryData(["users"], (oldData) => (
                (oldData ?? []).map(user => user.id === id ? { ...user, ...userData } : user)
            ))

            return { previousData }
        },
        onSuccess: () => {
            toast.success("User Updated")
            setEditUser(null)
        },
        onError: (error, userData, context) => {
            queryClient.setQueryData(["users"], context.previousData)
        },
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: ["users"]
            })
        }
    })

    const { register, reset, handleSubmit, formState: { errors, isSubmitting, isDirty } } = useForm({
        defaultValues: {
            name: "",
            email: "",
        },
        mode: "onBlur",
        resolver: zodResolver(formSchema)
    })


    useEffect(() => {
        if (editUser) {
            reset({
                name: editUser.name,
                email: editUser.email,
            })
        } else {
            reset({
                name: "",
                email: "",
            })
        }
    }, [editUser, reset])

    function submit(data) {

        if (editUser) {
            updateMutate({
                id: editUser.id,
                userData: data,
            })
        }
        else {
            createMutate({
                id: crypto.randomUUID(),
                ...data,
            })
        }

    }

    return (
        <div className='form'>
            <form onSubmit={handleSubmit(submit)} className='container'>

                <div>
                    <label htmlFor="name">Name : </label>
                    <input type="text" {...register("name")} />
                </div>
                <span className='error'>{errors && errors.name?.message}</span>

                <div>
                    <label htmlFor="email">Email : </label>
                    <input type="email" {...register("email")} />
                </div>
                <span className='error'>{errors && errors.email?.message}</span>

                <button disabled={isSubmitting || !isDirty}>{editUser ? (isUpdating ? "Updating User..." : "Update User") : (isCreating ? "Creating User..." : "Create User")}</button>

                {createError && createError.message}
                {updateError && updateError.message}

            </form>
        </div>
    )
}

export default Form