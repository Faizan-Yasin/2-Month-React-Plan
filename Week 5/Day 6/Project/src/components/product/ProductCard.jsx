import React from 'react'
import { Star } from 'lucide-react'
import { useSelector, useDispatch } from 'react-redux'
import RatingStar from '../common/RatingStar'
import { addItem } from '../../features/cart/cartSlice'
import { toast } from 'react-toastify'

const ProductCard = ({ product }) => {

    const dispatch = useDispatch()
    const items = useSelector((state) => state.cart.items)
    const theme = useSelector((state) => state.theme.mode)

    return (
        <div className={`${theme === "light" ? "bg-gray-600" : "bg-white"} rounded-xl p-4 shadow-md hover:shadow-lg hover:scale-102 cursor-pointer duration-300`}>
            <img src={product.image} alt={product.title} className='h-52 w-full object-contain' />
            <h2 className='mt-4 font-semibold line-clamp-2 dark:text-white'>{product.title}</h2>
            <div className='flex items-center gap-2 mt-2'>
                <RatingStar rating={product.rating.rate} />
            </div>
            <h3 className='mt-3 text-2xl font-bold text-green-600'>${product.price}</h3>
            <button onClick={() => {
                dispatch(addItem(product))
                toast.success("Product Added")
            }} className='mt-4 w-full rounded-lg py-2 cursor-pointer active:scale-95 bg-blue-600 text-white disabled:bg-gray-400'>
                Add To Cart
            </button>
        </div>
    )
}

export default ProductCard
