import React from 'react'
import { useGetProductsQuery } from '../../features/products/productApi'
import ProductCard from './ProductCard'
import { selectFilteredProducts } from '../../selectors/productSelector'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'

const ProductGrid = () => {

    const { data: products = [], isLoading, isError, error } = useGetProductsQuery()

    const filteredProducts = useSelector(selectFilteredProducts)

    if (isLoading) {
        return <h2 className='font-bold text-2xl m-10'>Loading Products...</h2>
    }

    if (isError) {
        return <h2 className='font-bold text-2xl m-10'>{error.error}</h2>
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-6 mb-20'>
            {
                filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))
            }
        </motion.div>
    )
}

export default ProductGrid
