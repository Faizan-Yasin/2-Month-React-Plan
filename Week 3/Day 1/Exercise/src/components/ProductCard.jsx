import React from 'react'
import { memo } from 'react'

const ProductCard = memo(({ products, onAddToCart }) => {
    console.log("ProductCard Render");
    return (
        <div>
            <ul>
                {/* 3. ONE PLACE I DELIBERATELY DID NOT USE THEM AND WHY:
                 Inside the products.map() loop, the button has an inline function: onClick={() => onAddToCart(product)}
                 I did NOT use a hook here because React rules forbid calling hooks inside loops or map functions.
                 Writing it as a clean inline arrow function here is correct and completely safe. */}
                {products.map(product => (
                    <li key={product.id}>
                        <h2>Product Name : {product.name}</h2>
                        <h3>Product Category : {product.category}</h3>
                        <h3>Product Price : {product.price}</h3>
                        <h3>Produc Rating : {product.rating}</h3>
                        <button onClick={() => onAddToCart(product)}>Add To Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    )
})

export default ProductCard
