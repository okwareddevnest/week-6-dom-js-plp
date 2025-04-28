// var - Older way, function scoped (Try to avoid this one for modern codebase)
var age = 25; // = is called assignment

// let - Block scoped, values can be changed, mutable
let name = "John";

// const - block scoped, values cannot be changed, Immutable
const PI = 3.14159;


// 1. Primitive Data Types
//String - Text Values
let greeting = "hello wolrd";
let backticks = `You can embed ${greeting} with template literals`;

//Number - Integers and floating point
let integer = 42;
let decimal = 3.14;
let negative = -10;

//Boolean - true and false
let isLoggedIn = true;
let hasPermission =- false;

//Undefined - Variables declared but not assigned any value(s)
let plp;
// console.log(plp);

//Null - intentional absence of any value
let employeeData = null;

//Symbol - unique and immutable values 
let uniqueId = Symbol('id');


//2. Reference Data Types
// Object - Collection of Key-value pairs
let person = {
    firstName: "john",
    lastName: "doe",
    age: 30,
    isStudent: false
};

//Accessing Object Property
// console.log(person.firstName);
// console.log(person["age"]);

// Arrays - ordered list of values
let colors = ["red", "blue", "orange"]
let mixed = [1, "hello", true, {name: "object"}]

// console.log(mixed[2])


// Type Conversion
// STring to Number
let numStr = "42";
let num = Number(numStr); // Explicit
let numImplicit = numStr * 1; // Implicit

// console.log(numImplicit)

// Falsy Values in Javascript
// - false
// - 0
// - "" (Empty String)
// - null
// - undefined
// - NaN (Not a Number)
