const cache = new Map()

async function fetchJSON(url, signal) {

    if(cache.has(url)){
        console.log("CACHE HIT")
        return cache.get(url)
    }

    console.log("CACHE MISS")

    try {
        const response = await fetch(url, { signal })
        if (response.ok) {

            const data = await response.json()

            cache.set(url,data)

            return data
            
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

export {fetchJSON}