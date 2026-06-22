import { runfetchJSON } from "./api/api.js";
import { runGetUserWithPosts } from "./api/api.js";
import { runGetDashboardData } from "./api/api.js";
import { runCheckSpeed } from "./api/api.js";

import { getCompletedRevenue } from "./utils/arrayHelpers.js"
import { getCategorySummary } from "./utils/arrayHelpers.js"
import { updateOrderStatus } from "./utils/arrayHelpers.js"
import { canProcessBatch } from "./utils/arrayHelpers.js"
import { getTopProducts } from "./utils/arrayHelpers.js"

import { orders } from "./utils/analytics.js";

import createCache from "./api/cache.js";

// await runfetchJSON()
// await runfetchJSON()
// await runfetchJSON()
// await runfetchJSON()
// runGetUserWithPosts(1)
// runGetDashboardData(1)
// runCheckSpeed(1)

// console.log(getCompletedRevenue(orders))
// console.log(getCompletedRevenue(updateOrderStatus(orders, 1, "completed")))

// console.log(getCategorySummary(orders))
// console.log(getCategorySummary(updateOrderStatus(orders, 2, "pending")))

// console.log(updateOrderStatus(orders, 13, "pending"))
// console.log(updateOrderStatus(orders, 1, "completed"))

// console.log(canProcessBatch(orders))
// console.log(canProcessBatch([{ qty: 0, status: "pending" }]))

// console.log(getTopProducts(orders, 3))
// console.log(getTopProducts(orders, 5))

// async function loadAnalytics() {
//     console.log("Before Lazy Loading....")
//     const analytics = await import("./utils/arrayHelpers.js")
//     console.log("After Lazy Loading....")

//     console.log(analytics.getCompletedRevenue(orders))
// }

// loadAnalytics()

const cache = createCache()
cache.set("user1",{name:"Faizan"})
console.log(cache.get("user1"))

cache.clear()

const cache2 = createCache()
cache2.set("user2",{name:"Ali"})
console.log(cache2.get("user2"))

cache.clear()


/************************************************************
 MODULE ARCHITECTURE (Week 1 Day 5)

 index.js (ENTRY POINT)
    │
    ├── api/
    │     ├── fetchJSON.js   → API wrapper + caching
    │     ├── cache.js       → factory cache (closure Map)
    │     └── userService.js → business logic (user/dashboard)
    │
    ├── utils/
    │     ├── arrayHelpers.js → array operations (pure functions)
    │     └── stringHelpers.js → string utilities
    │
    └── Lazy Loading:
          import('./utils/arrayHelpers.js')
************************************************************/
