import postApi from "./postApi";

export const getPosts = async () => {
    try {
        const response = await postApi.get("posts")
        return response.data
    } catch (error) {
        throw {
            message: error.message,
            status: error.status,
            data: error.data,
        }
    }
}

export const getPostById = async (id) => {
    try {
        const response = await postApi.get(`posts/${id}`)
        return response.data
    } catch (error) {
        throw {
            message: error.message,
            status: error.status,
            data: error.data,
        }
    }
}