import { useEffect, useState } from "react"

export default function useFetch(apiFunction) {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {

        const controller = new AbortController()

        async function fetchData() {

            try {

                setLoading(true)

                const result = await apiFunction(controller.signal)

                setData(result)

            } catch (err) {

                if (err.code !== "ERR_CANCELED") {

                    setError(err)

                }

            } finally {

                if (!controller.signal.aborted) {

                    setLoading(false)

                }

            }

        }

        fetchData()

        return () => controller.abort()

    }, [apiFunction])

    return { data, loading, error }

}