# Project related to DOM

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