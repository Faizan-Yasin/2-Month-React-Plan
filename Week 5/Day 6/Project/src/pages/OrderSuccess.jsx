import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { clearCart } from '../features/cart/cartSlice'
import { motion } from 'framer-motion'

const OrderSuccess = () => {

  const dispatch = useDispatch()

  return (

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className=" flex flex-col items-center justify-center h-screen">

      <h1 className=" text-4xl font-bold text-green-600">Order Confirmed</h1>

      <p className="mt-4">Thank you for your purchase.</p>

      <Link onClick={() => dispatch(clearCart())} to="/" className=" mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg">
        Continue Shopping
      </Link>

    </motion.div>

  )
}

export default OrderSuccess