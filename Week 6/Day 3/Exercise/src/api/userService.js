import apiClient from "./apiClient";

export const getUsers = async () => {
    try {
        const response = await apiClient.get("users")
        return response.data
    } catch (error) {
        throw {
            message: error.message,
            status: error.status,
            data: error.data,
        }
    }
}

export const createUser = async (userData) => {
    try {
        const response = await apiClient.post("users", userData)
        return response.data
    } catch (error) {
        throw {
            message: error.message,
            status: error.status,
            data: error.data,
        }
    }
}

export const updateUser = async (id, userData) => {
    try {
        const response = await apiClient.patch(`users/${id}`, userData)
        return response.data
    } catch (error) {
        throw {
            message: error.message,
            status: error.status,
            data: error.data,
        }
    }
}

export const deleteUser = async (id) => {
    try {
        const response = await apiClient.delete(`users/${id}`)
        return response.data
    } catch (error) {
        throw {
            message: error.message,
            status: error.status,
            data: error.data,
        }
    }
}