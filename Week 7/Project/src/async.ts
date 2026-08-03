export function debounce<T extends (...args: any[]) => void>(fn: T, delay: number): (...args: Parameters<T>) => void {

    if (typeof fn !== "function" || !Number.isFinite(delay) || delay <= 0) {
        return () => { }
    }

    let time: ReturnType<typeof setTimeout>

    return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
        clearTimeout(time)

        time = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}

export async function retry<T>(fn: () => Promise<T>, attempts: number, delayMs: number): Promise<T> {
    if (typeof fn !== "function" || !Number.isFinite(attempts) || attempts <= 0 || !Number.isFinite(delayMs) || delayMs <= 0) {
        throw new Error("Invalid Parameters")
    }

    attempts = Math.floor(attempts)

    let lastError: unknown

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