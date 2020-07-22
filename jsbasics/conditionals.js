/* In JavaScript there are two types of statements

1.if..else statements
2.Switch..case statements

1.if hour is between 6am  and 12pm:Good morning!
2.if it is between 12pm and 6pm: Good afternoon!
3.otherwise Good evening!


if (condition) statement;
// if there's a lot of code in between the statements, we put braces.


if(condition){
  statement
}else if (anotherCondition){
  statement
} esle if(anotherCondition){
  statement
}else
statement;


*/
let hour = 24;

if (hour >= 6 && hour < 12)
  console.log('Good Morning!');
else if (hour >= 12 && hour < 18)
  console.log('Good afternoon');
else
  console.log('Good Evening!');


//Switch & Case

let role = 'guest';

switch (role) {
  case 'guest':
    console.log('Guest User');
    break; //break needs to be added to jump out of the switch block.

  case 'moderator':
    console.log('Moderator');
    break;

  default:
    console.log('Uknown User');
}

if (role === 'guest') console.log('Guest User');
else if (role === 'moderator') console.log('Moderator');
else console.log('Uknown User');



