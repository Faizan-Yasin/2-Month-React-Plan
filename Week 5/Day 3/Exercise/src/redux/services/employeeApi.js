import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const employeeApi = createApi({
    reducerPath: "employeeApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com"
    }),
    tagTypes: ["Users", "Posts"],
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => "/users",
            providesTags: ["Users"]
        }),
        getUserById: builder.query({
            query: (id) => `/users/${id}`,
            providesTags: (result, error, id) => [
                { type: "User", id }
            ],
        }),
        getPosts: builder.query({
            query: (id) => `/posts?userId=${id}`,
            providesTags: ["Posts"]
        }),
        createUser: builder.mutation({
            query: (user) => ({
                url: "/users",
                method: "POST",
                body: user,
            }),
            invalidatesTags: ["Users"]
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `/users/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: (result, error, id) => [
                { type: "User", id }
            ]
        }),
    })
})

export const { useGetUsersQuery, useGetUserByIdQuery, useGetPostsQuery, useCreateUserMutation, useDeleteUserMutation } = employeeApi