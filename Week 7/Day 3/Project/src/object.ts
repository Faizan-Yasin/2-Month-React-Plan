export function omit<T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
    if (typeof obj !== "object" || obj === null) return {} as Omit<T, K>
    if (!Array.isArray(keys)) return { ...obj } as Omit<T, K>

    const copy = { ...obj }

    keys.forEach(key => {
        delete copy[key]
    })

    return copy as Omit<T, K>
}

export function deepClone<T>(obj: T): T {

    if (typeof obj !== "object" || obj === null) {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item)) as T;
    }

    const clone = {} as T;

    for (const key in obj) {
        clone[key] = deepClone(obj[key]);
    }

    return clone;
}
