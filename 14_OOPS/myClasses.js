// Hum jo bhi JS use kar rhe hain woh ES6 ke baad ki hai


// Declaration of a class
class User {
    // constructor of a class
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // Method-1
    encryptPassword() {
        return `${this.password}abc`;
    }
    
    // Method-2
    changeUserName() {
        return `${this.username.toUpperCase()}`;
    }
}

const myUser = new User("Karan", "KA@stake.com", "Goddamn");
console.log(myUser.email); //KA@stake.com
console.log(myUser.encryptPassword()); //Goddamnabc
console.log(myUser.changeUserName()); //KARAN

// Behind the scene

function Person(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

Person.prototype.encryptPassword = function() {
    return `${this.password}abc`;
}

Person.prototype.changeUserName = function() {
    return `${this.username.toUpperCase()}`;
}

const myFunc = new Person("Sandeep", "sw@gmail.com", "321");
console.log(myFunc.changeUserName()); //SANDEEP
console.log(myFunc.encryptPassword()); //321abc
