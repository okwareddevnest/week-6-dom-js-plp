//For Loop
// for (initialization; condition; increment/decrement){
//  code execution
//}

for (let a = 1; a<=200; a+=2){
    // console.log(`Counter Num: ${a}`);
}

//While Loop
let count = 2;

while(count <= 10){
    // console.log(`Counting Number: ${count}`);
    count++;
}

//Do While Loop
let num = 10;

do{
    // console.log(`Number: ${num}`);
    num-=2;
}while(num > 0)

//For...of Loop
const fruits = ["Apple", "Banana", "Mango", "Cherry", "Orange"];

for (const fruit of fruits){
    // console.log(fruit);
}

const greeting = "Hello";

for (const char of greeting){
    // console.log(char)
}

//For...in Loop
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    job: "Developer"
  };

for (const property in person){
    console.log(`${property}: ${person[property]}`);
}