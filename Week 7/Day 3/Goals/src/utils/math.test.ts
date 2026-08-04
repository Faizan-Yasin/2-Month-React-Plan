import { test, expect, vi, it, describe, beforeEach, afterEach, beforeAll, afterAll } from 'vitest';
import { sum } from './math';
import { getTrendingMovies } from '../api/movieApi';

describe('sum function tests', () => {

    beforeAll(() => {
        console.log('Starting sum function tests...');
    })

    beforeEach(() => {
        console.log('Running a test...');
    })

    test('sum 2 and 3 should return 5', () => {
        expect(sum(2, 3)).toBe(5);
    });

    test('sum -2 and -7 should return -9', () => {
        expect(sum(-2, -7)).toBe(-9);
    });

    test('sum 0 and 0 should return 0', () => {
        expect(sum(0, 0)).toBe(0);
    });

    it('sum 10 and 20 should return 30', () => {
        expect(sum(10, 20)).toBe(30);
    });

    afterEach(() => {
        console.log('Test completed.');
    })

    afterAll(() => {
        console.log('All sum function tests completed.');
    })
})

describe('mock functions tests', () => {
    test('mock function should be called', () => {
        const mockFn = vi.fn();
        mockFn();
        expect(mockFn).toHaveBeenCalled();
    });

    test('mock function should be called 3 times', () => {
        const mockFn = vi.fn();
        mockFn();
        mockFn();
        mockFn();
        expect(mockFn).toHaveBeenCalledTimes(3);
    });

    it('mock function should be called with Faizan', () => {
        const mockFn = vi.fn();
        mockFn("Faizan");
        expect(mockFn).toHaveBeenCalledWith("Faizan");
    });

    it('mock function should be return Faizan', () => {
        const mockFn = vi.fn();
        mockFn.mockReturnValue("Faizan");
        expect(mockFn()).toBe("Faizan");
    });

    it('mock function Implementation', () => {
        const mockFn = vi.fn();
        mockFn.mockImplementation((a: number, b: number) => a + b);
        expect(mockFn(26, 4)).toBe(30);
    });
})

vi.mock('../api/movieApi', () => {
    return {
        getTrendingMovies: vi.fn()
    }
})

describe('Mock Api tests', () => {
    test('getTrendingMovies should return an array of movies', async () => {
        vi.mocked(getTrendingMovies).mockResolvedValue([{
            id: 1,
            title: "Batman",
        }]);
        const movies = await getTrendingMovies();
        expect(movies[0].title).toBe("Batman");
    })
})