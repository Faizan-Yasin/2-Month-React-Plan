import { Routes, Route } from 'react-router'
import Home from '../pages/Home'
import Posts from '../pages/Posts'
import PostDetail from '../pages/PostDetail'
import { Suspense } from 'react'
import PostsSkeleton from '../pages/PostsSkeleton'

const AppRoutes = () => {
    return (
        <div>

            <Routes>

                <Route path='/' element={<Home />} />
                <Route path='/posts' element={
                    <Suspense fallback={<PostsSkeleton />}>
                        <Posts />
                    </Suspense>
                } />
                <Route
                    path="/posts/:id"
                    element={
                        <Suspense fallback={<PostsSkeleton count={1} />}>
                            <PostDetail />
                        </Suspense>
                    }
                />

            </Routes>

        </div>
    )
}

export default AppRoutes
