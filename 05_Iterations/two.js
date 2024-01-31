// while and do-while loops

// let ind = 0, s = "";
// while (ind <= 10) {
//     s += ind + " ";
//     ind += 2;
// }
// console.log(s); // Printing of numbers from 1-10 in one line

// To execute Array using while loop
const myArray = ["Arjan", "Jordan", "Khan", "Sukha"];

let ind = 0, s = "";
while (ind < myArray.length) {
    s += myArray[ind] + " ";
    ind++;
}
// console.log(s); //Arjan Jordan Khan Sukha

// do-while loop

let score = 10;
do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 20);

