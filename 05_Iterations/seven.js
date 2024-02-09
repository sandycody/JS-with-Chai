// Map function in JS (It is also a callback function)

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.map( (num) => num + 10);
// console.log(newNums); //[ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ] 

const newNums2 = myNums.map( (num) => {num + 10});
// console.log(newNums2);

/* Output: 
[
  undefined, undefined,
  undefined, undefined,
  undefined, undefined,
  undefined, undefined,
  undefined, undefined
]
*/

/* Chaining of methods */

const arr = [34 ,67, 10, 3, 5, 665];
const mapMine = arr
                .map((num) => num + 10)
                .map( (num) => num * 2)
                .filter( (num => num >= 50))

// console.log(mapMine); // [ 88, 154, 1350 ]

const anotherArr = [34 ,67, 10, 3, 5, 665];
const anotherResult = arr
                .map((num) => num + 10)
                .map( (num) => num * 2)
                .filter( (num => num >= 50))
                .map ( (num) => num / 2);

// console.log(anotherResult); // [ 44, 77, 675 ]


// Another example of map in which we will transform all values making them uppercase alphabets.

const fruits = [ 
    { name: 'apple', color: 'red' }, 
    { name: 'banana', color: 'yellow' }, 
    { name: 'kiwi', color: 'green' }, 
    { name: 'orange', color: 'orange' }, 
    { name: 'pineapple', color: 'yellow' } 
]; 

const makeValuesUpper = fruits.map( (fruit) => ({
    fruitName : fruit.name.toUpperCase(),
    fruitColor : fruit.color.toUpperCase()
}));

console.log(makeValuesUpper);


/* Output : 
[
  { fruitName: 'APPLE', fruitColor: 'RED' },
  { fruitName: 'BANANA', fruitColor: 'YELLOW' },
  { fruitName: 'KIWI', fruitColor: 'GREEN' },
  { fruitName: 'ORANGE', fruitColor: 'ORANGE' },
  { fruitName: 'PINEAPPLE', fruitColor: 'YELLOW' }
]
*/

