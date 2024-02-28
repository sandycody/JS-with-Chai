// Important things about Arrays which will be covered later in React and Node.js

const actors = ['Ayushmann', 'Pankaj Tripathi', 'Nawaz']
const singers = ['Karan', 'Khan', 'Tegi']

// actors.push(singers); // push() existing array pe hi push karta ha
// console.log(actors); 
/* Output
[
    'Ayushmann',
    'Pankaj Tripathi',
    'Nawaz',
    [ 'Karan', 'Khan', 'Tegi' ]
]
*/
// console.log(actors[3]); //[ 'Karan', 'Khan', 'Tegi' ]
// console.log(actors[3][2]); //Tegi

// Another method is concat()
// - The concat() method concatenates (joins) two or more arrays.

// - The concat() method returns a new array, containing the joined arrays.

// - The concat() method does not change the existing arrays.

// const afterConcat = actors.concat(singers);
// console.log(actors); //[ 'Ayushmann', 'Pankaj Tripathi', 'Nawaz' ]
// console.log(afterConcat); //[ 'Ayushmann', 'Pankaj Tripathi', 'Nawaz', 'Karan', 'Khan', 'Tegi' ]

/* Important Note */
// Difference between push() and concat() method in array?

/* Solution : The push() function makes the changes in the original array but concat() creates a brand new array. Due to this mechanism, the concat() function is slower than the push() function. */


/* Second Note: Instead of push() and concat(), developers mostly prefer spread operator which does the same thing what push() and concat() does */

const all_new_actors_singers = [...actors, ...singers];
// console.log(all_new_actors_singers); //[ 'Ayushmann', 'Pankaj Tripathi', 'Nawaz', 'Karan', 'Khan', 'Tegi' ]

/* flat() method in an Array */

// - The flat() method concatenates sub-array elements.
// - Syntax : array.flat(depth)
// - depth => Optional.How deep a nested array should be flattened.Default is 1. We can also provide infinity if we can't see actually how much depth we provide to flat() as a parameter.

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const usableArray1 = anotherArray.flat(2);
console.log(usableArray1); 
/*
[
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5
]
*/

const usableArray2 = anotherArray.flat(Infinity);
console.log(usableArray2);
/*
[
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5
]
*/

// If data is not in form of array then we can perform basic operations on it

// If the data is an array then we can check it using Array.isArray() method
console.log(Array.isArray(anotherArray)); //true
console.log(Array.isArray({})); //false
console.log();
// If data is not in form of array then we can convert it into an array

console.log(Array.from("Tricks")); //[ 'T', 'r', 'i', 'c', 'k', 's' ]
console.log();

/* Note : Objects cannot be converted to array as we have to specify ki hame keys ka array banana hai ya values ka array banana ha */

console.log(Array.from({Name : "Sandy", Age : 22})); //[]

console.log(Array.from([2, 3, 4], (n) => n**n)); //Using Lambda Expression and Output is [ 4, 27, 256]
console.log();

// Agar hume multiple variables ko array mein convert karna ho toh we can use Array.of() method
const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ]
console.log();

// Agar hume multiple arrays ko bhi ek single array mein dekhna ho toh we can use Array.of(arr1, arr2, .... arrN)
let arr1 = [4, 6, 7];
let arr2 = [23, 56, 79];
let arr3 = [1, 32, 67];

console.log(Array.of(arr1, arr2, arr3)); //[ [ 4, 6, 7 ], [ 23, 56, 79 ], [ 1, 32, 67 ] ]