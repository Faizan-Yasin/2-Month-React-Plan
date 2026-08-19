import { http, HttpResponse } from "msw"

export const handlers = [
    http.get(
        "https://api.themoviedb.org/3/trending/movie/week",
        () => {
            return HttpResponse.json({
                page: 1,
                results: [
                    {
                        id: 1,
                        title: "Inception",
                        poster_path: "/poster.jpg",
                        release_date: "2010-07-16",
                        vote_average: 8.8,
                    },
                ],
                total_pages: 1,
            })
        }
    ),
    http.get('https://api.themoviedb.org/3/search/movie', () => {
        return HttpResponse.json({
            page: 1,
            results: [
                {
                    id: 1,
                    title: "Inception",
                    poster_path: "/poster.jpg",
                    vote_average: 8.8,
                    release_date: "2010-07-16",
                },
                {
                    id: 2,
                    title: "Interstellar",
                    poster_path: "/poster.jpg",
                    vote_average: 8.7,
                    release_date: "2014-11-07",
                },
                {
                    id: 3,
                    title: "Batman",
                    poster_path: "/poster.jpg",
                    vote_average: 8.2,
                    release_date: "2008-07-18",
                },
            ],
            total_pages: 1,
        })
    })
]