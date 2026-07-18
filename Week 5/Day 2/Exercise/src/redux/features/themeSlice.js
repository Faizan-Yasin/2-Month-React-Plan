import { createSlice } from '@reduxjs/toolkit'

const savedTheme = localStorage.getItem("theme");

const initialState = {
    value: savedTheme ? JSON.parse(savedTheme) : true,
}

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.value = !state.value
        }
    }
})

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer