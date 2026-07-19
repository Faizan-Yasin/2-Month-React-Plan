export const counterSlice = (set) => ({

    count: 0,
    increment: () => set((state) => {
        state.count++
    }),
    decrement: () => set((state) => {
        if (state.count > 0) {
            state.count--
        }
    }),
    reset: () => set((state) => {
        state.count = 0
    }),
    incrementByAmount: (amount) => set((state) => {
        state.count += amount
    }),
})