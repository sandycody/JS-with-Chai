var c = 3000; // Out of block scope, the term used is global scope

let a = 45;
if (true) {  // '{}' is known as block scope
    let a = 60;
    const b = 80;
    var c = 30; 
    c = 30; //if we declare var or not declare it, then also the problem will be same
    console.log(`Inner value of 'a' : ${a}`); //60
}

// console.log(a); 
console.log(`Outer value of 'a' : ${a}`); //45
// console.log(b); 
console.log(c); //30 (Some programmer has given value of c is 3000 but he gets 30 as the output due to usage of var c = 30 in if-else by some other programmer, then there will be a lot of problem at bigger level)
console.log();

/* Note : Scoping is different in VS code when we execute JS file using 'node' and scoping is different in browser using console */


// Nested Scoping or Scope level

function one() {
    const username = "Sandeep";
    function two() { // inside function can access variables declared in outside function
        const website = "youtube";
        console.log(username);
    }
    // console.log(website); // outside function cannot access variables declared in inside function
    two();
}
// one();

/* Jo child function hote hain woh parent function ke variables ko access kar skte hai */

// Similar scoping ka kaam hum if-else mein hi kar skte hain
if (true) {
    const username = "Karan Aujla";
    if (username === "Karan Aujla") {
        const website = " Stake";
        console.log(username + website);
    }
    // console.log(website); //Error
}
// console.log(username); //Error
console.log();

//  ++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++

// Concept of Hoisting (Basic)

// It will execute in basic function where function is only got declared and not holded in any variable
console.log(addOne(25));
function addOne(num) {
    return num + 1;
}


// console.log(addTwo(35)); // Hoisting will not occur here as function is called before initialisation in a variable
const addTwo = function(num) { // This is also known as expression as function is holded in a variable
    return num + 2;
}