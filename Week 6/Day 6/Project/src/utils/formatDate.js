export function formatDate(data) {
    if (!data) return "N/A"
    return new Date(data).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })
}