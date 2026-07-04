import { useEffect, useState } from "react"
import useUsers from "./useUsers"

function useDebounce(search) {
    const [debounceValue, setDebounceValue] = useState("")
    useEffect(() => {
        const time = setTimeout(() => {
            setDebounceValue(search)
        }, 500)

        return () => {
            clearTimeout(time)
        }
    }, [search])

    return { debounceValue }
}

export default useDebounce