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

//------------------- Promises, Async/Await ----------------------------

// 1. Write a function named createPromise that returns a promise that resolves with the
// value "Promise resolved!" after 2 seconds.

// function createPromise(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Promise resolved");
//         },2000)
//     })
// }

// createPromise().then((message) => {
//     console.log(message)
// })

// 2. Modify the previous assignment to create a function named createRejectionPromise
// that returns a promise that rejects with the value "Promise rejected!" after 2 seconds.


function createRejectionPromise(){
    return new Promise((_,reject) => {
        setTimeout(() => {
            reject("Promise rejected");
        },2000)
    })
}

createRejectionPromise().then((message) => {
    console.log(message)
}).catch((error) => {
    console.error("Error:", error);
  });


// 3. Create a function named processData that takes a number, returns a promise that
// resolves with that number squared after 1 second, and then chain it to multiply the
// result by 2.

function processData(number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(number * number); 
    }, 1000);
  });
}

processData(5)
  .then((squared) => {
    return squared * 2;
  })
  .then((finalResult) => {
    console.log(finalResult); 
  })
  .catch((err) => {
    console.error("Error:", err);
  });

// 4. Modify the createRejectionPromise to demonstrate error handling using try...catch
// within an async function.

async function handleRejection(){
    try {
        const result = await createRejectionPromise()
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

handleRejection()

// 5. Create an async function that sequentially calls three promises, each resolving after a
// different delay. Log the output of each promise in the order they are resolved.

function promiseOne() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("First resolved after 1 second"), 1000);
  });
}
function promiseTwo() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Second resolved after 2 seconds"), 2000);
  });
}

function promiseThree() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Third resolved after 3 seconds"), 3000);
  });
}

async function allPromises() {
  const first = await promiseOne();
  console.log(first);

  const second = await promiseTwo();
  console.log(second); 

  const third = await promiseThree();
  console.log(third); 
}

allPromises()

// 6. Create a function that returns a promise that resolves if a condition is met and rejects
// with a timeout error if it takes too long. Use this in an async function
function checkConditionWithTimeout(conditionFn, timeout) {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject("Timeout error");
    }, timeout);

    conditionFn()
      .then((result) => {
        clearTimeout(timeoutId);
        resolve(result);
      })
      .catch((err) => {
        clearTimeout(timeoutId);
        reject(err);
      });
  });
}


async function runCheck() {
  const conditionFn = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Condition met!");
      }, 1500); 
    });
  };

  try {
    const result = await checkConditionWithTimeout(conditionFn, 2000);
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

runCheck();


