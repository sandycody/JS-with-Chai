// This is the syntax of defining getters and setters which is done using Object literal

const User = {
    // 'Underscore' signifies that we are defining a private property that cannot be used by normal users
    _email: "SW@gmail.com",
    _password: "1234abc",

    // Main nhi chahata ki har koi inn values(email, password) ko access karle, toh uske liye hum getter and setter banaenge
    
    get email() {
        return this._email.toUpperCase();
    },

    set email(em) {
        this._email = em;
    }
}

const tea = Object.create(User); //create() is a factory function and by default it contains null if User was not passed
console.log(tea.email); //SW@GMAIL.COM
console.log(tea._email); //SW@gmail.com