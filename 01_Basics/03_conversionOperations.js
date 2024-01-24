let score = "3abc";

console.log(typeof score);
console.log(typeof(score));

// But if we want to do operation on number

let valueInNumber = Number(score);
console.log(typeof valueInNumber); // number but input is not a number

console.log(valueInNumber); // NaN(Not a Number)

console.log();

score = null;

console.log(typeof score);
console.log(typeof(score));

// But if we want to do operation on number

valueInNumber = Number(score);
console.log(typeof valueInNumber); // number 

console.log(valueInNumber); // 0

console.log();

score = undefined;

console.log(typeof score);
console.log(typeof(score));

// But if we want to do operation on number

valueInNumber = Number(score);
console.log(typeof valueInNumber); // number 

console.log(valueInNumber); // NaN(Not a Number)

console.log();

score = true;

console.log(typeof score);
console.log(typeof(score));

// But if we want to do operation on number

valueInNumber = Number(score);
console.log(typeof valueInNumber); // number 

console.log(valueInNumber); // 1
console.log();

/* 
Summary of above conversion
- "33" => 33 // Easily converted in number
- "3abc" => NaN // Converted to NaN
- null => 0 // Converted to 0
- undefined => NaN // Converted to NaN
- false => 0 // Converted to 0 value
- true => 1 // Converted to 1 value
*/

// Conversion from Number to Boolean

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);
console.log();

isLoggedIn = 0;

booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);
console.log();

isLoggedIn = "";

booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn); //false
console.log();

isLoggedIn = "any text";

booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);
console.log();

// By investigating, we got:
// - 1 => true
// - 0 => false
// - "" => false
// - "any text" => true


// Conversion from Number to String

let someNumber = 56;

let stringSomeNumber = String(someNumber);
console.log(typeof stringSomeNumber);
console.log(stringSomeNumber);
console.log();

// Note regarding typeof null
console.log(typeof(null) == 'object') //true
// Reason is null is often used to signify an empty reference to an object.
console.log();


// **************** Operations ****************

let val = 3;
let negVal = -val;

console.log(val);
console.log(negVal);
console.log();

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(3**3); // => 3 raised to the power 3 
// console.log(4/3);
// console.log(2%3);

let str1 = "Sandeep";
let str2 = " Wadhawan";
// console.log(str1+str2);

// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2); //122
// console.log(1 + "2" + 2); //122
// console.log(1 + 2 + "2"); //32

// console.log((3+4) * 5%3); //2

console.log(true); //true
console.log(+true); //1
// console.log(true+); //Error

console.log();

console.log(false); //false
console.log(+false); //0
// console.log(false+); //Error
console.log();

console.log(+""); //0 but this trick of conversion with '+' operator is not preferred in development
console.log();

// Prefix and Postfix operator

let value = 40;
console.log(value); //40
console.log(++value); //41
console.log(value++); //41
console.log();

// Note : 
/*
- If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

- If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.
*/

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"