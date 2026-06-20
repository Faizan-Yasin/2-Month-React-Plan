// const arr = [1, 2, 3, 4, 5, 6 ,7 ,8, 9]

// const value = arr.find(item => item == 4)

// const index = arr.indexOf(4)

// console.log(index)

// console.log(value);


const arr = [
    {
        id: 1,
        name: "Faizan Yasin"
    },
    {
        id: 2,
        name: "Ali"
    }
]

const index = arr.findIndex(item => item.id == 2)

const updated = arr.map((item, i) => {
    return i === index ? {...item,name:"Ahmed"} : item
})

console.log("Original : " , arr)
console.log("Updated : " , updated);

