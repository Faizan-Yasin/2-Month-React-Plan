import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { themeSlice } from './themeSlice'
import { counterSlice } from './counterSlice'

export const useStore = create(devtools(immer((set) => ({
    ...themeSlice(set),
    ...counterSlice(set),
}))))