// forEach loop in JavaScript

// Definition : The forEach() method of Array instances executes a provided function once for each array element.

/* Syntax : forEach(callbackFn) 

callbackFn => A function to execute for each element in the array. Its return value is discarded. (Note : callbackFn has no name.)

The function is called with the following arguments:

- element (Required) : The current element being processed in the array.

- index (Optional) : The index of the current element being processed in the array.

- array (Optional ): The array forEach() was called upon.

*/

const codeLanguages = ["JS", "Python", "Ruby", "Java"];

/* codeLanguages.forEach(function (elem) { //callbackFn has no name
    console.log(elem);
}); */

/* Output :
JS
Python
Ruby
Java
*/

// We use arrow function mostly with forEach() method of array

/* codeLanguages.forEach( (item) => {
    console.log(item);
}); */

/* Output :
JS
Python
Ruby
Java
*/

// We can pass reference of a function in forEach() also

// function printMe(elem) {
//     console.log(elem);
// }

// codeLanguages.forEach(printMe); // Only pass the reference of function

/* Output :
JS
Python
Ruby
Java
*/

/* codeLanguages.forEach( (elem, index, codeLanguages) => { //index and array are optional parameters
    console.log(`${elem} is on index ${index} and the array is `, codeLanguages);
}); */

/* Output :  
JS is on index 0 and the array is  [ 'JS', 'Python', 'Ruby', 'Java' ]
Python is on index 1 and the array is  [ 'JS', 'Python', 'Ruby', 'Java' ]
Ruby is on index 2 and the array is  [ 'JS', 'Python', 'Ruby', 'Java' ]
Java is on index 3 and the array is  [ 'JS', 'Python', 'Ruby', 'Java' ]
*/


const myValues = [
    {
        langName : "C++",
        langExtension : "cpp"
    },

    {
        langName : "Python",
        langExtension : "py"
    },

    {
        langName : "Javascript",
        langExtension : "js"
    },

    {
        langName : "HTML",
        langExtension : "html"
    }
];

myValues.forEach( (item) => {
    console.log(item.langExtension);
});

/* Output : 
cpp
py
js
html
*/

// let s = "";
// myValues.forEach( (item) => {
//     s += item['langName'] + " ";
//     return s;
// });
// console.log(s); // C++ Python Javascript HTML