const logBetween = (lowNum, highNum) => {
  // Define a function logBetween(lowNum, highNum) that will return a new array with every number from lowNum to highNum,
  // inclusive. Inclusive means that the range includes lowNum and highNum.
  // Your code goes here
  let newArray = [];
  for (let i = lowNum; i <= highNum; i++) {
    newArray.push(i);
  }
  return newArray;
};

console.log(logBetween(2, 6));

const printFives = (max) => {
  // Write a function printFives(max) that return a new array with the multiples of 5 that are less than max.
  // Your code goes here
  let newArray = [];
  for (let i = 0; i < max; i++) {
    if (i % 5 === 0) {
      newArray.push(i);
    }
  }
  return newArray;
};

console.log(printFives(30));

const logBetweenStepper = (min, max, step) => {
  // Write a function logBetweenStepper(min, max, step) that takes in 3 numbers as parameters.
  // The function should print out numbers between min and max at step intervals.
  // See the following examples.
  // Hint: this function only needs to print using console.log it does not need to return.
  // Your code goes here
};

module.exports = {
  logBetween,
  printFives,
  logBetweenStepper,
};
