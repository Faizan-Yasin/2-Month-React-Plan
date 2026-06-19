function add(strings, ...values) {
    let result = '';
    values.forEach((value, index) => {
        result += strings[index] + String(value).toUpperCase();
    });
    return result;
}

const name = 'faizan yasin';

let result = add`My name is ${name}`;
console.log(result); // Output: My name is FAIZAN YASIN
