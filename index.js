const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const util = require('util');


const OUTPUT_DIR = path.resolve(__dirname, 'dist');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

const render = require('./src/page-template.js');
const Employee = require('./lib/Employee');

const questions = [
  { name: 'name', message: "What's the employee's name" },
  { name: 'id', message: "What's the employee's id" },
  { name: 'email', message: "What's the employee's email" },
  {
    type: 'list',
    name: 'role',
    message: "What's the employee's role",
    choices: ['Manager', 'Engineer', 'Intern'],
  },
];

const questionForManager = [
  { name: 'officeNumber', message: "What's the manager's office number" },
];

const questionForEngineer = [
  { name: 'github', message: "What's the Engineer's github" },
];

const questionForIntern = [
  { name: 'school', message: "What's the Intern's school" },
];

const confirm = [
  {
    type: 'confirm',
    name: 'adding',
    message: 'Do you want to input more employee information',
  },
];

const init = async () => {
  const employees = [];
  let addMore = true;

  while (addMore) {
  
    const { name, id, email, role } = await inquirer.prompt(questions);

    if (role === 'Manager') {
      const { officeNumber } = await inquirer.prompt(questionForManager);

   
      employees.push(new Manager(name, id, email, officeNumber));
    } else if (role === 'Engineer') {
      const { github } = await inquirer.prompt(questionForEngineer);

  
      employees.push(new Engineer(name, id, email, github));
    } else {
      const { school } = await inquirer.prompt(questionForIntern);

     
      employees.push(new Intern(name, id, email, school));
    }

    
    const { adding } = await inquirer.prompt(confirm);

    addMore = adding;
  }

  const html = render(employees);

};

init();
  




