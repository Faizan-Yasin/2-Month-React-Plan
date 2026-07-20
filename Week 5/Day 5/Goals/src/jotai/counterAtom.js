import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

export const counterAtom = atomWithStorage("Count", 0)

export const incrementAtom = atom(
    null,
    (get, set) => {
        set(counterAtom, get(counterAtom) + 1)
    }
)