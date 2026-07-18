import { ThemeContext } from '../contexts/ThemeContext'
import { useReducer } from 'react'
import { themeReducer } from '../reducers/themeReducer'
import { useEffect } from 'react'

export const ThemeProvider = ({ children }) => {

    const initialState = {
        theme: true
    }

    const [state, dispatch] = useReducer(themeReducer, initialState)

    useEffect(() => {
        document.body.className = state.theme ? 'light' : 'dark'
        localStorage.setItem('theme', state.theme ? 'light' : 'dark')
    }, [state.theme])

    return (
        <ThemeContext.Provider value={{ theme: state.theme, dispatch }}>
            {children}
        </ThemeContext.Provider>
    )
}


