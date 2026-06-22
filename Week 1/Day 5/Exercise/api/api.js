import { fetchJSON } from "./fetchJSON.js";
import { getUserWithPosts } from "./userService.js";
import { getDashboardData } from "./userService.js";

export async function runfetchJSON() {
    try {
        const controller = new AbortController();
        const promise = fetchJSON("https://jsonplaceholder.typicode.com/users/1", controller.signal)

        // controller.abort()

        const result = await promise
        console.log(result)
    }
    catch (error) {
        if (error.message.includes("HTTP")) {
            console.log("Bad Status Error : ", error.message);
        }
        else if (error.message.includes("Network Error")) {
            console.log("Network Error : ", error.message);
        }
        else if (error.message.includes("Request Cancel")) {
            console.log("Request Cancel : ", error.message);
        }
        else {
            console.log("Unknown Error : ", error.message);
        }
    }
}


export async function runGetUserWithPosts(p) {
    try {
        const result = await getUserWithPosts(p)
        console.log(result)
    }
    catch (error) {
        console.log(error.message)
    }
}

export async function runGetDashboardData(p) {
    try {
        const result = await getDashboardData(p)
        console.log(result)
    }
    catch (error) {
        console.log(error.message);
    }
}

export async function runCheckSpeed(p) {
    console.log("Sequential Start")

    await getUserWithPosts(p)

    console.log("Parallel Start")

    await getDashboardData(p)
}

// Sequential Start

// Sequential: 305.85302734375 ms

// Parallel Start

// parallel: 301.2021484375 ms