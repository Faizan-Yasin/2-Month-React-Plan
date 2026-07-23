import api from "../api/axios";

export const getUsers = async (signal) => {
    const response = await api.get("/users", { signal })
    return response.data
}

export const getUser = async (id, signal) => {
    const response = await api.get(`/users/${id}`, { signal })
    return response.data
}

export const createUser = async (user, signal) => {
    const response = await api.post("/users", user, { signal })
    return response.data
}

export const updateUser = async (id, user, signal) => {
    const response = await api.put(`/users/${id}`, user, { signal })
    return response.data
}

export const pathUser = async (id, field, signal) => {
    const response = await api.patch(`/users/${id}`, field, { signal })
    return response.data
}

export const deleteUser = async (id, signal) => {
    const response = await api.patch(`/users/${id}`, { signal })
    return response.data
}