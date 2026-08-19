import { PropsWithChildren, useEffect } from 'react'
import { useThemeStore } from '../store/themeStore'

const ThemeProvider = ({ children }: PropsWithChildren) => {

    const { theme } = useThemeStore()

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark")
    }, [theme])


    return children
}

export default ThemeProvider
