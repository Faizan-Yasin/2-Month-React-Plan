const arr = [1, 2, 3, 4, 5, 6 ,7 ,8, 9]

const result = arr.filter((item) =>{
    return item % 2 == 0
}).map((item) => {
    return item * 2
}).reduce((sum,item) => {
    return item + sum
}, 0)

console.log(result);
