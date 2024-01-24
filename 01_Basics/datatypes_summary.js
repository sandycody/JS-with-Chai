/* Jitne bhi data types hain usko 2 parts mein divide kia gya hai on the basis of ki ye data memory mein kis tarah se store hote hain and hum isko kase access kar skte ha*/

//  - Primitive Data Types (Inbuilt or predefined data types): 
//        1. String //Changes hamesha iski created copy mein hota hain actual data mein nhi that is why it is called Call by Value
//        2. Number
//        3. Boolean
//        4. Symbol
//        5. BigInt
//        6. undefined
//        7. null

// Usage
const score = 23; // Number
const scoreValue = 23.54 //Number be it decimal value it is also a number
const bigNumber = 5647645604560328964592n;
console.log(score); //23
console.log(scoreValue); //23.54
console.log(bigNumber); //5647645604560328964592n
console.log();

const isLoggedIn = false; //Boolean
const outsideTemp = null; //Null
console.log(isLoggedIn); //false
console.log(outsideTemp); //null
console.log();

// How to declare Symbol in JS(It is basically used for uniqueness?
const id = Symbol('434');
const anotherId = Symbol('434');
console.log(id === anotherId); //false
console.log();


// - Non-Primitive Data Types (Reference type): 
//       1. Object
//       2. Array
//       3. Functions

/* Is JS a dynamically typed or statically typed language? */
/*
Solution => JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.
*/

// Usage of reference types
const myArray = ["Sandeep", "Kartik", "Karan Aujla", "Vaibhav"];
console.log(myArray); //[ 'Sandeep', 'Kartik', 'Karan Aujla', 'Vaibhav' ]

const myObj = {
    Name : "Sandeep",
    Email : "peednascooldude@gmail.com",
    Age : 22
}
console.log(myObj); //{ Name: 'Sandeep', Email: 'peednascooldude@gmail.com', Age: 22 }

const myFunction = function() {
    console.log("This is my function.");
}
myFunction(); //This is my function.
console.log();


// To know the type of data-type
console.log(typeof bigNumber); //bigint
console.log(typeof score); //number
console.log(typeof scoreValue); //number
console.log(typeof outsideTemp); //object
console.log(typeof myArray); //object
console.log(typeof myObj); //object
console.log(typeof myFunction); //object function

// These non-primitive types always have return type i.e. object.
// Note: Function is also a reference type and its return type is always a function but hum isko object function bolte hain.


// Refer to this link for more information regarding datatypes:

// https://262.ecma-international.org/5.1/#sec-11.4.3