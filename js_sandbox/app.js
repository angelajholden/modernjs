// console.log("Hello World");

// console.log("123");

// console.log(true);

// //var greeting = "hello";

// console.log(greeting);

// console.log([1, 2, 3, 4]);

// console.log({ a: 1, b: 2 });

// //returns data in a table
// console.table({ a: 1, b: 2 });

// console.error("this is an error");

// console.warn("this is a warning");

// //returns a time of how long it took to run
// console.time("hello");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.timeEnd("hello");

// //clears the console
// console.clear();

//Initialize a variable

//set it to nothing
/*
var greeting;
console.log(greeting); //returns undefined
greeting = "hello";
console.log(greeting);
*/

//the only characters that can be inside a variable
//letters, numbers, _, $
//cannot start with a number

// //multi word vars
// var firstName = "Heidi"; //camel case
// var first_name = "Angela"; //underscore
// var FirstName = "Bree"; //pascal case

// //Let (just like var)
// let name; //initialize
// name = "John Doe";
// console.log(name);
// name = "Steve Smith"; //reassign
// console.log(name);

//Const (constant - can't be reassigned)
// const name = "John";
// console.log(name);
//can't reassign
// name = "Sara";
//Have to assign a value, can't initialize
// const greeting;

//can change the const data - mutate the data
//just can't change the variable
const person = {
    name: "Heidi",
    age: "5",
};

console.log(person.name);

person.name = "Risky"; //reassign the data, not the variable

console.log(person.name);

const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers);
