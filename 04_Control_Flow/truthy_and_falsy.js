/* - Truthy values are values that evaluate to True in a boolean context. 

- Falsy values are values that evaluate to False in a boolean context. 

falsy values : false, 0, -0, "", '', 0n (BigInt), null, undefined, NaN.
Except all these falsy values all values are truthy values.

Some truthy values which surprises us: "0", 'false', " " (Space inside string is also a truthy value), [], {}, function(){}
*/

const userEmail1 = "h@hitesh.ai"; //truthy value

// if (userEmail1) {
//     console.log(`Got user email`);
// } else {
//     console.log(`Don't have user email`);
// }

const userEmail2 = ""; //falsy value

// if (userEmail2) {
//     console.log(`Got user email`);
// } else {
//     console.log(`Don't have user email`);
// }

const userEmail3 = []; //truthy value

// if (userEmail3) {
//     console.log(`Got user email`);
// } else {
//     console.log(`Don't have user email`);
// }
const userEmail4 = -0; //falsy value

// if (userEmail4) {
//     console.log(`Got user email`);
// } else {
//     console.log(`Don't have user email`);
// }

const userEmail5 = "0"; //truthy value

// if (userEmail5) {
//     console.log(`Got user email`);
// } else {
//     console.log(`Don't have user email`);
// }

const userEmail6 = () => {
   console.log("Function is also considered as truthy value"); 
}; //truthy value

// if (userEmail6) {
//     console.log(`Got user email`);
// } else {
//     console.log(`Don't have user email`);
// }

/* To check if array is empty or not */

// if (userEmail3.length === 0) {
//     console.log(`Array is empty`);
// }

/* If object comes as empty in JS */

const emptyObj = {}; //truthy value

// if (Object.keys(emptyObj).length === 0) {
//     console.log(`Object is empty`);
// }


// Nullish Coalescing Operator (??)
/* It works mostly on two primitive types: 'null' and 'undefined'.

Definition : The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

Usage : It is a kind of fallback jisme agar koi error based situation hamare code ko aage jaake effect karegi toh usko bhut ache se handle karta hai.
*/

/* NOTE: Unlike var or let, you must specify a value for a const declaration. This throws
SyntaxError i.e.

const COLUMNS;
// SyntaxError: missing = in const declaration
*/

// const val1; //SyntaxError
// val1 = 23 ?? 45;
// console.log(val1);

let val1;
val1 = 4 ?? 10;
// console.log(val1); //4

val1 = null ?? 120;
// console.log(val1); //120

val1 = 32 ?? null;
// console.log(val1); //32

val1 = 57 ?? undefined;
// console.log(val1); //57

val1 = undefined ?? 240;
// console.log(val1); //240

val1 = undefined ?? null;
// console.log(val1); //null

val1 = null ?? undefined;
// console.log(val1); //undefined

val1 = null ?? 25 ?? 60;
// console.log(val1); //25

val1 = null ?? 8 ?? undefined;
// console.log(val1); //8

val1 = undefined ?? 80 ?? null;
// console.log(val1); //80

// Ternary Operator (?)
// Syntax => condition ? true : false

const iceTeaPrice = 150;
iceTeaPrice <= 80 ? console.log(`Price is less than 80`) : console.log(`Price is greater than 80`);