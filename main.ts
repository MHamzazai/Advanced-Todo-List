#! /usr/bin/env node
import inquirer from "inquirer";

import chalk from "chalk";

// making the empty array where whole whole program is stored

let todos: string[] = [];

// greeting the user

console.log(chalk.underline.bgBlack.overline.cyanBright("\n\tWelcome!.To Your Todos List.With M.Hamza zai\n"));

// making the condition for loop

let condition : boolean = true;

// now making the program
async function createTodo(todos:string[]) {
do {
  let ans = await inquirer.prompt([
    {
      name: "question1",
      type: "list",
      message: "Select An Option Which You Want To perform In Yur Todos !.",
      choices: ["To Add Task", "To Delete Task", "To Update Task", "To View Todos-List", "Exit"],
    },
  ]);
  // conditional statements for different choices
  
  if (ans.question1 === "To Add Task"){
    await addTask()
  }
  else if (ans.question1 === "To Delete Task"){
    await delTask()
  }
  else if (ans.question1 === "To Update Task"){
    await updTask()
  }
   else if (ans.question1 === "To View Todos-List"){
     await viewTask()
   }else if (ans.question1 === "Exit"){
    console.log("Good Bye !.");
    
     condition = false;
   }
} while (condition);

  }

// Add function

let addTask = async() => {
  let newTask = await inquirer.prompt([
    {
      name: "task",
      type: "input",
      message: "Enter Your Task: ",
    }
  ]);
  if(newTask.task != ''){
    todos.push(newTask.task);
  console.log(`\n Your "${newTask.task}", Task Is Successfully Added In Your List !.`);
}
else{
  console.log("Please Add Something In Your List !.");
  
}
}


// To Delete Task function

let delTask = async () => {

  let taskIndex = await inquirer.prompt([
    {
      name: "task2",
      type: "list",
      message:  "Select The Task Which You Want To Delete !.",
      choices:  todos.map(item => item),
    }
  ]);
  console.log(`Your "${taskIndex.task2}", Task Is Successfully Delete From Your List!.`);
  
  let newTodo = todos.filter(val => val !== taskIndex.task2);
  todos = [...newTodo];
}

// to update task function

let updTask = async() => {
  let update = await inquirer.prompt([
    {
      name: "task3",
      type: "list",
      message: "Select Your Task To Update !.",
      choices: todos.map(item => item),
    }
  ]);
  let newTask = await inquirer.prompt([
    {
      name: "task",
      type: "input",
      message: "Enter Your New Task: ",
    },
  ]);
  let newTodo = todos.filter(val => val !== update.task3);
  todos = [...newTodo,newTask.task];
  
  console.log(`\n Your Updated Todos-List Showed Below !.`);
  todos.forEach((mode,index) => {
    console.log(`${index + 1}:  ${mode}`);
  });
  
}

  // To View todos-list function

  let viewTask = () => {
    console.log("\n Your Todos-List Showed Below !.");
    todos.forEach((mode,index) => {
      console.log(`${index + 1}:  ${mode}`);
    });
  }

  // calling the main function to ask question 

createTodo(todos);