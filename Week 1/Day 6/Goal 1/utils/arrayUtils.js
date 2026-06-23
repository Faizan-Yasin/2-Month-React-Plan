export function sum(arr) {
    return arr.reduce((a, b) => a + b, 0)
}

export function unique(arr) {
    return [...new Set(arr)]
}

export function chunk(arr, size) {
    let res = []

    for (let i = 0; i < arr.length; i += size) {
        res.push(arr.slice(i, i + size))
    }

    return res
}

export function flatten(arr) {
    return arr.flat(Infinity)
}