const myButton = document.getElementById('myButton');
const myHeading = document.getElementById('myHeading');
const myTextinput = document.getElementById('myTextInput');

myButton.addEventListener('click', () => {
  myHeading.style.color = myTextInput.value;
});

