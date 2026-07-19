import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItem, removeItem, updateQuantity, clearCart } from '../redux/features/cartSlice'

const ReduxCard = () => {

    const dispatch = useDispatch()
    const items = useSelector((state) => state.cart.items)
    const coupon = useSelector((state) => state.cart.coupon)

    return (
        <div>
            <h2>Cart Items</h2>
            {
                items.map((item) => (
                    < div key={item.id} >
                        <h3>Product Name : {item.name}</h3>
                        <h3>Product Price : {item.price}</h3>
                        <h3>Product Quantity : {item.qty}</h3>
                        <button onClick={() => dispatch(updateQuantity({
                            id: item.id,
                            qty: item.qty + 1,
                        }))}>Update Quantity</button>
                        <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
                        <br />
                    </div>
                ))
            }
            <div>
                <button onClick={() => dispatch(addItem({
                    id: 5,
                    name: "Perfume",
                    price: 1500,
                }))}>Add To Cart</button>
                <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
                <h4>Coupon : {coupon ?? "None"}</h4>
            </div>
        </div >
    )
}

export default ReduxCard
