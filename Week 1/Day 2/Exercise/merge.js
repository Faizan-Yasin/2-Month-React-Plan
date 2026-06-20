const baseProfile = {
    name: "Faizan Yasin",
    age: 21,
    email: null,
    address: {
        city: "Rawalpindi",
        country: "Pakistan"
    },
    preferences: {
        theme: "dark",
        language: undefined
    }
}

function mergeUserProfile(base, overrides) {
    let result = {
        ...base
    }

    for (const key in overrides) {
        if (overrides[key] !== null && overrides[key] !== undefined) {
            if (typeof (overrides[key]) === "object" && !Array.isArray(overrides[key]) && typeof(base[key]) === "object" && base[key] !== null) {
                result[key] = {
                    ...base[key],
                    ...overrides[key]
                }
            }
            else{
                result[key] = overrides[key]
            }
        }
    }

    return result

}

const updatedProfile = mergeUserProfile(baseProfile, { age: 19, email: "faizan@gamil.com", preferences: { theme: "light" }, phone: null })
console.log(updatedProfile)

function getCity(profile){
    return profile?.address?.city ?? "Unknown"
}

const city = getCity(updatedProfile)

console.log(city)

const user = {
    name: "Faizan",
    address:{
        city:""
    }
}

console.log(getCity(user));

console.log(user.address?.city || "Unknown")


function mergeAll(...profiles){
    let result = {}
    for (const profile of profiles) { 
        result = mergeUserProfile(result,profile)
    }
    return result
}


const profile1 = {
    name: "Faizan",
    age: 20
}

const profile2 = {
    age: 19,
    email: "faizan@gmail.com"
}

const profile3 = {
    preferences: {
        theme: "light"
    }
}

console.log(mergeAll(profile1,profile2,profile3))


const test1 = mergeUserProfile(baseProfile,{age:30})

const test2 = mergeUserProfile(baseProfile,{age:25,email:null})

const test3 = mergeUserProfile(baseProfile, {preferences:{theme: "dark"}})

console.log("Test 1:", test1)

console.log("Test 2:", test2)

console.log("Test 3:", test3)

console.log("Original:", baseProfile)


export {mergeUserProfile,mergeAll}