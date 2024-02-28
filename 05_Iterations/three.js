// for-of loop
// Definition : The JavaScript for of statement loops through the values of an iterable object. It lets you loop over iterable data structures such as Arrays, Strings, Maps, etc.

const numberArray = [1, 2, 3, 4, 5];
let s = "";
for (const i of numberArray) {
    // s += i + " ";
}
// console.log(s);

// for-of loop on string

const greetings = "Hello World!";

for (const greet of greetings) {
    s += greet + "";
}
// console.log(s);

/* Maps in JS */
// The Map object holds key-value pairs and remembers the original insertion order of the keys.

const map1 = new Map();
// console.log(typeof map1); //object

map1.set('a', 2);
map1.set('s', 1);
map1.set('m', 1);
map1.set('y', 1);

// console.log(map1); //Map(4) { 'a' => 2, 's' => 1, 'm' => 1, 'y' => 1 }
// console.log(map1.get('a')); //2
// console.log(map1.get('s')); //1
// console.log(map1.get('d')); //undefined

// Let's take an other example

const map2 = new Map();

map2.set('IN', 'India');
map2.set('LA', 'Los Angeles');
map2.set('POR', 'Portugal');
map2.set('BRA', 'Brazil');
map2.set('FRA', 'France');
map2.set('LA', 'Los Angeles'); //If value is repeated even then also it is printed once because map is known for its unique key-value pair.

// console.log(map2); 
/* Output
Map(5) {
  'IN' => 'India',
  'LA' => 'Los Angeles',
  'POR' => 'Portugal',
  'BRA' => 'Brazil',
  'FRA' => 'France'
}
*/
// console.log(map2.get('FRA')); //France

// Let's apply for-of loop on this map

/*for (const m of map2) {
  console.log(m); //Ye toh saari ek saath values de rha hai but hume toh keys and values ek saath chaiye thi uske liye next for-of likhte hain
}*/
/* Output
[ 'IN', 'India' ]
[ 'LA', 'Los Angeles' ]
[ 'POR', 'Portugal' ]
[ 'BRA', 'Brazil' ]
[ 'FRA', 'France' ]
*/

// If we want keys and values to be printed differently then

/*for (const [keys, values] of map2) {
  console.log(`${keys} : ${values}`); //We can print keys and values differently now
}*/
/* Output
IN : India
LA : Los Angeles
POR : Portugal
BRA : Brazil
FRA : France
*/

/* Using for-of loop on object but object is not iterable, we can convert an object in an array as array is iterable */

const myObj = {
  'Game1' : 'GTA Vice-City',
  'Game2' : 'Contra',
  'Game3' : 'Unfair Mario'
}

for (const [keys, values] of Object.entries(myObj)) {
  console.log(`${keys} : ${values}`); // Object.entries(myObject) se object array mein convert hota hai and keys and values dono pe iterate karta hai
}
/* Output
Game1 : GTA Vice-City
Game2 : Contra
Game3 : Unfair Mario
*/