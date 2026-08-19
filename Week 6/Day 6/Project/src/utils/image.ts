export function getPoster(path: string | null) {
    if (!path) {
        return "/placeholder.png"
    }
    return `https://image.tmdb.org/t/p/w500${path}`

}

export function getBackdrop(path: string | null) {
    if (!path) {
        return "/backdrop-placeholder.png"
    }
    return `https://image.tmdb.org/t/p/original${path}`
}

export function getProfile(path: string | null) {

    if (!path) return "/avatar.png"

    return `https://image.tmdb.org/t/p/w185${path}`

}