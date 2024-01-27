/* Strings are used to store and manipulate text. Strings generally created using double quotes but we can create it using single quotes too. String is object in JS*/

const name = "Sandeep";
const repoCount = 10;

console.log(name + " " + repoCount); //Method to concatenate strings
console.log();
// But the above method of concatenation is not preferred as it is outdated.

// We use modern method known as template literals which uses Backticks(``) and we can insert variables directly in template literal known as String Interpolation

console.log(`Hello my name is ${name} and my repo count on github is ${repoCount}`);
console.log();

// Another way to declare Strings
// const myName = new String("Karan");
// console.log(myName[2]); //r
// console.log(myName.__proto__); // {} -> which is an object as an output and got to see these values on console.

//We can access so many methods of String using '.'

/* Note: We can have a look at all the methods of String in console by declaring string with new keyword (i.e. const myName = new String("Karan")) */

// console.log(myName.length); //5
// console.log(myName.charAt(3)); //a
// console.log(myName.indexOf('a')); //1 (returns first Occurrence of character)
// console.log(myName.indexOf('p')); //-1 (returns -1 if character not present)
// console.log(myName.toUpperCase()); //KARAN
// console.log(myName.charCodeAt(0)); //Gives ASCII value of particular character
// console.log(myName.replace('n', 't')); //Karat (.replace(oldVal, newVal))

const string = "The quick brown fox jumps over the lazy dog.";
// const newString = string.substring(3,5);
// console.log(newString);

// console.log(string.substring(5,-6)); //It ignores negative index as it considers indices till (startIndex-1 = 4)
// console.log(string.substring(-5,8)); //It ignores negative index as it considers indices till (startIndex-1 = 4)

// console.log(string.slice(-6, -2)); //slice() includes negative values
// console.log(string.slice(-8, 40));


// const newStringOne = "   Sandy     ";
// console.log(newStringOne); //   Sandy
// console.log(newStringOne.trim()); //Sandy

// console.log(string.includes("fox")); //true
// console.log(string.includes("nani")); //false


/* split() method in String
- The split() method splits a string into an array of substrings.
- The split() method returns the new array.
- The split() method does not change the original string.
*/

const newString = string.split(" ");
console.log(newString); // It returns array of string separated by space.
/* Output
[
  'The',   'quick',
  'brown', 'fox',
  'jumps', 'over',
  'the',   'lazy',
  'dog.'
]
*/
console.log();