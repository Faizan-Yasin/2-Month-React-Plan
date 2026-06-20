// const obj = {
//     name: "Faizan Yasin",
//     age: 22,
//     city: "Rawalpindi"
// };

// const newObj = {
//     ...obj
// }

// console.log(newObj);

// const obj = {
//     name: "Faizan Yasin",
//     age: 22,
//     city: "Rawalpindi"
// };

// const newObj = {
//     ...obj,
//     age: 19
// }

// console.log(newObj);

const obj = {
    name: "Faizan Yasin",
    age: 22,
    address: {
        city: "Rawalpindi"
    }
};

const newObj = {
    ...obj
}

console.log(newObj);

newObj.address.city = "Islamabad"

console.log(obj)

// Spread creates a shallow copy and can override fields in one expression.
// It does not deeply clone nested objects because nested objects are copied by reference.