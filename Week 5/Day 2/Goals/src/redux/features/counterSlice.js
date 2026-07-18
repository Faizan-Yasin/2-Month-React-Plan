import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            if (state.value > 0) {
                state.value -= 1
            }
        },
        reset: (state) => {
            state.value = 0
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        setValue: (state, action) => {
            state.value = action.payload
        },
    }
})

export const { increment, decrement, reset, incrementByAmount, setValue } = counterSlice.actions

export default counterSlice.reducer