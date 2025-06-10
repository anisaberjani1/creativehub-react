// 1. Write a module that contains a function called add which takes two numbers as
// parameters and returns their sum. Export this function from the module.

export default function add(num1,num2){
    return num1 + num2;
}

// 3. Modify the first module to include additional functions:
//  subtract, multiply, and divide

export function substract(num1,num2){
    return num1 - num2;
}

export function multiply(num1,num2){
    return num1 * num2;
}

export function divide(num1,num2){
    return num1 / num2;
}