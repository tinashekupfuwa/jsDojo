/*

JAVASCRIPT has a number of loops

1.for loops
2.while loops
3.do...while loops
4.for...in loops
5.for...of loops

All these loops do the same thing, they differ in how they start.
*/

//FOR LOOP/////////////////////////////////////////////////////////////////////
/*

for (initialExpression; condition; incrementExpression)
  statement;
*/

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
} //loop will execute as long as condition is true and after one loop , there is an increment on 

//While loop/////////////////////////////////////////////////////////////////////

// in while loops , the initial expression(loop variable) is declared externally.

let i = 0;

while (i <= 5) {
  if (i % 2 === 0) console.log(i);
  i++;
}

// do-while . These conditions always execute once, even if the condition results in a false.

let j = 0;

do {
  if (j % 2 === 0) console.log(j);
  j++;
} while (j <= 5);


