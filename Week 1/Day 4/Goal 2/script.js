async function getUser(params) {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1")

        if(response.status >= 400){
            throw new Error(`HTTP : ${response.status}`)
        }

        const data = await response.json()

        console.log(data)
    }
    catch(error){
        if(error.name === "TypeError"){
            console.log("Network Error");
        }
        else{
            console.log(error.message)
        }
    }
}

getUser()