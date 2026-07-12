import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Books from './pages/Books'
import BookDetail from './pages/BookDetail'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Files from './pages/Files'
import Products from './pages/Products'
import Layout from './layouts/Layout'


const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/books' element={<Books />} />
                    <Route path='/books/:id' element={<BookDetail />} />

                    <Route path='/files/*' element={<Files />} />

                    <Route path='/products' element={<Products />} />

                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
