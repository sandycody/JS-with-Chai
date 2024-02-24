# Projects related to DOM

## Project Link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-epgye4?file=1-colorChanger%2Findex.html)

# Project-1 Solution Code

```Javascript
const buttons = document.querySelectorAll('.button');

const body = document.querySelector('body');

buttons.forEach((btn) => {
  // console.log(btn);
  btn.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target); // target property se ye pata lagta hai ki event aa kaha se rha ha

    if (e.target.id == 'red') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == 'lightgreen') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```
## Project-2 Solution Code
``` JavaScript
const form = document.querySelector('form');

// This usecase will give us empty value
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function (e) {
  e.preventDefault(); //default submit method ko rokna

  const height = parseInt(document.querySelector('#height').value); //value hume string mein milti hai toh usse int mein convert karna hota hai toh parseInt() use kia hai
  const weight = parseInt(document.querySelector('#weight').value);

  // We apply some basic checks
  if (height < 0 || height === '' || isNaN(height)) {
    results.innerHTML = `Please enter a valid height ${height}`;
  } else if (weight < 0 || weight === '' || isNaN(weight)) {
    results.innerHTML = `Please enter a valid weight ${weight}`;
  } else {
    const bmi = (weight / (height * height)).toFixed(7);
    let message = '';

    if (bmi < 18.6) {
      message = 'Underweight';
    } else if (bmi > 18.6 && bmi < 24.9) {
      message = 'Normal Range';
    } else {
      message = 'Overweight';
    }
    results.innerHTML = `<span>${bmi}</span><br>${message}`;
    console.log(results);
  }
});
```

## Project-3 Solution Code

```Javascript
const clock = document.getElementById('clock');

// To show time every second we use setInterval() method and provide time in milliseconds
setInterval(() => {
  let myDate = new Date();
  clock.innerText = myDate.toLocaleTimeString();
}, 1000);

```

## Project-4 Solution Code

```Javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');

const userInput = document.querySelector('#guessField');

const guessSlot = document.querySelector('.guesses');

const remainingGuesses = document.querySelector('.lastResult');

const lowOrHi = document.querySelector('.lowOrHi');

const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuesses = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // guess is valid or not
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number more than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuesses === 10) {
      displayGuess(guess);
      displayMessage(`Game Over, Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // Checking of whether the number is equal to random value, higher or lower
  if (guess === randomNumber) {
    displayMessage('You guessed it right');
    endGame();
  } else if (guess < randomNumber) {
    displayMessage('Number is TOOO low');
  } else if (guess > randomNumber) {
    displayMessage('Number is TOOO high');
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += ` ${guess} `;
  numGuesses++;
  remainingGuesses.innerHTML = `${11 - numGuesses}`;
}

function displayMessage(message) {
  // interaction with DOM
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', ''); // Key-value pair
  p.classList.add(`button`);
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGame = document.querySelector('#game');
  newGame.addEventListener('click', function (e) {
    e.preventDefault();
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuesses = 1;
    guessSlot.innerHTML = '';
    remainingGuesses.innerHTML = `${11 - numGuesses}`;
    userInput.removeAttribute('disabled');

    playGame = true;
  });
}
```