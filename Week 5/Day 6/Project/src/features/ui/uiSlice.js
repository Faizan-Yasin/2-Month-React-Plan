import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedCategory: "all",
    search: "",
    cartOpen: false,
}

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.selectedCategory = action.payload
        },
        setSearch: (state, action) => {
            state.search = action.payload
        },
        toggleCart: (state) => {
            state.cartOpen = !state.cartOpen
        },
        closeCart: (state) => {
            state.cartOpen = false
        },
        openCart: (state) => {
            state.cartOpen = true
        },
    }
})

export const { setCategory, setSearch, toggleCart, closeCart, openCart } = uiSlice.actions
export default uiSlice.reducer