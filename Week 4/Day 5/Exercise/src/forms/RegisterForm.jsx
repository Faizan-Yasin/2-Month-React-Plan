import React from 'react'
import { useForm } from 'react-hook-form'
import { registerSchema } from '../schemas/registerSchema'
import { zodResolver } from '@hookform/resolvers/zod'

const RegisterForm = () => {

    const { register, handleSubmit, reset, formState: { errors, isSubmitting, isDirty } } = useForm({
        mode: "onBlur",
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            role: "",
            bio: "",
            newsletter: false,
        },
        resolver: zodResolver(registerSchema)
    })

    async function submit(data) {
        await new Promise(r => setTimeout(r, 2000))
        console.log(data);
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <label htmlFor="first">First Name : </label>
                    <input type="text" id='first' {...register("firstName")} />
                </div>
                <p style={{ color: "red" }}>{errors.firstName?.message}</p>
                <div>
                    <label htmlFor="second">Last Name : </label>
                    <input type="text" id='second' {...register("lastName")} />
                </div>
                <p style={{ color: "red" }}>{errors.lastName?.message}</p>
                <div>
                    <label htmlFor="third">Email : </label>
                    <input type="email" id='third' {...register("email")} />
                </div>
                <p style={{ color: "red" }}>{errors.email?.message}</p>
                <div>
                    <label htmlFor="four">Password : </label>
                    <input type="password" id='four' {...register("password")} />
                </div>
                <p style={{ color: "red" }}>{errors.password?.message}</p>
                <div>
                    <label htmlFor="five">Confirm Password : </label>
                    <input type="password" id='five' {...register("confirmPassword")} />
                </div>
                <p style={{ color: "red" }}>{errors.confirmPassword?.message}</p>
                <div>
                    <label htmlFor="six">Role : </label>
                    <select id="six" {...register("role")}>
                        <option value="">Select Your Role</option>
                        <option value="Admin">Admin</option>
                        <option value="Viewer">Viewer</option>
                    </select>
                </div>
                <p style={{ color: "red" }}>{errors.role?.message}</p>
                <div>
                    <label htmlFor="seven">Bio : </label>
                    <textarea id="seven" {...register("bio")} />
                </div>
                <p style={{ color: "red" }}>{errors.bio?.message}</p>
                <div>
                    <label htmlFor="eight">Subscribe to Newsletter : </label>
                    <input type="checkbox" id='eight' {...register("newsletter")} />
                </div>
                <p style={{ color: "red" }}>{errors.newsletter?.message}</p>
                {isDirty && <p>Form has changed.</p>}
                <button disabled={isSubmitting || !isDirty}>{isSubmitting ? "Creating account…" : "Submit"}</button>
            </form>
        </div>
    )
}

export default RegisterForm
