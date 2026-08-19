import { Link } from "react-router"
import { motion } from 'framer-motion'

const NotFound = () => {

  return (

    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen">

      <h1 className="text-8xl font-bold">404</h1>

      <p className="mt-4 text-gray-400">Page Not Found</p>

      <Link to="/" className="mt-8 px-6 py-3 bg-red-500 hover:bg-red-600 rounded-lg active:scale-95 text-white font-semibold">Go Home</Link>
    </motion.div>
  )
}

export default NotFound