// Arrow Function
const add = (a1, a2) => a1 + a2;
// console.log(add(34, 23));

const getName = () => 'Anisuzzaman Md'
const names = getName();
console.log(names);


// Multiline arrow function
const doMath = (a1, a2) => {
    const add = a1 + a2;
    const div = a1 - a2;
    const calc = add + div;
    const result = calc * 5;
    return result;
}

const total = doMath(5, 78);
console.log(total);