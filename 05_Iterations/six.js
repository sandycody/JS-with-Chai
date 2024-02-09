//filter() method

// const codeLanguages = ["JS", "Python", "Ruby", "Java", "CPP"];

// const values = codeLanguages.forEach( (item) => {
//     return item;
// });

// console.log(values); //undefined

/* NOTE : This signifies that forEach() method does not return any value.

forEach() return value is undefined (None)
*/


// Now we will use the method in which there is return value as it is most important later in development

// So the name of the method is filter()

/* Definition : It creates a new array by filtering array with values that passes the test.
It does not change the original array.
*/

const myNums = [12, 34, 56, 67, 78, 89, 24, 90];

// myNums.filter( (num) => num > 30 ? console.log(num) : console.log("not acceptable"));

// filter() returns the array

const filterVal = myNums.filter( (num) => num > 50); //Implicit return
// console.log(filterVal); //[ 56, 67, 78, 89, 90 ]

const filterVal2 = myNums.filter( (num) => {num > 50});
console.log(filterVal2); //[]

// Explicit return
const filterValues = myNums.filter ( (num) => {
    return num > 70;
});
// console.log(filterValues); //[ 78, 89, 90 ]


// Using numeric arrays on forEach() method

const newNums = [];

myNums.forEach( (num) => {
    if (num > 56) newNums.push(num);
});

// console.log(newNums); //[ 67, 78, 89, 90 ]

// Applying filter() method on Array of objects

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// fetch those books whose genre is 'History'
const userValues = books.filter ( (bk) => bk['genre'] === 'History');
// console.log(userValues);

/* Output : 
[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
]
*/

// fetch those books which was published after 2000

const publishAfter2000 = books.filter( (bk) => bk.publish > 2000);
// console.log(publishAfter2000);


// fetch those books which was published after 1995 and genre is 'History'

const filteredUserValues = books.filter( (bk) => {
  return (bk.publish > 1995 && bk.genre === 'History');
});
// console.log(filteredUserValues);
