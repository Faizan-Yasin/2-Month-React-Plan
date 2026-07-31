export function getPoster(path) {
    if (!path) {
        return "/placeholder.png"
    }
    return `https://image.tmdb.org/t/p/w500${path}`

}

export function getBackdrop(path) {
    if (!path) {
        return "/backdrop-placeholder.png"
    }
    return `https://image.tmdb.org/t/p/original${path}`
}

export function getProfile(path) {

    if (!path) return "/avatar.png"

    return `https://image.tmdb.org/t/p/w185${path}`

}