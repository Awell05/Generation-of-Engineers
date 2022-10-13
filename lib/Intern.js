const employee = require('./Employee');
const intern = require('inquirer');

intern.prompt([
        {
            type: 'input',
            message: "What is the intern's name?",
            name: 'name',
        },
        { 
            type: 'input',
            message: "What is the intern's id?",
            name: 'id',       
        },
        {
            type: 'input',
            message: "What is the intern's email ?",
            name: 'email',
        },
        {
            type: 'input',
            message: "What is the intern's school?",
            name: 'school',
        },
        {
            type: 'list',
            message: 'Which type of team member would you like to add?',
            name: 'teamMember',
            choices: ['Engineer', 'Intern', 'I do not want to add another member'],
        }
     
])
.then((answer)=>{
        switch(answer.teamMember) {
            case "Engineer":
                console.log("need more code to add another engineer")
            break;
            case "Intern":
            console.log('you need to trigger the prompts again');
            break;
            case "I do not want to add another member":
            console.log("you did not want to add anyone else");
            break;
    }
}).catch((err)=>{
    console.log(err)
});


// class Intern extends employee {
//     constructor(name, id, email,school){
//         super(name, id, email);
//         this.school = school;
//     }
//     getSchool()
//     getRole(){
//         // return 'Intern'
//     }
// }
module.exports= intern.prompt;
// module.exports = Intern;