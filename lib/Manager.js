
const Employee = require('./Employee');
const managerQs = [
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
        choices: ['Engineer', 'Intern'],
    }
];
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole(){
        return 'Manager'
    }
}

module.exports = {managerQs, Manager}