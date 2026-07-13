import React from 'react'
import { useForm } from 'react-hook-form'

const LoginForm = () => {

    const { register, watch, handleSubmit, formState: { isSubmitted, isDirty, errors } } = useForm({
        defaultValues: {
            name: "",
            email: "",
        }
    })

    const password = watch("password")

    function submit(data) {
        console.log(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <label htmlFor="first">Name : </label>
                    <input type="text" id="first" {...register("name",
                        {
                            required: "Name Required!",
                            minLength: {
                                value: 3,
                                message: "Minimum Length should be 3"
                            },
                            maxLength: {
                                value: 20,
                                message: "Maximum Length should be 20"
                            },
                        }
                    )} />
                    <p>{errors.name?.message}</p>
                </div>
                <div>
                    <label htmlFor="second">Email : </label>
                    <input type="email" id="second" {...register("email",
                        {
                            required: "Email Required!",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid Email!"
                            }
                        }
                    )} />
                    <p>{errors.email?.message}</p>
                </div>
                <div>
                    <label htmlFor="third">Password : </label>
                    <input type="password" id="third" {...register("password",
                        {
                            required: "Password Required!",
                            minLength: {
                                value: 8,
                                message: "Password must be at least 8 characters",
                            },
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                                message: "Must include uppercase, lowercase, number, and special character"
                            }
                        }
                    )} />
                    <p>{errors.password?.message}</p>
                </div>
                <div>
                    <label htmlFor="four">Confirm Password : </label>
                    <input type="password" id="four" {...register("confirm",
                        {
                            required: "Confirm Password Required!",
                            validate: (value) =>
                                password === value || "Password is not match with Confirm Password!"

                        }
                    )} />
                    <p>{errors.confirm?.message}</p>
                </div>
                <button disabled={isSubmitted}>{isSubmitted ? "Saving..." : "Submit"}</button>
                {isDirty && <p>You Have Unsafed Changes.</p>}
            </form>
        </div>
    )
}

export default LoginForm
