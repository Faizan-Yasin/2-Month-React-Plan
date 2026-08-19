import { server } from "../mocks/server"
import { http, HttpResponse } from "msw"
import { getTrendingMovies, searchMovies, getMovieDetails, getMovieCredits, getMovieVideos, getSimilarMovies, } from "./movieService"

describe("Movie Service Testing", () => {
    it("should fetch trending movies successfully", async () => {
        const trending = {
            page: 1,
            results: [{
                id: 1,
                title: "Inception",
                poster_path: "/poster.jpg",
                vote_average: 8.8,
                release_date: "2010-07-16",
            },],
            total_pages: 1,
        }

        server.use(
            http.get("https://api.themoviedb.org/3/trending/movie/week", () => {
                return HttpResponse.json(trending)
            })
        )

        const data = await getTrendingMovies()
        expect(data).toEqual(trending)
    })

    it("should fetch search movies with query and page parameters", async () => {
        const search = {
            page: 1,
            results: [{
                id: 3,
                title: "Batman",
                poster_path: "/poster.jpg",
                vote_average: 8.2,
                release_date: "2008-07-18",
            },],
            total_pages: 1,
        }

        server.use(
            http.get("https://api.themoviedb.org/3/search/movie", ({ request }) => {
                const url = new URL(request.url)
                expect(url.searchParams.get("query")).toBe("batman")
                expect(url.searchParams.get("page")).toBe("1")

                return HttpResponse.json(search)
            })
        )

        const data = await searchMovies("batman", 1)
        expect(data).toEqual(search)
    })

    it("should fetch movie details by ID", async () => {
        const movie = {
            id: 1,
            title: "Inception",
            backdrop_path: "/backdrop.jpg",
            poster_path: "/poster.jpg",
            overview: "A thief enters dreams.",
            release_date: "2010-07-16",
            runtime: 148,
            vote_average: 8.8,
            genres: [
                {
                    id: 28,
                    name: "Action",
                },
                {
                    id: 878,
                    name: "Science Fiction",
                },
            ],
            production_companies: [
                {
                    id: 1,
                    name: "Warner Bros.",
                },
            ],
        }

        server.use(
            http.get("https://api.themoviedb.org/3/movie/1", () => {
                return HttpResponse.json(movie)
            })
        )

        const data = await getMovieDetails(1)
        expect(data).toEqual(movie)
    })

    it("should fetch movie credits by ID", async () => {
        const credits = {
            id: 10,
            name: "Leonardo DiCaprio",
            character: "Cobb",
            profile_path: "/leo.jpg",
        }

        server.use(
            http.get("https://api.themoviedb.org/3/movie/10/credits", () => {
                return HttpResponse.json(credits)
            })
        )

        const data = await getMovieCredits(10)
        expect(data).toEqual(credits)
    })

    it("should fetch movie videos by ID", async () => {
        const video = {
            id: 500,
            results: [
                {
                    id: "video-1",
                    key: "abc123",
                    site: "YouTube",
                    type: "Trailer",
                },
            ],
        }

        server.use(
            http.get("https://api.themoviedb.org/3/movie/500/videos", () => {
                return HttpResponse.json(video)
            })
        )

        const data = await getMovieVideos(500)
        expect(data).toEqual(video)
    })

    it("should fetch similar movies by ID", async () => {
        const mockResponse = {
            page: 20,
            results: [
                {
                    id: 2,
                    title: "Interstellar",
                    poster_path: "/poster2.jpg",
                    release_date: "2014-11-07",
                    vote_average: 8.6,
                },
            ],
            total_pages: 1,
            total_results: 1,
        }

        server.use(
            http.get("https://api.themoviedb.org/3/movie/20/similar", () => {
                return HttpResponse.json(mockResponse)
            })
        )

        const data = await getSimilarMovies(20)
        expect(data).toEqual(mockResponse)
    })
})
