import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

function useAuth() {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error("useAuth should be used within AuthProvider!")
    }

    return context
}

export { useAuth }