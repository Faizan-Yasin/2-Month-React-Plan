import ErrorFallback from "./ErrorFallback"
import { useQueryErrorResetBoundary } from "@tanstack/react-query"
import { PropsWithChildren } from "react"
import { ErrorBoundary } from "react-error-boundary"

const QueryErrorBoundary = ({ children }: PropsWithChildren) => {
    const { reset } = useQueryErrorResetBoundary()

    return (
        <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={reset}
        >
            {children}
        </ErrorBoundary>
    )
}

export default QueryErrorBoundary