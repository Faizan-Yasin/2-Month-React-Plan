import { useEffect, useState } from "react"

export function useFetch<T>(url: string) {
    const [state, setState] = useState<{
        loading: boolean
        data: T | null
    }>({
        loading: true,
        data: null,
    })

    useEffect(() => {
        let ignore = false

        async function fetchData() {
            const response = await fetch(url)
            const data = await response.json()

            if (!ignore) {
                setState({
                    loading: false,
                    data,
                })
            }
        }

        fetchData()

        return () => {
            ignore = true
        }
    }, [url])

    return state
}