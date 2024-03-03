//Task is to create a custom method trueLength() in which the string gets trimmed and gives the actual length of string without spaces

let myName = "Sandeep         ";

console.log(myName.length); //16 but its trueLength is 7
// console.log(myName.truelength());


// Let's start by basics then at the end we achieve our task

let myIdols = ['Karan', 'Sandeep'];

let idolProfession = {
    Karan: "Lyricist",
    Sandeep: "Developer",

    getSandyProfession: function() {
        console.log(`Sandy profession is ${this.Sandeep}`);
    }
}

// This Object.prototype is defined for arrays, functions, String, Objects
Object.prototype.hitesh = function() {
    console.log(`Hitesh is present in all objects`);
}

// hitesh() is accessible to Object 'idolProfession'
idolProfession.hitesh(); //Hitesh is present in all objects


// hitesh() is accessible to array 'myIdols'
myIdols.hitesh(); //Hitesh is present in all objects


// hitesh() is accessible to function 'getSandyProfession' which is defined inside object idolProfession
idolProfession.getSandyProfession.hitesh(); //Hitesh is present in all objects

Array.prototype.heySandeep = function() {
    console.log(`Hey Sandeep`);
}

myIdols.heySandeep(); //Hey Sandeep

// idolProfession.heySandeep(); //If function is defined to an Array then it is not accessible to Object. So it is an error

/* Prototype => Prototypes are the mechanism by which JavaScript objects inherit features from one another. */


// Prototypal inheritance

const User = {
    username: "Chai",
    email: "chai@google.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport //__proto__ is deprecated
}

Teacher.__proto__ = User;

// console.log(TASupport.isAvailable); //false

// console.log(Teacher.email); //chai@google.com
// console.log(Teacher.username); //Chai

/* Modern Syntax of using Teacher.__proto__ = User */

Object.setPrototypeOf(TeachingSupport, Teacher);
// Here TeachingSupport is a child class and Teacher is a class which got inherited by TeachingSupport class

console.log(TeachingSupport.username); //Chai


let anotherUsername = "ChaiAurHiteshSir       ";

String.prototype.trueLength = function() {
    console.log(`${this}`); //ChaiAurHiteshSir
    console.log(`True length is : ${this.trim().length}`);//16
}

anotherUsername.trueLength(); //True length is : 16

"hitesh".trueLength();
/* Output:
hitesh
True length is : 6
*/


"iceTea  ".trueLength();
/* Output:
iceTea
True length is : 6
*/

"Meri chai".trueLength();
/* Output:
Meri chai
True length is : 9
*/

"Sandeep         ".trueLength(); 
/* Output:
Sandeep
True length is : 7
*/


