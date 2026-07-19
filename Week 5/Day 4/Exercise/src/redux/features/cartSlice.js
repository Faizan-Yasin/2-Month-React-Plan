import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [
        {
            id: "1",
            name: "Mobile",
            price: 20000,
            qty: 2,
        },
        {
            id: "2",
            name: "Watch",
            price: 10000,
            qty: 3,
        },
        {
            id: "3",
            name: "Mouse",
            price: 20000,
            qty: 5,
        },
        {
            id: "4",
            name: "Laptop",
            price: 20000,
            qty: 1,
        },
    ],
    coupon: null,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const existingItem = state.items.find((item) => item.id === action.payload.id)

            if (existingItem) {
                existingItem.qty += action.payload.qty ?? 1
            }
            else {
                state.items.push({
                    ...action.payload,
                    qty: action.payload.qty ?? 1
                })
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
        },
        updateQuantity: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload.id)
            if (item) {
                item.qty = action.payload.qty
            }
        },
        clearCart: (state) => {
            state.items = []
            state.coupon = null
        },
    }
})

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions

export default cartSlice.reducer