import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: 1,
        name: "Ali",
        email: "ali@gmail.com"
    },
    {
        id: 2,
        name: "Ahmed",
        email: "ahmed@gmail.com"
    },
    {
        id: 4,
        name: "Sara",
        email: "sara@gmail.com"
    },
    {
        id: 5,
        name: "Hamza",
        email: "hamza@gmail.com"
    },
    {
        id: 6,
        name: "Bilal",
        email: "bilal@gmail.com"
    },
]

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        deleteUser: (state, action) => {
            return state.filter(user => user.id !== action.payload)
        },
        updateUser: (state, action) => {
            const user = state.find(user => user.id === action.payload.id)

            if (user) {
                user.name = action.payload.name
                user.email = action.payload.email
            }
        },
        clearUser: (state, action) => {
            return []
        },
    }
})

export const { addUser, deleteUser, updateUser, clearUser } = userSlice.actions

export default userSlice.reducer