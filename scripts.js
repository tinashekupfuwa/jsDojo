let userName = prompt(`What is your Name?`)

document.write(`<h1>Hi ${userName}</h1>`);

let messages = `Hi ${userName} , we hope you are prepared for this journey`;
messages += ` ${userName} this is just another suprise for ${userName}`;

let passphrase = (messages.length);

let randomNumber = Math.floor(Math.random() * 8) + 1;

console.log(`${userName} ${randomNumber}`);