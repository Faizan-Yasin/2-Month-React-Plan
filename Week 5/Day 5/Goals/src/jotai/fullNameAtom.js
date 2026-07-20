import { atom } from 'jotai'

export const firstNameAtom = atom("Muhammad")
export const lastNameAtom = atom("Faizan")

export const fullNameAtom = atom((get) => {
    return `${get(firstNameAtom)} ${get(lastNameAtom)}`
})