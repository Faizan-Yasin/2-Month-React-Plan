import React from "react"

const ErrorFallback = ({ error, resetErrorBoundary }) => {
    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
            <h2 className="text-3xl font-bold text-red-500">
                Something went wrong
            </h2>

            <p className="text-gray-300">
                {error.message}
            </p>

            <button
                onClick={resetErrorBoundary}
                className="rounded bg-amber-500 px-4 py-2 font-semibold text-white hover:bg-amber-600 active:scale-95"
            >
                Try Again
            </button>
        </div>
    )
}

export default ErrorFallback