//Objects are collections of key:value pairs 
// A function that is part of an object is called a method.
// Camel Notation : oneTwoThreeFour
//Pascal Notation : OneTwoThreeFourFive

/* 

let radius =1;
let x = 1;
let y =1;

- This can be simplified using an object, all of them are related.

*/
//Object-Oriented Programming - OOP
const circle = { //Object literal
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function () {
        console.log('draw');
    }
}; //The purpose of an object is to group related variables and functions.

circle.draw(); // Calling the draw method of the circle object.


// Factory Functions. (camelNotation)

const createCircle = (radius) => {
    return { //Object literal
        radius,
        draw() {
            console.log('draw');
        }
    };
}
const circle1 = createCircle(3);

console.log(circle1);

//Constructor Functions (Pasc)al Notation

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw')
    };
};

const circle2 = new Circle(5);

console.log(circle2)

//Objects are dynamic, meaning you can add new properties.

/* You can also delete some properties of an object e.g

delete circle.radius;
delete cricle.draw;

*/

//Constructor Property
/* Every object has a property called constructor and that references the function that was used to create the constructor.
circle2.constructor;

*/

// Primetives are copied by Value
//Objects are copied by Reference


//Enumerating objects.

let myHouse = {
    kitchen: true,
    livingRoom: true,
    dining: true,
    rooms: 4,
    neighbourHood: 'Hillside'

};

for (let money in myHouse) {
    // console.log(money);
    console.log(myHouse[money])
}

// for (let key of myHouse) {
//     console.log(key)
// }; //This will result in error, as objects are not iterable like Arrays and maps.Objects are not iterable.

//Howe ever we can use the object.keys and this will get all the keys and return an array.

for (let key of Object.keys(myHouse)) {
    console.log(key)
}; // returns only keys as an Array

for (let entry of Object.entries(myHouse)) {
    console.log(entry)
}; //Return properties and keys as an Array

//.entry (entries) and .key(keys) is a way of getting keys and properties of an object 
// if (... in ....) is used to check of a property exists in an object.

if ('kitchen' in myHouse) console.log('yes');
if ('rooms' in myHouse) console.log('yes')


//Cloning an object

const another = {};

for (let key in circle)
    another[key] = circle[key];
console.log(another);

// We can use Es6 to do the above line easier.

const another2 = Object.assign({} /*The Target Object*/ , myHouse /*The Source Object*/ ) //the target object be empty or non empty. 

const another3 = Object.assign({
    color: 'blue',
    concrete: true
}, myHouse); //2nd way of cloning objects

const another4 = {
    ...myHouse
};


console.log(another2);
console.log(another3);
console.log(another4);

// Garbage collection (Memory allocator and Memory deallocator) runs in the background in Javascript.

///String

/*Javascript has two types of strings and that is 

-string primitive
-string object

*/

//String Primitive

const message = 'hello';

//String Object

const anotherString = new String('hi');

console.log(typeof (message));
console.log(typeof (anotherString));