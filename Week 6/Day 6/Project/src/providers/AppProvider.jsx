import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { BrowserRouter } from 'react-router'
import "react-loading-skeleton/dist/skeleton.css"
import { SkeletonTheme } from 'react-loading-skeleton'
import ThemeProvider from '../components/ThemeProvider'
import { useThemeStore } from '../store/themeStore'
import ScrollToTop from '../components/ScrollToTop'
import QueryErrorBoundary from '../components/QueryErrorBoundary'
import { Bounce, ToastContainer } from 'react-toastify'
import "../styles/toast.css";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 3,
            staleTime: 1000 * 60,
            gcTime: 1000 * 60 * 5,
            refetchOnWindowFocus: false,
            throwOnError: true,
            networkMode: "always",
        }
    }
})

const AppProvider = ({ children }) => {

    const { theme } = useThemeStore()

    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <SkeletonTheme baseColor={theme === "dark" ? "#383839" : "#e5e7eb"}
                    highlightColor={theme === "dark" ? "#848484" : "#c7c7ca"}>
                    <ThemeProvider>
                        <QueryErrorBoundary>
                            {children}
                            <ToastContainer
                                className="custom-toast-container"
                                position="top-center"
                                autoClose={2000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick={false}
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="dark"
                                transition={Bounce}
                            />
                        </QueryErrorBoundary>
                        <ScrollToTop />
                    </ThemeProvider>
                </SkeletonTheme>
            </BrowserRouter>
            {import.meta.env.DEV && (
                <ReactQueryDevtools initialIsOpen={false} />
            )}
        </QueryClientProvider>
    )
}

export default AppProvider
