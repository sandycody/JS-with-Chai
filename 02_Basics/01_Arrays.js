// Arrays are variables which can hold more than one value.


// - JavaScript arrays are resizable as we can add more elements to it
// - JavaScript arrays can contain a mix of different data types. Be it Number, String, Boolean, etc.

const myArr = [45, 67, "Sandeep", true, 57.6];
console.log(typeof myArr); //object
console.log(myArr.length); //5
console.log(myArr[4]); //57.6
console.log();

// Important Note of JavaScript
// In JavaScript, there are two ways to copy objects: 
// - Shallow copy : 
// 1. Shallow copying creates a new object with references to the same memory locations as the original object.

// 2. Shallow copying can be more efficient in terms of performance, but may result in unexpected behavior if changes to a copied object affect the original object.

// - Deep copy :
// 1. Deep copying creates a new object with new memory locations for all of its properties and nested objects or arrays.

// 2. Deep copying ensures that changes to a copied object do not affect the original object, but may be more expensive in terms of performance.

const anotherArr = ["Sandeep", "Karan", "Khan", "Navaan"];

// Another way to create Array
const anotherWay = new Array(34, 23, "Devil", true);
console.log(typeof anotherWay); //object
console.log(anotherWay.length); //4
console.log(anotherWay[3]); //true
console.log();

// Array Methods

const array = [34, 1, 45, 78];
// toString() method converts an array to a string of CSV
console.log(typeof array.toString()); //string
console.log(array.toString()); //34,1,45,78

// The push() method of Array instances adds the specified elements to the end of an array and returns the new length of the array.
console.log(array.push("Sandy")); //5
console.log(array); //[ 34, 1, 45, 78, 'Sandy' ]
array.push("Candy");
array.push("Saddle");
array.push("Trick");

// The pop() method removes the last element from the array and returns the popped element.
console.log(array); //[ 34, 1, 45, 78, 'Sandy', 'Candy', 'Saddle', "Trick"]
console.log(array.pop()); //Trick
console.log(array); //[ 34, 1, 45, 78, 'Sandy', 'Candy', 'Saddle' ]
console.log();

// The shift() method of Array instances removes the first element from an array and returns that removed element.
console.log(array); //[ 34, 1, 45, 78, 'Sandy', 'Candy', 'Saddle' ]
console.log(array.shift()); //34 
console.log(array); //[ 1, 45, 78, 'Sandy', 'Candy', 'Saddle' ]
console.log();

// The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array.
console.log(array); //[ 1, 45, 78, 'Sandy', 'Candy', 'Saddle' ]
console.log(array.unshift(68)); //7 -> length of new array
console.log(array); //[ 68, 1, 45, 78, 'Sandy', 'Candy', 'Saddle' ]
console.log();

// console.log(array.includes(56)); //false
// console.log(array.includes('Saddle')); //true

console.log(array.indexOf('Candy')); //5 (indexOf 'Candy')
console.log(array.indexOf(10)); //-1 (returns -1 if element is not present)
console.log();

// join() method:
// - The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas(by default) or a specified separator string.

// - If the array has only one item, then that item will be returned without using the separator.

console.log(typeof array.join()); //string
console.log(typeof array.join('')); //string
console.log(typeof array.join('-')); //string
console.log(typeof array.join('/')); //string
console.log();

console.log(array.join()); //"68,1,45,78,Sandy,Candy,Saddle"
console.log(array.join('')); //"6814578SandyCandySaddle"
console.log(array.join('-')); //"68-1-45-78-Sandy-Candy-Saddle"
console.log(array.join('/')); //"68/1/45/78/Sandy/Candy/Saddle"

console.log(array.sort()); //Sorts array lexicographically when string is present as an element in an array
console.log();

// slice() and splice() methods in an array

// slice() does not modify the original array
const newArray = [45, 78, 96, 100, 546, 43];
console.log(newArray.slice(-2, -4)); //[]
console.log(newArray.slice(-4, -2)); //[ 96, 100 ]
console.log(newArray); // [ 45, 78, 96, 100, 546, 43 ] (No change in an original array)
console.log();


console.log(newArray); //[ 45, 78, 96, 100, 546, 43 ]
const myn1 = newArray.splice(2, 3, 67, 12, 4);
// Syntax : splice(index, countOfRemovedElements, elementsToBeAddedInplaceOfRemovedElements)
// - splice() returns elements which are replaced and modifies the original array

console.log(myn1); //[ 96, 100, 546 ]
console.log(newArray); //[ 45, 78, 67, 12, 4, 43 ]

console.log(newArray.splice(1,3)); //[ 78, 67, 12 ]
console.log(newArray); //[ 45, 4, 43 ]
console.log();