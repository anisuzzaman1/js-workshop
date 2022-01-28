function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}

// Function Expression
const add2 = function add2(num1, num2) {
    return num1 + num2;
}

// Function Expression - Annynemous
const add3 = function (num1, num2) {
    return num1 + num2;
}

// Arrow Function
const add4 = (num1, num2) => num1 + num2;

console.log(add4(13, 33));