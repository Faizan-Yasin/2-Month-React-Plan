import React from 'react'
import { Routes, Route } from 'react-router'
import Home from '../pages/Home'
import PostPagination from '../pages/PostPagination'
import PostInfiniteScroll from '../pages/PostInfiniteScroll'

const AppRoutes = () => {
    return (
        <div>
            <Routes>

                <Route path='/' element={<Home />} />
                <Route path='/postpagination' element={<PostPagination />} />
                <Route path='/postinifinitescroll' element={<PostInfiniteScroll />} />

            </Routes>
        </div>
    )
}

export default AppRoutes
