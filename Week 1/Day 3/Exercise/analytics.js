const orders = [
    {
        id: 1,
        product: "Iphone",
        category: "electronics",
        price: 100000,
        qty: 2,
        status: "pending",
        userId: 101
    },
    {
        id: 2,
        product: "Shirt",
        category: "clothing",
        price: 500,
        qty: 3,
        status: "completed",
        userId: 102
    },
    {
        id: 3,
        product: "Burger",
        category: "food",
        price: 300,
        qty: 5,
        status: "refunded",
        userId: 103
    },
    {
        id: 4,
        product: "Laptop",
        category: "electronics",
        price: 120000,
        qty: 1,
        status: "completed",
        userId: 104
    },
    {
        id: 5,
        product: "Jeans",
        category: "clothing",
        price: 2000,
        qty: 2,
        status: "completed",
        userId: 105
    },
    {
        id: 6,
        product: "Pizza",
        category: "food",
        price: 1500,
        qty: 1,
        status: "pending",
        userId: 106
    },
    {
        id: 7,
        product: "Headphones",
        category: "electronics",
        price: 8000,
        qty: 1,
        status: "completed",
        userId: 107
    },
    {
        id: 8,
        product: "Shoes",
        category: "clothing",
        price: 4000,
        qty: 1,
        status: "refunded",
        userId: 108
    },
    {
        id: 9,
        product: "Sandwich",
        category: "food",
        price: 250,
        qty: 2,
        status: "completed",
        userId: 109
    },
    {
        id: 10,
        product: "Tablet",
        category: "electronics",
        price: 60000,
        qty: 1,
        status: "pending",
        userId: 110
    },
    {
        id: 11,
        product: "Jacket",
        category: "clothing",
        price: 5000,
        qty: 1,
        status: "completed",
        userId: 111
    },
    {
        id: 12,
        product: "Pasta",
        category: "food",
        price: 1200,
        qty: 2,
        status: "completed",
        userId: 112
    },
    {
        id: 13,
        product: "Monitor",
        category: "electronics",
        price: 30000,
        qty: 1,
        status: "completed",
        userId: 113
    },
    {
        id: 14,
        product: "Cap",
        category: "clothing",
        price: 800,
        qty: 4,
        status: "pending",
        userId: 114
    },
    {
        id: 15,
        product: "Fries",
        category: "food",
        price: 200,
        qty: 3,
        status: "completed",
        userId: 115
    },
    {
        id: 16,
        product: "Keyboard",
        category: "electronics",
        price: 5000,
        qty: 2,
        status: "completed",
        userId: 116
    }
]


function getCompletedRevenue(orders) {
    return orders.filter(item => item.status === "completed").map((item) => ({
        product: item.product,
        revenue: item.price * item.qty
    }))
}

function getCategorySummary(orders) {

    return orders.reduce((acc, item) => {
        const category = item.category

        if (!acc[category]) {
            acc[category] = {
                totalRevenue: 0,
                orderCount: 0
            }
        }
        acc[category].totalRevenue += item.price * item.qty
        acc[category].orderCount += 1

        return acc
    }, {})
}

function updateOrderStatus(orders, id, newStatus) {
    return orders.map((item) => {
        if (item.id === id) {
            return {
                ...item,
                status: newStatus
            }
        }
        return item
    })
}

function canProcessBatch(orders) {
    return (orders.every(item => item.qty !== 0) && orders.some(item => item.status === "pending"))
}

function getTopProducts(orders, n) {
    return Object.entries(orders.filter(item => item.status === "completed")
        .reduce((acc, item) => {
            acc[item.product] = (acc[item.product] || 0) + (item.price * item.qty)
            return acc
        },{}))
        .map(([product, revenue]) => ({
            product,
            revenue
        }))
        .sort((a, b) => b.revenue - a.revenue)
        .slice(0,n)

}

console.log(getCompletedRevenue(orders))
console.log(getCompletedRevenue(updateOrderStatus(orders, 1, "completed")))

console.log(getCategorySummary(orders))
console.log(getCategorySummary(updateOrderStatus(orders, 2, "pending")))

console.log(updateOrderStatus(orders, 13, "pending"))
console.log(updateOrderStatus(orders, 1, "completed"))

console.log(canProcessBatch(orders))
console.log(canProcessBatch([{ qty: 0, status: "pending" }]))

console.log(getTopProducts(orders, 3))
console.log(getTopProducts(orders, 5))