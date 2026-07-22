import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://fakestoreapi.com/",
    }),
    tagTypes: ["Product"],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => "products",
            providesTags: ["Product"]
        }),
        getCategories: builder.query({
            query: () => "products/categories",
        }),
        getProductById: builder.query({
            query: (id) => `products/${id}`
        })
    })
})

export const { useGetProductsQuery, useGetCategoriesQuery, useGetProductByIdQuery } = productApi