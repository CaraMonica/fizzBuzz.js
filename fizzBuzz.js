const readline = require("readline-sync");

const printWelcomeMessage = () => console.log("Welcome to FizzBuzz!");

const getNumber = (message) => {
  console.log(`\n ${message}`);
  return readline.prompt();
};

const fizzBuzz = (startNumber, endNumber) => {
  console.log("\n");
  for (let i = startNumber; i <= endNumber; i++) {
    let result = "";
    if (i % 3 === 0) result += "Fizz";
    if (i % 5 === 0) result += "Buzz";

    console.log(result === "" ? i : result);
  }
};

const runFizzBuzz = () =>
  fizzBuzz(getNumber("Start number:"), getNumber("End number:"));

printWelcomeMessage();
runFizzBuzz();
