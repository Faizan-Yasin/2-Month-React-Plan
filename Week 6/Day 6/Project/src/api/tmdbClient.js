import axios from 'axios'

const tmdbClient = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 10000,
})

tmdbClient.interceptors.request.use((config) => {
    config.params = {
        ...config.params,
        api_key: import.meta.env.VITE_TMDB_KEY,
    }
    return config
},
    (error) => Promise.reject(error)
)

export default tmdbClient