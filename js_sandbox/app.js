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
// const person = {
//     name: "Heidi",
//     age: "5",
// };

// console.log(person.name);

// person.name = "Risky"; //reassign the data, not the variable

// console.log(person.name);

// const numbers = [1, 2, 3, 4, 5];
// numbers.push(6);
// console.log(numbers);

//Primitive Data Types:
//Stored directly in the location the variable accesses
//Stored on the stack
/*
• String
• Number (no floats like Python)
• Boolean (true or false)
• Null (intentional empty value)
• Undefined (a variable that is not assigned)
• Symbols (ES6) 
*/

// //String example 'typeof'
// const name = "John Doe";
// console.log(typeof name);

// //Symbol
// const sym = Symbol();
// console.log(typeof sym);

//Reference Data Types:
//Accessed by reference
//Objects that are stored on the heap
//A pointer to a location in memory
/*
• Arrays
• Object Literals
• Functions
• Dates
• Anything else you can store ...
*/

// //Array
// const hobbies = ["woodworking", "piano"];

// //Object Literal
// const address = {
//     city: "Saint Paul",
//     state: "MN",
// };

// //Date
// const today = new Date();

// console.log(today);
// console.log(typeof today);

// //Type Conversion
// let val; //initialize variable, only works with let (not const)

//Convert to string, either method is okay
// val = String(555);
// val = (5).toString();
// val = true.toString();

// //Convert to number
// val = Number("5"); //5
// val = Number(true); //1
// val = Number(false); //0
// val = Number(null); //0
// val = Number("hello"); //NaN - Not a Number

// val = parseInt("100.30"); //100 (unless toFixed for a decimal point)
// val = parseFloat("100.30"); //100.3

// //Output
// console.log(val);
// console.log(typeof val);
// //console.log(val.length); //length only works on strings
// console.log(val.toFixed(2)); //only works on numbers, optional - can specify decimals

// //Math Operators
// const num1 = 100;
// const num2 = 50;
// let val;

// //Math Object
// val = Math.PI;
// val = Math.round(2.4); //2
// val = Math.ceil(2.4); //round up to 3
// val = Math.floor(2.8); //round down to 2
// val = Math.sqrt(64); //square root 8
// val = Math.abs(-3); //absolute value 3
// val = Math.pow(8, 2); //power of 64
// val = Math.min(2, 33, 4, 1, 55, 6, 3, -2); //get the minimum -2
// val = Math.max(2, 33, 4, 1, 55, 6, 3, -2); //get the maximum 55
// val = Math.random(); //returns decimal <1
// val = Math.random() * 20; //returns decimal between 0 - 19
// val = Math.random() * 20 + 1; //returns decimal between 0 - 20
// val = Math.floor(Math.random() * 20 + 1); // returns whole number between 0 - 20

// console.log(val);

const firstName = "Heidi";
const lastName = "Holden";
let val;

val = firstName + lastName; //squished together
val = firstName + " " + lastName; //adds a space

//Append
val = firstName + " ";
val += lastName;

//Escaping
val = "That's awesome, I can't wait";

//Length
val = firstName.length; //property, not a method, so don't need ()
//() are for methods, which are basically just functions
//counts the number of charaters in the string

//Concatenate
val = firstName.concat(" ", lastName);

//Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

//Index
val = firstName[2]; //gets the 3rd character of the string

//Index of
val = firstName.indexOf("i"); //finds the first 'i' and gives us the index (left to right)
val = firstName.lastIndexOf("i"); //finds the last 'i' and gives us the index (right to left)
//if searching for index that isn't there, default value is -1

//Character at
val = firstName.charAt("2"); //gets the 3rd character

//Get the last character
val = firstName.charAt(firstName.length - 1);

// console.log(val);

// SWITCH STATEMENTS

const color = "yellow";

switch (color) {
	case "red":
		// console.log("color is red");
		break;
	case "blue":
		// console.log("color is blue");
		break;
	default:
		// console.log("color is not red or blue");
		break;
}

switch (new Date().getDay()) {
	case 0:
		day = "Sunday";
		break;
	case 1:
		day = "Monday";
		break;
	case 2:
		day = "Tuesday";
		break;
	case 3:
		day = "Wednesday";
		break;
	case 4:
		day = "Thursday";
		break;
	case 5:
		day = "Friday";
		break;
	case 6:
		day = "Saturday";
		break;
}

// console.log(`Today is ${day}`);

// FUNCTION DECLARATIONS

// function greet() {
// 	return "Hello, world.";
// }

// console.log(greet());

// function greet(firstName, lastName) {
// 	return `Hello, ${firstName} ${lastName}`;
// }

// console.log(greet("Heidi", "Holden"));

// es6 way to set default values
function greet(firstName = "Heidi", lastName = "Holden") {
	// if (typeof firstName === "undefined") {
	// 	firstName = "Heidi";
	// } // es5
	// if (typeof lastName === "undefined") {
	// 	lastName = "Holden";
	// } // es5
	return `Hello, ${firstName} ${lastName}`;
}

// console.log(greet());

// FUNCTION EXPRESSIONS

// set default of 3
const square = function (x = 3) {
	return x * x;
};

// console.log(square(8));

// IMMEDIATELY INVOKEABLE FUNCTION EXPRESSIONS - IIFEs

(function () {
	console.log(`IIFE Ran...`);
})();

(function (name) {
	console.log(`Hello ${name}`);
})("Heidi");

// PROPERTY METHODS

const todo = {
	add: function () {
		console.log("Add todo...");
	},
	edit: function (id) {
		console.log(`Edit todo ${id}`);
	},
};

todo.add();
todo.edit(22);
