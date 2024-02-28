const accountId = 11264;
let accountEmail = "peednascooldude@gmail.com";
var accountPassword = "tye5@32";
let accountState; // Isko humne declare karke chhod dia toh JavaScript isko undefined consider karti ha 

// accountId = 56; //const cannot be updated and re-declared as it is ensured by Node.js while execution

accountCity = "Delhi";
/* 
Vaise toh variable aise bhi declare ho skta(accountId = "Delhi" above) hai bina let and const ko use kare

But it is not a good practice
*/

accountEmail = "sw@yahoo.com";
accountPassword = "648346";
accountCity = "Punjab";

/*
Prefer not to use var 
because of issue in block scope and functional scope.
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);