import { fetchJSON } from "./fetchJSON.js";

async function getUserWithPosts(userId) {
    try {
        console.time("Sequential")
        const controller = new AbortController();
        // setTimeout(() => {
        //     controller.abort()
        // }, 10);
        const userData = await fetchJSON(`https://jsonplaceholder.typicode.com/users/${userId}`, controller.signal)

        const userPosts = await fetchJSON(`https://jsonplaceholder.typicode.com/posts?userId=${userData.id}`, controller.signal)
        console.timeEnd("Sequential")
        return { userData, userPosts }
    }
    catch (error) {
        throw error
    }
}

async function getDashboardData(userId) {
    console.time("parallel")
    const [postData, todosData] = await Promise.all([
        fetchJSON(`https://jsonplaceholder.typicode.com/posts/${userId}`),
        fetchJSON(`https://jsonplaceholder.typicode.com/todos/${userId}`)
    ])
    console.timeEnd("parallel")

    return {
        postData, todosData
    }

}

// async function getDashboardData(userId) {
//     console.time("parallel")
//     const [post, todos] = await Promise.allSettled([
//         fetchJSON(`https://jsonplaceholder.typicode.com/posts/${userId}`),
//         fetchJSON(`https://jsonplaceholder.typicode.com/todos/${userId}`)])
//     console.timeEnd("parallel") 
//     return ({
//         post: post.status === "fulfilled" ? post.value : null,
//         postError: post.status === "rejected" ? post.reason.message : null,
//         todos: todos.status === "fulfilled" ? todos.value : null,
//         todosError: todos.status === "rejected" ? todos.reason.message : null,
//     })

// }


export {getDashboardData}
export {getUserWithPosts}