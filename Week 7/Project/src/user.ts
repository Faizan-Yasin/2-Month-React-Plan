interface User {
    id: number;
    name: string;
    age: number;
}

const users: User[] = [
    {
        id: 1,
        name: "Faizan",
        age: 19,
    },
    {
        id: 2,
        name: "Ali",
        age: 21,
    },
    {
        id: 3,
        name: "Ahemd",
        age: 23,
    },
];

const findUser = function (id: number): User | undefined {
    return users.find((user) => user.id === id);
}

const user = findUser(2);

console.log(user?.name); // Output: Ali
if (user) {
    console.log(user.age); // Output: 21
}
