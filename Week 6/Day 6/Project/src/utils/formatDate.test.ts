import { formatDate } from "./formatDate"

describe("Format Date Testing", () => {

    it("should formats a valid date correctly", () => {
        expect(formatDate("2010-07-16")).toBe("July 16, 2010")
    })

    it("should returns N/A when date is empty", () => {
        expect(formatDate("")).toBe("N/A")
    })

})