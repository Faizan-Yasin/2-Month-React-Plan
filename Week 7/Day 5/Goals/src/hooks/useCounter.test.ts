import { act, renderHook } from "@testing-library/react"
import { useCounter } from "./useCounter"

it('qcount should increment', () => {
    const { result } = renderHook(() => useCounter())

    expect(result.current.count).toBe(0)

    act(() => {
        result.current.increment()
    })

    expect(result.current.count).toBe(1)

})