export function chunk(arr, size) {

    if (!Array.isArray(arr) || arr.length === 0 || typeof size !== "number" || size <= 0) return []

    size = Math.floor(size)

    let res = []

    for (let i = 0; i < arr.length; i += size) {
        res.push(arr.slice(i, i + size))
    }

    return res
}

export function unique(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return []

    return [...new Set(arr)]
}

export function groupBy(arr, fn) {
    if (!Array.isArray(arr) || arr.length === 0 || typeof fn !== "function") return {}

    return arr.reduce((acc, item) => {
        const key = fn(item)

        if (!acc[key]) {
            acc[key] = []
        }
        acc[key].push(item)
        return acc
    }, {})
}