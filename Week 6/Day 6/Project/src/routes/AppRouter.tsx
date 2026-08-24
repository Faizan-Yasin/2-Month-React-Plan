import { Routes, Route, useLocation } from 'react-router'
import { Suspense, lazy } from 'react'
import MainLayout from '../layouts/MainLayout'
import MovieDetailSkeleton from '../components/skeletons/MovieDetailSkeleton'
import CastSkeleton from '../components/skeletons/CastSkeleton'
import MovieGridSkeleton from "../components/skeletons/MovieGridSkeleton"
import NotFoundSkeleton from '../components/skeletons/NotFoundSkeleton'
import SearchPageSkeleton from '../components/skeletons/SearchPageSkeleton'

const Home = lazy(() => import("../pages/Home"))
const MovieDetail = lazy(() => import("../pages/MovieDetail"))
const NotFound = lazy(() => import("../pages/NotFound"))
const SearchPage = lazy(() => import("../pages/SearchPage"))
const FavouritesPage = lazy(() => import("../pages/FavouritesPage"))

const AppRouter = () => {
    const location = useLocation()
    return (
        <Routes>

            <Route element={<MainLayout />}>

                <Route path='/' element={
                    <>
                        <Suspense key={location.pathname} fallback={
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
                        <Suspense key={location.pathname}  fallback={
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
                <Route path='/search' element={<>
                    <Suspense key={location.pathname}  fallback={
                        <>
                            <h2 className='text-3xl font-bold mb-8'>

                                Search Movies

                            </h2>
                            <SearchPageSkeleton />
                        </>
                    }>
                        <SearchPage />
                    </Suspense>
                </>} />

                <Route path='/favourites' element={<>
                    <Suspense key={location.pathname}  fallback={
                        <>
                            <h2 className='text-3xl font-bold mb-8'>

                                Favourite Movies

                            </h2>
                            <MovieGridSkeleton />
                        </>
                    }>
                        <FavouritesPage />
                    </Suspense>
                </>} />

            </Route>

            <Route path='*' element={<>
                <Suspense key={location.pathname}  fallback={<NotFoundSkeleton />}>
                    <NotFound />
                </Suspense>
            </>} />

        </Routes>
    )
}

export default AppRouter
