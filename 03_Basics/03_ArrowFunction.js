// Arrow function came in ES6 (2015)

const user = {
    username : "Sandeep",
    cost : 99,

    // When user login there is this function welcomeMessage()
    welcomeMessage : function() {
        // When we refer to current context i.e., which is enclosed in curly braces of object, we use 'this' keyword
        console.log(`${this.username}, Welcome to website`);
        console.log(this); //Ye this keyword hamesha current context ki baat karta hai mtlb current value jo hoti hai uski baat karta ha
    }
}

// user.welcomeMessage(); //Sandeep, Welcome to website

// Now, we change the current context
user.username = "Devil";
// user.welcomeMessage(); //Devil, Welcome to website
// console.log(this); //{}
/* When we run JS in node environment, then this refers to empty object kyonki global ke andhar koi context present hi nhi hai.
But when we run JS in browser console, then this refers to window object which is global object in browser. This is asked most of the times in interview.
*/
// console.log(typeof this); //object

/* Now we print 'this' inside function in node environment */
// function meriChai() {
//     let username = "Candy";
//     // console.log(this);
//     console.log(this.username); //undefined
//     /* We cannot access current context using 'this' inside function, it is done in object */
// }

// meriChai();

// const meriChai = function() {
//     let username = "Candy";
//     console.log(this.username); //undefined
//     console.log(this);
// }

// Arrow function
// Syntax : () => {}

const meriChai = () => {
    let username = "Candy";
    console.log(this.username); //undefined
    console.log(this); //{} => Empty Object
}
// meriChai();

// Core Discussion about Arrow Function

/* Basic Arrow Function => Explicit return which means we have to write return statement explicitly when curly braces are used in functions */
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

/* Implicit return => Implicitly returns the addition of two nos.
No need to use return statement */
// const addTwo = (num1, num2) => num1 + num2; // Method1 which is without using parenthesis

// const addTwo = (num1, num2) => (num1 + num2);

// How to return object using arrow function?
const returnObject = () => ({username : "Sammy"})
console.log(returnObject()); //{ username: 'Sammy' }