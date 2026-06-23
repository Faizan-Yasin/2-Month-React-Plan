export function pick(obj, keys) {

    let newObj = {}

    keys.forEach(element => {
        if (element in obj) {
            newObj[element] = obj[element]
        }
    });

    return newObj
}

export function omit(obj, keys) {
    let copy = { ...obj }

    keys.forEach(element => {
        delete copy[element]
    })

    return copy
}