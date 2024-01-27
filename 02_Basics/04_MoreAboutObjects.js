// We'll create object using constructor  

const myObject = new Object();  // This is a Singleton Object
// const myObject = {} // This is a non-singleton object

// console.log(typeof myObject); //object
// console.log(myObject); //{}

myObject.id = "WayMaker-Worldwide100";
myObject.name = "Navaan Sandhu";
myObject.isLoggedIn = false;
// console.log(myObject);

const regularUser = {
    email : "some@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Jatin",
            lastName : "Sapru"
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstName);


// To combine multiple objects

let obj1 = {
    1 : "a",
    2 : "b",
    3 : "c"
}

let obj2 = {
    4 : "d",
    5 : "e",
    5 : "f" // If there are 2 keys present then in output only one key which is at the last is printed
}
// console.log(obj2); // {'4': 'd', '5' : 'f'}

obj2 = {
    4 : "d",
    5 : "e",
    6 : "f"
}

// let obj3 = {obj1, obj2};
// console.log(obj3); 
/* Output:
{
  obj1: { '1': 'a', '2': 'b', '3': 'c' },
  obj2: { '4': 'd', '5': 'e', '6': 'f' }
}
*/
let obj3 = Object.assign(obj1, obj2);
console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

/* OR */

let obj4 = Object.assign({}, obj1, obj2); //Ye khali object as a target pass karna sahi hai kyonki saari objects ki value (obj1, obj2, ...., objN) uss khali object mein jaa rhi hai jabki agar hum ye khali object na pass kare toh jo sabse pehle paramater hoga saari further objects ki value usme jaegi. Refer to MDN for Object.assign() further.
console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

/* OR */

let obj5 = {...obj1, ...obj2} // Spread Operator is best choice
console.log(obj5); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
console.log();

// If values come from database then it will be in the form of Array of Objects

const users = [
    {
        id : 1,
        email : "Sw@gmail.com"
    },
    {
        id : 2,
        email : "Ka@gmail.com"
    },
    {
        id : 3,
        email : "Hg@gmail.com"
    },
    {
        id : 4,
        email : "Bm@gmail.com"
    }
]

// console.log(users[2].email); //Hg@gmail.com
// console.log(users[3]["email"]); //Bm@gmail.com

/* Some more methods using Object */

console.log(typeof Object.keys(myObject)); //object
console.log(Object.keys(myObject)); //[ 'id', 'name', 'isLoggedIn' ]

console.log(Object.values(myObject)); //[ 'WayMaker-Worldwide100', 'Navaan Sandhu', false ]

console.log(Object.entries(myObject));
/* Output : Array of Array
[
  [ 'id', 'WayMaker-Worldwide100' ],
  [ 'name', 'Navaan Sandhu' ],
  [ 'isLoggedIn', false ]
]
*/

// Kahin baar hum objects mein loop through karte hain and loop through karne ke baad hum value find out karne ki koshish karte hain lekin voh value exist nhi karti toh agar value exist nhi karti toh site crash hone ke chances hain usse bachne ke liye hum use karte hain [ObjectName.hasOwnProperty()] method

// The hasOwnProperty() method returns true if the specified property is a direct property of the object — even if the value is null or undefined. The method returns false if the property is inherited, or has not been declared at all. 

console.log(myObject.hasOwnProperty("isLogged")); //false
console.log(regularUser.hasOwnProperty("fullName")); //true
console.log();

// Object Destructuring  

const course = {
    courseName : "JS in Hindi",
    price : 999,
    courseInstructor : "Hitesh"
}
// const {courseInstructor} = course;
// console.log(courseInstructor); //Hitesh

/* This courseInstructor is a very big name, so we can give custom name to it */

const {courseInstructor : Instructor} = course;
console.log(Instructor); //Hitesh
console.log();

// JSON => JavaScript Object Notation

// {
//     "name" : "Tom",
//     "age" : 89,
//     "isAlive" : true
// }

// Sometimes we get API in the form of an Array

[
    {},
    {},
    {},
    {}
]

// Very famous API : https://randomuser.me/
// JSON formatter : https://jsonformatter.org/