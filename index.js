const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const util = require('util');
const { writeFile, copyFile } = require('./utils/save-html.js');


const generatePage = require('./src/page-template.js');
const Employee = require('./lib/Employee');


const questions = () => {
  const employees = [];
  return inquirer.prompt([
    {
      type:'input',
      name: 'name',
      message: "What's the employee's name?",
      // validate: nameInput => {
      //   if(nameInput) {
      //     return true;
      //   }
      //   else {
      //     console.log("Please enter your employee's name:");
      //     return false;
      //   }
      // }
    },
    {
      type:'input',
      name: 'id',
      message: "What's the employee's ID?",
      // validate: idInput => {
      //   if(idInput) {
      //     return true;
      //   }
      //   else {
      //     console.log("Please enter your employee's ID:");
      //     return false;
      //   }
      // }
    },
    {
      type:'input',
      name: 'email',
      message: "What's the employee's email?",
      // validate: emailInput => {
      //   if(emailInput) {
      //     return true;
      //   }
      //   else {
      //     console.log("Please enter your employee's email:");
      //     return false;
      //   }
      // }
    },
    { 
      type:'list',
      name: 'role',
      message: "What's the employee's role?",
      choices: ['Manager', 'Engineer', 'Intern']
    },
  ])
  .then(employeeData => {
    employees.push(employeeData);
    if(employeeData.role === 'Manager') {
      return inquirer.prompt(questionForManager);
    }
    else if(employeeData.role === 'Engineer'){
      return inquirer.prompt(questionForEngineer);
    }
    else if(employeeData.role === 'Intern'){
      return inquirer.prompt(questionForIntern);
    }
    else {
      return employeeData;
    }
  })
}

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

const writeToFile = (fileName, data) => {

  fs.writeFile(fileName, generatePage(data), function(err) {
    
    if(err) {
      rejects(err)
    }
    else {
      console.log("HTML created!!");
    }
  })

}


questions()
  .then(generateWildCard)
  .then(function(data) {
    generatePage(data);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });


