import { useState, useEffect, type SetStateAction, type Dispatch, } from "react";

function useLocalStorage<T>(key: string, initialValue: T): readonly [T, Dispatch<SetStateAction<T>>] {
    const [value, setValue] = useState<T>(() => {
        try {
            const stored = localStorage.getItem(key)
            if (stored !== null) {
                return JSON.parse(stored) as T
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
            if (error instanceof Error) console.log(error.message)
        }
    }, [key, value])

    return [value, setValue] 

}

export default useLocalStorage