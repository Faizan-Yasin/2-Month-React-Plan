//named exports

function add(a,b){
    return a+b
}

export {add}

// default export

function sub(a,b) {
    return a>b ? a-b : b-a
}

export default sub


