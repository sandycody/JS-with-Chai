// Synchronous Programming

// let a = "Karan";
// let b = 22;
// let c = "Pink";

// console.log(`${a} is ${b} years old and his favourite color is ${c}`);


// Asynchronous Programming

/*console.log("First");

setTimeout( () => {
    console.log("Second");
}, 0);

console.log("Third");*/

/* Output: 
First
Third 
Second
*/


/* Callback Functions */

/*function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = ( () => {
        console.log(`Loaded script with src : ${src}`);
    })
    document.body.appendChild(script);
    callback();
}

function goodMorning() {
    alert("Good morning");
}

function hello() {
    alert("hello");
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", hello); */


// Another Example of Synchronous Callback

function displayer(s) {
    document.getElementById('content').innerHTML = `The sum is ${s}`;
    document.getElementById('content').style.color = 'orange';
    document.getElementById('content').style.fontSize = '25px';
}

function mySum(a, b, callback) {
    let res = a + b;
    callback(res);
}

// mySum(10, 20, displayer); // here displayer() function is called a callback function as it is passed to mySum() as an argument


//Above we do not have to create displayer function alag se while passing it in mySum we can create it using arrow function then and there

mySum(5, 20, (s) => {
    document.getElementById('content').innerText = `The sum is ${s}`;
    document.getElementById('content').style.color = "cyan";
    document.getElementById('content').style.fontSize = "25px";
});


// Another example of Synchronous callback

function CallBackTeaser(callback, param){
    callback(param);
}

function consoleMyDetails(person){
    if(person){
        console.log(`Hi, my name is ${person.name}, i am ${person.job} & super exited about ${person.hobby}`);
    }
}

CallBackTeaser(consoleMyDetails, 
    {'name': 'Sandeep',
    'job':'Developer',
    'hobby':'learning new technologies.'
});

// Example of setTimeout which also takes asynchronous callback as an argument

let display = () => {
    console.log("Callback example of setTimeout()");
}

setTimeout(display, 3000); // display is callback