const score = 800; //type is Number
console.log(score); //800
console.log(typeof score); //number

const balance = new Number(500);
console.log(balance); //[Number: 500]
console.log(typeof balance); //object

console.log(balance.toString()); //500
console.log(balance.toString().length); //output:3 (Cascading of calls as length is the property of string)
console.log(typeof balance.toString()); //string
console.log();

// Some more methods

// const value = new Number(300.98);
// console.log(value.toFixed(1)); //301.0 (It gives those many digits specified in toFixed() method after decimal)

const otherValue = 123.8966;
console.log(otherValue.toPrecision(3)); //124 (It gives total values specified in toPrecision() method)


// Method of Number which makes representation of zeros very easy

const zeros = 200000000;
console.log(zeros); // Difficult to see how many zeros are there 
console.log(zeros.toLocaleString()); //It separates zeros by comma according to Us standards
console.log(zeros.toLocaleString('en-IN')); // It separates zeros according to Indian Standards.
console.log();

console.log(Number.MIN_VALUE); // MIN_VALUE is not a function
console.log(Number.MAX_VALUE); // MAX_VALUE is not a function
console.log(Number.MIN_SAFE_INTEGER); //-9007199254740991 
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991 (We can store max itni value)
console.log();

// ************************** Maths **************************
// Math is an object in JavaScript which allows us to perform mathematical tasks on numbers.
console.log(typeof Math);
// console.log(Math); // By executing it in console, we can get methods of Math

// Some important methods
// console.log(Math.abs(-20)); //20 (It is an absolute function in maths)
// console.log(Math.ceil(5.66)); //6
// console.log(Math.floor(5.66)); //5
// console.log(Math.round(3.2)); //3
// console.log(Math.round(3.6)); //4
// console.log(Math.min(34, 65 ,12, 78, 67)); //12
// console.log(Math.max(34, 65 ,12, 78, 67)); //78

console.log(Math.random()); // It Returns a pseudorandom number between 0(inclusive) and 1(exclusive).

// But if we want to take values between 1 to 9
console.log(Math.floor(Math.random()*10) + 1); // +1 done because we don't want to include 0.

const min = 50;
const max = 70;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); //Any range formula
console.log();