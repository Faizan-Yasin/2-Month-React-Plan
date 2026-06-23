export function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export async function retry(fn, times = 3) {
    let lastError

    for (let i = 0; i < times; i++) {
        try {
            return await fn()
        }
        catch (error) {
            lastError = error
        }
    }

    throw lastError
}