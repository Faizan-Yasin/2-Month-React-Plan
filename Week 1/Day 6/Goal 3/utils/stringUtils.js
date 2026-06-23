export function slugify(str) {
    if (typeof str !== "string" || str.trim().length === 0) return ""

    return str.trim().toLowerCase().replace(/\s+/g, "-")
}

export function capitalize(str){
    if (typeof str !== "string" || str.trim().length === 0) return ""

    return str.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
}

export function reverse(str) {
     if(typeof str !=="string" || str.trim().length === 0) return ""
    return str.split("").reverse().join("")
}
