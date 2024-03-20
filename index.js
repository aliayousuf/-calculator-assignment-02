#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { type: "number", name: "num1", message: "Enter first number." },
    { type: "number", name: "num2", message: "Enter second number." },
    {
        type: "list",
        name: "operator",
        message: "select operator to perform action.",
        choices: ["addition", "subtraction", "multiplication", "division"],
    },
]);
// conditional statement
if (answer.operator === "addition") {
    console.log(chalk.green(`your addition outcome is: ${answer.num1 + answer.num2}`));
}
else if (answer.operator === "subtraction") {
    console.log(chalk.red(`your subtraction outcome is: ${answer.num1 - answer.num2}`));
}
else if (answer.operator === "multiplication") {
    console.log(chalk.blue(`your multiplication outcome is: ${answer.num1 * answer.num2}`));
}
else if (answer.operator === "division") {
    console.log(chalk.yellow(`your division outcome is: ${answer.num1 / answer.num2}`));
}
else {
    console.log(`please enter valied operator`);
}
