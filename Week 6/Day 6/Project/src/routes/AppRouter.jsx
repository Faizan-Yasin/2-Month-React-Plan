import React from 'react'
import { Routes, Route } from 'react-router'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import MovieDetail from '../pages/MovieDetail'
import NotFound from '../pages/NotFound'
import SearchPage from '../pages/SearchPage'
import FavouritesPage from '../pages/FavouritesPage'
import { Suspense } from 'react'
import MovieDetailSkeleton from '../components/skeletons/MovieDetailSkeleton'
import CastSkeleton from '../components/skeletons/CastSkeleton'
import MovieGridSkeleton from "../components/skeletons/MovieGridSkeleton"

const AppRouter = () => {
    return (
        <Routes>

            <Route element={<MainLayout />}>

                <Route path='/' element={
                    <>
                        <Suspense fallback={
                            <>
                                <h2 className='text-3xl font-bold mb-8'>

                                    Trending Movies

                                </h2>
                                <MovieGridSkeleton />
                            </>
                        }>
                            <Home />
                        </Suspense>
                    </>
                } />
                <Route path='/movie/:id' element={
                    <>
                        <Suspense fallback={
                            <>
                                <MovieDetailSkeleton />
                                <CastSkeleton />
                                <MovieGridSkeleton />
                            </>
                        }>
                            <MovieDetail />
                        </Suspense>
                    </>
                } />
                <Route path='/search' element={<SearchPage />} />
                <Route path='/favourites' element={<FavouritesPage />} />

            </Route>

            <Route path='*' element={<NotFound />} />

        </Routes>
    )
}

export default AppRouter
