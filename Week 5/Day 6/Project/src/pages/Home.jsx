import React from 'react'
import Navbar from '../components/common/Navbar'
import CategoryFilter from '../components/common/CategoryFilter'
import ProductGrid from '../components/product/ProductGrid'
import CartDrawer from '../components/cart/CartDrawer'
import Footer from '../components/common/Footer'

const Home = () => {
    return (
        <div>
            <Navbar />
            <CategoryFilter />
            <ProductGrid />
            <CartDrawer />
            <Footer />
        </div>
    )
}

export default Home
