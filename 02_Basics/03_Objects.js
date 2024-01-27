// There are 2 ways of creating object in JS

//  - Using Constructor where we use the concept of singleton and we create an object using => Object.create()

// - Using an Object literal => This is the easiest way to create a JavaScript Object.


// We'll work with Object literals

const JsUsers = {
    Name : "Karan Aujla", //Behind the scene these keys are used as String
    Age : 27,
    Location : "Ghurala",
    Email : "KAujla@yahoo.com",
    Profession : "Lyricist",
    isLoggedIn : false,
    lastLoginDays : ["Wednesday", "Friday", "Saturday"]
}

// console.log(JsUsers.Location); //Ghurala
/* OR */
// console.log(JsUsers["Location"]); //Ghurala
// console.log();

// console.log(JsUsers.lastLoginDays[1]); //Friday
/* OR */
// console.log(JsUsers["lastLoginDays"][1]); //Friday
// console.log();

// How to use Symbol in JavaScript Object

const mySym = Symbol("Key1");   

const JsUser = {
    Name : "Tegi", //Behind the scene these keys are used as String
    "Last Name" : "Pannu",
    Age : 26,
    [mySym] : "myKey1", //Symbol must be defined in square brackets in Key
    Location : "Amritsar",
    Email : "TPannu@gmail.com",
    Profession : "Lyricist",
    isLoggedIn : false,
    lastLoginDays : ["Tuesday", "Friday", "Sunday"]
}
console.log(typeof mySym); //symbol
console.log(JsUser[mySym]); //myKey1


// To change values of particular key in Object

JsUser['Location'] = 'Patti';
// console.log(JsUser); 
/*
{
  Name: 'Tegi Pannu',
  Age: 26,
  Location: 'Patti',
  Email: 'TPannu@gmail.com',
  Profession: 'Lyricist',
  isLoggedIn: false,
  lastLoginDays: [ 'Tuesday', 'Friday', 'Sunday' ],
  [Symbol(Key1)]: 'myKey1'
}
*/

/* freeze() method => It freezes an object. A frozen object prevents new properties from being added, existing properties from being removed as well as prevents the values of existing properties from being changed. */

// Object.freeze(JsUser);
JsUser['Age'] = 25;
// console.log(JsUser);
// console.log();

/* We can also add functions in Object */

JsUser.greeting = function() {
  console.log("Hello JS user.");
}

JsUser.greeting(); // Hello JS user.
console.log(JsUser.greeting); //[Function (anonymous)] (This means function is not executed but function's reference came as an output)
console.log(JsUser);
/*
{
  Name: 'Tegi',
  'Full Name': 'Pannu',
  Age: 25,
  Location: 'Patti',
  Email: 'TPannu@gmail.com',
  Profession: 'Lyricist',
  isLoggedIn: false,
  lastLoginDays: [ 'Tuesday', 'Friday', 'Sunday' ],
  greeting: [Function (anonymous)],
  [Symbol(Key1)]: 'myKey1'
}
*/

JsUser.greetAgain = function() {
  console.log(`Hello JS user, ${this.Name} ${this["Last Name"]}`);
}
JsUser.greetAgain(); //Hello JS user, Tegi Pannu
console.log();