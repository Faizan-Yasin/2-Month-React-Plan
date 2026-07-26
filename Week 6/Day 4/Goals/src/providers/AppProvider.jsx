import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { BrowserRouter } from 'react-router'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60,
            gcTime: 1000 * 60 * 5,
            refetchOnWindowFocus: false
        }
    }
})

const AppProvider = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                {children}
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
    )
}

export default AppProvider
