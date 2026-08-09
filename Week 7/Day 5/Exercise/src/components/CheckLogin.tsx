import { Navigate, Outlet } from "react-router"

const CheckLogin = () => {

    const user = sessionStorage.getItem("user")

    if (user) {
        return <Navigate to={"/userDirectory"} replace />
    }

    return <Outlet />
}

export default CheckLogin
