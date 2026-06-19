// const payload = {
//     user: {
//         name: 'Faizan',
//         role: 'admin'
//     }
// };

// const { user: { name = 'Guest', role = 'viewer' } = {} } = payload;

// console.log("Name:", name); // Output: Name: Faizan
// console.log("Role:", role); // Output: Role: admin

// const payload = {
//     user: {
        
//     }
// };

// const { user: { name = 'Guest', role = 'viewer' } = {} } = payload;

// console.log("Name:", name); // Output: Name: Guest
// console.log("Role:", role); // Output: Role: viewer

// const payload = {

// };

// const { user: { name = 'Guest', role = 'viewer' } = {} } = payload;

// console.log("Name:", name); // Output: Name: Guest
// console.log("Role:", role); // Output: Role: viewer

const payload = {

};

const { user: { name = 'Guest', role = 'viewer' } } = payload;

console.log("Name:", name); // Output: Name: Guest
console.log("Role:", role); // Output: Role: viewer