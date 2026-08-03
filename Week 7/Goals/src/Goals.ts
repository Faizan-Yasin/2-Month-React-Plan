let name: string = "Faizan";
console.log(name.toUpperCase());

let age: number = 19;
console.log(age);

let inOnline: boolean = true;
console.log(inOnline);

let nullValue: null = null;
console.log(nullValue);

let undefinedValue: undefined = undefined;
console.log(undefinedValue);

let value: bigint = 9007199254740991n;
console.log(value);

let response: unknown = "This is an unknown type";
if (typeof response === "string") {
    console.log(response.toUpperCase());
} else {
    console.log("Response is not a string");
}

let values: (string | number | boolean)[] = ["Faizan", 19, "Ali", true];
console.log(values);

let tuple: [string, number, boolean] = ["Faizan", 19, true];
console.log(tuple);

type User = {
    name: string;
    age: number;
}

let user: User = {
    name: "Faizan",
    age: 19
};
console.log(user);

type AddFunction = (a: number, b: number) => number;
let add: AddFunction = (a, b) => a + b;
console.log(add(5, 10));


interface Movie {
    title: string;
    rating: number;
    description?: string;
}

let movie: Movie = {
    title: "Inception",
    rating: 8.8,
}

console.log(movie);

let link: string | null = null;
link = "https://www.example.com";
console.log(link);

// enum Direction {
//     Up,
//     Down=10,
//     Left,
//     Right
// }


enum Direction {
    Up=20,
    Down=10,
    Left=30,
    Right=40
}

let direction: Direction = 10;

console.log(direction);

console.log(Direction.Up);
console.log(Direction.Down);
console.log(Direction.Left);
console.log(Direction.Right);


enum Theme {
    light = "light",
    dark = "dark"
}

console.log(Theme.light);
console.log(Theme.dark);

function myValue<T>(value: T): T {
    return value;
}