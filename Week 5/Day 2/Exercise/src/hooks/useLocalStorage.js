import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        try {
            const stored = localStorage.getItem(key)
            if (stored !== null) {
                return JSON.parse(stored)
            }
            return initialValue
        }
        catch {
            return initialValue
        }
    }
    )

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value))
        }
        catch (error) {
            console.log(error)
        }
    }, [key, value])

    return [value, setValue]

}

export default useLocalStorage