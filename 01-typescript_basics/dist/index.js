"use strict";
// TypeScript
//  - Superset of JavaScript
//  - Using types is completely optional
//  - Compiles down to regular JS
//  - Can be used with frontend JS as well as with backend Node.js
//  - Includes most features from ES6, ES7 (classes, arrow functions, etc)
//  - Types from 3rd party libraries can be added with type definitions.
// PROS                                     || CONS
//  - More Robust                           ||  - More Code To Write
//  - Easily Spot Bugs                      ||  - More To Learn
//  - Predictability                        ||  - Required Compilation
//  - Readability                           ||  - Not True Static Typing
//  - Popular                               ||
// Commands
// npm i -g typescript // install
// tsc index // compile index.ts
// tsc --init // initialize tscconfig.json
// tsc // compile project
// Basic types
let id = 5;
// id = "5"; // error
let company = 'Traversy Media';
let isPublished = true;
let x = 'Hello';
console.log('ID:', id);
// Arrays
let ids = [1, 2, 3, 4, 5];
// ids.push('hello'); // error
// let ids2: number[] = [1, 2, 3, 4, 5, true]; // error
let arr = [1, true, 'Hello'];
// Tuple
let person = [1, 'Brad', true];
// let person: [number, string, boolean] = [1, 'Brad', 3]; // error
// let person: [number, string, boolean] = [1, true, 'Brad']; // error
// Tuple array
let employee;
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill'],
];
// employee = [
//     [1, 'Brad'],
//     [2, 'John'],
//     [true, 'Jill'], // error
// ];
// Union
let prodID = 22;
prodID = '22';
// Enum - enumerated type
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 1] = "Up";
    Direction2[Direction2["Down"] = 2] = "Down";
    Direction2[Direction2["Left"] = 3] = "Left";
    Direction2[Direction2["Right"] = 4] = "Right";
})(Direction2 || (Direction2 = {}));
var Direction3;
(function (Direction3) {
    Direction3["Up"] = "Up";
    Direction3["Down"] = "Down";
    Direction3["Left"] = "Left";
    Direction3["Right"] = "Right";
})(Direction3 || (Direction3 = {}));
console.log('Direction1.Up:', Direction1.Up);
console.log('Direction1.Down:', Direction1.Down);
console.log('Direction2.Up:', Direction2.Up);
console.log('Direction2.Down:', Direction2.Down);
const user = {
    id: 1,
    name: 'John',
};
// user = {
//     id: '1', // error
//     name: 'John',
// };
// Type Assertion
let custID = 1;
let customerID = custID;
// customerID = true; // error
let customerID2 = custID;
// Functions
// function addNum(x, y) { // error: arguments need types
//     return x + y;
// }
function addNum(x, y) {
    return x + y;
}
// Void type
console.log(`addNum(3,4):${addNum(3, 4)}`);
function log(message) {
    console.log(message);
}
log('log(message)');
const user2 = {
    id: 1,
    name: 'John',
};
const p1 = 1;
// const user3: UserInterface3 = { // error 'age' is missing
//     id: 1,
//     name: 'John',
// };
const user3 = {
    id: 1,
    name: 'John',
    age: 45,
};
const user4 = {
    id: 1,
    name: 'John',
};
user4.id = 4;
const user5 = {
    id: 1,
    name: 'John',
};
const add = (x, y) => x + y;
// const add: MathFunc = (x: number, y: string): number => x + y; // error
const add2 = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    id;
    name;
    age;
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
        console.log(`Person constructor() ID: ${id} Name: ${name}`);
    }
}
const brad = new Person(1, 'Brad Traversy', 40);
const mike = new Person(2, 'Mike Jordan', 59);
console.log(brad, mike);
class Person2 {
    // properies are public by default, but can be changed to private or protected
    id; // id was public by default
    name;
    age;
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
        console.log(`Person2 constructor() ID: ${id} Name: ${name}`);
    }
    // extra functions
    register() {
        return `${this.name} is now registered.`;
    }
}
const brad2 = new Person2(1, 'Brad Traversy', 40);
console.log(brad2);
brad2.id = 2;
// brad2.name = "Mike Jordan"; // error: private - only accessible from within Person2 class
// brad2.age = 59; // error protected - only accessible from within Person2 class and its subclasses
console.log(brad2);
console.log(brad2.register());
// Implement PersonInterface on Person3 class
class Person3 {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered.`;
    }
}
// Subclasses
class Employee extends Person2 {
    position;
    constructor(id, name, age, position) {
        super(id, name, age);
        this.position = position;
    }
}
const emp = new Employee(3, 'Shawn', 35, 'Developer');
console.log(emp);
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let stringArray = getArray(['Brad', 'John', 'Jill']);
// numArray.push('Monday'); // error
