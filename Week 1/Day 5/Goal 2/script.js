function count(){
    let count = 0

    return function increment(){
        count++
        console.log(count)
    }
}

let countIncrement1 = count()
let countIncrement2 = count()

countIncrement1()
countIncrement1()
countIncrement1()

countIncrement2()
countIncrement2()
