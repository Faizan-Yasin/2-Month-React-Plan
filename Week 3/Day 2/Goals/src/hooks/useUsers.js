import { useEffect, useState } from "react";

function useUsers(url, search) {
    const [usersData, setUsersData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!url) return;
        const controller = new AbortController()
        async function fetchUserData(url) {

            try {
                setLoading(true)
                setError(null)
                // await new Promise(resolve => setTimeout(resolve, 2000))
                const response = await fetch(url, { signal: controller.signal })
                if (!response.ok) {
                    throw new Error(`${search} Not Found`)
                }
                const data = await response.json()
                setUsersData(data)
            } catch (error) {
                if (error.name !== "AbortError") {
                    setError(error)
                }
            }
            finally {
                if (!controller.signal.aborted) {
                    setLoading(false)
                }
            }
        }

        fetchUserData(url)

        return () => {
            controller.abort()
        }
    }, [url])

    return { usersData, loading, error }

}

export default useUsers