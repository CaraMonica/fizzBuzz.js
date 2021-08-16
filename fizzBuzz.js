const readline = require('readline-sync');

const printWelcomeMessage = () => {
    console.log('Welcome to FizzBuzz!')
};

const getNumber = (message) => {
    console.log(`\n ${message}`);
    return readline.prompt();
}

const fizzBuzz = (startN, endN) => {
  for (let i = startN; i <= endN; i++) {
    let message = "";

    if (i % 3 === 0) {
      message += "Fizz";
    }

    if (i % 5 === 0) {
      message += "Buzz";
    }

    console.log(message === "" ? i : message);
  };
}

const runFizzBuzz = () => {
    fizzBuzz(getNumber('\nStart number:'), getNumber('\nEnd number:'))
}


printWelcomeMessage();
while (true) {
    runFizzBuzz();
}