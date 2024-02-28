// reduce() function in JS

const myNums = [1, 2, 3, 4];

// let totalSum = myNums.reduce( (acc, currVal) => {
//     console.log(`accumulation value = ${acc} and Current Value = ${currVal}`);
//     return acc + currVal;
// }, 0);
// console.log();
// console.log(totalSum); // 10

// Arrow function in shorthand type (one line) of above reduce function

// totalSum = myNums.reduce( (acc, currVal) => acc + currVal, 0);
// console.log(totalSum); //10


// Another example using array of objects

const shoppingCart = [
    {
        itemName : "JS Course",
        Price : 2999
    },
    {
        itemName : "Python Course",
        Price : 1999
    },
    {
        itemName : "Java Course",
        Price : 2500
    },
    {
        itemName : "C# Course",
        Price : 3500
    },
];

// Task to add prices of shopping cart using reduce()

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.Price, 0);

console.log(priceToPay); // 10998