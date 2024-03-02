/*const promiseOne = new Promise(function(resolve, reject) {
    //Do an async task:
    // DB calls, cryptography, network related
    setTimeout(function() {
        console.log('Async task is complete');
        resolve("Success!");
    }, 1000);
});

// .then() ke andhar hume ek callback milta ha
promiseOne.then(function() {
    console.log("Promise Consumed");
});


// Another Syntax of using Promise by not storing new Promise in a variable
/*new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(function() {
    console.log("Promise resolved");
});*/


// Network se koi data aaya ho aur usko kase pass karna hai resolve mein let's see
const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({username: "Sandeep", email: "sandy@gmail.com"}) // resolve() mein data mostly object form mein milta ha 
    }, 2000);
})

/*promiseThree.then(function(user) {
    console.log(user);
})*/

// Fourth Promise (Usage of Promise Chaining)

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false;
        if(!error) {
            resolve({username: "Sandeep", password: "1234"});
        } else {
            reject('ERROR: Something went wrong');
        }
    }, 1000);
})

/*promiseFour
.then((user) => {
    console.log(user);
    return user.username; // Jo iss .then() se value return hogi wahi next .then() mein jaegi
})
.then((username) => {
    console.log(username);
})
.catch((err) => {
    console.log(err);
})
.finally(() => console.log("The promise is either resolved or rejected")) */


// Fifth Promise

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(() => {
        let error = false;
        if(!error) {
            resolve({username: "Javascript", password: "1234"});
        } else {
            reject('ERROR: JS went wrong');
        }
    }, 1000);
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch(err) {
        console.log(err);
    }
}
// consumePromiseFive();

// Using .then() and .catch() to resolve and reject the promise
fetch('https://api.github.com/users/sandycody').then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})

// Using async await
async function getAllUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("E : ", error);
    }
}

// getAllUsers();