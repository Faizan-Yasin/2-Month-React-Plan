// split code into files

import { sum } from "./math.js"

// variable cannot be reassigned
const name = "Faizan"

let age = 19

age = 20

// short function syntax
const sumV = (a, b) => a + b

let obj = {
    objname: "Ahmed",
    objage: 22,
    address: {
        city: "Rawalpindi"
    }
}

// copy or merge values

let { objname, objage, address } = obj

console.log(objname)
console.log(objage)
console.log(address)

let data = {
    ...obj,
    objage: 23
}

console.log(data)


function Info(...values) {
    return values
}

let product = {}

// safely access nested values

console.log(product?.name?.price)

let userName = "Ali"

// fallback only for null/undefined

console.log(userName ?? "Guest")

async function getData() {
    return "Done"
}

let res = await getData()

console.log(res)

console.log(sum(1, 2))

// function process(data) {
//     if (data != null) {
//         let result = [];
//         for (let i = 0; i < data.length; i++) {
//             if (data[i] > 10) {
//                 result.push(data[i] * 2);
//             }
//         }
//         return result;
//     }
// }

function getDoubledNumbersAboveTen(numbers) {
    if (!Array.isArray(numbers)) return [];

    return numbers
        .filter(num => num > 10)
        .map(num => num * 2);
}



