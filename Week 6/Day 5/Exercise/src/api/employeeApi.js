import axios from "axios"

const employeeApi = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 10000,
})

employeeApi.interceptors.request.use((config) => {
    const token = sessionStorage.getItem("token")
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
},
    (error) => {
        return Promise.reject(error)
    }
)

employeeApi.interceptors.response.use(
    (response) => response,
    (error) => {

        if (error.response?.status === 401) {
            sessionStorage.removeItem("token")
            window.location.href = "/login"
        }

        return Promise.reject({
            message: error.response?.data?.message || error.message,
            status: error.response?.status || null,
            data: error.response?.data || null,
        })
    }
)

export default employeeApi