import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { clearCart } from '../features/cart/cartSlice'

const OrderSuccess = () => {

  const dispatch = useDispatch()

  return (

    <div className=" flex flex-col items-center justify-center h-screen">

      <h1 className=" text-4xl font-bold text-green-600">Order Confirmed</h1>

      <p className="mt-4">Thank you for your purchase.</p>

      <Link onClick={() => dispatch(clearCart())} to="/" className=" mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg">
        Continue Shopping
      </Link>

    </div>

  )
}

export default OrderSuccess