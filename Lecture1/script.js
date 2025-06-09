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


//2.Create a program that performs different operations on various data types. Experiment
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

//---------- Conditonals and Operators in Javascript ------------

// 1. Write a program that checks whether a person is old enough to vote. Use an if-else
// statement to compare the person's age with the voting age (18). Depending on the
// result, print whether the person is eligible to vote or not.

const personAge = 19

if(personAge >= 18){
    console.log('You are eligible to vote')
}else{
    console.log('You are not eligible to vote')
}

// 2. Write a program that checks a student’s grade and assigns a letter grade based on their
// score using if, else if, and else. Students should input their score, and the
// program will output the corresponding grade.

const studentScore = 88

if(studentScore>= 90 && studentScore<=100){
    console.log(`Score is ${studentScore} and the grade is A`)
}
else if(studentScore>= 80 && studentScore<=89){
    console.log(`Score is ${studentScore} and the grade is B`)
}
else if(studentScore>= 70 && studentScore<=79){
    console.log(`Score is ${studentScore} and the grade is C`)
}
else if(studentScore>= 60 && studentScore<=69){
    console.log(`Score is ${studentScore} and the grade is D`)
}
else if(studentScore>= 50 && studentScore<=59){
    console.log(`Score is ${studentScore} and the grade is E`)
}else{
    console.log(`Grade F`)
}

// 3. Write a program that determines if a person is eligible for a driving license. First,
// check if the person is old enough (18 or older). If they are, check if they passed a
// driving test. Use nested conditionals (if inside another if) to handle this scenario.

if(personAge >= 18){
    const drivingTest = true;
    if(drivingTest){
        console.log(`Person of age ${personAge} has passed the driving test`)
    }else{
        console.log(`Person of age ${personAge} has not passed the driving test`)        
    }
}else{
    console.log('Person is not eligible for a driving license')
}

// 4. Create a program that asks for the day of the week and prints whether it's a weekday
// or the weekend using a switch statement.
const day = 'Saturday'

switch (day) {
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
        console.log(`${day} is a weekday`)
        break;
    case 'Saturday':
    case 'Sunday':
        console.log(`${day} is the weekend`)
        break;
    default:
        console.log(`${day} is not a valid day`)
        break;
}

// 5. Write a program that assigns roles based on a person's input. Use a switch statement
// to assign a role to a user (e.g., "admin", "editor", "viewer"). Include a default case for
// any invalid role input.

const userRole = 'viewer';

switch (userRole.toLowerCase()) {
    case 'admin':
    case 'editor':
    case 'viewer':
        console.log(`User has ${userRole} privileges`)
        break;
    default:
        console.log('Invalid role')
        break;
}

//----------------Looping in Javascript-------------------

// 1. Write a program that prints the numbers from 1 to 10 using a for loop
for(let i=1; i<=10; i++){
    console.log(i)
}

// 2. Create a program that iterates over an array of colors and prints each color to the
// console using a for loop.

const colors = ['red','black','yellow', 'blue', 'white']

for(let i=0; i<colors.length; i++){
    console.log(colors[i])
}

// 3. Write a program that prints a multiplication table for numbers 1 through 5 using
// nested loops.
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log('');
}

// 4. Write a program that finds the first number divisible by 7 between 1 and 50. Use a for
// loop and the break statement to exit the loop as soon as a number is found.

for(let i=1; i<=50; i++){
    if(i % 7 === 0){
        console.log(`first number divisible by 7 between 1 and 50 is ${i}`)
        break;
    }
}

//------------------Functions-----------------------

// 1. Create a simple function called greet that prints a welcome message to the console.
// Then, call the function multiple times to demonstrate how functions can be reused.

function greet(){
    console.log('Welcome from the greet function')
}

greet()
greet()
greet()

// 2. Write a function called multiply that takes two parameters (numbers) and prints their
// product. Call the function with different arguments to show how parameters work.

function multiply(num1,num2){
    const product  = num1 * num2;

    return product
}
console.log(multiply(3,5))
console.log(multiply(5,7))
console.log(multiply(8,9))

// 3. Write a function called add that accepts two parameters, calculates their sum, and
// returns the result. Call the function and store the return value in a variable to
// demonstrate the difference between returning and non-returning functions.

function add(num1,num2){
    const sum = num1+num2;
    return sum
}
//non-returning function
add(2,3)
//returning a function
const sum = add(2,4)
console.log(`Returned sum: ${sum}`)


// 4. Write two functions: one that simply prints the result of multiplying two numbers, and
// another that returns the result of multiplying two numbers. Call both functions and
// explain the difference between returning a value and just printing it.

