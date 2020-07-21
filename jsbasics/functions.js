/* A function is a set of statements that perfoms a task or calculates a value*/
//Performing a task
function greet() {
  //inside the curly brackets is what we refer to as the body of the function.
  console.log('Hello World');
} //function declarations don't need semi-colons at the end.

greet(); // statements are always ended in semi-colon.

function Hi(name /*parameter*/) {
  console.log('Hello '.concat(name)); // .concat can be used when joining strings.
}
//name is only meaningful inside of this function and it will not be accessible outside of this function.

Hi('Tinashe'); // Tinashe is an argument to the Hi function and name is a parameter to the Hi function.
/* A parameter is what we have during the declaration of the function and an argument is the actual value supplied for that paramenter*/

Hi('Mary');

function person(name, lastName /*A function can have two paramenters*/) {
  console.log(name + ' ' + lastName);
}

console.log(person('Tinashe', 'Kupfuwa'));

//Calculating  a Value 
function square(number) {
  return number * number;
}

console.log(square(4)); //parenthesis indicate a function e.g console.log() is a function.