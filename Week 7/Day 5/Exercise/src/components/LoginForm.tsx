import { loginSchema } from "../schemas/loginSchema"
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import type { Login } from "../schemas/loginSchema"
import { useNavigate } from "react-router"

const LoginForm = () => {
    const navigate = useNavigate()

    const { register, handleSubmit, reset, formState: { errors, isSubmitting, isDirty } } = useForm<Login>({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: zodResolver(loginSchema)
    }
    )

    async function submit(data: Login) {
        await new Promise(r => setTimeout(r, 2000))
        sessionStorage.setItem("user", JSON.stringify(data))
        const response = await fetch("/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        })
        if (!response.ok) {
            throw new Error("Login Failed!")
        }
        console.log(await response.json());
        reset()
        navigate("/userDirectory", { replace: true })
    }

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
            <form
                className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 space-y-6 border border-gray-100"
                onSubmit={handleSubmit(submit)}
            >
                <div className="text-center space-y-1">
                    <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
                </div>

                <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        className={`w-full px-4 py-2.5 rounded-lg border text-gray-800 placeholder-gray-400 focus:outline-none transition-all duration-200 ${errors.email
                            ? "border-red-500 focus:ring-2 focus:ring-red-200"
                            : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            }`}
                        {...register("email")}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-xs font-medium mt-1">{errors.email.message}</p>
                    )}
                </div>

                <div className="space-y-1.5">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        className={`w-full px-4 py-2.5 rounded-lg border text-gray-800 placeholder-gray-400 focus:outline-none transition-all duration-200 ${errors.password
                            ? "border-red-500 focus:ring-2 focus:ring-red-200"
                            : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            }`}
                        {...register("password")}
                    />
                    {errors.password && (
                        <p className="text-red-500 text-xs font-medium mt-1">{errors.password.message}</p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting || !isDirty}
                    className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg shadow-sm active:scale-[0.98] transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 flex justify-center items-center gap-2"
                >
                    {isSubmitting ? (
                        <>
                            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                            <span>Logging in...</span>
                        </>
                    ) : (
                        "Login"
                    )}
                </button>
            </form>
        </div>
    )
}

export default LoginForm
