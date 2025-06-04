//---------------Variables in Javascript-----------------

//1.Create a simple profile using variables to store a person’s name, age, job, and a fun fact.

const fullName = "Anisa Berjani";
let age = 22;
let job = "Web Developer";
const funFact = "First class with react";

console.log(`${fullName} is ${age},and is a ${job}.Here is a fun fact: ${funFact}`)

//2.Write a program that converts temperatures from Celsius to Fahrenheit. 
//Choose a
// suitable type of variable for the conversion factor and the Celsius temperature.
// Display the result of the conversion and then modify the Celsius value to perform
// another conversion.

let celsius = 20;
let fahrenheit = (celsius * 9/5) + 32;
console.log(`${celsius} to convert in fahrenheit is: ${fahrenheit}`)


//3. Create a simple inventory system for a store that tracks product quantities. Choose the
// appropriate variable types for the product quantities and a fixed tax rate. Update the
// product quantities as if customers are buying products and print the results

let bananas = 70;
const taxRate = 0.03;

console.log(`Bananas in inventory: ${bananas}`)
bananas -= 4;

console.log(`After purchase - Bananas:${bananas} - Tax Rate: ${taxRate *100}%`)

// 4. Write a program that stores a list of your favorite things. Decide which favorites are
// likely to change and which are not. Update one of the values during the program and
// print the list before and after the change.

let favouriteDrink = "Coca Cola";
const favouriteFood = "Pizza";

console.log(`Favourite Drink is ${favouriteDrink} and my favourite food is: ${favouriteFood}`)
favouriteDrink = "Sprite";

console.log(`My favourite drink now is ${favouriteDrink}`)

//---------------Types in Javascript-----------------

//1.Write a program that demonstrates string concatenation and type coercion in
// JavaScript. Start by creating variables with different data types, including strings and
// numbers. Then, try to combine them in different ways using both the + operator and
// template literals.

const academy = "Frontend"
const duration = 9
const certification = true
const rating = 4.9

const plusOperator = "Academy: " + academy + ", duration: " + duration + "months, Certification: " + certification + ", Rating: " + rating;
console.log('Using + operator :',plusOperator)

const tempLiterals = `Academy: ${academy} with a duration of ${duration} months, with a certification ${certification}, has a rating of ${rating}`;
console.log(`Using template literals : ${tempLiterals}`)

//coercion examples
console.log("5" + 5)
console.log(10 + 5 + " apples")


// Create a program that performs different operations on various data types. Experiment
// with how JavaScript handles arithmetic, string concatenation, and boolean logic when
// working with different types of values. You can also demonstrate what happens when
// you try to add or subtract values of incompatible types.

let a = 7
let b = 3

//Arithmetic
console.log("a + b =", a + b);     
console.log("a - b =", a - b);     
console.log("a * b =", a * b);     
console.log("a / b =", a / b);   

let firstName = "Anisa"
let lastName = "Berjani"

console.log("Full Name:", firstName + " " + lastName);

//String + number
console.log("Age: " + 20);      
console.log(20 + " years old");

//Number + boolean
console.log(1 + true);  
console.log(5 + false); 

let isStudent = true;
let isTeacher = false;

//Boolean
console.log('isStudent && isTeacher', isStudent && isTeacher)
console.log('isStudent || isTeacher', isStudent || isTeacher)
console.log('!isStudent', !isStudent)

//extras
console.log("10" - 5); 
console.log("10" + 5);           
console.log("hello" - 3);        
console.log(true + "test");      
console.log(undefined + 1);      
console.log(null + 1);


