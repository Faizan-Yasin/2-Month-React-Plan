import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { userSchema } from '../schemas/userSchema'

const LoginForm = () => {

    const { register, handleSubmit, formState: { isSubmitting, isDirty, errors } } = useForm({
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
        },
        resolver: zodResolver(userSchema)
    })

    function submit(data) {
        console.log(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <label htmlFor="first">Name : </label>
                    <input type="text" id="first" {...register("name")} />
                    <p>{errors.name?.message}</p>
                </div>
                <div>
                    <label htmlFor="second">Email : </label>
                    <input type="email" id="second" {...register("email")} />
                    <p>{errors.email?.message}</p>
                </div>
                <div>
                    <label htmlFor="third">Phone Number : </label>
                    <input type="tel" id="third" {...register("phone")} />
                    <p>{errors.phone?.message}</p>
                </div>
                <div>
                    <label htmlFor="four">Password : </label>
                    <input type="password" id="four" {...register("password")} />
                    <p>{errors.password?.message}</p>
                </div>
                <div>
                    <label htmlFor="five">Confirm Password : </label>
                    <input type="password" id="five" {...register("confirmPassword")} />
                    <p>{errors.confirmPassword?.message}</p>
                </div>
                <button disabled={!isDirty || isSubmitting}>{isSubmitting ? "Saving..." : "Submit"}</button>
                {isDirty && <p>You Have Unsaved Changes.</p>}
            </form>
        </div>
    )
}

export default LoginForm
