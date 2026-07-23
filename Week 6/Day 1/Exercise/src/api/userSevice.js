import apiClient from "./apiClient";

export const getUsers = async (params = {}, signal) => {
    try {

        const response = await apiClient.get("/users", {
            params,
            signal,
        });

        return response.data;

    } catch (error) {

        if (!error.response) {

            throw {
                message: "Network error — check your connection",
                status: 0,
            };

        }

        throw {
            message: error.response.data.message || "Server error",
            status: error.response.status,
        };

    }
};

export const getUserById = async (id, signal) => {
    try {

        const response = await apiClient.get(`/users/${id}`, {
            signal,
        });

        return response.data;

    } catch (error) {

        if (!error.response) {

            throw {
                message: "Network error — check your connection",
                status: 0,
            };

        }

        throw {
            message: error.response.data.message || "Server error",
            status: error.response.status,
        };

    }
};

export const createUser = async (userData, signal) => {
    try {

        const response = await apiClient.post(
            "/users",
            userData,
            { signal }
        );

        return response.data;

    } catch (error) {

        if (!error.response) {

            throw {
                message: "Network error — check your connection",
                status: 0,
            };

        }

        throw {
            message: error.response.data.message || "Server error",
            status: error.response.status,
        };

    }
};

export const updateUser = async (id, userData, signal) => {
    try {

        const response = await apiClient.put(
            `/users/${id}`,
            userData,
            { signal }
        );

        return response.data;

    } catch (error) {

        if (!error.response) {

            throw {
                message: "Network error — check your connection",
                status: 0,
            };

        }

        throw {
            message: error.response.data.message || "Server error",
            status: error.response.status,
        };

    }
};

export const deleteUser = async (id, signal) => {
    try {

        const response = await apiClient.delete(
            `/users/${id}`,
            { signal }
        );

        return response.data;

    } catch (error) {

        if (!error.response) {

            throw {
                message: "Network error — check your connection",
                status: 0,
            };

        }

        throw {
            message: error.response.data.message || "Server error",
            status: error.response.status,
        };

    }
};