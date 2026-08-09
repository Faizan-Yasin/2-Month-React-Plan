import type { User } from "../types/types"

async function fetchUsers(): Promise<User[]> {
    const response = await fetch("/users")

    if (!response.ok) {
        throw new Error("Failed To Fetch Users")
    }

    return response.json()
}

export default fetchUsers