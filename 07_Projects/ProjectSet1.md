# Project related to DOM

## Project Link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-epgye4?file=1-colorChanger%2Findex.html)

# Solution Code

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