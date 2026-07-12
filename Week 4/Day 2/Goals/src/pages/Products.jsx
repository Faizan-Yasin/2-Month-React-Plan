import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Products = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const category = searchParams.get("category") || "all"

    return (
        <div>
            <h2>Category : {category}</h2>

            <button onClick={() => setSearchParams({ category: "electronis" })}>Electronics</button>
            <button onClick={() => setSearchParams({ category: "clothes" })}>Clothes</button>
            <button onClick={() => setSearchParams({ category: "books" })}>Books</button>

        </div>
    )
}

export default Products
