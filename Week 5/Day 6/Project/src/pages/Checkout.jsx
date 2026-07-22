import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckoutSchema } from '../schemas/CheckoutSchema'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import { replace, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Checkout = () => {

  const { register, handleSubmit, formState: { errors, isSubmitting, isDirty } } = useForm({
    defaultValues: {
      name: "",
      email: "",
      address: "",
      card: "",
      expiry: "",
      cvv: "",
    },
    resolver: zodResolver(CheckoutSchema)
  })
  const navigate = useNavigate()
  const theme = useSelector((state) => state.theme.mode)

  async function submit(data) {
    await new Promise(r => setTimeout(r, 2000))
    console.log(data);

    toast.success("Order Placed Successfully ✅")
    navigate("/success", { replace: true })
  }

  return (
    <motion.div

      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}

      className={`${theme === "light" ? "bg-gray-900 text-black" : "bg-gray-100"} min-h-screen flex justify-center items-center px-6`}>
      <form onSubmit={handleSubmit(submit)} className={`${theme === "light" ? "bg-gray-700 text-white" : "bg-white"} w-full max-w-md rounded-xl shadow-lg p-8 space-y-3 md:space-y-6`}>

        <div className="text-center">
          <h1 className="text-3xl font-bold">Check Out</h1>
        </div>

        <div>
          <label className="block mb-2 font-medium">Name</label>
          <input type="text" {...register("name")} className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
          <p className="text-red-500 text-sm mt-1">{errors.name?.message}</p>
        </div>

        <div>
          <label className="block mb-2 font-medium">Email</label>
          <input type="email" {...register("email")} className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
          <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>
        </div>

        <div>
          <label className="block mb-2 font-medium">Address</label>
          <textarea type="text" {...register("address")} className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
          <p className="text-red-500 text-sm mt-1">{errors.address?.message}</p>
        </div>

        <div>
          <label className="block mb-2 font-medium">Card Number</label>
          <input type="text" {...register("card")} className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
          <p className="text-red-500 text-sm mt-1">{errors.card?.message}</p>
        </div>

        <div>
          <label className="block mb-2 font-medium">Expiry</label>
          <input type="text" {...register("expiry")} className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
          <p className="text-red-500 text-sm mt-1">{errors.expiry?.message}</p>
        </div>

        <div>
          <label className="block mb-2 font-medium">CVV</label>
          <input type="password" {...register("cvv")} className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
          <p className="text-red-500 text-sm mt-1">{errors.cvv?.message}</p>
        </div>

        <button type="submit" disabled={!isDirty || isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition disabled:bg-gray-400 disabled:cursor-not-allowed">
          {
            isSubmitting
              ? "Processing..."
              : "Place Order"
          }

        </button>

      </form>
    </motion.div>
  )
}

export default Checkout
