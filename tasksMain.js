import readLine from "readline";
import {
  addTask,
  removeTask,
  listAllTasks,
  findTask,
  updateTask,
} from "./tasks.js";

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function main() {
  // create menu
  console.log("1. Add a task ");
  console.log("2. Remove a task ");
  console.log("3. List all tasks ");
  console.log("4. Find a task ");
  console.log("5. Update a task ");
  console.log("6. Exit ");

  rl.question("Select an action: ", (action) => {
    // switch case to handle the action

    switch (action) {
      case "1":
        addTask();
        break;
      case "2":
        removeTask();
        break;
      case "3":
        listAllTasks();
        break;
      case "4":
        findTask();
        break;
      case "5":
        updateTask();
        break;
      case "6":
        rl.close();
        break;
      default:
        console.log("Invalid action");
        break;
    }

    rl.close();
  });
}

main();
