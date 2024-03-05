/* Javascript Accessors (Getters and Setters) */

// Getters and setters allow us to define Object accessors

class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email() {
        return this._email.toUpperCase();
    }

    set email(em) {
        this._email = em;
    }
    // JO upar constructor mein properties di hain uske hi methods bana ke uske aage get likh skte ha

    get password() {
        return `${this._password}Galathai`;
    }

    // It is mandatory to define setter if we have defined getter above
    set password(password) {
        this._password = password;
    }
}

const sandy = new User("sandycody@github.io", "abcxy123#");
console.log(sandy.password); //abcxy123#Galathai
console.log(sandy._password); //abcxy123#
console.log(sandy); //User { email: 'sandycody@github.io', _password: 'abcxy123#' }

console.log(sandy.email); //SANDYCODY@GITHUB.IO
console.log(sandy._email); //sandycody@github.io