import chalk from "chalk";
import fs from "fs";

function addTask() {
  // add task to json file
  fs.readFile("tasks.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const tasks = JSON.parse(data);

    // il faut récupérer les données de la requête depuis le body
    tasks.push({ name: "New Task" });

    fs.writeFile("tasks.json", tasks, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Task added");
    });
  });
}

function removeTask() {
  console.log(chalk.red("Removing a task"));
}

function listAllTasks() {
  console.log(chalk.blue("Listing all tasks"));
  fs.readFile("tasks.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const tasks = JSON.parse(data);
    // retroune les données dans la réponse de la requete
  });
}

function findTask() {
  console.log(chalk.yellow("Finding a task"));
  fs.readFile("tasks.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const tasks = JSON.parse(data);
    // filtrer les tasks grace à l'id reçu en paramètre de la requete
    // retroune les données dans la réponse de la requete
  });
}

function updateTask() {
  console.log(chalk.magenta("Updating a task"));
}

export { addTask, removeTask, listAllTasks, findTask, updateTask };
