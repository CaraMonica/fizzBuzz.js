const readline = require("readline-sync");

const WORD_MAP = {
  3: "Fizz",
  5: "Buzz",
  7: "Bang",
  11: "Bong",
  13: "Fezz",
  17: "reverse",
};

const SPECIAL_RULES = [11, 13, 17];

const printWelcomeMessage = () => console.log("Welcome to FizzBuzz!");

const getNumber = message => {
  console.log(message);
  return readline.prompt();
};

const getRules = () => {
  console.log("\n Please select rules:", WORD_MAP);
  console.log("Type 'stop' when you're finished");

  let rules = [];
  while (rules.length <= Object.keys(WORD_MAP).length) {
    let rule = getNumber("");

    if (rule === "stop") {
      if (rules.length === 0) {
        console.log("\nMust have at least one rule.");
      } else {
        return rules;
      }
    } else if (rules.includes(rule)) {
      console.log("Rule already applied");
    } else if (parseInt(rule) in WORD_MAP) {
      rules.push(parseInt(rule));
    } else {
      console.log("Not a valid command.");
    }
  }
};

const isDivisible = (number, factor) => number % factor === 0;

const fizzBuzz = (sortedRules, startNumber, endNumber) => {
  for (let i = startNumber; i <= endNumber; i++) {
    let results = [];
    let rulesToApply = [...sortedRules];

    if (rulesToApply.includes(11) && isDivisible(i, 11)) {
      rulesToApply = rulesToApply.filter(n => SPECIAL_RULES.includes(n));
    }

    if (rulesToApply.includes(17) && isDivisible(i, 17)) {
      rulesToApply.pop();
      rulesToApply.reverse();
    }

    rulesToApply.forEach(ruleNumber => {
      if (isDivisible(i, ruleNumber)) {
        if (ruleNumber === 13) {
          let indexOfFirstB = results.findIndex(
            word => word.charAt(0) === "B"
          );
          let index = indexOfFirstB === -1 ? 0 : indexOfFirstB;
          results.splice(index, 0, WORD_MAP[ruleNumber]);
        } else {
          results.push(WORD_MAP[ruleNumber]);
        }
      }
    });

    console.log(results.length === 0 ? i : results.join(""));
  }
};

const runFizzBuzz = () => {
  const sortedRules = getRules().sort((a, b) => a - b);
  fizzBuzz(sortedRules, getNumber("Start number:"), getNumber("End number:"));
};

printWelcomeMessage();
runFizzBuzz();