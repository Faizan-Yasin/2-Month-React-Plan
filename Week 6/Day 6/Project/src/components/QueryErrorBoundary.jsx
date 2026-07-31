import ErrorFallback from "./ErrorFallback"
import { useQueryErrorResetBoundary } from "@tanstack/react-query"
import { ErrorBoundary } from "react-error-boundary"

const QueryErrorBoundary = ({ children }) => {
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