async function fetchJSON(url, signal) {
    try {
        const response = await fetch(url, { signal })
        if (response.ok) {
            return await response.json()
        }
        else {
            throw new Error(`HTTP : ${response.status}`)
        }
    }
    catch (error) {
        if (error.name === "TypeError") {
            throw new Error("Network Error")
        }
        else if (error.name === "AbortError") {
            throw new Error("Request Cancel")
        }
        throw error
    }
}

// async function runfetchJSON() {
//     try {
//         const controller = new AbortController();
//         const promise = fetchJSON("https://jsonplaceholder.typicode.com/users/1", controller.signal)

//         // controller.abort()

//         const result = await promise
//         console.log(result)
//     }
//     catch (error) {
//         if (error.message.includes("HTTP")) {
//             console.log("Bad Status Error : ", error.message);
//         }
//         else if (error.message.includes("Network Error")) {
//             console.log("Network Error : ", error.message);
//         }
//         else if (error.message.includes("Request Cancel")) {
//             console.log("Request Cancel : ", error.message);
//         }
//         else {
//             console.log("Unknown Error : ", error.message);
//         }
//     }
// }

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


// async function runGetUserWithPosts() {
//     try {
//         const result = await getUserWithPosts(1)
//         console.log(result)
//     }
//     catch (error) {
//         console.log(error.message)
//     }
// }

// runfetchJSON()
// runGetUserWithPosts()


// async function getDashboardData(userId) {
//     console.time("parallel")
//     const [postData, todosData] = await Promise.all([
//         fetchJSON(`https://jsonplaceholder.typicode.com/posts/${userId}`),
//         fetchJSON(`https://jsonplaceholder.typicode.com/todos/${userId}`)
//     ])
//     console.timeEnd("parallel")

//     return {
//         postData, todosData
//     }

// }

async function getDashboardData(userId) {
    console.time("parallel")
    const [post, todos] = await Promise.allSettled([
        fetchJSON(`https://jsonplaceholder.typicode.com/posts/${userId}`),
        fetchJSON(`https://jsonplaceholder.typicode.com/todos/${userId}`)])
    console.timeEnd("parallel") 
    return ({
        post: post.status === "fulfilled" ? post.value : null,
        postError: post.status === "rejected" ? post.reason.message : null,
        todos: todos.status === "fulfilled" ? todos.value : null,
        todosError: todos.status === "rejected" ? todos.reason.message : null,
    })

}


// async function runGetDashboardData() {
//     try {
//         const result = await getDashboardData(1)
//         console.log(result)
//     }
//     catch (error) {
//         console.log(error.message);
//     }
// }

// runGetDashboardData()

async function run() {
    console.log("Sequential Start")

    await getUserWithPosts(1)

    console.log("Parallel Start")

    await getDashboardData(1)
}

run()


// Sequential Start

// Sequential: 305.85302734375 ms

// Parallel Start

// parallel: 301.2021484375 ms