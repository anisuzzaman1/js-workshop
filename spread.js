const array = [45, 24, 56, 23, 12];

// console.log(array);
// [ 45, 24, 56, 23, 12 ]
// console.log(...array);
// 45 24 56 23 12

array.push(89);
const maxInArray = Math.max(...array);
console.log(array, maxInArray);

const array2 = [...array, 90]; // ... value of a Arrary 
const maxInArray2 = Math.max(...array2);
console.log(array2, maxInArray2);


