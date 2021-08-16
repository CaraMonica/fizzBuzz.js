const readline = require("readline-sync");

const printWelcomeMessage = () => console.log("Welcome to FizzBuzz!");

const getNumber = message => {
  console.log(`\n ${message}`);
  return readline.prompt();
};

const isDivisible = (number, factor) => number % factor === 0;

const fizzBuzz = (startNumber, endNumber) => {
  for (let i = startNumber; i <= endNumber; i++) {
    let result = [];
    if (isDivisible(i, 3)) result.push("Fizz");
    if (isDivisible(i, 13)) result.push("Fezz");
    if (isDivisible(i, 11)) {
      console.log(result.length === 2 ? "FezzBong" : "Bong");
      continue;
    }
    if (isDivisible(i, 5)) result.push("Buzz");
    if (isDivisible(i, 7)) result.push("Bang");
    if (isDivisible(i, 17)) result.reverse();

    console.log(result.length === 0 ? i : result.join(""));
  }
};

const runFizzBuzz = () =>
  fizzBuzz(getNumber("Start number:"), getNumber("End number:"));

printWelcomeMessage();
runFizzBuzz();
