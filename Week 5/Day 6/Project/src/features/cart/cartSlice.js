import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id)
            if (existingItem) {
                existingItem.qty++
            } else {
                state.items.push({ ...action.payload, qty: 1 })
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        increaseQty: (state, action) => {
            const item = state.items.find(item => item.id === action.payload)
            if (item) {
                item.qty++
            }
        },
        decreaseQty: (state, action) => {
            const item = state.items.find(item => item.id === action.payload)
            if (!item) return
            if (item.qty > 1) {
                item.qty--
            } else {
                state.items = state.items.filter(item => item.id !== action.payload)
            }
        },
        clearCart: (state, action) => {
            state.items = []
        }
    },
})

export const { addItem, removeItem, increaseQty, decreaseQty, clearCart } = cartSlice.actions
export default cartSlice.reducer