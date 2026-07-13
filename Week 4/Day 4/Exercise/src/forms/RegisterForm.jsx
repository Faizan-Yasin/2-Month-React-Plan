import React from 'react'
import { useForm } from 'react-hook-form'

const RegisterForm = () => {

    const { register, handleSubmit, watch, reset, formState: { errors, isSubmitting, isDirty } } = useForm({
        mode: "onBlur",
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            role: "",
        }
    })

    const password = watch("password")

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
                    <input type="text" id='first' {...register("firstName", {
                        required: "First Name Required!",
                        minLength: {
                            value: 2,
                            message: "Minimum Length Of First Name Should be 2!"
                        },
                        maxLength: {
                            value: 20,
                            message: "Maximum Length Of First Name Should be 20!"
                        }
                    })} />
                </div>
                <p style={{ color: "red" }}>{errors.firstName?.message}</p>
                <div>
                    <label htmlFor="second">Last Name : </label>
                    <input type="text" id='second' {...register("lastName", {
                        required: "Last Name Required!",
                        minLength: {
                            value: 2,
                            message: "Minimum Length Of Last Name Should be 2!"
                        },
                        maxLength: {
                            value: 20,
                            message: "Maximum Length Of Last Name Should be 20!"
                        }
                    })} />
                </div>
                <p style={{ color: "red" }}>{errors.lastName?.message}</p>
                <div>
                    <label htmlFor="third">Email : </label>
                    <input type="email" id='third' {...register("email", {
                        required: "Email Required!",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid Email!"
                        }
                    })} />
                </div>
                <p style={{ color: "red" }}>{errors.email?.message}</p>
                <div>
                    <label htmlFor="four">Password : </label>
                    <input type="password" id='four' {...register("password", {
                        required: "Password Required!",
                        minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters!",
                        },
                        pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                            message: "Must include uppercase, lowercase, number, and special character!"
                        }
                    })} />
                </div>
                <p style={{ color: "red" }}>{errors.password?.message}</p>
                <div>
                    <label htmlFor="five">Confirm Password : </label>
                    <input type="password" id='five' {...register("confirmPassword", {
                        required: "Confirm Password Required!",
                        validate: (value) => value === password || "Password is not match with Confirm Password!"
                    })} />
                </div>
                <p style={{ color: "red" }}>{errors.confirmPassword?.message}</p>
                <div>
                    <label htmlFor="six">Role : </label>
                    <select id="six" {...register("role", {
                        required: "Role is Required"
                    })}>
                        <option value="">Select Your Role</option>
                        <option value="Admin">Admin</option>
                        <option value="Viewer">Viewer</option>
                    </select>
                </div>
                <p style={{ color: "red" }}>{errors.role?.message}</p>
                {isDirty && <p>Form has changed.</p>}
                <button disabled={isSubmitting || !isDirty}>{isSubmitting ? "Creating account…" : "Submit"}</button>
            </form>
        </div>
    )
}

export default RegisterForm
