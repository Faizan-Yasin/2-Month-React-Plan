import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sidebarOpen: false,
    lastActionLabel: null,
};

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.sidebarOpen = !state.sidebarOpen;
        },

        setLastActionLabel: (state, action) => {
            state.lastActionLabel = action.payload;
        },
    },
});

export const {
    toggleSidebar,
    setLastActionLabel,
} = uiSlice.actions;

export default uiSlice.reducer;