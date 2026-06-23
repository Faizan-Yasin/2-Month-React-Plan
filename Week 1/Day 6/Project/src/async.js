export function debounce(fn, delay) {

    if (typeof fn !== "function" || !Number.isFinite(delay) || delay <= 0) {
        return () => { }
    }

    let time

    return function (...args) {
        clearTimeout(time)

        time = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
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