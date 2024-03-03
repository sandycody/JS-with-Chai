function setUserName(username) {
    //complex DB calls
    this.username = username;
}

function createUser(username, email, password) {
    setUserName(username); //Ye actual mein call ho hi nhi rha hai ye just uska reference gya ha

    // So hume explicitly call karna padega by .call() method jo reference hold karke rakhe function ka 

    setUserName.call(this, username); //Jab bhi .call() use karte hai toh first parameter is always 'this'

    /* Output:
    createUser { username: 'chai', email: 'chai@fb.com', password: '123' }
    */

    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai);