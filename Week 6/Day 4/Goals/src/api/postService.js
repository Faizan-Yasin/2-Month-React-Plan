import postApi from "./postApi";

export const getPostsPagination = async (page) => {
    try {
        const response = await postApi.get(`posts?_page=${page}&_limit=10`)
        return response.data
    } catch (error) {
        throw {
            message: error.message,
            status: error.status,
            data: error.data,
        }
    }
}

export const getPostsInfinite = async ({ pageParam }) => {
    try {
        const response = await postApi.get(`posts?_page=${pageParam}&_limit=10`)
        return response.data
    } catch (error) {
        throw {
            message: error.message,
            status: error.status,
            data: error.data,
        }
    }
}