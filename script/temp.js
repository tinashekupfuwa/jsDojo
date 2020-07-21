let currentTime = new Date();
let localstring = currentTime.toString();
let utTime = currentTime.toUTCString();



document.write(`${currentTime}<br>`)
document.write(`${localstring}<br>`);
document.write(`${utTime}<br>`);

document.write(`You have ${currentTime.getHours()} hours and ${currentTime.getMinutes()}minutes and ${currentTime.getMinutes()}seconds`);


const function multiply(x, y) => {
  return x * y;
}


const multiply = (x, y) => x * y;