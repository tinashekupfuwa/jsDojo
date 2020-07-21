/*
if (userName.toLowerCase() === 'tinashe') {
  console.log(`welcome ${userName}`);
} else {

  console.log(`Wrong User`);
}
*/
//Conditional statement <> >= <= != !== !=== == ===

// && and Operator e.g if (20 < age && age < 30) used when both conditions need to pass
// || or operator e,g if (agree === 'yes' || agree === 'y') used when only one condition is required to go through
// functions have a semi-colon after the brances. {};

function userMessage() {

  userName = prompt(`What is your Name?`)

  document.write(`<h1>Hi ${userName}</h1>`);

  let messages = `Hi ${userName} , we hope you are prepared for this journey`;
  messages += ` ${userName} this is just another suprise for ${userName}`;

  // let passphrase = (messages.length);

  let randomNumber = Math.floor(Math.random() * 8) + 1;

  console.log(`${userName} ${randomNumber}`);

};

// console.log(userMessage());

//LOOPS

function rnFigure() {
  return Math.random(Math.floor) * 6;
}

let testCondition = 0;

while (testCondition < 10) {
  console.log(rnFigure());
  testCondition++;
}

for (i = 0; i < 10; i++) {
  document.write(`<h2>${rnFigure()}</h2>`);
}

//do loops

/*do {

} while ();
*/

//Arrays

/*
let userCatalog = [
  vinyl,
  cd,
  tape,
  VHS];
*/

//

let userCatalog = {
  firstname: 'Tinashe',
  surname: 'Kupfuwa',
  age: 29
}

console.log(typeof (userCatalog));

console.log(userCatalog.firstname);

