const Employee = require('./Employee');

const engineerQs = [
            {
                type: 'input',
                message: "What is your engineer's name?",
                name: 'name',
            },
            { 
                type: 'input',
                message: "What is the engineer's id?",
                name: 'id',       
            },
            {
                type: 'input',
                message: "What is the engineer's email ?",
                name: 'email',
            },
            {
                type: 'input',
                message: "What is the engineer's github?",
                name: 'github',
            },
            {
                type: 'list',
                message: 'Would you like to add another team member?',
                name: 'teamMember',
                choices: ['Engineer', 'Intern', 'I do not want to add another member'],
            }
    ];
class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }
    getGithub(){
        return this.github;
    }
    getRole(){
        return 'Engineer'
    }
}
module.exports = {Engineer, engineerQs}
