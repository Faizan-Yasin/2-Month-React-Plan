import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { subscribeWithSelector } from 'zustand/middleware'

const store = (set) => (
    {
        items: [
            {
                id: "1",
                name: "Mobile",
                price: 20000,
                qty: 2,
            },
            {
                id: "2",
                name: "Watch",
                price: 10000,
                qty: 3,
            },
            {
                id: "3",
                name: "Mouse",
                price: 20000,
                qty: 5,
            },
            {
                id: "4",
                name: "Laptop",
                price: 20000,
                qty: 1,
            },
        ],
        coupon: null,

        addItem: (item) => {
            set((state) => {
                const existingItem = state.items.find((i) => i.id === item.id)
                if (existingItem) {
                    existingItem.qty += item.qty ?? 1
                }
                else {
                    state.items.push({ ...item, qty: item.qty ?? 1 })
                }
            })
        },
        removeItem: (id) => {
            set((state) => {
                state.items = state.items.filter((item) => item.id !== id)
            })
        },
        updateQuantity: (id, qty) => {
            set((state) => {
                const item = state.items.find((i) => i.id === id)
                if (item) {
                    item.qty = qty
                }
            })
        },
        clearCart: () => { set((state) => { state.items = [] }) }
    }
)

export const useCartStore = create(subscribeWithSelector(persist(devtools(immer(store)), { name: "cart-storage" })))