import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'

const ErrorFallback = ({ error, resetErrorBoundary }) => {
    return (
        <div className='flex justify-center items-center gap-4 mt-4 flex-col'>
            <h2>Something went wrong.</h2>

            <p>{error.message}</p>

            <button className='m-2 bg-amber-500 cursor-pointer text-white font-semibold px-4 py-1 rounded transition-transform active:scale-95' onClick={resetErrorBoundary}>
                Try Again
            </button>
        </div>
    )
}

export default ErrorFallback
