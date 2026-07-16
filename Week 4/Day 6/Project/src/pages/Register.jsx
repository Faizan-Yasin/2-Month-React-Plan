import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { registerSchema } from '../schemas/registerSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuth } from '../hooks/useAuth'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Bounce, toast } from 'react-toastify'
import { motion } from "motion/react";

const Register = () => {

  const { register: userRegister } = useAuth()
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const location = useLocation()

  const { register, handleSubmit, formState: { errors, isSubmitting, isDirty } } = useForm({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "",
    },
  })

  async function submit(data) {

    setError(null)

    await new Promise(r => setTimeout(r, 2000))

    const result = await userRegister({
      id: crypto.randomUUID(),
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      password: data.password,
      role: data.role,
    })

    if (!result.success) {
      setError(result.message)
      return
    }

    toast.success('Register Successfully ✅ ', {
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

    navigate(location.state?.from?.pathname || "/dashboard", { replace: true })

  }

  return (
    <motion.div

      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}

      className='bg-gray-100 flex items-center justify-center p-6'>
      <ScrollArea className="h-162.5 w-full max-w-xl">
        <form onSubmit={handleSubmit(submit)} className='bg-white w-full max-w-xl rounded-xl shadow-lg p-8 space-y-5'>
          <h1 className="text-3xl font-bold text-center text-gray-800">Create Account</h1>
          <div>
            <label className='block mb-2 font-medium' htmlFor="first">First Name : </label>
            <input className='w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none' type="text" id='first' {...register("firstName")} />
          </div>
          <p className='text-red-500 text-sm mt-1'>{errors.firstName?.message}</p>
          <div>
            <label className='block mb-2 font-medium' htmlFor="second">Last Name : </label>
            <input className='w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none' type="text" id='second' {...register("lastName")} />
          </div>
          <p className='text-red-500 text-sm mt-1'>{errors.lastName?.message}</p>
          <div>
            <label className='block mb-2 font-medium' htmlFor="third">Email : </label>
            <input className='w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none' type="email" id='third' {...register("email")} />
          </div>
          <p className='text-red-500 text-sm mt-1'>{errors.email?.message}</p>
          <div>
            <label className='block mb-2 font-medium' htmlFor="four">Password : </label>
            <input className='w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none' type="password" id='four' {...register("password")} />
          </div>
          <p className='text-red-500 text-sm mt-1'>{errors.password?.message}</p>
          <div>
            <label className='block mb-2 font-medium' htmlFor="five">Confirm Password : </label>
            <input className='w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none' type="password" id='five' {...register("confirmPassword")} />
          </div>
          <p className='text-red-500 text-sm mt-1'>{errors.confirmPassword?.message}</p>
          <div>
            <label className='block mb-2 font-medium' htmlFor="six">Role : </label>
            <select className='w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none' id="six" {...register("role")}>
              <option value="">Select Your Role</option>
              <option value="Admin">Admin</option>
              <option value="Viewer">Viewer</option>
            </select>
          </div>
          <p className='text-red-500 text-sm mt-1'>{errors.role?.message}</p>
          {
            error && (
              <p bg-red-100 text-red-600 p-3 rounded-lg>
                {error}
              </p>
            )
          }
          <button className='w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-l transition
          disabled:bg-gray-400 disabled:cursor-not-allowed'
            disabled={isSubmitting || !isDirty}>{isSubmitting ? "Creating Account…" : "Register"}</button>
          <p className="text-center text-gray-600">Already have an account?
            <Link to="/login" className="text-blue-600 font-semibold ml-2 hover:underline">Login</Link>
          </p>
        </form>
      </ScrollArea>
    </motion.div>
  )
}

export default Register