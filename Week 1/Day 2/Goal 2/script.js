// function take(...values){
//     console.log(values)
// }

// const obj = {
//     name: "Faizan Yasin",
//     age: 19,
//     city: "Rawalpindi"
// }

// take(obj)

function take(){
    console.log(arguments)
}

const obj = {
    name: "Faizan Yasin",
    age: 19,
    city: "Rawalpindi"
}

take(obj)


// Rest parameters collect all values into a real array.
// arguments is an old array-like object and does not support array methods directly.
