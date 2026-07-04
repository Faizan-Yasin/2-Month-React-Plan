/**
 * Fetches data from the given URL.
 *
 * @param {string} url - API URL to fetch data from.
 * @returns {{
 *   data: any[],
 *   loading: boolean,
 *   error: Error | null,
 *   refetch: Function
 * }}
 */

import { useState, useEffect, useCallback } from "react";

function useFetch(url, search) {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [refresh, setRefresh] = useState(0)

    const refetch = useCallback(() => {
        setRefresh(prev => prev + 1)
    }, [])


    useEffect(() => {
        setLoading(true)
        setError(null)
        if (!url) return 
        const controller = new AbortController()
        async function fetchData() {
            try {
                // await new Promise(resolve => setTimeout(resolve, 1000))
                const response = await fetch(url, { signal: controller.signal })

                if (!response.ok) {
                    throw new Error(`${search} Not Found`)
                }

                const data = await response.json()
                setData(data)

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

        fetchData()

        return () => {
            controller.abort()
        }
    }, [url, refresh])

    return { data, loading, error, refetch }

}

export default useFetch