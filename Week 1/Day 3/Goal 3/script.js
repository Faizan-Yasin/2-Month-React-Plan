// const password = "Faizan123"

// if (!password.split("").some(item => !isNaN(item))) {
//     console.log("Error: password must contain at least one number");
// }

const fields = ["Faizan", 19, ""]

if (!fields.every(item => item !== "")){
    console.log("Error: Fill all fields");
}