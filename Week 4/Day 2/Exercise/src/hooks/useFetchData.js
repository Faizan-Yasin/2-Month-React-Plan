import React, { useEffect, useState } from 'react'

export function useFetchData(url) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        
        if (!url) return;

        const controller = new AbortController()
        async function fetchData() {
            try {
                const response = await fetch(url, { signal: controller.signal })

                if (!response.ok) {
                    throw new Error(`HTTP Error : ${response.status}`)
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
    }, [url])

    return { data, loading, error }
}