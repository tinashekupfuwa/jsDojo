/*
1.Variables can't use reserved keywords
2.Should be meaningful and descriptive names
3.Variables can't start with a number
4.Variable names can't contain a space orhyphen(-)
5.use camel Notation
6.Varibales are case sensitive
7.You can declare multiple variables on one line separated by a coma.

*/

//Constants
//If you dont want to change a value, use constants.

const interestRate = 0.3;

console.log(interestRate);

/* Javascript has 2 type of variables : Primitives/Value Types and Reference Types.
On primitives we have String,Number,Boolean,Undefined and Null.
*/

let name = 'Tinashe'; // String-literal
let age = '30'; // Number -literal
let isApproved = true // Boolean literal
let firstName = undefined;
let lastName = null; // used when we want to clear the value of a variable

/* Javascript is a dynamic language. There are two type of langauges Dynamic and Static.
*/


//typeof operator

console.log(typeof name);
console.log(typeof age);
console.log(typeof isApproved);
console.log(typeof firstName);// undefined is  a type of value and is a value.
console.log(typeof lastName);

//Reference typess of Variables are Object, Array, Function

let person = {
  name: 'Tinashe',
  age: 30
}; // Object literal

console.log(person);

//There are two ways to work with these properties

//.dont notation.
person.name = 'Tinashe Kupfuwa';
person.age = '29';

//bracket Notation[]

person['name'] = 'Elizabeth';
person[age] = 28;

