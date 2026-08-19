import "@testing-library/jest-dom/vitest"

import { beforeAll, afterEach, afterAll } from 'vitest'
import { server } from '../mocks/server'

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

import "@testing-library/jest-dom"

class IntersectionObserverMock {
    observe() { }
    unobserve() { }
    disconnect() { }
}

Object.defineProperty(window, "IntersectionObserver", {
    writable: true,
    value: IntersectionObserverMock,
})