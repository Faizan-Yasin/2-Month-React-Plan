import { formatRuntime } from "./formatRuntime"

describe("Format Runtime Testing", () => {

    it("should returns N/A when minutes is null", () => {
        expect(formatRuntime(null)).toBe("N/A")
    })

    it("should formats minutes into hours and minutes", () => {
        expect(formatRuntime(125)).toBe("2h 5m")
    })

})