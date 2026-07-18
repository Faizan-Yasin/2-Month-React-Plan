import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todosSlice'
import themeReducer from '../features/themeSlice'
import uiReducer from "../features/uiSlice";

export const store = configureStore({
    reducer: {
        todo: todoReducer,
        theme: themeReducer,
        ui: uiReducer,
    }
})