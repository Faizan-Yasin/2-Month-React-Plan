// async function getData() {
//     const user = fetch("https://jsonplaceholder.typicode.com/users/1");
//     const post = fetch("https://jsonplaceholder.typicode.com/posts/1");
//     const comment = fetch("https://jsonplaceholder.typicode.com/comments/1");

//     const [userRes, postRes, commentRes] = await Promise.all([
//         user,
//         post,
//         comment
//     ]);

//     const userData = await userRes.json();
//     const postData = await postRes.json();
//     const commentData = await commentRes.json();

//     console.log("User:", userData);
//     console.log("Post:", postData);
//     console.log("Comment:", commentData);
// }

// getData();


async function test() {
    const promise1 = fetch("https://jsonplaceholder.typicode.com/users/1")

    const promise2 = new Promise((resolve, reject) => {
        reject("promise 2 reject ho gaya")
    })

    // const promise2 = fetch("https://jsonplaceholder.typicode.com/posts/1")
    const promise3 = fetch("https://jsonplaceholder.typicode.com/comments/1")

    const result = await Promise.allSettled([promise1, promise2, promise3])
    console.log(result)

    if (result[0].status === "fulfilled") {
        const user = await result[0].value.json()
        console.log("User:", user);
    }
    else{
        console.log("User Error:", result[0].reason);
    }
    if (result[1].status === "fulfilled") {
        const post = await result[1].value.json()
        console.log("Post:", post);
    }
    else{
        console.log("Post Error:", result[1].reason);
    }
    if (result[2].status === "fulfilled") {
        const comment = await result[2].value.json()
        console.log("Comment:", comment);
    }
    else{
        console.log("Comment Error:", result[2].reason);
    }
}

test()