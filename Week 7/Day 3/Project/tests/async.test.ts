import { it, describe, expect, vi, beforeEach, afterEach } from 'vitest';
import { debounce, retry } from '../src/async';

describe("debounce()", () => {

    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it("should not fire immediately", () => {

        const fn = vi.fn();

        const debounced = debounce(fn, 1000);

        debounced();

        expect(fn).not.toHaveBeenCalled();

    });

    it("should fire after delay", async () => {

        const fn = vi.fn();

        const debounced = debounce(fn, 1000);

        debounced();

        await vi.advanceTimersByTimeAsync(1000);

        expect(fn).toHaveBeenCalledTimes(1);

    });

    it("should fire only once if called multiple times within delay", async () => {

        const fn = vi.fn();

        const debounced = debounce(fn, 1000);

        debounced();
        debounced();
        debounced();
        debounced();

        expect(fn).not.toHaveBeenCalled();

        await vi.advanceTimersByTimeAsync(1000);

        expect(fn).toHaveBeenCalledTimes(1);

    });

});

describe("retry function tests", () => {
    it('should throw an error for invalid arguments', async () => {
        await expect(retry(null as any, 3, 100)).rejects.toThrow()
        await expect(retry(async () => "ok", -3, 100)).rejects.toThrow()
        await expect(retry(async () => "ok", 3, 0)).rejects.toThrow()
    })

    it('should return result immediately if first attempt suceeds', async () => {
        const fn = vi.fn().mockResolvedValue("Success Data")
        const result = await retry(fn, 3, 100)
        expect(fn).toHaveBeenCalledTimes(1)
    })

    it('should retry on failure and return result if it eventually succeeds', async () => {
        const fn = vi.fn()
            .mockRejectedValueOnce(new Error("Attempt 1 Failed"))
            .mockRejectedValueOnce(new Error("Attempt 2 Failed"))
            .mockResolvedValueOnce("Success on Attempt 3");

        const result = await retry(fn, 3, 100);

        expect(result).toBe("Success on Attempt 3");
        expect(fn).toHaveBeenCalledTimes(3);
    })

    it('should throw the last error if all attempts fail', async () => {
        const fn = vi.fn()
            .mockRejectedValueOnce(new Error("Error 1"))
            .mockRejectedValueOnce(new Error("Error 2"))
            .mockRejectedValueOnce(new Error("Final Error"));

        await expect(retry(fn, 3, 100)).rejects.toThrow("Final Error");
        expect(fn).toHaveBeenCalledTimes(3);
    });

    it('should wait for delayMs between retries using fake timers', async () => {
        vi.useFakeTimers()

        const fn = vi.fn()
            .mockRejectedValueOnce(new Error("Fail 1"))
            .mockResolvedValueOnce("Pass 2")

        const promise = retry(fn, 2, 5000)

        expect(fn).toHaveBeenCalledTimes(1)

        await vi.advanceTimersByTimeAsync(5000)

        const result = await promise
        expect(result).toBe("Pass 2")
        expect(fn).toHaveBeenCalledTimes(2)

        vi.useRealTimers()
    })

    it("should return empty function for invalid arguments", () => {

        const fn = vi.fn();

        const debounced = debounce(fn, 0);

        debounced();

        expect(fn).not.toHaveBeenCalled();

    })

    it("should return empty function for invalid function", () => {

        const debounced = debounce(null as any, 1000);

        expect(() => debounced()).not.toThrow();

    });

})