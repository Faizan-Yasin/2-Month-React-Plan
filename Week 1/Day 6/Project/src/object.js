export function omit(obj, keys) {
    if (typeof obj !== "object" || obj === null) return {}
    if (!Array.isArray(keys)) return { ...obj }

    const copy = { ...obj }

    keys.forEach(key => {
        delete copy[key]
    })

    return copy
}

export function deepClone(obj) {
    if (typeof obj !== "object" || obj === null) return obj

    if (Array.isArray(obj)) {
        return obj.map((item) => deepClone(item))
    }

    let clone = {}

    for (const key in obj) {
        clone[key] = deepClone(obj[key])
    }

    return clone
}















// export function deepClone(obj) {
//     if (obj === null || typeof obj !== "object") return obj

//     if (Array.isArray(obj)) {
//         return obj.map(item => deepClone(item))
//     }

//     const res = {}

//     for (let key in obj) {
//         res[key] = deepClone(obj[key])
//     }

//     return res
// }