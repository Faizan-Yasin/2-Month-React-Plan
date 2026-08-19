import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { ThemeStore } from '../types/tmdb'

export const useThemeStore = create<ThemeStore>()(persist(
    (set) => ({
        theme: "dark",
        toggleTheme: () => set(state => ({
            theme: state.theme === "dark" ? "light" : "dark"
        })),
    }),
    {
        name: "theme",
    }
),
)