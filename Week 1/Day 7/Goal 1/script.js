import {sum} from "./math.js"

const name = "Faizan"

let age = 19

age = 20

const sumV = (a,b) => a+b

let obj = {
    objname: "Ahmed",
    objage: 22,
    address: {
        city: "Rawalpindi"
    }
}

let {objname,objage,address} = obj

console.log(objname)
console.log(objage)
console.log(address)

let data = {
    ...obj,
    objage: 23
}

console.log(data)


function Info(...values){
    return values
}

let product = {}

console.log(product?.name?.price)

let userName = "Ali"
console.log(userName ?? "Guest")

async function getData() {
    return "Done"
}

let res = await getData()

console.log(res)

console.log(sum(1,2))



