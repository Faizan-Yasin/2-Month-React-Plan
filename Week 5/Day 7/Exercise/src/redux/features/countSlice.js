import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0
}

const countSlice = createSlice({
    name: "count",
    initialState,
    reducers: {
        increment: (state) => {
            state.value++
        },
        decrement: (state) => {
            state.value > 0 && state.value--
        },
        reset: (state) => {
            state.value = 0
        },
    }
})

export default countSlice.reducer
export const { increment, decrement, reset } = countSlice.actions