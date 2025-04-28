// For Loop
// For Loop Components

// for (initialization; condition; increment/decrement){
//  code to execute
// }

//Basic For Loop
for (let i=0; i<=5; i++){
    // console.log(`Iteration ${i}`);
}

//While Loop
let count = 0;

while (count <= 5){
    // console.log(`Count: ${count}`);
    count++
}


//Do...While Loop
let num = 10;

do{
    // console.log(`Number: ${num}`);
    num -= 2;
}while(num > 0);


//For...of Loop
const fruits  = ["Apple", "Bananas", "Oranges", "Mango"];

for (const fruit of fruits){
    // console.log(fruit);
}



const name = "Dedan";

for (const letter of name){
    // console.log(letter);
}

//For...in Loop
const  person = {
    firstName: "john",
    lastName: "doe",
    age: 30,
    isStudent: false
};

for (const property in person){
    console.log(`${property}: ${person[property]}`)
}