import { atom } from 'jotai'

export const priceAtom = atom(100)

export const quantityAtom = atom(2)

export const totalAtom = atom(
    (get) => {
        return get(priceAtom) * get(quantityAtom)
    },
    (get, set, newTotal) => {
        const price = get(priceAtom)

        set(quantityAtom, newTotal / price)
    }
)