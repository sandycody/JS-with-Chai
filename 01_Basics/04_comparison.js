// console.log(2 > 1); //true
// console.log(2 >= 1); //true
// console.log(2 < 1); //false
// console.log(2 == 1); //false
// console.log(2 != 1); //true

// Problem comes when we not compare same data types

console.log("2" > 1); //2 gets converted to number automatically
console.log("02" > 1); //02 gets converted to number automatically

// Ensure that data types of two numbers must be same when compared as this type of comparison does not give predictable results
console.log();


console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
console.log(null < 0); //false
console.log(null == undefined); //false
console.log();

/*
Here equality check == and comparisons work differently(> < >= <=)
Comparison converts null to a number, treating it as 0. That is why
null < 0 => false, null >= true, null > 0 => false.

On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don't equal anything else. That's why null == 0 is false and null == undefined is true.

This is the inconsistency in the language. But we have to bear with this only and proceed.
*/ 

console.log(undefined > 0); //false
console.log(undefined == 0); //false
console.log(undefined >= 0); //false
console.log(undefined < 0); //false
console.log(undefined == null); //true
console.log();

// Strict Check (===)
// It checks the equality between values as well as their data types

console.log("2" === 2); //false
console.log(2 === 2); //true
console.log(3 === 2); //false