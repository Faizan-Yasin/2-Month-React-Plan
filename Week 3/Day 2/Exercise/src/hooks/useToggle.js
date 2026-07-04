/**
 * Manages a boolean state.
 *
 * @param {boolean} initialValue - Initial boolean value.
 * @returns {[boolean, Function, Function, Function]}
 */

import { useState, useCallback } from "react";

function useToggle(initialValue = false) {

    const [value, setValue] = useState(initialValue)

    const toggle = useCallback(() => {
        setValue(prev => !prev)
    }, [])

    const setTrue = useCallback(() => {
        setValue(true)
    }, [])

    const setFalse = useCallback(() => {
        setValue(false)
    }, [])

    return [value, toggle, setTrue, setFalse]
}

export default useToggle