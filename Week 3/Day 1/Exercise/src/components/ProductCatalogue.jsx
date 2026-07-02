import React from 'react'
import { useState, useMemo, useCallback } from 'react'
import ProductCard from './ProductCard'

const Products = Array.from({ length: 500 }, (_, i) => {
    return {
        id: i + 1,
        name: `Product ${i + 1}`,
        category: ["Electronics", "Clothing", "Home", "Sports", "Books"][i % 5],
        price: Math.floor(Math.random() * 5000) + 100,
        rating: Math.floor(Math.random() * 5) + 1,
    }
})

const ProductCatalogue = () => {
    const [search, setSearch] = useState("")
    const [sortOrder, setSortOrder] = useState("price-asc")
    const [cart, setCart] = useState([])
    const [theme, setTheme] = useState(true)

    // console.log("Filtering and Sorting...")
    // const filteredProducts = Products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()))
    //     .sort((a, b) => {
    //         if (sortOrder === "price-asc") {
    //             return a.price - b.price
    //         }
    //         if (sortOrder === "price-desc") {
    //             return b.price - a.price
    //         }
    //         if (sortOrder === "rating-desc") {
    //             return b.rating - a.rating
    //         }
    //         return 0;
    //     })

    // 1. WHY I USED useMemo HERE:
    // Filtering and sorting 500 products takes a lot of processing power.
    // useMemo saves the result in cache and runs ONLY when 'search' or 'sortOrder' changes, preventing page lag.

    const filteredProducts = useMemo(() => {
        console.log("Filtering and Sorting...")
        return Products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()))
            .sort((a, b) => {
                if (sortOrder === "price-asc") {
                    return a.price - b.price
                }
                if (sortOrder === "price-desc") {
                    return b.price - a.price
                }
                if (sortOrder === "rating-desc") {
                    return b.rating - a.rating
                }
                return 0;
            })
    }, [search, sortOrder])

    // 2. WHY I USED useCallback HERE:
    // In React, regular functions are recreated in memory on every single render.
    // useCallback freezes the 'onAddToCart' function reference so it doesn't change, keeping the child component safe from useless re-renders.

    const onAddToCart = useCallback((product) => {
        alert(`Product ${product.name} is Add To Cart`)
        setCart(prev => [...prev, product])
    }, [])

    // function onAddToCart(product) {
    //     alert(`Product ${product.name} is Add To Cart`)
    //     setCart(prev => [...prev, product])
    // }

    return (
        <div>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search Product...' />
            <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                <option value="price-asc">Price Low To High</option>
                <option value="price-desc">Price High To Low</option>
                <option value="rating-desc">Rating High To Low</option>
            </select>
            <button onClick={() => setTheme(!theme)}>Current Theme : {theme ? "Light" : "Dark"}</button>
            <ProductCard products={filteredProducts} onAddToCart={onAddToCart} />
        </div>
    )
}

export default ProductCatalogue
