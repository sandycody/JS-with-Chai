/* Object Literal */

const user = {
    username: "Sandeep",
    loginCount: 8, 
    signedIn: true,

    getUserDetails: function() {
        // return `Username : ${this.username}`;
        return this; //After returning 'this', it provides current context of the object
    }
}

// console.log(user.getUserDetails());


/* Constructor Function */

// const promiseOne = new Promise();
const date = new Date();

// In above two objects, this 'new' keyword is a constructor function


function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
    }
    return this; 
    //Note : Ye 'return this;' hume explicitly likhne ki need nhi hai ye implicitly bhi return this kar deta ha
}

// const userOne = User("Karan", 20, true);
// const userTwo = User("ChaiAurCode", 2, true);

// console.log(userOne); //userTwo overwrites the userOne values which is not good that is why we use new keyword which provides new instance everytime and we can customize that copy of instance accordingly


/* Now just put 'new' keyword in front of a User*/
const userOne = new User("Karan", 20, true);
const userTwo = new User("ChaiAurCode", 2, true);

console.log(userOne); //User { username: 'Karan', loginCount: 20, isLoggedIn: true }
console.log(userTwo); //User { username: 'ChaiAurCode', loginCount: 2, isLoggedIn: true }

userOne.greeting(); //Welcome Karan
userTwo.greeting(); //Welcome ChaiAurCode
console.log(userOne.constructor); //[Function: User]

console.log(userOne instanceof User); //true
console.log(userTwo instanceof User); //true



// Jitni baar bhi this likhenge toh utni baar empty object generate hoga output mein
// console.log(this); //{} --> Empty object
// console.log(typeof this); //object
