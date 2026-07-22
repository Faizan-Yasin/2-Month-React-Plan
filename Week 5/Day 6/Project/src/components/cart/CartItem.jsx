import React from 'react'
import { useDispatch } from 'react-redux'
import { increaseQty, decreaseQty, removeItem } from '../../features/cart/cartSlice'
import { toast } from 'react-toastify'

const CartItem = ({ item }) => {

  const dispatch = useDispatch()

  return (
    <div className='border-b py-4 pt-6'>
      <div className='flex gap-4'>
        <img src={item.image} alt={item.title} className='w-20 h-20 object-contain' />
        <div className='flex-1'>
          <h3 className='font-semibold'>{item.title}</h3>
          <p className='text-green-600'>${item.price}</p>
          <div className='flex items-center gap-3 mt-2'>
            <button onClick={() => dispatch(decreaseQty(item.id))} className='w-8 h-8 cursor-pointer active:scale-90 transition bg-red-500 rounded'>-</button>
            <span>{item.qty}</span>
            <button onClick={() => dispatch(increaseQty(item.id))} className='w-8 h-8 cursor-pointer active:scale-90 transition bg-green-500 rounded'>+</button>
          </div>
          <button onClick={() => {
            dispatch(removeItem(item.id))
            toast.error("Item Removed")
          }} className='text-red-500 mt-3 cursor-pointer active:scale-90 transition font-semibold'>Remove</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
