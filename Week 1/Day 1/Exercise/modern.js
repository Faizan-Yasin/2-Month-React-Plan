//Using const for name because it is not changed in this code. 
const Myname = "Faizan"

//Using let for age because it is changed in this code.
let Myage = 20

//Using const for city because it is not changed in this code. 
const Mycity = "Islamabad"

//Using const for profession because it is not changed in this code. 
const Myprofession = "Web Developer"

// changing the value of age to 19
Myage = 19

//Using const for arr because it is not changed in this code. 
const arr = [1, 2, 3, 4, 5]

const arrResult = arr.map((item) => item * 2)

console.log(`Multiplied array by 2: ${arrResult}`)

//Using const for arr2 because it is not changed in this code. 
const arr2 = [1, 2, 3, 4, 5]

const arr2Result = arr2.filter((item) => item % 2 === 0)

console.log(`Even numbers: ${arr2Result}`)

//Using const for arr3 because it is not changed in this code. 
const arr3 = ["Faizan", 20, "Islamabad", "Web Developer"]

const arr3Result = arr3.map((item) => item)

console.log(`Array with all items: ${arr3Result}`)

const studentObj = {
    name: "Faizan",
    age: 20,
    city: "Islamabad",
    profession: "Web Developer"
}

//Using const for studentResult because it is not changed in this context. 

const {name,age,city,profession} = studentObj

const studentResult = `
Student Name : ${name} 
Age : ${age} 
City : ${city} 
Profession : ${profession}`

console.log(studentResult)

// SUMMARY:
// Lines saved: reduced repetitive function syntax and removed var declarations.
// ES6 features used: const/let, arrow functions, template literals, destructuring.
// Surprising thing: arrow functions made the code much shorter and cleaner while keeping same output.
