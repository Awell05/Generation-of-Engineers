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
//     .then((answer) =>{
//         switch(answer.teamMember) {
//             case "Engineer":
//             console.log('you need to trigger the prompts again');
//             break;
//             case "Intern":
//             console.log('need more code to add an intern team memeber');
//             break;
//             case "I do not want to add another member":
//             console.log("you did not want to add anyone else");
//             break;
//     }
// }).catch((err)=>{
//     console.log(err)
// });
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
