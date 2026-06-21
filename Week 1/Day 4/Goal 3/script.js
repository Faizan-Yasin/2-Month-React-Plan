async function getApp() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
    const userData = await response.json()

    const response2 = await fetch(`https://jsonplaceholder.typicode.com/posts/1?userId=${userData.id}`)
    const userPosts = await response2.json()

    console.log("User Data:", userData);
    console.log("User Posts:", userPosts);
}

getApp()