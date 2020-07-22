/*We use operators with variables and constants to create Expressions
and with these expressions we can implement Algorithms */

/*Type of operators we have in Javascript

1.Arithmetic operators
2.Assignment operators
3.Comparison operaators
4.Logical operators
5.Bitwise operators

*/

//Arithmetic operators

let x = 10;
let y = 3;

console.log(x + y); /*Addition operator.These take two operands and produce a a value.(x+y) is referred to as an expression in Javascript. An expression is something that produces a value*/
console.log(x - y); //subtraction
console.log(x * y);//multiplication
console.log(x / y);//division
console.log(x % y);// remainder of divion
console.log(x ** y);//to the power.x to the power of y. (exponiantion).

//increment operators (++)
console.log(x);
//console.log(++x); //if we put the increment operator before x, the value of x will be incremented by 1 first and then we see that on the console

console.log(x++); // if we put the increment operator after the variable, we will see x on the console first, then the value after increment.
console.log(x); // now we can see the result of the incrementation.

//Decrement operators (--)
// console.log(--x);

console.log(x--);
console.log(x);

//Assignment operator.

y = 5; // the equal sign(=) is called an assignment operator in programming.

y += 4; // this is the same with y = y + 4

y *= 4;// thi is the same with y = y * 4;

//Compariosn operators

// We  use comparion operators for comapring and the results are (Boolean)either true or false.

x = 1;
// These are also refered to as Relational Operaters
console.log(x > 0);// true
console.log(x >= 0); // greater than or equal to : true
console.log(x < 0); // less than : false
console.log(x <= 0); // less than or equal to : true

// Equality Operators
console.log(x === 1); // strictly equal to : true
console.log(x !== 1); // not equal to : false

//EQUALITY OPERATOR

console.log(1 === 1); //Strict equality operator ,(These take into consideration, the data type and the value)
console.log(1 == 1); //Loose equality operator, (These only care about the value)

console.log(1 === 1); //false
console.log('1' == 1);//true

//Ternary Operator

//if a customer has more than 100points, there are a 'gold' customer otherwise, there are a 'silver' customer

let points = 110;
let type = points > 100 ? 'gold' : 'silver'; //this is the ternary or conditional operator.
console.log(type);

//LOGICAL OPERATOR (used when making decisons on multiple conditions)
//in Js we have Logical AND , Logical OR and Logical NOT

//LOGICAL AND  (&&), returns  true if both operands are true.

console.log(true && true); //true
console.log(true && false); //false

let highIncome = true;
let goodCreditScore = true;

let eligibleForLoan = highIncome && goodCreditScore; //use of the AND operand.
console.log(eligibleForLoan); //true


//LOGICAL OR (||) returns true if one of the operand is true.

highIncome = true;
goodCreditScore = true;

eligibleForLoan = highIncome || goodCreditScore; //use of the LOGICAL OR operand.
console.log(eligibleForLoan); //true

highIncome = true;
goodCreditScore = false;

eligibleForLoan = highIncome || goodCreditScore; //use of the LOGICAL OR operand.
console.log(eligibleForLoan); //true

//NOT OPERAND (!)

highIncome = false;
goodCreditScore = false;

let applicationRefused = !eligibleForLoan;
console.log('Eligible for loan:' + applicationRefused);
console.log('Application has been denied', eligibleForLoan);

/*Falsy
undefined
null
0
false
''
NaN
*/

//Anything that is not Falsy is Truthy

//Short-circuiting 

/*
false || 1 || 2 || 3||

This is called short-circuiting , asevery value after one is ignored.

*/

let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor); //red if theres a color input  and blue if there is no userColor.


//Bitwise Operators.

//1 = 00000001
//1 = 00000011

console.log(1 | 2); //Bitwise OR
console.log(1 & 2); //Bitwise AND

//Read ,Write, Execute 
//00000100
//00000010
//00000001

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;

myPermission = myPermission | readPermission | writePermission;

console.log(myPermission);

let message = (myPermission & readPermission) ? 'yes' : 'no';

console.log(message);

//Operator Precedence.

x = 2 + 3 + 4;

console.log(x) // BODMAS.

//Use parenthesis to determine how operators are applied.

// x = (2+3)+4;


//EXERCISE

let a = 'red';
let b = 'blue';

console.log(a);
console.log(b);


