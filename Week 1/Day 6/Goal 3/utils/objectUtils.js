export function pick(obj, keys) {
    if (typeof obj !== "object" || obj === null || Array.isArray(obj)) return {}
    if (!Array.isArray(keys)) return {}

    let newObj = {}

    keys.forEach(element => {
        if (element in obj) {
            newObj[element] = obj[element]
        }
    });

    return newObj
}

export function omit(obj, keys) {
    if (typeof obj !== "object" || obj === null || Array.isArray(obj)) return {}
    if (!Array.isArray(keys)) return { ...obj };
    let copy = { ...obj }

    keys.forEach(element => {
        delete copy[element]
    })

    return copy
}