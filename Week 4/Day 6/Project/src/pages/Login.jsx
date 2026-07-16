import React, { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema } from "../schemas/loginSchema"
import { useAuth } from "../hooks/useAuth"
import { Bounce, toast } from "react-toastify";
import { motion } from "motion/react";

const Login = () => {

  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [error, setError] = useState(null)

  const { register, handleSubmit, formState: { errors, isSubmitting, isDirty, } } = useForm({

    resolver: zodResolver(loginSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    }
  })

  async function submit(data) {

    setError(null)

    const result = await login(data.email, data.password)

    if (!result.success) {

      setError(result.message)
      return

    }

    toast.success('Login Successfully ✅ ', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

    navigate(location.state?.from?.pathname || "/dashboard", { replace: true, })

  }

  return (

    <motion.div

      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}

      className="min-h-[80vh] bg-gray-100 flex justify-center items-center px-6">
      <form onSubmit={handleSubmit(submit)} className="bg-white w-full max-w-md rounded-xl shadow-lg p-8 space-y-6">

        <div className="text-center">
          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <p className="text-gray-500 mt-2">Login to your account</p>
        </div>

        <div>
          <label className="block mb-2 font-medium">Email</label>
          <input type="email" {...register("email")} className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
          <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>
        </div>

        <div>
          <label className="block mb-2 font-medium">Password</label>
          <input type="password" {...register("password")} className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
          <p className="text-red-500 text-sm mt-1">{errors.password?.message}</p>
        </div>
        {
          error && (
            <div className="bg-red-100 text-red-600 p-3 rounded-lg">
              {error}
            </div>
          )
        }

        <button type="submit" disabled={!isDirty || isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition disabled:bg-gray-400 disabled:cursor-not-allowed">
          {
            isSubmitting
              ? "Signing In..."
              : "Login"
          }

        </button>

        <p className="text-center text-gray-600">Don't have an account?
          <Link to="/register" className="text-blue-600 font-semibold ml-2 hover:underline">Register</Link>
        </p>

      </form>
    </motion.div>
  )
}

export default Login