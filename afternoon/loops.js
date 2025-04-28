//For Loop
// for (initialization; condition; increment/decrement){
//     code execution
// }

for (let x = 0; x<=15; x++){
    // console.log(`Iteration number ${x}`);
}

//While Loop
let count = 0;

while(count < 10){
    // console.log(`Count: ${count}`);
    count++
}


//Do...while Loop
let num = 10

do{
    // console.log(`number: ${num}`);
    num -= 2;
}while (num > 0)


//For...of Loop
const fruits = ["Banana", "Orange", "Mango", "Berries", "Apple"];


for (const fruit of fruits){
    // console.log(fruit);
}


const name = "Okware";

for (const letter of name){
    // console.log(letter);
}



//For...in Loop
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    job: "Developer"
  };

  const property = 'lastName';


    console.log(`${property}: ${person[property]}`)
    // console.log(`${person.lastName}`)
