//------------------Destructuring,Rest and Spread Operators------------------

// 1. Write a program that uses array destructuring to extract the first two elements from an
// array of numbers. Print the extracted values.

const numbers = [3,5,8,9,2,4,7];

const [first, second] = numbers;

console.log(first)
console.log(second)

// 2. Create an object representing a book with properties: title, author, and year. Use
// object destructuring to extract the title and author, and print them.

const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
}

const {title, author} = book;

console.log(title)
console.log(author)

// 3. Modify the previous assignment to include default values for title and publisher when
// destructuring. If the publisher property is not available in the object, it should default
// to "Unknown".

const {publisher = "Unknown"} = book;

console.log(publisher)

// 4. Create a function named sum that uses the rest operator to accept any number of
// arguments and returns their sum. Call this function with different sets of numbers.

function sum(...nums){
    return nums.reduce((total,num) => total + num, 0)
}

console.log(sum(3,6,8))


// 5. Write a program that creates two arrays and uses the spread operator to merge them
// into a new array. Print the new array.

const even = [2,4,6,8]
const odd = [1,3,5,7]

const mergedNums = [...odd, ...even]

console.log(mergedNums)

// 6. Create two objects representing a person and a contact. Use the spread operator to
// create a new object that combines both. Print the new object.

const person = {
    name: "Anisa",
    age: 22,
    profession: "Frontend Developer"
}

const contact = {
    email: "anisa@gmail.com",
    phone: '123-456-789'
};

const combinedInfo = {...person, ...contact}

console.log(combinedInfo)

// 7. Write a program that demonstrates nested destructuring with an object that contains
// an array. Create an object with a property grades that is an array, and destructure it to
// extract the first grade.

const student = {
    name: "Student 1",
    grades: [9,10,8,7,10]
}

const {grades: [firstgrade]} = student

console.log('First Grade', firstgrade)

// 8. Create a program that demonstrates renaming during destructuring. Create an object
// representing a user with properties username and email. When destructuring, rename
// username to user and print both values.

const user = {
    username: 'user one',
    email: 'user.one@gmail.com'
}

const {username: userName} = user

console.log(userName)

