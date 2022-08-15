# Javascript Loops Practice

Try using both for loops and while loops for this coding exercise. 

## While Loops

One of the simplest loops in JavaScript is the while loop. As with all loops, the while loop will execute a block of code as long as a specified condition is true. The while loop starts with the keyword while then states a condition in parentheses. The code in the following braces will be run as long as the above condition is met.

```JavaScript
while (condition) {
  // code block to be executed
}
```

In the following example, the code in the loop will run, over and over again, as long as a variable (index) is less than 10:

```JavaScript
let index = 0;

// this is the condition that will be checked every time this loop is run
while (index < 10) {
  console.log("The number is " + index);
  // this is common shorthand for index = index + 1
  index++;
}
```

The most important thing to remember when writing any loop is to always be working towards your condition. In the example above if we did not increment the index variable by 1 each time the loop ran then we would be stuck with what we call an infinite loop:

```JavaScript
let index = 0;

// this is an infinite loop because our condition will never be met
while (index < 10) {
  console.log("The number is " + index);
  // if we do not increase the index then our condition is never met
  // Meaning this will run forever!
}
```

The above code will run until whatever interpreter you are using crashes.

## For Loops

A for loop can be broken down into three sections:

1. The initial expression which will be run once at the beginning of the loop.
2. The condition which is checked every time the loop is run. If this condition is true the loop will run again. If this condition is false the loop will end.
3. The loopEnd expression which will be run at the end of the loop before checking the condition again.

`for (<initial expression>;<condition>;<loopEnd expression>)`

The for loop is usually used with an integer counter:

```JavaScript
for (let index = 0; index < 10; index += 1) {
  // the code inside this block will run 10 times
}
```

While the loopEnd expression is normally used to increase a variable by one per loop iteration, it can contain any statement, such as one that decreases the counter or increases it by 2.

You can use the for loop to iterate through all kinds of things. Check out the example below for how to iterate through a string:

```JavaScript
let testString = "testing";

// We can use the testString's length as our condition!
// Since we know the testString's index starts at 0
// and our index starts at 0 we can access each letter:
for (let index = 0; index < testString.length; index += 1) {
  let letter = testString[index];
  console.log(letter);
}
```

## How to complete these exercises

* Navigate to the `prolems.js` file
* Read the prompt in the function skeleton
* Write your solution where your code goes
* Run `npm run test` to check your answer
* PRO TIP: if you get stuck ask Ari how you can use console.logs to debug your code
