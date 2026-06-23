export function sum(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return 0
    return arr.reduce((a, b) => a + b, 0)
}

export function unique(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return []
    return [...new Set(arr)]
}

export function chunk(arr, size) {
    if (!Array.isArray(arr) || arr.length === 0 || typeof size !== "number" || size <= 0) return []
    size = Math.floor(size)
    let res = []

    for (let i = 0; i < arr.length; i += size) {
        res.push(arr.slice(i, i + size))
    }

    return res
}

export function flatten(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return []
    return arr.flat(Infinity)
}