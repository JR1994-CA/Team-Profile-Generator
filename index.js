const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');


const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "team.html");



const render = require('./lib/htmlRenderer');
const Employee = require('./lib/Employee');

const employees = [];

function questions() {
  
  inquirer.prompt([
    {
      type:'input',
      name: 'name',
      message: "What's the employee's name?",
     
    },
    {
      type:'input',
      name: 'id',
      message: "What's the employee's ID?",
      
    },
    {
      type:'input',
      name: 'email',
      message: "What's the employee's email?",
   
    },
    { 
      type:'list',
      name: 'role',
      message: "What's the employee's role?",
      choices: ['Manager', 'Engineer', 'Intern']
    },
  ])
  .then(function(answers){
    if(answers.role === 'Engineer') {
      questionsEng(answers);
    } else if (answers.role === 'Manager') {
      questionsMan(answers);
    }
    else {
      questionsInt(answers);
    }
  })
}

function questionsEng(prevAnswers) {
  inquirer.prompt([
    {
      type: "input",
      message: "What's their Github?",
      name: 'github',
    },
    {
      type: "confirm",
      message: "Would you like to add another employee?",
      name: "adding",
    }

  ])
  .then(function(answers) {
    const newEngineer = new Engineer(prevAnswers.name, prevAnswers.id, prevAnswers.email, answers.github);
    employees.push(newEngineer);
    if(answers.adding === true){
      questions()
    }
    else {
      buildTeam();
      console.log("rendered!");
    }
  })

}
function questionsMan(prevAnswers) {
  inquirer.prompt([
    {
      type: "input",
      message: "What's their office number?",
      name: 'officeNumber',
    },
    {
      type: "confirm",
      message: "Would you like to add another employee?",
      name: "adding",
    }

  ])
  .then(function(answers) {
    const newManager = new Manager(prevAnswers.name, prevAnswers.id, prevAnswers.email, answers.officeNumber);
    employees.push(newManager);
    if(answers.adding === true){
      questions()
    }
    else {
      buildTeam();
      console.log("rendered!");
    }
  })

}
function questionsInt(prevAnswers) {
  inquirer.prompt([
    {
      type: "input",
      message: "Where do they go to school?",
      name: 'school',
    },
    {
      type: "confirm",
      message: "Would you like to add another employee?",
      name: "adding",
    }

  ])
  .then(function(answers) {
    const newIntern = new Intern(prevAnswers.name, prevAnswers.id, prevAnswers.email, answers.school);
    employees.push(newIntern);
    if(answers.adding === true){
      questions()
    }
    else {
      buildTeam();
      console.log("rendered!");
    }
  })

}

function buildTeam() {
  if(!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR)
  }
  fs.writeFileSync(outputPath, render(employees), "utf-8");
}

questions();

