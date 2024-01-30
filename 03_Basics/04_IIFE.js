// Immediately Invoked Function Expressions (IIFE)

// It is a function that is called immediately after it is defined. 

/* Usage : It is used to invoke immediately after the function is defined. Another reason is jab bhi hum function likhte hai toh hum ye ensure karke usko likhna chahate hai ki global variable uss function mein koi problem na kare.
Toh jo bhi hum function mein declare kar rhe hain woh kahin baar global scope se pollute ho jate hain.

So there are two main reasons : 
- We don't want global scope pollution inside function, so we create whole different scope of function using IIFE.

- Function should be executed then and there.
*/

// IIFE without using arrow function

(function chai() {
    // This is Named IIFE, where function name is given explicitly
    console.log(`DB Connected`);
})();

// IIFE using arrow function

( (username, value) => {
    // This is simple IIFE not named IIFE as name is not there of a function
    console.log(`${username}, your DB is Connected Part - ${value}`);
})("Sandeep", 2);