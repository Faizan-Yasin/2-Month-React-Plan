/**
 * Returns a debounced value after the specified delay.
 *
 * @param {any} value - Value to debounce.
 * @param {number} delay - Delay in milliseconds.
 * @returns {any} Debounced value.
 */

import { useState, useEffect } from "react"

function useDebounce(value, delay) {

    const [debouncedValue, setDebounceValue] = useState(value)

    useEffect(() => {

        const time = setTimeout(() => {
            setDebounceValue(value)
        }, delay)

        return () => {
            clearTimeout(time)
        }
    }, [value, delay])

    return debouncedValue

}

export default useDebounce