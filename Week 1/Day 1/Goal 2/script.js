//Function Declaration
function print(name){
    console.log(name);
}

//Function Declaration with Arrow Function
const print1 = (name) => {
    console.log(name);
}

//Function Expression
const print2 = function(name){
    console.log(name);
}

//Function Expression with Arrow Function
const print3 = (name) => {
    console.log(name);
}

//Array Callback Function
const info = ["Faizan", 19, "Web Development"];
info.map(function(item){
    console.log(item);
});

//Array Callback Function with Arrow Function
info.map((item) => {
    console.log(item);
});

