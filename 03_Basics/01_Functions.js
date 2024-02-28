function sayMyName() {
    console.log('S');
    console.log('a');
    console.log('n');
    console.log('d');
    console.log('e');
    console.log('e');
    console.log('p');
}
// sayMyName; // => It is a function reference
// sayMyName(); // => Termed as "Execution of function" when parenthesis is added with reference

/* We'll be writing functions where something important is working rather than printing these console.logs */

// Suppose there is function to add two numbers
function addTwoNumbers(x, y) { // Here x, y are parameters
    return x + y;
}

let result1 = addTwoNumbers(10, 50); // Here 10, 50 are arguments
// console.log(result1); //60

let result2 = addTwoNumbers(10, "50");
// console.log(result2); //1050

let result3 = addTwoNumbers(10, "a");
// console.log(result3); //10a

let result4 = addTwoNumbers(10, null);
// console.log(result4); //10

// Another function
function loginUserMessage(username) {
    if (!username) { // In JS, Empty string (""), undefined are considered as false value
        console.log(`Please enter a username`);
        return;
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("Sandeep")); //Sandeep just logged in
// console.log(loginUserMessage("")); // just logged in
// console.log(loginUserMessage()); //undefined just logged in
// loginUserMessage();

// But to avoid these undefined type situations, we can pass default value as parameter while defining function

// Example
function userLoginMessage(username = "Sandeep") {
    return `${username} just logged in`;
}
// console.log(userLoginMessage("Ravindra"));//Ravindra just logged in
// console.log(userLoginMessage()); //Sandeep just logged in

/* When we don't know ki kitne arguments aane wale hai shopping cart mein user ke through and hume prices bas add hi karne hai unn items ke, iss situation mein ussi hisab se hume parameters manage karne hote ha */

function calculateCartPrice(...items) { // '...' is rest operator and not spread operator
    return items;
}
// console.log(calculateCartPrice(300, 600, 800));
// Output : [ 300, 600, 800 ] => (In the form of an array)

// Multiple parameters along with rest operator
function calculateCartPrice(item1, item2, ...restItems) { // ... is rest operator and not spread operator
    console.log(`Item 1 : ${item1}`);
    console.log(`Item 2 : ${item2}`);
    return restItems;
}

// console.log(calculateCartPrice(200, 400, 500, 5000, 10000));

/* How to pass Object in function */

const user = {
    userName : "Candy",
    price : 2999
}

function handleObject(anyObject) {
console.log(`Username is ${anyObject.userName} and price is ₹${anyObject.price}`); // '₹' is generated by (ctrl + shift + $)
}

// handleObject(user);

// It is not mandatory that we first create an object and then pass into a function. We can directly create an object while calling a function

// handleObject({
//     userName : "Sandeep",
//     price : 2999
// });

/* We can also pass array in Object */

const myArray = [200, 500, 76, 10];

// function to return 3rd element of an array
function returnThirdValue(getArray) {
    return getArray[2];
}
console.log(returnThirdValue(myArray)); //76

// Directly pass an array while calling
console.log(returnThirdValue([45, 10, 20, 65])); //20
console.log();