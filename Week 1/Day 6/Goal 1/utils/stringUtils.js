export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export function reverse(str) {
    return str.split("").reverse().join("")
}

export function slugify(str) {
    return str.trim().toLowerCase().replace(/\s+/g, "-")
}