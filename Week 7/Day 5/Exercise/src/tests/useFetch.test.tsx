import { renderHook, waitFor } from "@testing-library/react"
import { useFetch } from "../hooks/useFetch"

describe("useFetch", () => {

    it("fetches data successfully", async () => {

        const { result } = renderHook(() =>
            useFetch("/hook-data")
        )

        expect(result.current).toEqual({
            loading: true,
            data: null,
        })

        await waitFor(() => {
            expect(result.current.loading).toBe(false)
        })

        expect(result.current.data).toEqual({
            id: 6,
            name: "abdullah",
            email: "abdullah@gmail.com",
        })
    })
})