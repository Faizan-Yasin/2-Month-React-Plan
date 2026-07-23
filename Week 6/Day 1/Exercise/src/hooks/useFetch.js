import { useEffect, useState } from "react";

export function useFetch(apiFuntion) {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const controller = new AbortController()
        async function fetchData() {
            try {
                setLoading(true)
                setError(null)
                const response = await apiFuntion(controller.signal)
                setData(response)
            } catch (error) {
                if (error.code !== "ERR_CANCELED") {
                    setError(error)
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false)
                }
            }
        }

        fetchData()

        return () => controller.abort()

    }, [apiFuntion])

    return { data, loading, error }

}