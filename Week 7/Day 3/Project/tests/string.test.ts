import { expect, it, describe } from 'vitest';
import { slugify, capitalize, truncate } from '../src/string';

describe('slugify function tests', () => {
    it('slugify("Hello World") should return "hello-world"', () => {
        expect(slugify("Hello World")).toBe("hello-world");
    });

    it('slugify("   Faizan Yasin      ") should return "faizan-yasin"', () => {
        expect(slugify("   Faizan Yasin      ")).toBe("faizan-yasin");
    });

    it('slugify("         ") should return ""', () => {
        expect(slugify("         ")).toBe("");
    });

    it('slugify(null) should return ""', () => {
        expect(slugify(null as any)).toBe("");
    });

});

describe('capitalize function tests', () => {
    it('capitalize("hello world") should return "Hello World"', () => {
        expect(capitalize("hello world")).toBe("Hello World");
    });

    it('capitalize("I am 20 years old") should return "I Am 20 Years Old"', () => {
        expect(capitalize("I am 20 years old")).toBe("I Am 20 Years Old");
    });

    it('capitalize(null) should return ""', () => {
        expect(capitalize(null as any)).toBe("");
    });

    it('capitalize("    ") should return ""', () => {
        expect(capitalize("    ")).toBe("");
    });

    it('capitalize(HELLO) should return "Hello"', () => {
        expect(capitalize("HELLO")).toBe("Hello");
    });

});

describe('truncate function tests', () => {
    it('truncate("Hello World", 5) should return "Hello..."', () => {
        expect(truncate("Hello World", 5)).toBe("Hello...");
    });

    it('truncate(null) should return ""', () => {
        expect(truncate(null as any, 5)).toBe("");
    });

    it('truncate("Hello World", 0) should return ""', () => {
        expect(truncate("Hello World", 0)).toBe("");
    });

    it('truncate("Ali", 5) should return "Ali"', () => {
        expect(truncate("Ali", 5)).toBe("Ali");
    });

    it('truncate("Hello World", -4) should return ""', () => {
        expect(truncate("Hello World", -4)).toBe("");
    });

    it('truncate("Hello World", 3.2) should return "Hel..."', () => {
        expect(truncate("Hello World", 3.2)).toBe("Hel...");
    });

});