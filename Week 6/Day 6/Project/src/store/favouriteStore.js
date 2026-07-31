import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useFavouriteStore = create(
    persist(
        (set, get) => ({
            favourites: [],
            toggleFavourite: (movie) => {
                const exists = get().favourites.some(
                    item => item.id === movie.id
                )

                if (exists) {
                    set(state => ({
                        favourites: state.favourites.filter(
                            item => item.id !== movie.id
                        ),
                    }))
                } else {
                    set(state => ({
                        favourites: [...state.favourites, movie],
                    }))
                }
            },

            isFavourite: (id) =>
                get().favourites.some(movie => movie.id === id),
        }),
        {
            name: "movie-favourites",
        }
    )
)