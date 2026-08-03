export function chunk<T>(arr: T[], size: number): T[][] {

    if (!Array.isArray(arr) || arr.length === 0 || typeof size !== "number" || size <= 0) return []

    size = Math.floor(size)

    let res: T[][] = []

    for (let i = 0; i < arr.length; i += size) {
        res.push(arr.slice(i, i + size))
    }

    return res
}

export function unique<T>(arr: T[]): T[] {
    if (!Array.isArray(arr) || arr.length === 0) return []

    return [...new Set(arr)]
}

export function groupBy<T, K extends PropertyKey>(arr: T[], fn: (item: T) => K): Record<K, T[]> {
    if (!Array.isArray(arr) || arr.length === 0 || typeof fn !== "function") return {} as Record<K, T[]>

    return arr.reduce((acc, item) => {
        const key = fn(item)

        if (!acc[key]) {
            acc[key] = []
        }
        acc[key].push(item)
        return acc
    }, {} as Record<K, T[]>)
}