// if - statement

const isUserLoggedIn = true;

// if (true) {
//     console.log(`You are logged in`);
// }

// Comparison Operators => <, >, <=, >=, ==, !=, ===

// if (2 == "2")
//     console.log(`This code is executed`);
// }

// if (2 !== "3") {
//     console.log(`Checking of types also`);
// }

// const score = 200;

// if (score > 150) {
//     const power = "fly";
//     console.log(`User power : ${power}`); //User power : fly
// }
// console.log(`User power : ${power}`); // Error as const lifetime is till if block only


/* Implicit scope */

const balance = 1000;

// if (balance > 500) console.log("This is known as Implicit scope.");

// We can also write multiple if-statements in one line using implicit scope by comma separation. But it is not a good practice and never ever use it.
// if (balance > 500) console.log(`Test1`), console.log(`Test2`), console.log('Test3'); // Never use this coding practice

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
    console.log("Allow to buy the course");
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged in");
}
