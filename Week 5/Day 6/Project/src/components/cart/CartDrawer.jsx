import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeCart } from '../../features/ui/uiSlice'
import CartItem from './CartItem'
import { selectTotalPrice } from '../../selectors/totalPriceSelector'
import { useNavigate } from 'react-router-dom'
import { clearCart } from '../../features/cart/cartSlice'
import { toast } from 'react-toastify'

const CartDrawer = () => {

  const dispatch = useDispatch()
  const items = useSelector((state) => state.cart.items)
  const total = useSelector(selectTotalPrice)
  const cartOpen = useSelector((state) => state.ui.cartOpen)
  const navigate = useNavigate()
  const theme = useSelector((state) => state.theme.mode)

  return (
    <div className={`${theme === "light" ? "bg-gray-700 text-white" : "bg-white text-black"} fixed top-0 right-0 w-80 md:w-96 h-screen z-20 shadow-xl p-5 overflow-auto transition-transform duration-300
    ${cartOpen ? "translate-x-0" : "translate-x-full"}`}>
      <button onClick={() => dispatch(closeCart())} className='cursor-pointer transition active:hover:scale-90 bg-gray-500 text-white px-2 py-1 rounded'>X</button>
      {
        items.length === 0 ? (<h2 className='flex items-center justify-center'><span className='font-semibold mt-10'>Cart is Empty</span></h2>) :
          <>
            <button onClick={() => {
              dispatch(clearCart())
              toast.info("Cart Clear")
            }} className='cursor-pointer' className='bg-red-500 text-white px-2 py-1 rounded absolute right-5 cursor-pointer transition active:hover:scale-90'>Clear</button>
            {items.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </>
      }
      {
        items.length !== 0 &&
        <div className='mt-6 pt-2'>
          <h2>Total : ${total.toFixed(2)}</h2>
          <button className='w-full mt-4 bg-blue-600 py-3 rounded-lg cursor-pointer active:scale-95 transition text-white'
            onClick={() => navigate("/checkout")}>Check Out</button>
        </div>
      }
    </div>
  )
}

export default CartDrawer