function printMultiply(num1,num2){
    console.log(`Multiplying two numbers: ${num1 * num2}`)
}
function returnMultiply(num1,num2){
    return num1 * num2
}

//Printing the result
printMultiply(3,5)

//Returning the result
const result = returnMultiply(2,3)
console.log(`Returning the multiply result: ${result}`);

// 5. Convert a regular function into an arrow function. Write a function called square that
// accepts a number and returns its square. First, write it as a regular function, then
// convert it to an arrow function

function square(number){
    return number*number
}

const squareArrowFunc = (number) => {
    return number * number
}

console.log(`Regular function: ${square(4)}`)
console.log(`Arrow function: ${squareArrowFunc(5)}`)

// 6. Write a function called greetUser that accepts two parameters: name and greeting. Set
// the greeting parameter to a default value of "Hello" if it is not provided. Demonstrate
// how default parameters work by calling the function with and without passing the
// greeting argument.

function greetUser(name,greeting="Hello"){
    console.log(`Hi ${name}, ${greeting} and Welcome!`)
}

greetUser("Anisa")
greetUser("Anisa","Greetings")

// 7. Write a function called calculateTotalPrice that takes two parameters: price and
// quantity. The function should return the total price by multiplying these values. Then,
// call the function with different numbers to see how multiple arguments work.

function calculateTotalPrice(price,quantity){
    const totalPrice = price * quantity;
    return totalPrice;
}

console.log(`The total price is ${calculateTotalPrice(5,6)}`)
console.log(`The total price is ${calculateTotalPrice(7.4,2)}`)

// 8. Create an anonymous function that adds two numbers, and assign it to a variable
// called sum. Then, convert it into an arrow function. This will help students understand
// the difference between anonymous functions and arrow functions.

const sumAnonymous = function(num1,num2){
    return num1 + num2;
}

console.log(sumAnonymous(3,4))

const sumArrowFunction = (num1,num2) => num1 + num2

console.log(sumArrowFunction(4,4))

// 9. Write a function called gradeCalculator that accepts a score and returns a grade based
// on the score. The function should return different grades based on score ranges using
// multiple return statements.

function gradeCalculator(score){
    if(score >= 90 && score<=100){
        return 'A'
    }else if(score>=80 && score<= 89){
        return 'B'
    }
    else if(score>=70 && score<= 79){
        return 'C'
    }
    else if(score>=60 && score<= 69){
        return 'D'
    }
    else if(score>=50 && score<= 59){
        return 'E'
    }
    else if(score>=0 && score<= 49){
        return 'F'
    }else{
        return 'Write a score from 0-100'
    }
}

console.log(gradeCalculator(2))

//---------------------Callbacks----------------------

// 1. Write a simple function called processData that accepts another function (a callback)
// as an argument. The processData function should call the callback function after it
// prints "Processing data...".

function processData(callback){
    console.log('Processing data...')
    callback()
}

function afterProcessingData(){
    console.log('Data processed successfully!')
}

processData(afterProcessingData)

// 2. Create a function called calculate that accepts two numbers and a callback function.
// The callback function should handle different operations (such as adding, subtracting,
// or multiplying the numbers). Use this pattern to demonstrate how callbacks can
// handle dynamic functionality.

function calculate(num1,num2, callback){
    return callback(num1,num2)
}

function add(a,b){
    return a+b
}

function substract(a,b){
    return a-b
}

function multiply2(a,b){
    return a*b
}

console.log('Add function: ', calculate(7,3,add))
console.log('Substract function: ', calculate(7,3,substract))
console.log('Multiply function: ', calculate(7,3,multiply2))

// 3. Write a function called delayedMessage that uses the setTimeout function to simulate
// a delay. The function should accept a message and a callback function. After a delay
// of 2 seconds, it should call the callback and print the message.

function delayedMessage(message, callback){
    setTimeout(() => {
        console.log(message);
        callback();
    },2000)
}

function afterMessage(){
    console.log('After the delay')
}

delayedMessage("This message is delayed by 2 seconds", afterMessage)

// 4. Create a function fetchData that simulates fetching data from a server using a callback
// for success and another callback for failure. The function should randomly decide
// whether the request is successful or not, calling the appropriate callback.

function fetchData(onSuccess, onFailure) {
    setTimeout(() => {
        const success = Math.random() > 0.5; 

        if (success) {
            onSuccess({ data: "Here is your data!" });
        } else {
            onFailure("Failed to fetch data.");
        }
    }, 1000);
}

function handleSuccess(response) {
    console.log("Success:", response.data);
}
function handleFailure(error) {
    console.log("Error:", error);
}

fetchData(handleSuccess, handleFailure);