// This is the syntax of defining getters and setters which is done using functions

function User(email, password) {
    this._email = email;
    this._password = password;
    
    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toUpperCase();
        },
        set: function(value) {
            this._email = value;
        }
    });

    Object.defineProperty(this, 'password', {
        get: function () {
            return this._password.toUpperCase();
        },
        set: function(value) {
            this._password = value;
        }
    });
}

const chai = new User("chai@chai.com", 'ilaichi21');
console.log(chai); //User { _email: 'chai@chai.com', _password: 'ilaichi21' }

console.log(chai.password); //ILAICHI21
console.log(chai._password); //ilaichi21
console.log(chai.email); //CHAI@CHAI.COM
console.log(chai._email); //chai@chai.com