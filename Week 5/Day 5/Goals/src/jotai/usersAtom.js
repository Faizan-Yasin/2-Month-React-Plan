import { atom } from "jotai";
import { atomFamily } from 'jotai-family'
import { selectAtom } from 'jotai/utils'

export const usersAtom = atom(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    return response.json()
})

export const userFamily = atomFamily((id) =>
    atom(async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        return response.json()
    }))

export const userAtom = atom({
    id: 26,
    name: "Faizan",
    age: 19,
})

export const nameAtom = selectAtom(userAtom, (user) => user.name)

