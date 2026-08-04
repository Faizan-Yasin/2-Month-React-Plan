import { it, expect, describe } from 'vitest'
import { chunk, groupBy, unique } from '../src/array'

describe("Array chunk function tests", () => {
    it("[1, 2, 3, 4, 5] chunked by 2 should return [[1, 2], [3, 4], [5]]", () => {
        expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]])
    })

    it("[] chunked by 2 should return []", () => {
        expect(chunk([], 2)).toEqual([])
    })

    it("null chunked by 2 should return []", () => {
        expect(chunk(null as any, 2)).toEqual([])
    })

    it("[] chunked by -2 should return []", () => {
        expect(chunk([], -2)).toEqual([])
    })

    it("[1,2] chunked by 0 should return []", () => {
        expect(chunk([1, 2], 0)).toEqual([])
    })

    it("[1,2] chunked by 3 should return [[1, 2]]", () => {
        expect(chunk([1, 2], 3)).toEqual([[1, 2]])
    })
})

describe("Array unique function tests", () => {
    it("[1, 2, 2, 3, 3] unique should be [1, 2, 3]", () => {
        expect(unique([1, 2, 2, 3, 3])).toEqual([1, 2, 3])
    })

    it("['a', 'a', 'b', 'b', 'c'] unique should be ['a', 'b', 'c']", () => {
        expect(unique(["a", "a", "b", "b", "c"])).toEqual(["a", "b", "c"])
    })

    it("[] unique should be []", () => {
        expect(unique([])).toEqual([])
    })

    it("null unique should return []", () => {
        expect(unique(null as any)).toEqual([])
    })
})

describe("Array groupBy function tests", () => {
    it("[1, 2, 3, 4, 5] grouped by even/odd should return { odd: [1, 3, 5], even: [2, 4] }", () => {
        const result = groupBy([1, 2, 3, 4, 5], (item: number) => item % 2 === 0 ? 'even' : 'odd')
        expect(result).toEqual({ odd: [1, 3, 5], even: [2, 4] })
    })

    it("[1, 2, 3, 4, 5] grouped by even/odd should return { 1: [1, 3, 5], 0: [2, 4] }", () => {
        const result = groupBy([1, 2, 3, 4, 5], (item: number) => item % 2)
        expect(result).toEqual({ 1: [1, 3, 5], 0: [2, 4] })
    })

    it("[] grouped by even/odd should return {}", () => {
        const result = groupBy([], (item: number) => item % 2 === 0 ? 'even' : 'odd')
        expect(result).toEqual({})
    })

    it("null grouped by even/odd should return {}", () => {
        const result = groupBy(null as any, (item: number) => item % 2 === 0 ? 'even' : 'odd')
        expect(result).toEqual({})
    })

    it("[1, 2, 3] grouped by null should return {}", () => {
        const result = groupBy([1, 2, 3], null as any)
        expect(result).toEqual({})
    })

    it('[{ name: "Ali", city: "Lahore" }, { name: "Ahmed", city: "Karachi" }, { name: "Sana", city: "Lahore" }] grouped by city should return { Lahore: [{ name: "Ali", city: "Lahore" }, { name: "Sana", city: "Lahore" }], Karachi: [{ name: "Ahmed", city: "Karachi" }] }', () => {
        const result = groupBy([{ name: "Ali", city: "Lahore" }, { name: "Ahmed", city: "Karachi" }, { name: "Sana", city: "Lahore" }], (item: { name: string, city: string }) => item.city)
        expect(result).toEqual({ Lahore: [{ name: "Ali", city: "Lahore" }, { name: "Sana", city: "Lahore" }], Karachi: [{ name: "Ahmed", city: "Karachi" }] })
    })
})