import { orders } from "./analytics.js"

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

export {getCompletedRevenue}
export {getCategorySummary}
export {updateOrderStatus}
export {canProcessBatch}
export {getTopProducts}