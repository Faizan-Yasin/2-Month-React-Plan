import { configureStore } from '@reduxjs/toolkit'
import countReducer from '../features/countSlice'
import themeReducer from '../features/themeSlice'

export const store = configureStore({
    reducer: {
        count: countReducer,
        theme: themeReducer,
    }
})