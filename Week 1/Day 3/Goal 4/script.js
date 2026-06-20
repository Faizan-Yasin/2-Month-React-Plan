const products = [
    {
        id: 1,
        amount: 100,
        status: "paid"
    },
    {
        id: 2,
        amount: 300,
        status: "unpaid"
    },
    {
        id: 3,
        amount: 200,
        status: "paid"
    }
]

const result = products.filter(item => item.status === "paid").map(item => item.amount * 2).reduce((sum,item)=> sum+item)

console.log(result);
