/* static keyword in JS */
// 1. static keyword defines static methods for classes.

// 2. Static methods are called directly on the class (Car from the example below) without creating an instance/object (myCar) of the class.

// Example :

/*
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  static hello() {  // static method
    return "Hello!!";
  }
}

const mycar = new Car("Ford"); 
*/

class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME: ${this.username}`);
    }

    // Jase ki ek User create ho, tabhi hi uss User ko ek unique Id mil jaye
    static createId() {
        return `123`;
    }
}

const user = new User("Sandeep");
// console.log(user.createId()); //Error => user.createId is not a function
console.log(User.createId()); //123

// Another Class which extends User
class Teacher extends User {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }
}

const gadget = new Teacher("laptop", "Mi@intel.com", "4321");

gadget.logMe(); //USERNAME: laptop
// console.log(gadget.createId()); //TypeError: gadget.createId is not a function

console.log(Teacher.createId()); //123