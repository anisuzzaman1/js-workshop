// 1. Declare Cost for fix value, LET for variable value
const hubby = "Omar Sani";
let phone = "iphone 15";
phone = "Samsung Galaxy S19";

// 2. Default Param
// Spred Operator (...arrary) 
function maxNumber(array = []) {
    const max = Math.max(...array);
    return max;
}

const biggest = maxNumber([1, 96, 23, 32, 89, 12, 45]);
console.log(biggest);

// 3. Template String
const myNote = `I am Manju of ${hubby} and I use ${phone}.`;
console.log(myNote);

// 4. Arrow Function
const sqr = x => x * x;
console.log(sqr(8));