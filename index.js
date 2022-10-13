const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const manager = require('./lib/Manager');

inquirer
.prompt ([
    {
        type: 'input',
        message: "What is the team manager's name?",
        name: 'name',
    },
    { 
        type: 'input',
        message: "What is the team manager's id?",
        name: 'id',       
    },
    {
        type: 'input',
        message: "What is the team manager's email ?",
        name: 'email',
    },
    {
        type: 'input',
        message: "What is the team manager's office number?",
        name: 'number',
    },
    {
        type: 'list',
        message: 'Which type of team member would you like to add?',
        name: 'teamMember',
        choices: ['Engineer', 'Intern', 'I do not want to add another member'],
    }

])
.then((answer)=>{
    // console.log(answer);
    switch(answer.teamMember) {
        case "Engineer":
        const engineer = require('./lib/Engineer');
        return engineer;
        break;
        case "Intern":
        console.log('you have chosen intern team memeber');
        break;
        case "I do not want to add another member":
        console.log("you did not want to add anyone else");
        const employeeInfo = new Employee(answer.name, answer.id, answer.email);
        console.log(employeeInfo);
        break;
    }
}).catch((err)=>{
    console.log(err)
});

// how do I trigger the prompts again