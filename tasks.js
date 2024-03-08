import chalk from "chalk";

function addTask() {
  console.log(chalk.green("Adding a task"));
}

function removeTask() {
  console.log(chalk.red("Removing a task"));
}

function listAllTasks() {
  console.log(chalk.blue("Listing all tasks"));
}

function findTask() {
  console.log(chalk.yellow("Finding a task"));
}

function updateTask() {
  console.log(chalk.magenta("Updating a task"));
}

export { addTask, removeTask, listAllTasks, findTask, updateTask };
