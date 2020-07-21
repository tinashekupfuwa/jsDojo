const myButton = document.getElementById('myButton');
// const myHeading = document.getElementById('myHeading');
const myTextinput = document.getElementById('myTextInput');
const myHeading = document.getElementsByTagName('h1')[0];

myButton.addEventListener('click', () => {
  myHeading.style.color = myTextInput.value;
});

