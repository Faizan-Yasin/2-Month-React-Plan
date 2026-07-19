export const themeSlice = (set) => ({
    theme: true,
    toggleTheme: () => set((state) => { state.theme = !state.theme }),
});