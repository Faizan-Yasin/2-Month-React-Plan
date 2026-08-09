import "@testing-library/jest-dom"
import { server } from "./mocks/node"

Object.defineProperty(window, 'location', {
    value: new URL('http://localhost:5173'),
    writable: true,
})

beforeAll(() => server.listen())
beforeEach(() => server.resetHandlers())
afterAll(() => server.close())