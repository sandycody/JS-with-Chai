/* Property Descriptor */

/* A property descriptor of an object consists of some of the following attributes to define each property:

1. value : It is the value associated with the property that is called.

2. writable : It indicates if the property can be changed or not. It only returns true if the property can be manipulated.

3. enumerable : If the property is visible during enumeration of the properties of the corresponding object, then it returns true.

4. configurable : It indicates if the property descriptor can be changed or removed from the corresponding object.
*/


/* Javascript Object.getOwnPropertyDescriptor() */

// 1. The Object.getOwnPropertyDescriptor() method returns a property descriptor for a specific property of an object.

// 2. The syntax of the getOwnPropertyDescriptor() method is:

/* Object.getOwnPropertyDescriptor(obj, prop) */

// 3. getOwnPropertyDescriptor() is a static method. Hence, we need to access the method using the class name, Object.

// Coding Example

// console.log(typeof Math); //object
// console.log(Math.PI); //3.141592653589793

// If we have to overwrite this value, then we cannot do so
Math.PI = 6;

// console.log(Math.PI); //3.141592653589793 (So it cannot be overwritten)


const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor);
/* Output:
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/


/* Factory Methods in JS */

// 1. In JavaScript, a factory function is a function that returns an object.

// 2. It is a way of creating and returning objects in a more controlled and customizable manner. 


// Creation of object using factory function
const myObj = Object.create(null);
// console.log(myObj);


// But we created simple object literal
const chai = {
    name: "Ilaichi Chai",
    price: 250,
    isAvailable: true,

    orderChai() {
        console.log("Chai prepare nhi hui");
    }
}

// Now we see descriptor property of above created Object 'chai'

// console.log(Object.getOwnPropertyDescriptor(chai, "price"));
/* Output:
{ value: 250, writable: true, enumerable: true, configurable: true }
*/

// Now Let's see hum iski properties ko kase customize kar skte ha

/*Object.defineProperty(chai, "price", {
    writable: false,
    enumerable: false
});*/

// console.log(Object.getOwnPropertyDescriptor(chai, "price"));
/* Output:
{ value: 250, writable: false, enumerable: false, configurable: true }
*/



// Now let's loop through this created object

/*for (let [key, value] of Object.entries(chai)) {
    console.log(`${key} : ${value}`);
}*/

/* Output: 
name : Ilaichi Chai
price : 250
isAvailable : true
*/

// Now we added function in object literal 'chai' created above and if we loop it over that object, then function is also printed which is not good in production environment and we generally say it "Code Fat gya"


// Running it again
/*for (let [key, value] of Object.entries(chai)) {
    console.log(`${key} : ${value}`);
}*/

/* Output:
name : Ilaichi Chai
price : 250
isAvailable : true
orderChai : orderChai() {
        console.log("Chai prepare nhi hui");
    }
*/

// Like this function coming in output is not good as we want only key and value, So for that we provide a check in loop

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}

/* Output
name : Ilaichi Chai
price : 250
isAvailable : true
*/