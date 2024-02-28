// Dates
    /* Jab bhi hum inn notes ko kabhi future mein padhte hain toh date and time change ho chuka hoga isliye uss hisab se study karna saare outputs change hogye honge */

let myDate = new Date();
console.log(typeof myDate); //object
// console.log(myDate); //2024-01-25T06:20:18.012Z
// console.log(myDate.toString()); //Thu Jan 25 2024 06:20:18 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toISOString()); //2024-01-25T06:20:18.012Z
// console.log(myDate.toDateString()); //Thu Jan 25 2024
// console.log(myDate.toTimeString()); //06:20:18 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toLocaleString()); //1/25/2024, 6:20:18 AM
// console.log(myDate.toLocaleDateString()); //1/25/2024


// Format of creating our own date: 
// i.e. new Date(year, month, day, hours, minutes, seconds, milliseconds)

let myCreatedDate = new Date(2024, 1, 10); //month starts from 0 so 1 means FEB.
console.log(myCreatedDate.toDateString()); //Sat Feb 10 2024
console.log(myCreatedDate.toLocaleString()); //2/10/2024, 12:00:00 AM
console.log(myCreatedDate.getHours()); //0
console.log(myCreatedDate.getMinutes()); //0
console.log();

// Another Date with hours and minutes
let anotherDate = new Date(2024, 0, 18, 6, 10);
console.log(anotherDate.toDateString()); //Thu Jan 18 2024
console.log(anotherDate.toLocaleString()); //1/18/2024, 6:10:00 AM
console.log(anotherDate.getHours()); //6
console.log(anotherDate.getMinutes()); //10
console.log();

// We can have specific format of a date i.e. MM/DD/YYYY
let specificFormatDate1 = new Date("11-12-2024"); //MM/DD/YYYY
console.log(specificFormatDate1.toLocaleString()); //11/12/2024, 12:00:00 AM

let specificFormatDate2 = new Date("2024-10-20"); //YYYY/MM/DD
console.log(specificFormatDate2.toLocaleString()); //10/20/24, 12:00:00 AM (It gives output always in MM/DD/YYYY)
console.log();


// TimeStamps in JS

let myTimeStamp = Date.now();
console.log(myTimeStamp); //1706165190174 (in milliseconds)
console.log(anotherDate.getTime()); //1705558200000 (in milliseconds)
console.log();

// To convert milliseconds to seconds, we can easily do so by (1s = 1000ms)
console.log(Date.now()/1000); //Output in Decimals (Date.now() in ms and divided by 1000 to convert it into seconds)
console.log(Math.floor(Date.now()/1000)); //Output in Integral Value
console.log();

// Some more methods related to Date

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()); // 0 as month starts from 0 by default
console.log(newDate.getMonth() + 1); // to get exact month, do +1 in current month
console.log(newDate.getDay()); //4 which signifies today is Thursday
console.log();


// Note : Coders use String Interpolation of writing full Date in JS code

// Example : `${newDate.getDay()} and the time is ${newDate.getTime()}`


// Note: Most important method in Date is toLocaleString()

console.log(newDate.toLocaleString('default', {
    weekday: "long"  // Thursday
}));