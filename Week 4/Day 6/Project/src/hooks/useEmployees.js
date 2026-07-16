import { useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";

function useEmployees() {

    const context = useContext(EmployeeContext)

    if (!context) {
        throw new Error("useEmployees should be used within EmployeeProvider!")
    }

    return context
}

export default useEmployees