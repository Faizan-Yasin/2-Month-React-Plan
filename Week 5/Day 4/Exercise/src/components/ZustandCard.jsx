import React from 'react'
import { useCartStore } from '../zustand/store/cartStore'

const unsubscribe = useCartStore.subscribe((state) => state.items, (items) => {
    console.log("Cart : ", items.length);
})

const ZustandCard = () => {

    const items = useCartStore((state) => state.items)
    const addItem = useCartStore((state) => state.addItem)
    const updateQuantity = useCartStore((state) => state.updateQuantity)
    const removeItem = useCartStore((state) => state.removeItem)
    const clearCart = useCartStore((state) => state.clearCart)
    const coupon = useCartStore((state) => state.coupon)

    return (
        <div>
            <h2>Cart Items</h2>
            {
                items.map((item) => (
                    < div key={item.id} >
                        <h3>Product Name : {item.name}</h3>
                        <h3>Product Price : {item.price}</h3>
                        <h3>Product Quantity : {item.qty}</h3>
                        <button onClick={() => (updateQuantity(
                            item.id,
                            item.qty + 1,
                        ))}>Update Quantity</button>
                        <button onClick={() => (removeItem(item.id))}>Remove</button>
                        <br />
                    </div>
                ))
            }
            <div>
                <button onClick={() => (addItem({
                    id: 5,
                    name: "Perfume",
                    price: 1500,
                }))}>Add To Cart</button>
                <button onClick={() => (clearCart())}>Clear Cart</button>
                <h4>Coupon : {coupon ?? "None"}</h4>
            </div>
        </div >
    )
}

export default ZustandCard
