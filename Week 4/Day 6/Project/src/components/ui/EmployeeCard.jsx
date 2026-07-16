import { useAuth } from "@/hooks/useAuth";
import React from "react"
import { Bounce, toast } from "react-toastify";
import ActionButton from "@/pages/ActionButton";
import { useTheme } from "@/hooks/useTheme";

const EmployeeCard = ({ employee, deleteEmployee }) => {

  const { user } = useAuth()
  const { theme } = useTheme()

  function handleDelete() {
    deleteEmployee(employee.id)

    toast.success('Employee Deleted Successfully ✅ ', {
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

  }

  return (
    <div className={`${theme === "light" ? "bg-white text-black" : "bg-gray-600 text-white"} rounded-lg shadow p-6 flex justify-between items-center`}>
      <div>
        <h2 className="text-xl font-bold">{employee.name}</h2>
        <p>{employee.email}</p>
        <p>Department :{employee.department}</p>
        <p>Status :{employee.status}</p>
      </div>

      <div className="grid grid-cols-2 md:flex gap-2">

        <ActionButton
          to={`/employees/${employee.id}`}
          color="bg-blue-600"
          icon="visibility"
          text="View"
        />

        {user.role === "Admin" && (
          <>
            <ActionButton
              isButton
              onClick={handleDelete}
              color="bg-red-600"
              icon="delete"
              text="Delete"
            />

            <ActionButton
              to="/employees/new"
              color="bg-green-600"
              icon="add"
              text="Add"
            />

            <ActionButton
              to={`/employees/${employee.id}/edit`}
              color="bg-yellow-600"
              icon="edit"
              text="Update"
            />
          </>
        )}

      </div>

    </div>
  )
}

export default EmployeeCard