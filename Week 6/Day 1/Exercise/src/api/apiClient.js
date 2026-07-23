import axios from 'axios'

const apiClient = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
})

apiClient.interceptors.request.use((config) => {
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

apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            sessionStorage.removeItem("token")
            window.location.href = "/login"
        }
        return Promise.reject({
            message: error.response?.data?.message || error.message,
            status: error.response?.status || null,
            data: error.response?.data || null
        })
    }
)

export default apiClient