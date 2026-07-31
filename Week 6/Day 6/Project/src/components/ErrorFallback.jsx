import { motion } from 'framer-motion'

const ErrorFallback = ({ error, resetErrorBoundary }) => {

    return (

        <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center min-h-screen">

            <h2 className="text-3xl font-bold text-red-500">Something went wrong</h2>

            <p className="mt-4 text-gray-400 font-semibold">{error.message}</p>

            <button onClick={resetErrorBoundary} className="mt-6 bg-red-500 hover:bg-red-600 cursor-pointer active:scale-95 text-white font-semibold px-4 py-2 rounded-lg">
                Try Again
            </button>

        </motion.div>
    )
}

export default ErrorFallback