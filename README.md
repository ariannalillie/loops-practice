# Learn JavaScript Functions

When you finish this lesson, you should be able to:

* Describe what a function in JavaScript is
* Demonstrate how to invoke a function
* Write a function using function declaration
* Use the `return` keyword to return a value from a function

## How to write a function

A function consists of the following three elements:

* The name of the function.
* A list of parameters to the function, enclosed in parentheses (( )).
* The code to be run when this function is run, enclosed in curly braces ({ }).

```JavaScript
const myFunction = (parameter1, parameter2) => {
    // some code that makes this thing do a thing
}
```

## Printing to the console

You can print things to the console using console.log("Message to print").

```JavaScript
console.log("Hello my name is Zach and I am learning to code! I am so grateful for this lesson, I would change my last name for Ari")

// Prints: Hello my name is Zach and I am learning to code! 
// I am so grateful for this lesson, I would change my last name for Ari
```

## Return

Returning a value
Now that we know how functions are declared and invoked let's talk about the inside of the function. We'll start with a statement: Every function in JavaScript returns undefined unless otherwise specified.

Now what does that mean? We'll start with a simple example:

```JavaScript
function sayNumber(number) {
  console.log(number);
}

sayNumber(1);  // Prints 1 and returns undefined
```

## How to complete these exercises

* Navigate to the `prolems.js` file
* Read the prompt in the function skeleton
* Write your solution where your code goes
* Run `npm run test` to check your answer
* PRO TIP: if you get stuck ask Ari how you can use console.logs to debug your code
