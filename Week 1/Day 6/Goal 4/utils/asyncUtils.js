export function delay(ms) {
    if (!Number.isFinite(ms) || ms < 0) {
        return Promise.reject(
            new Error("Invalid delay")
        )
    }
    return new Promise(resolve => setTimeout(resolve, ms))
}

export async function retry(fn, attempts, delayMs) {
    if (typeof fn !== "function" || !Number.isFinite(attempts) || attempts <= 0 || !Number.isFinite(delayMs) || delayMs <= 0) {
        throw new Error("Invalid Parameters")
    }

    attempts = Math.floor(attempts)

    let lastError

    for (let i = 0; i < attempts; i++) {
        try {
            return await fn()
        }
        catch (error) {
            lastError = error
            if (i < attempts - 1) {
                await new Promise(res => setTimeout(res, delayMs))
            }
        }
    }

    throw lastError
}