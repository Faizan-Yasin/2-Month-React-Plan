import { useState, useEffect } from "react"

export function useFetch(url) {
    const [data, setData] = useState([])
    const [isloading, setIsLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        const controller = new AbortController()

        async function fetchData() {
            try {
                setIsLoading(true)
                setData([])
                setError("")
                await new Promise(resolve => setTimeout(resolve, 1000))
                const response = await fetch(url, { signal: controller.signal })
                if (!response.ok) {
                    throw new Error("Faild to Fetch Data")
                }
                const result = await response.json()
                setData(result)
            }
            catch (error) {
                if (error.name !== "AbortError") {
                    setError(error.message)
                }
            }
            finally {
                if (!controller.signal.aborted) {
                    setIsLoading(false)
                }
            }
        }

        fetchData()

        return () => {
            controller.abort()
        }
    }, [])

    return { data, isloading, error }
}


