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
let id: number = 5;
// id = "5"; // error
let company: string = 'Traversy Media';
let isPublished: boolean = true;
let x: any = 'Hello';
console.log('ID:', id);

// Arrays
let ids: number[] = [1, 2, 3, 4, 5];
// ids.push('hello'); // error
// let ids2: number[] = [1, 2, 3, 4, 5, true]; // error
let arr: any[] = [1, true, 'Hello'];

// Tuple
let person: [number, string, boolean] = [1, 'Brad', true];
// let person: [number, string, boolean] = [1, 'Brad', 3]; // error
// let person: [number, string, boolean] = [1, true, 'Brad']; // error

// Tuple array
let employee: [number, string][];
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
let prodID: string | number = 22;
prodID = '22';

// Enum - enumerated type
enum Direction1 {
    Up, // By default, the value is 0
    Down,
    Left,
    Right,
}
enum Direction2 {
    Up = 1,
    Down,
    Left,
    Right,
}
enum Direction3 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}
console.log('Direction1.Up:', Direction1.Up);
console.log('Direction1.Down:', Direction1.Down);
console.log('Direction2.Up:', Direction2.Up);
console.log('Direction2.Down:', Direction2.Down);

// Objects
type User = {
    id: number;
    name: string;
};
const user: User = {
    id: 1,
    name: 'John',
};
// user = {
//     id: '1', // error
//     name: 'John',
// };

// Type Assertion
let custID: any = 1;
let customerID = <number>custID;
// customerID = true; // error
let customerID2 = custID as number;

// Functions
// function addNum(x, y) { // error: arguments need types
//     return x + y;
// }
function addNum(x: number, y: number): number /*return type*/ {
    return x + y;
}

// Void type
console.log(`addNum(3,4):${addNum(3, 4)}`);
function log(message: string | number): void {
    console.log(message);
}
log('log(message)');
// log(true); //error

// Interfaces
interface UserInterface {
    id: number;
    name: string;
}
const user2: UserInterface = {
    id: 1,
    name: 'John',
};
// const user2: UserInterface = {
//     id: '1', // error
//     name: 'John',
// };

// Type vs Interface
// Type can be used with Primitives and Unions
type Point = number | string;
const p1: Point = 1;
// interface PointInterface = number | string; // error
// const p2: PointInterface = 1;
// In case of objects it's preferable to use interfaces (maybe?)

interface UserInterface3 {
    id: number;
    name: string;
    age: number;
}
// const user3: UserInterface3 = { // error 'age' is missing
//     id: 1,
//     name: 'John',
// };
const user3: UserInterface3 = {
    id: 1,
    name: 'John',
    age: 45,
};

// optional property: age
interface UserInterface4 {
    id: number;
    name: string;
    age?: number;
}
const user4: UserInterface4 = {
    id: 1,
    name: 'John',
};
user4.id = 4;

// readonly property: id
interface UserInterface5 {
    readonly id: number;
    name: string;
}
const user5: UserInterface5 = {
    id: 1,
    name: 'John',
};
// user5.id = 4; // error

// Interface for function
interface MathFunc {
    (x: number, y: number): number;
}
const add: MathFunc = (x: number, y: number): number => x + y;
// const add: MathFunc = (x: number, y: string): number => x + y; // error
const add2: MathFunc = (x, y) => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

// Classes
class Person {
    id: number;
    name: string;
    age: number;
    constructor(id: number, name: string, age: number) {
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
    public id: number; // id was public by default
    private name: string;
    protected age: number;
    constructor(id: number, name: string, age: number) {
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

// Interface for the Person class
interface PersonInterface {
    id: number;
    name: string;
    register(): string;
}
// Implement PersonInterface on Person3 class
class Person3 implements PersonInterface {
    id: number;
    name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    register(): string {
        return `${this.name} is now registered.`;
    }
}

// Subclasses
class Employee extends Person2 {
    position: string;
    constructor(id: number, name: string, age: number, position: string) {
        super(id, name, age);
        this.position = position;
    }
}

const emp = new Employee(3, 'Shawn', 35, 'Developer');
console.log(emp);

// Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}
let numArray = getArray<number>([1, 2, 3, 4]);
let stringArray = getArray<string>(['Brad', 'John', 'Jill']);
// numArray.push('Monday'); // error
