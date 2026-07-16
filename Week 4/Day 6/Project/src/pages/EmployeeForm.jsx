import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { employeeSchema } from '@/schemas/employeeSchema'
import { motion } from "motion/react";
import { useNavigate, useParams } from 'react-router-dom'
import useEmployees from '@/hooks/useEmployees';
import { Bounce, toast } from 'react-toastify'

const EmployeeForm = () => {

    const [error, setError] = useState(null)
    const navigate = useNavigate()
    const { addEmployee, updateEmployee, getEmployeeById } = useEmployees()
    const { id } = useParams()

    const { register, reset, handleSubmit, formState: { errors, isDirty, isSubmitting } } = useForm({
        resolver: zodResolver(employeeSchema),
        defaultValues: {
            name: "",
            email: "",
            department: "",
            status: "",
        },
        mode: "onBlur",
    })

    useEffect(() => {

        if (!id) return;

        const employee = getEmployeeById(id);

        if (employee) {
            reset(employee);
        }

    }, [id, getEmployeeById, reset]);

    async function submit(data) {
        setError(null)

        await new Promise(r => setTimeout(r, 2000))

        if (id) {

            const result = await updateEmployee({
                id,
                name: data.name,
                email: data.email,
                department: data.department,
                status: data.status,
            })

            toast.success('Update Added Successfully ✅ ', {
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

            navigate("/employees", { replace: true })
        }
        else {
            const result = await addEmployee({
                id: crypto.randomUUID(),
                name: data.name,
                email: data.email,
                department: data.department,
                status: data.status,
            })

            toast.success('Employees Added Successfully ✅ ', {
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

            navigate("/employees", { replace: true })
        }

    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}

            className='bg-gray-100 flex items-center justify-center p-6'
        >
            <form onSubmit={handleSubmit(submit)} className='bg-white w-full max-w-xl rounded-xl shadow-lg p-8 space-y-5'>
                <h1 className="text-3xl font-bold text-center text-gray-800">{id ? "Update Employee" : "Add Employee"}</h1>
                <div>
                    <label className='block mb-2 font-medium' htmlFor="name">Name : </label>
                    <input className='w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none' type="text" id='name' {...register("name")} />
                </div>
                <p className='text-red-500 text-sm mt-1'>{errors.name?.message}</p>

                <div>
                    <label className='block mb-2 font-medium' htmlFor="email">Email : </label>
                    <input className='w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none' type="email" id='email' {...register("email")} />
                </div>
                <p className='text-red-500 text-sm mt-1'>{errors.email?.message}</p>

                <div>
                    <label className='block mb-2 font-medium' htmlFor="dapartment">Department : </label>
                    <input className='w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none' type="text" id='department' {...register("department")} />
                </div>
                <p className='text-red-500 text-sm mt-1'>{errors.department?.message}</p>

                <div>
                    <label className='block mb-2 font-medium' htmlFor="status">Status : </label>
                    <select className='w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none' id="status" {...register("status")}>
                        <option value="">Select Your Status</option>
                        <option value="Active">Active</option>
                        <option value="Pending">Pending</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div>
                <p className='text-red-500 text-sm mt-1'>{errors.status?.message}</p>

                <button className='w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-l transition
          disabled:bg-gray-400 disabled:cursor-not-allowed'
                    disabled={isSubmitting || !isDirty}>{isSubmitting ? `${id ? "Updating Employee" : "Creating Employee…"}` : `${id ? "Update Employee" : "Add Employee"}`}</button>

            </form>
        </motion.div>
    )
}

export default EmployeeForm
