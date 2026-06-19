var name = "Faizan"
var age = 20
var city = "Islamabad"
var profession = "Web Developer"

var arr = [1, 2, 3, 4, 5]

var arrResult = arr.map(function(item) {
    return item * 2
})

console.log("Multiplied array by 2:" + " " + arrResult)

var arr2 = [1, 2, 3, 4, 5]

var arr2Result = arr2.filter(function(item) {
    return item % 2 === 0
})

console.log("Even numbers:" + " " + arr2Result)

var arr3 = ["Faizan", 20, "Islamabad", "Web Developer"]

var arr3Result = arr3.map(function(item) {
    return item
})

console.log("Array with all items:" + " " + arr3Result)

var studentObj = {
    name: "Faizan",
    age: 20,
    city: "Islamabad",
    profession: "Web Developer"
}

console.log("Student Name : " + studentObj.name + " " + "Age : " + studentObj.age + " " + "City : " + studentObj.city + " " + "Profession : " + studentObj.profession)