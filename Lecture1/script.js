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


