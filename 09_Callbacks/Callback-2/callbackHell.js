// A very basic level function which fetches the data from the database and logs the data on the console

/*function getData(dataId) {
    console.log(`Data ${dataId}`);
} */

// Suppose this database takes sometime to send the data (lets suppose 2s baad data bhejega)

/*function getDataAfterSomeTime(dataId) {
    setTimeout( () => {
        console.log(`Data ${dataId}`);
    }, 2000);
}*/

// If we want agar hume different data ek saath print na karakar ek ke baad ek print karana ha toh uske liye hum callbacks ka use karte ha


function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log(`Data ${dataId}`);
        if(getNextData) {
            getNextData();
        }
    }, 2000)
}

// Callback Hell (Pyramid of Doom)
console.log("Getting data 1 .......");
getData(1, () => {
    console.log("Getting data 2 .......");
    getData(2, () => {
        console.log("Getting data 3 .......");
        getData(3, () => {
            console.log("Getting data 4 .......");
            getData(4);
        });
    });
});

/* Callback hell is a problem in JS */

/* We have promises to handle this callback hell problem in Javascript */