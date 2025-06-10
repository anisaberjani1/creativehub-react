// 2. In another file, import the add function and use it to add two numbers. Print the result
// to the console

// import { add } from "./exportModule.js";


// 4. In that module, set one of the functions (e.g., add) as the default export. Demonstrate
// how to import it in app.js.
import add from "./exportModule.js";
import { multiply as mul } from "./exportModule.js";

console.log("The add function: ", add(2,4))


// 5. Write a program that imports the multiply function but renames it to mul when
// importing. Use the renamed function to multiply two numbers and print the result.

console.log('Multiplying two numbers', mul(4,5))
