import { describe, expect, it } from "vitest"
import { getPoster, getBackdrop, getProfile, } from "./image"

describe("Get Poster Testing", () => {
    it("should returns placeholder when poster path is missing", () => {
        expect(getPoster(null)).toBe("/placeholder.png")
    })

    it("should returns TMDB poster URL when path exists", () => {
        expect(getPoster("/poster.jpg")).toBe("https://image.tmdb.org/t/p/w500/poster.jpg")
    })
})

describe("Get Backdrop Testing", () => {
    it("should returns placeholder when backdrop path is missing", () => {
        expect(getBackdrop(null)).toBe("/backdrop-placeholder.png")
    })

    it("should returns TMDB backdrop URL when path exists", () => {
        expect(getBackdrop("/backdrop.jpg"))
            .toBe("https://image.tmdb.org/t/p/original/backdrop.jpg")
    })
})

describe("Get Profile Testing", () => {
    it("should returns placeholder when profile path is missing", () => {
        expect(getProfile(null)).toBe("/avatar.png")
    })

    it("should returns TMDB profile URL when path exists", () => {
        expect(getProfile("/profile.jpg"))
            .toBe("https://image.tmdb.org/t/p/w185/profile.jpg")
    })
})